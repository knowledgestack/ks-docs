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

> MembershipResponse addGroupMember(groupId, addMemberRequest)

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
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TenantGroupsApi(config);

  const body = {
    // string
    groupId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // AddMemberRequest
    addMemberRequest: ...,
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

### Return type

[**MembershipResponse**](MembershipResponse.md)

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


## createGroupPermission

> GroupPermissionResponse createGroupPermission(groupId, createGroupPermissionRequest)

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
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TenantGroupsApi(config);

  const body = {
    // string
    groupId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // CreateGroupPermissionRequest
    createGroupPermissionRequest: ...,
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

### Return type

[**GroupPermissionResponse**](GroupPermissionResponse.md)

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


## createTenantGroup

> GroupResponse createTenantGroup(createGroupRequest)

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
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TenantGroupsApi(config);

  const body = {
    // CreateGroupRequest
    createGroupRequest: ...,
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

### Return type

[**GroupResponse**](GroupResponse.md)

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


## deleteGroupPermission

> deleteGroupPermission(groupId, permissionId)

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
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TenantGroupsApi(config);

  const body = {
    // string
    groupId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    permissionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
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


## deleteTenantGroup

> deleteTenantGroup(groupId)

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
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TenantGroupsApi(config);

  const body = {
    // string
    groupId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
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


## getTenantGroup

> GroupResponse getTenantGroup(groupId)

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
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TenantGroupsApi(config);

  const body = {
    // string
    groupId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
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

### Return type

[**GroupResponse**](GroupResponse.md)

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


## listGroupMembers

> PaginatedResponseMembershipResponse listGroupMembers(groupId, sortBy, sortDir, usernameLike, limit, offset)

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
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TenantGroupsApi(config);

  const body = {
    // string
    groupId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // GroupMemberOrder | Field to sort members by (default: ADDED_AT) (optional)
    sortBy: ...,
    // SortDirection | Sort direction; overrides the field\'s natural default (optional)
    sortDir: ...,
    // string | Case-insensitive substring filter on member name (optional)
    usernameLike: usernameLike_example,
    // number | Number of items per page (optional)
    limit: 56,
    // number | Number of items to skip (optional)
    offset: 56,
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
| **sortBy** | `GroupMemberOrder` | Field to sort members by (default: ADDED_AT) | [Optional] [Defaults to `undefined`] [Enum: ADDED_AT, USERNAME] |
| **sortDir** | `SortDirection` | Sort direction; overrides the field\&#39;s natural default | [Optional] [Defaults to `undefined`] [Enum: ASC, DESC] |
| **usernameLike** | `string` | Case-insensitive substring filter on member name | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items per page | [Optional] [Defaults to `20`] |
| **offset** | `number` | Number of items to skip | [Optional] [Defaults to `0`] |

### Return type

[**PaginatedResponseMembershipResponse**](PaginatedResponseMembershipResponse.md)

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


## listGroupPermissions

> PaginatedResponseGroupPermissionResponse listGroupPermissions(groupId, sortBy, sortDir, capability, limit, offset)

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
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TenantGroupsApi(config);

  const body = {
    // string
    groupId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // GroupPermissionOrder | Field to sort permissions by (default: CREATED_AT) (optional)
    sortBy: ...,
    // SortDirection | Sort direction; overrides the field\'s natural default (optional)
    sortDir: ...,
    // PermissionCapability | Filter to permissions with this capability (optional)
    capability: ...,
    // number | Number of items per page (optional)
    limit: 56,
    // number | Number of items to skip (optional)
    offset: 56,
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
| **sortBy** | `GroupPermissionOrder` | Field to sort permissions by (default: CREATED_AT) | [Optional] [Defaults to `undefined`] [Enum: CREATED_AT, CAPABILITY] |
| **sortDir** | `SortDirection` | Sort direction; overrides the field\&#39;s natural default | [Optional] [Defaults to `undefined`] [Enum: ASC, DESC] |
| **capability** | `PermissionCapability` | Filter to permissions with this capability | [Optional] [Defaults to `undefined`] [Enum: READ_ONLY, READ_WRITE, READ_WRITE_DELETE] |
| **limit** | `number` | Number of items per page | [Optional] [Defaults to `20`] |
| **offset** | `number` | Number of items to skip | [Optional] [Defaults to `0`] |

### Return type

[**PaginatedResponseGroupPermissionResponse**](PaginatedResponseGroupPermissionResponse.md)

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


## listMyGroups

> Array&lt;GroupResponse&gt; listMyGroups()

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
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TenantGroupsApi(config);

  try {
    const data = await api.listMyGroups();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;GroupResponse&gt;**](GroupResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listTenantGroups

> PaginatedResponseGroupResponse listTenantGroups(sortBy, sortDir, nameLike, hasUserIds, limit, offset, createdAfter, createdBefore, updatedAfter, updatedBefore)

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
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TenantGroupsApi(config);

  const body = {
    // TenantGroupOrder | Field to sort groups by (default: NAME) (optional)
    sortBy: ...,
    // SortDirection | Sort direction; overrides the field\'s natural default (optional)
    sortDir: ...,
    // string | Case-insensitive substring filter on name (optional)
    nameLike: nameLike_example,
    // Array<string> | Only groups containing ALL of these user ids (optional)
    hasUserIds: ...,
    // number | Number of items per page (optional)
    limit: 56,
    // number | Number of items to skip (optional)
    offset: 56,
    // Date | Only items created at or after this timestamp (inclusive) (optional)
    createdAfter: 2013-10-20T19:20:30+01:00,
    // Date | Only items created strictly before this timestamp (optional)
    createdBefore: 2013-10-20T19:20:30+01:00,
    // Date | Only items updated at or after this timestamp (inclusive) (optional)
    updatedAfter: 2013-10-20T19:20:30+01:00,
    // Date | Only items updated strictly before this timestamp (optional)
    updatedBefore: 2013-10-20T19:20:30+01:00,
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
| **sortBy** | `TenantGroupOrder` | Field to sort groups by (default: NAME) | [Optional] [Defaults to `undefined`] [Enum: NAME, CREATED_AT] |
| **sortDir** | `SortDirection` | Sort direction; overrides the field\&#39;s natural default | [Optional] [Defaults to `undefined`] [Enum: ASC, DESC] |
| **nameLike** | `string` | Case-insensitive substring filter on name | [Optional] [Defaults to `undefined`] |
| **hasUserIds** | `Array<string>` | Only groups containing ALL of these user ids | [Optional] |
| **limit** | `number` | Number of items per page | [Optional] [Defaults to `20`] |
| **offset** | `number` | Number of items to skip | [Optional] [Defaults to `0`] |
| **createdAfter** | `Date` | Only items created at or after this timestamp (inclusive) | [Optional] [Defaults to `undefined`] |
| **createdBefore** | `Date` | Only items created strictly before this timestamp | [Optional] [Defaults to `undefined`] |
| **updatedAfter** | `Date` | Only items updated at or after this timestamp (inclusive) | [Optional] [Defaults to `undefined`] |
| **updatedBefore** | `Date` | Only items updated strictly before this timestamp | [Optional] [Defaults to `undefined`] |

### Return type

[**PaginatedResponseGroupResponse**](PaginatedResponseGroupResponse.md)

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


## removeGroupMember

> removeGroupMember(groupId, userId)

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
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TenantGroupsApi(config);

  const body = {
    // string
    groupId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    userId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
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


## updateGroupPermission

> GroupPermissionResponse updateGroupPermission(groupId, permissionId, updateGroupPermissionRequest)

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
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TenantGroupsApi(config);

  const body = {
    // string
    groupId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    permissionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateGroupPermissionRequest
    updateGroupPermissionRequest: ...,
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

### Return type

[**GroupPermissionResponse**](GroupPermissionResponse.md)

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


## updateTenantGroup

> GroupResponse updateTenantGroup(groupId, updateGroupRequest)

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
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TenantGroupsApi(config);

  const body = {
    // string
    groupId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateGroupRequest
    updateGroupRequest: ...,
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

### Return type

[**GroupResponse**](GroupResponse.md)

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

