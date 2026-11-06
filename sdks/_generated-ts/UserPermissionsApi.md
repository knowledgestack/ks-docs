# UserPermissionsApi

All URIs are relative to *http://localhost:8000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**bulkGrantUserPermissions**](UserPermissionsApi.md#bulkgrantuserpermissions) | **POST** /v1/user-permissions/bulk | Bulk Grant User Permissions Handler |
| [**bulkRevokeUserPermissions**](UserPermissionsApi.md#bulkrevokeuserpermissions) | **POST** /v1/user-permissions/bulk-delete | Bulk Revoke User Permissions Handler |
| [**createUserPermission**](UserPermissionsApi.md#createuserpermission) | **POST** /v1/user-permissions | Create User Permission Handler |
| [**deleteUserPermission**](UserPermissionsApi.md#deleteuserpermission) | **DELETE** /v1/user-permissions/{permission_id} | Delete User Permission Handler |
| [**listUserPermissions**](UserPermissionsApi.md#listuserpermissions) | **GET** /v1/user-permissions | List User Permissions Handler |
| [**updateUserPermission**](UserPermissionsApi.md#updateuserpermission) | **PATCH** /v1/user-permissions/{permission_id} | Update User Permission Handler |



## bulkGrantUserPermissions

> BulkGrantResponse bulkGrantUserPermissions(bulkGrantRequest)

Bulk Grant User Permissions Handler

Grant many (user, object, flags) permissions (admin/owner or scoped permission manager).  Each grant is applied in its own transaction, reporting a per-item outcome keyed on the (user_id, object_id) pair: a missing/trashed object or a user not in the tenant is &#x60;&#x60;not_found&#x60;&#x60;, hitting the per-user cap is &#x60;&#x60;permission_limit&#x60;&#x60;, and an already-covered grant is &#x60;&#x60;subsumed&#x60;&#x60;.

### Example

```ts
import {
  Configuration,
  UserPermissionsApi,
} from '@knowledge-stack/ksapi';
import type { BulkGrantUserPermissionsRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UserPermissionsApi(config);

  const body = {
    // BulkGrantRequest
    bulkGrantRequest: ...,
  } satisfies BulkGrantUserPermissionsRequest;

  try {
    const data = await api.bulkGrantUserPermissions(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **bulkGrantRequest** | [BulkGrantRequest](BulkGrantRequest.md) |  | |

### Return type

[**BulkGrantResponse**](BulkGrantResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## bulkRevokeUserPermissions

> BulkOperationResponse bulkRevokeUserPermissions(bulkRevokeRequest)

Bulk Revoke User Permissions Handler

Revoke many permissions by their ids (admin/owner or scoped permission manager), per item.  A permission id not found in the tenant lands in &#x60;&#x60;failed&#x60;&#x60; as &#x60;&#x60;not_found&#x60;&#x60;.

### Example

```ts
import {
  Configuration,
  UserPermissionsApi,
} from '@knowledge-stack/ksapi';
import type { BulkRevokeUserPermissionsRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UserPermissionsApi(config);

  const body = {
    // BulkRevokeRequest
    bulkRevokeRequest: ...,
  } satisfies BulkRevokeUserPermissionsRequest;

  try {
    const data = await api.bulkRevokeUserPermissions(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **bulkRevokeRequest** | [BulkRevokeRequest](BulkRevokeRequest.md) |  | |

### Return type

[**BulkOperationResponse**](BulkOperationResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createUserPermission

> PermissionResponse createUserPermission(createPermissionRequest)

Create User Permission Handler

Create a path permission for a user in a tenant (admin/owner or scoped permission manager).

### Example

```ts
import {
  Configuration,
  UserPermissionsApi,
} from '@knowledge-stack/ksapi';
import type { CreateUserPermissionRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UserPermissionsApi(config);

  const body = {
    // CreatePermissionRequest
    createPermissionRequest: ...,
  } satisfies CreateUserPermissionRequest;

  try {
    const data = await api.createUserPermission(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **createPermissionRequest** | [CreatePermissionRequest](CreatePermissionRequest.md) |  | |

### Return type

[**PermissionResponse**](PermissionResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Successful Response |  -  |
| **422** | Validation Error |  -  |
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteUserPermission

> deleteUserPermission(permissionId, tenantId)

Delete User Permission Handler

Delete a path permission (admin/owner or scoped permission manager).

### Example

```ts
import {
  Configuration,
  UserPermissionsApi,
} from '@knowledge-stack/ksapi';
import type { DeleteUserPermissionRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UserPermissionsApi(config);

  const body = {
    // string
    permissionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Tenant ID the permission belongs to
    tenantId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteUserPermissionRequest;

  try {
    const data = await api.deleteUserPermission(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **permissionId** | `string` |  | [Defaults to `undefined`] |
| **tenantId** | `string` | Tenant ID the permission belongs to | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Successful Response |  -  |
| **422** | Validation Error |  -  |
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listUserPermissions

> PaginatedResponsePermissionResponse listUserPermissions(tenantId, userId, sortBy, canRead, canWrite, canDelete, canApprove, canGrantPermissions, limit, offset, sortDir)

List User Permissions Handler

List path permissions for a user in a tenant (admin/owner or scoped permission manager).

### Example

```ts
import {
  Configuration,
  UserPermissionsApi,
} from '@knowledge-stack/ksapi';
import type { ListUserPermissionsRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UserPermissionsApi(config);

  const body = {
    // string | Tenant ID to list permissions for
    tenantId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | User ID to list permissions for
    userId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UserPermissionOrder | Field to sort permissions by (default: CREATED_AT) (optional)
    sortBy: ...,
    // boolean | Filter grants by can_read (optional)
    canRead: true,
    // boolean | Filter grants by can_write (optional)
    canWrite: true,
    // boolean | Filter grants by can_delete (optional)
    canDelete: true,
    // boolean | Filter grants by can_approve (optional)
    canApprove: true,
    // boolean | Filter grants by can_grant_permissions (optional)
    canGrantPermissions: true,
    // number | Number of items per page (optional)
    limit: 56,
    // number | Number of items to skip (optional)
    offset: 56,
    // SortDirection | Sort direction (ASC or DESC); overrides the field\'s natural default. Every sort field supports both directions. (optional)
    sortDir: ...,
  } satisfies ListUserPermissionsRequest;

  try {
    const data = await api.listUserPermissions(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tenantId** | `string` | Tenant ID to list permissions for | [Defaults to `undefined`] |
| **userId** | `string` | User ID to list permissions for | [Defaults to `undefined`] |
| **sortBy** | `UserPermissionOrder` | Field to sort permissions by (default: CREATED_AT) | [Optional] [Defaults to `undefined`] [Enum: CREATED_AT, CAN_READ, CAN_WRITE, CAN_DELETE, CAN_APPROVE, CAN_GRANT_PERMISSIONS] |
| **canRead** | `boolean` | Filter grants by can_read | [Optional] [Defaults to `undefined`] |
| **canWrite** | `boolean` | Filter grants by can_write | [Optional] [Defaults to `undefined`] |
| **canDelete** | `boolean` | Filter grants by can_delete | [Optional] [Defaults to `undefined`] |
| **canApprove** | `boolean` | Filter grants by can_approve | [Optional] [Defaults to `undefined`] |
| **canGrantPermissions** | `boolean` | Filter grants by can_grant_permissions | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items per page | [Optional] [Defaults to `20`] |
| **offset** | `number` | Number of items to skip | [Optional] [Defaults to `0`] |
| **sortDir** | `SortDirection` | Sort direction (ASC or DESC); overrides the field\&#39;s natural default. Every sort field supports both directions. | [Optional] [Defaults to `undefined`] [Enum: ASC, DESC] |

### Return type

[**PaginatedResponsePermissionResponse**](PaginatedResponsePermissionResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateUserPermission

> PermissionResponse updateUserPermission(permissionId, tenantId, updatePermissionRequest)

Update User Permission Handler

Update a path permission (admin/owner or scoped permission manager).

### Example

```ts
import {
  Configuration,
  UserPermissionsApi,
} from '@knowledge-stack/ksapi';
import type { UpdateUserPermissionRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UserPermissionsApi(config);

  const body = {
    // string
    permissionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Tenant ID the permission belongs to
    tenantId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdatePermissionRequest
    updatePermissionRequest: ...,
  } satisfies UpdateUserPermissionRequest;

  try {
    const data = await api.updateUserPermission(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **permissionId** | `string` |  | [Defaults to `undefined`] |
| **tenantId** | `string` | Tenant ID the permission belongs to | [Defaults to `undefined`] |
| **updatePermissionRequest** | [UpdatePermissionRequest](UpdatePermissionRequest.md) |  | |

### Return type

[**PermissionResponse**](PermissionResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

