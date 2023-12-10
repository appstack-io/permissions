import { Controller, UseInterceptors } from '@nestjs/common';
import { GrpcMethod, Payload } from '@nestjs/microservices';
import {
  Permission,
  PermissionCreateManyInput,
  PermissionCreateOneInput,
  PermissionFindAllActionsInput,
  PermissionFindByEntityInput,
  PermissionFindByEntityResult,
  PermissionFindByPermittedInput,
  PermissionFindByPermittedResult,
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
} from '../../proto/interfaces';
import { PermissionLogic } from './permission.logic';
import { RpcAuthAssertInternalInterceptor } from '@appstack-io/authnz';
import {
  RpcNotFoundException,
  RpcPermissionDeniedException,
} from '@appstack-io/exceptions';

@Controller()
export class PermissionController {
  constructor(private logic: PermissionLogic) {}

  @UseInterceptors(RpcAuthAssertInternalInterceptor)
  @GrpcMethod('PermissionService', 'FindOne')
  async findOne(@Payload() input: PermissionFindOneInput): Promise<Permission> {
    const found = await this.logic.findOne(input);
    if (!found) {
      throw new RpcNotFoundException();
    }
    return found;
  }

  @UseInterceptors(RpcAuthAssertInternalInterceptor)
  @GrpcMethod('PermissionService', 'FindWhere')
  async findWhere(
    @Payload() input: PermissionFindWhereInput,
  ): Promise<Permission> {
    const found = await this.logic.findWhere(input);
    if (!found) {
      throw new RpcNotFoundException();
    }
    return found;
  }

  @UseInterceptors(RpcAuthAssertInternalInterceptor)
  @GrpcMethod('PermissionService', 'FindWhereMany')
  async findWhereMany(
    @Payload() input: PermissionFindWhereManyInput,
  ): Promise<Permissions> {
    const found = await this.logic.findWhereMany(input);
    if (!found) {
      throw new RpcNotFoundException();
    }
    return found;
  }

  @UseInterceptors(RpcAuthAssertInternalInterceptor)
  @GrpcMethod('PermissionService', 'FindWhereOrStar')
  async findWhereOrStar(
    @Payload() input: PermissionFindWhereOrStarInput,
  ): Promise<Permission> {
    const found = await this.logic.findWhereOrStar(input);
    if (!found) {
      throw new RpcNotFoundException();
    }
    return found;
  }

  @UseInterceptors(RpcAuthAssertInternalInterceptor)
  @GrpcMethod('PermissionService', 'ValidateOne')
  async validateOne(
    @Payload() input: PermissionValidateOneInput,
  ): Promise<PermissionValidateOneResult> {
    const { validated } = await this.logic.validateOne(input);
    if (!validated) throw new RpcPermissionDeniedException();
    return { validated };
  }

  @UseInterceptors(RpcAuthAssertInternalInterceptor)
  @GrpcMethod('PermissionService', 'CreateOne')
  async createOne(
    @Payload() input: PermissionCreateOneInput,
  ): Promise<Permission> {
    return await this.logic.createOne(input);
  }

  @UseInterceptors(RpcAuthAssertInternalInterceptor)
  @GrpcMethod('PermissionService', 'CreateMany')
  async createMany(
    @Payload() input: PermissionCreateManyInput,
  ): Promise<Permissions> {
    return await this.logic.createMany(input);
  }

  @UseInterceptors(RpcAuthAssertInternalInterceptor)
  @GrpcMethod('PermissionService', 'RemoveOne')
  async removeOne(@Payload() input: PermissionRemoveOneInput): Promise<void> {
    await this.logic.removeOne(input);
  }

  @UseInterceptors(RpcAuthAssertInternalInterceptor)
  @GrpcMethod('PermissionService', 'RemoveWhere')
  async removeWhere(
    @Payload() input: PermissionRemoveWhereInput,
  ): Promise<void> {
    await this.logic.removeWhere(input);
  }

  @UseInterceptors(RpcAuthAssertInternalInterceptor)
  @GrpcMethod('PermissionService', 'RemoveWhereMany')
  async removeWhereMany(
    @Payload() input: PermissionRemoveWhereManyInput,
  ): Promise<void> {
    await this.logic.removeWhereMany(input);
  }

  @UseInterceptors(RpcAuthAssertInternalInterceptor)
  @GrpcMethod('PermissionService', 'FindByPermitted')
  async findByPermitted(
    @Payload() input: PermissionFindByPermittedInput,
  ): Promise<PermissionFindByPermittedResult> {
    const results = await this.logic.findByPermitted(input);
    return {
      meta: { offset: (input.opts.offset || 0) + results.length },
      results,
    };
  }

  @UseInterceptors(RpcAuthAssertInternalInterceptor)
  @GrpcMethod('PermissionService', 'FindByEntity')
  async findByEntity(
    @Payload() input: PermissionFindByEntityInput,
  ): Promise<PermissionFindByEntityResult> {
    const results = await this.logic.findByEntity(input);
    return {
      meta: { offset: (input.opts.offset || 0) + results.length },
      results,
    };
  }

  @UseInterceptors(RpcAuthAssertInternalInterceptor)
  @GrpcMethod('PermissionService', 'FindAllActions')
  async findAllActions(
    @Payload() input: PermissionFindAllActionsInput,
  ): Promise<PermissionFindByPermittedResult> {
    const results = await this.logic.findByPermitted(input);
    return {
      meta: { offset: (input.opts.offset || 0) + results.length },
      results,
    };
  }

  @UseInterceptors(RpcAuthAssertInternalInterceptor)
  @GrpcMethod('PermissionService', 'RemoveAllActions')
  async removeAllActions(
    @Payload() input: PermissionRemoveAllActionsInput,
  ): Promise<void> {
    await this.logic.removeAllActions(input);
  }
}
