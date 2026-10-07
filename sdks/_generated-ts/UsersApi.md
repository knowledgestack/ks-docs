# UsersApi

All URIs are relative to *http://localhost:8000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteMyAvatar**](UsersApi.md#deletemyavatar) | **DELETE** /v1/users/me/avatar | Delete My Avatar Handler |
| [**getMe**](UsersApi.md#getme) | **GET** /v1/users/me | Get Me Handler |
| [**skipOnboarding**](UsersApi.md#skiponboarding) | **POST** /v1/users/me/onboarding/skip | Skip Onboarding Handler |
| [**updateMe**](UsersApi.md#updateme) | **PATCH** /v1/users | Update Me Handler |
| [**updateOnboardingCompany**](UsersApi.md#updateonboardingcompany) | **PATCH** /v1/users/me/onboarding/company | Update Onboarding Company Handler |
| [**updateOnboardingProfile**](UsersApi.md#updateonboardingprofile) | **PATCH** /v1/users/me/onboarding/profile | Update Onboarding Profile Handler |
| [**uploadMyAvatar**](UsersApi.md#uploadmyavatar) | **POST** /v1/users/me/avatar | Upload My Avatar Handler |



## deleteMyAvatar

> UserResponse deleteMyAvatar()

Delete My Avatar Handler

Remove the profile photo for the current tenant. No photo is a no-op.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '@knowledge-stack/ksapi';
import type { DeleteMyAvatarRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UsersApi(config);

  try {
    const data = await api.deleteMyAvatar();
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

[**UserResponse**](UserResponse.md)

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


## getMe

> UserResponse getMe()

Get Me Handler

Get current user information including current tenant context.  Returns the authenticated user\&#39;s profile along with their current tenant ID (from the UAT token) and default tenant ID (from user record).

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '@knowledge-stack/ksapi';
import type { GetMeRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UsersApi(config);

  try {
    const data = await api.getMe();
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

[**UserResponse**](UserResponse.md)

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


## skipOnboarding

> UserResponse skipOnboarding()

Skip Onboarding Handler

Mark onboarding complete without writing any profile/company fields.  Idempotent — calling this after onboarding is already complete returns the current state unchanged (the CRUD only stamps the timestamp when it is NULL).

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '@knowledge-stack/ksapi';
import type { SkipOnboardingRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UsersApi(config);

  try {
    const data = await api.skipOnboarding();
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

[**UserResponse**](UserResponse.md)

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


## updateMe

> UserResponse updateMe(updateUserRequest)

Update Me Handler

Update the user\&#39;s name and default tenant, and the membership\&#39;s profile.  When updating default_tenant_id, the user must belong to the specified tenant.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '@knowledge-stack/ksapi';
import type { UpdateMeRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UsersApi(config);

  const body = {
    // UpdateUserRequest
    updateUserRequest: ...,
  } satisfies UpdateMeRequest;

  try {
    const data = await api.updateMe(body);
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
| **updateUserRequest** | [UpdateUserRequest](UpdateUserRequest.md) |  | |

### Return type

[**UserResponse**](UserResponse.md)

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


## updateOnboardingCompany

> UserResponse updateOnboardingCompany(onboardingCompanyRequest)

Update Onboarding Company Handler

Step 1 of onboarding: tenant-wide company info.  Writes &#x60;&#x60;industry&#x60;&#x60; and &#x60;&#x60;description&#x60;&#x60; into the current tenant\&#39;s settings JSONB. Restricted to OWNER and ADMIN — invited USERs see a pre-filled, read-only step on the frontend instead.  Does not mark onboarding complete; the user finishes via the profile step. Re-running while the wizard is still open overwrites prior values; once onboarding has been completed/skipped, this endpoint returns 409. Post-onboarding edits go through PATCH /v1/tenants/{id}.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '@knowledge-stack/ksapi';
import type { UpdateOnboardingCompanyRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UsersApi(config);

  const body = {
    // OnboardingCompanyRequest
    onboardingCompanyRequest: ...,
  } satisfies UpdateOnboardingCompanyRequest;

  try {
    const data = await api.updateOnboardingCompany(body);
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
| **onboardingCompanyRequest** | [OnboardingCompanyRequest](OnboardingCompanyRequest.md) |  | |

### Return type

[**UserResponse**](UserResponse.md)

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


## updateOnboardingProfile

> UserResponse updateOnboardingProfile(onboardingProfileRequest)

Update Onboarding Profile Handler

Step 2 (final) of onboarding: per-user profile for the current tenant.  Writes name to the User row (global) and job_title to the TenantUser row (per-tenant), then stamps &#x60;&#x60;onboarding_completed_at&#x60;&#x60; on the membership. Returns 409 if onboarding has already been completed or skipped — post-onboarding edits go through PATCH /v1/users.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '@knowledge-stack/ksapi';
import type { UpdateOnboardingProfileRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UsersApi(config);

  const body = {
    // OnboardingProfileRequest
    onboardingProfileRequest: ...,
  } satisfies UpdateOnboardingProfileRequest;

  try {
    const data = await api.updateOnboardingProfile(body);
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
| **onboardingProfileRequest** | [OnboardingProfileRequest](OnboardingProfileRequest.md) |  | |

### Return type

[**UserResponse**](UserResponse.md)

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


## uploadMyAvatar

> UserResponse uploadMyAvatar(file)

Upload My Avatar Handler

Set the profile photo for the current tenant. PNG, JPEG, WebP or GIF, at most 2 MB and 4096 px per side; the format is read from the bytes, not the content type.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '@knowledge-stack/ksapi';
import type { UploadMyAvatarRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UsersApi(config);

  const body = {
    // Blob
    file: BINARY_DATA_HERE,
  } satisfies UploadMyAvatarRequest;

  try {
    const data = await api.uploadMyAvatar(body);
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
| **file** | `Blob` |  | [Defaults to `undefined`] |

### Return type

[**UserResponse**](UserResponse.md)

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

