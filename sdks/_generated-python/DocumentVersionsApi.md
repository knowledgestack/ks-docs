# ksapi.DocumentVersionsApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clear_document_version_contents**](DocumentVersionsApi.md#clear_document_version_contents) | **DELETE** /v1/document_versions/{version_id}/contents | Clear Document Version Contents Handler
[**create_document_version**](DocumentVersionsApi.md#create_document_version) | **POST** /v1/documents/{document_id}/versions | Create Document Version Handler
[**delete_document_version**](DocumentVersionsApi.md#delete_document_version) | **DELETE** /v1/document_versions/{version_id} | Delete Document Version Handler
[**document_version_action**](DocumentVersionsApi.md#document_version_action) | **POST** /v1/document_versions/{version_id} | Document Version Action Handler
[**download_document_version**](DocumentVersionsApi.md#download_document_version) | **POST** /v1/document_versions/{version_id}/download | Download Document Version Handler
[**get_document_version**](DocumentVersionsApi.md#get_document_version) | **GET** /v1/document_versions/{version_id} | Get Document Version Handler
[**get_document_version_contents**](DocumentVersionsApi.md#get_document_version_contents) | **GET** /v1/document_versions/{version_id}/contents | Get Document Version Contents Handler
[**get_document_version_diff**](DocumentVersionsApi.md#get_document_version_diff) | **GET** /v1/document_versions/{version_id}/diff | Get Document Version Diff Handler
[**list_document_versions**](DocumentVersionsApi.md#list_document_versions) | **GET** /v1/document_versions | List Document Versions Handler
[**update_document_version_metadata**](DocumentVersionsApi.md#update_document_version_metadata) | **PATCH** /v1/document_versions/{version_id}/metadata | Update Document Version Metadata Handler


# **clear_document_version_contents**
> ClearVersionContentsResponse clear_document_version_contents(version_id)

Clear Document Version Contents Handler

Delete all sections and chunks under a document version.

Removes all content (sections and chunks) from the version while
keeping the version itself intact. Used by the ingestion pipeline
for idempotent re-processing.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

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
    api_instance = ksapi.DocumentVersionsApi(api_client)
    version_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | DocumentVersion ID

    try:
        # Clear Document Version Contents Handler
        api_response = api_instance.clear_document_version_contents(version_id)
        print("The response of DocumentVersionsApi->clear_document_version_contents:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentVersionsApi->clear_document_version_contents: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version_id** | **UUID**| DocumentVersion ID | 

### Return type

[**ClearVersionContentsResponse**](ClearVersionContentsResponse.md)

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

# **create_document_version**
> DocumentVersionResponse create_document_version(document_id)

Create Document Version Handler

Create a new version for a document.

The version number is automatically incremented from the highest existing version.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

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
    api_instance = ksapi.DocumentVersionsApi(api_client)
    document_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Document ID

    try:
        # Create Document Version Handler
        api_response = api_instance.create_document_version(document_id)
        print("The response of DocumentVersionsApi->create_document_version:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentVersionsApi->create_document_version: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **document_id** | **UUID**| Document ID | 

### Return type

[**DocumentVersionResponse**](DocumentVersionResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

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
> delete_document_version(version_id)

Delete Document Version Handler

Delete a document version by its ID.

Cannot delete the active version of a document.

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
    api_instance = ksapi.DocumentVersionsApi(api_client)
    version_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | DocumentVersion ID

    try:
        # Delete Document Version Handler
        api_instance.delete_document_version(version_id)
    except Exception as e:
        print("Exception when calling DocumentVersionsApi->delete_document_version: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version_id** | **UUID**| DocumentVersion ID | 

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **document_version_action**
> DocumentVersionActionResponse document_version_action(version_id, action)

Document Version Action Handler

Perform an action on a document version.

Supported actions:
- `reembed`: Re-embed all chunks for this version into Qdrant.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

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
    api_instance = ksapi.DocumentVersionsApi(api_client)
    version_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | DocumentVersion ID
    action = ksapi.DocumentVersionAction() # DocumentVersionAction | Action to perform

    try:
        # Document Version Action Handler
        api_response = api_instance.document_version_action(version_id, action)
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

### Return type

[**DocumentVersionActionResponse**](DocumentVersionActionResponse.md)

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

# **download_document_version**
> DocumentDownloadResponse download_document_version(version_id, artifact=artifact)

Download Document Version Handler

Issue a short-lived, audited download link for a specific version.

Records a ``document.downloaded`` audit event anchored to the document so
the customer audit log captures who downloaded which version and when.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.document_download_response import DocumentDownloadResponse
from ksapi.models.download_artifact import DownloadArtifact
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
    api_instance = ksapi.DocumentVersionsApi(api_client)
    version_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | DocumentVersion ID
    artifact = ksapi.DownloadArtifact() # DownloadArtifact | Artifact to download: source or fast_plaintext (optional)

    try:
        # Download Document Version Handler
        api_response = api_instance.download_document_version(version_id, artifact=artifact)
        print("The response of DocumentVersionsApi->download_document_version:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentVersionsApi->download_document_version: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version_id** | **UUID**| DocumentVersion ID | 
 **artifact** | [**DownloadArtifact**](.md)| Artifact to download: source or fast_plaintext | [optional] 

### Return type

[**DocumentDownloadResponse**](DocumentDownloadResponse.md)

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

# **get_document_version**
> DocumentVersionResponse get_document_version(version_id, include_page_screenshots=include_page_screenshots)

Get Document Version Handler

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

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
    api_instance = ksapi.DocumentVersionsApi(api_client)
    version_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | DocumentVersion ID
    include_page_screenshots = False # bool | When true, populate page_screenshot_urls with presigned URLs for every per-page WEBP screenshot the ingestion pipeline produced. Off by default to keep typical responses small. (optional) (default to False)

    try:
        # Get Document Version Handler
        api_response = api_instance.get_document_version(version_id, include_page_screenshots=include_page_screenshots)
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

### Return type

[**DocumentVersionResponse**](DocumentVersionResponse.md)

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

# **get_document_version_contents**
> PaginatedResponseAnnotatedUnionSectionContentItemChunkContentItemDiscriminator get_document_version_contents(version_id, section_id=section_id, content_type=content_type, limit=limit, offset=offset)

Get Document Version Contents Handler

List all sections and chunks for a document version in depth-first logical order.

Returns a discriminated union of SectionContentItem and ChunkContentItem,
distinguished by the `part_type` field ("SECTION" or "CHUNK").

Use `content_type` to return only one type (e.g. `content_type=CHUNK` for
chunk-only pagination where offset/limit apply only to chunks).

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

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
    api_instance = ksapi.DocumentVersionsApi(api_client)
    version_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | DocumentVersion ID
    section_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Optional section ID to scope traversal to a subtree (optional)
    content_type = ksapi.DocumentVersionContentTypeFilter() # DocumentVersionContentTypeFilter | Filter by content type: SECTION or CHUNK. Omit to return both types. (optional)
    limit = 20 # int | Number of items per page (optional) (default to 20)
    offset = 0 # int | Number of items to skip (optional) (default to 0)

    try:
        # Get Document Version Contents Handler
        api_response = api_instance.get_document_version_contents(version_id, section_id=section_id, content_type=content_type, limit=limit, offset=offset)
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

### Return type

[**PaginatedResponseAnnotatedUnionSectionContentItemChunkContentItemDiscriminator**](PaginatedResponseAnnotatedUnionSectionContentItemChunkContentItemDiscriminator.md)

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

# **get_document_version_diff**
> VersionDiffResponse get_document_version_diff(version_id, from_version_id=from_version_id)

Get Document Version Diff Handler

Side-by-side diff of a version against a previous one of the same document.

Diffs the two versions' plaintext on the fly (no stored diff), so any pair of
versions can be compared. ``from_version_id`` defaults to the immediate
predecessor; the first version diffs against empty (all additions). Requires
read permission on the document.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.version_diff_response import VersionDiffResponse
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
    api_instance = ksapi.DocumentVersionsApi(api_client)
    version_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | The new (right) version ID
    from_version_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | The old (left) version; defaults to the predecessor (optional)

    try:
        # Get Document Version Diff Handler
        api_response = api_instance.get_document_version_diff(version_id, from_version_id=from_version_id)
        print("The response of DocumentVersionsApi->get_document_version_diff:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentVersionsApi->get_document_version_diff: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version_id** | **UUID**| The new (right) version ID | 
 **from_version_id** | **UUID**| The old (left) version; defaults to the predecessor | [optional] 

### Return type

[**VersionDiffResponse**](VersionDiffResponse.md)

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

# **list_document_versions**
> PaginatedResponseDocumentVersionResponse list_document_versions(document_id, limit=limit, offset=offset)

List Document Versions Handler

List all versions for a document.

Returns versions ordered by version number ascending (v0, v1, v2...).

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

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
    api_instance = ksapi.DocumentVersionsApi(api_client)
    document_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Document ID to list versions for
    limit = 20 # int | Number of items per page (optional) (default to 20)
    offset = 0 # int | Number of items to skip (optional) (default to 0)

    try:
        # List Document Versions Handler
        api_response = api_instance.list_document_versions(document_id, limit=limit, offset=offset)
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

### Return type

[**PaginatedResponseDocumentVersionResponse**](PaginatedResponseDocumentVersionResponse.md)

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

# **update_document_version_metadata**
> DocumentVersionResponse update_document_version_metadata(version_id, document_version_metadata_update)

Update Document Version Metadata Handler

Merge metadata fields into an existing document version's metadata.

Only non-null fields in the request body are merged; existing metadata
fields not present in the request are preserved.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

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
    api_instance = ksapi.DocumentVersionsApi(api_client)
    version_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | DocumentVersion ID
    document_version_metadata_update = ksapi.DocumentVersionMetadataUpdate() # DocumentVersionMetadataUpdate | 

    try:
        # Update Document Version Metadata Handler
        api_response = api_instance.update_document_version_metadata(version_id, document_version_metadata_update)
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

### Return type

[**DocumentVersionResponse**](DocumentVersionResponse.md)

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

