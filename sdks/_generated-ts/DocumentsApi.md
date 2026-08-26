# DocumentsApi

All URIs are relative to *http://localhost:8000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**abortDocumentUpload**](DocumentsApi.md#abortdocumentupload) | **DELETE** /v1/documents/uploads | Abort Document Upload Handler |
| [**completeDocumentUpload**](DocumentsApi.md#completedocumentupload) | **POST** /v1/documents/uploads/complete | Complete Document Upload Handler |
| [**createDocument**](DocumentsApi.md#createdocumentoperation) | **POST** /v1/documents | Create Document Handler |
| [**createDocumentUpload**](DocumentsApi.md#createdocumentupload) | **POST** /v1/documents/uploads | Create Document Upload Handler |
| [**deleteDocument**](DocumentsApi.md#deletedocument) | **DELETE** /v1/documents/{document_id} | Delete Document Handler |
| [**downloadDocument**](DocumentsApi.md#downloaddocument) | **POST** /v1/documents/{document_id}/download | Download Document Handler |
| [**getDocument**](DocumentsApi.md#getdocument) | **GET** /v1/documents/{document_id} | Get Document Handler |
| [**getDocumentUploadStatus**](DocumentsApi.md#getdocumentuploadstatus) | **GET** /v1/documents/uploads/parts | Get Document Upload Status Handler |
| [**ingestDocument**](DocumentsApi.md#ingestdocument) | **POST** /v1/documents/ingest | Ingest Document Handler |
| [**ingestDocumentVersion**](DocumentsApi.md#ingestdocumentversion) | **POST** /v1/documents/{document_id}/ingest | Ingest Document Version Handler |
| [**ingestZip**](DocumentsApi.md#ingestzip) | **POST** /v1/documents/ingest-zip | Ingest Zip Handler |
| [**listDocuments**](DocumentsApi.md#listdocuments) | **GET** /v1/documents | List Documents Handler |
| [**updateDocument**](DocumentsApi.md#updatedocumentoperation) | **PATCH** /v1/documents/{document_id} | Update Document Handler |
| [**uploadDocumentPart**](DocumentsApi.md#uploaddocumentpart) | **PUT** /v1/documents/uploads/parts/{part_number} | Upload Document Part Handler |



## abortDocumentUpload

> abortDocumentUpload(xUploadToken)

Abort Document Upload Handler

Discard an in-progress resumable upload and its parts.

### Example

```ts
import {
  Configuration,
  DocumentsApi,
} from '@knowledge-stack/ksapi';
import type { AbortDocumentUploadRequest } from '@knowledge-stack/ksapi';

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
    xUploadToken: xUploadToken_example,
  } satisfies AbortDocumentUploadRequest;

  try {
    const data = await api.abortDocumentUpload(body);
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
| **xUploadToken** | `string` |  | [Defaults to `undefined`] |

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
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## completeDocumentUpload

> IngestDocumentResponse completeDocumentUpload(completeUploadRequest)

Complete Document Upload Handler

Assemble the uploaded parts, create the document, and start ingestion.

### Example

```ts
import {
  Configuration,
  DocumentsApi,
} from '@knowledge-stack/ksapi';
import type { CompleteDocumentUploadRequest } from '@knowledge-stack/ksapi';

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
    // CompleteUploadRequest
    completeUploadRequest: ...,
  } satisfies CompleteDocumentUploadRequest;

  try {
    const data = await api.completeDocumentUpload(body);
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
| **completeUploadRequest** | [CompleteUploadRequest](CompleteUploadRequest.md) |  | |

### Return type

[**IngestDocumentResponse**](IngestDocumentResponse.md)

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
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


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
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createDocumentUpload

> CreateUploadResponse createDocumentUpload(createUploadRequest)

Create Document Upload Handler

Begin a resumable multipart upload for a large file (audio/video/…).  Returns an opaque &#x60;&#x60;upload_token&#x60;&#x60;. Stream the file as parts to &#x60;&#x60;PUT /v1/documents/uploads/parts/{part_number}&#x60;&#x60; (every part except the last at least 5 MiB), then &#x60;&#x60;POST /v1/documents/uploads/complete&#x60;&#x60;. A dropped part is re-sent alone — &#x60;&#x60;GET /v1/documents/uploads/parts&#x60;&#x60; reports what landed.

### Example

```ts
import {
  Configuration,
  DocumentsApi,
} from '@knowledge-stack/ksapi';
import type { CreateDocumentUploadRequest } from '@knowledge-stack/ksapi';

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
    // CreateUploadRequest
    createUploadRequest: ...,
  } satisfies CreateDocumentUploadRequest;

  try {
    const data = await api.createDocumentUpload(body);
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
| **createUploadRequest** | [CreateUploadRequest](CreateUploadRequest.md) |  | |

### Return type

[**CreateUploadResponse**](CreateUploadResponse.md)

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
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteDocument

> deleteDocument(documentId)

Delete Document Handler

Move a document and all its contents to trash.  Requires an active document checkout held by the caller. Acquire one via &#x60;&#x60;POST /v1/documents/{id}/checkout&#x60;&#x60; first; otherwise this returns 409 Conflict (\&quot;A document checkout is required to edit this document.\&quot;).

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
| **0** | Error response. |  -  |

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
    // DownloadArtifact | Artifact to download: source, fast_plaintext, or transcript (media only) (optional)
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
| **artifact** | `DownloadArtifact` | Artifact to download: source, fast_plaintext, or transcript (media only) | [Optional] [Defaults to `undefined`] [Enum: source, fast_plaintext, transcript] |

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
| **0** | Error response. |  -  |

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
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDocumentUploadStatus

> UploadStatusResponse getDocumentUploadStatus(xUploadToken)

Get Document Upload Status Handler

Report which parts S3 already holds so the client resumes the rest.

### Example

```ts
import {
  Configuration,
  DocumentsApi,
} from '@knowledge-stack/ksapi';
import type { GetDocumentUploadStatusRequest } from '@knowledge-stack/ksapi';

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
    xUploadToken: xUploadToken_example,
  } satisfies GetDocumentUploadStatusRequest;

  try {
    const data = await api.getDocumentUploadStatus(body);
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
| **xUploadToken** | `string` |  | [Defaults to `undefined`] |

### Return type

[**UploadStatusResponse**](UploadStatusResponse.md)

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
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## ingestDocument

> IngestDocumentResponse ingestDocument(file, pathPartId, name, tagIds, idempotencyKey, emailNestingDepth, ingestionMode, chunkType, secondaryTaxonomy, pageDpi, workflowRunId, workflowDefinitionId)

Ingest Document Handler

Upload a file, create document + version, and trigger ingestion workflow.  Returns 201 immediately with the Temporal &#x60;&#x60;workflow_id&#x60;&#x60;. Ingestion runs in the background — poll &#x60;&#x60;GET /v1/system-jobs/document_versions/{workflow_id}&#x60;&#x60; (also given in the &#x60;&#x60;Location&#x60;&#x60; header) until &#x60;&#x60;status&#x60;&#x60; is terminal (anything other than &#x60;&#x60;pending&#x60;&#x60;/&#x60;&#x60;processing&#x60;&#x60;). There is no completion webhook.

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
    // Array<string> | Tag IDs applied to the created document. (optional)
    tagIds: ...,
    // string | Opt-in key: a repeat with the same key at the same (parent, name) replays the existing document instead of a 409. (optional)
    idempotencyKey: idempotencyKey_example,
    // number | Internal: set by the email member fan-out when a nested email re-enters this endpoint. Leave at 0 for direct uploads. (optional)
    emailNestingDepth: 56,
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
| **tagIds** | `Array<string>` | Tag IDs applied to the created document. | [Optional] |
| **idempotencyKey** | `string` | Opt-in key: a repeat with the same key at the same (parent, name) replays the existing document instead of a 409. | [Optional] [Defaults to `undefined`] |
| **emailNestingDepth** | `number` | Internal: set by the email member fan-out when a nested email re-enters this endpoint. Leave at 0 for direct uploads. | [Optional] [Defaults to `0`] |
| **ingestionMode** | `IngestionMode` |  | [Optional] [Defaults to `undefined`] [Enum: high_accuracy, standard, single_chunk, media] |
| **chunkType** | `ChunkType` |  | [Optional] [Defaults to `undefined`] [Enum: TEXT, TABLE, IMAGE, HTML, UNKNOWN] |
| **secondaryTaxonomy** | `ImageTaxonomy` |  | [Optional] [Defaults to `undefined`] [Enum: picture, slide, flowchart] |
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
| **201** | Successful Response |  * Location - Poll this ingestion-status resource until the pipeline reaches a terminal state. <br>  |
| **422** | Validation Error |  -  |
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## ingestDocumentVersion

> IngestDocumentResponse ingestDocumentVersion(documentId, file, ingestionMode, chunkType, secondaryTaxonomy, pageDpi, workflowRunId, workflowDefinitionId)

Ingest Document Version Handler

Upload a new file for an existing document, creating a new version and triggering ingestion.  Requires an active document checkout held by the caller. Acquire one via &#x60;&#x60;POST /v1/documents/{id}/checkout&#x60;&#x60; first and release it after; otherwise this returns 409 Conflict (\&quot;A document checkout is required to edit this document.\&quot;).  Creates a new document version (incrementing the highest version number), uploads the file to S3, and starts the ingestion workflow. Upon successful ingestion, the new version is automatically activated (set as the document\&#39;s active_version) and the old version\&#39;s Qdrant points are deactivated.  Returns 201 immediately with the Temporal &#x60;&#x60;workflow_id&#x60;&#x60;. Ingestion runs in the background — poll &#x60;&#x60;GET /v1/system-jobs/document_versions/{workflow_id}&#x60;&#x60; (also given in the &#x60;&#x60;Location&#x60;&#x60; header) until &#x60;&#x60;status&#x60;&#x60; is terminal.

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
| **ingestionMode** | `IngestionMode` |  | [Optional] [Defaults to `undefined`] [Enum: high_accuracy, standard, single_chunk, media] |
| **chunkType** | `ChunkType` |  | [Optional] [Defaults to `undefined`] [Enum: TEXT, TABLE, IMAGE, HTML, UNKNOWN] |
| **secondaryTaxonomy** | `ImageTaxonomy` |  | [Optional] [Defaults to `undefined`] [Enum: picture, slide, flowchart] |
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
| **201** | Successful Response |  * Location - Poll this ingestion-status resource until the pipeline reaches a terminal state. <br>  |
| **422** | Validation Error |  -  |
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## ingestZip

> IngestZipResponse ingestZip(file, pathPartId, ingestionMode, tagIds)

Ingest Zip Handler

Upload a ZIP archive; ingest each member asynchronously via a fan-out.  The whole archive nests under a single FOLDER named after the ZIP file (&#x60;&#x60;report.zip&#x60;&#x60; -&gt; &#x60;&#x60;report/&#x60;&#x60;), with the ZIP\&#39;s directory structure mirrored beneath it as FOLDER PathParts — all created synchronously. Returns 202 with the fan-out &#x60;&#x60;workflow_id&#x60;&#x60; (poll &#x60;&#x60;GET /v1/system-jobs/zip-ingestions/{workflow_id}&#x60;&#x60; for per-member outcomes) plus the artifacts &#x60;&#x60;skipped&#x60;&#x60; during classification.  Whole-archive failures (not a ZIP, zip-bomb, &gt;500 files) return 400 before any DB writes; a re-upload whose ZIP-named folder already exists returns 409. Per-member failures (unsupported type, oversized) surface in the polled workflow results, not in this response. Each member reuses the single-file ingest path, so run-enrollment and completion events fire per member there.

### Example

```ts
import {
  Configuration,
  DocumentsApi,
} from '@knowledge-stack/ksapi';
import type { IngestZipRequest } from '@knowledge-stack/ksapi';

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
    // IngestionMode (optional)
    ingestionMode: ...,
    // Array<string> | Tag IDs applied to every ingested member document. (optional)
    tagIds: ...,
  } satisfies IngestZipRequest;

  try {
    const data = await api.ingestZip(body);
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
| **ingestionMode** | `IngestionMode` |  | [Optional] [Defaults to `undefined`] [Enum: high_accuracy, standard, single_chunk, media] |
| **tagIds** | `Array<string>` | Tag IDs applied to every ingested member document. | [Optional] |

### Return type

[**IngestZipResponse**](IngestZipResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Successful Response |  -  |
| **422** | Validation Error |  -  |
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listDocuments

> PaginatedResponseDocumentResponse listDocuments(parentPathPartId, sortOrder, sortDir, ownerId, documentType, durationMinMs, durationMaxMs, withTags, limit, offset, createdAfter, createdBefore, updatedAfter, updatedBefore)

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
    // SortDirection | Sort direction; overrides the column\'s natural default (optional)
    sortDir: ...,
    // string | Filter to documents owned by this user (optional)
    ownerId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // DocumentType | Filter to documents of this type (optional)
    documentType: ...,
    // number | Only media whose active version is at least this long (milliseconds). Non-media documents have no duration and are excluded. (optional)
    durationMinMs: 56,
    // number | Only media whose active version is at most this long. (optional)
    durationMaxMs: 56,
    // boolean | Include tags in the response (default: false) (optional)
    withTags: true,
    // number | Number of items per page (optional)
    limit: 56,
    // number | Number of items to skip (optional)
    offset: 56,
    // Date | Only items created at or after this timestamp (inclusive) (optional)
    createdAfter: 2013-10-20T19:20:30+01:00,
    // Date | Only items created strictly before this timestamp (optional)
    createdBefore: 2013-10-20T19:20:30+01:00,
    // Date | Only items updated at or after this timestamp (inclusive) (optional)
    updatedAfter: 2013-10-20T19:20:30+01:00,
    // Date | Only items updated strictly before this timestamp (optional)
    updatedBefore: 2013-10-20T19:20:30+01:00,
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
| **sortDir** | `SortDirection` | Sort direction; overrides the column\&#39;s natural default | [Optional] [Defaults to `undefined`] [Enum: ASC, DESC] |
| **ownerId** | `string` | Filter to documents owned by this user | [Optional] [Defaults to `undefined`] |
| **documentType** | `DocumentType` | Filter to documents of this type | [Optional] [Defaults to `undefined`] [Enum: PDF, DOCX, PLAINTEXT, IMAGE, XLSX, CSV, PPTX, JSON, YAML, CODE, AUDIO, VIDEO, EMAIL, UNKNOWN] |
| **durationMinMs** | `number` | Only media whose active version is at least this long (milliseconds). Non-media documents have no duration and are excluded. | [Optional] [Defaults to `undefined`] |
| **durationMaxMs** | `number` | Only media whose active version is at most this long. | [Optional] [Defaults to `undefined`] |
| **withTags** | `boolean` | Include tags in the response (default: false) | [Optional] [Defaults to `false`] |
| **limit** | `number` | Number of items per page | [Optional] [Defaults to `20`] |
| **offset** | `number` | Number of items to skip | [Optional] [Defaults to `0`] |
| **createdAfter** | `Date` | Only items created at or after this timestamp (inclusive) | [Optional] [Defaults to `undefined`] |
| **createdBefore** | `Date` | Only items created strictly before this timestamp | [Optional] [Defaults to `undefined`] |
| **updatedAfter** | `Date` | Only items updated at or after this timestamp (inclusive) | [Optional] [Defaults to `undefined`] |
| **updatedBefore** | `Date` | Only items updated strictly before this timestamp | [Optional] [Defaults to `undefined`] |

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
| **0** | Error response. |  -  |

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
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## uploadDocumentPart

> UploadPartResponse uploadDocumentPart(partNumber, xUploadToken, body)

Upload Document Part Handler

Upload one part (raw octet-stream body) of a resumable upload.

### Example

```ts
import {
  Configuration,
  DocumentsApi,
} from '@knowledge-stack/ksapi';
import type { UploadDocumentPartRequest } from '@knowledge-stack/ksapi';

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
    // number
    partNumber: 56,
    // string
    xUploadToken: xUploadToken_example,
    // Blob
    body: BINARY_DATA_HERE,
  } satisfies UploadDocumentPartRequest;

  try {
    const data = await api.uploadDocumentPart(body);
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
| **partNumber** | `number` |  | [Defaults to `undefined`] |
| **xUploadToken** | `string` |  | [Defaults to `undefined`] |
| **body** | `Blob` |  | |

### Return type

[**UploadPartResponse**](UploadPartResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/octet-stream`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

