# BulkMoveApi

All URIs are relative to *http://localhost:8000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**bulkMove**](BulkMoveApi.md#bulkmoveoperation) | **POST** /v1/bulk-move | Bulk Move Handler |



## bulkMove

> BulkOperationResponse bulkMove(bulkMoveRequest)

Bulk Move Handler

Move the selected folders and documents into &#x60;&#x60;target_folder_id&#x60;&#x60;.  The destination is checked once up front — an invalid target returns &#x60;&#x60;400&#x60;&#x60; and a target the caller cannot write returns &#x60;&#x60;403&#x60;&#x60;, before any item moves. Each source then moves in its own transaction; items the caller may not write, that are sealed, held by another user, that would form a cycle, hit a name collision, or sit inside another selected folder land in &#x60;&#x60;failed&#x60;&#x60; with a reason while the rest succeed.

### Example

```ts
import {
  Configuration,
  BulkMoveApi,
} from '@knowledge-stack/ksapi';
import type { BulkMoveOperationRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new BulkMoveApi(config);

  const body = {
    // BulkMoveRequest
    bulkMoveRequest: ...,
  } satisfies BulkMoveOperationRequest;

  try {
    const data = await api.bulkMove(body);
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
| **bulkMoveRequest** | [BulkMoveRequest](BulkMoveRequest.md) |  | |

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

