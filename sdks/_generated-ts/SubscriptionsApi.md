# SubscriptionsApi

All URIs are relative to *http://localhost:8000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**changeTenantSubscription**](SubscriptionsApi.md#changetenantsubscription) | **POST** /v1/tenants/{tenant_id}/subscriptions | Change Tenant Subscription Handler |
| [**getTenantSubscription**](SubscriptionsApi.md#gettenantsubscription) | **GET** /v1/tenants/{tenant_id}/subscriptions | Get Tenant Subscription Handler |



## changeTenantSubscription

> CheckoutResponse changeTenantSubscription(tenantId, changeSubscriptionRequest)

Change Tenant Subscription Handler

Start a subscription change (OWNER only).  Priced plan → validates the request, creates a provider checkout (Stripe Checkout redirect / Ping++ charge credential), and returns it — nothing is written until the provider\&#39;s webhook confirms payment. Free plan → applied immediately for unbilled tenants, or scheduled for period end when a billed subscription is active (Stripe: &#x60;&#x60;cancel_at_period_end&#x60;&#x60;; Ping++ prepay simply isn\&#39;t renewed). Re-picking the current plan/seats while a Stripe cancellation is scheduled resumes the renewal. Deployments with no payment provider configured return 501 for priced checkouts (billing is optional — local-first).

### Example

```ts
import {
  Configuration,
  SubscriptionsApi,
} from '@knowledge-stack/ksapi';
import type { ChangeTenantSubscriptionRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SubscriptionsApi(config);

  const body = {
    // string
    tenantId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // ChangeSubscriptionRequest
    changeSubscriptionRequest: ...,
  } satisfies ChangeTenantSubscriptionRequest;

  try {
    const data = await api.changeTenantSubscription(body);
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
| **tenantId** | `string` |  | [Defaults to `undefined`] |
| **changeSubscriptionRequest** | [ChangeSubscriptionRequest](ChangeSubscriptionRequest.md) |  | |

### Return type

[**CheckoutResponse**](CheckoutResponse.md)

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


## getTenantSubscription

> TenantSubscriptionResponse getTenantSubscription(tenantId)

Get Tenant Subscription Handler

Read the tenant\&#39;s current subscription: plan body + period state.  Any active member of the tenant can read. This is the only path that surfaces private (custom enterprise) plans to non-admin users — &#x60;&#x60;GET /public/subscriptions&#x60;&#x60; filters them out, but tenants on a private plan still need to see their own caps. The period fields let the FE render renewal/expiry state (billed subscriptions carry the paid-through date; unbilled ones a 100-year horizon), and &#x60;&#x60;will_renew&#x60;&#x60; distinguishes an auto-renewing Stripe subscription from one whose cancellation is scheduled (or a prepay/unbilled period that simply runs out).  Returns 404 when the user is not a member of the tenant — same response shape as a non-existent tenant so we don\&#39;t leak existence to outsiders.

### Example

```ts
import {
  Configuration,
  SubscriptionsApi,
} from '@knowledge-stack/ksapi';
import type { GetTenantSubscriptionRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SubscriptionsApi(config);

  const body = {
    // string
    tenantId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetTenantSubscriptionRequest;

  try {
    const data = await api.getTenantSubscription(body);
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
| **tenantId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**TenantSubscriptionResponse**](TenantSubscriptionResponse.md)

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

