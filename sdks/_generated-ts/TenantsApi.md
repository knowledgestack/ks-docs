# TenantsApi

All URIs are relative to *http://localhost:8000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**activateTenantUser**](TenantsApi.md#activatetenantuser) | **POST** /v1/tenants/{tenant_id}/users/{user_id}/activate | Activate Tenant User Handler |
| [**deactivateTenantUser**](TenantsApi.md#deactivatetenantuser) | **POST** /v1/tenants/{tenant_id}/users/{user_id}/deactivate | Deactivate Tenant User Handler |
| [**deleteTenant**](TenantsApi.md#deletetenant) | **DELETE** /v1/tenants/{tenant_id} | Delete Tenant |
| [**deleteTenantLogo**](TenantsApi.md#deletetenantlogo) | **DELETE** /v1/tenants/{tenant_id}/branding/logo | Delete Tenant Logo |
| [**deleteTenantUser**](TenantsApi.md#deletetenantuser) | **DELETE** /v1/tenants/{tenant_id}/users/{user_id} | Delete Tenant User Handler |
| [**getTenant**](TenantsApi.md#gettenant) | **GET** /v1/tenants/{tenant_id} | Get Tenant |
| [**getTenantPlan**](TenantsApi.md#gettenantplan) | **GET** /v1/tenants/{tenant_id}/plan | Get Tenant Plan Handler |
| [**getTenantQuotaState**](TenantsApi.md#gettenantquotastate) | **GET** /v1/tenants/{tenant_id}/quota | Get Tenant Quota State Handler |
| [**listTenantUsers**](TenantsApi.md#listtenantusers) | **GET** /v1/tenants/{tenant_id}/users | List Tenant Users |
| [**listTenants**](TenantsApi.md#listtenants) | **GET** /v1/tenants | List Tenants |
| [**updateTenant**](TenantsApi.md#updatetenantoperation) | **PATCH** /v1/tenants/{tenant_id} | Update Tenant |
| [**updateTenantUser**](TenantsApi.md#updatetenantuser) | **PATCH** /v1/tenants/{tenant_id}/users/{user_id} | Update Tenant User |
| [**uploadTenantLogo**](TenantsApi.md#uploadtenantlogo) | **POST** /v1/tenants/{tenant_id}/branding/logo | Upload Tenant Logo |



## activateTenantUser

> TenantUserResponse activateTenantUser(tenantId, userId)

Activate Tenant User Handler

Reactivate a deactivated tenant user.

### Example

```ts
import {
  Configuration,
  TenantsApi,
} from '@knowledge-stack/ksapi';
import type { ActivateTenantUserRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TenantsApi(config);

  const body = {
    // string
    tenantId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    userId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies ActivateTenantUserRequest;

  try {
    const data = await api.activateTenantUser(body);
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
| **tenantId** | `string` |  | [Defaults to `undefined`] |
| **userId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**TenantUserResponse**](TenantUserResponse.md)

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


## deactivateTenantUser

> TenantUserResponse deactivateTenantUser(tenantId, userId)

Deactivate Tenant User Handler

Deactivate a tenant user (soft delete).  The user\&#39;s group memberships in this tenant are permanently removed. They will not be restored on reactivation and must be re-added manually.

### Example

```ts
import {
  Configuration,
  TenantsApi,
} from '@knowledge-stack/ksapi';
import type { DeactivateTenantUserRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TenantsApi(config);

  const body = {
    // string
    tenantId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    userId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeactivateTenantUserRequest;

  try {
    const data = await api.deactivateTenantUser(body);
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
| **tenantId** | `string` |  | [Defaults to `undefined`] |
| **userId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**TenantUserResponse**](TenantUserResponse.md)

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


## deleteTenant

> deleteTenant(tenantId)

Delete Tenant

Delete a tenant.  Requires OWNER role in the tenant. Refused (409) while a provider subscription is live; the OWNER cancels it in the billing portal first. After the delete commits, stops the tenant\&#39;s running workflows, removes its schedules, purges its search points and deletes its LiteLLM team/keys and S3 bucket.

### Example

```ts
import {
  Configuration,
  TenantsApi,
} from '@knowledge-stack/ksapi';
import type { DeleteTenantRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TenantsApi(config);

  const body = {
    // string
    tenantId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteTenantRequest;

  try {
    const data = await api.deleteTenant(body);
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
| **tenantId** | `string` |  | [Defaults to `undefined`] |

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


## deleteTenantLogo

> TenantResponse deleteTenantLogo(tenantId, logoType)

Delete Tenant Logo

Delete a branding logo.  Requires OWNER or ADMIN role.

### Example

```ts
import {
  Configuration,
  TenantsApi,
} from '@knowledge-stack/ksapi';
import type { DeleteTenantLogoRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TenantsApi(config);

  const body = {
    // string
    tenantId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // BrandingLogoType (optional)
    logoType: ...,
  } satisfies DeleteTenantLogoRequest;

  try {
    const data = await api.deleteTenantLogo(body);
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
| **tenantId** | `string` |  | [Defaults to `undefined`] |
| **logoType** | `BrandingLogoType` |  | [Optional] [Defaults to `undefined`] [Enum: logo, logo_dark, favicon] |

### Return type

[**TenantResponse**](TenantResponse.md)

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


## deleteTenantUser

> deleteTenantUser(tenantId, userId)

Delete Tenant User Handler

Remove a user from a tenant (hard delete).  Only non-directory-synced users can be removed. Directory-synced users must be managed via directory sync.

### Example

```ts
import {
  Configuration,
  TenantsApi,
} from '@knowledge-stack/ksapi';
import type { DeleteTenantUserRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TenantsApi(config);

  const body = {
    // string
    tenantId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    userId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteTenantUserRequest;

  try {
    const data = await api.deleteTenantUser(body);
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
| **tenantId** | `string` |  | [Defaults to `undefined`] |
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


## getTenant

> TenantResponse getTenant(tenantId)

Get Tenant

Get tenant information by ID.  User must be a member of the tenant.

### Example

```ts
import {
  Configuration,
  TenantsApi,
} from '@knowledge-stack/ksapi';
import type { GetTenantRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TenantsApi(config);

  const body = {
    // string
    tenantId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetTenantRequest;

  try {
    const data = await api.getTenant(body);
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
| **tenantId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**TenantResponse**](TenantResponse.md)

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


## getTenantPlan

> TenantPlanResponse getTenantPlan(tenantId)

Get Tenant Plan Handler

The tenant\&#39;s plan in force, public or private, with what it grants.  Any active member can read. &#x60;&#x60;billed&#x60;&#x60; says whether a billing subscription sets the plan (change it in the billing portal) rather than an operator\&#39;s contract or free. Once an unpaid renewal\&#39;s grace has run out this is the free plan with one seat, as the meter charges. &#x60;&#x60;GET /v1/plans&#x60;&#x60; lists the public plans the tenant can buy.

### Example

```ts
import {
  Configuration,
  TenantsApi,
} from '@knowledge-stack/ksapi';
import type { GetTenantPlanRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TenantsApi(config);

  const body = {
    // string
    tenantId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetTenantPlanRequest;

  try {
    const data = await api.getTenantPlan(body);
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
| **tenantId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**TenantPlanResponse**](TenantPlanResponse.md)

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


## getTenantQuotaState

> TenantQuotaResponse getTenantQuotaState(tenantId)

Get Tenant Quota State Handler

Read the tenant\&#39;s metered entitlements and seats under the plan in force.  Any active member of the tenant can read. Entries are keyed by entitlement key (audio and video in seconds). A read writes nothing: an allowance not yet granted this window is reported at the size the first charge grants.

### Example

```ts
import {
  Configuration,
  TenantsApi,
} from '@knowledge-stack/ksapi';
import type { GetTenantQuotaStateRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TenantsApi(config);

  const body = {
    // string
    tenantId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetTenantQuotaStateRequest;

  try {
    const data = await api.getTenantQuotaState(body);
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
| **tenantId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**TenantQuotaResponse**](TenantQuotaResponse.md)

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


## listTenantUsers

> PaginatedResponseTenantUserResponse listTenantUsers(tenantId, sortBy, role, usernameLike, activeOnly, limit, offset, sortDir)

List Tenant Users

List members of a tenant with pagination.  Requires OWNER, ADMIN, or a path management grant in the tenant.

### Example

```ts
import {
  Configuration,
  TenantsApi,
} from '@knowledge-stack/ksapi';
import type { ListTenantUsersRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TenantsApi(config);

  const body = {
    // string
    tenantId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // TenantUserOrder | Field to sort members by (default: active-first) (optional)
    sortBy: ...,
    // TenantUserRole | Filter to members with this role (optional)
    role: ...,
    // string | Case-insensitive substring filter on first/last name (optional)
    usernameLike: usernameLike_example,
    // boolean | Exclude deactivated members (optional)
    activeOnly: true,
    // number | Number of items per page (optional)
    limit: 56,
    // number | Number of items to skip (optional)
    offset: 56,
    // SortDirection | Sort direction (ASC or DESC); overrides the field\'s natural default. Every sort field supports both directions. (optional)
    sortDir: ...,
  } satisfies ListTenantUsersRequest;

  try {
    const data = await api.listTenantUsers(body);
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
| **tenantId** | `string` |  | [Defaults to `undefined`] |
| **sortBy** | `TenantUserOrder` | Field to sort members by (default: active-first) | [Optional] [Defaults to `undefined`] [Enum: ADDED_AT, USERNAME, ROLE] |
| **role** | `TenantUserRole` | Filter to members with this role | [Optional] [Defaults to `undefined`] [Enum: USER, OWNER, ADMIN] |
| **usernameLike** | `string` | Case-insensitive substring filter on first/last name | [Optional] [Defaults to `undefined`] |
| **activeOnly** | `boolean` | Exclude deactivated members | [Optional] [Defaults to `false`] |
| **limit** | `number` | Number of items per page | [Optional] [Defaults to `20`] |
| **offset** | `number` | Number of items to skip | [Optional] [Defaults to `0`] |
| **sortDir** | `SortDirection` | Sort direction (ASC or DESC); overrides the field\&#39;s natural default. Every sort field supports both directions. | [Optional] [Defaults to `undefined`] [Enum: ASC, DESC] |

### Return type

[**PaginatedResponseTenantUserResponse**](PaginatedResponseTenantUserResponse.md)

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


## listTenants

> PaginatedResponseTenantResponse listTenants(limit, offset)

List Tenants

List all tenants the current user belongs to.

### Example

```ts
import {
  Configuration,
  TenantsApi,
} from '@knowledge-stack/ksapi';
import type { ListTenantsRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TenantsApi(config);

  const body = {
    // number | Number of items per page (optional)
    limit: 56,
    // number | Number of items to skip (optional)
    offset: 56,
  } satisfies ListTenantsRequest;

  try {
    const data = await api.listTenants(body);
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

### Return type

[**PaginatedResponseTenantResponse**](PaginatedResponseTenantResponse.md)

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


## updateTenant

> TenantResponse updateTenant(tenantId, updateTenantRequest)

Update Tenant

Update tenant configuration.  Requires OWNER or ADMIN role in the tenant.

### Example

```ts
import {
  Configuration,
  TenantsApi,
} from '@knowledge-stack/ksapi';
import type { UpdateTenantOperationRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TenantsApi(config);

  const body = {
    // string
    tenantId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateTenantRequest
    updateTenantRequest: ...,
  } satisfies UpdateTenantOperationRequest;

  try {
    const data = await api.updateTenant(body);
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
| **tenantId** | `string` |  | [Defaults to `undefined`] |
| **updateTenantRequest** | [UpdateTenantRequest](UpdateTenantRequest.md) |  | |

### Return type

[**TenantResponse**](TenantResponse.md)

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


## updateTenantUser

> TenantUserResponse updateTenantUser(tenantId, userId, tenantUserEditRequest)

Update Tenant User

Update a user\&#39;s role and optional profile fields in a tenant.  Requires OWNER or ADMIN role. Cannot create a duplicate owner.

### Example

```ts
import {
  Configuration,
  TenantsApi,
} from '@knowledge-stack/ksapi';
import type { UpdateTenantUserRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TenantsApi(config);

  const body = {
    // string
    tenantId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    userId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // TenantUserEditRequest
    tenantUserEditRequest: ...,
  } satisfies UpdateTenantUserRequest;

  try {
    const data = await api.updateTenantUser(body);
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
| **tenantId** | `string` |  | [Defaults to `undefined`] |
| **userId** | `string` |  | [Defaults to `undefined`] |
| **tenantUserEditRequest** | [TenantUserEditRequest](TenantUserEditRequest.md) |  | |

### Return type

[**TenantUserResponse**](TenantUserResponse.md)

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


## uploadTenantLogo

> TenantResponse uploadTenantLogo(tenantId, file, logoType)

Upload Tenant Logo

Upload a branding logo (primary, dark-mode variant, or favicon).  Requires OWNER or ADMIN role. Accepted image types: PNG, JPEG, SVG, WebP, ICO. Max 2 MB.

### Example

```ts
import {
  Configuration,
  TenantsApi,
} from '@knowledge-stack/ksapi';
import type { UploadTenantLogoRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TenantsApi(config);

  const body = {
    // string
    tenantId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // Blob
    file: BINARY_DATA_HERE,
    // BrandingLogoType (optional)
    logoType: ...,
  } satisfies UploadTenantLogoRequest;

  try {
    const data = await api.uploadTenantLogo(body);
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
| **tenantId** | `string` |  | [Defaults to `undefined`] |
| **file** | `Blob` |  | [Defaults to `undefined`] |
| **logoType** | `BrandingLogoType` |  | [Optional] [Defaults to `undefined`] [Enum: logo, logo_dark, favicon] |

### Return type

[**TenantResponse**](TenantResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

