# ksapi.EmailMessagesApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_email_message**](EmailMessagesApi.md#create_email_message) | **POST** /v1/email-messages | Create Email Message Handler
[**delete_email_message**](EmailMessagesApi.md#delete_email_message) | **DELETE** /v1/email-messages/{message_id} | Delete Email Message Handler
[**get_email_message**](EmailMessagesApi.md#get_email_message) | **GET** /v1/email-messages/{message_id} | Get Email Message Handler
[**list_email_messages**](EmailMessagesApi.md#list_email_messages) | **GET** /v1/email-messages | List Email Messages Handler
[**update_email_message**](EmailMessagesApi.md#update_email_message) | **PATCH** /v1/email-messages/{message_id} | Update Email Message Handler


# **create_email_message**
> CreateEmailMessageResponse create_email_message(parent_path_part_id, external_message_id, sent_at, title, sender, external_source_folder=external_source_folder, recipients=recipients, cc_recipients=cc_recipients, bcc_recipients=bcc_recipients, content=content, attachments=attachments)

**Synchronous variant:** `create_email_message_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Create Email Message Handler

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.create_email_message_response import CreateEmailMessageResponse
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
    api_instance = ksapi.EmailMessagesApi(api_client)
    parent_path_part_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    external_message_id = 'external_message_id_example' # str | The id the source gives this message — Graph's immutable id, Gmail's message id. Not the RFC 5322 Message-ID header. Unique per tenant: a re-POST is refused with 409.
    sent_at = '2013-10-20T19:20:30+01:00' # datetime | When the source says the mail was sent
    title = 'title_example' # str | 
    sender = 'sender_example' # str | The header value, stored verbatim — display name and all, exactly as the source wrote it: ``\\\"张三 <zhang@example.cn>\\\"``. Not parsed, not validated.
    external_source_folder = 'external_source_folder_example' # str | The source folder this mail was read from, as the provider's well-known key, for callers that sync a mailbox folder by folder. Omit it for a mail that has no such origin. (optional)
    recipients = ['recipients_example'] # List[str] | Header values, stored verbatim. One entry may hold several comma-separated addresses, which is what a mail header looks like and what a generated SDK sends for an array form field. (optional)
    cc_recipients = ['cc_recipients_example'] # List[str] | Header values, stored verbatim. One entry may hold several comma-separated addresses, which is what a mail header looks like and what a generated SDK sends for an array form field. (optional)
    bcc_recipients = ['bcc_recipients_example'] # List[str] | Header values, stored verbatim. One entry may hold several comma-separated addresses, which is what a mail header looks like and what a generated SDK sends for an array form field. (optional)
    content = 'content_example' # str | The body; stored as this message's CHUNK child, not on the row. Omit it for a mail that has none — no chunk is written, and the detail response returns an empty string. (optional)
    attachments = None # List[bytes] | Files sent with the mail. Each becomes a Document under this message and is ingested on its own; one that cannot be stored is reported in ``attachment_errors`` and does not fail the message. (optional)

    try:
        # Create Email Message Handler
        api_response = await api_instance.create_email_message(parent_path_part_id, external_message_id, sent_at, title, sender, external_source_folder=external_source_folder, recipients=recipients, cc_recipients=cc_recipients, bcc_recipients=bcc_recipients, content=content, attachments=attachments)
        print("The response of EmailMessagesApi->create_email_message:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailMessagesApi->create_email_message: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent_path_part_id** | **UUID**|  | 
 **external_message_id** | **str**| The id the source gives this message — Graph&#39;s immutable id, Gmail&#39;s message id. Not the RFC 5322 Message-ID header. Unique per tenant: a re-POST is refused with 409. | 
 **sent_at** | **datetime**| When the source says the mail was sent | 
 **title** | **str**|  | 
 **sender** | **str**| The header value, stored verbatim — display name and all, exactly as the source wrote it: &#x60;&#x60;\\\&quot;张三 &lt;zhang@example.cn&gt;\\\&quot;&#x60;&#x60;. Not parsed, not validated. | 
 **external_source_folder** | **str**| The source folder this mail was read from, as the provider&#39;s well-known key, for callers that sync a mailbox folder by folder. Omit it for a mail that has no such origin. | [optional] 
 **recipients** | [**List[str]**](str.md)| Header values, stored verbatim. One entry may hold several comma-separated addresses, which is what a mail header looks like and what a generated SDK sends for an array form field. | [optional] 
 **cc_recipients** | [**List[str]**](str.md)| Header values, stored verbatim. One entry may hold several comma-separated addresses, which is what a mail header looks like and what a generated SDK sends for an array form field. | [optional] 
 **bcc_recipients** | [**List[str]**](str.md)| Header values, stored verbatim. One entry may hold several comma-separated addresses, which is what a mail header looks like and what a generated SDK sends for an array form field. | [optional] 
 **content** | **str**| The body; stored as this message&#39;s CHUNK child, not on the row. Omit it for a mail that has none — no chunk is written, and the detail response returns an empty string. | [optional] 
 **attachments** | **List[bytes]**| Files sent with the mail. Each becomes a Document under this message and is ingested on its own; one that cannot be stored is reported in &#x60;&#x60;attachment_errors&#x60;&#x60; and does not fail the message. | [optional] 

### Return type

[**CreateEmailMessageResponse**](CreateEmailMessageResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**200** | The mail was already there and this call completed it, or it was in the trash and this call restored it. |  -  |
**422** | Validation Error |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_email_message**
> delete_email_message(message_id)

**Synchronous variant:** `delete_email_message_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Delete Email Message Handler

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
    api_instance = ksapi.EmailMessagesApi(api_client)
    message_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Delete Email Message Handler
        await api_instance.delete_email_message(message_id)
    except Exception as e:
        print("Exception when calling EmailMessagesApi->delete_email_message: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **message_id** | **UUID**|  | 

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

# **get_email_message**
> EmailMessageDetailResponse get_email_message(message_id)

**Synchronous variant:** `get_email_message_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Get Email Message Handler

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.email_message_detail_response import EmailMessageDetailResponse
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
    api_instance = ksapi.EmailMessagesApi(api_client)
    message_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Get Email Message Handler
        api_response = await api_instance.get_email_message(message_id)
        print("The response of EmailMessagesApi->get_email_message:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailMessagesApi->get_email_message: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **message_id** | **UUID**|  | 

### Return type

[**EmailMessageDetailResponse**](EmailMessageDetailResponse.md)

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

# **list_email_messages**
> PaginatedResponseEmailMessageResponse list_email_messages(parent_path_part_id=parent_path_part_id, ancestor_path_part_id=ancestor_path_part_id, sort_by=sort_by, search=search, external_source_folder=external_source_folder, sender=sender, sent_after=sent_after, sent_before=sent_before, limit=limit, offset=offset, sort_dir=sort_dir)

**Synchronous variant:** `list_email_messages_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

List Email Messages Handler

List mail under one node, or anywhere under one subtree, oldest first.

The metadata filters are matched exactly, in SQL. A chunk's text never
holds the sender or the send time, so no amount of vector search reaches
them; bodies and attachments stay with ``POST /v1/chunks/search``, where
``hybrid_profile=sparse`` matches exact tokens and ``dense`` matches
meaning. Scope that search to one mailbox or one folder by passing its
path part id as ``parent_path_ids``.

Nonempty subject or metadata filters limit every role to readable /shared and
personal paths. Empty string filters are inactive. Unfiltered browsing and
direct ID reads retain ordinary read access.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.email_message_order import EmailMessageOrder
from ksapi.models.paginated_response_email_message_response import PaginatedResponseEmailMessageResponse
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
    api_instance = ksapi.EmailMessagesApi(api_client)
    parent_path_part_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Conversation or folder whose direct messages are listed. Exactly one of this and ``ancestor_path_part_id``. (optional)
    ancestor_path_part_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | List every message anywhere under this node instead — a mailbox connector, to search one mailbox. Mail sits under a conversation under a folder, so a direct-parent listing cannot reach it. (optional)
    sort_by = ksapi.EmailMessageOrder() # EmailMessageOrder |  (optional)
    search = 'search_example' # str | Title substring (optional)
    external_source_folder = 'external_source_folder_example' # str | The provider's folder key the mail was read from, exactly (``inbox``, ``sentitems``). (optional)
    sender = 'sender_example' # str | Substring of the From header, which is stored verbatim — match on the display name or on the address. (optional)
    sent_after = '2013-10-20T19:20:30+01:00' # datetime | Sent at or after this instant (the mail's own clock) (optional)
    sent_before = '2013-10-20T19:20:30+01:00' # datetime | Sent strictly before this instant (optional)
    limit = 20 # int | Number of items per page (optional) (default to 20)
    offset = 0 # int | Number of items to skip (optional) (default to 0)
    sort_dir = ksapi.SortDirection() # SortDirection | Sort direction (ASC or DESC); overrides the field's natural default. Every sort field supports both directions. (optional)

    try:
        # List Email Messages Handler
        api_response = await api_instance.list_email_messages(parent_path_part_id=parent_path_part_id, ancestor_path_part_id=ancestor_path_part_id, sort_by=sort_by, search=search, external_source_folder=external_source_folder, sender=sender, sent_after=sent_after, sent_before=sent_before, limit=limit, offset=offset, sort_dir=sort_dir)
        print("The response of EmailMessagesApi->list_email_messages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailMessagesApi->list_email_messages: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent_path_part_id** | **UUID**| Conversation or folder whose direct messages are listed. Exactly one of this and &#x60;&#x60;ancestor_path_part_id&#x60;&#x60;. | [optional] 
 **ancestor_path_part_id** | **UUID**| List every message anywhere under this node instead — a mailbox connector, to search one mailbox. Mail sits under a conversation under a folder, so a direct-parent listing cannot reach it. | [optional] 
 **sort_by** | [**EmailMessageOrder**](.md)|  | [optional] 
 **search** | **str**| Title substring | [optional] 
 **external_source_folder** | **str**| The provider&#39;s folder key the mail was read from, exactly (&#x60;&#x60;inbox&#x60;&#x60;, &#x60;&#x60;sentitems&#x60;&#x60;). | [optional] 
 **sender** | **str**| Substring of the From header, which is stored verbatim — match on the display name or on the address. | [optional] 
 **sent_after** | **datetime**| Sent at or after this instant (the mail&#39;s own clock) | [optional] 
 **sent_before** | **datetime**| Sent strictly before this instant | [optional] 
 **limit** | **int**| Number of items per page | [optional] [default to 20]
 **offset** | **int**| Number of items to skip | [optional] [default to 0]
 **sort_dir** | [**SortDirection**](.md)| Sort direction (ASC or DESC); overrides the field&#39;s natural default. Every sort field supports both directions. | [optional] 

### Return type

[**PaginatedResponseEmailMessageResponse**](PaginatedResponseEmailMessageResponse.md)

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

# **update_email_message**
> EmailMessageDetailResponse update_email_message(message_id, update_email_message_request)

**Synchronous variant:** `update_email_message_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Update Email Message Handler

Update a message; a changed body is re-embedded. Not exposed on the FE.

A message synced from a mailbox is system-managed and returns 409. The
title, the recipients and the body are what the sender sent, and an agent
citing the message afterwards would be quoting something the source never
said.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.email_message_detail_response import EmailMessageDetailResponse
from ksapi.models.update_email_message_request import UpdateEmailMessageRequest
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
    api_instance = ksapi.EmailMessagesApi(api_client)
    message_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    update_email_message_request = ksapi.UpdateEmailMessageRequest() # UpdateEmailMessageRequest | 

    try:
        # Update Email Message Handler
        api_response = await api_instance.update_email_message(message_id, update_email_message_request)
        print("The response of EmailMessagesApi->update_email_message:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailMessagesApi->update_email_message: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **message_id** | **UUID**|  | 
 **update_email_message_request** | [**UpdateEmailMessageRequest**](UpdateEmailMessageRequest.md)|  | 

### Return type

[**EmailMessageDetailResponse**](EmailMessageDetailResponse.md)

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

