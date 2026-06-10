# ksapi.ChunksApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_chunk**](ChunksApi.md#create_chunk) | **POST** /v1/chunks | Create Chunk Handler
[**delete_chunk**](ChunksApi.md#delete_chunk) | **DELETE** /v1/chunks/{chunk_id} | Delete Chunk Handler
[**get_chunk**](ChunksApi.md#get_chunk) | **GET** /v1/chunks/{chunk_id} | Get Chunk Handler
[**get_chunk_neighbors**](ChunksApi.md#get_chunk_neighbors) | **GET** /v1/chunks/{chunk_id}/neighbors | Get Chunk Neighbors Handler
[**get_chunks_bulk**](ChunksApi.md#get_chunks_bulk) | **GET** /v1/chunks/bulk | Get Chunks Bulk Handler
[**get_version_chunk_ids**](ChunksApi.md#get_version_chunk_ids) | **GET** /v1/chunks/version-chunk-ids | Get Version Chunk Ids Handler
[**search_chunks**](ChunksApi.md#search_chunks) | **POST** /v1/chunks/search | Search Chunks Handler
[**update_chunk_content**](ChunksApi.md#update_chunk_content) | **PATCH** /v1/chunks/{chunk_id}/content | Update Chunk Content Handler
[**update_chunk_metadata**](ChunksApi.md#update_chunk_metadata) | **PATCH** /v1/chunks/{chunk_id} | Update Chunk Metadata Handler


# **create_chunk**
> ChunkResponse create_chunk(create_chunk_request)

Create Chunk Handler

Create a new chunk with content.

The chunk is created as a child of the specified parent (must be
DOCUMENT_VERSION or SECTION). Content is deduplicated by SHA256 hash.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.chunk_response import ChunkResponse
from ksapi.models.create_chunk_request import CreateChunkRequest
from ksapi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8000
# See configuration.py for a list of all supported configuration parameters.
configuration = ksapi.Configuration(
    host = "http://localhost:8000"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Configure Bearer authorization: bearerAuth
configuration = ksapi.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.ChunksApi(api_client)
    create_chunk_request = ksapi.CreateChunkRequest() # CreateChunkRequest | 

    try:
        # Create Chunk Handler
        api_response = api_instance.create_chunk(create_chunk_request)
        print("The response of ChunksApi->create_chunk:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChunksApi->create_chunk: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_chunk_request** | [**CreateChunkRequest**](CreateChunkRequest.md)|  | 

### Return type

[**ChunkResponse**](ChunkResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_chunk**
> delete_chunk(chunk_id)

Delete Chunk Handler

Delete a chunk.

The chunk is deleted via its PathPart (cascading delete).
The associated ChunkContent may remain if shared by other chunks.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8000
# See configuration.py for a list of all supported configuration parameters.
configuration = ksapi.Configuration(
    host = "http://localhost:8000"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Configure Bearer authorization: bearerAuth
configuration = ksapi.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.ChunksApi(api_client)
    chunk_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Delete Chunk Handler
        api_instance.delete_chunk(chunk_id)
    except Exception as e:
        print("Exception when calling ChunksApi->delete_chunk: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chunk_id** | **UUID**|  | 

### Return type

void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_chunk**
> ChunkResponse get_chunk(chunk_id, with_document=with_document)

Get Chunk Handler

Get a chunk by its ID, including content.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.chunk_response import ChunkResponse
from ksapi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8000
# See configuration.py for a list of all supported configuration parameters.
configuration = ksapi.Configuration(
    host = "http://localhost:8000"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Configure Bearer authorization: bearerAuth
configuration = ksapi.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.ChunksApi(api_client)
    chunk_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    with_document = False # bool | Include ancestor document_id and document_version_id (default: false) (optional) (default to False)

    try:
        # Get Chunk Handler
        api_response = api_instance.get_chunk(chunk_id, with_document=with_document)
        print("The response of ChunksApi->get_chunk:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChunksApi->get_chunk: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chunk_id** | **UUID**|  | 
 **with_document** | **bool**| Include ancestor document_id and document_version_id (default: false) | [optional] [default to False]

### Return type

[**ChunkResponse**](ChunkResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_chunk_neighbors**
> ChunkNeighborsResponse get_chunk_neighbors(chunk_id, prev=prev, next=next, content_type=content_type, within_section=within_section)

Get Chunk Neighbors Handler

Return a window of items around an anchor chunk.

Two traversal modes:

- ``within_section=true`` (default): walks the sibling linked-list under
  the anchor's parent. Stops at items outside ``content_type`` when set.
  Authorized by the anchor's path read permission alone.

- ``within_section=false``: walks the full document version in
  depth-first order and slices a window around the anchor. Crosses
  section boundaries. Additionally requires read permission on the
  enclosing document version's path (matching the
  ``/v1/document_versions/{id}/contents`` endpoint). USERs whose path
  permissions are scoped to a sub-section of the version will get
  ``403`` and should use ``within_section=true``.

``content_type=SECTION`` is rejected with ``400``: the anchor is always
a chunk, so a SECTION-only filter would exclude it.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.chunk_neighbors_response import ChunkNeighborsResponse
from ksapi.models.part_type import PartType
from ksapi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8000
# See configuration.py for a list of all supported configuration parameters.
configuration = ksapi.Configuration(
    host = "http://localhost:8000"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Configure Bearer authorization: bearerAuth
configuration = ksapi.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.ChunksApi(api_client)
    chunk_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    prev = 1 # int | Number of preceding items to include (max 50). (optional) (default to 1)
    next = 1 # int | Number of succeeding items to include (max 50). (optional) (default to 1)
    content_type = ksapi.PartType() # PartType | Filter by content type: SECTION or CHUNK. Omit to return both. SECTION is rejected when the anchor is a chunk (always). (optional)
    within_section = True # bool | When true (default), traverse only the anchor's sibling chain under the same parent. When false, traverse the entire document version in DFS order, crossing section boundaries. (optional) (default to True)

    try:
        # Get Chunk Neighbors Handler
        api_response = api_instance.get_chunk_neighbors(chunk_id, prev=prev, next=next, content_type=content_type, within_section=within_section)
        print("The response of ChunksApi->get_chunk_neighbors:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChunksApi->get_chunk_neighbors: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chunk_id** | **UUID**|  | 
 **prev** | **int**| Number of preceding items to include (max 50). | [optional] [default to 1]
 **next** | **int**| Number of succeeding items to include (max 50). | [optional] [default to 1]
 **content_type** | [**PartType**](.md)| Filter by content type: SECTION or CHUNK. Omit to return both. SECTION is rejected when the anchor is a chunk (always). | [optional] 
 **within_section** | **bool**| When true (default), traverse only the anchor&#39;s sibling chain under the same parent. When false, traverse the entire document version in DFS order, crossing section boundaries. | [optional] [default to True]

### Return type

[**ChunkNeighborsResponse**](ChunkNeighborsResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_chunks_bulk**
> List[ChunkBulkResponse] get_chunks_bulk(chunk_ids=chunk_ids)

Get Chunks Bulk Handler

Batch-fetch chunks with their full ancestor path part IDs.

Returns standard chunk data plus path_part_id_segments (the ordered
ancestor chain from root to chunk) for each requested chunk.
Non-existent IDs are silently skipped. Limited to 200 IDs per call.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.chunk_bulk_response import ChunkBulkResponse
from ksapi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8000
# See configuration.py for a list of all supported configuration parameters.
configuration = ksapi.Configuration(
    host = "http://localhost:8000"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Configure Bearer authorization: bearerAuth
configuration = ksapi.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.ChunksApi(api_client)
    chunk_ids = None # List[UUID] | Chunk IDs to resolve (max 200) (optional)

    try:
        # Get Chunks Bulk Handler
        api_response = api_instance.get_chunks_bulk(chunk_ids=chunk_ids)
        print("The response of ChunksApi->get_chunks_bulk:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChunksApi->get_chunks_bulk: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chunk_ids** | [**List[UUID]**](UUID.md)| Chunk IDs to resolve (max 200) | [optional] 

### Return type

[**List[ChunkBulkResponse]**](ChunkBulkResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_version_chunk_ids**
> VersionChunkIdsResponse get_version_chunk_ids(document_version_id)

Get Version Chunk Ids Handler

Get all chunk IDs belonging to a document version.

Used by the embedding pipeline to discover chunks for a version.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.version_chunk_ids_response import VersionChunkIdsResponse
from ksapi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8000
# See configuration.py for a list of all supported configuration parameters.
configuration = ksapi.Configuration(
    host = "http://localhost:8000"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Configure Bearer authorization: bearerAuth
configuration = ksapi.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.ChunksApi(api_client)
    document_version_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Document version ID

    try:
        # Get Version Chunk Ids Handler
        api_response = api_instance.get_version_chunk_ids(document_version_id)
        print("The response of ChunksApi->get_version_chunk_ids:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChunksApi->get_version_chunk_ids: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **document_version_id** | **UUID**| Document version ID | 

### Return type

[**VersionChunkIdsResponse**](VersionChunkIdsResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_chunks**
> List[ScoredChunkResponse] search_chunks(chunk_search_request)

Search Chunks Handler

Search over chunks using dense vector, BM25 full-text, or hybrid retrieval.

Combines search with path-based authorization and optional metadata filters.
Uses Qdrant for retrieval and hydrates the matched chunks from Postgres.

**Billing note.** SEARCH consume runs *before* path-permission
resolution. A request that resolves to an empty permission set
(caller has read access to nothing in the requested scope) returns
``[]`` cleanly — without raising — so it is **not** refunded. This
is intentional: differential billing for a no-results case would
leak access shape to the caller. Callers concerned about charged
no-op searches should validate path access client-side first.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.chunk_search_request import ChunkSearchRequest
from ksapi.models.scored_chunk_response import ScoredChunkResponse
from ksapi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8000
# See configuration.py for a list of all supported configuration parameters.
configuration = ksapi.Configuration(
    host = "http://localhost:8000"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Configure Bearer authorization: bearerAuth
configuration = ksapi.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.ChunksApi(api_client)
    chunk_search_request = ksapi.ChunkSearchRequest() # ChunkSearchRequest | 

    try:
        # Search Chunks Handler
        api_response = api_instance.search_chunks(chunk_search_request)
        print("The response of ChunksApi->search_chunks:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChunksApi->search_chunks: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chunk_search_request** | [**ChunkSearchRequest**](ChunkSearchRequest.md)|  | 

### Return type

[**List[ScoredChunkResponse]**](ScoredChunkResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_chunk_content**
> ChunkResponse update_chunk_content(chunk_id, update_chunk_content_request)

Update Chunk Content Handler

Update chunk content by creating a new content row.

The old content row is preserved (not deleted). If the new content
matches an existing content hash, it will be deduplicated.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.chunk_response import ChunkResponse
from ksapi.models.update_chunk_content_request import UpdateChunkContentRequest
from ksapi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8000
# See configuration.py for a list of all supported configuration parameters.
configuration = ksapi.Configuration(
    host = "http://localhost:8000"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Configure Bearer authorization: bearerAuth
configuration = ksapi.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.ChunksApi(api_client)
    chunk_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    update_chunk_content_request = ksapi.UpdateChunkContentRequest() # UpdateChunkContentRequest | 

    try:
        # Update Chunk Content Handler
        api_response = api_instance.update_chunk_content(chunk_id, update_chunk_content_request)
        print("The response of ChunksApi->update_chunk_content:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChunksApi->update_chunk_content: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chunk_id** | **UUID**|  | 
 **update_chunk_content_request** | [**UpdateChunkContentRequest**](UpdateChunkContentRequest.md)|  | 

### Return type

[**ChunkResponse**](ChunkResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_chunk_metadata**
> ChunkResponse update_chunk_metadata(chunk_id, update_chunk_metadata_request)

Update Chunk Metadata Handler

Update chunk metadata and/or move the chunk.

The provided metadata is shallow-merged into the existing chunk_metadata.
Move params (parent_path_part_id, prev_sibling_path_id, move_to_head)
allow reparenting or reordering the chunk within the same document version.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.chunk_response import ChunkResponse
from ksapi.models.update_chunk_metadata_request import UpdateChunkMetadataRequest
from ksapi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8000
# See configuration.py for a list of all supported configuration parameters.
configuration = ksapi.Configuration(
    host = "http://localhost:8000"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Configure Bearer authorization: bearerAuth
configuration = ksapi.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.ChunksApi(api_client)
    chunk_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    update_chunk_metadata_request = ksapi.UpdateChunkMetadataRequest() # UpdateChunkMetadataRequest | 

    try:
        # Update Chunk Metadata Handler
        api_response = api_instance.update_chunk_metadata(chunk_id, update_chunk_metadata_request)
        print("The response of ChunksApi->update_chunk_metadata:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChunksApi->update_chunk_metadata: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chunk_id** | **UUID**|  | 
 **update_chunk_metadata_request** | [**UpdateChunkMetadataRequest**](UpdateChunkMetadataRequest.md)|  | 

### Return type

[**ChunkResponse**](ChunkResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

