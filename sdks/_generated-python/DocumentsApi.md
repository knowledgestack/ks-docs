# ksapi.DocumentsApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**abort_document_upload**](DocumentsApi.md#abort_document_upload) | **DELETE** /v1/documents/uploads | Abort Document Upload Handler
[**complete_document_upload**](DocumentsApi.md#complete_document_upload) | **POST** /v1/documents/uploads/complete | Complete Document Upload Handler
[**create_document**](DocumentsApi.md#create_document) | **POST** /v1/documents | Create Document Handler
[**create_document_upload**](DocumentsApi.md#create_document_upload) | **POST** /v1/documents/uploads | Create Document Upload Handler
[**delete_document**](DocumentsApi.md#delete_document) | **DELETE** /v1/documents/{document_id} | Delete Document Handler
[**download_document**](DocumentsApi.md#download_document) | **POST** /v1/documents/{document_id}/download | Download Document Handler
[**get_document**](DocumentsApi.md#get_document) | **GET** /v1/documents/{document_id} | Get Document Handler
[**get_document_upload_status**](DocumentsApi.md#get_document_upload_status) | **GET** /v1/documents/uploads/parts | Get Document Upload Status Handler
[**ingest_document**](DocumentsApi.md#ingest_document) | **POST** /v1/documents/ingest | Ingest Document Handler
[**ingest_document_version**](DocumentsApi.md#ingest_document_version) | **POST** /v1/documents/{document_id}/ingest | Ingest Document Version Handler
[**ingest_zip**](DocumentsApi.md#ingest_zip) | **POST** /v1/documents/ingest-zip | Ingest Zip Handler
[**list_documents**](DocumentsApi.md#list_documents) | **GET** /v1/documents | List Documents Handler
[**update_document**](DocumentsApi.md#update_document) | **PATCH** /v1/documents/{document_id} | Update Document Handler
[**upload_document_part**](DocumentsApi.md#upload_document_part) | **PUT** /v1/documents/uploads/parts/{part_number} | Upload Document Part Handler


# **abort_document_upload**
> abort_document_upload(x_upload_token)

Abort Document Upload Handler

Discard an in-progress resumable upload and its parts.

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
    api_instance = ksapi.DocumentsApi(api_client)
    x_upload_token = 'x_upload_token_example' # str | 

    try:
        # Abort Document Upload Handler
        api_instance.abort_document_upload(x_upload_token)
    except Exception as e:
        print("Exception when calling DocumentsApi->abort_document_upload: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_upload_token** | **str**|  | 

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

# **complete_document_upload**
> IngestDocumentResponse complete_document_upload(complete_upload_request)

Complete Document Upload Handler

Assemble the uploaded parts, create the document, and start ingestion.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.complete_upload_request import CompleteUploadRequest
from ksapi.models.ingest_document_response import IngestDocumentResponse
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
    api_instance = ksapi.DocumentsApi(api_client)
    complete_upload_request = ksapi.CompleteUploadRequest() # CompleteUploadRequest | 

    try:
        # Complete Document Upload Handler
        api_response = api_instance.complete_document_upload(complete_upload_request)
        print("The response of DocumentsApi->complete_document_upload:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentsApi->complete_document_upload: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **complete_upload_request** | [**CompleteUploadRequest**](CompleteUploadRequest.md)|  | 

### Return type

[**IngestDocumentResponse**](IngestDocumentResponse.md)

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

# **create_document**
> DocumentResponse create_document(create_document_request)

Create Document Handler

Create a new document with initial v0 version.

The document is created as a child of the specified parent folder.
An initial version (v0) is automatically created.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

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
    api_instance = ksapi.DocumentsApi(api_client)
    create_document_request = ksapi.CreateDocumentRequest() # CreateDocumentRequest | 

    try:
        # Create Document Handler
        api_response = api_instance.create_document(create_document_request)
        print("The response of DocumentsApi->create_document:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentsApi->create_document: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_document_request** | [**CreateDocumentRequest**](CreateDocumentRequest.md)|  | 

### Return type

[**DocumentResponse**](DocumentResponse.md)

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

# **create_document_upload**
> CreateUploadResponse create_document_upload(create_upload_request)

Create Document Upload Handler

Begin a resumable multipart upload for a large file (audio/video/…).

Returns an opaque ``upload_token``. Stream the file as parts to
``PUT /v1/documents/uploads/parts/{part_number}`` (every part except the last
at least 5 MiB), then ``POST /v1/documents/uploads/complete``. A dropped part
is re-sent alone — ``GET /v1/documents/uploads/parts`` reports what landed.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.create_upload_request import CreateUploadRequest
from ksapi.models.create_upload_response import CreateUploadResponse
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
    api_instance = ksapi.DocumentsApi(api_client)
    create_upload_request = ksapi.CreateUploadRequest() # CreateUploadRequest | 

    try:
        # Create Document Upload Handler
        api_response = api_instance.create_document_upload(create_upload_request)
        print("The response of DocumentsApi->create_document_upload:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentsApi->create_document_upload: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_upload_request** | [**CreateUploadRequest**](CreateUploadRequest.md)|  | 

### Return type

[**CreateUploadResponse**](CreateUploadResponse.md)

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

# **delete_document**
> delete_document(document_id)

Delete Document Handler

Move a document and all its contents to trash.

Requires an active document checkout held by the caller. Acquire one via
``POST /v1/documents/{id}/checkout`` first; otherwise this returns 409
Conflict ("A document checkout is required to edit this document.").

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
    api_instance = ksapi.DocumentsApi(api_client)
    document_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Delete Document Handler
        api_instance.delete_document(document_id)
    except Exception as e:
        print("Exception when calling DocumentsApi->delete_document: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **document_id** | **UUID**|  | 

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

# **download_document**
> DocumentDownloadResponse download_document(document_id, artifact=artifact)

Download Document Handler

Issue a short-lived, audited download link for a document's active version.

Records a ``document.downloaded`` audit event so the customer audit log
captures who downloaded which document/version and when.

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
    api_instance = ksapi.DocumentsApi(api_client)
    document_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    artifact = ksapi.DownloadArtifact() # DownloadArtifact | Artifact to download: source or fast_plaintext (optional)

    try:
        # Download Document Handler
        api_response = api_instance.download_document(document_id, artifact=artifact)
        print("The response of DocumentsApi->download_document:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentsApi->download_document: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **document_id** | **UUID**|  | 
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
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_document**
> DocumentResponse get_document(document_id, with_tags=with_tags)

Get Document Handler

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

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
    api_instance = ksapi.DocumentsApi(api_client)
    document_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    with_tags = False # bool | Include tags in the response (default: false) (optional) (default to False)

    try:
        # Get Document Handler
        api_response = api_instance.get_document(document_id, with_tags=with_tags)
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

### Return type

[**DocumentResponse**](DocumentResponse.md)

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

# **get_document_upload_status**
> UploadStatusResponse get_document_upload_status(x_upload_token)

Get Document Upload Status Handler

Report which parts S3 already holds so the client resumes the rest.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.upload_status_response import UploadStatusResponse
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
    api_instance = ksapi.DocumentsApi(api_client)
    x_upload_token = 'x_upload_token_example' # str | 

    try:
        # Get Document Upload Status Handler
        api_response = api_instance.get_document_upload_status(x_upload_token)
        print("The response of DocumentsApi->get_document_upload_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentsApi->get_document_upload_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_upload_token** | **str**|  | 

### Return type

[**UploadStatusResponse**](UploadStatusResponse.md)

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

# **ingest_document**
> IngestDocumentResponse ingest_document(file, path_part_id, name=name, tag_ids=tag_ids, idempotency_key=idempotency_key, ingestion_mode=ingestion_mode, chunk_type=chunk_type, secondary_taxonomy=secondary_taxonomy, page_dpi=page_dpi, workflow_run_id=workflow_run_id, workflow_definition_id=workflow_definition_id)

Ingest Document Handler

Upload a file, create document + version, and trigger ingestion workflow.

Returns 201 immediately with the Temporal ``workflow_id``. Ingestion runs in
the background — poll ``GET /v1/system-jobs/document_versions/{workflow_id}``
(also given in the ``Location`` header) until ``status`` is terminal (anything
other than ``pending``/``processing``). There is no completion webhook.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

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
    api_instance = ksapi.DocumentsApi(api_client)
    file = None # bytes | 
    path_part_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Parent path part ID (must be a FOLDER type)
    name = 'name_example' # str | Document name (defaults to filename) (optional)
    tag_ids = None # List[UUID] | Tag IDs applied to the created document. (optional)
    idempotency_key = 'idempotency_key_example' # str | Opt-in key: a repeat with the same key at the same (parent, name) replays the existing document instead of a 409. (optional)
    ingestion_mode = ksapi.IngestionMode() # IngestionMode |  (optional)
    chunk_type = ksapi.ChunkType() # ChunkType |  (optional)
    secondary_taxonomy = ksapi.ImageTaxonomy() # ImageTaxonomy |  (optional)
    page_dpi = 72 # int | DPI for PDF page screenshots (default 72, min 36, max 216). (optional) (default to 72)
    workflow_run_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Workflow run context for assumed agent uploads. (optional)
    workflow_definition_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Workflow definition context for assumed agent uploads. (optional)

    try:
        # Ingest Document Handler
        api_response = api_instance.ingest_document(file, path_part_id, name=name, tag_ids=tag_ids, idempotency_key=idempotency_key, ingestion_mode=ingestion_mode, chunk_type=chunk_type, secondary_taxonomy=secondary_taxonomy, page_dpi=page_dpi, workflow_run_id=workflow_run_id, workflow_definition_id=workflow_definition_id)
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
 **name** | **str**| Document name (defaults to filename) | [optional] 
 **tag_ids** | [**List[UUID]**](UUID.md)| Tag IDs applied to the created document. | [optional] 
 **idempotency_key** | **str**| Opt-in key: a repeat with the same key at the same (parent, name) replays the existing document instead of a 409. | [optional] 
 **ingestion_mode** | [**IngestionMode**](IngestionMode.md)|  | [optional] 
 **chunk_type** | [**ChunkType**](ChunkType.md)|  | [optional] 
 **secondary_taxonomy** | [**ImageTaxonomy**](ImageTaxonomy.md)|  | [optional] 
 **page_dpi** | **int**| DPI for PDF page screenshots (default 72, min 36, max 216). | [optional] [default to 72]
 **workflow_run_id** | **UUID**| Workflow run context for assumed agent uploads. | [optional] 
 **workflow_definition_id** | **UUID**| Workflow definition context for assumed agent uploads. | [optional] 

### Return type

[**IngestDocumentResponse**](IngestDocumentResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  * Location - Poll this run resource until &#x60;&#x60;execution_state&#x60;&#x60; is COMPLETED or FAILED. <br>  |
**422** | Validation Error |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ingest_document_version**
> IngestDocumentResponse ingest_document_version(document_id, file, ingestion_mode=ingestion_mode, chunk_type=chunk_type, secondary_taxonomy=secondary_taxonomy, page_dpi=page_dpi, workflow_run_id=workflow_run_id, workflow_definition_id=workflow_definition_id)

Ingest Document Version Handler

Upload a new file for an existing document, creating a new version and triggering ingestion.

Creates a new document version (incrementing the highest version number),
uploads the file to S3, and starts the ingestion workflow. Upon successful
ingestion, the new version is automatically activated (set as the document's
active_version) and the old version's Qdrant points are deactivated.

Returns 201 immediately with the Temporal ``workflow_id``. Ingestion runs in
the background — poll ``GET /v1/system-jobs/document_versions/{workflow_id}``
(also given in the ``Location`` header) until ``status`` is terminal.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

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
    api_instance = ksapi.DocumentsApi(api_client)
    document_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Document ID
    file = None # bytes | 
    ingestion_mode = ksapi.IngestionMode() # IngestionMode |  (optional)
    chunk_type = ksapi.ChunkType() # ChunkType |  (optional)
    secondary_taxonomy = ksapi.ImageTaxonomy() # ImageTaxonomy |  (optional)
    page_dpi = 72 # int | DPI for PDF page screenshots (default 72, min 36, max 216). (optional) (default to 72)
    workflow_run_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Workflow run context for assumed agent uploads. (optional)
    workflow_definition_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Workflow definition context for assumed agent uploads. (optional)

    try:
        # Ingest Document Version Handler
        api_response = api_instance.ingest_document_version(document_id, file, ingestion_mode=ingestion_mode, chunk_type=chunk_type, secondary_taxonomy=secondary_taxonomy, page_dpi=page_dpi, workflow_run_id=workflow_run_id, workflow_definition_id=workflow_definition_id)
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
 **ingestion_mode** | [**IngestionMode**](IngestionMode.md)|  | [optional] 
 **chunk_type** | [**ChunkType**](ChunkType.md)|  | [optional] 
 **secondary_taxonomy** | [**ImageTaxonomy**](ImageTaxonomy.md)|  | [optional] 
 **page_dpi** | **int**| DPI for PDF page screenshots (default 72, min 36, max 216). | [optional] [default to 72]
 **workflow_run_id** | **UUID**| Workflow run context for assumed agent uploads. | [optional] 
 **workflow_definition_id** | **UUID**| Workflow definition context for assumed agent uploads. | [optional] 

### Return type

[**IngestDocumentResponse**](IngestDocumentResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  * Location - Poll this run resource until &#x60;&#x60;execution_state&#x60;&#x60; is COMPLETED or FAILED. <br>  |
**422** | Validation Error |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ingest_zip**
> IngestZipResponse ingest_zip(file, path_part_id, ingestion_mode=ingestion_mode, tag_ids=tag_ids)

Ingest Zip Handler

Upload a ZIP archive; ingest each member asynchronously via a fan-out.

The whole archive nests under a single FOLDER named after the ZIP file
(``report.zip`` -> ``report/``), with the ZIP's directory structure mirrored
beneath it as FOLDER PathParts — all created synchronously. Returns 202 with
the fan-out ``workflow_id`` (poll ``GET /v1/system-jobs/zip-ingestions/{workflow_id}``
for per-member outcomes) plus the artifacts ``skipped`` during classification.

Whole-archive failures (not a ZIP, zip-bomb, >500 files) return 400 before
any DB writes; a re-upload whose ZIP-named folder already exists returns 409.
Per-member failures (unsupported type, oversized) surface in the polled
workflow results, not in this response. Each member reuses the single-file
ingest path, so run-enrollment and completion events fire per member there.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.ingest_zip_response import IngestZipResponse
from ksapi.models.ingestion_mode import IngestionMode
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
    api_instance = ksapi.DocumentsApi(api_client)
    file = None # bytes | 
    path_part_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Parent path part ID (must be a FOLDER type)
    ingestion_mode = ksapi.IngestionMode() # IngestionMode |  (optional)
    tag_ids = None # List[UUID] | Tag IDs applied to every ingested member document. (optional)

    try:
        # Ingest Zip Handler
        api_response = api_instance.ingest_zip(file, path_part_id, ingestion_mode=ingestion_mode, tag_ids=tag_ids)
        print("The response of DocumentsApi->ingest_zip:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentsApi->ingest_zip: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **bytes**|  | 
 **path_part_id** | **UUID**| Parent path part ID (must be a FOLDER type) | 
 **ingestion_mode** | [**IngestionMode**](IngestionMode.md)|  | [optional] 
 **tag_ids** | [**List[UUID]**](UUID.md)| Tag IDs applied to every ingested member document. | [optional] 

### Return type

[**IngestZipResponse**](IngestZipResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Successful Response |  -  |
**422** | Validation Error |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_documents**
> PaginatedResponseDocumentResponse list_documents(parent_path_part_id=parent_path_part_id, sort_order=sort_order, sort_dir=sort_dir, owner_id=owner_id, document_type=document_type, with_tags=with_tags, limit=limit, offset=offset, created_after=created_after, created_before=created_before, updated_after=updated_after, updated_before=updated_before)

List Documents Handler

List documents in a folder.

Returns only direct child documents (depth=1) of the specified parent folder.
If parent_path_part_id is not provided, lists top-level documents.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.document_type import DocumentType
from ksapi.models.paginated_response_document_response import PaginatedResponseDocumentResponse
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
    api_instance = ksapi.DocumentsApi(api_client)
    parent_path_part_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Parent PathPart ID (defaults to root) (optional)
    sort_order = ksapi.PathOrder() # PathOrder | Sort order for results (default: LOGICAL) (optional)
    sort_dir = ksapi.SortDirection() # SortDirection | Sort direction; overrides the column's natural default (optional)
    owner_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Filter to documents owned by this user (optional)
    document_type = ksapi.DocumentType() # DocumentType | Filter to documents of this type (optional)
    with_tags = False # bool | Include tags in the response (default: false) (optional) (default to False)
    limit = 20 # int | Number of items per page (optional) (default to 20)
    offset = 0 # int | Number of items to skip (optional) (default to 0)
    created_after = '2013-10-20T19:20:30+01:00' # datetime | Only items created at or after this timestamp (inclusive) (optional)
    created_before = '2013-10-20T19:20:30+01:00' # datetime | Only items created strictly before this timestamp (optional)
    updated_after = '2013-10-20T19:20:30+01:00' # datetime | Only items updated at or after this timestamp (inclusive) (optional)
    updated_before = '2013-10-20T19:20:30+01:00' # datetime | Only items updated strictly before this timestamp (optional)

    try:
        # List Documents Handler
        api_response = api_instance.list_documents(parent_path_part_id=parent_path_part_id, sort_order=sort_order, sort_dir=sort_dir, owner_id=owner_id, document_type=document_type, with_tags=with_tags, limit=limit, offset=offset, created_after=created_after, created_before=created_before, updated_after=updated_after, updated_before=updated_before)
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
 **sort_dir** | [**SortDirection**](.md)| Sort direction; overrides the column&#39;s natural default | [optional] 
 **owner_id** | **UUID**| Filter to documents owned by this user | [optional] 
 **document_type** | [**DocumentType**](.md)| Filter to documents of this type | [optional] 
 **with_tags** | **bool**| Include tags in the response (default: false) | [optional] [default to False]
 **limit** | **int**| Number of items per page | [optional] [default to 20]
 **offset** | **int**| Number of items to skip | [optional] [default to 0]
 **created_after** | **datetime**| Only items created at or after this timestamp (inclusive) | [optional] 
 **created_before** | **datetime**| Only items created strictly before this timestamp | [optional] 
 **updated_after** | **datetime**| Only items updated at or after this timestamp (inclusive) | [optional] 
 **updated_before** | **datetime**| Only items updated strictly before this timestamp | [optional] 

### Return type

[**PaginatedResponseDocumentResponse**](PaginatedResponseDocumentResponse.md)

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

# **update_document**
> DocumentResponse update_document(document_id, update_document_request)

Update Document Handler

Update a document (rename, move, change active version, Qdrant exclusion).

To rename: provide `name` field.
To move: provide `parent_path_part_id` field.
To change active version: provide `active_version_id` field.
To toggle Qdrant exclusion: provide `exclude_from_qdrant` field.
Any combination can be sent in a single request.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

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
    api_instance = ksapi.DocumentsApi(api_client)
    document_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    update_document_request = ksapi.UpdateDocumentRequest() # UpdateDocumentRequest | 

    try:
        # Update Document Handler
        api_response = api_instance.update_document(document_id, update_document_request)
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

### Return type

[**DocumentResponse**](DocumentResponse.md)

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

# **upload_document_part**
> UploadPartResponse upload_document_part(part_number, x_upload_token, body)

Upload Document Part Handler

Upload one part (raw octet-stream body) of a resumable upload.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.upload_part_response import UploadPartResponse
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
    api_instance = ksapi.DocumentsApi(api_client)
    part_number = 56 # int | 
    x_upload_token = 'x_upload_token_example' # str | 
    body = None # bytes | 

    try:
        # Upload Document Part Handler
        api_response = api_instance.upload_document_part(part_number, x_upload_token, body)
        print("The response of DocumentsApi->upload_document_part:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentsApi->upload_document_part: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **part_number** | **int**|  | 
 **x_upload_token** | **str**|  | 
 **body** | **bytes**|  | 

### Return type

[**UploadPartResponse**](UploadPartResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/octet-stream
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

