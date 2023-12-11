import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ArangodbService } from '@appstack-io/arangodb';
import { DocumentCollection } from 'arangojs/collection';
import {
  Permission,
  PermissionCreateManyInput,
  PermissionCreateOneInput,
  PermissionFindAllActionsInput,
  PermissionFindByEntityInput,
  PermissionFindByPermittedInput,
  PermissionFindOneInput,
  PermissionFindWhereInput,
  PermissionFindWhereManyInput,
  PermissionFindWhereOrStarInput,
  PermissionRemoveAllActionsInput,
  PermissionRemoveOneInput,
  PermissionRemoveWhereInput,
  PermissionRemoveWhereManyInput,
  Permissions,
  PermissionValidateOneInput,
  PermissionValidateOneResult,
} from './combined.interfaces';

@Injectable()
export class PermissionService implements OnModuleInit {
  private logger: Logger = new Logger(PermissionService.name);
  collection: DocumentCollection;

  constructor(private arangodb: ArangodbService) {
    this.collection = this.arangodb.db.collection('permission');
  }

  async createOne(input: PermissionCreateOneInput): Promise<Permission> {
    return this.arangodb.utils.format(
      (
        await this.collection.save(this.arangodb.utils.addTs(input), {
          returnNew: true,
        })
      ).new,
    );
  }

  async createMany(input: PermissionCreateManyInput): Promise<Permissions> {
    const permissions = await Promise.all(
      input.permittedEntityIds.map((permittedEntityId) => {
        return this.createOne({ ...input, permittedEntityId });
      }),
    );
    return { permissions };
  }

  async findOne(input: PermissionFindOneInput): Promise<Permission | void> {
    try {
      return this.arangodb.utils.format(
        await this.collection.document(input.id),
      );
    } catch (e) {
      if (e.message === 'document not found') {
        return;
      }
      throw e;
    }
  }

  async findWhere(input: PermissionFindWhereInput): Promise<Permission | void> {
    const query = `
      FOR doc IN permission
      FILTER doc.entity == @entity 
      AND doc.entityId == @entityId
      AND doc.permittedEntity == @permittedEntity
      AND doc.permittedEntityId == @permittedEntityId
      AND doc.action == @action
      LIMIT 1
      RETURN doc
    `;
    const vars = {
      ...input,
    };
    const cursor = await this.arangodb.db.query(query, vars);
    const result = await cursor.all();
    if (result?.length > 0) {
      return this.arangodb.utils.format(result[0]);
    }
  }

  async findWhereMany(
    input: PermissionFindWhereManyInput,
  ): Promise<Permissions> {
    const query = `
      FOR doc IN permission
      FILTER doc.entity == @entity 
      AND doc.entityId == @entityId
      AND doc.permittedEntity == @permittedEntity
      AND doc.permittedEntityId IN @permittedEntityIds
      AND doc.action == @action
      RETURN doc
    `;
    const vars = {
      ...input,
    };
    const cursor = await this.arangodb.db.query(query, vars);
    const results = await cursor.all();
    if (results?.length > 0) {
      const permissions = results.map((result) =>
        this.arangodb.utils.format(result),
      );
      return { permissions };
    }
    return { permissions: [] };
  }

  async findWhereOrStar(
    input: PermissionFindWhereOrStarInput,
  ): Promise<Permission | void> {
    const query = `
      FOR doc IN permission
      FILTER doc.entity == @entity 
      AND (doc.entityId == @entityId)
      AND doc.permittedEntity == @permittedEntity
      AND (doc.permittedEntityId == @permittedEntityId OR doc.permittedEntityId == 'public')
      AND (doc.action == @action OR doc.action == '*')
      LIMIT 1
      RETURN doc
    `;
    const vars = {
      ...input,
    };
    const cursor = await this.arangodb.db.query(query, vars);
    const result = await cursor.all();
    if (result?.length > 0) {
      return this.arangodb.utils.format(result[0]);
    }
  }

  async validateOne(
    input: PermissionValidateOneInput,
  ): Promise<PermissionValidateOneResult> {
    const { permitted, entity, entityId, action } = input;
    const results = await Promise.all(
      permitted.map(async (p) => {
        const { permittedEntity, permittedEntityId } = p;
        const found = await this.findWhereOrStar({
          entity,
          entityId,
          action,
          permittedEntity,
          permittedEntityId,
        });
        return Boolean(found);
      }),
    );
    const validated = results.some((r) => r);
    return { validated };
  }

  async removeOne(input: PermissionRemoveOneInput): Promise<void> {
    await this.collection.remove(input.id);
  }

  async removeWhere(input: PermissionRemoveWhereInput): Promise<void> {
    const query = `
      FOR doc IN permission
      FILTER doc.entity == @entity 
      AND doc.entityId == @entityId
      AND doc.permittedEntity == @permittedEntity
      AND doc.permittedEntityId == @permittedEntityId
      AND doc.action == @action
      LIMIT 1
      REMOVE doc IN permission
    `;
    const vars = {
      ...input,
    };
    await this.arangodb.db.query(query, vars);
  }

  async removeWhereMany(input: PermissionRemoveWhereManyInput): Promise<void> {
    const query = `
      FOR doc IN permission
      FILTER doc.entity == @entity 
      AND doc.entityId == @entityId
      AND doc.permittedEntity == @permittedEntity
      AND doc.permittedEntityId IN @permittedEntityIds
      AND doc.action == @action
      REMOVE doc IN permission
    `;
    const vars = {
      ...input,
    };
    await this.arangodb.db.query(query, vars);
  }

  async findByPermitted(
    input: PermissionFindByPermittedInput,
  ): Promise<Permission[]> {
    const { filter, opts } = input;
    const query = `
      FOR doc IN permission
      FILTER doc.permittedEntity == @permittedEntity
      AND doc.permittedEntityId == @permittedEntityId
      LIMIT @offset, @limit
      RETURN doc
    `;
    const vars = {
      ...filter,
      offset: Number(opts.offset) || 0,
      limit: Number(opts.limit) || 0,
    };
    const cursor = await this.arangodb.db.query(query, vars);
    return (await cursor.all()).map(this.arangodb.utils.format);
  }

  async findByEntity(
    input: PermissionFindByEntityInput,
  ): Promise<Permission[]> {
    const { filter, opts } = input;
    const query = `
      FOR doc IN permission
      FILTER doc.entity == @entity
      AND doc.entityId == @entityId
      AND doc.action == @action
      LIMIT @offset, @limit
      RETURN doc
    `;
    const vars = {
      ...filter,
      offset: Number(opts.offset) || 0,
      limit: Number(opts.limit) || 0,
    };
    const cursor = await this.arangodb.db.query(query, vars);
    return (await cursor.all()).map(this.arangodb.utils.format);
  }

  async findAllActions(
    input: PermissionFindAllActionsInput,
  ): Promise<Permission[]> {
    const { filter, opts } = input;
    const query = `
      FOR doc IN permission
      FILTER doc.permittedEntity == @permittedEntity
      AND doc.permittedEntityId == @permittedEntityId
      AND doc.entityId == @entityId
      AND doc.entity == @entity
      LIMIT @offset, @limit
      RETURN doc
    `;
    const vars = {
      ...filter,
      offset: Number(opts.offset) || 0,
      limit: Number(opts.limit) || 0,
    };
    const cursor = await this.arangodb.db.query(query, vars);
    return (await cursor.all()).map(this.arangodb.utils.format);
  }

  async removeAllActions(
    input: PermissionRemoveAllActionsInput,
  ): Promise<void> {
    const found = await this.findAllActions({
      ...input,
      opts: { limit: 9999999, offset: 0 },
    });
    if (found) {
      await this.collection.removeAll(found.map((item) => item.id));
    }
  }

  async onModuleInit(): Promise<void> {
    await this.arangodb.utils.tryDdl(
      () => this.arangodb.db.createCollection('permission', {}),
      () =>
        this.arangodb.db.collection('permission').ensureIndex({
          name: 'idx-permission-v0',
          type: 'persistent',
          fields: [
            'entity',
            'entityId',
            'permittedEntity',
            'permittedEntityId',
            'action',
          ],
        }),
    );
  }
}
