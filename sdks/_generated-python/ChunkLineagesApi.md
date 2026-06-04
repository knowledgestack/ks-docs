# ksapi.ChunkLineagesApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_chunk_lineage**](ChunkLineagesApi.md#create_chunk_lineage) | **POST** /v1/chunk-lineages | Create Chunk Lineage Handler
[**delete_chunk_lineage**](ChunkLineagesApi.md#delete_chunk_lineage) | **DELETE** /v1/chunk-lineages | Delete Chunk Lineage Handler
[**get_chunk_lineage**](ChunkLineagesApi.md#get_chunk_lineage) | **GET** /v1/chunk-lineages/{chunk_id} | Get Chunk Lineage Handler


# **create_chunk_lineage**
> List[ChunkLineageResponse] create_chunk_lineage(create_chunk_lineage_request, authorization=authorization, ks_uat=ks_uat)

Create Chunk Lineage Handler

Batch-create lineage edges for a child chunk.

Creates edges from each parent chunk to the specified child chunk.
All chunks must exist in the same tenant.

### Example


```python
import ksapi
from ksapi.models.chunk_lineage_response import ChunkLineageResponse
from ksapi.models.create_chunk_lineage_request import CreateChunkLineageRequest
from ksapi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8000
# See configuration.py for a list of all supported configuration parameters.
configuration = ksapi.Configuration(
    host = "http://localhost:8000"
)


# Enter a context with an instance of the API client
with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.ChunkLineagesApi(api_client)
    create_chunk_lineage_request = ksapi.CreateChunkLineageRequest() # CreateChunkLineageRequest | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Create Chunk Lineage Handler
        api_response = api_instance.create_chunk_lineage(create_chunk_lineage_request, authorization=authorization, ks_uat=ks_uat)
        print("The response of ChunkLineagesApi->create_chunk_lineage:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChunkLineagesApi->create_chunk_lineage: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_chunk_lineage_request** | [**CreateChunkLineageRequest**](CreateChunkLineageRequest.md)|  | 
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**List[ChunkLineageResponse]**](ChunkLineageResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_chunk_lineage**
> delete_chunk_lineage(parent_chunk_id, chunk_id, authorization=authorization, ks_uat=ks_uat)

Delete Chunk Lineage Handler

Delete a single lineage edge between parent and child chunks.

### Example


```python
import ksapi
from ksapi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8000
# See configuration.py for a list of all supported configuration parameters.
configuration = ksapi.Configuration(
    host = "http://localhost:8000"
)


# Enter a context with an instance of the API client
with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.ChunkLineagesApi(api_client)
    parent_chunk_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Parent chunk ID
    chunk_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Child chunk ID
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Delete Chunk Lineage Handler
        api_instance.delete_chunk_lineage(parent_chunk_id, chunk_id, authorization=authorization, ks_uat=ks_uat)
    except Exception as e:
        print("Exception when calling ChunkLineagesApi->delete_chunk_lineage: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent_chunk_id** | **UUID**| Parent chunk ID | 
 **chunk_id** | **UUID**| Child chunk ID | 
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_chunk_lineage**
> LineageGraphResponse get_chunk_lineage(chunk_id, max_depth=max_depth, authorization=authorization, ks_uat=ks_uat)

Get Chunk Lineage Handler

Get lineage graph for a chunk.

Traverses both ancestors and descendants up to max_depth,
returning enriched nodes and edges.

### Example


```python
import ksapi
from ksapi.models.lineage_graph_response import LineageGraphResponse
from ksapi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8000
# See configuration.py for a list of all supported configuration parameters.
configuration = ksapi.Configuration(
    host = "http://localhost:8000"
)


# Enter a context with an instance of the API client
with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.ChunkLineagesApi(api_client)
    chunk_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    max_depth = 3 # int |  (optional) (default to 3)
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Get Chunk Lineage Handler
        api_response = api_instance.get_chunk_lineage(chunk_id, max_depth=max_depth, authorization=authorization, ks_uat=ks_uat)
        print("The response of ChunkLineagesApi->get_chunk_lineage:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChunkLineagesApi->get_chunk_lineage: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chunk_id** | **UUID**|  | 
 **max_depth** | **int**|  | [optional] [default to 3]
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**LineageGraphResponse**](LineageGraphResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

