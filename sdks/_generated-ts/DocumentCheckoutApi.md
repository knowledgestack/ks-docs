# DocumentCheckoutApi

All URIs are relative to *http://localhost:8000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**acquireDocumentCheckout**](DocumentCheckoutApi.md#acquiredocumentcheckout) | **POST** /v1/documents/{document_id}/checkout | Acquire Document Checkout Handler |
| [**getDocumentCheckout**](DocumentCheckoutApi.md#getdocumentcheckout) | **GET** /v1/documents/{document_id}/checkout | Get Document Checkout Handler |
| [**releaseDocumentCheckout**](DocumentCheckoutApi.md#releasedocumentcheckout) | **DELETE** /v1/documents/{document_id}/checkout | Release Document Checkout Handler |



## acquireDocumentCheckout

> DocumentCheckoutResponse acquireDocumentCheckout(documentId, force)

Acquire Document Checkout Handler

Acquire a write lock on the document.  If the caller already holds the lock, re-acquire refreshes &#x60;&#x60;acquired_at&#x60;&#x60;; the response is 200 in both cases. If another user holds the lock, returns 409. &#x60;&#x60;?force&#x3D;true&#x60;&#x60; lets OWNER/ADMIN steal the lock from the current holder; a sealed (approved) document is refused regardless of &#x60;&#x60;force&#x60;&#x60;. Locks have no TTL — they persist until released by the holder.

### Example

```ts
import {
  Configuration,
  DocumentCheckoutApi,
} from '@knowledge-stack/ksapi';
import type { AcquireDocumentCheckoutRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DocumentCheckoutApi(config);

  const body = {
    // string | Document ID
    documentId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // boolean | OWNER/ADMIN only — atomically take the checkout regardless of the current holder. Sealed docs are still refused. (optional)
    force: true,
  } satisfies AcquireDocumentCheckoutRequest;

  try {
    const data = await api.acquireDocumentCheckout(body);
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
| **force** | `boolean` | OWNER/ADMIN only — atomically take the checkout regardless of the current holder. Sealed docs are still refused. | [Optional] [Defaults to `false`] |

### Return type

[**DocumentCheckoutResponse**](DocumentCheckoutResponse.md)

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


## getDocumentCheckout

> DocumentCheckoutResponse getDocumentCheckout(documentId)

Get Document Checkout Handler

Get the active checkout for the document.  404 if no active checkout exists. The holder can always GET their own lock regardless of current path permissions (parallel to the release holder-bypass).

### Example

```ts
import {
  Configuration,
  DocumentCheckoutApi,
} from '@knowledge-stack/ksapi';
import type { GetDocumentCheckoutRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DocumentCheckoutApi(config);

  const body = {
    // string | Document ID
    documentId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetDocumentCheckoutRequest;

  try {
    const data = await api.getDocumentCheckout(body);
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

[**DocumentCheckoutResponse**](DocumentCheckoutResponse.md)

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


## releaseDocumentCheckout

> releaseDocumentCheckout(documentId)

Release Document Checkout Handler

Release the write lock on the document.  Only the holder may release the lock; others receive 403. The holder can always release regardless of current path permissions (in case a folder move relocated the doc to a path the holder can no longer write to).

### Example

```ts
import {
  Configuration,
  DocumentCheckoutApi,
} from '@knowledge-stack/ksapi';
import type { ReleaseDocumentCheckoutRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DocumentCheckoutApi(config);

  const body = {
    // string | Document ID
    documentId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies ReleaseDocumentCheckoutRequest;

  try {
    const data = await api.releaseDocumentCheckout(body);
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

