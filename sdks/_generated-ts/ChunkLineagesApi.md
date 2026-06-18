# ChunkLineagesApi

All URIs are relative to *http://localhost:8000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createChunkLineage**](ChunkLineagesApi.md#createchunklineageoperation) | **POST** /v1/chunk-lineages | Create Chunk Lineage Handler |
| [**deleteChunkLineage**](ChunkLineagesApi.md#deletechunklineage) | **DELETE** /v1/chunk-lineages | Delete Chunk Lineage Handler |
| [**getChunkLineage**](ChunkLineagesApi.md#getchunklineage) | **GET** /v1/chunk-lineages/{chunk_id} | Get Chunk Lineage Handler |



## createChunkLineage

> Array&lt;ChunkLineageResponse&gt; createChunkLineage(createChunkLineageRequest)

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
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ChunkLineagesApi(config);

  const body = {
    // CreateChunkLineageRequest
    createChunkLineageRequest: ...,
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

### Return type

[**Array&lt;ChunkLineageResponse&gt;**](ChunkLineageResponse.md)

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


## deleteChunkLineage

> deleteChunkLineage(parentChunkId, chunkId)

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
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ChunkLineagesApi(config);

  const body = {
    // string | Parent chunk ID
    parentChunkId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Child chunk ID
    chunkId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
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


## getChunkLineage

> LineageGraphResponse getChunkLineage(chunkId, maxDepth)

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
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ChunkLineagesApi(config);

  const body = {
    // string
    chunkId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // number (optional)
    maxDepth: 56,
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

### Return type

[**LineageGraphResponse**](LineageGraphResponse.md)

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

