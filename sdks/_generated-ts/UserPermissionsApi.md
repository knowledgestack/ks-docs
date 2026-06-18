# UserPermissionsApi

All URIs are relative to *http://localhost:8000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createUserPermission**](UserPermissionsApi.md#createuserpermission) | **POST** /v1/user-permissions | Create User Permission Handler |
| [**deleteUserPermission**](UserPermissionsApi.md#deleteuserpermission) | **DELETE** /v1/user-permissions/{permission_id} | Delete User Permission Handler |
| [**listUserPermissions**](UserPermissionsApi.md#listuserpermissions) | **GET** /v1/user-permissions | List User Permissions Handler |
| [**updateUserPermission**](UserPermissionsApi.md#updateuserpermission) | **PATCH** /v1/user-permissions/{permission_id} | Update User Permission Handler |



## createUserPermission

> PermissionResponse createUserPermission(createPermissionRequest)

Create User Permission Handler

Create a path permission for a user in a tenant (admin/owner only).

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

Delete a path permission (admin/owner only).

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

> PaginatedResponsePermissionResponse listUserPermissions(tenantId, userId, sortBy, sortDir, capability, limit, offset)

List User Permissions Handler

List path permissions for a user in a tenant (admin/owner only).

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
    // SortDirection | Sort direction; overrides the field\'s natural default (optional)
    sortDir: ...,
    // PermissionCapability | Filter to a single capability level (optional)
    capability: ...,
    // number | Number of items per page (optional)
    limit: 56,
    // number | Number of items to skip (optional)
    offset: 56,
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
| **sortBy** | `UserPermissionOrder` | Field to sort permissions by (default: CREATED_AT) | [Optional] [Defaults to `undefined`] [Enum: CREATED_AT, CAPABILITY] |
| **sortDir** | `SortDirection` | Sort direction; overrides the field\&#39;s natural default | [Optional] [Defaults to `undefined`] [Enum: ASC, DESC] |
| **capability** | `PermissionCapability` | Filter to a single capability level | [Optional] [Defaults to `undefined`] [Enum: READ_ONLY, READ_WRITE, READ_WRITE_DELETE] |
| **limit** | `number` | Number of items per page | [Optional] [Defaults to `20`] |
| **offset** | `number` | Number of items to skip | [Optional] [Defaults to `0`] |

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

Update a path permission (admin/owner only).

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

