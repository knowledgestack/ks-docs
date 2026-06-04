# TenantGroupsApi

All URIs are relative to *http://localhost:8000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addGroupMember**](TenantGroupsApi.md#addgroupmember) | **POST** /v1/tenant-groups/{group_id}/members | Add Group Member Handler |
| [**createGroupPermission**](TenantGroupsApi.md#creategrouppermissionoperation) | **POST** /v1/tenant-groups/{group_id}/permissions | Create Group Permission Handler |
| [**createTenantGroup**](TenantGroupsApi.md#createtenantgroup) | **POST** /v1/tenant-groups | Create Tenant Group Handler |
| [**deleteGroupPermission**](TenantGroupsApi.md#deletegrouppermission) | **DELETE** /v1/tenant-groups/{group_id}/permissions/{permission_id} | Delete Group Permission Handler |
| [**deleteTenantGroup**](TenantGroupsApi.md#deletetenantgroup) | **DELETE** /v1/tenant-groups/{group_id} | Delete Tenant Group Handler |
| [**getTenantGroup**](TenantGroupsApi.md#gettenantgroup) | **GET** /v1/tenant-groups/{group_id} | Get Tenant Group Handler |
| [**listGroupMembers**](TenantGroupsApi.md#listgroupmembers) | **GET** /v1/tenant-groups/{group_id}/members | List Group Members Handler |
| [**listGroupPermissions**](TenantGroupsApi.md#listgrouppermissions) | **GET** /v1/tenant-groups/{group_id}/permissions | List Group Permissions Handler |
| [**listMyGroups**](TenantGroupsApi.md#listmygroups) | **GET** /v1/tenant-groups/my-group | List My Groups Handler |
| [**listTenantGroups**](TenantGroupsApi.md#listtenantgroups) | **GET** /v1/tenant-groups | List Tenant Groups Handler |
| [**removeGroupMember**](TenantGroupsApi.md#removegroupmember) | **DELETE** /v1/tenant-groups/{group_id}/members/{user_id} | Remove Group Member Handler |
| [**updateGroupPermission**](TenantGroupsApi.md#updategrouppermissionoperation) | **PATCH** /v1/tenant-groups/{group_id}/permissions/{permission_id} | Update Group Permission Handler |
| [**updateTenantGroup**](TenantGroupsApi.md#updatetenantgroup) | **PATCH** /v1/tenant-groups/{group_id} | Update Tenant Group Handler |



## addGroupMember

> MembershipResponse addGroupMember(groupId, addMemberRequest, authorization, ksUat)

Add Group Member Handler

Add a user to a group (admin/owner only).

### Example

```ts
import {
  Configuration,
  TenantGroupsApi,
} from '@knowledge-stack/ksapi';
import type { AddGroupMemberRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const api = new TenantGroupsApi();

  const body = {
    // string
    groupId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // AddMemberRequest
    addMemberRequest: ...,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
  } satisfies AddGroupMemberRequest;

  try {
    const data = await api.addGroupMember(body);
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
| **groupId** | `string` |  | [Defaults to `undefined`] |
| **addMemberRequest** | [AddMemberRequest](AddMemberRequest.md) |  | |
| **authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ksUat** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**MembershipResponse**](MembershipResponse.md)

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


## createGroupPermission

> GroupPermissionResponse createGroupPermission(groupId, createGroupPermissionRequest, authorization, ksUat)

Create Group Permission Handler

Create a path permission for a group (admin/owner only).

### Example

```ts
import {
  Configuration,
  TenantGroupsApi,
} from '@knowledge-stack/ksapi';
import type { CreateGroupPermissionOperationRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const api = new TenantGroupsApi();

  const body = {
    // string
    groupId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // CreateGroupPermissionRequest
    createGroupPermissionRequest: ...,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
  } satisfies CreateGroupPermissionOperationRequest;

  try {
    const data = await api.createGroupPermission(body);
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
| **groupId** | `string` |  | [Defaults to `undefined`] |
| **createGroupPermissionRequest** | [CreateGroupPermissionRequest](CreateGroupPermissionRequest.md) |  | |
| **authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ksUat** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**GroupPermissionResponse**](GroupPermissionResponse.md)

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


## createTenantGroup

> GroupResponse createTenantGroup(createGroupRequest, authorization, ksUat)

Create Tenant Group Handler

Create a new tenant group (admin/owner only).

### Example

```ts
import {
  Configuration,
  TenantGroupsApi,
} from '@knowledge-stack/ksapi';
import type { CreateTenantGroupRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const api = new TenantGroupsApi();

  const body = {
    // CreateGroupRequest
    createGroupRequest: ...,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
  } satisfies CreateTenantGroupRequest;

  try {
    const data = await api.createTenantGroup(body);
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
| **createGroupRequest** | [CreateGroupRequest](CreateGroupRequest.md) |  | |
| **authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ksUat** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**GroupResponse**](GroupResponse.md)

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


## deleteGroupPermission

> deleteGroupPermission(groupId, permissionId, authorization, ksUat)

Delete Group Permission Handler

Delete a path permission from a group (admin/owner only).

### Example

```ts
import {
  Configuration,
  TenantGroupsApi,
} from '@knowledge-stack/ksapi';
import type { DeleteGroupPermissionRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const api = new TenantGroupsApi();

  const body = {
    // string
    groupId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    permissionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
  } satisfies DeleteGroupPermissionRequest;

  try {
    const data = await api.deleteGroupPermission(body);
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
| **groupId** | `string` |  | [Defaults to `undefined`] |
| **permissionId** | `string` |  | [Defaults to `undefined`] |
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


## deleteTenantGroup

> deleteTenantGroup(groupId, authorization, ksUat)

Delete Tenant Group Handler

Delete a tenant group (admin/owner only).

### Example

```ts
import {
  Configuration,
  TenantGroupsApi,
} from '@knowledge-stack/ksapi';
import type { DeleteTenantGroupRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const api = new TenantGroupsApi();

  const body = {
    // string
    groupId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
  } satisfies DeleteTenantGroupRequest;

  try {
    const data = await api.deleteTenantGroup(body);
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
| **groupId** | `string` |  | [Defaults to `undefined`] |
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


## getTenantGroup

> GroupResponse getTenantGroup(groupId, authorization, ksUat)

Get Tenant Group Handler

Get a tenant group by ID (group member or admin/owner).

### Example

```ts
import {
  Configuration,
  TenantGroupsApi,
} from '@knowledge-stack/ksapi';
import type { GetTenantGroupRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const api = new TenantGroupsApi();

  const body = {
    // string
    groupId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
  } satisfies GetTenantGroupRequest;

  try {
    const data = await api.getTenantGroup(body);
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
| **groupId** | `string` |  | [Defaults to `undefined`] |
| **authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ksUat** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**GroupResponse**](GroupResponse.md)

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


## listGroupMembers

> PaginatedResponseMembershipResponse listGroupMembers(groupId, limit, offset, authorization, ksUat)

List Group Members Handler

List members of a group (group members or admin/owner).

### Example

```ts
import {
  Configuration,
  TenantGroupsApi,
} from '@knowledge-stack/ksapi';
import type { ListGroupMembersRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const api = new TenantGroupsApi();

  const body = {
    // string
    groupId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // number | Number of items per page (optional)
    limit: 56,
    // number | Number of items to skip (optional)
    offset: 56,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
  } satisfies ListGroupMembersRequest;

  try {
    const data = await api.listGroupMembers(body);
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
| **groupId** | `string` |  | [Defaults to `undefined`] |
| **limit** | `number` | Number of items per page | [Optional] [Defaults to `20`] |
| **offset** | `number` | Number of items to skip | [Optional] [Defaults to `0`] |
| **authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ksUat** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**PaginatedResponseMembershipResponse**](PaginatedResponseMembershipResponse.md)

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


## listGroupPermissions

> PaginatedResponseGroupPermissionResponse listGroupPermissions(groupId, limit, offset, authorization, ksUat)

List Group Permissions Handler

List path permissions for a group (group member or admin/owner).

### Example

```ts
import {
  Configuration,
  TenantGroupsApi,
} from '@knowledge-stack/ksapi';
import type { ListGroupPermissionsRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const api = new TenantGroupsApi();

  const body = {
    // string
    groupId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // number | Number of items per page (optional)
    limit: 56,
    // number | Number of items to skip (optional)
    offset: 56,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
  } satisfies ListGroupPermissionsRequest;

  try {
    const data = await api.listGroupPermissions(body);
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
| **groupId** | `string` |  | [Defaults to `undefined`] |
| **limit** | `number` | Number of items per page | [Optional] [Defaults to `20`] |
| **offset** | `number` | Number of items to skip | [Optional] [Defaults to `0`] |
| **authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ksUat** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**PaginatedResponseGroupPermissionResponse**](PaginatedResponseGroupPermissionResponse.md)

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


## listMyGroups

> Array&lt;GroupResponse&gt; listMyGroups(authorization, ksUat)

List My Groups Handler

List groups the current user belongs to.

### Example

```ts
import {
  Configuration,
  TenantGroupsApi,
} from '@knowledge-stack/ksapi';
import type { ListMyGroupsRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const api = new TenantGroupsApi();

  const body = {
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
  } satisfies ListMyGroupsRequest;

  try {
    const data = await api.listMyGroups(body);
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
| **authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ksUat** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**Array&lt;GroupResponse&gt;**](GroupResponse.md)

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


## listTenantGroups

> PaginatedResponseGroupResponse listTenantGroups(limit, offset, authorization, ksUat)

List Tenant Groups Handler

List tenant groups.  Admin/owner see all groups; other members see only groups they belong to.

### Example

```ts
import {
  Configuration,
  TenantGroupsApi,
} from '@knowledge-stack/ksapi';
import type { ListTenantGroupsRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const api = new TenantGroupsApi();

  const body = {
    // number | Number of items per page (optional)
    limit: 56,
    // number | Number of items to skip (optional)
    offset: 56,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
  } satisfies ListTenantGroupsRequest;

  try {
    const data = await api.listTenantGroups(body);
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
| **limit** | `number` | Number of items per page | [Optional] [Defaults to `20`] |
| **offset** | `number` | Number of items to skip | [Optional] [Defaults to `0`] |
| **authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ksUat** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**PaginatedResponseGroupResponse**](PaginatedResponseGroupResponse.md)

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


## removeGroupMember

> removeGroupMember(groupId, userId, authorization, ksUat)

Remove Group Member Handler

Remove a user from a group (admin/owner only).

### Example

```ts
import {
  Configuration,
  TenantGroupsApi,
} from '@knowledge-stack/ksapi';
import type { RemoveGroupMemberRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const api = new TenantGroupsApi();

  const body = {
    // string
    groupId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    userId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
  } satisfies RemoveGroupMemberRequest;

  try {
    const data = await api.removeGroupMember(body);
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
| **groupId** | `string` |  | [Defaults to `undefined`] |
| **userId** | `string` |  | [Defaults to `undefined`] |
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


## updateGroupPermission

> GroupPermissionResponse updateGroupPermission(groupId, permissionId, updateGroupPermissionRequest, authorization, ksUat)

Update Group Permission Handler

Update a path permission for a group (admin/owner only).

### Example

```ts
import {
  Configuration,
  TenantGroupsApi,
} from '@knowledge-stack/ksapi';
import type { UpdateGroupPermissionOperationRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const api = new TenantGroupsApi();

  const body = {
    // string
    groupId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    permissionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateGroupPermissionRequest
    updateGroupPermissionRequest: ...,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
  } satisfies UpdateGroupPermissionOperationRequest;

  try {
    const data = await api.updateGroupPermission(body);
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
| **groupId** | `string` |  | [Defaults to `undefined`] |
| **permissionId** | `string` |  | [Defaults to `undefined`] |
| **updateGroupPermissionRequest** | [UpdateGroupPermissionRequest](UpdateGroupPermissionRequest.md) |  | |
| **authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ksUat** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**GroupPermissionResponse**](GroupPermissionResponse.md)

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


## updateTenantGroup

> GroupResponse updateTenantGroup(groupId, updateGroupRequest, authorization, ksUat)

Update Tenant Group Handler

Update a tenant group (admin/owner only).

### Example

```ts
import {
  Configuration,
  TenantGroupsApi,
} from '@knowledge-stack/ksapi';
import type { UpdateTenantGroupRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const api = new TenantGroupsApi();

  const body = {
    // string
    groupId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateGroupRequest
    updateGroupRequest: ...,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
  } satisfies UpdateTenantGroupRequest;

  try {
    const data = await api.updateTenantGroup(body);
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
| **groupId** | `string` |  | [Defaults to `undefined`] |
| **updateGroupRequest** | [UpdateGroupRequest](UpdateGroupRequest.md) |  | |
| **authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ksUat** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**GroupResponse**](GroupResponse.md)

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

