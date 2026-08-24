# TrashApi

All URIs are relative to *http://localhost:8000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**bulkPermanentlyDeleteTrash**](TrashApi.md#bulkpermanentlydeletetrash) | **POST** /v1/trash/bulk-delete | Bulk Permanently Delete Trash Handler |
| [**bulkRestoreTrash**](TrashApi.md#bulkrestoretrash) | **POST** /v1/trash/bulk-restore | Bulk Restore Trash Handler |
| [**getTrashItem**](TrashApi.md#gettrashitem) | **GET** /v1/trash/{path_part_id} | Get Trash Item Handler |
| [**listTrash**](TrashApi.md#listtrash) | **GET** /v1/trash | List Trash Handler |
| [**permanentlyDeleteTrashItem**](TrashApi.md#permanentlydeletetrashitem) | **DELETE** /v1/trash/{path_part_id} | Permanently Delete Trash Item Handler |
| [**restoreTrashItem**](TrashApi.md#restoretrashitem) | **POST** /v1/trash/{path_part_id}/restore | Restore Trash Item Handler |



## bulkPermanentlyDeleteTrash

> BulkOperationResponse bulkPermanentlyDeleteTrash(bulkTrashRequest)

Bulk Permanently Delete Trash Handler

Permanently delete the selected trashed objects (by PDO id), per item.  An object not visible in the caller\&#39;s trash scope lands in &#x60;&#x60;failed&#x60;&#x60; as &#x60;&#x60;not_found&#x60;&#x60;; the rest are hard-deleted and their Qdrant points purged.

### Example

```ts
import {
  Configuration,
  TrashApi,
} from '@knowledge-stack/ksapi';
import type { BulkPermanentlyDeleteTrashRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TrashApi(config);

  const body = {
    // BulkTrashRequest
    bulkTrashRequest: ...,
  } satisfies BulkPermanentlyDeleteTrashRequest;

  try {
    const data = await api.bulkPermanentlyDeleteTrash(body);
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
| **bulkTrashRequest** | [BulkTrashRequest](BulkTrashRequest.md) |  | |

### Return type

[**BulkOperationResponse**](BulkOperationResponse.md)

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


## bulkRestoreTrash

> BulkOperationResponse bulkRestoreTrash(bulkTrashRequest)

Bulk Restore Trash Handler

Restore the selected trashed objects (by PDO id), reporting per item.  An object not visible in the caller\&#39;s trash scope lands in &#x60;&#x60;failed&#x60;&#x60; as &#x60;&#x60;not_found&#x60;&#x60;; a live name collision at the original location that auto-rename cannot resolve lands as &#x60;&#x60;name_conflict&#x60;&#x60;.

### Example

```ts
import {
  Configuration,
  TrashApi,
} from '@knowledge-stack/ksapi';
import type { BulkRestoreTrashRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TrashApi(config);

  const body = {
    // BulkTrashRequest
    bulkTrashRequest: ...,
  } satisfies BulkRestoreTrashRequest;

  try {
    const data = await api.bulkRestoreTrash(body);
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
| **bulkTrashRequest** | [BulkTrashRequest](BulkTrashRequest.md) |  | |

### Return type

[**BulkOperationResponse**](BulkOperationResponse.md)

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


## getTrashItem

> TrashItemDetailResponse getTrashItem(pathPartId)

Get Trash Item Handler

Fetch a single trash root, with a preview URL for DOCUMENT items.

### Example

```ts
import {
  Configuration,
  TrashApi,
} from '@knowledge-stack/ksapi';
import type { GetTrashItemRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TrashApi(config);

  const body = {
    // string | Trashed PathPart ID
    pathPartId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetTrashItemRequest;

  try {
    const data = await api.getTrashItem(body);
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
| **pathPartId** | `string` | Trashed PathPart ID | [Defaults to `undefined`] |

### Return type

[**TrashItemDetailResponse**](TrashItemDetailResponse.md)

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


## listTrash

> PaginatedResponseTrashItemResponse listTrash(sortOrder, sortDir, deletedBy, partType, ownerId, limit, offset, createdAfter, createdBefore, updatedAfter, updatedBefore)

List Trash Handler

List top-level trash items visible to the caller.

### Example

```ts
import {
  Configuration,
  TrashApi,
} from '@knowledge-stack/ksapi';
import type { ListTrashRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TrashApi(config);

  const body = {
    // PathOrder | Sort order (default: LOGICAL = deletion recency) (optional)
    sortOrder: ...,
    // SortDirection | Sort direction; overrides the column\'s natural default (optional)
    sortDir: ...,
    // string | Filter to items deleted by this user (optional)
    deletedBy: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // Array<PartType> | Filter to these path-part types (folders, documents, ...) (optional)
    partType: ...,
    // string | Filter to items owned (created) by this user (optional)
    ownerId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
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
  } satisfies ListTrashRequest;

  try {
    const data = await api.listTrash(body);
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
| **sortOrder** | `PathOrder` | Sort order (default: LOGICAL &#x3D; deletion recency) | [Optional] [Defaults to `undefined`] [Enum: LOGICAL, NAME, UPDATED_AT, CREATED_AT] |
| **sortDir** | `SortDirection` | Sort direction; overrides the column\&#39;s natural default | [Optional] [Defaults to `undefined`] [Enum: ASC, DESC] |
| **deletedBy** | `string` | Filter to items deleted by this user | [Optional] [Defaults to `undefined`] |
| **partType** | `Array<PartType>` | Filter to these path-part types (folders, documents, ...) | [Optional] |
| **ownerId** | `string` | Filter to items owned (created) by this user | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items per page | [Optional] [Defaults to `20`] |
| **offset** | `number` | Number of items to skip | [Optional] [Defaults to `0`] |
| **createdAfter** | `Date` | Only items created at or after this timestamp (inclusive) | [Optional] [Defaults to `undefined`] |
| **createdBefore** | `Date` | Only items created strictly before this timestamp | [Optional] [Defaults to `undefined`] |
| **updatedAfter** | `Date` | Only items updated at or after this timestamp (inclusive) | [Optional] [Defaults to `undefined`] |
| **updatedBefore** | `Date` | Only items updated strictly before this timestamp | [Optional] [Defaults to `undefined`] |

### Return type

[**PaginatedResponseTrashItemResponse**](PaginatedResponseTrashItemResponse.md)

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


## permanentlyDeleteTrashItem

> permanentlyDeleteTrashItem(pathPartId)

Permanently Delete Trash Item Handler

Permanently delete a top-level trash item.

### Example

```ts
import {
  Configuration,
  TrashApi,
} from '@knowledge-stack/ksapi';
import type { PermanentlyDeleteTrashItemRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TrashApi(config);

  const body = {
    // string | Trashed PathPart ID
    pathPartId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies PermanentlyDeleteTrashItemRequest;

  try {
    const data = await api.permanentlyDeleteTrashItem(body);
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
| **pathPartId** | `string` | Trashed PathPart ID | [Defaults to `undefined`] |

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


## restoreTrashItem

> restoreTrashItem(pathPartId)

Restore Trash Item Handler

Restore a top-level trash item.

### Example

```ts
import {
  Configuration,
  TrashApi,
} from '@knowledge-stack/ksapi';
import type { RestoreTrashItemRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TrashApi(config);

  const body = {
    // string | Trashed PathPart ID
    pathPartId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies RestoreTrashItemRequest;

  try {
    const data = await api.restoreTrashItem(body);
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
| **pathPartId** | `string` | Trashed PathPart ID | [Defaults to `undefined`] |

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

