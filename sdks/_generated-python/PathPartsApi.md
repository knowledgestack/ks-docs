# ksapi.PathPartsApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**append_path_part_event**](PathPartsApi.md#append_path_part_event) | **POST** /v1/path-parts/{path_part_id}/events | Append Path Part Event Handler
[**bulk_remove_path_part_tags**](PathPartsApi.md#bulk_remove_path_part_tags) | **DELETE** /v1/path-parts/{path_part_id}/tags | Bulk Remove Path Part Tags Handler
[**get_path_part**](PathPartsApi.md#get_path_part) | **GET** /v1/path-parts/{path_part_id} | Get Path Part Handler
[**get_path_part_ancestry**](PathPartsApi.md#get_path_part_ancestry) | **GET** /v1/path-parts/{path_part_id}/ancestry | Get Path Part Ancestry Handler
[**get_path_part_subtree_chunks**](PathPartsApi.md#get_path_part_subtree_chunks) | **GET** /v1/path-parts/{path_part_id}/subtree_chunks | Get Path Part Subtree Chunks Handler
[**get_path_part_tags**](PathPartsApi.md#get_path_part_tags) | **GET** /v1/path-parts/{path_part_id}/tags | Get Path Part Tags Handler
[**list_path_part_events**](PathPartsApi.md#list_path_part_events) | **GET** /v1/path-parts/{path_part_id}/events | List Path Part Events Handler
[**list_path_parts**](PathPartsApi.md#list_path_parts) | **GET** /v1/path-parts | List Path Parts Handler
[**set_path_part_tags**](PathPartsApi.md#set_path_part_tags) | **POST** /v1/path-parts/{path_part_id}/tags | Set Path Part Tags Handler


# **append_path_part_event**
> EventResponse append_path_part_event(path_part_id, append_event_request, authorization=authorization, ks_uat=ks_uat)

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


# Enter a context with an instance of the API client
with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.PathPartsApi(api_client)
    path_part_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    append_event_request = ksapi.AppendEventRequest() # AppendEventRequest | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Append Path Part Event Handler
        api_response = api_instance.append_path_part_event(path_part_id, append_event_request, authorization=authorization, ks_uat=ks_uat)
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
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**EventResponse**](EventResponse.md)

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

# **bulk_remove_path_part_tags**
> PathPartTagsResponse bulk_remove_path_part_tags(path_part_id, bulk_tag_request, authorization=authorization, ks_uat=ks_uat)

Bulk Remove Path Part Tags Handler

Bulk remove tags from a path part.

Silently ignores tags that aren't attached.
Requires write permission on the target path part.

### Example


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


# Enter a context with an instance of the API client
with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.PathPartsApi(api_client)
    path_part_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    bulk_tag_request = ksapi.BulkTagRequest() # BulkTagRequest | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Bulk Remove Path Part Tags Handler
        api_response = api_instance.bulk_remove_path_part_tags(path_part_id, bulk_tag_request, authorization=authorization, ks_uat=ks_uat)
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
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**PathPartTagsResponse**](PathPartTagsResponse.md)

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

# **get_path_part**
> PathPartResponse get_path_part(path_part_id, authorization=authorization, ks_uat=ks_uat)

Get Path Part Handler

Get a path part by its ID.

Returns the path part with its attached tag IDs.

### Example


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


# Enter a context with an instance of the API client
with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.PathPartsApi(api_client)
    path_part_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Get Path Part Handler
        api_response = api_instance.get_path_part(path_part_id, authorization=authorization, ks_uat=ks_uat)
        print("The response of PathPartsApi->get_path_part:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PathPartsApi->get_path_part: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path_part_id** | **UUID**|  | 
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**PathPartResponse**](PathPartResponse.md)

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

# **get_path_part_ancestry**
> AncestryResponse get_path_part_ancestry(path_part_id, authorization=authorization, ks_uat=ks_uat)

Get Path Part Ancestry Handler

Get the full ancestry chain for a path part (root to leaf, inclusive).

Returns all ancestors from the root down to and including the target
path part. Authorization is checked on the leaf — if the user can
read the leaf, they can navigate its ancestors.

### Example


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


# Enter a context with an instance of the API client
with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.PathPartsApi(api_client)
    path_part_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Get Path Part Ancestry Handler
        api_response = api_instance.get_path_part_ancestry(path_part_id, authorization=authorization, ks_uat=ks_uat)
        print("The response of PathPartsApi->get_path_part_ancestry:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PathPartsApi->get_path_part_ancestry: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path_part_id** | **UUID**|  | 
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**AncestryResponse**](AncestryResponse.md)

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

# **get_path_part_subtree_chunks**
> SubtreeChunksResponse get_path_part_subtree_chunks(path_part_id, authorization=authorization, ks_uat=ks_uat)

Get Path Part Subtree Chunks Handler

Resolve all descendant chunks for a subtree root.

Returns chunks grouped by identical (path_part_ids, tag_ids) tuples.

### Example


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


# Enter a context with an instance of the API client
with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.PathPartsApi(api_client)
    path_part_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Get Path Part Subtree Chunks Handler
        api_response = api_instance.get_path_part_subtree_chunks(path_part_id, authorization=authorization, ks_uat=ks_uat)
        print("The response of PathPartsApi->get_path_part_subtree_chunks:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PathPartsApi->get_path_part_subtree_chunks: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path_part_id** | **UUID**|  | 
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**SubtreeChunksResponse**](SubtreeChunksResponse.md)

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

# **get_path_part_tags**
> PathPartTagsResponse get_path_part_tags(path_part_id, include_inherited=include_inherited, authorization=authorization, ks_uat=ks_uat)

Get Path Part Tags Handler

Get tags for a path part.

When include_inherited=False (default), returns only directly-attached tags.
When include_inherited=True, walks the ancestor chain and returns the
deduplicated union of tags from all ancestors (including the path part itself).

### Example


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


# Enter a context with an instance of the API client
with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.PathPartsApi(api_client)
    path_part_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    include_inherited = False # bool | Include tags inherited from ancestor path parts (optional) (default to False)
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Get Path Part Tags Handler
        api_response = api_instance.get_path_part_tags(path_part_id, include_inherited=include_inherited, authorization=authorization, ks_uat=ks_uat)
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
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**PathPartTagsResponse**](PathPartTagsResponse.md)

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

# **list_path_part_events**
> PaginatedResponseEventResponse list_path_part_events(path_part_id, kind=kind, since=since, until=until, recursive=recursive, limit=limit, offset=offset, authorization=authorization, ks_uat=ks_uat)

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
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # List Path Part Events Handler
        api_response = api_instance.list_path_part_events(path_part_id, kind=kind, since=since, until=until, recursive=recursive, limit=limit, offset=offset, authorization=authorization, ks_uat=ks_uat)
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
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**PaginatedResponseEventResponse**](PaginatedResponseEventResponse.md)

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

# **list_path_parts**
> PaginatedResponsePathPartResponse list_path_parts(parent_path_id=parent_path_id, max_depth=max_depth, sort_order=sort_order, limit=limit, offset=offset, authorization=authorization, ks_uat=ks_uat)

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


# Enter a context with an instance of the API client
with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.PathPartsApi(api_client)
    parent_path_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Parent PathPart ID (defaults to root) (optional)
    max_depth = 1 # int | Maximum depth to traverse (1 = direct children, default: 1) (optional) (default to 1)
    sort_order = ksapi.PathOrder() # PathOrder | Sort order for results (default: LOGICAL) (optional)
    limit = 20 # int | Number of items per page (optional) (default to 20)
    offset = 0 # int | Number of items to skip (optional) (default to 0)
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # List Path Parts Handler
        api_response = api_instance.list_path_parts(parent_path_id=parent_path_id, max_depth=max_depth, sort_order=sort_order, limit=limit, offset=offset, authorization=authorization, ks_uat=ks_uat)
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
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**PaginatedResponsePathPartResponse**](PaginatedResponsePathPartResponse.md)

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

# **set_path_part_tags**
> PathPartTagsResponse set_path_part_tags(path_part_id, bulk_tag_request, authorization=authorization, ks_uat=ks_uat)

Set Path Part Tags Handler

Set tags on a path part, replacing any existing tags.

The provided tag_ids become the complete tag set for the path part.
Tags not in the list are removed; missing tags are added.
An empty list clears all tags.
Returns 400 if any tag_id doesn't exist (FK violation).
Requires write permission on the target path part.

### Example


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


# Enter a context with an instance of the API client
with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.PathPartsApi(api_client)
    path_part_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    bulk_tag_request = ksapi.BulkTagRequest() # BulkTagRequest | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Set Path Part Tags Handler
        api_response = api_instance.set_path_part_tags(path_part_id, bulk_tag_request, authorization=authorization, ks_uat=ks_uat)
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
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**PathPartTagsResponse**](PathPartTagsResponse.md)

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

