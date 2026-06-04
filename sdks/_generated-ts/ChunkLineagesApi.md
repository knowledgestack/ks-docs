# ChunkLineagesApi

All URIs are relative to *http://localhost:8000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createChunkLineage**](ChunkLineagesApi.md#createchunklineageoperation) | **POST** /v1/chunk-lineages | Create Chunk Lineage Handler |
| [**deleteChunkLineage**](ChunkLineagesApi.md#deletechunklineage) | **DELETE** /v1/chunk-lineages | Delete Chunk Lineage Handler |
| [**getChunkLineage**](ChunkLineagesApi.md#getchunklineage) | **GET** /v1/chunk-lineages/{chunk_id} | Get Chunk Lineage Handler |



## createChunkLineage

> Array&lt;ChunkLineageResponse&gt; createChunkLineage(createChunkLineageRequest, authorization, ksUat)

Create Chunk Lineage Handler

Batch-create lineage edges for a child chunk.  Creates edges from each parent chunk to the specified child chunk. All chunks must exist in the same tenant.

### Example

```ts
import {
  Configuration,
  ChunkLineagesApi,
} from '@knowledge-stack/ksapi';
import type { CreateChunkLineageOperationRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const api = new ChunkLineagesApi();

  const body = {
    // CreateChunkLineageRequest
    createChunkLineageRequest: ...,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
  } satisfies CreateChunkLineageOperationRequest;

  try {
    const data = await api.createChunkLineage(body);
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
| **createChunkLineageRequest** | [CreateChunkLineageRequest](CreateChunkLineageRequest.md) |  | |
| **authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ksUat** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**Array&lt;ChunkLineageResponse&gt;**](ChunkLineageResponse.md)

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


## deleteChunkLineage

> deleteChunkLineage(parentChunkId, chunkId, authorization, ksUat)

Delete Chunk Lineage Handler

Delete a single lineage edge between parent and child chunks.

### Example

```ts
import {
  Configuration,
  ChunkLineagesApi,
} from '@knowledge-stack/ksapi';
import type { DeleteChunkLineageRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const api = new ChunkLineagesApi();

  const body = {
    // string | Parent chunk ID
    parentChunkId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Child chunk ID
    chunkId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
  } satisfies DeleteChunkLineageRequest;

  try {
    const data = await api.deleteChunkLineage(body);
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
| **parentChunkId** | `string` | Parent chunk ID | [Defaults to `undefined`] |
| **chunkId** | `string` | Child chunk ID | [Defaults to `undefined`] |
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


## getChunkLineage

> LineageGraphResponse getChunkLineage(chunkId, maxDepth, authorization, ksUat)

Get Chunk Lineage Handler

Get lineage graph for a chunk.  Traverses both ancestors and descendants up to max_depth, returning enriched nodes and edges.

### Example

```ts
import {
  Configuration,
  ChunkLineagesApi,
} from '@knowledge-stack/ksapi';
import type { GetChunkLineageRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const api = new ChunkLineagesApi();

  const body = {
    // string
    chunkId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // number (optional)
    maxDepth: 56,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
  } satisfies GetChunkLineageRequest;

  try {
    const data = await api.getChunkLineage(body);
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
| **chunkId** | `string` |  | [Defaults to `undefined`] |
| **maxDepth** | `number` |  | [Optional] [Defaults to `3`] |
| **authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ksUat** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**LineageGraphResponse**](LineageGraphResponse.md)

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

