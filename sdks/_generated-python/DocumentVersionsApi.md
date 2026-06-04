# ksapi.DocumentVersionsApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clear_document_version_contents**](DocumentVersionsApi.md#clear_document_version_contents) | **DELETE** /v1/document_versions/{version_id}/contents | Clear Document Version Contents Handler
[**create_document_version**](DocumentVersionsApi.md#create_document_version) | **POST** /v1/documents/{document_id}/versions | Create Document Version Handler
[**delete_document_version**](DocumentVersionsApi.md#delete_document_version) | **DELETE** /v1/document_versions/{version_id} | Delete Document Version Handler
[**document_version_action**](DocumentVersionsApi.md#document_version_action) | **POST** /v1/document_versions/{version_id} | Document Version Action Handler
[**get_document_version**](DocumentVersionsApi.md#get_document_version) | **GET** /v1/document_versions/{version_id} | Get Document Version Handler
[**get_document_version_contents**](DocumentVersionsApi.md#get_document_version_contents) | **GET** /v1/document_versions/{version_id}/contents | Get Document Version Contents Handler
[**list_document_versions**](DocumentVersionsApi.md#list_document_versions) | **GET** /v1/document_versions | List Document Versions Handler
[**update_document_version_metadata**](DocumentVersionsApi.md#update_document_version_metadata) | **PATCH** /v1/document_versions/{version_id}/metadata | Update Document Version Metadata Handler


# **clear_document_version_contents**
> ClearVersionContentsResponse clear_document_version_contents(version_id, authorization=authorization, ks_uat=ks_uat)

Clear Document Version Contents Handler

Delete all sections and chunks under a document version.

Removes all content (sections and chunks) from the version while
keeping the version itself intact. Used by the ingestion pipeline
for idempotent re-processing.

### Example


```python
import ksapi
from ksapi.models.clear_version_contents_response import ClearVersionContentsResponse
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
    api_instance = ksapi.DocumentVersionsApi(api_client)
    version_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | DocumentVersion ID
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Clear Document Version Contents Handler
        api_response = api_instance.clear_document_version_contents(version_id, authorization=authorization, ks_uat=ks_uat)
        print("The response of DocumentVersionsApi->clear_document_version_contents:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentVersionsApi->clear_document_version_contents: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version_id** | **UUID**| DocumentVersion ID | 
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**ClearVersionContentsResponse**](ClearVersionContentsResponse.md)

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

# **create_document_version**
> DocumentVersionResponse create_document_version(document_id, authorization=authorization, ks_uat=ks_uat)

Create Document Version Handler

Create a new version for a document.

The version number is automatically incremented from the highest existing version.

### Example


```python
import ksapi
from ksapi.models.document_version_response import DocumentVersionResponse
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
    api_instance = ksapi.DocumentVersionsApi(api_client)
    document_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Document ID
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Create Document Version Handler
        api_response = api_instance.create_document_version(document_id, authorization=authorization, ks_uat=ks_uat)
        print("The response of DocumentVersionsApi->create_document_version:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentVersionsApi->create_document_version: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **document_id** | **UUID**| Document ID | 
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**DocumentVersionResponse**](DocumentVersionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_document_version**
> delete_document_version(version_id, authorization=authorization, ks_uat=ks_uat)

Delete Document Version Handler

Delete a document version by its ID.

Cannot delete the active version of a document.

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
    api_instance = ksapi.DocumentVersionsApi(api_client)
    version_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | DocumentVersion ID
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Delete Document Version Handler
        api_instance.delete_document_version(version_id, authorization=authorization, ks_uat=ks_uat)
    except Exception as e:
        print("Exception when calling DocumentVersionsApi->delete_document_version: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version_id** | **UUID**| DocumentVersion ID | 
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

# **document_version_action**
> DocumentVersionActionResponse document_version_action(version_id, action, authorization=authorization, ks_uat=ks_uat)

Document Version Action Handler

Perform an action on a document version.

Supported actions:
- `reembed`: Re-embed all chunks for this version into Qdrant.

### Example


```python
import ksapi
from ksapi.models.document_version_action import DocumentVersionAction
from ksapi.models.document_version_action_response import DocumentVersionActionResponse
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
    api_instance = ksapi.DocumentVersionsApi(api_client)
    version_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | DocumentVersion ID
    action = ksapi.DocumentVersionAction() # DocumentVersionAction | Action to perform
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Document Version Action Handler
        api_response = api_instance.document_version_action(version_id, action, authorization=authorization, ks_uat=ks_uat)
        print("The response of DocumentVersionsApi->document_version_action:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentVersionsApi->document_version_action: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version_id** | **UUID**| DocumentVersion ID | 
 **action** | [**DocumentVersionAction**](.md)| Action to perform | 
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**DocumentVersionActionResponse**](DocumentVersionActionResponse.md)

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

# **get_document_version**
> DocumentVersionResponse get_document_version(version_id, include_page_screenshots=include_page_screenshots, authorization=authorization, ks_uat=ks_uat)

Get Document Version Handler

### Example


```python
import ksapi
from ksapi.models.document_version_response import DocumentVersionResponse
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
    api_instance = ksapi.DocumentVersionsApi(api_client)
    version_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | DocumentVersion ID
    include_page_screenshots = False # bool | When true, populate page_screenshot_urls with presigned URLs for every per-page WEBP screenshot the ingestion pipeline produced. Off by default to keep typical responses small. (optional) (default to False)
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Get Document Version Handler
        api_response = api_instance.get_document_version(version_id, include_page_screenshots=include_page_screenshots, authorization=authorization, ks_uat=ks_uat)
        print("The response of DocumentVersionsApi->get_document_version:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentVersionsApi->get_document_version: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version_id** | **UUID**| DocumentVersion ID | 
 **include_page_screenshots** | **bool**| When true, populate page_screenshot_urls with presigned URLs for every per-page WEBP screenshot the ingestion pipeline produced. Off by default to keep typical responses small. | [optional] [default to False]
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**DocumentVersionResponse**](DocumentVersionResponse.md)

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

# **get_document_version_contents**
> PaginatedResponseAnnotatedUnionSectionContentItemChunkContentItemDiscriminator get_document_version_contents(version_id, section_id=section_id, content_type=content_type, limit=limit, offset=offset, authorization=authorization, ks_uat=ks_uat)

Get Document Version Contents Handler

List all sections and chunks for a document version in depth-first logical order.

Returns a discriminated union of SectionContentItem and ChunkContentItem,
distinguished by the `part_type` field ("SECTION" or "CHUNK").

Use `content_type` to return only one type (e.g. `content_type=CHUNK` for
chunk-only pagination where offset/limit apply only to chunks).

### Example


```python
import ksapi
from ksapi.models.document_version_content_type_filter import DocumentVersionContentTypeFilter
from ksapi.models.paginated_response_annotated_union_section_content_item_chunk_content_item_discriminator import PaginatedResponseAnnotatedUnionSectionContentItemChunkContentItemDiscriminator
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
    api_instance = ksapi.DocumentVersionsApi(api_client)
    version_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | DocumentVersion ID
    section_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Optional section ID to scope traversal to a subtree (optional)
    content_type = ksapi.DocumentVersionContentTypeFilter() # DocumentVersionContentTypeFilter | Filter by content type: SECTION or CHUNK. Omit to return both types. (optional)
    limit = 20 # int | Number of items per page (optional) (default to 20)
    offset = 0 # int | Number of items to skip (optional) (default to 0)
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Get Document Version Contents Handler
        api_response = api_instance.get_document_version_contents(version_id, section_id=section_id, content_type=content_type, limit=limit, offset=offset, authorization=authorization, ks_uat=ks_uat)
        print("The response of DocumentVersionsApi->get_document_version_contents:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentVersionsApi->get_document_version_contents: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version_id** | **UUID**| DocumentVersion ID | 
 **section_id** | **UUID**| Optional section ID to scope traversal to a subtree | [optional] 
 **content_type** | [**DocumentVersionContentTypeFilter**](.md)| Filter by content type: SECTION or CHUNK. Omit to return both types. | [optional] 
 **limit** | **int**| Number of items per page | [optional] [default to 20]
 **offset** | **int**| Number of items to skip | [optional] [default to 0]
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**PaginatedResponseAnnotatedUnionSectionContentItemChunkContentItemDiscriminator**](PaginatedResponseAnnotatedUnionSectionContentItemChunkContentItemDiscriminator.md)

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

# **list_document_versions**
> PaginatedResponseDocumentVersionResponse list_document_versions(document_id, limit=limit, offset=offset, authorization=authorization, ks_uat=ks_uat)

List Document Versions Handler

List all versions for a document.

Returns versions ordered by version number ascending (v0, v1, v2...).

### Example


```python
import ksapi
from ksapi.models.paginated_response_document_version_response import PaginatedResponseDocumentVersionResponse
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
    api_instance = ksapi.DocumentVersionsApi(api_client)
    document_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Document ID to list versions for
    limit = 20 # int | Number of items per page (optional) (default to 20)
    offset = 0 # int | Number of items to skip (optional) (default to 0)
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # List Document Versions Handler
        api_response = api_instance.list_document_versions(document_id, limit=limit, offset=offset, authorization=authorization, ks_uat=ks_uat)
        print("The response of DocumentVersionsApi->list_document_versions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentVersionsApi->list_document_versions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **document_id** | **UUID**| Document ID to list versions for | 
 **limit** | **int**| Number of items per page | [optional] [default to 20]
 **offset** | **int**| Number of items to skip | [optional] [default to 0]
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**PaginatedResponseDocumentVersionResponse**](PaginatedResponseDocumentVersionResponse.md)

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

# **update_document_version_metadata**
> DocumentVersionResponse update_document_version_metadata(version_id, document_version_metadata_update, authorization=authorization, ks_uat=ks_uat)

Update Document Version Metadata Handler

Merge metadata fields into an existing document version's metadata.

Only non-null fields in the request body are merged; existing metadata
fields not present in the request are preserved.

### Example


```python
import ksapi
from ksapi.models.document_version_metadata_update import DocumentVersionMetadataUpdate
from ksapi.models.document_version_response import DocumentVersionResponse
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
    api_instance = ksapi.DocumentVersionsApi(api_client)
    version_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | DocumentVersion ID
    document_version_metadata_update = ksapi.DocumentVersionMetadataUpdate() # DocumentVersionMetadataUpdate | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Update Document Version Metadata Handler
        api_response = api_instance.update_document_version_metadata(version_id, document_version_metadata_update, authorization=authorization, ks_uat=ks_uat)
        print("The response of DocumentVersionsApi->update_document_version_metadata:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentVersionsApi->update_document_version_metadata: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version_id** | **UUID**| DocumentVersion ID | 
 **document_version_metadata_update** | [**DocumentVersionMetadataUpdate**](DocumentVersionMetadataUpdate.md)|  | 
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**DocumentVersionResponse**](DocumentVersionResponse.md)

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

