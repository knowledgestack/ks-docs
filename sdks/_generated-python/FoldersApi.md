# ksapi.FoldersApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_folder**](FoldersApi.md#create_folder) | **POST** /v1/folders | Create Folder Handler
[**delete_folder**](FoldersApi.md#delete_folder) | **DELETE** /v1/folders/{folder_id} | Delete Folder Handler
[**folder_action**](FoldersApi.md#folder_action) | **POST** /v1/folders/{folder_id} | Folder Action Handler
[**get_folder**](FoldersApi.md#get_folder) | **GET** /v1/folders/{folder_id} | Get Folder Handler
[**list_folder_contents**](FoldersApi.md#list_folder_contents) | **GET** /v1/folders/{folder_id}/contents | List Folder Contents Handler
[**list_folders**](FoldersApi.md#list_folders) | **GET** /v1/folders | List Folders Handler
[**search_items**](FoldersApi.md#search_items) | **GET** /v1/folders/search | Search Items Handler
[**update_folder**](FoldersApi.md#update_folder) | **PATCH** /v1/folders/{folder_id} | Update Folder Handler


# **create_folder**
> FolderResponse create_folder(create_folder_request)

Create Folder Handler

Create a new folder.

The folder is created as a child of the specified parent folder.
It is automatically added to the end of the parent's children list.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.create_folder_request import CreateFolderRequest
from ksapi.models.folder_response import FolderResponse
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
    api_instance = ksapi.FoldersApi(api_client)
    create_folder_request = ksapi.CreateFolderRequest() # CreateFolderRequest | 

    try:
        # Create Folder Handler
        api_response = api_instance.create_folder(create_folder_request)
        print("The response of FoldersApi->create_folder:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FoldersApi->create_folder: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_folder_request** | [**CreateFolderRequest**](CreateFolderRequest.md)|  | 

### Return type

[**FolderResponse**](FolderResponse.md)

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

# **delete_folder**
> delete_folder(folder_id)

Delete Folder Handler

Move a folder and all its contents to trash.

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
    api_instance = ksapi.FoldersApi(api_client)
    folder_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Delete Folder Handler
        api_instance.delete_folder(folder_id)
    except Exception as e:
        print("Exception when calling FoldersApi->delete_folder: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folder_id** | **UUID**|  | 

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

# **folder_action**
> FolderActionResponse folder_action(folder_id, action)

Folder Action Handler

Perform an action on a folder.

Currently supports:
- `reembed`: Re-embed all documents in the folder and its subfolders.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.folder_action import FolderAction
from ksapi.models.folder_action_response import FolderActionResponse
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
    api_instance = ksapi.FoldersApi(api_client)
    folder_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    action = ksapi.FolderAction() # FolderAction | Action to perform

    try:
        # Folder Action Handler
        api_response = api_instance.folder_action(folder_id, action)
        print("The response of FoldersApi->folder_action:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FoldersApi->folder_action: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folder_id** | **UUID**|  | 
 **action** | [**FolderAction**](.md)| Action to perform | 

### Return type

[**FolderActionResponse**](FolderActionResponse.md)

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

# **get_folder**
> FolderResponse get_folder(folder_id, with_tags=with_tags)

Get Folder Handler

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.folder_response import FolderResponse
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
    api_instance = ksapi.FoldersApi(api_client)
    folder_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    with_tags = False # bool | Include tags in the response (default: false) (optional) (default to False)

    try:
        # Get Folder Handler
        api_response = api_instance.get_folder(folder_id, with_tags=with_tags)
        print("The response of FoldersApi->get_folder:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FoldersApi->get_folder: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folder_id** | **UUID**|  | 
 **with_tags** | **bool**| Include tags in the response (default: false) | [optional] [default to False]

### Return type

[**FolderResponse**](FolderResponse.md)

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

# **list_folder_contents**
> PaginatedResponseAnnotatedUnionFolderResponseDocumentResponseWorkflowDefinitionResponseWorkflowRunResponseDataSourceResponseDataSourceTableResponseApiConnectionResponseDiscriminator list_folder_contents(folder_id, max_depth=max_depth, sort_order=sort_order, with_tags=with_tags, limit=limit, offset=offset)

List Folder Contents Handler

List all contents (folders and documents) under a folder.

Returns a discriminated union of FolderResponse and DocumentResponse items,
distinguished by the `part_type` field ("FOLDER" or "DOCUMENT").

When with_tags=true, each item includes a tags field with the full tag objects.

This is the preferred way to list folder contents when you need document metadata.
For generic path traversal of folders only, use GET /path-parts.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.paginated_response_annotated_union_folder_response_document_response_workflow_definition_response_workflow_run_response_data_source_response_data_source_table_response_api_connection_response_discriminator import PaginatedResponseAnnotatedUnionFolderResponseDocumentResponseWorkflowDefinitionResponseWorkflowRunResponseDataSourceResponseDataSourceTableResponseApiConnectionResponseDiscriminator
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
    api_instance = ksapi.FoldersApi(api_client)
    folder_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    max_depth = 1 # int | Maximum depth to traverse (1=direct children, default: 1) (optional) (default to 1)
    sort_order = ksapi.PathOrder() # PathOrder | Sort order for results (default: LOGICAL) (optional)
    with_tags = False # bool | Include tag IDs for each item (default: false) (optional) (default to False)
    limit = 20 # int | Number of items per page (optional) (default to 20)
    offset = 0 # int | Number of items to skip (optional) (default to 0)

    try:
        # List Folder Contents Handler
        api_response = api_instance.list_folder_contents(folder_id, max_depth=max_depth, sort_order=sort_order, with_tags=with_tags, limit=limit, offset=offset)
        print("The response of FoldersApi->list_folder_contents:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FoldersApi->list_folder_contents: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folder_id** | **UUID**|  | 
 **max_depth** | **int**| Maximum depth to traverse (1&#x3D;direct children, default: 1) | [optional] [default to 1]
 **sort_order** | [**PathOrder**](.md)| Sort order for results (default: LOGICAL) | [optional] 
 **with_tags** | **bool**| Include tag IDs for each item (default: false) | [optional] [default to False]
 **limit** | **int**| Number of items per page | [optional] [default to 20]
 **offset** | **int**| Number of items to skip | [optional] [default to 0]

### Return type

[**PaginatedResponseAnnotatedUnionFolderResponseDocumentResponseWorkflowDefinitionResponseWorkflowRunResponseDataSourceResponseDataSourceTableResponseApiConnectionResponseDiscriminator**](PaginatedResponseAnnotatedUnionFolderResponseDocumentResponseWorkflowDefinitionResponseWorkflowRunResponseDataSourceResponseDataSourceTableResponseApiConnectionResponseDiscriminator.md)

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

# **list_folders**
> PaginatedResponseFolderResponse list_folders(parent_path_part_id=parent_path_part_id, sort_order=sort_order, sort_dir=sort_dir, owner_id=owner_id, with_tags=with_tags, limit=limit, offset=offset, created_after=created_after, created_before=created_before, updated_after=updated_after, updated_before=updated_before)

List Folders Handler

List child folders of a parent folder.

Returns only direct child folders (depth=1) of the specified parent.
If parent_path_part_id is not provided, lists top-level folders.

At root level, the /users folder is hidden and replaced with the current
user's personal folder (/users/{user_id}) displayed as "Private".

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.paginated_response_folder_response import PaginatedResponseFolderResponse
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
    api_instance = ksapi.FoldersApi(api_client)
    parent_path_part_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Parent PathPart ID (defaults to root) (optional)
    sort_order = ksapi.PathOrder() # PathOrder | Sort order for results (default: LOGICAL) (optional)
    sort_dir = ksapi.SortDirection() # SortDirection | Sort direction; overrides the column's natural default (optional)
    owner_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Filter to folders owned by this user (optional)
    with_tags = False # bool | Include tags in the response (default: false) (optional) (default to False)
    limit = 20 # int | Number of items per page (optional) (default to 20)
    offset = 0 # int | Number of items to skip (optional) (default to 0)
    created_after = '2013-10-20T19:20:30+01:00' # datetime | Only items created at or after this timestamp (inclusive) (optional)
    created_before = '2013-10-20T19:20:30+01:00' # datetime | Only items created strictly before this timestamp (optional)
    updated_after = '2013-10-20T19:20:30+01:00' # datetime | Only items updated at or after this timestamp (inclusive) (optional)
    updated_before = '2013-10-20T19:20:30+01:00' # datetime | Only items updated strictly before this timestamp (optional)

    try:
        # List Folders Handler
        api_response = api_instance.list_folders(parent_path_part_id=parent_path_part_id, sort_order=sort_order, sort_dir=sort_dir, owner_id=owner_id, with_tags=with_tags, limit=limit, offset=offset, created_after=created_after, created_before=created_before, updated_after=updated_after, updated_before=updated_before)
        print("The response of FoldersApi->list_folders:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FoldersApi->list_folders: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent_path_part_id** | **UUID**| Parent PathPart ID (defaults to root) | [optional] 
 **sort_order** | [**PathOrder**](.md)| Sort order for results (default: LOGICAL) | [optional] 
 **sort_dir** | [**SortDirection**](.md)| Sort direction; overrides the column&#39;s natural default | [optional] 
 **owner_id** | **UUID**| Filter to folders owned by this user | [optional] 
 **with_tags** | **bool**| Include tags in the response (default: false) | [optional] [default to False]
 **limit** | **int**| Number of items per page | [optional] [default to 20]
 **offset** | **int**| Number of items to skip | [optional] [default to 0]
 **created_after** | **datetime**| Only items created at or after this timestamp (inclusive) | [optional] 
 **created_before** | **datetime**| Only items created strictly before this timestamp | [optional] 
 **updated_after** | **datetime**| Only items updated at or after this timestamp (inclusive) | [optional] 
 **updated_before** | **datetime**| Only items updated strictly before this timestamp | [optional] 

### Return type

[**PaginatedResponseFolderResponse**](PaginatedResponseFolderResponse.md)

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

# **search_items**
> PaginatedResponseAnnotatedUnionFolderResponseDocumentResponseWorkflowDefinitionResponseWorkflowRunResponseDataSourceResponseDataSourceTableResponseApiConnectionResponseDiscriminator search_items(name_like, sort_order=sort_order, part_type=part_type, with_tags=with_tags, parent_path_part_id=parent_path_part_id, limit=limit, offset=offset)

Search Items Handler

Search for folders, documents, and data-source connectors by name.

Performs a case-insensitive partial name match using trigram indexing.
Results are filtered by the current user's path permissions.

When parent_path_part_id is provided, only items under that folder are
searched. Otherwise, all accessible items across the tenant are searched.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.paginated_response_annotated_union_folder_response_document_response_workflow_definition_response_workflow_run_response_data_source_response_data_source_table_response_api_connection_response_discriminator import PaginatedResponseAnnotatedUnionFolderResponseDocumentResponseWorkflowDefinitionResponseWorkflowRunResponseDataSourceResponseDataSourceTableResponseApiConnectionResponseDiscriminator
from ksapi.models.search_sort_order import SearchSortOrder
from ksapi.models.searchable_part_type import SearchablePartType
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
    api_instance = ksapi.FoldersApi(api_client)
    name_like = 'name_like_example' # str | Case-insensitive partial name search
    sort_order = ksapi.SearchSortOrder() # SearchSortOrder | Sort order for results (default: NAME) (optional)
    part_type = ksapi.SearchablePartType() # SearchablePartType | Filter by item type (default: both folders and documents) (optional)
    with_tags = False # bool | Include tags in the response (default: false) (optional) (default to False)
    parent_path_part_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Scope search to descendants of this folder's path part (optional)
    limit = 20 # int | Number of items per page (optional) (default to 20)
    offset = 0 # int | Number of items to skip (optional) (default to 0)

    try:
        # Search Items Handler
        api_response = api_instance.search_items(name_like, sort_order=sort_order, part_type=part_type, with_tags=with_tags, parent_path_part_id=parent_path_part_id, limit=limit, offset=offset)
        print("The response of FoldersApi->search_items:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FoldersApi->search_items: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name_like** | **str**| Case-insensitive partial name search | 
 **sort_order** | [**SearchSortOrder**](.md)| Sort order for results (default: NAME) | [optional] 
 **part_type** | [**SearchablePartType**](.md)| Filter by item type (default: both folders and documents) | [optional] 
 **with_tags** | **bool**| Include tags in the response (default: false) | [optional] [default to False]
 **parent_path_part_id** | **UUID**| Scope search to descendants of this folder&#39;s path part | [optional] 
 **limit** | **int**| Number of items per page | [optional] [default to 20]
 **offset** | **int**| Number of items to skip | [optional] [default to 0]

### Return type

[**PaginatedResponseAnnotatedUnionFolderResponseDocumentResponseWorkflowDefinitionResponseWorkflowRunResponseDataSourceResponseDataSourceTableResponseApiConnectionResponseDiscriminator**](PaginatedResponseAnnotatedUnionFolderResponseDocumentResponseWorkflowDefinitionResponseWorkflowRunResponseDataSourceResponseDataSourceTableResponseApiConnectionResponseDiscriminator.md)

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

# **update_folder**
> FolderResponse update_folder(folder_id, update_folder_request)

Update Folder Handler

Update a folder (rename, move, and/or toggle Qdrant exclusion).

To rename: provide `name` field.
To move: provide `parent_path_part_id` field.
To toggle Qdrant exclusion for this folder and its descendants: provide
`exclude_from_qdrant` field.
Any combination can be sent in a single request.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.folder_response import FolderResponse
from ksapi.models.update_folder_request import UpdateFolderRequest
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
    api_instance = ksapi.FoldersApi(api_client)
    folder_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    update_folder_request = ksapi.UpdateFolderRequest() # UpdateFolderRequest | 

    try:
        # Update Folder Handler
        api_response = api_instance.update_folder(folder_id, update_folder_request)
        print("The response of FoldersApi->update_folder:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FoldersApi->update_folder: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folder_id** | **UUID**|  | 
 **update_folder_request** | [**UpdateFolderRequest**](UpdateFolderRequest.md)|  | 

### Return type

[**FolderResponse**](FolderResponse.md)

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

