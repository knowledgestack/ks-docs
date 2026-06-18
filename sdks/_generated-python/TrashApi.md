# ksapi.TrashApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list_trash**](TrashApi.md#list_trash) | **GET** /v1/trash | List Trash Handler
[**permanently_delete_trash_item**](TrashApi.md#permanently_delete_trash_item) | **DELETE** /v1/trash/{path_part_id} | Permanently Delete Trash Item Handler
[**restore_trash_item**](TrashApi.md#restore_trash_item) | **POST** /v1/trash/{path_part_id}/restore | Restore Trash Item Handler


# **list_trash**
> PaginatedResponseTrashItemResponse list_trash(sort_order=sort_order, sort_dir=sort_dir, deleted_by=deleted_by, part_type=part_type, owner_id=owner_id, limit=limit, offset=offset, created_after=created_after, created_before=created_before, updated_after=updated_after, updated_before=updated_before)

List Trash Handler

List top-level trash items visible to the caller.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.paginated_response_trash_item_response import PaginatedResponseTrashItemResponse
from ksapi.models.part_type import PartType
from ksapi.models.path_order import PathOrder
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
    api_instance = ksapi.TrashApi(api_client)
    sort_order = ksapi.PathOrder() # PathOrder | Sort order (default: LOGICAL = deletion recency) (optional)
    sort_dir = ksapi.SortDirection() # SortDirection | Sort direction; overrides the column's natural default (optional)
    deleted_by = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Filter to items deleted by this user (optional)
    part_type = [ksapi.PartType()] # List[PartType] | Filter to these path-part types (folders, documents, ...) (optional)
    owner_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Filter to items owned (created) by this user (optional)
    limit = 20 # int | Number of items per page (optional) (default to 20)
    offset = 0 # int | Number of items to skip (optional) (default to 0)
    created_after = '2013-10-20T19:20:30+01:00' # datetime | Only items created at or after this timestamp (inclusive) (optional)
    created_before = '2013-10-20T19:20:30+01:00' # datetime | Only items created strictly before this timestamp (optional)
    updated_after = '2013-10-20T19:20:30+01:00' # datetime | Only items updated at or after this timestamp (inclusive) (optional)
    updated_before = '2013-10-20T19:20:30+01:00' # datetime | Only items updated strictly before this timestamp (optional)

    try:
        # List Trash Handler
        api_response = api_instance.list_trash(sort_order=sort_order, sort_dir=sort_dir, deleted_by=deleted_by, part_type=part_type, owner_id=owner_id, limit=limit, offset=offset, created_after=created_after, created_before=created_before, updated_after=updated_after, updated_before=updated_before)
        print("The response of TrashApi->list_trash:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TrashApi->list_trash: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort_order** | [**PathOrder**](.md)| Sort order (default: LOGICAL &#x3D; deletion recency) | [optional] 
 **sort_dir** | [**SortDirection**](.md)| Sort direction; overrides the column&#39;s natural default | [optional] 
 **deleted_by** | **UUID**| Filter to items deleted by this user | [optional] 
 **part_type** | [**List[PartType]**](PartType.md)| Filter to these path-part types (folders, documents, ...) | [optional] 
 **owner_id** | **UUID**| Filter to items owned (created) by this user | [optional] 
 **limit** | **int**| Number of items per page | [optional] [default to 20]
 **offset** | **int**| Number of items to skip | [optional] [default to 0]
 **created_after** | **datetime**| Only items created at or after this timestamp (inclusive) | [optional] 
 **created_before** | **datetime**| Only items created strictly before this timestamp | [optional] 
 **updated_after** | **datetime**| Only items updated at or after this timestamp (inclusive) | [optional] 
 **updated_before** | **datetime**| Only items updated strictly before this timestamp | [optional] 

### Return type

[**PaginatedResponseTrashItemResponse**](PaginatedResponseTrashItemResponse.md)

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

# **permanently_delete_trash_item**
> permanently_delete_trash_item(path_part_id)

Permanently Delete Trash Item Handler

Permanently delete a top-level trash item.

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
    api_instance = ksapi.TrashApi(api_client)
    path_part_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Trashed PathPart ID

    try:
        # Permanently Delete Trash Item Handler
        api_instance.permanently_delete_trash_item(path_part_id)
    except Exception as e:
        print("Exception when calling TrashApi->permanently_delete_trash_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path_part_id** | **UUID**| Trashed PathPart ID | 

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

# **restore_trash_item**
> restore_trash_item(path_part_id)

Restore Trash Item Handler

Restore a top-level trash item.

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
    api_instance = ksapi.TrashApi(api_client)
    path_part_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Trashed PathPart ID

    try:
        # Restore Trash Item Handler
        api_instance.restore_trash_item(path_part_id)
    except Exception as e:
        print("Exception when calling TrashApi->restore_trash_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path_part_id** | **UUID**| Trashed PathPart ID | 

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

