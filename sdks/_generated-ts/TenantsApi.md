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
| [**getTenantQuotaState**](TenantsApi.md#gettenantquotastate) | **GET** /v1/tenants/{tenant_id}/quota | Get Tenant Quota State Handler |
| [**listTenantUsers**](TenantsApi.md#listtenantusers) | **GET** /v1/tenants/{tenant_id}/users | List Tenant Users |
| [**listTenants**](TenantsApi.md#listtenants) | **GET** /v1/tenants | List Tenants |
| [**updateTenant**](TenantsApi.md#updatetenantoperation) | **PATCH** /v1/tenants/{tenant_id} | Update Tenant |
| [**updateTenantUser**](TenantsApi.md#updatetenantuser) | **PATCH** /v1/tenants/{tenant_id}/users/{user_id} | Update Tenant User |
| [**uploadTenantLogo**](TenantsApi.md#uploadtenantlogo) | **POST** /v1/tenants/{tenant_id}/branding/logo | Upload Tenant Logo |



## activateTenantUser

> TenantUserResponse activateTenantUser(tenantId, userId, authorization, ksUat)

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
  const api = new TenantsApi();

  const body = {
    // string
    tenantId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    userId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
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
| **authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ksUat** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**TenantUserResponse**](TenantUserResponse.md)

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


## deactivateTenantUser

> TenantUserResponse deactivateTenantUser(tenantId, userId, authorization, ksUat)

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
  const api = new TenantsApi();

  const body = {
    // string
    tenantId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    userId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
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
| **authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ksUat** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**TenantUserResponse**](TenantUserResponse.md)

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


## deleteTenant

> deleteTenant(tenantId, authorization, ksUat)

Delete Tenant

Delete a tenant.  Requires OWNER role in the tenant. Deletes the tenant\&#39;s LiteLLM team/keys and S3 bucket after the DB transaction commits.

### Example

```ts
import {
  Configuration,
  TenantsApi,
} from '@knowledge-stack/ksapi';
import type { DeleteTenantRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const api = new TenantsApi();

  const body = {
    // string
    tenantId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
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


## deleteTenantLogo

> TenantResponse deleteTenantLogo(tenantId, logoType, authorization, ksUat)

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
  const api = new TenantsApi();

  const body = {
    // string
    tenantId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // BrandingLogoType (optional)
    logoType: ...,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
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
| **authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ksUat** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**TenantResponse**](TenantResponse.md)

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


## deleteTenantUser

> deleteTenantUser(tenantId, userId, authorization, ksUat)

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
  const api = new TenantsApi();

  const body = {
    // string
    tenantId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    userId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
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


## getTenant

> TenantResponse getTenant(tenantId, authorization, ksUat)

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
  const api = new TenantsApi();

  const body = {
    // string
    tenantId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
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
| **authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ksUat** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**TenantResponse**](TenantResponse.md)

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


## getTenantQuotaState

> TenantQuotaStateResponse getTenantQuotaState(tenantId, authorization, ksUat)

Get Tenant Quota State Handler

Read the tenant\&#39;s current quota state across all metered caps + seats.  Any active member of the tenant can read. Read-only — does not mutate quota state.

### Example

```ts
import {
  Configuration,
  TenantsApi,
} from '@knowledge-stack/ksapi';
import type { GetTenantQuotaStateRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const api = new TenantsApi();

  const body = {
    // string
    tenantId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
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
| **authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ksUat** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**TenantQuotaStateResponse**](TenantQuotaStateResponse.md)

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


## listTenantUsers

> PaginatedResponseTenantUserResponse listTenantUsers(tenantId, limit, offset, authorization, ksUat)

List Tenant Users

List members of a tenant with pagination.  Requires OWNER or ADMIN membership in the tenant.

### Example

```ts
import {
  Configuration,
  TenantsApi,
} from '@knowledge-stack/ksapi';
import type { ListTenantUsersRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const api = new TenantsApi();

  const body = {
    // string
    tenantId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // number | Number of items per page (optional)
    limit: 56,
    // number | Number of items to skip (optional)
    offset: 56,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
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
| **limit** | `number` | Number of items per page | [Optional] [Defaults to `20`] |
| **offset** | `number` | Number of items to skip | [Optional] [Defaults to `0`] |
| **authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ksUat** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**PaginatedResponseTenantUserResponse**](PaginatedResponseTenantUserResponse.md)

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


## listTenants

> PaginatedResponseTenantResponse listTenants(limit, offset, authorization, ksUat)

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
  const api = new TenantsApi();

  const body = {
    // number | Number of items per page (optional)
    limit: 56,
    // number | Number of items to skip (optional)
    offset: 56,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
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
| **authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ksUat** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**PaginatedResponseTenantResponse**](PaginatedResponseTenantResponse.md)

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


## updateTenant

> TenantResponse updateTenant(tenantId, updateTenantRequest, authorization, ksUat)

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
  const api = new TenantsApi();

  const body = {
    // string
    tenantId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateTenantRequest
    updateTenantRequest: ...,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
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
| **authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ksUat** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**TenantResponse**](TenantResponse.md)

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


## updateTenantUser

> TenantUserResponse updateTenantUser(tenantId, userId, tenantUserEditRequest, authorization, ksUat)

Update Tenant User

Update a user\&#39;s role in a tenant.  Requires OWNER or ADMIN role. Cannot create a duplicate owner.

### Example

```ts
import {
  Configuration,
  TenantsApi,
} from '@knowledge-stack/ksapi';
import type { UpdateTenantUserRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const api = new TenantsApi();

  const body = {
    // string
    tenantId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    userId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // TenantUserEditRequest
    tenantUserEditRequest: ...,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
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
| **authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ksUat** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**TenantUserResponse**](TenantUserResponse.md)

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


## uploadTenantLogo

> TenantResponse uploadTenantLogo(tenantId, file, authorization, ksUat, logoType)

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
  const api = new TenantsApi();

  const body = {
    // string
    tenantId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // Blob
    file: BINARY_DATA_HERE,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
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
| **authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ksUat** | `string` |  | [Optional] [Defaults to `undefined`] |
| **logoType** | `BrandingLogoType` |  | [Optional] [Defaults to `undefined`] [Enum: logo, logo_dark, favicon] |

### Return type

[**TenantResponse**](TenantResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

