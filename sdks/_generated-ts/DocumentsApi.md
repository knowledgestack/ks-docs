# DocumentsApi

All URIs are relative to *http://localhost:8000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createDocument**](DocumentsApi.md#createdocumentoperation) | **POST** /v1/documents | Create Document Handler |
| [**deleteDocument**](DocumentsApi.md#deletedocument) | **DELETE** /v1/documents/{document_id} | Delete Document Handler |
| [**downloadDocument**](DocumentsApi.md#downloaddocument) | **POST** /v1/documents/{document_id}/download | Download Document Handler |
| [**getDocument**](DocumentsApi.md#getdocument) | **GET** /v1/documents/{document_id} | Get Document Handler |
| [**ingestDocument**](DocumentsApi.md#ingestdocument) | **POST** /v1/documents/ingest | Ingest Document Handler |
| [**ingestDocumentVersion**](DocumentsApi.md#ingestdocumentversion) | **POST** /v1/documents/{document_id}/ingest | Ingest Document Version Handler |
| [**listDocuments**](DocumentsApi.md#listdocuments) | **GET** /v1/documents | List Documents Handler |
| [**updateDocument**](DocumentsApi.md#updatedocumentoperation) | **PATCH** /v1/documents/{document_id} | Update Document Handler |



## createDocument

> DocumentResponse createDocument(createDocumentRequest)

Create Document Handler

Create a new document with initial v0 version.  The document is created as a child of the specified parent folder. An initial version (v0) is automatically created.

### Example

```ts
import {
  Configuration,
  DocumentsApi,
} from '@knowledge-stack/ksapi';
import type { CreateDocumentOperationRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DocumentsApi(config);

  const body = {
    // CreateDocumentRequest
    createDocumentRequest: ...,
  } satisfies CreateDocumentOperationRequest;

  try {
    const data = await api.createDocument(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **createDocumentRequest** | [CreateDocumentRequest](CreateDocumentRequest.md) |  | |

### Return type

[**DocumentResponse**](DocumentResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteDocument

> deleteDocument(documentId)

Delete Document Handler

Move a document and all its contents to trash.

### Example

```ts
import {
  Configuration,
  DocumentsApi,
} from '@knowledge-stack/ksapi';
import type { DeleteDocumentRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DocumentsApi(config);

  const body = {
    // string
    documentId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteDocumentRequest;

  try {
    const data = await api.deleteDocument(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **documentId** | `string` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## downloadDocument

> DocumentDownloadResponse downloadDocument(documentId, artifact)

Download Document Handler

Issue a short-lived, audited download link for a document\&#39;s active version.  Records a &#x60;&#x60;document.downloaded&#x60;&#x60; audit event so the customer audit log captures who downloaded which document/version and when.

### Example

```ts
import {
  Configuration,
  DocumentsApi,
} from '@knowledge-stack/ksapi';
import type { DownloadDocumentRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DocumentsApi(config);

  const body = {
    // string
    documentId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // DownloadArtifact | Artifact to download: source or fast_plaintext (optional)
    artifact: ...,
  } satisfies DownloadDocumentRequest;

  try {
    const data = await api.downloadDocument(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **documentId** | `string` |  | [Defaults to `undefined`] |
| **artifact** | `DownloadArtifact` | Artifact to download: source or fast_plaintext | [Optional] [Defaults to `undefined`] [Enum: source, fast_plaintext] |

### Return type

[**DocumentDownloadResponse**](DocumentDownloadResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDocument

> DocumentResponse getDocument(documentId, withTags)

Get Document Handler

### Example

```ts
import {
  Configuration,
  DocumentsApi,
} from '@knowledge-stack/ksapi';
import type { GetDocumentRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DocumentsApi(config);

  const body = {
    // string
    documentId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // boolean | Include tags in the response (default: false) (optional)
    withTags: true,
  } satisfies GetDocumentRequest;

  try {
    const data = await api.getDocument(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **documentId** | `string` |  | [Defaults to `undefined`] |
| **withTags** | `boolean` | Include tags in the response (default: false) | [Optional] [Defaults to `false`] |

### Return type

[**DocumentResponse**](DocumentResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## ingestDocument

> IngestDocumentResponse ingestDocument(file, pathPartId, name, ingestionMode, chunkType, secondaryTaxonomy, pageDpi, workflowRunId, workflowDefinitionId)

Ingest Document Handler

Upload a file, create document + version, and trigger ingestion workflow.  Returns 201 with the Temporal workflow ID.

### Example

```ts
import {
  Configuration,
  DocumentsApi,
} from '@knowledge-stack/ksapi';
import type { IngestDocumentRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DocumentsApi(config);

  const body = {
    // Blob
    file: BINARY_DATA_HERE,
    // string | Parent path part ID (must be a FOLDER type)
    pathPartId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Document name (defaults to filename) (optional)
    name: name_example,
    // IngestionMode (optional)
    ingestionMode: ...,
    // ChunkType (optional)
    chunkType: ...,
    // ImageTaxonomy (optional)
    secondaryTaxonomy: ...,
    // number | DPI for PDF page screenshots (default 72, min 36, max 216). (optional)
    pageDpi: 56,
    // string | Workflow run context for assumed agent uploads. (optional)
    workflowRunId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Workflow definition context for assumed agent uploads. (optional)
    workflowDefinitionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies IngestDocumentRequest;

  try {
    const data = await api.ingestDocument(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **file** | `Blob` |  | [Defaults to `undefined`] |
| **pathPartId** | `string` | Parent path part ID (must be a FOLDER type) | [Defaults to `undefined`] |
| **name** | `string` | Document name (defaults to filename) | [Optional] [Defaults to `undefined`] |
| **ingestionMode** | `IngestionMode` |  | [Optional] [Defaults to `undefined`] [Enum: high_accuracy, standard, single_chunk] |
| **chunkType** | `ChunkType` |  | [Optional] [Defaults to `undefined`] [Enum: TEXT, TABLE, IMAGE, HTML, UNKNOWN] |
| **secondaryTaxonomy** | `ImageTaxonomy` |  | [Optional] [Defaults to `undefined`] [Enum: picture, flowchart] |
| **pageDpi** | `number` | DPI for PDF page screenshots (default 72, min 36, max 216). | [Optional] [Defaults to `72`] |
| **workflowRunId** | `string` | Workflow run context for assumed agent uploads. | [Optional] [Defaults to `undefined`] |
| **workflowDefinitionId** | `string` | Workflow definition context for assumed agent uploads. | [Optional] [Defaults to `undefined`] |

### Return type

[**IngestDocumentResponse**](IngestDocumentResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## ingestDocumentVersion

> IngestDocumentResponse ingestDocumentVersion(documentId, file, ingestionMode, chunkType, secondaryTaxonomy, pageDpi, workflowRunId, workflowDefinitionId)

Ingest Document Version Handler

Upload a new file for an existing document, creating a new version and triggering ingestion.  Creates a new document version (incrementing the highest version number), uploads the file to S3, and starts the ingestion workflow. Upon successful ingestion, the new version is automatically activated (set as the document\&#39;s active_version) and the old version\&#39;s Qdrant points are deactivated.  Returns 201 with the Temporal workflow ID.

### Example

```ts
import {
  Configuration,
  DocumentsApi,
} from '@knowledge-stack/ksapi';
import type { IngestDocumentVersionRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DocumentsApi(config);

  const body = {
    // string | Document ID
    documentId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // Blob
    file: BINARY_DATA_HERE,
    // IngestionMode (optional)
    ingestionMode: ...,
    // ChunkType (optional)
    chunkType: ...,
    // ImageTaxonomy (optional)
    secondaryTaxonomy: ...,
    // number | DPI for PDF page screenshots (default 72, min 36, max 216). (optional)
    pageDpi: 56,
    // string | Workflow run context for assumed agent uploads. (optional)
    workflowRunId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Workflow definition context for assumed agent uploads. (optional)
    workflowDefinitionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies IngestDocumentVersionRequest;

  try {
    const data = await api.ingestDocumentVersion(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **documentId** | `string` | Document ID | [Defaults to `undefined`] |
| **file** | `Blob` |  | [Defaults to `undefined`] |
| **ingestionMode** | `IngestionMode` |  | [Optional] [Defaults to `undefined`] [Enum: high_accuracy, standard, single_chunk] |
| **chunkType** | `ChunkType` |  | [Optional] [Defaults to `undefined`] [Enum: TEXT, TABLE, IMAGE, HTML, UNKNOWN] |
| **secondaryTaxonomy** | `ImageTaxonomy` |  | [Optional] [Defaults to `undefined`] [Enum: picture, flowchart] |
| **pageDpi** | `number` | DPI for PDF page screenshots (default 72, min 36, max 216). | [Optional] [Defaults to `72`] |
| **workflowRunId** | `string` | Workflow run context for assumed agent uploads. | [Optional] [Defaults to `undefined`] |
| **workflowDefinitionId** | `string` | Workflow definition context for assumed agent uploads. | [Optional] [Defaults to `undefined`] |

### Return type

[**IngestDocumentResponse**](IngestDocumentResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listDocuments

> PaginatedResponseDocumentResponse listDocuments(parentPathPartId, sortOrder, withTags, limit, offset)

List Documents Handler

List documents in a folder.  Returns only direct child documents (depth&#x3D;1) of the specified parent folder. If parent_path_part_id is not provided, lists top-level documents.

### Example

```ts
import {
  Configuration,
  DocumentsApi,
} from '@knowledge-stack/ksapi';
import type { ListDocumentsRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DocumentsApi(config);

  const body = {
    // string | Parent PathPart ID (defaults to root) (optional)
    parentPathPartId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // PathOrder | Sort order for results (default: LOGICAL) (optional)
    sortOrder: ...,
    // boolean | Include tags in the response (default: false) (optional)
    withTags: true,
    // number | Number of items per page (optional)
    limit: 56,
    // number | Number of items to skip (optional)
    offset: 56,
  } satisfies ListDocumentsRequest;

  try {
    const data = await api.listDocuments(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **parentPathPartId** | `string` | Parent PathPart ID (defaults to root) | [Optional] [Defaults to `undefined`] |
| **sortOrder** | `PathOrder` | Sort order for results (default: LOGICAL) | [Optional] [Defaults to `undefined`] [Enum: LOGICAL, NAME, UPDATED_AT, CREATED_AT] |
| **withTags** | `boolean` | Include tags in the response (default: false) | [Optional] [Defaults to `false`] |
| **limit** | `number` | Number of items per page | [Optional] [Defaults to `20`] |
| **offset** | `number` | Number of items to skip | [Optional] [Defaults to `0`] |

### Return type

[**PaginatedResponseDocumentResponse**](PaginatedResponseDocumentResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateDocument

> DocumentResponse updateDocument(documentId, updateDocumentRequest)

Update Document Handler

Update a document (rename, move, change active version, Qdrant exclusion).  To rename: provide &#x60;name&#x60; field. To move: provide &#x60;parent_path_part_id&#x60; field. To change active version: provide &#x60;active_version_id&#x60; field. To toggle Qdrant exclusion: provide &#x60;exclude_from_qdrant&#x60; field. Any combination can be sent in a single request.

### Example

```ts
import {
  Configuration,
  DocumentsApi,
} from '@knowledge-stack/ksapi';
import type { UpdateDocumentOperationRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DocumentsApi(config);

  const body = {
    // string
    documentId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateDocumentRequest
    updateDocumentRequest: ...,
  } satisfies UpdateDocumentOperationRequest;

  try {
    const data = await api.updateDocument(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **documentId** | `string` |  | [Defaults to `undefined`] |
| **updateDocumentRequest** | [UpdateDocumentRequest](UpdateDocumentRequest.md) |  | |

### Return type

[**DocumentResponse**](DocumentResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

