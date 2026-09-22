# DiagnosticsApi

All URIs are relative to *http://localhost:8000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**computeThreadDiagnostics**](DiagnosticsApi.md#computethreaddiagnostics) | **POST** /v1/diagnostics/threads/{thread_id} | Compute Thread Diagnostics Handler |
| [**computeWorkflowRunDiagnostics**](DiagnosticsApi.md#computeworkflowrundiagnostics) | **POST** /v1/diagnostics/workflow-runs/{run_id} | Compute Workflow Run Diagnostics Handler |



## computeThreadDiagnostics

> DiagnosticsResponse computeThreadDiagnostics(threadId)

Compute Thread Diagnostics Handler

Stats and trace links for every turn; a run\&#39;s thread answers as its run.

### Example

```ts
import {
  Configuration,
  DiagnosticsApi,
} from '@knowledge-stack/ksapi';
import type { ComputeThreadDiagnosticsRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DiagnosticsApi(config);

  const body = {
    // string
    threadId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies ComputeThreadDiagnosticsRequest;

  try {
    const data = await api.computeThreadDiagnostics(body);
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
| **threadId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**DiagnosticsResponse**](DiagnosticsResponse.md)

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


## computeWorkflowRunDiagnostics

> DiagnosticsResponse computeWorkflowRunDiagnostics(runId)

Compute Workflow Run Diagnostics Handler

Stats and trace links for the run\&#39;s attempts and every turn in its thread.

### Example

```ts
import {
  Configuration,
  DiagnosticsApi,
} from '@knowledge-stack/ksapi';
import type { ComputeWorkflowRunDiagnosticsRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DiagnosticsApi(config);

  const body = {
    // string
    runId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies ComputeWorkflowRunDiagnosticsRequest;

  try {
    const data = await api.computeWorkflowRunDiagnostics(body);
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
| **runId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**DiagnosticsResponse**](DiagnosticsResponse.md)

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

