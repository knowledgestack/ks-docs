# ksapi.DefaultApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**health_check**](DefaultApi.md#health_check) | **GET** /healthz | Health Check Handler
[**hello**](DefaultApi.md#hello) | **GET** / | Root Handler


# **health_check**
> HealthCheckResponse health_check()

Health Check Handler

Health check endpoint.

### Example


```python
import ksapi
from ksapi.models.health_check_response import HealthCheckResponse
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
    api_instance = ksapi.DefaultApi(api_client)

    try:
        # Health Check Handler
        api_response = api_instance.health_check()
        print("The response of DefaultApi->health_check:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->health_check: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**HealthCheckResponse**](HealthCheckResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hello**
> RootResponse hello()

Root Handler

Root endpoint.

### Example


```python
import ksapi
from ksapi.models.root_response import RootResponse
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
    api_instance = ksapi.DefaultApi(api_client)

    try:
        # Root Handler
        api_response = api_instance.hello()
        print("The response of DefaultApi->hello:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->hello: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**RootResponse**](RootResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

