# ksapi.DiagnosticsApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**compute_thread_diagnostics**](DiagnosticsApi.md#compute_thread_diagnostics) | **POST** /v1/diagnostics/threads/{thread_id} | Compute Thread Diagnostics Handler
[**compute_workflow_run_diagnostics**](DiagnosticsApi.md#compute_workflow_run_diagnostics) | **POST** /v1/diagnostics/workflow-runs/{run_id} | Compute Workflow Run Diagnostics Handler


# **compute_thread_diagnostics**
> DiagnosticsResponse compute_thread_diagnostics(thread_id)

Compute Thread Diagnostics Handler

Stats and trace links for every turn; a run's thread answers as its run.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.diagnostics_response import DiagnosticsResponse
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
    api_instance = ksapi.DiagnosticsApi(api_client)
    thread_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Compute Thread Diagnostics Handler
        api_response = api_instance.compute_thread_diagnostics(thread_id)
        print("The response of DiagnosticsApi->compute_thread_diagnostics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DiagnosticsApi->compute_thread_diagnostics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thread_id** | **UUID**|  | 

### Return type

[**DiagnosticsResponse**](DiagnosticsResponse.md)

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

# **compute_workflow_run_diagnostics**
> DiagnosticsResponse compute_workflow_run_diagnostics(run_id)

Compute Workflow Run Diagnostics Handler

Stats and trace links for the run's attempts and every turn in its thread.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.diagnostics_response import DiagnosticsResponse
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
    api_instance = ksapi.DiagnosticsApi(api_client)
    run_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Compute Workflow Run Diagnostics Handler
        api_response = api_instance.compute_workflow_run_diagnostics(run_id)
        print("The response of DiagnosticsApi->compute_workflow_run_diagnostics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DiagnosticsApi->compute_workflow_run_diagnostics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **run_id** | **UUID**|  | 

### Return type

[**DiagnosticsResponse**](DiagnosticsResponse.md)

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

