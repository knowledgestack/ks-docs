# InvitesApi

All URIs are relative to *http://localhost:8000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**acceptInvite**](InvitesApi.md#acceptinvite) | **POST** /v1/invites/{invite_id}/accept | Accept Invite |
| [**createInvite**](InvitesApi.md#createinvite) | **POST** /v1/invites | Create Invite |
| [**deleteInvite**](InvitesApi.md#deleteinvite) | **DELETE** /v1/invites/{invite_id} | Delete Invite |
| [**listInvites**](InvitesApi.md#listinvites) | **GET** /v1/invites | List Invites Handler |
| [**updateInvite**](InvitesApi.md#updateinviteoperation) | **PATCH** /v1/invites/{invite_id} | Update Invite Handler |



## acceptInvite

> AcceptInviteResponse acceptInvite(inviteId)

Accept Invite

Accept an invite OR a tenant invite-link.  The path parameter &#x60;&#x60;invite_id&#x60;&#x60; may be either:   * a Tenant ID (when an admin has enabled &#x60;&#x60;invite_link&#x60;&#x60; on the tenant), OR   * an Invite ID (the traditional per-email invite flow).  Tenant lookup is tried first. If the row is found, the request is treated as an invite-link request — both 400 paths below have *distinct* messages so the frontend can branch on copy:   * \&quot;does not have invite link enabled\&quot; → admin hasn\&#39;t turned it on   * \&quot;does not support inviting users\&quot;   → tenant kill-switch &#x60;&#x60;system_metadata.can_invite&#x60;&#x60; is honored on this path too — it\&#39;s a hard kill switch for self-serve onboarding. Only when no tenant matches do we look up an Invite row.

### Example

```ts
import {
  Configuration,
  InvitesApi,
} from '@knowledge-stack/ksapi';
import type { AcceptInviteRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InvitesApi(config);

  const body = {
    // string | Either an Invite ID (traditional per-email invite) OR a Tenant ID (when the tenant has ``invite_link.enabled``). Tenant lookup is tried first.
    inviteId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies AcceptInviteRequest;

  try {
    const data = await api.acceptInvite(body);
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
| **inviteId** | `string` | Either an Invite ID (traditional per-email invite) OR a Tenant ID (when the tenant has &#x60;&#x60;invite_link.enabled&#x60;&#x60;). Tenant lookup is tried first. | [Defaults to `undefined`] |

### Return type

[**AcceptInviteResponse**](AcceptInviteResponse.md)

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


## createInvite

> InviteResponse createInvite(inviteUserRequest)

Create Invite

Create an invite for a user to join a tenant (admin-only).  For external IdP tenants (idp_config is set), users are added directly if they exist. For shared IdP tenants (PASSWORD/GOOGLE), an email invite is sent that must be accepted.

### Example

```ts
import {
  Configuration,
  InvitesApi,
} from '@knowledge-stack/ksapi';
import type { CreateInviteRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InvitesApi(config);

  const body = {
    // InviteUserRequest
    inviteUserRequest: ...,
  } satisfies CreateInviteRequest;

  try {
    const data = await api.createInvite(body);
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
| **inviteUserRequest** | [InviteUserRequest](InviteUserRequest.md) |  | |

### Return type

[**InviteResponse**](InviteResponse.md)

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


## deleteInvite

> deleteInvite(inviteId)

Delete Invite

Hard-delete an invite (admin/owner only).  Permanently removes the invite. The invite must belong to the caller\&#39;s current tenant.

### Example

```ts
import {
  Configuration,
  InvitesApi,
} from '@knowledge-stack/ksapi';
import type { DeleteInviteRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InvitesApi(config);

  const body = {
    // string
    inviteId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteInviteRequest;

  try {
    const data = await api.deleteInvite(body);
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
| **inviteId** | `string` |  | [Defaults to `undefined`] |

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


## listInvites

> PaginatedResponseInviteResponse listInvites(email, status, role, invitedBy, sortBy, sortDir, limit, offset, createdAfter, createdBefore, updatedAfter, updatedBefore)

List Invites Handler

List invites with pagination, filtering, and sorting.  Supports filtering by email, status, role, and a created_at/updated_at timestamp range. Results sort by created_at (ascending) by default.

### Example

```ts
import {
  Configuration,
  InvitesApi,
} from '@knowledge-stack/ksapi';
import type { ListInvitesRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InvitesApi(config);

  const body = {
    // string | Filter by email (case-insensitive partial match) (optional)
    email: email_example,
    // InviteStatus | Filter by invite status (pending, accepted, expired) (optional)
    status: ...,
    // TenantUserRole | Filter by invite role (optional)
    role: ...,
    // string | Filter to invites sent by this user (optional)
    invitedBy: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // InviteOrder | Field to sort invites by (default: CREATED_AT) (optional)
    sortBy: ...,
    // SortDirection | Sort direction; overrides the field\'s natural default (optional)
    sortDir: ...,
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
  } satisfies ListInvitesRequest;

  try {
    const data = await api.listInvites(body);
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
| **email** | `string` | Filter by email (case-insensitive partial match) | [Optional] [Defaults to `undefined`] |
| **status** | `InviteStatus` | Filter by invite status (pending, accepted, expired) | [Optional] [Defaults to `undefined`] [Enum: pending, accepted, expired] |
| **role** | `TenantUserRole` | Filter by invite role | [Optional] [Defaults to `undefined`] [Enum: USER, OWNER, ADMIN] |
| **invitedBy** | `string` | Filter to invites sent by this user | [Optional] [Defaults to `undefined`] |
| **sortBy** | `InviteOrder` | Field to sort invites by (default: CREATED_AT) | [Optional] [Defaults to `undefined`] [Enum: CREATED_AT, EXPIRES_AT] |
| **sortDir** | `SortDirection` | Sort direction; overrides the field\&#39;s natural default | [Optional] [Defaults to `undefined`] [Enum: ASC, DESC] |
| **limit** | `number` | Number of items per page | [Optional] [Defaults to `20`] |
| **offset** | `number` | Number of items to skip | [Optional] [Defaults to `0`] |
| **createdAfter** | `Date` | Only items created at or after this timestamp (inclusive) | [Optional] [Defaults to `undefined`] |
| **createdBefore** | `Date` | Only items created strictly before this timestamp | [Optional] [Defaults to `undefined`] |
| **updatedAfter** | `Date` | Only items updated at or after this timestamp (inclusive) | [Optional] [Defaults to `undefined`] |
| **updatedBefore** | `Date` | Only items updated strictly before this timestamp | [Optional] [Defaults to `undefined`] |

### Return type

[**PaginatedResponseInviteResponse**](PaginatedResponseInviteResponse.md)

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


## updateInvite

> InviteResponse updateInvite(inviteId, updateInviteRequest)

Update Invite Handler

Update an invite\&#39;s expiry or groups (admin/owner only).  The invite must belong to the caller\&#39;s current tenant. Any provided groups are validated to belong to the same tenant.

### Example

```ts
import {
  Configuration,
  InvitesApi,
} from '@knowledge-stack/ksapi';
import type { UpdateInviteOperationRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InvitesApi(config);

  const body = {
    // string
    inviteId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateInviteRequest
    updateInviteRequest: ...,
  } satisfies UpdateInviteOperationRequest;

  try {
    const data = await api.updateInvite(body);
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
| **inviteId** | `string` |  | [Defaults to `undefined`] |
| **updateInviteRequest** | [UpdateInviteRequest](UpdateInviteRequest.md) |  | |

### Return type

[**InviteResponse**](InviteResponse.md)

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

