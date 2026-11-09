# BillingApi

All URIs are relative to *http://localhost:8000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createBillingPortal**](BillingApi.md#createbillingportal) | **POST** /v1/tenants/{tenant_id}/billing/portal | Create Billing Portal Handler |
| [**createPlanCheckout**](BillingApi.md#createplancheckout) | **POST** /v1/tenants/{tenant_id}/billing/checkout | Create Plan Checkout Handler |
| [**createTopupCheckout**](BillingApi.md#createtopupcheckout) | **POST** /v1/tenants/{tenant_id}/billing/topups | Create Topup Checkout Handler |
| [**listPlans**](BillingApi.md#listplans) | **GET** /v1/plans | List Plans Handler |



## createBillingPortal

> BillingRedirectResponse createBillingPortal(tenantId)

Create Billing Portal Handler

The provider\&#39;s billing portal (OWNER): change plan or seats, cancel, invoices.

### Example

```ts
import {
  Configuration,
  BillingApi,
} from '@knowledge-stack/ksapi';
import type { CreateBillingPortalRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new BillingApi(config);

  const body = {
    // string
    tenantId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies CreateBillingPortalRequest;

  try {
    const data = await api.createBillingPortal(body);
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

[**BillingRedirectResponse**](BillingRedirectResponse.md)

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


## createPlanCheckout

> BillingRedirectResponse createPlanCheckout(tenantId, planCheckoutRequest)

Create Plan Checkout Handler

Hosted checkout for a public plan (OWNER). A subscriber uses the portal.

### Example

```ts
import {
  Configuration,
  BillingApi,
} from '@knowledge-stack/ksapi';
import type { CreatePlanCheckoutRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new BillingApi(config);

  const body = {
    // string
    tenantId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // PlanCheckoutRequest
    planCheckoutRequest: ...,
  } satisfies CreatePlanCheckoutRequest;

  try {
    const data = await api.createPlanCheckout(body);
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
| **planCheckoutRequest** | [PlanCheckoutRequest](PlanCheckoutRequest.md) |  | |

### Return type

[**BillingRedirectResponse**](BillingRedirectResponse.md)

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


## createTopupCheckout

> BillingRedirectResponse createTopupCheckout(tenantId, topupCheckoutRequest)

Create Topup Checkout Handler

Hosted checkout for one top-up (OWNER); credited when the provider confirms payment.

### Example

```ts
import {
  Configuration,
  BillingApi,
} from '@knowledge-stack/ksapi';
import type { CreateTopupCheckoutRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new BillingApi(config);

  const body = {
    // string
    tenantId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // TopupCheckoutRequest
    topupCheckoutRequest: ...,
  } satisfies CreateTopupCheckoutRequest;

  try {
    const data = await api.createTopupCheckout(body);
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
| **topupCheckoutRequest** | [TopupCheckoutRequest](TopupCheckoutRequest.md) |  | |

### Return type

[**BillingRedirectResponse**](BillingRedirectResponse.md)

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


## listPlans

> PaginatedResponsePlanResponse listPlans(limit, offset)

List Plans Handler

The public plans on sale, by name, each with what it grants.  A plan\&#39;s &#x60;&#x60;id&#x60;&#x60; is what plan checkout takes; prices are the provider\&#39;s.

### Example

```ts
import {
  Configuration,
  BillingApi,
} from '@knowledge-stack/ksapi';
import type { ListPlansRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new BillingApi(config);

  const body = {
    // number | Number of items per page (optional)
    limit: 56,
    // number | Number of items to skip (optional)
    offset: 56,
  } satisfies ListPlansRequest;

  try {
    const data = await api.listPlans(body);
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

[**PaginatedResponsePlanResponse**](PaginatedResponsePlanResponse.md)

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

