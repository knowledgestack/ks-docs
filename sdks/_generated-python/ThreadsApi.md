# ksapi.ThreadsApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_thread**](ThreadsApi.md#create_thread) | **POST** /v1/threads | Create Thread Handler
[**delete_thread**](ThreadsApi.md#delete_thread) | **DELETE** /v1/threads/{thread_id} | Delete Thread Handler
[**get_thread**](ThreadsApi.md#get_thread) | **GET** /v1/threads/{thread_id} | Get Thread Handler
[**list_threads**](ThreadsApi.md#list_threads) | **GET** /v1/threads | List Threads Handler
[**send_user_message**](ThreadsApi.md#send_user_message) | **POST** /v1/threads/{thread_id}/user_message | Send User Message Handler
[**stream_thread**](ThreadsApi.md#stream_thread) | **GET** /v1/threads/{thread_id}/stream | Stream Thread Handler
[**update_thread**](ThreadsApi.md#update_thread) | **PATCH** /v1/threads/{thread_id} | Update Thread Handler


# **create_thread**
> ThreadResponse create_thread(create_thread_request, authorization=authorization, ks_uat=ks_uat)

Create Thread Handler

Create a new thread.

If parent_path_part_id is omitted, the thread is created under the
user's /users/{user_id}/threads/ folder (auto-provisioned if needed).

### Example


```python
import ksapi
from ksapi.models.create_thread_request import CreateThreadRequest
from ksapi.models.thread_response import ThreadResponse
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
    api_instance = ksapi.ThreadsApi(api_client)
    create_thread_request = ksapi.CreateThreadRequest() # CreateThreadRequest | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Create Thread Handler
        api_response = api_instance.create_thread(create_thread_request, authorization=authorization, ks_uat=ks_uat)
        print("The response of ThreadsApi->create_thread:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ThreadsApi->create_thread: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_thread_request** | [**CreateThreadRequest**](CreateThreadRequest.md)|  | 
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**ThreadResponse**](ThreadResponse.md)

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

# **delete_thread**
> delete_thread(thread_id, authorization=authorization, ks_uat=ks_uat)

Delete Thread Handler

Delete a thread.

Authorization: only conversation threads belonging to the current user
(under /users/{user_id}/threads/) can be deleted. Asset threads
(attached to documents/sections) are never deletable via this endpoint.

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
    api_instance = ksapi.ThreadsApi(api_client)
    thread_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Delete Thread Handler
        api_instance.delete_thread(thread_id, authorization=authorization, ks_uat=ks_uat)
    except Exception as e:
        print("Exception when calling ThreadsApi->delete_thread: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thread_id** | **UUID**|  | 
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

# **get_thread**
> ThreadResponse get_thread(thread_id, authorization=authorization, ks_uat=ks_uat)

Get Thread Handler

Get a thread by its thread ID.

### Example


```python
import ksapi
from ksapi.models.thread_response import ThreadResponse
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
    api_instance = ksapi.ThreadsApi(api_client)
    thread_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Get Thread Handler
        api_response = api_instance.get_thread(thread_id, authorization=authorization, ks_uat=ks_uat)
        print("The response of ThreadsApi->get_thread:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ThreadsApi->get_thread: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thread_id** | **UUID**|  | 
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**ThreadResponse**](ThreadResponse.md)

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

# **list_threads**
> PaginatedResponseThreadResponse list_threads(parent_path_part_id=parent_path_part_id, limit=limit, offset=offset, authorization=authorization, ks_uat=ks_uat)

List Threads Handler

List threads under a parent path_part.

When parent_path_part_id is omitted, lists the authenticated user's
conversation threads from /users/{user_id}/threads/.

### Example


```python
import ksapi
from ksapi.models.paginated_response_thread_response import PaginatedResponseThreadResponse
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
    api_instance = ksapi.ThreadsApi(api_client)
    parent_path_part_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Parent PathPart ID. Omit to list user's conversation threads. (optional)
    limit = 20 # int | Number of items per page (optional) (default to 20)
    offset = 0 # int | Number of items to skip (optional) (default to 0)
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # List Threads Handler
        api_response = api_instance.list_threads(parent_path_part_id=parent_path_part_id, limit=limit, offset=offset, authorization=authorization, ks_uat=ks_uat)
        print("The response of ThreadsApi->list_threads:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ThreadsApi->list_threads: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent_path_part_id** | **UUID**| Parent PathPart ID. Omit to list user&#39;s conversation threads. | [optional] 
 **limit** | **int**| Number of items per page | [optional] [default to 20]
 **offset** | **int**| Number of items to skip | [optional] [default to 0]
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**PaginatedResponseThreadResponse**](PaginatedResponseThreadResponse.md)

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

# **send_user_message**
> UserMessageResponse send_user_message(thread_id, user_message_request, authorization=authorization, ks_uat=ks_uat)

Send User Message Handler

Send a user message and trigger agent generation. Returns immediately with a workflow_id.

Connect to GET /{thread_id}/stream (SSE) before or after calling this
endpoint to receive the streamed output.

Quota: consumes one MESSAGE inside the same transaction that creates
the user-message row and starts the workflow. Any failure on the
consume, the workflow start, or anywhere in between rolls back the
whole transaction via the session context manager — message insert,
quota consume, and downstream side effects are all-or-nothing. No
explicit refund path is needed because nothing commits until the
workflow has been durably enqueued. Workflow failures observed
asynchronously (after enqueue) do **not** refund — the consume
stands, matching agent-ask's v1 simplification.

### Example


```python
import ksapi
from ksapi.models.user_message_request import UserMessageRequest
from ksapi.models.user_message_response import UserMessageResponse
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
    api_instance = ksapi.ThreadsApi(api_client)
    thread_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    user_message_request = ksapi.UserMessageRequest() # UserMessageRequest | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Send User Message Handler
        api_response = api_instance.send_user_message(thread_id, user_message_request, authorization=authorization, ks_uat=ks_uat)
        print("The response of ThreadsApi->send_user_message:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ThreadsApi->send_user_message: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thread_id** | **UUID**|  | 
 **user_message_request** | [**UserMessageRequest**](UserMessageRequest.md)|  | 
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**UserMessageResponse**](UserMessageResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stream_thread**
> stream_thread(thread_id, last_message_id=last_message_id, last_entry_id=last_entry_id, authorization=authorization, ks_uat=ks_uat)

Stream Thread Handler

SSE endpoint for streaming thread messages.

Opens a server-sent event stream for the given thread. Optionally replays
missed entries if last_message_id and last_entry_id are provided.

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
    api_instance = ksapi.ThreadsApi(api_client)
    thread_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    last_message_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID |  (optional)
    last_entry_id = 'last_entry_id_example' # str |  (optional)
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Stream Thread Handler
        api_instance.stream_thread(thread_id, last_message_id=last_message_id, last_entry_id=last_entry_id, authorization=authorization, ks_uat=ks_uat)
    except Exception as e:
        print("Exception when calling ThreadsApi->stream_thread: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thread_id** | **UUID**|  | 
 **last_message_id** | **UUID**|  | [optional] 
 **last_entry_id** | **str**|  | [optional] 
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
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_thread**
> ThreadResponse update_thread(thread_id, update_thread_request, authorization=authorization, ks_uat=ks_uat)

Update Thread Handler

Update a thread's title and/or parent_thread_id.

### Example


```python
import ksapi
from ksapi.models.thread_response import ThreadResponse
from ksapi.models.update_thread_request import UpdateThreadRequest
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
    api_instance = ksapi.ThreadsApi(api_client)
    thread_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    update_thread_request = ksapi.UpdateThreadRequest() # UpdateThreadRequest | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Update Thread Handler
        api_response = api_instance.update_thread(thread_id, update_thread_request, authorization=authorization, ks_uat=ks_uat)
        print("The response of ThreadsApi->update_thread:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ThreadsApi->update_thread: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thread_id** | **UUID**|  | 
 **update_thread_request** | [**UpdateThreadRequest**](UpdateThreadRequest.md)|  | 
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**ThreadResponse**](ThreadResponse.md)

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

