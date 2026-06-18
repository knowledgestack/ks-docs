# ApiKeysApi

All URIs are relative to *http://localhost:8000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createApiKey**](ApiKeysApi.md#createapikeyoperation) | **POST** /v1/api-keys | Create Api Key Handler |
| [**deleteApiKey**](ApiKeysApi.md#deleteapikey) | **DELETE** /v1/api-keys/{api_key_id} | Delete Api Key Handler |
| [**getApiKey**](ApiKeysApi.md#getapikey) | **GET** /v1/api-keys/{api_key_id} | Get Api Key Handler |
| [**listApiKeys**](ApiKeysApi.md#listapikeys) | **GET** /v1/api-keys | List Api Keys Handler |



## createApiKey

> CreateApiKeyResponse createApiKey(createApiKeyRequest)

Create Api Key Handler

Create a new API key. The full key is returned only once.

### Example

```ts
import {
  Configuration,
  ApiKeysApi,
} from '@knowledge-stack/ksapi';
import type { CreateApiKeyOperationRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ApiKeysApi(config);

  const body = {
    // CreateApiKeyRequest
    createApiKeyRequest: ...,
  } satisfies CreateApiKeyOperationRequest;

  try {
    const data = await api.createApiKey(body);
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
| **createApiKeyRequest** | [CreateApiKeyRequest](CreateApiKeyRequest.md) |  | |

### Return type

[**CreateApiKeyResponse**](CreateApiKeyResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth)

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


## deleteApiKey

> deleteApiKey(apiKeyId)

Delete Api Key Handler

Delete an API key.

### Example

```ts
import {
  Configuration,
  ApiKeysApi,
} from '@knowledge-stack/ksapi';
import type { DeleteApiKeyRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ApiKeysApi(config);

  const body = {
    // string
    apiKeyId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteApiKeyRequest;

  try {
    const data = await api.deleteApiKey(body);
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
| **apiKeyId** | `string` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth)

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


## getApiKey

> ApiKeyResponse getApiKey(apiKeyId)

Get Api Key Handler

Get a single API key by ID.

### Example

```ts
import {
  Configuration,
  ApiKeysApi,
} from '@knowledge-stack/ksapi';
import type { GetApiKeyRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ApiKeysApi(config);

  const body = {
    // string
    apiKeyId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetApiKeyRequest;

  try {
    const data = await api.getApiKey(body);
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
| **apiKeyId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**ApiKeyResponse**](ApiKeyResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth)

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


## listApiKeys

> Array&lt;ApiKeyResponse&gt; listApiKeys()

List Api Keys Handler

List all API keys for the current user.

### Example

```ts
import {
  Configuration,
  ApiKeysApi,
} from '@knowledge-stack/ksapi';
import type { ListApiKeysRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ApiKeysApi(config);

  try {
    const data = await api.listApiKeys();
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

[**Array&lt;ApiKeyResponse&gt;**](ApiKeyResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

