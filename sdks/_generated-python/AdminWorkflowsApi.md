# ksapi.AdminWorkflowsApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_admin_workflow_by_hour**](AdminWorkflowsApi.md#get_admin_workflow_by_hour) | **GET** /v1/admin/workflows/by-hour | Get Admin Workflow By Hour Handler
[**get_admin_workflow_leaderboard**](AdminWorkflowsApi.md#get_admin_workflow_leaderboard) | **GET** /v1/admin/workflows/leaderboard | Get Admin Workflow Leaderboard Handler
[**get_admin_workflow_output_stats**](AdminWorkflowsApi.md#get_admin_workflow_output_stats) | **GET** /v1/admin/workflows/output-stats | Get Admin Workflow Output Stats Handler
[**get_admin_workflow_summary**](AdminWorkflowsApi.md#get_admin_workflow_summary) | **GET** /v1/admin/workflows/summary | Get Admin Workflow Summary Handler
[**get_admin_workflow_timeseries**](AdminWorkflowsApi.md#get_admin_workflow_timeseries) | **GET** /v1/admin/workflows/timeseries | Get Admin Workflow Timeseries Handler


# **get_admin_workflow_by_hour**
> HourHistogramResponse get_admin_workflow_by_hour(since=since, until=until, timezone=timezone, definition_id=definition_id)

Get Admin Workflow By Hour Handler

Runs per hour-of-day (0-23) in the resolved timezone.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.hour_histogram_response import HourHistogramResponse
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
    api_instance = ksapi.AdminWorkflowsApi(api_client)
    since = '2013-10-20T19:20:30+01:00' # datetime | Window start. (optional)
    until = '2013-10-20T19:20:30+01:00' # datetime | Window end. (optional)
    timezone = 'timezone_example' # str | IANA tz override; defaults to tenant setting. (optional)
    definition_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Scope to one workflow. (optional)

    try:
        # Get Admin Workflow By Hour Handler
        api_response = api_instance.get_admin_workflow_by_hour(since=since, until=until, timezone=timezone, definition_id=definition_id)
        print("The response of AdminWorkflowsApi->get_admin_workflow_by_hour:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminWorkflowsApi->get_admin_workflow_by_hour: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **since** | **datetime**| Window start. | [optional] 
 **until** | **datetime**| Window end. | [optional] 
 **timezone** | **str**| IANA tz override; defaults to tenant setting. | [optional] 
 **definition_id** | **UUID**| Scope to one workflow. | [optional] 

### Return type

[**HourHistogramResponse**](HourHistogramResponse.md)

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

# **get_admin_workflow_leaderboard**
> WorkflowLeaderboardResponse get_admin_workflow_leaderboard(since=since, until=until, limit=limit)

Get Admin Workflow Leaderboard Handler

Top workflows and top run owners by run count.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.workflow_leaderboard_response import WorkflowLeaderboardResponse
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
    api_instance = ksapi.AdminWorkflowsApi(api_client)
    since = '2013-10-20T19:20:30+01:00' # datetime | Window start. (optional)
    until = '2013-10-20T19:20:30+01:00' # datetime | Window end. (optional)
    limit = 10 # int | Top-N per leaderboard. (optional) (default to 10)

    try:
        # Get Admin Workflow Leaderboard Handler
        api_response = api_instance.get_admin_workflow_leaderboard(since=since, until=until, limit=limit)
        print("The response of AdminWorkflowsApi->get_admin_workflow_leaderboard:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminWorkflowsApi->get_admin_workflow_leaderboard: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **since** | **datetime**| Window start. | [optional] 
 **until** | **datetime**| Window end. | [optional] 
 **limit** | **int**| Top-N per leaderboard. | [optional] [default to 10]

### Return type

[**WorkflowLeaderboardResponse**](WorkflowLeaderboardResponse.md)

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

# **get_admin_workflow_output_stats**
> WorkflowOutputStatsResponse get_admin_workflow_output_stats(since=since, until=until)

Get Admin Workflow Output Stats Handler

Average output DOCUMENTs generated per workflow definition (completed runs).

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.workflow_output_stats_response import WorkflowOutputStatsResponse
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
    api_instance = ksapi.AdminWorkflowsApi(api_client)
    since = '2013-10-20T19:20:30+01:00' # datetime | Window start. (optional)
    until = '2013-10-20T19:20:30+01:00' # datetime | Window end. (optional)

    try:
        # Get Admin Workflow Output Stats Handler
        api_response = api_instance.get_admin_workflow_output_stats(since=since, until=until)
        print("The response of AdminWorkflowsApi->get_admin_workflow_output_stats:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminWorkflowsApi->get_admin_workflow_output_stats: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **since** | **datetime**| Window start. | [optional] 
 **until** | **datetime**| Window end. | [optional] 

### Return type

[**WorkflowOutputStatsResponse**](WorkflowOutputStatsResponse.md)

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

# **get_admin_workflow_summary**
> WorkflowRunSummaryResponse get_admin_workflow_summary(since=since, until=until, definition_id=definition_id)

Get Admin Workflow Summary Handler

Tenant-wide run health: counts, failure rate, durations, approval backlog.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.workflow_run_summary_response import WorkflowRunSummaryResponse
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
    api_instance = ksapi.AdminWorkflowsApi(api_client)
    since = '2013-10-20T19:20:30+01:00' # datetime | Window start (inclusive). Defaults to 7 days ago. (optional)
    until = '2013-10-20T19:20:30+01:00' # datetime | Window end (inclusive). (optional)
    definition_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Scope all numbers to one workflow. (optional)

    try:
        # Get Admin Workflow Summary Handler
        api_response = api_instance.get_admin_workflow_summary(since=since, until=until, definition_id=definition_id)
        print("The response of AdminWorkflowsApi->get_admin_workflow_summary:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminWorkflowsApi->get_admin_workflow_summary: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **since** | **datetime**| Window start (inclusive). Defaults to 7 days ago. | [optional] 
 **until** | **datetime**| Window end (inclusive). | [optional] 
 **definition_id** | **UUID**| Scope all numbers to one workflow. | [optional] 

### Return type

[**WorkflowRunSummaryResponse**](WorkflowRunSummaryResponse.md)

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

# **get_admin_workflow_timeseries**
> RunTimeseriesResponse get_admin_workflow_timeseries(since=since, until=until, bucket=bucket, timezone=timezone, definition_id=definition_id)

Get Admin Workflow Timeseries Handler

Run counts bucketed over time, in the resolved timezone.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.run_timeseries_response import RunTimeseriesResponse
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
    api_instance = ksapi.AdminWorkflowsApi(api_client)
    since = '2013-10-20T19:20:30+01:00' # datetime | Window start. (optional)
    until = '2013-10-20T19:20:30+01:00' # datetime | Window end. (optional)
    bucket = ksapi.TimeBucket() # TimeBucket | Bucket size. (optional)
    timezone = 'timezone_example' # str | IANA tz override; defaults to tenant setting. (optional)
    definition_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Scope to one workflow. (optional)

    try:
        # Get Admin Workflow Timeseries Handler
        api_response = api_instance.get_admin_workflow_timeseries(since=since, until=until, bucket=bucket, timezone=timezone, definition_id=definition_id)
        print("The response of AdminWorkflowsApi->get_admin_workflow_timeseries:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminWorkflowsApi->get_admin_workflow_timeseries: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **since** | **datetime**| Window start. | [optional] 
 **until** | **datetime**| Window end. | [optional] 
 **bucket** | [**TimeBucket**](.md)| Bucket size. | [optional] 
 **timezone** | **str**| IANA tz override; defaults to tenant setting. | [optional] 
 **definition_id** | **UUID**| Scope to one workflow. | [optional] 

### Return type

[**RunTimeseriesResponse**](RunTimeseriesResponse.md)

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

