# PublicApi

All URIs are relative to *http://localhost:8000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**listPublicSubscriptions**](PublicApi.md#listpublicsubscriptions) | **GET** /public/subscriptions | List Public Subscriptions Handler |



## listPublicSubscriptions

> Array&lt;SubscriptionPlanResponse&gt; listPublicSubscriptions()

List Public Subscriptions Handler

List publicly-visible subscription plans (no authentication required).  Filters to &#x60;&#x60;subscription_plan.public &#x3D; true&#x60;&#x60; — custom enterprise tiers (created with &#x60;&#x60;public&#x3D;False&#x60;&#x60; via &#x60;&#x60;POST /system/subscriptions&#x60;&#x60;) are excluded. Tenants on a private plan can still read it via &#x60;&#x60;GET /v1/tenants/{tenant_id}/subscriptions&#x60;&#x60;.

### Example

```ts
import {
  Configuration,
  PublicApi,
} from '@knowledge-stack/ksapi';
import type { ListPublicSubscriptionsRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const api = new PublicApi();

  try {
    const data = await api.listPublicSubscriptions();
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

[**Array&lt;SubscriptionPlanResponse&gt;**](SubscriptionPlanResponse.md)

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

