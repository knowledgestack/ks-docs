# ksapi.PublicApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list_public_subscriptions**](PublicApi.md#list_public_subscriptions) | **GET** /public/subscriptions | List Public Subscriptions Handler


# **list_public_subscriptions**
> List[SubscriptionPlanResponse] list_public_subscriptions()

List Public Subscriptions Handler

List publicly-visible subscription plans (no authentication required).

Filters to ``subscription_plan.public = true`` — custom enterprise
tiers (created with ``public=False`` via ``POST /system/subscriptions``)
are excluded. Tenants on a private plan can still read it via
``GET /v1/tenants/{tenant_id}/subscriptions``.

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
    api_instance = ksapi.PublicApi(api_client)

    try:
        # List Public Subscriptions Handler
        api_response = api_instance.list_public_subscriptions()
        print("The response of PublicApi->list_public_subscriptions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PublicApi->list_public_subscriptions: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[SubscriptionPlanResponse]**](SubscriptionPlanResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

