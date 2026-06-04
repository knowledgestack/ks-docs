# FeaturesApi

All URIs are relative to *http://localhost:8000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getFeatures**](FeaturesApi.md#getfeatures) | **GET** /v1/features | Get Features Handler |



## getFeatures

> FeaturesResponse getFeatures()

Get Features Handler

Return public feature flags for the frontend.

### Example

```ts
import {
  Configuration,
  FeaturesApi,
} from '@knowledge-stack/ksapi';
import type { GetFeaturesRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const api = new FeaturesApi();

  try {
    const data = await api.getFeatures();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**FeaturesResponse**](FeaturesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

