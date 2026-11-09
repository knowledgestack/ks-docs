# AgentApi

All URIs are relative to *http://localhost:8000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**agentAsk**](AgentApi.md#agentask) | **POST** /v1/agent/ask | Agent Ask Handler |
| [**agentExtract**](AgentApi.md#agentextract) | **POST** /v1/agent/extract | Agent Extract Handler |



## agentAsk

> AskResponse agentAsk(askRequest)

Agent Ask Handler

Run a one-shot text agent request to completion and return its text.  Blocks until the run finishes; set a generous HTTP timeout. Charges one &#x60;&#x60;meter.agent.message&#x60;&#x60;: a server-side failure is released, a cancellation (client disconnect or &#x60;&#x60;DELETE /v1/system-jobs/{id}&#x60;&#x60;) stays charged.

### Example

```ts
import {
  Configuration,
  AgentApi,
} from '@knowledge-stack/ksapi';
import type { AgentAskRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AgentApi(config);

  const body = {
    // AskRequest
    askRequest: ...,
  } satisfies AgentAskRequest;

  try {
    const data = await api.agentAsk(body);
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
| **askRequest** | [AskRequest](AskRequest.md) |  | |

### Return type

[**AskResponse**](AskResponse.md)

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


## agentExtract

> ExtractResponse agentExtract(extractRequest)

Agent Extract Handler

Run a one-shot structured extraction and return the extracted object.  The schema (a stored DOCUMENT or &#x60;&#x60;output_schema&#x60;&#x60;) is validated first: bad input is a 400 that charges nothing. Otherwise charges one &#x60;&#x60;meter.agent.message&#x60;&#x60;, released on a server-side failure; a cancellation stays charged.

### Example

```ts
import {
  Configuration,
  AgentApi,
} from '@knowledge-stack/ksapi';
import type { AgentExtractRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AgentApi(config);

  const body = {
    // ExtractRequest
    extractRequest: ...,
  } satisfies AgentExtractRequest;

  try {
    const data = await api.agentExtract(body);
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
| **extractRequest** | [ExtractRequest](ExtractRequest.md) |  | |

### Return type

[**ExtractResponse**](ExtractResponse.md)

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

