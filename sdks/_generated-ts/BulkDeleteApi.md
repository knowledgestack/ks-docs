# BulkDeleteApi

All URIs are relative to *http://localhost:8000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**bulkDelete**](BulkDeleteApi.md#bulkdeleteoperation) | **POST** /v1/bulk-delete | Bulk Delete Handler |



## bulkDelete

> BulkOperationResponse bulkDelete(bulkDeleteRequest)

Bulk Delete Handler

Move the selected folders and documents to Trash, reporting per item.  Each id is soft-deleted in its own transaction: items the caller may not delete, that are approval-sealed, held by another user, contain an in-progress run, or sit inside another selected folder land in &#x60;&#x60;failed&#x60;&#x60; with a reason while the rest succeed. Over the selection cap returns &#x60;&#x60;400&#x60;&#x60;.

### Example

```ts
import {
  Configuration,
  BulkDeleteApi,
} from '@knowledge-stack/ksapi';
import type { BulkDeleteOperationRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new BulkDeleteApi(config);

  const body = {
    // BulkDeleteRequest
    bulkDeleteRequest: ...,
  } satisfies BulkDeleteOperationRequest;

  try {
    const data = await api.bulkDelete(body);
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
| **bulkDeleteRequest** | [BulkDeleteRequest](BulkDeleteRequest.md) |  | |

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

