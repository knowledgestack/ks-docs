# ChunksApi

All URIs are relative to *http://localhost:8000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createChunk**](ChunksApi.md#createchunkoperation) | **POST** /v1/chunks | Create Chunk Handler |
| [**deleteChunk**](ChunksApi.md#deletechunk) | **DELETE** /v1/chunks/{chunk_id} | Delete Chunk Handler |
| [**getChunk**](ChunksApi.md#getchunk) | **GET** /v1/chunks/{chunk_id} | Get Chunk Handler |
| [**getChunkNeighbors**](ChunksApi.md#getchunkneighbors) | **GET** /v1/chunks/{chunk_id}/neighbors | Get Chunk Neighbors Handler |
| [**getChunksBulk**](ChunksApi.md#getchunksbulk) | **GET** /v1/chunks/bulk | Get Chunks Bulk Handler |
| [**getVersionChunkIds**](ChunksApi.md#getversionchunkids) | **GET** /v1/chunks/version-chunk-ids | Get Version Chunk Ids Handler |
| [**searchChunks**](ChunksApi.md#searchchunks) | **POST** /v1/chunks/search | Search Chunks Handler |
| [**updateChunkContent**](ChunksApi.md#updatechunkcontentoperation) | **PATCH** /v1/chunks/{chunk_id}/content | Update Chunk Content Handler |
| [**updateChunkMetadata**](ChunksApi.md#updatechunkmetadataoperation) | **PATCH** /v1/chunks/{chunk_id} | Update Chunk Metadata Handler |



## createChunk

> ChunkResponse createChunk(createChunkRequest)

Create Chunk Handler

Create a new chunk with content.  The chunk is created as a child of the specified parent (must be DOCUMENT_VERSION or SECTION). Content is deduplicated by SHA256 hash.

### Example

```ts
import {
  Configuration,
  ChunksApi,
} from '@knowledge-stack/ksapi';
import type { CreateChunkOperationRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ChunksApi(config);

  const body = {
    // CreateChunkRequest
    createChunkRequest: ...,
  } satisfies CreateChunkOperationRequest;

  try {
    const data = await api.createChunk(body);
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
| **createChunkRequest** | [CreateChunkRequest](CreateChunkRequest.md) |  | |

### Return type

[**ChunkResponse**](ChunkResponse.md)

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


## deleteChunk

> deleteChunk(chunkId)

Delete Chunk Handler

Delete a chunk.  The chunk is deleted via its PathPart (cascading delete). The associated ChunkContent may remain if shared by other chunks.

### Example

```ts
import {
  Configuration,
  ChunksApi,
} from '@knowledge-stack/ksapi';
import type { DeleteChunkRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ChunksApi(config);

  const body = {
    // string
    chunkId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteChunkRequest;

  try {
    const data = await api.deleteChunk(body);
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


## getChunk

> ChunkResponse getChunk(chunkId, withDocument)

Get Chunk Handler

Get a chunk by its ID, including content.

### Example

```ts
import {
  Configuration,
  ChunksApi,
} from '@knowledge-stack/ksapi';
import type { GetChunkRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ChunksApi(config);

  const body = {
    // string
    chunkId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // boolean | Include ancestor document_id and document_version_id (default: false) (optional)
    withDocument: true,
  } satisfies GetChunkRequest;

  try {
    const data = await api.getChunk(body);
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
| **withDocument** | `boolean` | Include ancestor document_id and document_version_id (default: false) | [Optional] [Defaults to `false`] |

### Return type

[**ChunkResponse**](ChunkResponse.md)

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


## getChunkNeighbors

> ChunkNeighborsResponse getChunkNeighbors(chunkId, prev, next, contentType, withinSection)

Get Chunk Neighbors Handler

Return a window of items around an anchor chunk.  Two traversal modes:  - &#x60;&#x60;within_section&#x3D;true&#x60;&#x60; (default): walks the sibling linked-list under   the anchor\&#39;s parent. Stops at items outside &#x60;&#x60;content_type&#x60;&#x60; when set.   Authorized by the anchor\&#39;s path read permission alone.  - &#x60;&#x60;within_section&#x3D;false&#x60;&#x60;: walks the full document version in   depth-first order and slices a window around the anchor. Crosses   section boundaries. Additionally requires read permission on the   enclosing document version\&#39;s path (matching the   &#x60;&#x60;/v1/document_versions/{id}/contents&#x60;&#x60; endpoint). USERs whose path   permissions are scoped to a sub-section of the version will get   &#x60;&#x60;403&#x60;&#x60; and should use &#x60;&#x60;within_section&#x3D;true&#x60;&#x60;.  &#x60;&#x60;content_type&#x3D;SECTION&#x60;&#x60; is rejected with &#x60;&#x60;400&#x60;&#x60;: the anchor is always a chunk, so a SECTION-only filter would exclude it.

### Example

```ts
import {
  Configuration,
  ChunksApi,
} from '@knowledge-stack/ksapi';
import type { GetChunkNeighborsRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ChunksApi(config);

  const body = {
    // string
    chunkId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // number | Number of preceding items to include (max 50). (optional)
    prev: 56,
    // number | Number of succeeding items to include (max 50). (optional)
    next: 56,
    // PartType | Filter by content type: SECTION or CHUNK. Omit to return both. SECTION is rejected when the anchor is a chunk (always). (optional)
    contentType: ...,
    // boolean | When true (default), traverse only the anchor\'s sibling chain under the same parent. When false, traverse the entire document version in DFS order, crossing section boundaries. (optional)
    withinSection: true,
  } satisfies GetChunkNeighborsRequest;

  try {
    const data = await api.getChunkNeighbors(body);
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
| **prev** | `number` | Number of preceding items to include (max 50). | [Optional] [Defaults to `1`] |
| **next** | `number` | Number of succeeding items to include (max 50). | [Optional] [Defaults to `1`] |
| **contentType** | `PartType` | Filter by content type: SECTION or CHUNK. Omit to return both. SECTION is rejected when the anchor is a chunk (always). | [Optional] [Defaults to `undefined`] [Enum: FOLDER, DOCUMENT, DOCUMENT_VERSION, SECTION, CHUNK, THREAD, THREAD_MESSAGE, WORKFLOW_DEFINITION, WORKFLOW_RUN, DATA_SOURCE, DATA_SOURCE_TABLE, API_CONNECTION] |
| **withinSection** | `boolean` | When true (default), traverse only the anchor\&#39;s sibling chain under the same parent. When false, traverse the entire document version in DFS order, crossing section boundaries. | [Optional] [Defaults to `true`] |

### Return type

[**ChunkNeighborsResponse**](ChunkNeighborsResponse.md)

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


## getChunksBulk

> Array&lt;ChunkBulkResponse&gt; getChunksBulk(chunkIds)

Get Chunks Bulk Handler

Batch-fetch chunks with their full ancestor path part IDs.  Returns standard chunk data plus path_part_id_segments (the ordered ancestor chain from root to chunk) for each requested chunk. Non-existent IDs are silently skipped. Limited to 200 IDs per call.

### Example

```ts
import {
  Configuration,
  ChunksApi,
} from '@knowledge-stack/ksapi';
import type { GetChunksBulkRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ChunksApi(config);

  const body = {
    // Array<string> | Chunk IDs to resolve (max 200) (optional)
    chunkIds: ...,
  } satisfies GetChunksBulkRequest;

  try {
    const data = await api.getChunksBulk(body);
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
| **chunkIds** | `Array<string>` | Chunk IDs to resolve (max 200) | [Optional] |

### Return type

[**Array&lt;ChunkBulkResponse&gt;**](ChunkBulkResponse.md)

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


## getVersionChunkIds

> VersionChunkIdsResponse getVersionChunkIds(documentVersionId)

Get Version Chunk Ids Handler

Get all chunk IDs belonging to a document version.  Used by the embedding pipeline to discover chunks for a version.

### Example

```ts
import {
  Configuration,
  ChunksApi,
} from '@knowledge-stack/ksapi';
import type { GetVersionChunkIdsRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ChunksApi(config);

  const body = {
    // string | Document version ID
    documentVersionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetVersionChunkIdsRequest;

  try {
    const data = await api.getVersionChunkIds(body);
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
| **documentVersionId** | `string` | Document version ID | [Defaults to `undefined`] |

### Return type

[**VersionChunkIdsResponse**](VersionChunkIdsResponse.md)

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


## searchChunks

> Array&lt;ScoredChunkResponse&gt; searchChunks(chunkSearchRequest)

Search Chunks Handler

Search over chunks using dense vector, BM25 full-text, or hybrid retrieval.  Combines search with path-based authorization and optional metadata filters. Uses Qdrant for retrieval and hydrates the matched chunks from Postgres.  **Billing note.** SEARCH consume runs *before* path-permission resolution. A request that resolves to an empty permission set (caller has read access to nothing in the requested scope) returns &#x60;&#x60;[]&#x60;&#x60; cleanly — without raising — so it is **not** refunded. This is intentional: differential billing for a no-results case would leak access shape to the caller. Callers concerned about charged no-op searches should validate path access client-side first.

### Example

```ts
import {
  Configuration,
  ChunksApi,
} from '@knowledge-stack/ksapi';
import type { SearchChunksRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ChunksApi(config);

  const body = {
    // ChunkSearchRequest
    chunkSearchRequest: ...,
  } satisfies SearchChunksRequest;

  try {
    const data = await api.searchChunks(body);
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
| **chunkSearchRequest** | [ChunkSearchRequest](ChunkSearchRequest.md) |  | |

### Return type

[**Array&lt;ScoredChunkResponse&gt;**](ScoredChunkResponse.md)

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


## updateChunkContent

> ChunkResponse updateChunkContent(chunkId, updateChunkContentRequest)

Update Chunk Content Handler

Update chunk content by creating a new content row.  The old content row is preserved (not deleted). If the new content matches an existing content hash, it will be deduplicated.

### Example

```ts
import {
  Configuration,
  ChunksApi,
} from '@knowledge-stack/ksapi';
import type { UpdateChunkContentOperationRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ChunksApi(config);

  const body = {
    // string
    chunkId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateChunkContentRequest
    updateChunkContentRequest: ...,
  } satisfies UpdateChunkContentOperationRequest;

  try {
    const data = await api.updateChunkContent(body);
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
| **updateChunkContentRequest** | [UpdateChunkContentRequest](UpdateChunkContentRequest.md) |  | |

### Return type

[**ChunkResponse**](ChunkResponse.md)

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


## updateChunkMetadata

> ChunkResponse updateChunkMetadata(chunkId, updateChunkMetadataRequest)

Update Chunk Metadata Handler

Update chunk metadata and/or move the chunk.  The provided metadata is shallow-merged into the existing chunk_metadata. Move params (parent_path_part_id, prev_sibling_path_id, move_to_head) allow reparenting or reordering the chunk within the same document version.

### Example

```ts
import {
  Configuration,
  ChunksApi,
} from '@knowledge-stack/ksapi';
import type { UpdateChunkMetadataOperationRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ChunksApi(config);

  const body = {
    // string
    chunkId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateChunkMetadataRequest
    updateChunkMetadataRequest: ...,
  } satisfies UpdateChunkMetadataOperationRequest;

  try {
    const data = await api.updateChunkMetadata(body);
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
| **updateChunkMetadataRequest** | [UpdateChunkMetadataRequest](UpdateChunkMetadataRequest.md) |  | |

### Return type

[**ChunkResponse**](ChunkResponse.md)

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

