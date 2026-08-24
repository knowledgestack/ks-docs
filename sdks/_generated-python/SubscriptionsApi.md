# ksapi.SubscriptionsApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**change_tenant_subscription**](SubscriptionsApi.md#change_tenant_subscription) | **POST** /v1/tenants/{tenant_id}/subscriptions | Change Tenant Subscription Handler
[**get_tenant_subscription**](SubscriptionsApi.md#get_tenant_subscription) | **GET** /v1/tenants/{tenant_id}/subscriptions | Get Tenant Subscription Handler


# **change_tenant_subscription**
> CheckoutResponse change_tenant_subscription(tenant_id, change_subscription_request)

Change Tenant Subscription Handler

Start a subscription change (OWNER only).

Priced plan → validates the request, creates a provider checkout
(Stripe Checkout redirect / Ping++ charge credential), and returns
it — nothing is written until the provider's webhook confirms
payment. Free plan → applied immediately for unbilled tenants, or
scheduled for period end when a billed subscription is active
(Stripe: ``cancel_at_period_end``; Ping++ prepay simply isn't
renewed). Re-picking the current plan/seats while a Stripe
cancellation is scheduled resumes the renewal. Deployments with no
payment provider configured return 501 for priced checkouts
(billing is optional — local-first).

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.change_subscription_request import ChangeSubscriptionRequest
from ksapi.models.checkout_response import CheckoutResponse
from ksapi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8000
# See configuration.py for a list of all supported configuration parameters.
configuration = ksapi.Configuration(
    host = "http://localhost:8000"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Configure Bearer authorization: bearerAuth
configuration = ksapi.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.SubscriptionsApi(api_client)
    tenant_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    change_subscription_request = ksapi.ChangeSubscriptionRequest() # ChangeSubscriptionRequest | 

    try:
        # Change Tenant Subscription Handler
        api_response = api_instance.change_tenant_subscription(tenant_id, change_subscription_request)
        print("The response of SubscriptionsApi->change_tenant_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->change_tenant_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenant_id** | **UUID**|  | 
 **change_subscription_request** | [**ChangeSubscriptionRequest**](ChangeSubscriptionRequest.md)|  | 

### Return type

[**CheckoutResponse**](CheckoutResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_tenant_subscription**
> TenantSubscriptionResponse get_tenant_subscription(tenant_id)

Get Tenant Subscription Handler

Read the tenant's current subscription: plan body + period state.

Any active member of the tenant can read. This is the only path
that surfaces private (custom enterprise) plans to non-admin users —
``GET /public/subscriptions`` filters them out, but tenants on a
private plan still need to see their own caps. The period fields
let the FE render renewal/expiry state (billed subscriptions carry
the paid-through date; unbilled ones a 100-year horizon), and
``will_renew`` distinguishes an auto-renewing Stripe subscription
from one whose cancellation is scheduled (or a prepay/unbilled
period that simply runs out).

Returns 404 when the user is not a member of the tenant — same
response shape as a non-existent tenant so we don't leak existence
to outsiders.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.tenant_subscription_response import TenantSubscriptionResponse
from ksapi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8000
# See configuration.py for a list of all supported configuration parameters.
configuration = ksapi.Configuration(
    host = "http://localhost:8000"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Configure Bearer authorization: bearerAuth
configuration = ksapi.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.SubscriptionsApi(api_client)
    tenant_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Get Tenant Subscription Handler
        api_response = api_instance.get_tenant_subscription(tenant_id)
        print("The response of SubscriptionsApi->get_tenant_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->get_tenant_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenant_id** | **UUID**|  | 

### Return type

[**TenantSubscriptionResponse**](TenantSubscriptionResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

