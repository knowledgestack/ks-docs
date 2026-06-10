# DocumentVersionsApi

All URIs are relative to *http://localhost:8000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**clearDocumentVersionContents**](DocumentVersionsApi.md#cleardocumentversioncontents) | **DELETE** /v1/document_versions/{version_id}/contents | Clear Document Version Contents Handler |
| [**createDocumentVersion**](DocumentVersionsApi.md#createdocumentversion) | **POST** /v1/documents/{document_id}/versions | Create Document Version Handler |
| [**deleteDocumentVersion**](DocumentVersionsApi.md#deletedocumentversion) | **DELETE** /v1/document_versions/{version_id} | Delete Document Version Handler |
| [**documentVersionAction**](DocumentVersionsApi.md#documentversionaction) | **POST** /v1/document_versions/{version_id} | Document Version Action Handler |
| [**downloadDocumentVersion**](DocumentVersionsApi.md#downloaddocumentversion) | **POST** /v1/document_versions/{version_id}/download | Download Document Version Handler |
| [**getDocumentVersion**](DocumentVersionsApi.md#getdocumentversion) | **GET** /v1/document_versions/{version_id} | Get Document Version Handler |
| [**getDocumentVersionContents**](DocumentVersionsApi.md#getdocumentversioncontents) | **GET** /v1/document_versions/{version_id}/contents | Get Document Version Contents Handler |
| [**getDocumentVersionDiff**](DocumentVersionsApi.md#getdocumentversiondiff) | **GET** /v1/document_versions/{version_id}/diff | Get Document Version Diff Handler |
| [**listDocumentVersions**](DocumentVersionsApi.md#listdocumentversions) | **GET** /v1/document_versions | List Document Versions Handler |
| [**updateDocumentVersionMetadata**](DocumentVersionsApi.md#updatedocumentversionmetadata) | **PATCH** /v1/document_versions/{version_id}/metadata | Update Document Version Metadata Handler |



## clearDocumentVersionContents

> ClearVersionContentsResponse clearDocumentVersionContents(versionId)

Clear Document Version Contents Handler

Delete all sections and chunks under a document version.  Removes all content (sections and chunks) from the version while keeping the version itself intact. Used by the ingestion pipeline for idempotent re-processing.

### Example

```ts
import {
  Configuration,
  DocumentVersionsApi,
} from '@knowledge-stack/ksapi';
import type { ClearDocumentVersionContentsRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DocumentVersionsApi(config);

  const body = {
    // string | DocumentVersion ID
    versionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies ClearDocumentVersionContentsRequest;

  try {
    const data = await api.clearDocumentVersionContents(body);
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
| **versionId** | `string` | DocumentVersion ID | [Defaults to `undefined`] |

### Return type

[**ClearVersionContentsResponse**](ClearVersionContentsResponse.md)

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


## createDocumentVersion

> DocumentVersionResponse createDocumentVersion(documentId)

Create Document Version Handler

Create a new version for a document.  The version number is automatically incremented from the highest existing version.

### Example

```ts
import {
  Configuration,
  DocumentVersionsApi,
} from '@knowledge-stack/ksapi';
import type { CreateDocumentVersionRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DocumentVersionsApi(config);

  const body = {
    // string | Document ID
    documentId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies CreateDocumentVersionRequest;

  try {
    const data = await api.createDocumentVersion(body);
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

### Return type

[**DocumentVersionResponse**](DocumentVersionResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteDocumentVersion

> deleteDocumentVersion(versionId)

Delete Document Version Handler

Delete a document version by its ID.  Cannot delete the active version of a document.

### Example

```ts
import {
  Configuration,
  DocumentVersionsApi,
} from '@knowledge-stack/ksapi';
import type { DeleteDocumentVersionRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DocumentVersionsApi(config);

  const body = {
    // string | DocumentVersion ID
    versionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteDocumentVersionRequest;

  try {
    const data = await api.deleteDocumentVersion(body);
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
| **versionId** | `string` | DocumentVersion ID | [Defaults to `undefined`] |

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


## documentVersionAction

> DocumentVersionActionResponse documentVersionAction(versionId, action)

Document Version Action Handler

Perform an action on a document version.  Supported actions: - &#x60;reembed&#x60;: Re-embed all chunks for this version into Qdrant.

### Example

```ts
import {
  Configuration,
  DocumentVersionsApi,
} from '@knowledge-stack/ksapi';
import type { DocumentVersionActionRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DocumentVersionsApi(config);

  const body = {
    // string | DocumentVersion ID
    versionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // DocumentVersionAction | Action to perform
    action: ...,
  } satisfies DocumentVersionActionRequest;

  try {
    const data = await api.documentVersionAction(body);
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
| **versionId** | `string` | DocumentVersion ID | [Defaults to `undefined`] |
| **action** | `DocumentVersionAction` | Action to perform | [Defaults to `undefined`] [Enum: reembed] |

### Return type

[**DocumentVersionActionResponse**](DocumentVersionActionResponse.md)

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


## downloadDocumentVersion

> DocumentDownloadResponse downloadDocumentVersion(versionId, artifact)

Download Document Version Handler

Issue a short-lived, audited download link for a specific version.  Records a &#x60;&#x60;document.downloaded&#x60;&#x60; audit event anchored to the document so the customer audit log captures who downloaded which version and when.

### Example

```ts
import {
  Configuration,
  DocumentVersionsApi,
} from '@knowledge-stack/ksapi';
import type { DownloadDocumentVersionRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DocumentVersionsApi(config);

  const body = {
    // string | DocumentVersion ID
    versionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // DownloadArtifact | Artifact to download: source or fast_plaintext (optional)
    artifact: ...,
  } satisfies DownloadDocumentVersionRequest;

  try {
    const data = await api.downloadDocumentVersion(body);
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
| **versionId** | `string` | DocumentVersion ID | [Defaults to `undefined`] |
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


## getDocumentVersion

> DocumentVersionResponse getDocumentVersion(versionId, includePageScreenshots)

Get Document Version Handler

### Example

```ts
import {
  Configuration,
  DocumentVersionsApi,
} from '@knowledge-stack/ksapi';
import type { GetDocumentVersionRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DocumentVersionsApi(config);

  const body = {
    // string | DocumentVersion ID
    versionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // boolean | When true, populate page_screenshot_urls with presigned URLs for every per-page WEBP screenshot the ingestion pipeline produced. Off by default to keep typical responses small. (optional)
    includePageScreenshots: true,
  } satisfies GetDocumentVersionRequest;

  try {
    const data = await api.getDocumentVersion(body);
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
| **versionId** | `string` | DocumentVersion ID | [Defaults to `undefined`] |
| **includePageScreenshots** | `boolean` | When true, populate page_screenshot_urls with presigned URLs for every per-page WEBP screenshot the ingestion pipeline produced. Off by default to keep typical responses small. | [Optional] [Defaults to `false`] |

### Return type

[**DocumentVersionResponse**](DocumentVersionResponse.md)

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


## getDocumentVersionContents

> PaginatedResponseAnnotatedUnionSectionContentItemChunkContentItemDiscriminator getDocumentVersionContents(versionId, sectionId, contentType, limit, offset)

Get Document Version Contents Handler

List all sections and chunks for a document version in depth-first logical order.  Returns a discriminated union of SectionContentItem and ChunkContentItem, distinguished by the &#x60;part_type&#x60; field (\&quot;SECTION\&quot; or \&quot;CHUNK\&quot;).  Use &#x60;content_type&#x60; to return only one type (e.g. &#x60;content_type&#x3D;CHUNK&#x60; for chunk-only pagination where offset/limit apply only to chunks).

### Example

```ts
import {
  Configuration,
  DocumentVersionsApi,
} from '@knowledge-stack/ksapi';
import type { GetDocumentVersionContentsRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DocumentVersionsApi(config);

  const body = {
    // string | DocumentVersion ID
    versionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Optional section ID to scope traversal to a subtree (optional)
    sectionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // DocumentVersionContentTypeFilter | Filter by content type: SECTION or CHUNK. Omit to return both types. (optional)
    contentType: ...,
    // number | Number of items per page (optional)
    limit: 56,
    // number | Number of items to skip (optional)
    offset: 56,
  } satisfies GetDocumentVersionContentsRequest;

  try {
    const data = await api.getDocumentVersionContents(body);
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
| **versionId** | `string` | DocumentVersion ID | [Defaults to `undefined`] |
| **sectionId** | `string` | Optional section ID to scope traversal to a subtree | [Optional] [Defaults to `undefined`] |
| **contentType** | `DocumentVersionContentTypeFilter` | Filter by content type: SECTION or CHUNK. Omit to return both types. | [Optional] [Defaults to `undefined`] [Enum: SECTION, CHUNK] |
| **limit** | `number` | Number of items per page | [Optional] [Defaults to `20`] |
| **offset** | `number` | Number of items to skip | [Optional] [Defaults to `0`] |

### Return type

[**PaginatedResponseAnnotatedUnionSectionContentItemChunkContentItemDiscriminator**](PaginatedResponseAnnotatedUnionSectionContentItemChunkContentItemDiscriminator.md)

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


## getDocumentVersionDiff

> VersionDiffResponse getDocumentVersionDiff(versionId, fromVersionId)

Get Document Version Diff Handler

Side-by-side diff of a version against a previous one of the same document.  Diffs the two versions\&#39; plaintext on the fly (no stored diff), so any pair of versions can be compared. &#x60;&#x60;from_version_id&#x60;&#x60; defaults to the immediate predecessor; the first version diffs against empty (all additions). Requires read permission on the document.

### Example

```ts
import {
  Configuration,
  DocumentVersionsApi,
} from '@knowledge-stack/ksapi';
import type { GetDocumentVersionDiffRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DocumentVersionsApi(config);

  const body = {
    // string | The new (right) version ID
    versionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | The old (left) version; defaults to the predecessor (optional)
    fromVersionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetDocumentVersionDiffRequest;

  try {
    const data = await api.getDocumentVersionDiff(body);
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
| **versionId** | `string` | The new (right) version ID | [Defaults to `undefined`] |
| **fromVersionId** | `string` | The old (left) version; defaults to the predecessor | [Optional] [Defaults to `undefined`] |

### Return type

[**VersionDiffResponse**](VersionDiffResponse.md)

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


## listDocumentVersions

> PaginatedResponseDocumentVersionResponse listDocumentVersions(documentId, limit, offset)

List Document Versions Handler

List all versions for a document.  Returns versions ordered by version number ascending (v0, v1, v2...).

### Example

```ts
import {
  Configuration,
  DocumentVersionsApi,
} from '@knowledge-stack/ksapi';
import type { ListDocumentVersionsRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DocumentVersionsApi(config);

  const body = {
    // string | Document ID to list versions for
    documentId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // number | Number of items per page (optional)
    limit: 56,
    // number | Number of items to skip (optional)
    offset: 56,
  } satisfies ListDocumentVersionsRequest;

  try {
    const data = await api.listDocumentVersions(body);
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
| **documentId** | `string` | Document ID to list versions for | [Defaults to `undefined`] |
| **limit** | `number` | Number of items per page | [Optional] [Defaults to `20`] |
| **offset** | `number` | Number of items to skip | [Optional] [Defaults to `0`] |

### Return type

[**PaginatedResponseDocumentVersionResponse**](PaginatedResponseDocumentVersionResponse.md)

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


## updateDocumentVersionMetadata

> DocumentVersionResponse updateDocumentVersionMetadata(versionId, documentVersionMetadataUpdate)

Update Document Version Metadata Handler

Merge metadata fields into an existing document version\&#39;s metadata.  Only non-null fields in the request body are merged; existing metadata fields not present in the request are preserved.

### Example

```ts
import {
  Configuration,
  DocumentVersionsApi,
} from '@knowledge-stack/ksapi';
import type { UpdateDocumentVersionMetadataRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DocumentVersionsApi(config);

  const body = {
    // string | DocumentVersion ID
    versionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // DocumentVersionMetadataUpdate
    documentVersionMetadataUpdate: ...,
  } satisfies UpdateDocumentVersionMetadataRequest;

  try {
    const data = await api.updateDocumentVersionMetadata(body);
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
| **versionId** | `string` | DocumentVersion ID | [Defaults to `undefined`] |
| **documentVersionMetadataUpdate** | [DocumentVersionMetadataUpdate](DocumentVersionMetadataUpdate.md) |  | |

### Return type

[**DocumentVersionResponse**](DocumentVersionResponse.md)

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

