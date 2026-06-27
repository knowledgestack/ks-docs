# BulkDownloadApi

All URIs are relative to *http://localhost:8000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**startBulkDownload**](BulkDownloadApi.md#startbulkdownload) | **POST** /v1/bulk-download | Start Bulk Download Handler |



## startBulkDownload

> Blob startBulkDownload(bulkDownloadRequest)

Start Bulk Download Handler

Package the selected folders/documents into one &#x60;&#x60;.zip&#x60;&#x60; and stream it.  Folders are enumerated recursively; trashed and unreadable items are excluded, and each included file is recorded as a &#x60;&#x60;document.downloaded&#x60;&#x60; audit event. The selection is capped — exceeding it returns &#x60;&#x60;400&#x60;&#x60;. Files that cannot be included (no source, still ingesting) are skipped; the count is returned in the &#x60;&#x60;X-Bulk-Download-Skipped&#x60;&#x60; header.

### Example

```ts
import {
  Configuration,
  BulkDownloadApi,
} from '@knowledge-stack/ksapi';
import type { StartBulkDownloadRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new BulkDownloadApi(config);

  const body = {
    // BulkDownloadRequest
    bulkDownloadRequest: ...,
  } satisfies StartBulkDownloadRequest;

  try {
    const data = await api.startBulkDownload(body);
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
| **bulkDownloadRequest** | [BulkDownloadRequest](BulkDownloadRequest.md) |  | |

### Return type

**Blob**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/zip`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A ZIP archive of the selected documents. |  -  |
| **422** | Validation Error |  -  |
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

