# FoldersApi

All URIs are relative to *http://localhost:8000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createFolder**](FoldersApi.md#createfolderoperation) | **POST** /v1/folders | Create Folder Handler |
| [**deleteFolder**](FoldersApi.md#deletefolder) | **DELETE** /v1/folders/{folder_id} | Delete Folder Handler |
| [**folderAction**](FoldersApi.md#folderaction) | **POST** /v1/folders/{folder_id} | Folder Action Handler |
| [**getFolder**](FoldersApi.md#getfolder) | **GET** /v1/folders/{folder_id} | Get Folder Handler |
| [**listFolderContents**](FoldersApi.md#listfoldercontents) | **GET** /v1/folders/{folder_id}/contents | List Folder Contents Handler |
| [**listFolders**](FoldersApi.md#listfolders) | **GET** /v1/folders | List Folders Handler |
| [**searchItems**](FoldersApi.md#searchitems) | **GET** /v1/folders/search | Search Items Handler |
| [**updateFolder**](FoldersApi.md#updatefolderoperation) | **PATCH** /v1/folders/{folder_id} | Update Folder Handler |



## createFolder

> FolderResponse createFolder(createFolderRequest)

Create Folder Handler

Create a new folder.  The folder is created as a child of the specified parent folder. It is automatically added to the end of the parent\&#39;s children list.

### Example

```ts
import {
  Configuration,
  FoldersApi,
} from '@knowledge-stack/ksapi';
import type { CreateFolderOperationRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new FoldersApi(config);

  const body = {
    // CreateFolderRequest
    createFolderRequest: ...,
  } satisfies CreateFolderOperationRequest;

  try {
    const data = await api.createFolder(body);
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
| **createFolderRequest** | [CreateFolderRequest](CreateFolderRequest.md) |  | |

### Return type

[**FolderResponse**](FolderResponse.md)

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


## deleteFolder

> deleteFolder(folderId)

Delete Folder Handler

Move a folder and all its contents to trash.

### Example

```ts
import {
  Configuration,
  FoldersApi,
} from '@knowledge-stack/ksapi';
import type { DeleteFolderRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new FoldersApi(config);

  const body = {
    // string
    folderId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteFolderRequest;

  try {
    const data = await api.deleteFolder(body);
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
| **folderId** | `string` |  | [Defaults to `undefined`] |

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


## folderAction

> FolderActionResponse folderAction(folderId, action)

Folder Action Handler

Perform an action on a folder.  Currently supports: - &#x60;reembed&#x60;: Re-embed all documents in the folder and its subfolders.

### Example

```ts
import {
  Configuration,
  FoldersApi,
} from '@knowledge-stack/ksapi';
import type { FolderActionRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new FoldersApi(config);

  const body = {
    // string
    folderId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // FolderAction | Action to perform
    action: ...,
  } satisfies FolderActionRequest;

  try {
    const data = await api.folderAction(body);
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
| **folderId** | `string` |  | [Defaults to `undefined`] |
| **action** | `FolderAction` | Action to perform | [Defaults to `undefined`] [Enum: reembed] |

### Return type

[**FolderActionResponse**](FolderActionResponse.md)

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


## getFolder

> FolderResponse getFolder(folderId, withTags)

Get Folder Handler

### Example

```ts
import {
  Configuration,
  FoldersApi,
} from '@knowledge-stack/ksapi';
import type { GetFolderRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new FoldersApi(config);

  const body = {
    // string
    folderId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // boolean | Include tags in the response (default: false) (optional)
    withTags: true,
  } satisfies GetFolderRequest;

  try {
    const data = await api.getFolder(body);
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
| **folderId** | `string` |  | [Defaults to `undefined`] |
| **withTags** | `boolean` | Include tags in the response (default: false) | [Optional] [Defaults to `false`] |

### Return type

[**FolderResponse**](FolderResponse.md)

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


## listFolderContents

> PaginatedResponseAnnotatedUnionFolderResponseDocumentResponseWorkflowDefinitionResponseWorkflowRunResponseDataSourceResponseDataSourceTableResponseApiConnectionResponseDiscriminator listFolderContents(folderId, maxDepth, sortOrder, withTags, limit, offset)

List Folder Contents Handler

List all contents (folders and documents) under a folder.  Returns a discriminated union of FolderResponse and DocumentResponse items, distinguished by the &#x60;part_type&#x60; field (\&quot;FOLDER\&quot; or \&quot;DOCUMENT\&quot;).  When with_tags&#x3D;true, each item includes a tags field with the full tag objects.  This is the preferred way to list folder contents when you need document metadata. For generic path traversal of folders only, use GET /path-parts.

### Example

```ts
import {
  Configuration,
  FoldersApi,
} from '@knowledge-stack/ksapi';
import type { ListFolderContentsRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new FoldersApi(config);

  const body = {
    // string
    folderId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // number | Maximum depth to traverse (1=direct children, default: 1) (optional)
    maxDepth: 56,
    // PathOrder | Sort order for results (default: LOGICAL) (optional)
    sortOrder: ...,
    // boolean | Include tag IDs for each item (default: false) (optional)
    withTags: true,
    // number | Number of items per page (optional)
    limit: 56,
    // number | Number of items to skip (optional)
    offset: 56,
  } satisfies ListFolderContentsRequest;

  try {
    const data = await api.listFolderContents(body);
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
| **folderId** | `string` |  | [Defaults to `undefined`] |
| **maxDepth** | `number` | Maximum depth to traverse (1&#x3D;direct children, default: 1) | [Optional] [Defaults to `1`] |
| **sortOrder** | `PathOrder` | Sort order for results (default: LOGICAL) | [Optional] [Defaults to `undefined`] [Enum: LOGICAL, NAME, UPDATED_AT, CREATED_AT] |
| **withTags** | `boolean` | Include tag IDs for each item (default: false) | [Optional] [Defaults to `false`] |
| **limit** | `number` | Number of items per page | [Optional] [Defaults to `20`] |
| **offset** | `number` | Number of items to skip | [Optional] [Defaults to `0`] |

### Return type

[**PaginatedResponseAnnotatedUnionFolderResponseDocumentResponseWorkflowDefinitionResponseWorkflowRunResponseDataSourceResponseDataSourceTableResponseApiConnectionResponseDiscriminator**](PaginatedResponseAnnotatedUnionFolderResponseDocumentResponseWorkflowDefinitionResponseWorkflowRunResponseDataSourceResponseDataSourceTableResponseApiConnectionResponseDiscriminator.md)

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


## listFolders

> PaginatedResponseFolderResponse listFolders(parentPathPartId, sortOrder, sortDir, ownerId, withTags, limit, offset, createdAfter, createdBefore, updatedAfter, updatedBefore)

List Folders Handler

List child folders of a parent folder.  Returns only direct child folders (depth&#x3D;1) of the specified parent. If parent_path_part_id is not provided, lists top-level folders.  At root level, the /users folder is hidden and replaced with the current user\&#39;s personal folder (/users/{user_id}) displayed as \&quot;Private\&quot;.

### Example

```ts
import {
  Configuration,
  FoldersApi,
} from '@knowledge-stack/ksapi';
import type { ListFoldersRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new FoldersApi(config);

  const body = {
    // string | Parent PathPart ID (defaults to root) (optional)
    parentPathPartId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // PathOrder | Sort order for results (default: LOGICAL) (optional)
    sortOrder: ...,
    // SortDirection | Sort direction; overrides the column\'s natural default (optional)
    sortDir: ...,
    // string | Filter to folders owned by this user (optional)
    ownerId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
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
  } satisfies ListFoldersRequest;

  try {
    const data = await api.listFolders(body);
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
| **ownerId** | `string` | Filter to folders owned by this user | [Optional] [Defaults to `undefined`] |
| **withTags** | `boolean` | Include tags in the response (default: false) | [Optional] [Defaults to `false`] |
| **limit** | `number` | Number of items per page | [Optional] [Defaults to `20`] |
| **offset** | `number` | Number of items to skip | [Optional] [Defaults to `0`] |
| **createdAfter** | `Date` | Only items created at or after this timestamp (inclusive) | [Optional] [Defaults to `undefined`] |
| **createdBefore** | `Date` | Only items created strictly before this timestamp | [Optional] [Defaults to `undefined`] |
| **updatedAfter** | `Date` | Only items updated at or after this timestamp (inclusive) | [Optional] [Defaults to `undefined`] |
| **updatedBefore** | `Date` | Only items updated strictly before this timestamp | [Optional] [Defaults to `undefined`] |

### Return type

[**PaginatedResponseFolderResponse**](PaginatedResponseFolderResponse.md)

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


## searchItems

> PaginatedResponseAnnotatedUnionFolderResponseDocumentResponseWorkflowDefinitionResponseWorkflowRunResponseDataSourceResponseDataSourceTableResponseApiConnectionResponseDiscriminator searchItems(nameLike, sortOrder, partType, withTags, parentPathPartId, limit, offset)

Search Items Handler

Search for folders and documents by name.  Performs a case-insensitive partial name match using trigram indexing. Results are filtered by the current user\&#39;s path permissions.  When parent_path_part_id is provided, only items under that folder are searched. Otherwise, all accessible items across the tenant are searched.

### Example

```ts
import {
  Configuration,
  FoldersApi,
} from '@knowledge-stack/ksapi';
import type { SearchItemsRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new FoldersApi(config);

  const body = {
    // string | Case-insensitive partial name search
    nameLike: nameLike_example,
    // SearchSortOrder | Sort order for results (default: NAME) (optional)
    sortOrder: ...,
    // SearchablePartType | Filter by item type (default: both folders and documents) (optional)
    partType: ...,
    // boolean | Include tags in the response (default: false) (optional)
    withTags: true,
    // string | Scope search to descendants of this folder\'s path part (optional)
    parentPathPartId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // number | Number of items per page (optional)
    limit: 56,
    // number | Number of items to skip (optional)
    offset: 56,
  } satisfies SearchItemsRequest;

  try {
    const data = await api.searchItems(body);
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
| **nameLike** | `string` | Case-insensitive partial name search | [Defaults to `undefined`] |
| **sortOrder** | `SearchSortOrder` | Sort order for results (default: NAME) | [Optional] [Defaults to `undefined`] [Enum: NAME, UPDATED_AT, CREATED_AT] |
| **partType** | `SearchablePartType` | Filter by item type (default: both folders and documents) | [Optional] [Defaults to `undefined`] [Enum: FOLDER, DOCUMENT] |
| **withTags** | `boolean` | Include tags in the response (default: false) | [Optional] [Defaults to `false`] |
| **parentPathPartId** | `string` | Scope search to descendants of this folder\&#39;s path part | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items per page | [Optional] [Defaults to `20`] |
| **offset** | `number` | Number of items to skip | [Optional] [Defaults to `0`] |

### Return type

[**PaginatedResponseAnnotatedUnionFolderResponseDocumentResponseWorkflowDefinitionResponseWorkflowRunResponseDataSourceResponseDataSourceTableResponseApiConnectionResponseDiscriminator**](PaginatedResponseAnnotatedUnionFolderResponseDocumentResponseWorkflowDefinitionResponseWorkflowRunResponseDataSourceResponseDataSourceTableResponseApiConnectionResponseDiscriminator.md)

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


## updateFolder

> FolderResponse updateFolder(folderId, updateFolderRequest)

Update Folder Handler

Update a folder (rename, move, and/or toggle Qdrant exclusion).  To rename: provide &#x60;name&#x60; field. To move: provide &#x60;parent_path_part_id&#x60; field. To toggle Qdrant exclusion for this folder and its descendants: provide &#x60;exclude_from_qdrant&#x60; field. Any combination can be sent in a single request.

### Example

```ts
import {
  Configuration,
  FoldersApi,
} from '@knowledge-stack/ksapi';
import type { UpdateFolderOperationRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new FoldersApi(config);

  const body = {
    // string
    folderId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateFolderRequest
    updateFolderRequest: ...,
  } satisfies UpdateFolderOperationRequest;

  try {
    const data = await api.updateFolder(body);
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
| **folderId** | `string` |  | [Defaults to `undefined`] |
| **updateFolderRequest** | [UpdateFolderRequest](UpdateFolderRequest.md) |  | |

### Return type

[**FolderResponse**](FolderResponse.md)

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

