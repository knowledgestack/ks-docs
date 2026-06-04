# ksapi.DocumentsApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_document**](DocumentsApi.md#create_document) | **POST** /v1/documents | Create Document Handler
[**delete_document**](DocumentsApi.md#delete_document) | **DELETE** /v1/documents/{document_id} | Delete Document Handler
[**get_document**](DocumentsApi.md#get_document) | **GET** /v1/documents/{document_id} | Get Document Handler
[**ingest_document**](DocumentsApi.md#ingest_document) | **POST** /v1/documents/ingest | Ingest Document Handler
[**ingest_document_version**](DocumentsApi.md#ingest_document_version) | **POST** /v1/documents/{document_id}/ingest | Ingest Document Version Handler
[**list_documents**](DocumentsApi.md#list_documents) | **GET** /v1/documents | List Documents Handler
[**update_document**](DocumentsApi.md#update_document) | **PATCH** /v1/documents/{document_id} | Update Document Handler


# **create_document**
> DocumentResponse create_document(create_document_request, authorization=authorization, ks_uat=ks_uat)

Create Document Handler

Create a new document with initial v0 version.

The document is created as a child of the specified parent folder.
An initial version (v0) is automatically created.

### Example


```python
import ksapi
from ksapi.models.create_document_request import CreateDocumentRequest
from ksapi.models.document_response import DocumentResponse
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
    api_instance = ksapi.DocumentsApi(api_client)
    create_document_request = ksapi.CreateDocumentRequest() # CreateDocumentRequest | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Create Document Handler
        api_response = api_instance.create_document(create_document_request, authorization=authorization, ks_uat=ks_uat)
        print("The response of DocumentsApi->create_document:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentsApi->create_document: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_document_request** | [**CreateDocumentRequest**](CreateDocumentRequest.md)|  | 
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**DocumentResponse**](DocumentResponse.md)

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

# **delete_document**
> delete_document(document_id, authorization=authorization, ks_uat=ks_uat)

Delete Document Handler

Delete a document and all its contents.

WARNING: This cascades to all children (versions, sections, chunks, etc.)
due to parent_id ON DELETE CASCADE.

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
    api_instance = ksapi.DocumentsApi(api_client)
    document_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Delete Document Handler
        api_instance.delete_document(document_id, authorization=authorization, ks_uat=ks_uat)
    except Exception as e:
        print("Exception when calling DocumentsApi->delete_document: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **document_id** | **UUID**|  | 
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

# **get_document**
> DocumentResponse get_document(document_id, with_tags=with_tags, authorization=authorization, ks_uat=ks_uat)

Get Document Handler

### Example


```python
import ksapi
from ksapi.models.document_response import DocumentResponse
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
    api_instance = ksapi.DocumentsApi(api_client)
    document_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    with_tags = False # bool | Include tags in the response (default: false) (optional) (default to False)
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Get Document Handler
        api_response = api_instance.get_document(document_id, with_tags=with_tags, authorization=authorization, ks_uat=ks_uat)
        print("The response of DocumentsApi->get_document:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentsApi->get_document: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **document_id** | **UUID**|  | 
 **with_tags** | **bool**| Include tags in the response (default: false) | [optional] [default to False]
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**DocumentResponse**](DocumentResponse.md)

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

# **ingest_document**
> IngestDocumentResponse ingest_document(file, path_part_id, authorization=authorization, ks_uat=ks_uat, name=name, ingestion_mode=ingestion_mode, chunk_type=chunk_type, secondary_taxonomy=secondary_taxonomy, page_dpi=page_dpi)

Ingest Document Handler

Upload a file, create document + version, and trigger ingestion workflow.

Returns 201 with the Temporal workflow ID.

### Example


```python
import ksapi
from ksapi.models.chunk_type import ChunkType
from ksapi.models.image_taxonomy import ImageTaxonomy
from ksapi.models.ingest_document_response import IngestDocumentResponse
from ksapi.models.ingestion_mode import IngestionMode
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
    api_instance = ksapi.DocumentsApi(api_client)
    file = None # bytes | 
    path_part_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Parent path part ID (must be a FOLDER type)
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)
    name = 'name_example' # str | Document name (defaults to filename) (optional)
    ingestion_mode = ksapi.IngestionMode() # IngestionMode |  (optional)
    chunk_type = ksapi.ChunkType() # ChunkType |  (optional)
    secondary_taxonomy = ksapi.ImageTaxonomy() # ImageTaxonomy |  (optional)
    page_dpi = 72 # int | DPI for PDF page screenshots (default 72, min 36, max 216). (optional) (default to 72)

    try:
        # Ingest Document Handler
        api_response = api_instance.ingest_document(file, path_part_id, authorization=authorization, ks_uat=ks_uat, name=name, ingestion_mode=ingestion_mode, chunk_type=chunk_type, secondary_taxonomy=secondary_taxonomy, page_dpi=page_dpi)
        print("The response of DocumentsApi->ingest_document:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentsApi->ingest_document: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **bytes**|  | 
 **path_part_id** | **UUID**| Parent path part ID (must be a FOLDER type) | 
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 
 **name** | **str**| Document name (defaults to filename) | [optional] 
 **ingestion_mode** | [**IngestionMode**](IngestionMode.md)|  | [optional] 
 **chunk_type** | [**ChunkType**](ChunkType.md)|  | [optional] 
 **secondary_taxonomy** | [**ImageTaxonomy**](ImageTaxonomy.md)|  | [optional] 
 **page_dpi** | **int**| DPI for PDF page screenshots (default 72, min 36, max 216). | [optional] [default to 72]

### Return type

[**IngestDocumentResponse**](IngestDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ingest_document_version**
> IngestDocumentResponse ingest_document_version(document_id, file, authorization=authorization, ks_uat=ks_uat, ingestion_mode=ingestion_mode, chunk_type=chunk_type, secondary_taxonomy=secondary_taxonomy, page_dpi=page_dpi)

Ingest Document Version Handler

Upload a new file for an existing document, creating a new version and triggering ingestion.

Creates a new document version (incrementing the highest version number),
uploads the file to S3, and starts the ingestion workflow. Upon successful
ingestion, the new version is automatically activated (set as the document's
active_version) and the old version's Qdrant points are deactivated.

Returns 201 with the Temporal workflow ID.

### Example


```python
import ksapi
from ksapi.models.chunk_type import ChunkType
from ksapi.models.image_taxonomy import ImageTaxonomy
from ksapi.models.ingest_document_response import IngestDocumentResponse
from ksapi.models.ingestion_mode import IngestionMode
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
    api_instance = ksapi.DocumentsApi(api_client)
    document_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Document ID
    file = None # bytes | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)
    ingestion_mode = ksapi.IngestionMode() # IngestionMode |  (optional)
    chunk_type = ksapi.ChunkType() # ChunkType |  (optional)
    secondary_taxonomy = ksapi.ImageTaxonomy() # ImageTaxonomy |  (optional)
    page_dpi = 72 # int | DPI for PDF page screenshots (default 72, min 36, max 216). (optional) (default to 72)

    try:
        # Ingest Document Version Handler
        api_response = api_instance.ingest_document_version(document_id, file, authorization=authorization, ks_uat=ks_uat, ingestion_mode=ingestion_mode, chunk_type=chunk_type, secondary_taxonomy=secondary_taxonomy, page_dpi=page_dpi)
        print("The response of DocumentsApi->ingest_document_version:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentsApi->ingest_document_version: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **document_id** | **UUID**| Document ID | 
 **file** | **bytes**|  | 
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 
 **ingestion_mode** | [**IngestionMode**](IngestionMode.md)|  | [optional] 
 **chunk_type** | [**ChunkType**](ChunkType.md)|  | [optional] 
 **secondary_taxonomy** | [**ImageTaxonomy**](ImageTaxonomy.md)|  | [optional] 
 **page_dpi** | **int**| DPI for PDF page screenshots (default 72, min 36, max 216). | [optional] [default to 72]

### Return type

[**IngestDocumentResponse**](IngestDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_documents**
> PaginatedResponseDocumentResponse list_documents(parent_path_part_id=parent_path_part_id, sort_order=sort_order, with_tags=with_tags, limit=limit, offset=offset, authorization=authorization, ks_uat=ks_uat)

List Documents Handler

List documents in a folder.

Returns only direct child documents (depth=1) of the specified parent folder.
If parent_path_part_id is not provided, lists top-level documents.

### Example


```python
import ksapi
from ksapi.models.paginated_response_document_response import PaginatedResponseDocumentResponse
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
    api_instance = ksapi.DocumentsApi(api_client)
    parent_path_part_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Parent PathPart ID (defaults to root) (optional)
    sort_order = ksapi.PathOrder() # PathOrder | Sort order for results (default: LOGICAL) (optional)
    with_tags = False # bool | Include tags in the response (default: false) (optional) (default to False)
    limit = 20 # int | Number of items per page (optional) (default to 20)
    offset = 0 # int | Number of items to skip (optional) (default to 0)
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # List Documents Handler
        api_response = api_instance.list_documents(parent_path_part_id=parent_path_part_id, sort_order=sort_order, with_tags=with_tags, limit=limit, offset=offset, authorization=authorization, ks_uat=ks_uat)
        print("The response of DocumentsApi->list_documents:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentsApi->list_documents: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent_path_part_id** | **UUID**| Parent PathPart ID (defaults to root) | [optional] 
 **sort_order** | [**PathOrder**](.md)| Sort order for results (default: LOGICAL) | [optional] 
 **with_tags** | **bool**| Include tags in the response (default: false) | [optional] [default to False]
 **limit** | **int**| Number of items per page | [optional] [default to 20]
 **offset** | **int**| Number of items to skip | [optional] [default to 0]
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**PaginatedResponseDocumentResponse**](PaginatedResponseDocumentResponse.md)

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

# **update_document**
> DocumentResponse update_document(document_id, update_document_request, authorization=authorization, ks_uat=ks_uat)

Update Document Handler

Update a document (rename, move, change active version, Qdrant exclusion).

To rename: provide `name` field.
To move: provide `parent_path_part_id` field.
To change active version: provide `active_version_id` field.
To toggle Qdrant exclusion: provide `exclude_from_qdrant` field.
Any combination can be sent in a single request.

### Example


```python
import ksapi
from ksapi.models.document_response import DocumentResponse
from ksapi.models.update_document_request import UpdateDocumentRequest
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
    api_instance = ksapi.DocumentsApi(api_client)
    document_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    update_document_request = ksapi.UpdateDocumentRequest() # UpdateDocumentRequest | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Update Document Handler
        api_response = api_instance.update_document(document_id, update_document_request, authorization=authorization, ks_uat=ks_uat)
        print("The response of DocumentsApi->update_document:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentsApi->update_document: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **document_id** | **UUID**|  | 
 **update_document_request** | [**UpdateDocumentRequest**](UpdateDocumentRequest.md)|  | 
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**DocumentResponse**](DocumentResponse.md)

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

