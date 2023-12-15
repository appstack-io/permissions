import { v4 as uuid } from 'uuid';
import { setupArangoDb } from '@appstack-io/tests';
import { Test, TestingModule } from '@nestjs/testing';
import { PermissionModule } from '../permission.module';
import { PermissionService } from '../permission.service';

describe('Permission', () => {
  let service: PermissionService;

  beforeAll(async () => {
    await setupArangoDb();
    const module: TestingModule = await Test.createTestingModule({
      imports: [PermissionModule],
    }).compile();
    service = module.get<PermissionService>(PermissionService);
  });

  afterAll(async () => {});

  test('CreateOne + FindOne', async () => {
    // Arrange
    const input = {
      entity: uuid(),
      entityId: uuid(),
      permittedEntity: uuid(),
      permittedEntityId: uuid(),
      action: '*',
    };

    // Act
    const created = await service.createOne(input);
    const found = await service.findOne({ id: created.id });

    // Assert
    expect(found).toEqual(created);
  });

  test('FindWhere', async () => {
    // Arrange
    const input = {
      entity: uuid(),
      entityId: uuid(),
      permittedEntity: uuid(),
      permittedEntityId: uuid(),
      action: '*',
    };

    // Act
    const created = await service.createOne(input);
    const found = await service.findWhere(input);

    // Assert
    expect(found).toEqual(created);
  });

  test('FindWhereMany', async () => {
    // Arrange
    const input = {
      entity: uuid(),
      entityId: uuid(),
      permittedEntity: uuid(),
      permittedEntityId: uuid(),
      action: '*',
    };
    const created = await service.createOne(input);

    // Act
    const found = await service.findWhereMany({
      entity: input.entity,
      entityId: input.entityId,
      permittedEntity: input.permittedEntity,
      permittedEntityIds: [input.permittedEntityId],
      action: input.action,
    });

    // Assert
    expect(found).toEqual({ permissions: [created] });
  });

  test('RemoveOne', async () => {
    // Arrange
    const input = {
      entity: uuid(),
      entityId: uuid(),
      permittedEntity: uuid(),
      permittedEntityId: uuid(),
      action: '*',
    };
    const created = await service.createOne(input);

    // Act
    await service.removeOne({ id: created.id });

    // Assert
    expect(await service.findOne({ id: created.id })).toBeUndefined();
  });

  test('RemoveWhere', async () => {
    // Arrange
    const input = {
      entity: uuid(),
      entityId: uuid(),
      permittedEntity: uuid(),
      permittedEntityId: uuid(),
      action: '*',
    };
    await service.createOne(input);

    // Act
    await service.removeWhere(input);

    // Assert
    expect(await service.findWhere(input)).toBeUndefined();
  });

  test('RemoveWhereMany', async () => {
    // Arrange
    const input = {
      entity: uuid(),
      entityId: uuid(),
      permittedEntity: uuid(),
      permittedEntityId: uuid(),
      action: '*',
    };
    await service.createOne(input);

    // Act
    await service.removeWhereMany({
      entity: input.entity,
      entityId: input.entityId,
      permittedEntity: input.permittedEntity,
      permittedEntityIds: [input.permittedEntityId],
      action: input.action,
    });

    // Assert
    expect(await service.findWhere(input)).toBeUndefined();
  });

  test('FindByPermitted', async () => {
    // Arrange
    const input = {
      entity: uuid(),
      entityId: uuid(),
      permittedEntity: uuid(),
      permittedEntityId: uuid(),
      action: '*',
    };
    for (let i = 0; i < 7; i++) {
      await service.createOne({
        ...input,
        entity: uuid(),
        entityId: uuid(),
      });
    }

    // Act
    const all = await service.findByPermitted({
      filter: {
        permittedEntity: input.permittedEntity,
        permittedEntityId: input.permittedEntityId,
      },
      opts: { limit: 10, offset: 0 },
    });

    // Assert
    expect(all.length).toEqual(7);
  });
});
