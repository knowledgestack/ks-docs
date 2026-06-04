# DocumentsApi

All URIs are relative to *http://localhost:8000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createDocument**](DocumentsApi.md#createdocumentoperation) | **POST** /v1/documents | Create Document Handler |
| [**deleteDocument**](DocumentsApi.md#deletedocument) | **DELETE** /v1/documents/{document_id} | Delete Document Handler |
| [**getDocument**](DocumentsApi.md#getdocument) | **GET** /v1/documents/{document_id} | Get Document Handler |
| [**ingestDocument**](DocumentsApi.md#ingestdocument) | **POST** /v1/documents/ingest | Ingest Document Handler |
| [**ingestDocumentVersion**](DocumentsApi.md#ingestdocumentversion) | **POST** /v1/documents/{document_id}/ingest | Ingest Document Version Handler |
| [**listDocuments**](DocumentsApi.md#listdocuments) | **GET** /v1/documents | List Documents Handler |
| [**updateDocument**](DocumentsApi.md#updatedocumentoperation) | **PATCH** /v1/documents/{document_id} | Update Document Handler |



## createDocument

> DocumentResponse createDocument(createDocumentRequest, authorization, ksUat)

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
  const api = new DocumentsApi();

  const body = {
    // CreateDocumentRequest
    createDocumentRequest: ...,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
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
| **authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ksUat** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**DocumentResponse**](DocumentResponse.md)

### Authorization

No authorization required

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

> deleteDocument(documentId, authorization, ksUat)

Delete Document Handler

Delete a document and all its contents.  WARNING: This cascades to all children (versions, sections, chunks, etc.) due to parent_id ON DELETE CASCADE.

### Example

```ts
import {
  Configuration,
  DocumentsApi,
} from '@knowledge-stack/ksapi';
import type { DeleteDocumentRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const api = new DocumentsApi();

  const body = {
    // string
    documentId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
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
| **authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ksUat** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDocument

> DocumentResponse getDocument(documentId, withTags, authorization, ksUat)

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
  const api = new DocumentsApi();

  const body = {
    // string
    documentId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // boolean | Include tags in the response (default: false) (optional)
    withTags: true,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
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
| **authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ksUat** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**DocumentResponse**](DocumentResponse.md)

### Authorization

No authorization required

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

> IngestDocumentResponse ingestDocument(file, pathPartId, authorization, ksUat, name, ingestionMode, chunkType, secondaryTaxonomy, pageDpi)

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
  const api = new DocumentsApi();

  const body = {
    // Blob
    file: BINARY_DATA_HERE,
    // string | Parent path part ID (must be a FOLDER type)
    pathPartId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
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
| **authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ksUat** | `string` |  | [Optional] [Defaults to `undefined`] |
| **name** | `string` | Document name (defaults to filename) | [Optional] [Defaults to `undefined`] |
| **ingestionMode** | `IngestionMode` |  | [Optional] [Defaults to `undefined`] [Enum: high_accuracy, standard, single_chunk] |
| **chunkType** | `ChunkType` |  | [Optional] [Defaults to `undefined`] [Enum: TEXT, TABLE, IMAGE, HTML, UNKNOWN] |
| **secondaryTaxonomy** | `ImageTaxonomy` |  | [Optional] [Defaults to `undefined`] [Enum: picture, flowchart] |
| **pageDpi** | `number` | DPI for PDF page screenshots (default 72, min 36, max 216). | [Optional] [Defaults to `72`] |

### Return type

[**IngestDocumentResponse**](IngestDocumentResponse.md)

### Authorization

No authorization required

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

> IngestDocumentResponse ingestDocumentVersion(documentId, file, authorization, ksUat, ingestionMode, chunkType, secondaryTaxonomy, pageDpi)

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
  const api = new DocumentsApi();

  const body = {
    // string | Document ID
    documentId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // Blob
    file: BINARY_DATA_HERE,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
    // IngestionMode (optional)
    ingestionMode: ...,
    // ChunkType (optional)
    chunkType: ...,
    // ImageTaxonomy (optional)
    secondaryTaxonomy: ...,
    // number | DPI for PDF page screenshots (default 72, min 36, max 216). (optional)
    pageDpi: 56,
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
| **authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ksUat** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ingestionMode** | `IngestionMode` |  | [Optional] [Defaults to `undefined`] [Enum: high_accuracy, standard, single_chunk] |
| **chunkType** | `ChunkType` |  | [Optional] [Defaults to `undefined`] [Enum: TEXT, TABLE, IMAGE, HTML, UNKNOWN] |
| **secondaryTaxonomy** | `ImageTaxonomy` |  | [Optional] [Defaults to `undefined`] [Enum: picture, flowchart] |
| **pageDpi** | `number` | DPI for PDF page screenshots (default 72, min 36, max 216). | [Optional] [Defaults to `72`] |

### Return type

[**IngestDocumentResponse**](IngestDocumentResponse.md)

### Authorization

No authorization required

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

> PaginatedResponseDocumentResponse listDocuments(parentPathPartId, sortOrder, withTags, limit, offset, authorization, ksUat)

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
  const api = new DocumentsApi();

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
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
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
| **authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ksUat** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**PaginatedResponseDocumentResponse**](PaginatedResponseDocumentResponse.md)

### Authorization

No authorization required

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

> DocumentResponse updateDocument(documentId, updateDocumentRequest, authorization, ksUat)

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
  const api = new DocumentsApi();

  const body = {
    // string
    documentId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateDocumentRequest
    updateDocumentRequest: ...,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
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
| **authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ksUat** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**DocumentResponse**](DocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

