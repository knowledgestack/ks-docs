# BillingApi

All URIs are relative to *http://localhost:8000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**listBillingPayments**](BillingApi.md#listbillingpayments) | **GET** /v1/tenants/{tenant_id}/billing/payments | List Billing Payments Handler |



## listBillingPayments

> PaginatedResponseBillingPaymentResponse listBillingPayments(tenantId, limit, offset)

List Billing Payments Handler

Newest-first payment history for the tenant (OWNER/ADMIN only).  Backs the billing page\&#39;s receipts list. &#x60;&#x60;invoice_url&#x60;&#x60; links the Stripe-hosted invoice when the payment ran through Stripe; CN (Ping++) payments render an in-app receipt from the row itself.

### Example

```ts
import {
  Configuration,
  BillingApi,
} from '@knowledge-stack/ksapi';
import type { ListBillingPaymentsRequest } from '@knowledge-stack/ksapi';

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
    // number | Number of items per page (optional)
    limit: 56,
    // number | Number of items to skip (optional)
    offset: 56,
  } satisfies ListBillingPaymentsRequest;

  try {
    const data = await api.listBillingPayments(body);
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
| **limit** | `number` | Number of items per page | [Optional] [Defaults to `20`] |
| **offset** | `number` | Number of items to skip | [Optional] [Defaults to `0`] |

### Return type

[**PaginatedResponseBillingPaymentResponse**](PaginatedResponseBillingPaymentResponse.md)

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

