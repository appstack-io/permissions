import { Module } from '@nestjs/common';
import { PermissionService } from './permission.service';
import { PermissionLogic } from './permission.logic';
import { ArangodbModule } from '@appstack-io/arangodb';

@Module({
  imports: [ArangodbModule],
  providers: [PermissionService, PermissionLogic],
  exports: [PermissionLogic, PermissionService],
})
export class PermissionModule {
  static getDirname() {
    return __dirname;
  }
}
