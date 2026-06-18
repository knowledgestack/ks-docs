# SubscriptionsApi

All URIs are relative to *http://localhost:8000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**changeTenantSubscription**](SubscriptionsApi.md#changetenantsubscription) | **POST** /v1/tenants/{tenant_id}/subscriptions | Change Tenant Subscription Handler |
| [**getTenantSubscription**](SubscriptionsApi.md#gettenantsubscription) | **GET** /v1/tenants/{tenant_id}/subscriptions | Get Tenant Subscription Handler |



## changeTenantSubscription

> SubmitSubscriptionResponse changeTenantSubscription(tenantId, changeSubscriptionRequest, idempotencyKey)

Change Tenant Subscription Handler

Submit a subscription change (mock-Stripe).  OWNER-only on the target tenant. Validates the request (tenant + plan exist, &#x60;&#x60;num_seats&#x60;&#x60; within bounds), submits the (mock-)Stripe subscription update, and returns 202. The plan/seat write is NOT applied here — that happens in &#x60;&#x60;POST /webhooks/stripe/subscription&#x60;&#x60; after Stripe confirms the change.  Async two-hop workflow per &#x60;&#x60;docs/billing_additional_limits.md&#x60;&#x60; §\&quot;Async payment workflow\&quot;: the dev environment exercises the same submit/webhook split as production will when the real Stripe SDK replaces the log-line stub in &#x60;&#x60;notify_billing&#x60;&#x60;.  Optional &#x60;&#x60;Idempotency-Key&#x60;&#x60; request header is forwarded to Stripe verbatim (clients that retry the same logical operation MUST send the same value across attempts; Stripe collapses duplicates server- side). Absent the header, the server generates a fresh &#x60;&#x60;uuid4()&#x60;&#x60; per call and emits a warning — but only when a Stripe call is actually about to fire (i.e. the validation passed AND the change is not a no-op). Warning before validation would false-positive on every 4xx and on every redundant submit.  **Header value lands in structured logs.** The header value is forwarded into the &#x60;&#x60;stripe.update_subscription&#x60;&#x60; log event\&#39;s &#x60;&#x60;idempotency_key&#x60;&#x60; field (and into the eventual real Stripe call). Use opaque random IDs (e.g. &#x60;&#x60;uuid4()&#x60;&#x60;); do NOT pass user identifiers, tokens, or other sensitive material as the &#x60;&#x60;Idempotency-Key&#x60;&#x60; header.

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
    // string (optional)
    idempotencyKey: idempotencyKey_example,
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
| **idempotencyKey** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**SubmitSubscriptionResponse**](SubmitSubscriptionResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Successful Response |  -  |
| **422** | Validation Error |  -  |
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTenantSubscription

> SubscriptionPlanResponse getTenantSubscription(tenantId)

Get Tenant Subscription Handler

Read the tenant\&#39;s current subscription plan, including private tiers.  Any active member of the tenant can read. This is the only path that surfaces private (custom enterprise) plans to non-admin users — &#x60;&#x60;GET /public/subscriptions&#x60;&#x60; filters them out, but tenants on a private plan still need to see their own caps. Returns the full plan body (id, name, caps, max_seats, public flag, timestamps).  Returns 404 when the user is not a member of the tenant — same response shape as a non-existent tenant so we don\&#39;t leak existence to outsiders.

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

[**SubscriptionPlanResponse**](SubscriptionPlanResponse.md)

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

