# UserPermissionsApi

All URIs are relative to *http://localhost:8000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createUserPermission**](UserPermissionsApi.md#createuserpermission) | **POST** /v1/user-permissions | Create User Permission Handler |
| [**deleteUserPermission**](UserPermissionsApi.md#deleteuserpermission) | **DELETE** /v1/user-permissions/{permission_id} | Delete User Permission Handler |
| [**listUserPermissions**](UserPermissionsApi.md#listuserpermissions) | **GET** /v1/user-permissions | List User Permissions Handler |
| [**updateUserPermission**](UserPermissionsApi.md#updateuserpermission) | **PATCH** /v1/user-permissions/{permission_id} | Update User Permission Handler |



## createUserPermission

> PermissionResponse createUserPermission(createPermissionRequest, authorization, ksUat)

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
  const api = new UserPermissionsApi();

  const body = {
    // CreatePermissionRequest
    createPermissionRequest: ...,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
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
| **authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ksUat** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**PermissionResponse**](PermissionResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteUserPermission

> deleteUserPermission(permissionId, tenantId, authorization, ksUat)

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
  const api = new UserPermissionsApi();

  const body = {
    // string
    permissionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Tenant ID the permission belongs to
    tenantId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
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
| **authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ksUat** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listUserPermissions

> PaginatedResponsePermissionResponse listUserPermissions(tenantId, userId, limit, offset, authorization, ksUat)

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
  const api = new UserPermissionsApi();

  const body = {
    // string | Tenant ID to list permissions for
    tenantId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | User ID to list permissions for
    userId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // number | Number of items per page (optional)
    limit: 56,
    // number | Number of items to skip (optional)
    offset: 56,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
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
| **limit** | `number` | Number of items per page | [Optional] [Defaults to `20`] |
| **offset** | `number` | Number of items to skip | [Optional] [Defaults to `0`] |
| **authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ksUat** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**PaginatedResponsePermissionResponse**](PaginatedResponsePermissionResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateUserPermission

> PermissionResponse updateUserPermission(permissionId, tenantId, updatePermissionRequest, authorization, ksUat)

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
  const api = new UserPermissionsApi();

  const body = {
    // string
    permissionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Tenant ID the permission belongs to
    tenantId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdatePermissionRequest
    updatePermissionRequest: ...,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
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
| **authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ksUat** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**PermissionResponse**](PermissionResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

