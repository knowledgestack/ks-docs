# DefaultApi

All URIs are relative to *http://localhost:8000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**healthCheck**](DefaultApi.md#healthcheck) | **GET** /healthz | Health Check Handler |
| [**hello**](DefaultApi.md#hello) | **GET** / | Root Handler |



## healthCheck

> HealthCheckResponse healthCheck()

Health Check Handler

Health check endpoint.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@knowledge-stack/ksapi';
import type { HealthCheckRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.healthCheck();
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

[**HealthCheckResponse**](HealthCheckResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## hello

> RootResponse hello()

Root Handler

Root endpoint.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '@knowledge-stack/ksapi';
import type { HelloRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.hello();
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

[**RootResponse**](RootResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

