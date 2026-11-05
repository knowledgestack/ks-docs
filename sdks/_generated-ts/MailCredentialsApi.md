# MailCredentialsApi

All URIs are relative to *http://localhost:8000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createMailCredential**](MailCredentialsApi.md#createmailcredentialoperation) | **POST** /v1/mail-credentials | Create Mail Credential Handler |
| [**getMailCredential**](MailCredentialsApi.md#getmailcredential) | **GET** /v1/mail-credentials/{credential_id} | Get Mail Credential Handler |
| [**listMailCredentialOptions**](MailCredentialsApi.md#listmailcredentialoptions) | **GET** /v1/mail-credentials/options | List Mail Credential Options Handler |
| [**listMailCredentials**](MailCredentialsApi.md#listmailcredentials) | **GET** /v1/mail-credentials | List Mail Credentials Handler |
| [**retireMailCredential**](MailCredentialsApi.md#retiremailcredential) | **DELETE** /v1/mail-credentials/{credential_id} | Retire Mail Credential Handler |
| [**rotateMailCredential**](MailCredentialsApi.md#rotatemailcredentialoperation) | **POST** /v1/mail-credentials/{credential_id}/rotate | Rotate Mail Credential Handler |
| [**updateMailCredential**](MailCredentialsApi.md#updatemailcredentialoperation) | **PATCH** /v1/mail-credentials/{credential_id} | Update Mail Credential Handler |



## createMailCredential

> MailCredentialResponse createMailCredential(createMailCredentialRequest)

Create Mail Credential Handler

Register an application for this workspace. OWNER/ADMIN.  The callback stored on the row is this workspace\&#39;s, computed here once: the provider compares it character for character, so a later &#x60;&#x60;FRONTEND_URL&#x60;&#x60; change must not move an existing registration off the string it was registered with.

### Example

```ts
import {
  Configuration,
  MailCredentialsApi,
} from '@knowledge-stack/ksapi';
import type { CreateMailCredentialOperationRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MailCredentialsApi(config);

  const body = {
    // CreateMailCredentialRequest
    createMailCredentialRequest: ...,
  } satisfies CreateMailCredentialOperationRequest;

  try {
    const data = await api.createMailCredential(body);
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
| **createMailCredentialRequest** | [CreateMailCredentialRequest](CreateMailCredentialRequest.md) |  | |

### Return type

[**MailCredentialResponse**](MailCredentialResponse.md)

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


## getMailCredential

> MailCredentialResponse getMailCredential(credentialId)

Get Mail Credential Handler

One registration as an admin sees it. OWNER/ADMIN.

### Example

```ts
import {
  Configuration,
  MailCredentialsApi,
} from '@knowledge-stack/ksapi';
import type { GetMailCredentialRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MailCredentialsApi(config);

  const body = {
    // string | Registration id
    credentialId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetMailCredentialRequest;

  try {
    const data = await api.getMailCredential(body);
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
| **credentialId** | `string` | Registration id | [Defaults to `undefined`] |

### Return type

[**MailCredentialResponse**](MailCredentialResponse.md)

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


## listMailCredentialOptions

> Array&lt;MailCredentialOption&gt; listMailCredentialOptions()

List Mail Credential Options Handler

What a member picks a registration from. Any member of the workspace.  Name and provider, nothing else. Adding a mailbox needs write access to a folder, not a tenant role, so gating this on OWNER/ADMIN would leave exactly the caller who is allowed to add one unable to say which registration it belongs to — while the ids and the secret stay where only an admin can see them.

### Example

```ts
import {
  Configuration,
  MailCredentialsApi,
} from '@knowledge-stack/ksapi';
import type { ListMailCredentialOptionsRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MailCredentialsApi(config);

  try {
    const data = await api.listMailCredentialOptions();
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

[**Array&lt;MailCredentialOption&gt;**](MailCredentialOption.md)

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


## listMailCredentials

> MailCredentialListResponse listMailCredentials()

List Mail Credentials Handler

Every registration this workspace holds. OWNER/ADMIN.  &#x60;&#x60;redirect_uri&#x60;&#x60; is on the envelope because it is needed **before** the first row exists: registering the application in the customer\&#39;s own directory is what has to happen first, and it takes this string.  A member who only has to pick one reads &#x60;&#x60;/options&#x60;&#x60; instead, which carries no ids at all.

### Example

```ts
import {
  Configuration,
  MailCredentialsApi,
} from '@knowledge-stack/ksapi';
import type { ListMailCredentialsRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MailCredentialsApi(config);

  try {
    const data = await api.listMailCredentials();
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

[**MailCredentialListResponse**](MailCredentialListResponse.md)

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


## retireMailCredential

> RetireMailCredentialResponse retireMailCredential(credentialId)

Retire Mail Credential Handler

Delete this registration and stop the mailboxes on it. OWNER/ADMIN.  A real delete with no undo. Each mailbox that authenticated with it is severed from it and moved to DISABLED: it keeps its mail, and it can never sync again, because the only thing it could have authenticated with is gone. Creating a new mailbox takes a new registration.  The recurrences come down after the transaction, not inside it. A schedule torn down for a mailbox whose delete then rolled back would stop syncing while still reporting itself healthy; a schedule left standing for a mailbox that is already DISABLED merely starts a run that refuses itself. The second is the better failure.

### Example

```ts
import {
  Configuration,
  MailCredentialsApi,
} from '@knowledge-stack/ksapi';
import type { RetireMailCredentialRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MailCredentialsApi(config);

  const body = {
    // string | Registration id
    credentialId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies RetireMailCredentialRequest;

  try {
    const data = await api.retireMailCredential(body);
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
| **credentialId** | `string` | Registration id | [Defaults to `undefined`] |

### Return type

[**RetireMailCredentialResponse**](RetireMailCredentialResponse.md)

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


## rotateMailCredential

> RotateMailCredentialResponse rotateMailCredential(credentialId, rotateMailCredentialRequest)

Rotate Mail Credential Handler

Replace this registration\&#39;s secret. OWNER/ADMIN.  One write now, where it used to be one per mailbox. What still happens per mailbox is the consequence: one parked on NEEDS_REAUTH is released to FAILED, because an expired secret and a withdrawn consent are indistinguishable at refresh time and only the next run can tell which this was.

### Example

```ts
import {
  Configuration,
  MailCredentialsApi,
} from '@knowledge-stack/ksapi';
import type { RotateMailCredentialOperationRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MailCredentialsApi(config);

  const body = {
    // string | Registration id
    credentialId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // RotateMailCredentialRequest
    rotateMailCredentialRequest: ...,
  } satisfies RotateMailCredentialOperationRequest;

  try {
    const data = await api.rotateMailCredential(body);
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
| **credentialId** | `string` | Registration id | [Defaults to `undefined`] |
| **rotateMailCredentialRequest** | [RotateMailCredentialRequest](RotateMailCredentialRequest.md) |  | |

### Return type

[**RotateMailCredentialResponse**](RotateMailCredentialResponse.md)

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


## updateMailCredential

> MailCredentialResponse updateMailCredential(credentialId, updateMailCredentialRequest)

Update Mail Credential Handler

Correct a registration. OWNER/ADMIN.  The label is always editable. Which application it names is editable only while no mailbox points here: a mailbox\&#39;s grant is a refresh token issued to one client in one directory, so moving a registration in use would leave every mailbox on it unable to refresh. Before the first mailbox there is nothing to break, and refusing would leave retire-and-recreate as the only way to fix a typo.

### Example

```ts
import {
  Configuration,
  MailCredentialsApi,
} from '@knowledge-stack/ksapi';
import type { UpdateMailCredentialOperationRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MailCredentialsApi(config);

  const body = {
    // string | Registration id
    credentialId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateMailCredentialRequest
    updateMailCredentialRequest: ...,
  } satisfies UpdateMailCredentialOperationRequest;

  try {
    const data = await api.updateMailCredential(body);
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
| **credentialId** | `string` | Registration id | [Defaults to `undefined`] |
| **updateMailCredentialRequest** | [UpdateMailCredentialRequest](UpdateMailCredentialRequest.md) |  | |

### Return type

[**MailCredentialResponse**](MailCredentialResponse.md)

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

