# ksapi.EmailThreadsApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_email_thread**](EmailThreadsApi.md#create_email_thread) | **POST** /v1/email-threads | Create Email Thread Handler
[**delete_email_thread**](EmailThreadsApi.md#delete_email_thread) | **DELETE** /v1/email-threads/{thread_id} | Delete Email Thread Handler
[**get_email_thread**](EmailThreadsApi.md#get_email_thread) | **GET** /v1/email-threads/{thread_id} | Get Email Thread Handler
[**list_email_threads**](EmailThreadsApi.md#list_email_threads) | **GET** /v1/email-threads | List Email Threads Handler
[**update_email_thread**](EmailThreadsApi.md#update_email_thread) | **PATCH** /v1/email-threads/{thread_id} | Update Email Thread Handler


# **create_email_thread**
> EmailThreadResponse create_email_thread(create_email_thread_request)

**Synchronous variant:** `create_email_thread_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Create Email Thread Handler

Ensure a conversation exists under a parent the caller can write to.

Find-or-create, not create: 201 when this call made it, 200 when it was
already there. A conversation is identified by the id its provider gives
every message (Graph's ``conversationId``, Gmail's ``threadId``), so the
caller syncing a mailbox does not know, and cannot cheaply find out, whether
the conversation a new message belongs to was stored on an earlier run.
Creating unconditionally would add a fresh thread on every sync that brought
one more reply.

The id is only matched against conversations under the same parent, so a
conversation two connected mailboxes are both on keeps one thread per
mailbox: permissions follow the connector's path, and merging the two would
hang mail one side cannot read under a thread the other side can.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.create_email_thread_request import CreateEmailThreadRequest
from ksapi.models.email_thread_response import EmailThreadResponse
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
async with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.EmailThreadsApi(api_client)
    create_email_thread_request = ksapi.CreateEmailThreadRequest() # CreateEmailThreadRequest | 

    try:
        # Create Email Thread Handler
        api_response = await api_instance.create_email_thread(create_email_thread_request)
        print("The response of EmailThreadsApi->create_email_thread:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailThreadsApi->create_email_thread: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_email_thread_request** | [**CreateEmailThreadRequest**](CreateEmailThreadRequest.md)|  | 

### Return type

[**EmailThreadResponse**](EmailThreadResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**200** | The conversation was already there; it is returned unchanged. |  -  |
**422** | Validation Error |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_email_thread**
> delete_email_thread(thread_id)

**Synchronous variant:** `delete_email_thread_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Delete Email Thread Handler

Move a conversation and its messages to trash. Not exposed on the FE.

Returns 409 for a conversation synced from a mailbox; the path system
refuses to trash a system-managed subtree anyway, and this says so first.

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
async with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.EmailThreadsApi(api_client)
    thread_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Delete Email Thread Handler
        await api_instance.delete_email_thread(thread_id)
    except Exception as e:
        print("Exception when calling EmailThreadsApi->delete_email_thread: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thread_id** | **UUID**|  | 

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
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_email_thread**
> EmailThreadResponse get_email_thread(thread_id)

**Synchronous variant:** `get_email_thread_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Get Email Thread Handler

Get a single conversation.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.email_thread_response import EmailThreadResponse
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
async with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.EmailThreadsApi(api_client)
    thread_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Get Email Thread Handler
        api_response = await api_instance.get_email_thread(thread_id)
        print("The response of EmailThreadsApi->get_email_thread:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailThreadsApi->get_email_thread: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thread_id** | **UUID**|  | 

### Return type

[**EmailThreadResponse**](EmailThreadResponse.md)

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

# **list_email_threads**
> PaginatedResponseEmailThreadResponse list_email_threads(parent_path_part_id, sort_by=sort_by, search=search, external_source_folder=external_source_folder, limit=limit, offset=offset, sort_dir=sort_dir)

**Synchronous variant:** `list_email_threads_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

List Email Threads Handler

List a folder's conversations, newest first by default.

Each row carries what a collapsed conversation shows — participants, the
message count, a paperclip and the latest mail's opening line — computed
for the whole page by one aggregate. A caller reading those per
conversation instead is a request per row, which is what makes a fifty-row
page slow.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.email_thread_order import EmailThreadOrder
from ksapi.models.paginated_response_email_thread_response import PaginatedResponseEmailThreadResponse
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
async with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.EmailThreadsApi(api_client)
    parent_path_part_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Folder whose conversations are listed
    sort_by = ksapi.EmailThreadOrder() # EmailThreadOrder |  (optional)
    search = 'search_example' # str | Title substring (optional)
    external_source_folder = 'external_source_folder_example' # str | Keep only conversations holding at least one mail in this folder, by the provider's own key (inbox, sentitems). Not a partition: a conversation you replied to has mail in both and shows under either filter (optional)
    limit = 20 # int | Number of items per page (optional) (default to 20)
    offset = 0 # int | Number of items to skip (optional) (default to 0)
    sort_dir = ksapi.SortDirection() # SortDirection | Sort direction (ASC or DESC); overrides the field's natural default. Every sort field supports both directions. (optional)

    try:
        # List Email Threads Handler
        api_response = await api_instance.list_email_threads(parent_path_part_id, sort_by=sort_by, search=search, external_source_folder=external_source_folder, limit=limit, offset=offset, sort_dir=sort_dir)
        print("The response of EmailThreadsApi->list_email_threads:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailThreadsApi->list_email_threads: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent_path_part_id** | **UUID**| Folder whose conversations are listed | 
 **sort_by** | [**EmailThreadOrder**](.md)|  | [optional] 
 **search** | **str**| Title substring | [optional] 
 **external_source_folder** | **str**| Keep only conversations holding at least one mail in this folder, by the provider&#39;s own key (inbox, sentitems). Not a partition: a conversation you replied to has mail in both and shows under either filter | [optional] 
 **limit** | **int**| Number of items per page | [optional] [default to 20]
 **offset** | **int**| Number of items to skip | [optional] [default to 0]
 **sort_dir** | [**SortDirection**](.md)| Sort direction (ASC or DESC); overrides the field&#39;s natural default. Every sort field supports both directions. | [optional] 

### Return type

[**PaginatedResponseEmailThreadResponse**](PaginatedResponseEmailThreadResponse.md)

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

# **update_email_thread**
> EmailThreadResponse update_email_thread(thread_id, update_email_thread_request)

**Synchronous variant:** `update_email_thread_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Update Email Thread Handler

Update a conversation's title. Not exposed on the FE.

A conversation synced from a mailbox is system-managed and returns 409: its
title is the subject the source gave it, and an edit would make the stored
record disagree with the mail it came from.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.email_thread_response import EmailThreadResponse
from ksapi.models.update_email_thread_request import UpdateEmailThreadRequest
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
async with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.EmailThreadsApi(api_client)
    thread_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    update_email_thread_request = ksapi.UpdateEmailThreadRequest() # UpdateEmailThreadRequest | 

    try:
        # Update Email Thread Handler
        api_response = await api_instance.update_email_thread(thread_id, update_email_thread_request)
        print("The response of EmailThreadsApi->update_email_thread:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailThreadsApi->update_email_thread: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thread_id** | **UUID**|  | 
 **update_email_thread_request** | [**UpdateEmailThreadRequest**](UpdateEmailThreadRequest.md)|  | 

### Return type

[**EmailThreadResponse**](EmailThreadResponse.md)

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
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

