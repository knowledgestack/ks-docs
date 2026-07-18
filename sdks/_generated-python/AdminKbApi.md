# ksapi.AdminKbApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_admin_kb_summary**](AdminKbApi.md#get_admin_kb_summary) | **GET** /v1/admin/kb/summary | Get Admin Kb Summary Handler
[**get_admin_kb_timeseries**](AdminKbApi.md#get_admin_kb_timeseries) | **GET** /v1/admin/kb/timeseries | Get Admin Kb Timeseries Handler


# **get_admin_kb_summary**
> KbSummaryResponse get_admin_kb_summary()

Get Admin Kb Summary Handler

Point-in-time knowledge-base totals for the tenant.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.kb_summary_response import KbSummaryResponse
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
    api_instance = ksapi.AdminKbApi(api_client)

    try:
        # Get Admin Kb Summary Handler
        api_response = api_instance.get_admin_kb_summary()
        print("The response of AdminKbApi->get_admin_kb_summary:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminKbApi->get_admin_kb_summary: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**KbSummaryResponse**](KbSummaryResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_admin_kb_timeseries**
> KbTimeseriesResponse get_admin_kb_timeseries(metric, since=since, until=until, bucket=bucket, timezone=timezone)

Get Admin Kb Timeseries Handler

A knowledge-base metric bucketed over time, in the resolved timezone.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.kb_metric import KbMetric
from ksapi.models.kb_timeseries_response import KbTimeseriesResponse
from ksapi.models.time_bucket import TimeBucket
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
    api_instance = ksapi.AdminKbApi(api_client)
    metric = ksapi.KbMetric() # KbMetric | Which KB metric to bucket.
    since = '2013-10-20T19:20:30+01:00' # datetime | Window start. (optional)
    until = '2013-10-20T19:20:30+01:00' # datetime | Window end. (optional)
    bucket = ksapi.TimeBucket() # TimeBucket | Bucket size. (optional)
    timezone = 'timezone_example' # str | IANA tz override; defaults to tenant setting. (optional)

    try:
        # Get Admin Kb Timeseries Handler
        api_response = api_instance.get_admin_kb_timeseries(metric, since=since, until=until, bucket=bucket, timezone=timezone)
        print("The response of AdminKbApi->get_admin_kb_timeseries:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminKbApi->get_admin_kb_timeseries: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **metric** | [**KbMetric**](.md)| Which KB metric to bucket. | 
 **since** | **datetime**| Window start. | [optional] 
 **until** | **datetime**| Window end. | [optional] 
 **bucket** | [**TimeBucket**](.md)| Bucket size. | [optional] 
 **timezone** | **str**| IANA tz override; defaults to tenant setting. | [optional] 

### Return type

[**KbTimeseriesResponse**](KbTimeseriesResponse.md)

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

