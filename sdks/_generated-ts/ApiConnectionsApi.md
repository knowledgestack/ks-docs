# ApiConnectionsApi

All URIs are relative to *http://localhost:8000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**acceptApiConnectionDisclaimer**](ApiConnectionsApi.md#acceptapiconnectiondisclaimer) | **POST** /v1/api-connections/{connection_id}/disclaimer | Accept Api Connection Disclaimer Handler |
| [**createApiConnection**](ApiConnectionsApi.md#createapiconnectionoperation) | **POST** /v1/api-connections | Create Api Connection Handler |
| [**deleteApiConnection**](ApiConnectionsApi.md#deleteapiconnection) | **DELETE** /v1/api-connections/{connection_id} | Delete Api Connection Handler |
| [**executeApiConnectionRequest**](ApiConnectionsApi.md#executeapiconnectionrequest) | **POST** /v1/api-connections/{connection_id}/request | Execute Api Connection Request Handler |
| [**getApiConnection**](ApiConnectionsApi.md#getapiconnection) | **GET** /v1/api-connections/{connection_id} | Get Api Connection Handler |
| [**updateApiConnection**](ApiConnectionsApi.md#updateapiconnectionoperation) | **PATCH** /v1/api-connections/{connection_id} | Update Api Connection Handler |



## acceptApiConnectionDisclaimer

> ApiConnectionResponse acceptApiConnectionDisclaimer(connectionId, acceptDisclaimerRequest)

Accept Api Connection Disclaimer Handler

Accept the egress disclaimer (Admin/Owner).

### Example

```ts
import {
  Configuration,
  ApiConnectionsApi,
} from '@knowledge-stack/ksapi';
import type { AcceptApiConnectionDisclaimerRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ApiConnectionsApi(config);

  const body = {
    // string
    connectionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // AcceptDisclaimerRequest
    acceptDisclaimerRequest: ...,
  } satisfies AcceptApiConnectionDisclaimerRequest;

  try {
    const data = await api.acceptApiConnectionDisclaimer(body);
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
| **connectionId** | `string` |  | [Defaults to `undefined`] |
| **acceptDisclaimerRequest** | [AcceptDisclaimerRequest](AcceptDisclaimerRequest.md) |  | |

### Return type

[**ApiConnectionResponse**](ApiConnectionResponse.md)

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


## createApiConnection

> ApiConnectionResponse createApiConnection(createApiConnectionRequest)

Create Api Connection Handler

Create a connection under a writable folder (Admin/Owner; egress on).

### Example

```ts
import {
  Configuration,
  ApiConnectionsApi,
} from '@knowledge-stack/ksapi';
import type { CreateApiConnectionOperationRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ApiConnectionsApi(config);

  const body = {
    // CreateApiConnectionRequest
    createApiConnectionRequest: ...,
  } satisfies CreateApiConnectionOperationRequest;

  try {
    const data = await api.createApiConnection(body);
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
| **createApiConnectionRequest** | [CreateApiConnectionRequest](CreateApiConnectionRequest.md) |  | |

### Return type

[**ApiConnectionResponse**](ApiConnectionResponse.md)

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


## deleteApiConnection

> deleteApiConnection(connectionId)

Delete Api Connection Handler

Move a connection to trash (Admin/Owner).  Soft-delete via the path_part subtree, mirroring create/update authz. A connection holds no Qdrant vectors, so there is no trash-sync workflow.

### Example

```ts
import {
  Configuration,
  ApiConnectionsApi,
} from '@knowledge-stack/ksapi';
import type { DeleteApiConnectionRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ApiConnectionsApi(config);

  const body = {
    // string
    connectionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteApiConnectionRequest;

  try {
    const data = await api.deleteApiConnection(body);
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
| **connectionId** | `string` |  | [Defaults to `undefined`] |

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


## executeApiConnectionRequest

> ApiConnectionRequestResponse executeApiConnectionRequest(connectionId, apiConnectionRequestRequest)

Execute Api Connection Request Handler

Execute a safe, audited outbound request (all gates run in the service).

### Example

```ts
import {
  Configuration,
  ApiConnectionsApi,
} from '@knowledge-stack/ksapi';
import type { ExecuteApiConnectionRequestRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ApiConnectionsApi(config);

  const body = {
    // string
    connectionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // ApiConnectionRequestRequest
    apiConnectionRequestRequest: ...,
  } satisfies ExecuteApiConnectionRequestRequest;

  try {
    const data = await api.executeApiConnectionRequest(body);
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
| **connectionId** | `string` |  | [Defaults to `undefined`] |
| **apiConnectionRequestRequest** | [ApiConnectionRequestRequest](ApiConnectionRequestRequest.md) |  | |

### Return type

[**ApiConnectionRequestResponse**](ApiConnectionRequestResponse.md)

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


## getApiConnection

> ApiConnectionResponse getApiConnection(connectionId)

Get Api Connection Handler

Get a connection (no secret); requires read access.

### Example

```ts
import {
  Configuration,
  ApiConnectionsApi,
} from '@knowledge-stack/ksapi';
import type { GetApiConnectionRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ApiConnectionsApi(config);

  const body = {
    // string
    connectionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetApiConnectionRequest;

  try {
    const data = await api.getApiConnection(body);
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
| **connectionId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**ApiConnectionResponse**](ApiConnectionResponse.md)

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


## updateApiConnection

> ApiConnectionResponse updateApiConnection(connectionId, updateApiConnectionRequest)

Update Api Connection Handler

Update a connection (Admin/Owner). A risk-up change re-arms the disclaimer.

### Example

```ts
import {
  Configuration,
  ApiConnectionsApi,
} from '@knowledge-stack/ksapi';
import type { UpdateApiConnectionOperationRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ApiConnectionsApi(config);

  const body = {
    // string
    connectionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateApiConnectionRequest
    updateApiConnectionRequest: ...,
  } satisfies UpdateApiConnectionOperationRequest;

  try {
    const data = await api.updateApiConnection(body);
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
| **connectionId** | `string` |  | [Defaults to `undefined`] |
| **updateApiConnectionRequest** | [UpdateApiConnectionRequest](UpdateApiConnectionRequest.md) |  | |

### Return type

[**ApiConnectionResponse**](ApiConnectionResponse.md)

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

