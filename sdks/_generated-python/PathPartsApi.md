# ksapi.PathPartsApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**append_path_part_event**](PathPartsApi.md#append_path_part_event) | **POST** /v1/path-parts/{path_part_id}/events | Append Path Part Event Handler
[**bulk_remove_path_part_tags**](PathPartsApi.md#bulk_remove_path_part_tags) | **DELETE** /v1/path-parts/{path_part_id}/tags | Bulk Remove Path Part Tags Handler
[**check_path_part_access**](PathPartsApi.md#check_path_part_access) | **GET** /v1/path-parts/{path_part_id}/access-check | Check Path Part Access Handler
[**get_path_part**](PathPartsApi.md#get_path_part) | **GET** /v1/path-parts/{path_part_id} | Get Path Part Handler
[**get_path_part_ancestry**](PathPartsApi.md#get_path_part_ancestry) | **GET** /v1/path-parts/{path_part_id}/ancestry | Get Path Part Ancestry Handler
[**get_path_part_subtree_chunks**](PathPartsApi.md#get_path_part_subtree_chunks) | **GET** /v1/path-parts/{path_part_id}/subtree_chunks | Get Path Part Subtree Chunks Handler
[**get_path_part_tags**](PathPartsApi.md#get_path_part_tags) | **GET** /v1/path-parts/{path_part_id}/tags | Get Path Part Tags Handler
[**list_path_part_events**](PathPartsApi.md#list_path_part_events) | **GET** /v1/path-parts/{path_part_id}/events | List Path Part Events Handler
[**list_path_parts**](PathPartsApi.md#list_path_parts) | **GET** /v1/path-parts | List Path Parts Handler
[**set_path_part_tags**](PathPartsApi.md#set_path_part_tags) | **POST** /v1/path-parts/{path_part_id}/tags | Set Path Part Tags Handler


# **append_path_part_event**
> EventResponse append_path_part_event(path_part_id, append_event_request)

Append Path Part Event Handler

Record an event for a subject path_part from the frontend.

Auth: caller must hold ``can_write`` on the subject's
materialized_path (OWNER/ADMIN bypass). Server stamps
``actor_user_id`` from the caller's identity — callers cannot
impersonate other users on the audit trail.

``kind`` is free-form text but reserved server namespaces
(``workflow.``, ``document.``, ``folder.``, ``permission.``,
``connector.``, ``query.``, ``auth.``, ``tenant.``) are rejected at
422 so clients cannot forge server-emitted audit events. Clients
should namespace under ``client.*``. ``payload`` is capped at 64KB
encoded JSON.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.append_event_request import AppendEventRequest
from ksapi.models.event_response import EventResponse
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
    api_instance = ksapi.PathPartsApi(api_client)
    path_part_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    append_event_request = ksapi.AppendEventRequest() # AppendEventRequest | 

    try:
        # Append Path Part Event Handler
        api_response = api_instance.append_path_part_event(path_part_id, append_event_request)
        print("The response of PathPartsApi->append_path_part_event:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PathPartsApi->append_path_part_event: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path_part_id** | **UUID**|  | 
 **append_event_request** | [**AppendEventRequest**](AppendEventRequest.md)|  | 

### Return type

[**EventResponse**](EventResponse.md)

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

# **bulk_remove_path_part_tags**
> PathPartTagsResponse bulk_remove_path_part_tags(path_part_id, bulk_tag_request)

Bulk Remove Path Part Tags Handler

Bulk remove tags from a path part.

Silently ignores tags that aren't attached.
Requires write permission on the target path part.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.bulk_tag_request import BulkTagRequest
from ksapi.models.path_part_tags_response import PathPartTagsResponse
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
    api_instance = ksapi.PathPartsApi(api_client)
    path_part_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    bulk_tag_request = ksapi.BulkTagRequest() # BulkTagRequest | 

    try:
        # Bulk Remove Path Part Tags Handler
        api_response = api_instance.bulk_remove_path_part_tags(path_part_id, bulk_tag_request)
        print("The response of PathPartsApi->bulk_remove_path_part_tags:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PathPartsApi->bulk_remove_path_part_tags: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path_part_id** | **UUID**|  | 
 **bulk_tag_request** | [**BulkTagRequest**](BulkTagRequest.md)|  | 

### Return type

[**PathPartTagsResponse**](PathPartTagsResponse.md)

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

# **check_path_part_access**
> AccessCheckResponse check_path_part_access(path_part_id, user_id, capability=capability)

Check Path Part Access Handler

Explain whether ``user_id`` has ``capability`` on a path part.

ADMIN/OWNER-only introspection: resolves the target user's effective
permissions and reports the decision plus the reason (the matching
grant path, or a role bypass). OWNER/ADMIN targets bypass path checks
by role, so they are always allowed.

404 if the path part does not exist or the target user is not a
member of this tenant.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.access_check_response import AccessCheckResponse
from ksapi.models.permission_capability import PermissionCapability
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
    api_instance = ksapi.PathPartsApi(api_client)
    path_part_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    user_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | The user whose access is being explained
    capability = ksapi.PermissionCapability() # PermissionCapability | Capability to check (READ_ONLY or READ_WRITE) (optional)

    try:
        # Check Path Part Access Handler
        api_response = api_instance.check_path_part_access(path_part_id, user_id, capability=capability)
        print("The response of PathPartsApi->check_path_part_access:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PathPartsApi->check_path_part_access: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path_part_id** | **UUID**|  | 
 **user_id** | **UUID**| The user whose access is being explained | 
 **capability** | [**PermissionCapability**](.md)| Capability to check (READ_ONLY or READ_WRITE) | [optional] 

### Return type

[**AccessCheckResponse**](AccessCheckResponse.md)

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

# **get_path_part**
> PathPartResponse get_path_part(path_part_id)

Get Path Part Handler

Get a path part by its ID.

Returns the path part with its attached tag IDs.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.path_part_response import PathPartResponse
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
    api_instance = ksapi.PathPartsApi(api_client)
    path_part_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Get Path Part Handler
        api_response = api_instance.get_path_part(path_part_id)
        print("The response of PathPartsApi->get_path_part:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PathPartsApi->get_path_part: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path_part_id** | **UUID**|  | 

### Return type

[**PathPartResponse**](PathPartResponse.md)

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

# **get_path_part_ancestry**
> AncestryResponse get_path_part_ancestry(path_part_id)

Get Path Part Ancestry Handler

Get the full ancestry chain for a path part (root to leaf, inclusive).

Returns all ancestors from the root down to and including the target
path part. Authorization is checked on the leaf — if the user can
read the leaf, they can navigate its ancestors.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.ancestry_response import AncestryResponse
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
    api_instance = ksapi.PathPartsApi(api_client)
    path_part_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Get Path Part Ancestry Handler
        api_response = api_instance.get_path_part_ancestry(path_part_id)
        print("The response of PathPartsApi->get_path_part_ancestry:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PathPartsApi->get_path_part_ancestry: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path_part_id** | **UUID**|  | 

### Return type

[**AncestryResponse**](AncestryResponse.md)

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

# **get_path_part_subtree_chunks**
> SubtreeChunksResponse get_path_part_subtree_chunks(path_part_id)

Get Path Part Subtree Chunks Handler

Resolve all descendant chunks for a subtree root.

Returns chunks grouped by identical (path_part_ids, tag_ids) tuples.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.subtree_chunks_response import SubtreeChunksResponse
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
    api_instance = ksapi.PathPartsApi(api_client)
    path_part_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Get Path Part Subtree Chunks Handler
        api_response = api_instance.get_path_part_subtree_chunks(path_part_id)
        print("The response of PathPartsApi->get_path_part_subtree_chunks:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PathPartsApi->get_path_part_subtree_chunks: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path_part_id** | **UUID**|  | 

### Return type

[**SubtreeChunksResponse**](SubtreeChunksResponse.md)

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

# **get_path_part_tags**
> PathPartTagsResponse get_path_part_tags(path_part_id, include_inherited=include_inherited)

Get Path Part Tags Handler

Get tags for a path part.

When include_inherited=False (default), returns only directly-attached tags.
When include_inherited=True, walks the ancestor chain and returns the
deduplicated union of tags from all ancestors (including the path part itself).

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.path_part_tags_response import PathPartTagsResponse
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
    api_instance = ksapi.PathPartsApi(api_client)
    path_part_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    include_inherited = False # bool | Include tags inherited from ancestor path parts (optional) (default to False)

    try:
        # Get Path Part Tags Handler
        api_response = api_instance.get_path_part_tags(path_part_id, include_inherited=include_inherited)
        print("The response of PathPartsApi->get_path_part_tags:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PathPartsApi->get_path_part_tags: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path_part_id** | **UUID**|  | 
 **include_inherited** | **bool**| Include tags inherited from ancestor path parts | [optional] [default to False]

### Return type

[**PathPartTagsResponse**](PathPartTagsResponse.md)

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

# **list_path_part_events**
> PaginatedResponseEventResponse list_path_part_events(path_part_id, kind=kind, since=since, until=until, recursive=recursive, limit=limit, offset=offset)

List Path Part Events Handler

List events anchored to a specific path_part subject.

Subject permission is enforced via the existing
``PathPermissionService`` — caller must have ``can_read`` on the
subject's materialized_path (OWNER/ADMIN bypass). Events are
ordered newest-first by ``ts`` and paginated.

When ``recursive=True``, events on any descendant of the subject
are included — useful for "all events under this folder" or "all
events under this workflow definition".

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.paginated_response_event_response import PaginatedResponseEventResponse
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
    api_instance = ksapi.PathPartsApi(api_client)
    path_part_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    kind = 'kind_example' # str | Filter to a single event kind (optional)
    since = '2013-10-20T19:20:30+01:00' # datetime | Only events at or after this timestamp (optional)
    until = '2013-10-20T19:20:30+01:00' # datetime | Only events strictly before this timestamp (optional)
    recursive = False # bool | Include events from descendant path_parts as well as the subject itself (optional) (default to False)
    limit = 20 # int | Number of items per page (optional) (default to 20)
    offset = 0 # int | Number of items to skip (optional) (default to 0)

    try:
        # List Path Part Events Handler
        api_response = api_instance.list_path_part_events(path_part_id, kind=kind, since=since, until=until, recursive=recursive, limit=limit, offset=offset)
        print("The response of PathPartsApi->list_path_part_events:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PathPartsApi->list_path_part_events: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path_part_id** | **UUID**|  | 
 **kind** | **str**| Filter to a single event kind | [optional] 
 **since** | **datetime**| Only events at or after this timestamp | [optional] 
 **until** | **datetime**| Only events strictly before this timestamp | [optional] 
 **recursive** | **bool**| Include events from descendant path_parts as well as the subject itself | [optional] [default to False]
 **limit** | **int**| Number of items per page | [optional] [default to 20]
 **offset** | **int**| Number of items to skip | [optional] [default to 0]

### Return type

[**PaginatedResponseEventResponse**](PaginatedResponseEventResponse.md)

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

# **list_path_parts**
> PaginatedResponsePathPartResponse list_path_parts(parent_path_id=parent_path_id, max_depth=max_depth, sort_order=sort_order, limit=limit, offset=offset)

List Path Parts Handler

List path parts under a parent with traversal.

This is a generic endpoint for traversing the path hierarchy. It returns
the navigable, container-like nodes of the tree: FOLDER,
WORKFLOW_DEFINITION, and WORKFLOW_RUN path parts.

- If parent_path_id is not provided, lists contents of the root folder.
- max_depth controls how deep to traverse (1 = direct children only).
- sort_order controls the ordering: LOGICAL (linked-list), NAME, UPDATED_AT, CREATED_AT.

For listing folder contents that includes documents with enriched metadata,
use GET /folders/{folder_id}/contents instead.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.paginated_response_path_part_response import PaginatedResponsePathPartResponse
from ksapi.models.path_order import PathOrder
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
    api_instance = ksapi.PathPartsApi(api_client)
    parent_path_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Parent PathPart ID (defaults to root) (optional)
    max_depth = 1 # int | Maximum depth to traverse (1 = direct children, default: 1) (optional) (default to 1)
    sort_order = ksapi.PathOrder() # PathOrder | Sort order for results (default: LOGICAL) (optional)
    limit = 20 # int | Number of items per page (optional) (default to 20)
    offset = 0 # int | Number of items to skip (optional) (default to 0)

    try:
        # List Path Parts Handler
        api_response = api_instance.list_path_parts(parent_path_id=parent_path_id, max_depth=max_depth, sort_order=sort_order, limit=limit, offset=offset)
        print("The response of PathPartsApi->list_path_parts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PathPartsApi->list_path_parts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent_path_id** | **UUID**| Parent PathPart ID (defaults to root) | [optional] 
 **max_depth** | **int**| Maximum depth to traverse (1 &#x3D; direct children, default: 1) | [optional] [default to 1]
 **sort_order** | [**PathOrder**](.md)| Sort order for results (default: LOGICAL) | [optional] 
 **limit** | **int**| Number of items per page | [optional] [default to 20]
 **offset** | **int**| Number of items to skip | [optional] [default to 0]

### Return type

[**PaginatedResponsePathPartResponse**](PaginatedResponsePathPartResponse.md)

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

# **set_path_part_tags**
> PathPartTagsResponse set_path_part_tags(path_part_id, bulk_tag_request)

Set Path Part Tags Handler

Set tags on a path part, replacing any existing tags.

The provided tag_ids become the complete tag set for the path part.
Tags not in the list are removed; missing tags are added.
An empty list clears all tags.
Returns 400 if any tag_id doesn't exist (FK violation).
Requires write permission on the target path part.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.bulk_tag_request import BulkTagRequest
from ksapi.models.path_part_tags_response import PathPartTagsResponse
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
    api_instance = ksapi.PathPartsApi(api_client)
    path_part_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    bulk_tag_request = ksapi.BulkTagRequest() # BulkTagRequest | 

    try:
        # Set Path Part Tags Handler
        api_response = api_instance.set_path_part_tags(path_part_id, bulk_tag_request)
        print("The response of PathPartsApi->set_path_part_tags:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PathPartsApi->set_path_part_tags: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path_part_id** | **UUID**|  | 
 **bulk_tag_request** | [**BulkTagRequest**](BulkTagRequest.md)|  | 

### Return type

[**PathPartTagsResponse**](PathPartTagsResponse.md)

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

