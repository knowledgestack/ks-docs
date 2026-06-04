# WorkflowMemoryApi

All URIs are relative to *http://localhost:8000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**appendWorkflowMemoryChunk**](WorkflowMemoryApi.md#appendworkflowmemorychunk) | **POST** /v1/workflow-definitions/{definition_id}/memory/chunks | Append Workflow Memory Chunk Handler |
| [**editWorkflowMemoryChunk**](WorkflowMemoryApi.md#editworkflowmemorychunk) | **PATCH** /v1/workflow-definitions/{definition_id}/memory/chunks/{chunk_id} | Edit Workflow Memory Chunk Handler |
| [**forgetWorkflowMemoryChunk**](WorkflowMemoryApi.md#forgetworkflowmemorychunk) | **DELETE** /v1/workflow-definitions/{definition_id}/memory/chunks/{chunk_id} | Forget Workflow Memory Chunk Handler |
| [**getWorkflowMemoryChunk**](WorkflowMemoryApi.md#getworkflowmemorychunk) | **GET** /v1/workflow-definitions/{definition_id}/memory/chunks/{chunk_id} | Get Workflow Memory Chunk Handler |
| [**listWorkflowMemoryChunks**](WorkflowMemoryApi.md#listworkflowmemorychunks) | **GET** /v1/workflow-definitions/{definition_id}/memory | List Workflow Memory Chunks Handler |



## appendWorkflowMemoryChunk

> MemoryChunkResponse appendWorkflowMemoryChunk(definitionId, appendMemoryChunkRequest, authorization, ksUat)

Append Workflow Memory Chunk Handler

### Example

```ts
import {
  Configuration,
  WorkflowMemoryApi,
} from '@knowledge-stack/ksapi';
import type { AppendWorkflowMemoryChunkRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const api = new WorkflowMemoryApi();

  const body = {
    // string
    definitionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // AppendMemoryChunkRequest
    appendMemoryChunkRequest: ...,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
  } satisfies AppendWorkflowMemoryChunkRequest;

  try {
    const data = await api.appendWorkflowMemoryChunk(body);
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
| **definitionId** | `string` |  | [Defaults to `undefined`] |
| **appendMemoryChunkRequest** | [AppendMemoryChunkRequest](AppendMemoryChunkRequest.md) |  | |
| **authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ksUat** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**MemoryChunkResponse**](MemoryChunkResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## editWorkflowMemoryChunk

> MemoryChunkResponse editWorkflowMemoryChunk(definitionId, chunkId, editMemoryChunkRequest, authorization, ksUat)

Edit Workflow Memory Chunk Handler

### Example

```ts
import {
  Configuration,
  WorkflowMemoryApi,
} from '@knowledge-stack/ksapi';
import type { EditWorkflowMemoryChunkRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const api = new WorkflowMemoryApi();

  const body = {
    // string
    definitionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    chunkId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // EditMemoryChunkRequest
    editMemoryChunkRequest: ...,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
  } satisfies EditWorkflowMemoryChunkRequest;

  try {
    const data = await api.editWorkflowMemoryChunk(body);
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
| **definitionId** | `string` |  | [Defaults to `undefined`] |
| **chunkId** | `string` |  | [Defaults to `undefined`] |
| **editMemoryChunkRequest** | [EditMemoryChunkRequest](EditMemoryChunkRequest.md) |  | |
| **authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ksUat** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**MemoryChunkResponse**](MemoryChunkResponse.md)

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


## forgetWorkflowMemoryChunk

> forgetWorkflowMemoryChunk(definitionId, chunkId, authorization, ksUat)

Forget Workflow Memory Chunk Handler

### Example

```ts
import {
  Configuration,
  WorkflowMemoryApi,
} from '@knowledge-stack/ksapi';
import type { ForgetWorkflowMemoryChunkRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const api = new WorkflowMemoryApi();

  const body = {
    // string
    definitionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    chunkId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
  } satisfies ForgetWorkflowMemoryChunkRequest;

  try {
    const data = await api.forgetWorkflowMemoryChunk(body);
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
| **definitionId** | `string` |  | [Defaults to `undefined`] |
| **chunkId** | `string` |  | [Defaults to `undefined`] |
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


## getWorkflowMemoryChunk

> MemoryChunkResponse getWorkflowMemoryChunk(definitionId, chunkId, authorization, ksUat)

Get Workflow Memory Chunk Handler

### Example

```ts
import {
  Configuration,
  WorkflowMemoryApi,
} from '@knowledge-stack/ksapi';
import type { GetWorkflowMemoryChunkRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const api = new WorkflowMemoryApi();

  const body = {
    // string
    definitionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    chunkId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
  } satisfies GetWorkflowMemoryChunkRequest;

  try {
    const data = await api.getWorkflowMemoryChunk(body);
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
| **definitionId** | `string` |  | [Defaults to `undefined`] |
| **chunkId** | `string` |  | [Defaults to `undefined`] |
| **authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ksUat** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**MemoryChunkResponse**](MemoryChunkResponse.md)

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


## listWorkflowMemoryChunks

> PaginatedResponseMemoryChunkResponse listWorkflowMemoryChunks(definitionId, limit, offset, authorization, ksUat)

List Workflow Memory Chunks Handler

### Example

```ts
import {
  Configuration,
  WorkflowMemoryApi,
} from '@knowledge-stack/ksapi';
import type { ListWorkflowMemoryChunksRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const api = new WorkflowMemoryApi();

  const body = {
    // string
    definitionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // number | Number of items per page (optional)
    limit: 56,
    // number | Number of items to skip (optional)
    offset: 56,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
  } satisfies ListWorkflowMemoryChunksRequest;

  try {
    const data = await api.listWorkflowMemoryChunks(body);
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
| **definitionId** | `string` |  | [Defaults to `undefined`] |
| **limit** | `number` | Number of items per page | [Optional] [Defaults to `20`] |
| **offset** | `number` | Number of items to skip | [Optional] [Defaults to `0`] |
| **authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ksUat** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**PaginatedResponseMemoryChunkResponse**](PaginatedResponseMemoryChunkResponse.md)

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

