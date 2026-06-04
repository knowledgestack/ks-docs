# ksapi.SubscriptionsApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**change_tenant_subscription**](SubscriptionsApi.md#change_tenant_subscription) | **POST** /v1/tenants/{tenant_id}/subscriptions | Change Tenant Subscription Handler
[**get_tenant_subscription**](SubscriptionsApi.md#get_tenant_subscription) | **GET** /v1/tenants/{tenant_id}/subscriptions | Get Tenant Subscription Handler


# **change_tenant_subscription**
> SubmitSubscriptionResponse change_tenant_subscription(tenant_id, change_subscription_request, idempotency_key=idempotency_key, authorization=authorization, ks_uat=ks_uat)

Change Tenant Subscription Handler

Submit a subscription change (mock-Stripe).

OWNER-only on the target tenant. Validates the request (tenant +
plan exist, ``num_seats`` within bounds), submits the (mock-)Stripe
subscription update, and returns 202. The plan/seat write is NOT
applied here — that happens in
``POST /webhooks/stripe/subscription`` after Stripe confirms the
change.

Async two-hop workflow per ``docs/billing_additional_limits.md``
§"Async payment workflow": the dev environment exercises the same
submit/webhook split as production will when the real Stripe SDK
replaces the log-line stub in ``notify_billing``.

Optional ``Idempotency-Key`` request header is forwarded to Stripe
verbatim (clients that retry the same logical operation MUST send
the same value across attempts; Stripe collapses duplicates server-
side). Absent the header, the server generates a fresh ``uuid4()``
per call and emits a warning — but only when a Stripe call is
actually about to fire (i.e. the validation passed AND the change
is not a no-op). Warning before validation would false-positive on
every 4xx and on every redundant submit.

**Header value lands in structured logs.** The header value is
forwarded into the ``stripe.update_subscription`` log event's
``idempotency_key`` field (and into the eventual real Stripe call).
Use opaque random IDs (e.g. ``uuid4()``); do NOT pass user
identifiers, tokens, or other sensitive material as the
``Idempotency-Key`` header.

### Example


```python
import ksapi
from ksapi.models.change_subscription_request import ChangeSubscriptionRequest
from ksapi.models.submit_subscription_response import SubmitSubscriptionResponse
from ksapi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8000
# See configuration.py for a list of all supported configuration parameters.
configuration = ksapi.Configuration(
    host = "http://localhost:8000"
)


# Enter a context with an instance of the API client
with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.SubscriptionsApi(api_client)
    tenant_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    change_subscription_request = ksapi.ChangeSubscriptionRequest() # ChangeSubscriptionRequest | 
    idempotency_key = 'idempotency_key_example' # str |  (optional)
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Change Tenant Subscription Handler
        api_response = api_instance.change_tenant_subscription(tenant_id, change_subscription_request, idempotency_key=idempotency_key, authorization=authorization, ks_uat=ks_uat)
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
 **idempotency_key** | **str**|  | [optional] 
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**SubmitSubscriptionResponse**](SubmitSubscriptionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_tenant_subscription**
> SubscriptionPlanResponse get_tenant_subscription(tenant_id, authorization=authorization, ks_uat=ks_uat)

Get Tenant Subscription Handler

Read the tenant's current subscription plan, including private tiers.

Any active member of the tenant can read. This is the only path
that surfaces private (custom enterprise) plans to non-admin users —
``GET /public/subscriptions`` filters them out, but tenants on a
private plan still need to see their own caps. Returns the full
plan body (id, name, caps, max_seats, public flag, timestamps).

Returns 404 when the user is not a member of the tenant — same
response shape as a non-existent tenant so we don't leak existence
to outsiders.

### Example


```python
import ksapi
from ksapi.models.subscription_plan_response import SubscriptionPlanResponse
from ksapi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8000
# See configuration.py for a list of all supported configuration parameters.
configuration = ksapi.Configuration(
    host = "http://localhost:8000"
)


# Enter a context with an instance of the API client
with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.SubscriptionsApi(api_client)
    tenant_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Get Tenant Subscription Handler
        api_response = api_instance.get_tenant_subscription(tenant_id, authorization=authorization, ks_uat=ks_uat)
        print("The response of SubscriptionsApi->get_tenant_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->get_tenant_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenant_id** | **UUID**|  | 
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**SubscriptionPlanResponse**](SubscriptionPlanResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

