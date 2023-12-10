/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Empty } from "./google/protobuf/empty";
import Long = require("long");

export const protobufPackage = "main";

export interface Permission {
  id: string;
  createdAt: number;
  updatedAt: number;
  entity: string;
  entityId: string;
  permittedEntity: string;
  permittedEntityId: string;
  action: string;
}

export interface AuthorizableAs {
  entity: string;
  entityId: string;
}

export interface Permissions {
  permissions: Permission[];
}

export interface PermissionCreateOneInput {
  entity: string;
  entityId: string;
  permittedEntity: string;
  permittedEntityId: string;
  action: string;
}

export interface PermissionCreateManyInput {
  entity: string;
  entityId: string;
  permittedEntity: string;
  permittedEntityIds: string[];
  action: string;
}

export interface PermissionFindOneInput {
  id: string;
}

export interface PermissionFindWhereInput {
  entity: string;
  entityId: string;
  permittedEntity: string;
  permittedEntityId: string;
  action: string;
}

export interface PermissionFindWhereManyInput {
  entity: string;
  entityId: string;
  permittedEntity: string;
  permittedEntityIds: string[];
  action: string;
}

export interface PermissionFindWhereOrStarInput {
  entity: string;
  entityId: string;
  permittedEntity: string;
  permittedEntityId: string;
  action: string;
}

export interface Permitted {
  permittedEntity: string;
  permittedEntityId: string;
}

export interface PermissionValidateOneInput {
  entity: string;
  entityId: string;
  action: string;
  permitted: Permitted[];
}

export interface PermissionValidateOneResult {
  validated: boolean;
}

export interface PermissionRemoveOneInput {
  id: string;
}

export interface PermissionRemoveWhereInput {
  entity: string;
  entityId: string;
  permittedEntity: string;
  permittedEntityId: string;
  action: string;
}

export interface PermissionRemoveWhereManyInput {
  entity: string;
  entityId: string;
  permittedEntity: string;
  permittedEntityIds: string[];
  action: string;
}

export interface PermissionFindByPermittedFilter {
  permittedEntity: string;
  permittedEntityId: string;
}

export interface PermissionFindByPermittedOpts {
  limit: number;
  offset: number;
}

export interface PermissionFindByPermittedInput {
  filter: PermissionFindByPermittedFilter | undefined;
  opts: PermissionFindByPermittedOpts | undefined;
}

export interface PermissionFindByPermittedResultMeta {
  offset: number;
}

export interface PermissionFindByPermittedResult {
  meta: PermissionFindByPermittedResultMeta | undefined;
  results: Permission[];
}

export interface PermissionFindByEntityFilter {
  entity: string;
  entityId: string;
  action: string;
}

export interface PermissionFindByEntityOpts {
  limit: number;
  offset: number;
}

export interface PermissionFindByEntityInput {
  filter: PermissionFindByEntityFilter | undefined;
  opts: PermissionFindByEntityOpts | undefined;
}

export interface PermissionFindByEntityResultMeta {
  offset: number;
}

export interface PermissionFindByEntityResult {
  meta: PermissionFindByEntityResultMeta | undefined;
  results: Permission[];
}

export interface PermissionFindAllActionsFilter {
  entity: string;
  entityId: string;
  permittedEntity: string;
  permittedEntityId: string;
}

export interface PermissionFindAllActionsOpts {
  limit: number;
  offset: number;
}

export interface PermissionFindAllActionsInput {
  filter: PermissionFindAllActionsFilter | undefined;
  opts: PermissionFindAllActionsOpts | undefined;
}

export interface PermissionFindAllActionsResultMeta {
  offset: number;
}

export interface PermissionFindAllActionsResult {
  meta: PermissionFindAllActionsResultMeta | undefined;
  results: Permission[];
}

export interface PermissionRemoveAllActionsFilter {
  entity: string;
  entityId: string;
  permittedEntity: string;
  permittedEntityId: string;
}

export interface PermissionRemoveAllActionsInput {
  filter: PermissionRemoveAllActionsFilter | undefined;
}

function createBasePermission(): Permission {
  return {
    id: "",
    createdAt: 0,
    updatedAt: 0,
    entity: "",
    entityId: "",
    permittedEntity: "",
    permittedEntityId: "",
    action: "",
  };
}

export const Permission = {
  encode(message: Permission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.createdAt !== 0) {
      writer.uint32(16).uint64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(24).uint64(message.updatedAt);
    }
    if (message.entity !== "") {
      writer.uint32(34).string(message.entity);
    }
    if (message.entityId !== "") {
      writer.uint32(42).string(message.entityId);
    }
    if (message.permittedEntity !== "") {
      writer.uint32(50).string(message.permittedEntity);
    }
    if (message.permittedEntityId !== "") {
      writer.uint32(58).string(message.permittedEntityId);
    }
    if (message.action !== "") {
      writer.uint32(66).string(message.action);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Permission {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.createdAt = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.updatedAt = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.entity = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.entityId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.permittedEntity = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.permittedEntityId = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.action = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Permission {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      createdAt: isSet(object.createdAt) ? globalThis.Number(object.createdAt) : 0,
      updatedAt: isSet(object.updatedAt) ? globalThis.Number(object.updatedAt) : 0,
      entity: isSet(object.entity) ? globalThis.String(object.entity) : "",
      entityId: isSet(object.entityId) ? globalThis.String(object.entityId) : "",
      permittedEntity: isSet(object.permittedEntity) ? globalThis.String(object.permittedEntity) : "",
      permittedEntityId: isSet(object.permittedEntityId) ? globalThis.String(object.permittedEntityId) : "",
      action: isSet(object.action) ? globalThis.String(object.action) : "",
    };
  },

  toJSON(message: Permission): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.createdAt !== 0) {
      obj.createdAt = Math.round(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      obj.updatedAt = Math.round(message.updatedAt);
    }
    if (message.entity !== "") {
      obj.entity = message.entity;
    }
    if (message.entityId !== "") {
      obj.entityId = message.entityId;
    }
    if (message.permittedEntity !== "") {
      obj.permittedEntity = message.permittedEntity;
    }
    if (message.permittedEntityId !== "") {
      obj.permittedEntityId = message.permittedEntityId;
    }
    if (message.action !== "") {
      obj.action = message.action;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Permission>, I>>(base?: I): Permission {
    return Permission.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Permission>, I>>(object: I): Permission {
    const message = createBasePermission();
    message.id = object.id ?? "";
    message.createdAt = object.createdAt ?? 0;
    message.updatedAt = object.updatedAt ?? 0;
    message.entity = object.entity ?? "";
    message.entityId = object.entityId ?? "";
    message.permittedEntity = object.permittedEntity ?? "";
    message.permittedEntityId = object.permittedEntityId ?? "";
    message.action = object.action ?? "";
    return message;
  },
};

function createBaseAuthorizableAs(): AuthorizableAs {
  return { entity: "", entityId: "" };
}

export const AuthorizableAs = {
  encode(message: AuthorizableAs, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== "") {
      writer.uint32(10).string(message.entity);
    }
    if (message.entityId !== "") {
      writer.uint32(18).string(message.entityId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthorizableAs {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthorizableAs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.entity = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.entityId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AuthorizableAs {
    return {
      entity: isSet(object.entity) ? globalThis.String(object.entity) : "",
      entityId: isSet(object.entityId) ? globalThis.String(object.entityId) : "",
    };
  },

  toJSON(message: AuthorizableAs): unknown {
    const obj: any = {};
    if (message.entity !== "") {
      obj.entity = message.entity;
    }
    if (message.entityId !== "") {
      obj.entityId = message.entityId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AuthorizableAs>, I>>(base?: I): AuthorizableAs {
    return AuthorizableAs.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AuthorizableAs>, I>>(object: I): AuthorizableAs {
    const message = createBaseAuthorizableAs();
    message.entity = object.entity ?? "";
    message.entityId = object.entityId ?? "";
    return message;
  },
};

function createBasePermissions(): Permissions {
  return { permissions: [] };
}

export const Permissions = {
  encode(message: Permissions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.permissions) {
      Permission.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Permissions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.permissions.push(Permission.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Permissions {
    return {
      permissions: globalThis.Array.isArray(object?.permissions)
        ? object.permissions.map((e: any) => Permission.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Permissions): unknown {
    const obj: any = {};
    if (message.permissions?.length) {
      obj.permissions = message.permissions.map((e) => Permission.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Permissions>, I>>(base?: I): Permissions {
    return Permissions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Permissions>, I>>(object: I): Permissions {
    const message = createBasePermissions();
    message.permissions = object.permissions?.map((e) => Permission.fromPartial(e)) || [];
    return message;
  },
};

function createBasePermissionCreateOneInput(): PermissionCreateOneInput {
  return { entity: "", entityId: "", permittedEntity: "", permittedEntityId: "", action: "" };
}

export const PermissionCreateOneInput = {
  encode(message: PermissionCreateOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== "") {
      writer.uint32(34).string(message.entity);
    }
    if (message.entityId !== "") {
      writer.uint32(42).string(message.entityId);
    }
    if (message.permittedEntity !== "") {
      writer.uint32(50).string(message.permittedEntity);
    }
    if (message.permittedEntityId !== "") {
      writer.uint32(58).string(message.permittedEntityId);
    }
    if (message.action !== "") {
      writer.uint32(66).string(message.action);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionCreateOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionCreateOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          if (tag !== 34) {
            break;
          }

          message.entity = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.entityId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.permittedEntity = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.permittedEntityId = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.action = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionCreateOneInput {
    return {
      entity: isSet(object.entity) ? globalThis.String(object.entity) : "",
      entityId: isSet(object.entityId) ? globalThis.String(object.entityId) : "",
      permittedEntity: isSet(object.permittedEntity) ? globalThis.String(object.permittedEntity) : "",
      permittedEntityId: isSet(object.permittedEntityId) ? globalThis.String(object.permittedEntityId) : "",
      action: isSet(object.action) ? globalThis.String(object.action) : "",
    };
  },

  toJSON(message: PermissionCreateOneInput): unknown {
    const obj: any = {};
    if (message.entity !== "") {
      obj.entity = message.entity;
    }
    if (message.entityId !== "") {
      obj.entityId = message.entityId;
    }
    if (message.permittedEntity !== "") {
      obj.permittedEntity = message.permittedEntity;
    }
    if (message.permittedEntityId !== "") {
      obj.permittedEntityId = message.permittedEntityId;
    }
    if (message.action !== "") {
      obj.action = message.action;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionCreateOneInput>, I>>(base?: I): PermissionCreateOneInput {
    return PermissionCreateOneInput.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PermissionCreateOneInput>, I>>(object: I): PermissionCreateOneInput {
    const message = createBasePermissionCreateOneInput();
    message.entity = object.entity ?? "";
    message.entityId = object.entityId ?? "";
    message.permittedEntity = object.permittedEntity ?? "";
    message.permittedEntityId = object.permittedEntityId ?? "";
    message.action = object.action ?? "";
    return message;
  },
};

function createBasePermissionCreateManyInput(): PermissionCreateManyInput {
  return { entity: "", entityId: "", permittedEntity: "", permittedEntityIds: [], action: "" };
}

export const PermissionCreateManyInput = {
  encode(message: PermissionCreateManyInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== "") {
      writer.uint32(34).string(message.entity);
    }
    if (message.entityId !== "") {
      writer.uint32(42).string(message.entityId);
    }
    if (message.permittedEntity !== "") {
      writer.uint32(50).string(message.permittedEntity);
    }
    for (const v of message.permittedEntityIds) {
      writer.uint32(58).string(v!);
    }
    if (message.action !== "") {
      writer.uint32(66).string(message.action);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionCreateManyInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionCreateManyInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          if (tag !== 34) {
            break;
          }

          message.entity = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.entityId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.permittedEntity = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.permittedEntityIds.push(reader.string());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.action = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionCreateManyInput {
    return {
      entity: isSet(object.entity) ? globalThis.String(object.entity) : "",
      entityId: isSet(object.entityId) ? globalThis.String(object.entityId) : "",
      permittedEntity: isSet(object.permittedEntity) ? globalThis.String(object.permittedEntity) : "",
      permittedEntityIds: globalThis.Array.isArray(object?.permittedEntityIds)
        ? object.permittedEntityIds.map((e: any) => globalThis.String(e))
        : [],
      action: isSet(object.action) ? globalThis.String(object.action) : "",
    };
  },

  toJSON(message: PermissionCreateManyInput): unknown {
    const obj: any = {};
    if (message.entity !== "") {
      obj.entity = message.entity;
    }
    if (message.entityId !== "") {
      obj.entityId = message.entityId;
    }
    if (message.permittedEntity !== "") {
      obj.permittedEntity = message.permittedEntity;
    }
    if (message.permittedEntityIds?.length) {
      obj.permittedEntityIds = message.permittedEntityIds;
    }
    if (message.action !== "") {
      obj.action = message.action;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionCreateManyInput>, I>>(base?: I): PermissionCreateManyInput {
    return PermissionCreateManyInput.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PermissionCreateManyInput>, I>>(object: I): PermissionCreateManyInput {
    const message = createBasePermissionCreateManyInput();
    message.entity = object.entity ?? "";
    message.entityId = object.entityId ?? "";
    message.permittedEntity = object.permittedEntity ?? "";
    message.permittedEntityIds = object.permittedEntityIds?.map((e) => e) || [];
    message.action = object.action ?? "";
    return message;
  },
};

function createBasePermissionFindOneInput(): PermissionFindOneInput {
  return { id: "" };
}

export const PermissionFindOneInput = {
  encode(message: PermissionFindOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindOneInput {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: PermissionFindOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionFindOneInput>, I>>(base?: I): PermissionFindOneInput {
    return PermissionFindOneInput.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PermissionFindOneInput>, I>>(object: I): PermissionFindOneInput {
    const message = createBasePermissionFindOneInput();
    message.id = object.id ?? "";
    return message;
  },
};

function createBasePermissionFindWhereInput(): PermissionFindWhereInput {
  return { entity: "", entityId: "", permittedEntity: "", permittedEntityId: "", action: "" };
}

export const PermissionFindWhereInput = {
  encode(message: PermissionFindWhereInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== "") {
      writer.uint32(10).string(message.entity);
    }
    if (message.entityId !== "") {
      writer.uint32(18).string(message.entityId);
    }
    if (message.permittedEntity !== "") {
      writer.uint32(26).string(message.permittedEntity);
    }
    if (message.permittedEntityId !== "") {
      writer.uint32(34).string(message.permittedEntityId);
    }
    if (message.action !== "") {
      writer.uint32(42).string(message.action);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindWhereInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindWhereInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.entity = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.entityId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.permittedEntity = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.permittedEntityId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.action = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindWhereInput {
    return {
      entity: isSet(object.entity) ? globalThis.String(object.entity) : "",
      entityId: isSet(object.entityId) ? globalThis.String(object.entityId) : "",
      permittedEntity: isSet(object.permittedEntity) ? globalThis.String(object.permittedEntity) : "",
      permittedEntityId: isSet(object.permittedEntityId) ? globalThis.String(object.permittedEntityId) : "",
      action: isSet(object.action) ? globalThis.String(object.action) : "",
    };
  },

  toJSON(message: PermissionFindWhereInput): unknown {
    const obj: any = {};
    if (message.entity !== "") {
      obj.entity = message.entity;
    }
    if (message.entityId !== "") {
      obj.entityId = message.entityId;
    }
    if (message.permittedEntity !== "") {
      obj.permittedEntity = message.permittedEntity;
    }
    if (message.permittedEntityId !== "") {
      obj.permittedEntityId = message.permittedEntityId;
    }
    if (message.action !== "") {
      obj.action = message.action;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionFindWhereInput>, I>>(base?: I): PermissionFindWhereInput {
    return PermissionFindWhereInput.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PermissionFindWhereInput>, I>>(object: I): PermissionFindWhereInput {
    const message = createBasePermissionFindWhereInput();
    message.entity = object.entity ?? "";
    message.entityId = object.entityId ?? "";
    message.permittedEntity = object.permittedEntity ?? "";
    message.permittedEntityId = object.permittedEntityId ?? "";
    message.action = object.action ?? "";
    return message;
  },
};

function createBasePermissionFindWhereManyInput(): PermissionFindWhereManyInput {
  return { entity: "", entityId: "", permittedEntity: "", permittedEntityIds: [], action: "" };
}

export const PermissionFindWhereManyInput = {
  encode(message: PermissionFindWhereManyInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== "") {
      writer.uint32(10).string(message.entity);
    }
    if (message.entityId !== "") {
      writer.uint32(18).string(message.entityId);
    }
    if (message.permittedEntity !== "") {
      writer.uint32(26).string(message.permittedEntity);
    }
    for (const v of message.permittedEntityIds) {
      writer.uint32(34).string(v!);
    }
    if (message.action !== "") {
      writer.uint32(42).string(message.action);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindWhereManyInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindWhereManyInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.entity = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.entityId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.permittedEntity = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.permittedEntityIds.push(reader.string());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.action = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindWhereManyInput {
    return {
      entity: isSet(object.entity) ? globalThis.String(object.entity) : "",
      entityId: isSet(object.entityId) ? globalThis.String(object.entityId) : "",
      permittedEntity: isSet(object.permittedEntity) ? globalThis.String(object.permittedEntity) : "",
      permittedEntityIds: globalThis.Array.isArray(object?.permittedEntityIds)
        ? object.permittedEntityIds.map((e: any) => globalThis.String(e))
        : [],
      action: isSet(object.action) ? globalThis.String(object.action) : "",
    };
  },

  toJSON(message: PermissionFindWhereManyInput): unknown {
    const obj: any = {};
    if (message.entity !== "") {
      obj.entity = message.entity;
    }
    if (message.entityId !== "") {
      obj.entityId = message.entityId;
    }
    if (message.permittedEntity !== "") {
      obj.permittedEntity = message.permittedEntity;
    }
    if (message.permittedEntityIds?.length) {
      obj.permittedEntityIds = message.permittedEntityIds;
    }
    if (message.action !== "") {
      obj.action = message.action;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionFindWhereManyInput>, I>>(base?: I): PermissionFindWhereManyInput {
    return PermissionFindWhereManyInput.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PermissionFindWhereManyInput>, I>>(object: I): PermissionFindWhereManyInput {
    const message = createBasePermissionFindWhereManyInput();
    message.entity = object.entity ?? "";
    message.entityId = object.entityId ?? "";
    message.permittedEntity = object.permittedEntity ?? "";
    message.permittedEntityIds = object.permittedEntityIds?.map((e) => e) || [];
    message.action = object.action ?? "";
    return message;
  },
};

function createBasePermissionFindWhereOrStarInput(): PermissionFindWhereOrStarInput {
  return { entity: "", entityId: "", permittedEntity: "", permittedEntityId: "", action: "" };
}

export const PermissionFindWhereOrStarInput = {
  encode(message: PermissionFindWhereOrStarInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== "") {
      writer.uint32(10).string(message.entity);
    }
    if (message.entityId !== "") {
      writer.uint32(18).string(message.entityId);
    }
    if (message.permittedEntity !== "") {
      writer.uint32(26).string(message.permittedEntity);
    }
    if (message.permittedEntityId !== "") {
      writer.uint32(34).string(message.permittedEntityId);
    }
    if (message.action !== "") {
      writer.uint32(42).string(message.action);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindWhereOrStarInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindWhereOrStarInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.entity = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.entityId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.permittedEntity = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.permittedEntityId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.action = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindWhereOrStarInput {
    return {
      entity: isSet(object.entity) ? globalThis.String(object.entity) : "",
      entityId: isSet(object.entityId) ? globalThis.String(object.entityId) : "",
      permittedEntity: isSet(object.permittedEntity) ? globalThis.String(object.permittedEntity) : "",
      permittedEntityId: isSet(object.permittedEntityId) ? globalThis.String(object.permittedEntityId) : "",
      action: isSet(object.action) ? globalThis.String(object.action) : "",
    };
  },

  toJSON(message: PermissionFindWhereOrStarInput): unknown {
    const obj: any = {};
    if (message.entity !== "") {
      obj.entity = message.entity;
    }
    if (message.entityId !== "") {
      obj.entityId = message.entityId;
    }
    if (message.permittedEntity !== "") {
      obj.permittedEntity = message.permittedEntity;
    }
    if (message.permittedEntityId !== "") {
      obj.permittedEntityId = message.permittedEntityId;
    }
    if (message.action !== "") {
      obj.action = message.action;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionFindWhereOrStarInput>, I>>(base?: I): PermissionFindWhereOrStarInput {
    return PermissionFindWhereOrStarInput.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PermissionFindWhereOrStarInput>, I>>(
    object: I,
  ): PermissionFindWhereOrStarInput {
    const message = createBasePermissionFindWhereOrStarInput();
    message.entity = object.entity ?? "";
    message.entityId = object.entityId ?? "";
    message.permittedEntity = object.permittedEntity ?? "";
    message.permittedEntityId = object.permittedEntityId ?? "";
    message.action = object.action ?? "";
    return message;
  },
};

function createBasePermitted(): Permitted {
  return { permittedEntity: "", permittedEntityId: "" };
}

export const Permitted = {
  encode(message: Permitted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.permittedEntity !== "") {
      writer.uint32(10).string(message.permittedEntity);
    }
    if (message.permittedEntityId !== "") {
      writer.uint32(18).string(message.permittedEntityId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Permitted {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermitted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.permittedEntity = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.permittedEntityId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Permitted {
    return {
      permittedEntity: isSet(object.permittedEntity) ? globalThis.String(object.permittedEntity) : "",
      permittedEntityId: isSet(object.permittedEntityId) ? globalThis.String(object.permittedEntityId) : "",
    };
  },

  toJSON(message: Permitted): unknown {
    const obj: any = {};
    if (message.permittedEntity !== "") {
      obj.permittedEntity = message.permittedEntity;
    }
    if (message.permittedEntityId !== "") {
      obj.permittedEntityId = message.permittedEntityId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Permitted>, I>>(base?: I): Permitted {
    return Permitted.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Permitted>, I>>(object: I): Permitted {
    const message = createBasePermitted();
    message.permittedEntity = object.permittedEntity ?? "";
    message.permittedEntityId = object.permittedEntityId ?? "";
    return message;
  },
};

function createBasePermissionValidateOneInput(): PermissionValidateOneInput {
  return { entity: "", entityId: "", action: "", permitted: [] };
}

export const PermissionValidateOneInput = {
  encode(message: PermissionValidateOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== "") {
      writer.uint32(10).string(message.entity);
    }
    if (message.entityId !== "") {
      writer.uint32(18).string(message.entityId);
    }
    if (message.action !== "") {
      writer.uint32(26).string(message.action);
    }
    for (const v of message.permitted) {
      Permitted.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionValidateOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionValidateOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.entity = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.entityId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.action = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.permitted.push(Permitted.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionValidateOneInput {
    return {
      entity: isSet(object.entity) ? globalThis.String(object.entity) : "",
      entityId: isSet(object.entityId) ? globalThis.String(object.entityId) : "",
      action: isSet(object.action) ? globalThis.String(object.action) : "",
      permitted: globalThis.Array.isArray(object?.permitted)
        ? object.permitted.map((e: any) => Permitted.fromJSON(e))
        : [],
    };
  },

  toJSON(message: PermissionValidateOneInput): unknown {
    const obj: any = {};
    if (message.entity !== "") {
      obj.entity = message.entity;
    }
    if (message.entityId !== "") {
      obj.entityId = message.entityId;
    }
    if (message.action !== "") {
      obj.action = message.action;
    }
    if (message.permitted?.length) {
      obj.permitted = message.permitted.map((e) => Permitted.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionValidateOneInput>, I>>(base?: I): PermissionValidateOneInput {
    return PermissionValidateOneInput.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PermissionValidateOneInput>, I>>(object: I): PermissionValidateOneInput {
    const message = createBasePermissionValidateOneInput();
    message.entity = object.entity ?? "";
    message.entityId = object.entityId ?? "";
    message.action = object.action ?? "";
    message.permitted = object.permitted?.map((e) => Permitted.fromPartial(e)) || [];
    return message;
  },
};

function createBasePermissionValidateOneResult(): PermissionValidateOneResult {
  return { validated: false };
}

export const PermissionValidateOneResult = {
  encode(message: PermissionValidateOneResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validated === true) {
      writer.uint32(8).bool(message.validated);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionValidateOneResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionValidateOneResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.validated = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionValidateOneResult {
    return { validated: isSet(object.validated) ? globalThis.Boolean(object.validated) : false };
  },

  toJSON(message: PermissionValidateOneResult): unknown {
    const obj: any = {};
    if (message.validated === true) {
      obj.validated = message.validated;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionValidateOneResult>, I>>(base?: I): PermissionValidateOneResult {
    return PermissionValidateOneResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PermissionValidateOneResult>, I>>(object: I): PermissionValidateOneResult {
    const message = createBasePermissionValidateOneResult();
    message.validated = object.validated ?? false;
    return message;
  },
};

function createBasePermissionRemoveOneInput(): PermissionRemoveOneInput {
  return { id: "" };
}

export const PermissionRemoveOneInput = {
  encode(message: PermissionRemoveOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionRemoveOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionRemoveOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionRemoveOneInput {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: PermissionRemoveOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionRemoveOneInput>, I>>(base?: I): PermissionRemoveOneInput {
    return PermissionRemoveOneInput.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PermissionRemoveOneInput>, I>>(object: I): PermissionRemoveOneInput {
    const message = createBasePermissionRemoveOneInput();
    message.id = object.id ?? "";
    return message;
  },
};

function createBasePermissionRemoveWhereInput(): PermissionRemoveWhereInput {
  return { entity: "", entityId: "", permittedEntity: "", permittedEntityId: "", action: "" };
}

export const PermissionRemoveWhereInput = {
  encode(message: PermissionRemoveWhereInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== "") {
      writer.uint32(10).string(message.entity);
    }
    if (message.entityId !== "") {
      writer.uint32(18).string(message.entityId);
    }
    if (message.permittedEntity !== "") {
      writer.uint32(26).string(message.permittedEntity);
    }
    if (message.permittedEntityId !== "") {
      writer.uint32(34).string(message.permittedEntityId);
    }
    if (message.action !== "") {
      writer.uint32(42).string(message.action);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionRemoveWhereInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionRemoveWhereInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.entity = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.entityId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.permittedEntity = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.permittedEntityId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.action = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionRemoveWhereInput {
    return {
      entity: isSet(object.entity) ? globalThis.String(object.entity) : "",
      entityId: isSet(object.entityId) ? globalThis.String(object.entityId) : "",
      permittedEntity: isSet(object.permittedEntity) ? globalThis.String(object.permittedEntity) : "",
      permittedEntityId: isSet(object.permittedEntityId) ? globalThis.String(object.permittedEntityId) : "",
      action: isSet(object.action) ? globalThis.String(object.action) : "",
    };
  },

  toJSON(message: PermissionRemoveWhereInput): unknown {
    const obj: any = {};
    if (message.entity !== "") {
      obj.entity = message.entity;
    }
    if (message.entityId !== "") {
      obj.entityId = message.entityId;
    }
    if (message.permittedEntity !== "") {
      obj.permittedEntity = message.permittedEntity;
    }
    if (message.permittedEntityId !== "") {
      obj.permittedEntityId = message.permittedEntityId;
    }
    if (message.action !== "") {
      obj.action = message.action;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionRemoveWhereInput>, I>>(base?: I): PermissionRemoveWhereInput {
    return PermissionRemoveWhereInput.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PermissionRemoveWhereInput>, I>>(object: I): PermissionRemoveWhereInput {
    const message = createBasePermissionRemoveWhereInput();
    message.entity = object.entity ?? "";
    message.entityId = object.entityId ?? "";
    message.permittedEntity = object.permittedEntity ?? "";
    message.permittedEntityId = object.permittedEntityId ?? "";
    message.action = object.action ?? "";
    return message;
  },
};

function createBasePermissionRemoveWhereManyInput(): PermissionRemoveWhereManyInput {
  return { entity: "", entityId: "", permittedEntity: "", permittedEntityIds: [], action: "" };
}

export const PermissionRemoveWhereManyInput = {
  encode(message: PermissionRemoveWhereManyInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== "") {
      writer.uint32(10).string(message.entity);
    }
    if (message.entityId !== "") {
      writer.uint32(18).string(message.entityId);
    }
    if (message.permittedEntity !== "") {
      writer.uint32(26).string(message.permittedEntity);
    }
    for (const v of message.permittedEntityIds) {
      writer.uint32(34).string(v!);
    }
    if (message.action !== "") {
      writer.uint32(42).string(message.action);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionRemoveWhereManyInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionRemoveWhereManyInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.entity = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.entityId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.permittedEntity = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.permittedEntityIds.push(reader.string());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.action = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionRemoveWhereManyInput {
    return {
      entity: isSet(object.entity) ? globalThis.String(object.entity) : "",
      entityId: isSet(object.entityId) ? globalThis.String(object.entityId) : "",
      permittedEntity: isSet(object.permittedEntity) ? globalThis.String(object.permittedEntity) : "",
      permittedEntityIds: globalThis.Array.isArray(object?.permittedEntityIds)
        ? object.permittedEntityIds.map((e: any) => globalThis.String(e))
        : [],
      action: isSet(object.action) ? globalThis.String(object.action) : "",
    };
  },

  toJSON(message: PermissionRemoveWhereManyInput): unknown {
    const obj: any = {};
    if (message.entity !== "") {
      obj.entity = message.entity;
    }
    if (message.entityId !== "") {
      obj.entityId = message.entityId;
    }
    if (message.permittedEntity !== "") {
      obj.permittedEntity = message.permittedEntity;
    }
    if (message.permittedEntityIds?.length) {
      obj.permittedEntityIds = message.permittedEntityIds;
    }
    if (message.action !== "") {
      obj.action = message.action;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionRemoveWhereManyInput>, I>>(base?: I): PermissionRemoveWhereManyInput {
    return PermissionRemoveWhereManyInput.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PermissionRemoveWhereManyInput>, I>>(
    object: I,
  ): PermissionRemoveWhereManyInput {
    const message = createBasePermissionRemoveWhereManyInput();
    message.entity = object.entity ?? "";
    message.entityId = object.entityId ?? "";
    message.permittedEntity = object.permittedEntity ?? "";
    message.permittedEntityIds = object.permittedEntityIds?.map((e) => e) || [];
    message.action = object.action ?? "";
    return message;
  },
};

function createBasePermissionFindByPermittedFilter(): PermissionFindByPermittedFilter {
  return { permittedEntity: "", permittedEntityId: "" };
}

export const PermissionFindByPermittedFilter = {
  encode(message: PermissionFindByPermittedFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.permittedEntity !== "") {
      writer.uint32(50).string(message.permittedEntity);
    }
    if (message.permittedEntityId !== "") {
      writer.uint32(58).string(message.permittedEntityId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindByPermittedFilter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindByPermittedFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 6:
          if (tag !== 50) {
            break;
          }

          message.permittedEntity = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.permittedEntityId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindByPermittedFilter {
    return {
      permittedEntity: isSet(object.permittedEntity) ? globalThis.String(object.permittedEntity) : "",
      permittedEntityId: isSet(object.permittedEntityId) ? globalThis.String(object.permittedEntityId) : "",
    };
  },

  toJSON(message: PermissionFindByPermittedFilter): unknown {
    const obj: any = {};
    if (message.permittedEntity !== "") {
      obj.permittedEntity = message.permittedEntity;
    }
    if (message.permittedEntityId !== "") {
      obj.permittedEntityId = message.permittedEntityId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionFindByPermittedFilter>, I>>(base?: I): PermissionFindByPermittedFilter {
    return PermissionFindByPermittedFilter.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PermissionFindByPermittedFilter>, I>>(
    object: I,
  ): PermissionFindByPermittedFilter {
    const message = createBasePermissionFindByPermittedFilter();
    message.permittedEntity = object.permittedEntity ?? "";
    message.permittedEntityId = object.permittedEntityId ?? "";
    return message;
  },
};

function createBasePermissionFindByPermittedOpts(): PermissionFindByPermittedOpts {
  return { limit: 0, offset: 0 };
}

export const PermissionFindByPermittedOpts = {
  encode(message: PermissionFindByPermittedOpts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== 0) {
      writer.uint32(8).uint64(message.limit);
    }
    if (message.offset !== 0) {
      writer.uint32(16).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindByPermittedOpts {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindByPermittedOpts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.limit = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindByPermittedOpts {
    return {
      limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
      offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0,
    };
  },

  toJSON(message: PermissionFindByPermittedOpts): unknown {
    const obj: any = {};
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionFindByPermittedOpts>, I>>(base?: I): PermissionFindByPermittedOpts {
    return PermissionFindByPermittedOpts.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PermissionFindByPermittedOpts>, I>>(
    object: I,
  ): PermissionFindByPermittedOpts {
    const message = createBasePermissionFindByPermittedOpts();
    message.limit = object.limit ?? 0;
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBasePermissionFindByPermittedInput(): PermissionFindByPermittedInput {
  return { filter: undefined, opts: undefined };
}

export const PermissionFindByPermittedInput = {
  encode(message: PermissionFindByPermittedInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filter !== undefined) {
      PermissionFindByPermittedFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
    }
    if (message.opts !== undefined) {
      PermissionFindByPermittedOpts.encode(message.opts, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindByPermittedInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindByPermittedInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filter = PermissionFindByPermittedFilter.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.opts = PermissionFindByPermittedOpts.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindByPermittedInput {
    return {
      filter: isSet(object.filter) ? PermissionFindByPermittedFilter.fromJSON(object.filter) : undefined,
      opts: isSet(object.opts) ? PermissionFindByPermittedOpts.fromJSON(object.opts) : undefined,
    };
  },

  toJSON(message: PermissionFindByPermittedInput): unknown {
    const obj: any = {};
    if (message.filter !== undefined) {
      obj.filter = PermissionFindByPermittedFilter.toJSON(message.filter);
    }
    if (message.opts !== undefined) {
      obj.opts = PermissionFindByPermittedOpts.toJSON(message.opts);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionFindByPermittedInput>, I>>(base?: I): PermissionFindByPermittedInput {
    return PermissionFindByPermittedInput.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PermissionFindByPermittedInput>, I>>(
    object: I,
  ): PermissionFindByPermittedInput {
    const message = createBasePermissionFindByPermittedInput();
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? PermissionFindByPermittedFilter.fromPartial(object.filter)
      : undefined;
    message.opts = (object.opts !== undefined && object.opts !== null)
      ? PermissionFindByPermittedOpts.fromPartial(object.opts)
      : undefined;
    return message;
  },
};

function createBasePermissionFindByPermittedResultMeta(): PermissionFindByPermittedResultMeta {
  return { offset: 0 };
}

export const PermissionFindByPermittedResultMeta = {
  encode(message: PermissionFindByPermittedResultMeta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.offset !== 0) {
      writer.uint32(8).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindByPermittedResultMeta {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindByPermittedResultMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindByPermittedResultMeta {
    return { offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0 };
  },

  toJSON(message: PermissionFindByPermittedResultMeta): unknown {
    const obj: any = {};
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionFindByPermittedResultMeta>, I>>(
    base?: I,
  ): PermissionFindByPermittedResultMeta {
    return PermissionFindByPermittedResultMeta.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PermissionFindByPermittedResultMeta>, I>>(
    object: I,
  ): PermissionFindByPermittedResultMeta {
    const message = createBasePermissionFindByPermittedResultMeta();
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBasePermissionFindByPermittedResult(): PermissionFindByPermittedResult {
  return { meta: undefined, results: [] };
}

export const PermissionFindByPermittedResult = {
  encode(message: PermissionFindByPermittedResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.meta !== undefined) {
      PermissionFindByPermittedResultMeta.encode(message.meta, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.results) {
      Permission.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindByPermittedResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindByPermittedResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.meta = PermissionFindByPermittedResultMeta.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.results.push(Permission.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindByPermittedResult {
    return {
      meta: isSet(object.meta) ? PermissionFindByPermittedResultMeta.fromJSON(object.meta) : undefined,
      results: globalThis.Array.isArray(object?.results) ? object.results.map((e: any) => Permission.fromJSON(e)) : [],
    };
  },

  toJSON(message: PermissionFindByPermittedResult): unknown {
    const obj: any = {};
    if (message.meta !== undefined) {
      obj.meta = PermissionFindByPermittedResultMeta.toJSON(message.meta);
    }
    if (message.results?.length) {
      obj.results = message.results.map((e) => Permission.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionFindByPermittedResult>, I>>(base?: I): PermissionFindByPermittedResult {
    return PermissionFindByPermittedResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PermissionFindByPermittedResult>, I>>(
    object: I,
  ): PermissionFindByPermittedResult {
    const message = createBasePermissionFindByPermittedResult();
    message.meta = (object.meta !== undefined && object.meta !== null)
      ? PermissionFindByPermittedResultMeta.fromPartial(object.meta)
      : undefined;
    message.results = object.results?.map((e) => Permission.fromPartial(e)) || [];
    return message;
  },
};

function createBasePermissionFindByEntityFilter(): PermissionFindByEntityFilter {
  return { entity: "", entityId: "", action: "" };
}

export const PermissionFindByEntityFilter = {
  encode(message: PermissionFindByEntityFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== "") {
      writer.uint32(50).string(message.entity);
    }
    if (message.entityId !== "") {
      writer.uint32(58).string(message.entityId);
    }
    if (message.action !== "") {
      writer.uint32(66).string(message.action);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindByEntityFilter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindByEntityFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 6:
          if (tag !== 50) {
            break;
          }

          message.entity = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.entityId = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.action = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindByEntityFilter {
    return {
      entity: isSet(object.entity) ? globalThis.String(object.entity) : "",
      entityId: isSet(object.entityId) ? globalThis.String(object.entityId) : "",
      action: isSet(object.action) ? globalThis.String(object.action) : "",
    };
  },

  toJSON(message: PermissionFindByEntityFilter): unknown {
    const obj: any = {};
    if (message.entity !== "") {
      obj.entity = message.entity;
    }
    if (message.entityId !== "") {
      obj.entityId = message.entityId;
    }
    if (message.action !== "") {
      obj.action = message.action;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionFindByEntityFilter>, I>>(base?: I): PermissionFindByEntityFilter {
    return PermissionFindByEntityFilter.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PermissionFindByEntityFilter>, I>>(object: I): PermissionFindByEntityFilter {
    const message = createBasePermissionFindByEntityFilter();
    message.entity = object.entity ?? "";
    message.entityId = object.entityId ?? "";
    message.action = object.action ?? "";
    return message;
  },
};

function createBasePermissionFindByEntityOpts(): PermissionFindByEntityOpts {
  return { limit: 0, offset: 0 };
}

export const PermissionFindByEntityOpts = {
  encode(message: PermissionFindByEntityOpts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== 0) {
      writer.uint32(8).uint64(message.limit);
    }
    if (message.offset !== 0) {
      writer.uint32(16).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindByEntityOpts {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindByEntityOpts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.limit = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindByEntityOpts {
    return {
      limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
      offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0,
    };
  },

  toJSON(message: PermissionFindByEntityOpts): unknown {
    const obj: any = {};
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionFindByEntityOpts>, I>>(base?: I): PermissionFindByEntityOpts {
    return PermissionFindByEntityOpts.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PermissionFindByEntityOpts>, I>>(object: I): PermissionFindByEntityOpts {
    const message = createBasePermissionFindByEntityOpts();
    message.limit = object.limit ?? 0;
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBasePermissionFindByEntityInput(): PermissionFindByEntityInput {
  return { filter: undefined, opts: undefined };
}

export const PermissionFindByEntityInput = {
  encode(message: PermissionFindByEntityInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filter !== undefined) {
      PermissionFindByEntityFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
    }
    if (message.opts !== undefined) {
      PermissionFindByEntityOpts.encode(message.opts, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindByEntityInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindByEntityInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filter = PermissionFindByEntityFilter.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.opts = PermissionFindByEntityOpts.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindByEntityInput {
    return {
      filter: isSet(object.filter) ? PermissionFindByEntityFilter.fromJSON(object.filter) : undefined,
      opts: isSet(object.opts) ? PermissionFindByEntityOpts.fromJSON(object.opts) : undefined,
    };
  },

  toJSON(message: PermissionFindByEntityInput): unknown {
    const obj: any = {};
    if (message.filter !== undefined) {
      obj.filter = PermissionFindByEntityFilter.toJSON(message.filter);
    }
    if (message.opts !== undefined) {
      obj.opts = PermissionFindByEntityOpts.toJSON(message.opts);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionFindByEntityInput>, I>>(base?: I): PermissionFindByEntityInput {
    return PermissionFindByEntityInput.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PermissionFindByEntityInput>, I>>(object: I): PermissionFindByEntityInput {
    const message = createBasePermissionFindByEntityInput();
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? PermissionFindByEntityFilter.fromPartial(object.filter)
      : undefined;
    message.opts = (object.opts !== undefined && object.opts !== null)
      ? PermissionFindByEntityOpts.fromPartial(object.opts)
      : undefined;
    return message;
  },
};

function createBasePermissionFindByEntityResultMeta(): PermissionFindByEntityResultMeta {
  return { offset: 0 };
}

export const PermissionFindByEntityResultMeta = {
  encode(message: PermissionFindByEntityResultMeta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.offset !== 0) {
      writer.uint32(8).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindByEntityResultMeta {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindByEntityResultMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindByEntityResultMeta {
    return { offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0 };
  },

  toJSON(message: PermissionFindByEntityResultMeta): unknown {
    const obj: any = {};
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionFindByEntityResultMeta>, I>>(
    base?: I,
  ): PermissionFindByEntityResultMeta {
    return PermissionFindByEntityResultMeta.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PermissionFindByEntityResultMeta>, I>>(
    object: I,
  ): PermissionFindByEntityResultMeta {
    const message = createBasePermissionFindByEntityResultMeta();
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBasePermissionFindByEntityResult(): PermissionFindByEntityResult {
  return { meta: undefined, results: [] };
}

export const PermissionFindByEntityResult = {
  encode(message: PermissionFindByEntityResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.meta !== undefined) {
      PermissionFindByEntityResultMeta.encode(message.meta, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.results) {
      Permission.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindByEntityResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindByEntityResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.meta = PermissionFindByEntityResultMeta.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.results.push(Permission.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindByEntityResult {
    return {
      meta: isSet(object.meta) ? PermissionFindByEntityResultMeta.fromJSON(object.meta) : undefined,
      results: globalThis.Array.isArray(object?.results) ? object.results.map((e: any) => Permission.fromJSON(e)) : [],
    };
  },

  toJSON(message: PermissionFindByEntityResult): unknown {
    const obj: any = {};
    if (message.meta !== undefined) {
      obj.meta = PermissionFindByEntityResultMeta.toJSON(message.meta);
    }
    if (message.results?.length) {
      obj.results = message.results.map((e) => Permission.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionFindByEntityResult>, I>>(base?: I): PermissionFindByEntityResult {
    return PermissionFindByEntityResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PermissionFindByEntityResult>, I>>(object: I): PermissionFindByEntityResult {
    const message = createBasePermissionFindByEntityResult();
    message.meta = (object.meta !== undefined && object.meta !== null)
      ? PermissionFindByEntityResultMeta.fromPartial(object.meta)
      : undefined;
    message.results = object.results?.map((e) => Permission.fromPartial(e)) || [];
    return message;
  },
};

function createBasePermissionFindAllActionsFilter(): PermissionFindAllActionsFilter {
  return { entity: "", entityId: "", permittedEntity: "", permittedEntityId: "" };
}

export const PermissionFindAllActionsFilter = {
  encode(message: PermissionFindAllActionsFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== "") {
      writer.uint32(10).string(message.entity);
    }
    if (message.entityId !== "") {
      writer.uint32(18).string(message.entityId);
    }
    if (message.permittedEntity !== "") {
      writer.uint32(26).string(message.permittedEntity);
    }
    if (message.permittedEntityId !== "") {
      writer.uint32(34).string(message.permittedEntityId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindAllActionsFilter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindAllActionsFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.entity = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.entityId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.permittedEntity = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.permittedEntityId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindAllActionsFilter {
    return {
      entity: isSet(object.entity) ? globalThis.String(object.entity) : "",
      entityId: isSet(object.entityId) ? globalThis.String(object.entityId) : "",
      permittedEntity: isSet(object.permittedEntity) ? globalThis.String(object.permittedEntity) : "",
      permittedEntityId: isSet(object.permittedEntityId) ? globalThis.String(object.permittedEntityId) : "",
    };
  },

  toJSON(message: PermissionFindAllActionsFilter): unknown {
    const obj: any = {};
    if (message.entity !== "") {
      obj.entity = message.entity;
    }
    if (message.entityId !== "") {
      obj.entityId = message.entityId;
    }
    if (message.permittedEntity !== "") {
      obj.permittedEntity = message.permittedEntity;
    }
    if (message.permittedEntityId !== "") {
      obj.permittedEntityId = message.permittedEntityId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionFindAllActionsFilter>, I>>(base?: I): PermissionFindAllActionsFilter {
    return PermissionFindAllActionsFilter.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PermissionFindAllActionsFilter>, I>>(
    object: I,
  ): PermissionFindAllActionsFilter {
    const message = createBasePermissionFindAllActionsFilter();
    message.entity = object.entity ?? "";
    message.entityId = object.entityId ?? "";
    message.permittedEntity = object.permittedEntity ?? "";
    message.permittedEntityId = object.permittedEntityId ?? "";
    return message;
  },
};

function createBasePermissionFindAllActionsOpts(): PermissionFindAllActionsOpts {
  return { limit: 0, offset: 0 };
}

export const PermissionFindAllActionsOpts = {
  encode(message: PermissionFindAllActionsOpts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== 0) {
      writer.uint32(8).uint64(message.limit);
    }
    if (message.offset !== 0) {
      writer.uint32(16).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindAllActionsOpts {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindAllActionsOpts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.limit = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindAllActionsOpts {
    return {
      limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
      offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0,
    };
  },

  toJSON(message: PermissionFindAllActionsOpts): unknown {
    const obj: any = {};
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionFindAllActionsOpts>, I>>(base?: I): PermissionFindAllActionsOpts {
    return PermissionFindAllActionsOpts.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PermissionFindAllActionsOpts>, I>>(object: I): PermissionFindAllActionsOpts {
    const message = createBasePermissionFindAllActionsOpts();
    message.limit = object.limit ?? 0;
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBasePermissionFindAllActionsInput(): PermissionFindAllActionsInput {
  return { filter: undefined, opts: undefined };
}

export const PermissionFindAllActionsInput = {
  encode(message: PermissionFindAllActionsInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filter !== undefined) {
      PermissionFindAllActionsFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
    }
    if (message.opts !== undefined) {
      PermissionFindAllActionsOpts.encode(message.opts, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindAllActionsInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindAllActionsInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filter = PermissionFindAllActionsFilter.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.opts = PermissionFindAllActionsOpts.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindAllActionsInput {
    return {
      filter: isSet(object.filter) ? PermissionFindAllActionsFilter.fromJSON(object.filter) : undefined,
      opts: isSet(object.opts) ? PermissionFindAllActionsOpts.fromJSON(object.opts) : undefined,
    };
  },

  toJSON(message: PermissionFindAllActionsInput): unknown {
    const obj: any = {};
    if (message.filter !== undefined) {
      obj.filter = PermissionFindAllActionsFilter.toJSON(message.filter);
    }
    if (message.opts !== undefined) {
      obj.opts = PermissionFindAllActionsOpts.toJSON(message.opts);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionFindAllActionsInput>, I>>(base?: I): PermissionFindAllActionsInput {
    return PermissionFindAllActionsInput.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PermissionFindAllActionsInput>, I>>(
    object: I,
  ): PermissionFindAllActionsInput {
    const message = createBasePermissionFindAllActionsInput();
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? PermissionFindAllActionsFilter.fromPartial(object.filter)
      : undefined;
    message.opts = (object.opts !== undefined && object.opts !== null)
      ? PermissionFindAllActionsOpts.fromPartial(object.opts)
      : undefined;
    return message;
  },
};

function createBasePermissionFindAllActionsResultMeta(): PermissionFindAllActionsResultMeta {
  return { offset: 0 };
}

export const PermissionFindAllActionsResultMeta = {
  encode(message: PermissionFindAllActionsResultMeta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.offset !== 0) {
      writer.uint32(8).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindAllActionsResultMeta {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindAllActionsResultMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindAllActionsResultMeta {
    return { offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0 };
  },

  toJSON(message: PermissionFindAllActionsResultMeta): unknown {
    const obj: any = {};
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionFindAllActionsResultMeta>, I>>(
    base?: I,
  ): PermissionFindAllActionsResultMeta {
    return PermissionFindAllActionsResultMeta.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PermissionFindAllActionsResultMeta>, I>>(
    object: I,
  ): PermissionFindAllActionsResultMeta {
    const message = createBasePermissionFindAllActionsResultMeta();
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBasePermissionFindAllActionsResult(): PermissionFindAllActionsResult {
  return { meta: undefined, results: [] };
}

export const PermissionFindAllActionsResult = {
  encode(message: PermissionFindAllActionsResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.meta !== undefined) {
      PermissionFindAllActionsResultMeta.encode(message.meta, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.results) {
      Permission.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindAllActionsResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindAllActionsResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.meta = PermissionFindAllActionsResultMeta.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.results.push(Permission.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindAllActionsResult {
    return {
      meta: isSet(object.meta) ? PermissionFindAllActionsResultMeta.fromJSON(object.meta) : undefined,
      results: globalThis.Array.isArray(object?.results) ? object.results.map((e: any) => Permission.fromJSON(e)) : [],
    };
  },

  toJSON(message: PermissionFindAllActionsResult): unknown {
    const obj: any = {};
    if (message.meta !== undefined) {
      obj.meta = PermissionFindAllActionsResultMeta.toJSON(message.meta);
    }
    if (message.results?.length) {
      obj.results = message.results.map((e) => Permission.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionFindAllActionsResult>, I>>(base?: I): PermissionFindAllActionsResult {
    return PermissionFindAllActionsResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PermissionFindAllActionsResult>, I>>(
    object: I,
  ): PermissionFindAllActionsResult {
    const message = createBasePermissionFindAllActionsResult();
    message.meta = (object.meta !== undefined && object.meta !== null)
      ? PermissionFindAllActionsResultMeta.fromPartial(object.meta)
      : undefined;
    message.results = object.results?.map((e) => Permission.fromPartial(e)) || [];
    return message;
  },
};

function createBasePermissionRemoveAllActionsFilter(): PermissionRemoveAllActionsFilter {
  return { entity: "", entityId: "", permittedEntity: "", permittedEntityId: "" };
}

export const PermissionRemoveAllActionsFilter = {
  encode(message: PermissionRemoveAllActionsFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== "") {
      writer.uint32(10).string(message.entity);
    }
    if (message.entityId !== "") {
      writer.uint32(18).string(message.entityId);
    }
    if (message.permittedEntity !== "") {
      writer.uint32(26).string(message.permittedEntity);
    }
    if (message.permittedEntityId !== "") {
      writer.uint32(34).string(message.permittedEntityId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionRemoveAllActionsFilter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionRemoveAllActionsFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.entity = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.entityId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.permittedEntity = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.permittedEntityId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionRemoveAllActionsFilter {
    return {
      entity: isSet(object.entity) ? globalThis.String(object.entity) : "",
      entityId: isSet(object.entityId) ? globalThis.String(object.entityId) : "",
      permittedEntity: isSet(object.permittedEntity) ? globalThis.String(object.permittedEntity) : "",
      permittedEntityId: isSet(object.permittedEntityId) ? globalThis.String(object.permittedEntityId) : "",
    };
  },

  toJSON(message: PermissionRemoveAllActionsFilter): unknown {
    const obj: any = {};
    if (message.entity !== "") {
      obj.entity = message.entity;
    }
    if (message.entityId !== "") {
      obj.entityId = message.entityId;
    }
    if (message.permittedEntity !== "") {
      obj.permittedEntity = message.permittedEntity;
    }
    if (message.permittedEntityId !== "") {
      obj.permittedEntityId = message.permittedEntityId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionRemoveAllActionsFilter>, I>>(
    base?: I,
  ): PermissionRemoveAllActionsFilter {
    return PermissionRemoveAllActionsFilter.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PermissionRemoveAllActionsFilter>, I>>(
    object: I,
  ): PermissionRemoveAllActionsFilter {
    const message = createBasePermissionRemoveAllActionsFilter();
    message.entity = object.entity ?? "";
    message.entityId = object.entityId ?? "";
    message.permittedEntity = object.permittedEntity ?? "";
    message.permittedEntityId = object.permittedEntityId ?? "";
    return message;
  },
};

function createBasePermissionRemoveAllActionsInput(): PermissionRemoveAllActionsInput {
  return { filter: undefined };
}

export const PermissionRemoveAllActionsInput = {
  encode(message: PermissionRemoveAllActionsInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filter !== undefined) {
      PermissionRemoveAllActionsFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionRemoveAllActionsInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionRemoveAllActionsInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filter = PermissionRemoveAllActionsFilter.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionRemoveAllActionsInput {
    return { filter: isSet(object.filter) ? PermissionRemoveAllActionsFilter.fromJSON(object.filter) : undefined };
  },

  toJSON(message: PermissionRemoveAllActionsInput): unknown {
    const obj: any = {};
    if (message.filter !== undefined) {
      obj.filter = PermissionRemoveAllActionsFilter.toJSON(message.filter);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionRemoveAllActionsInput>, I>>(base?: I): PermissionRemoveAllActionsInput {
    return PermissionRemoveAllActionsInput.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PermissionRemoveAllActionsInput>, I>>(
    object: I,
  ): PermissionRemoveAllActionsInput {
    const message = createBasePermissionRemoveAllActionsInput();
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? PermissionRemoveAllActionsFilter.fromPartial(object.filter)
      : undefined;
    return message;
  },
};

export interface PermissionService {
  CreateOne(request: PermissionCreateOneInput): Promise<Permission>;
  CreateMany(request: PermissionCreateManyInput): Promise<Permissions>;
  FindOne(request: PermissionFindOneInput): Promise<Permission>;
  FindWhere(request: PermissionFindWhereInput): Promise<Permission>;
  FindWhereMany(request: PermissionFindWhereManyInput): Promise<Permissions>;
  FindWhereOrStar(request: PermissionFindWhereOrStarInput): Promise<Permission>;
  FindByPermitted(request: PermissionFindByPermittedInput): Promise<PermissionFindByPermittedResult>;
  FindByEntity(request: PermissionFindByEntityInput): Promise<PermissionFindByEntityResult>;
  FindAllActions(request: PermissionFindAllActionsInput): Promise<PermissionFindAllActionsResult>;
  ValidateOne(request: PermissionValidateOneInput): Promise<PermissionValidateOneResult>;
  RemoveOne(request: PermissionRemoveOneInput): Promise<Empty>;
  RemoveWhere(request: PermissionRemoveWhereInput): Promise<Empty>;
  RemoveWhereMany(request: PermissionRemoveWhereManyInput): Promise<Empty>;
  RemoveAllActions(request: PermissionRemoveAllActionsInput): Promise<Empty>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
