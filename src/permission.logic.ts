import { Injectable } from '@nestjs/common';
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
} from './permission.interfaces';
import { PermissionService } from './permission.service';

@Injectable()
export class PermissionLogic {
  constructor(private service: PermissionService) {}

  async createOne(input: PermissionCreateOneInput): Promise<Permission> {
    return await this.service.createOne(input);
  }

  async createMany(input: PermissionCreateManyInput): Promise<Permissions> {
    return await this.service.createMany(input);
  }

  async findOne(input: PermissionFindOneInput): Promise<Permission | void> {
    return await this.service.findOne(input);
  }

  async findWhere(input: PermissionFindWhereInput): Promise<Permission | void> {
    return await this.service.findWhere(input);
  }

  async findWhereMany(
    input: PermissionFindWhereManyInput,
  ): Promise<Permissions> {
    return await this.service.findWhereMany(input);
  }

  async findWhereOrStar(
    input: PermissionFindWhereOrStarInput,
  ): Promise<Permission | void> {
    return await this.service.findWhereOrStar(input);
  }

  async validateOne(
    input: PermissionValidateOneInput,
  ): Promise<PermissionValidateOneResult> {
    return await this.service.validateOne(input);
  }

  async removeOne(input: PermissionRemoveOneInput): Promise<void> {
    await this.service.removeOne(input);
  }

  async removeWhere(
    input: PermissionRemoveWhereInput,
  ): Promise<Permission | void> {
    return await this.service.removeWhere(input);
  }

  async removeWhereMany(input: PermissionRemoveWhereManyInput): Promise<void> {
    return await this.service.removeWhereMany(input);
  }

  async findByPermitted(
    input: PermissionFindByPermittedInput,
  ): Promise<Permission[]> {
    return await this.service.findByPermitted(input);
  }

  async findByEntity(
    input: PermissionFindByEntityInput,
  ): Promise<Permission[]> {
    return await this.service.findByEntity(input);
  }

  async findAllActions(
    input: PermissionFindAllActionsInput,
  ): Promise<Permission[]> {
    return await this.service.findAllActions(input);
  }

  async removeAllActions(
    input: PermissionRemoveAllActionsInput,
  ): Promise<void> {
    await this.service.removeAllActions(input);
  }
}
