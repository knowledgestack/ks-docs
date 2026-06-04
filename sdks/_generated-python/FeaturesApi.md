# ksapi.FeaturesApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_features**](FeaturesApi.md#get_features) | **GET** /v1/features | Get Features Handler


# **get_features**
> FeaturesResponse get_features()

Get Features Handler

Return public feature flags for the frontend.

### Example


```python
import ksapi
from ksapi.models.features_response import FeaturesResponse
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
    api_instance = ksapi.FeaturesApi(api_client)

    try:
        # Get Features Handler
        api_response = api_instance.get_features()
        print("The response of FeaturesApi->get_features:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FeaturesApi->get_features: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**FeaturesResponse**](FeaturesResponse.md)

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

