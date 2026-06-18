# ksapi.ThreadMessagesApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_thread_message**](ThreadMessagesApi.md#create_thread_message) | **POST** /v1/threads/{thread_id}/messages | Create Thread Message Handler
[**get_thread_message**](ThreadMessagesApi.md#get_thread_message) | **GET** /v1/threads/{thread_id}/messages/{message_id} | Get Thread Message Handler
[**list_thread_messages**](ThreadMessagesApi.md#list_thread_messages) | **GET** /v1/threads/{thread_id}/messages | List Thread Messages Handler


# **create_thread_message**
> ThreadMessageResponse create_thread_message(thread_id, create_thread_message_request)

Create Thread Message Handler

Create a new message in a thread.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.create_thread_message_request import CreateThreadMessageRequest
from ksapi.models.thread_message_response import ThreadMessageResponse
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
    api_instance = ksapi.ThreadMessagesApi(api_client)
    thread_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    create_thread_message_request = ksapi.CreateThreadMessageRequest() # CreateThreadMessageRequest | 

    try:
        # Create Thread Message Handler
        api_response = api_instance.create_thread_message(thread_id, create_thread_message_request)
        print("The response of ThreadMessagesApi->create_thread_message:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ThreadMessagesApi->create_thread_message: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thread_id** | **UUID**|  | 
 **create_thread_message_request** | [**CreateThreadMessageRequest**](CreateThreadMessageRequest.md)|  | 

### Return type

[**ThreadMessageResponse**](ThreadMessageResponse.md)

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
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_thread_message**
> ThreadMessageResponse get_thread_message(thread_id, message_id, with_details=with_details)

Get Thread Message Handler

Get a specific message by its ID.

Use `with_details=false` to exclude execution step data and reduce payload size.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.thread_message_response import ThreadMessageResponse
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
    api_instance = ksapi.ThreadMessagesApi(api_client)
    thread_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    message_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    with_details = True # bool | Include execution steps in response (default true) (optional) (default to True)

    try:
        # Get Thread Message Handler
        api_response = api_instance.get_thread_message(thread_id, message_id, with_details=with_details)
        print("The response of ThreadMessagesApi->get_thread_message:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ThreadMessagesApi->get_thread_message: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thread_id** | **UUID**|  | 
 **message_id** | **UUID**|  | 
 **with_details** | **bool**| Include execution steps in response (default true) | [optional] [default to True]

### Return type

[**ThreadMessageResponse**](ThreadMessageResponse.md)

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
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_thread_messages**
> PaginatedResponseThreadMessageResponse list_thread_messages(thread_id, before=before, role=role, sort_dir=sort_dir, with_details=with_details, limit=limit, offset=offset)

List Thread Messages Handler

List messages in a thread, ordered by created_at descending.

Supports cursor-based pagination via `before` parameter and
standard offset-based pagination via `limit`/`offset`.

Use `with_details=false` to exclude execution step data and reduce payload size.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.message_role import MessageRole
from ksapi.models.paginated_response_thread_message_response import PaginatedResponseThreadMessageResponse
from ksapi.models.sort_direction import SortDirection
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
    api_instance = ksapi.ThreadMessagesApi(api_client)
    thread_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    before = '2013-10-20T19:20:30+01:00' # datetime | Cursor for keyset pagination: only return messages with created_at < this value (optional)
    role = ksapi.MessageRole() # MessageRole | Filter messages by role (USER, ASSISTANT, SYSTEM) (optional)
    sort_dir = ksapi.SortDirection() # SortDirection | ASC for oldest-first; default/DESC keeps newest-first (optional)
    with_details = True # bool | Include execution steps in response (default true) (optional) (default to True)
    limit = 20 # int | Number of items per page (optional) (default to 20)
    offset = 0 # int | Number of items to skip (optional) (default to 0)

    try:
        # List Thread Messages Handler
        api_response = api_instance.list_thread_messages(thread_id, before=before, role=role, sort_dir=sort_dir, with_details=with_details, limit=limit, offset=offset)
        print("The response of ThreadMessagesApi->list_thread_messages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ThreadMessagesApi->list_thread_messages: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thread_id** | **UUID**|  | 
 **before** | **datetime**| Cursor for keyset pagination: only return messages with created_at &lt; this value | [optional] 
 **role** | [**MessageRole**](.md)| Filter messages by role (USER, ASSISTANT, SYSTEM) | [optional] 
 **sort_dir** | [**SortDirection**](.md)| ASC for oldest-first; default/DESC keeps newest-first | [optional] 
 **with_details** | **bool**| Include execution steps in response (default true) | [optional] [default to True]
 **limit** | **int**| Number of items per page | [optional] [default to 20]
 **offset** | **int**| Number of items to skip | [optional] [default to 0]

### Return type

[**PaginatedResponseThreadMessageResponse**](PaginatedResponseThreadMessageResponse.md)

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
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

