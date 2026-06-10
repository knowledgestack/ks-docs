# TrashApi

All URIs are relative to *http://localhost:8000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**listTrash**](TrashApi.md#listtrash) | **GET** /v1/trash | List Trash Handler |
| [**permanentlyDeleteTrashItem**](TrashApi.md#permanentlydeletetrashitem) | **DELETE** /v1/trash/{path_part_id} | Permanently Delete Trash Item Handler |
| [**restoreTrashItem**](TrashApi.md#restoretrashitem) | **POST** /v1/trash/{path_part_id}/restore | Restore Trash Item Handler |



## listTrash

> PaginatedResponseTrashItemResponse listTrash(limit, offset)

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
    // number | Number of items per page (optional)
    limit: 56,
    // number | Number of items to skip (optional)
    offset: 56,
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
| **limit** | `number` | Number of items per page | [Optional] [Defaults to `20`] |
| **offset** | `number` | Number of items to skip | [Optional] [Defaults to `0`] |

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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

