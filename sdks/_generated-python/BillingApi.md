# ksapi.BillingApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_billing_portal**](BillingApi.md#create_billing_portal) | **POST** /v1/tenants/{tenant_id}/billing/portal | Create Billing Portal Handler
[**create_plan_checkout**](BillingApi.md#create_plan_checkout) | **POST** /v1/tenants/{tenant_id}/billing/checkout | Create Plan Checkout Handler
[**create_topup_checkout**](BillingApi.md#create_topup_checkout) | **POST** /v1/tenants/{tenant_id}/billing/topups | Create Topup Checkout Handler
[**list_plans**](BillingApi.md#list_plans) | **GET** /v1/plans | List Plans Handler


# **create_billing_portal**
> BillingRedirectResponse create_billing_portal(tenant_id)

**Synchronous variant:** `create_billing_portal_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Create Billing Portal Handler

The provider's billing portal (OWNER): change plan or seats, cancel, invoices.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.billing_redirect_response import BillingRedirectResponse
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
async with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.BillingApi(api_client)
    tenant_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Create Billing Portal Handler
        api_response = await api_instance.create_billing_portal(tenant_id)
        print("The response of BillingApi->create_billing_portal:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingApi->create_billing_portal: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenant_id** | **UUID**|  | 

### Return type

[**BillingRedirectResponse**](BillingRedirectResponse.md)

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

# **create_plan_checkout**
> BillingRedirectResponse create_plan_checkout(tenant_id, plan_checkout_request)

**Synchronous variant:** `create_plan_checkout_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Create Plan Checkout Handler

Hosted checkout for a public plan (OWNER). A subscriber uses the portal.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.billing_redirect_response import BillingRedirectResponse
from ksapi.models.plan_checkout_request import PlanCheckoutRequest
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
async with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.BillingApi(api_client)
    tenant_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    plan_checkout_request = ksapi.PlanCheckoutRequest() # PlanCheckoutRequest | 

    try:
        # Create Plan Checkout Handler
        api_response = await api_instance.create_plan_checkout(tenant_id, plan_checkout_request)
        print("The response of BillingApi->create_plan_checkout:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingApi->create_plan_checkout: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenant_id** | **UUID**|  | 
 **plan_checkout_request** | [**PlanCheckoutRequest**](PlanCheckoutRequest.md)|  | 

### Return type

[**BillingRedirectResponse**](BillingRedirectResponse.md)

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

# **create_topup_checkout**
> BillingRedirectResponse create_topup_checkout(tenant_id, topup_checkout_request)

**Synchronous variant:** `create_topup_checkout_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Create Topup Checkout Handler

Hosted checkout for one top-up (OWNER); credited when the provider confirms payment.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.billing_redirect_response import BillingRedirectResponse
from ksapi.models.topup_checkout_request import TopupCheckoutRequest
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
async with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.BillingApi(api_client)
    tenant_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    topup_checkout_request = ksapi.TopupCheckoutRequest() # TopupCheckoutRequest | 

    try:
        # Create Topup Checkout Handler
        api_response = await api_instance.create_topup_checkout(tenant_id, topup_checkout_request)
        print("The response of BillingApi->create_topup_checkout:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingApi->create_topup_checkout: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenant_id** | **UUID**|  | 
 **topup_checkout_request** | [**TopupCheckoutRequest**](TopupCheckoutRequest.md)|  | 

### Return type

[**BillingRedirectResponse**](BillingRedirectResponse.md)

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

# **list_plans**
> PaginatedResponsePlanResponse list_plans(limit=limit, offset=offset)

**Synchronous variant:** `list_plans_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

List Plans Handler

The public plans on sale, by name, each with what it grants.

A plan's ``id`` is what plan checkout takes; prices are the provider's.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.paginated_response_plan_response import PaginatedResponsePlanResponse
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
async with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.BillingApi(api_client)
    limit = 20 # int | Number of items per page (optional) (default to 20)
    offset = 0 # int | Number of items to skip (optional) (default to 0)

    try:
        # List Plans Handler
        api_response = await api_instance.list_plans(limit=limit, offset=offset)
        print("The response of BillingApi->list_plans:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingApi->list_plans: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Number of items per page | [optional] [default to 20]
 **offset** | **int**| Number of items to skip | [optional] [default to 0]

### Return type

[**PaginatedResponsePlanResponse**](PaginatedResponsePlanResponse.md)

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

