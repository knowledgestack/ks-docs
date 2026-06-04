# ksapi.WorkflowMemoryApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**append_workflow_memory_chunk**](WorkflowMemoryApi.md#append_workflow_memory_chunk) | **POST** /v1/workflow-definitions/{definition_id}/memory/chunks | Append Workflow Memory Chunk Handler
[**edit_workflow_memory_chunk**](WorkflowMemoryApi.md#edit_workflow_memory_chunk) | **PATCH** /v1/workflow-definitions/{definition_id}/memory/chunks/{chunk_id} | Edit Workflow Memory Chunk Handler
[**forget_workflow_memory_chunk**](WorkflowMemoryApi.md#forget_workflow_memory_chunk) | **DELETE** /v1/workflow-definitions/{definition_id}/memory/chunks/{chunk_id} | Forget Workflow Memory Chunk Handler
[**get_workflow_memory_chunk**](WorkflowMemoryApi.md#get_workflow_memory_chunk) | **GET** /v1/workflow-definitions/{definition_id}/memory/chunks/{chunk_id} | Get Workflow Memory Chunk Handler
[**list_workflow_memory_chunks**](WorkflowMemoryApi.md#list_workflow_memory_chunks) | **GET** /v1/workflow-definitions/{definition_id}/memory | List Workflow Memory Chunks Handler


# **append_workflow_memory_chunk**
> MemoryChunkResponse append_workflow_memory_chunk(definition_id, append_memory_chunk_request, authorization=authorization, ks_uat=ks_uat)

Append Workflow Memory Chunk Handler

### Example


```python
import ksapi
from ksapi.models.append_memory_chunk_request import AppendMemoryChunkRequest
from ksapi.models.memory_chunk_response import MemoryChunkResponse
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
    api_instance = ksapi.WorkflowMemoryApi(api_client)
    definition_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    append_memory_chunk_request = ksapi.AppendMemoryChunkRequest() # AppendMemoryChunkRequest | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Append Workflow Memory Chunk Handler
        api_response = api_instance.append_workflow_memory_chunk(definition_id, append_memory_chunk_request, authorization=authorization, ks_uat=ks_uat)
        print("The response of WorkflowMemoryApi->append_workflow_memory_chunk:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowMemoryApi->append_workflow_memory_chunk: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **definition_id** | **UUID**|  | 
 **append_memory_chunk_request** | [**AppendMemoryChunkRequest**](AppendMemoryChunkRequest.md)|  | 
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**MemoryChunkResponse**](MemoryChunkResponse.md)

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

# **edit_workflow_memory_chunk**
> MemoryChunkResponse edit_workflow_memory_chunk(definition_id, chunk_id, edit_memory_chunk_request, authorization=authorization, ks_uat=ks_uat)

Edit Workflow Memory Chunk Handler

### Example


```python
import ksapi
from ksapi.models.edit_memory_chunk_request import EditMemoryChunkRequest
from ksapi.models.memory_chunk_response import MemoryChunkResponse
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
    api_instance = ksapi.WorkflowMemoryApi(api_client)
    definition_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    chunk_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    edit_memory_chunk_request = ksapi.EditMemoryChunkRequest() # EditMemoryChunkRequest | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Edit Workflow Memory Chunk Handler
        api_response = api_instance.edit_workflow_memory_chunk(definition_id, chunk_id, edit_memory_chunk_request, authorization=authorization, ks_uat=ks_uat)
        print("The response of WorkflowMemoryApi->edit_workflow_memory_chunk:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowMemoryApi->edit_workflow_memory_chunk: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **definition_id** | **UUID**|  | 
 **chunk_id** | **UUID**|  | 
 **edit_memory_chunk_request** | [**EditMemoryChunkRequest**](EditMemoryChunkRequest.md)|  | 
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**MemoryChunkResponse**](MemoryChunkResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **forget_workflow_memory_chunk**
> forget_workflow_memory_chunk(definition_id, chunk_id, authorization=authorization, ks_uat=ks_uat)

Forget Workflow Memory Chunk Handler

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
    api_instance = ksapi.WorkflowMemoryApi(api_client)
    definition_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    chunk_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Forget Workflow Memory Chunk Handler
        api_instance.forget_workflow_memory_chunk(definition_id, chunk_id, authorization=authorization, ks_uat=ks_uat)
    except Exception as e:
        print("Exception when calling WorkflowMemoryApi->forget_workflow_memory_chunk: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **definition_id** | **UUID**|  | 
 **chunk_id** | **UUID**|  | 
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

# **get_workflow_memory_chunk**
> MemoryChunkResponse get_workflow_memory_chunk(definition_id, chunk_id, authorization=authorization, ks_uat=ks_uat)

Get Workflow Memory Chunk Handler

### Example


```python
import ksapi
from ksapi.models.memory_chunk_response import MemoryChunkResponse
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
    api_instance = ksapi.WorkflowMemoryApi(api_client)
    definition_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    chunk_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Get Workflow Memory Chunk Handler
        api_response = api_instance.get_workflow_memory_chunk(definition_id, chunk_id, authorization=authorization, ks_uat=ks_uat)
        print("The response of WorkflowMemoryApi->get_workflow_memory_chunk:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowMemoryApi->get_workflow_memory_chunk: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **definition_id** | **UUID**|  | 
 **chunk_id** | **UUID**|  | 
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**MemoryChunkResponse**](MemoryChunkResponse.md)

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

# **list_workflow_memory_chunks**
> PaginatedResponseMemoryChunkResponse list_workflow_memory_chunks(definition_id, limit=limit, offset=offset, authorization=authorization, ks_uat=ks_uat)

List Workflow Memory Chunks Handler

### Example


```python
import ksapi
from ksapi.models.paginated_response_memory_chunk_response import PaginatedResponseMemoryChunkResponse
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
    api_instance = ksapi.WorkflowMemoryApi(api_client)
    definition_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    limit = 20 # int | Number of items per page (optional) (default to 20)
    offset = 0 # int | Number of items to skip (optional) (default to 0)
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # List Workflow Memory Chunks Handler
        api_response = api_instance.list_workflow_memory_chunks(definition_id, limit=limit, offset=offset, authorization=authorization, ks_uat=ks_uat)
        print("The response of WorkflowMemoryApi->list_workflow_memory_chunks:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowMemoryApi->list_workflow_memory_chunks: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **definition_id** | **UUID**|  | 
 **limit** | **int**| Number of items per page | [optional] [default to 20]
 **offset** | **int**| Number of items to skip | [optional] [default to 0]
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**PaginatedResponseMemoryChunkResponse**](PaginatedResponseMemoryChunkResponse.md)

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

