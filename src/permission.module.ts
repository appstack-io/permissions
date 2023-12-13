import { Global, Module } from '@nestjs/common';
import { PermissionService } from './permission.service';
import { PermissionController } from './permission.controller';
import { PermissionLogic } from './permission.logic';
import { ArangodbModule } from '@appstack-io/arangodb';

@Global()
@Module({
  imports: [ArangodbModule],
  controllers: [PermissionController],
  providers: [PermissionService, PermissionLogic, PermissionController],
  exports: [PermissionService, PermissionController, PermissionLogic],
})
export class PermissionModule {
  static getDirname() {
    return __dirname;
  }
}
