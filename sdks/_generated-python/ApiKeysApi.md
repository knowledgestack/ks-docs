# ksapi.ApiKeysApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_api_key**](ApiKeysApi.md#create_api_key) | **POST** /v1/api-keys | Create Api Key Handler
[**delete_api_key**](ApiKeysApi.md#delete_api_key) | **DELETE** /v1/api-keys/{api_key_id} | Delete Api Key Handler
[**get_api_key**](ApiKeysApi.md#get_api_key) | **GET** /v1/api-keys/{api_key_id} | Get Api Key Handler
[**list_api_keys**](ApiKeysApi.md#list_api_keys) | **GET** /v1/api-keys | List Api Keys Handler


# **create_api_key**
> CreateApiKeyResponse create_api_key(create_api_key_request, ks_uat=ks_uat)

Create Api Key Handler

Create a new API key. The full key is returned only once.

### Example


```python
import ksapi
from ksapi.models.create_api_key_request import CreateApiKeyRequest
from ksapi.models.create_api_key_response import CreateApiKeyResponse
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
    api_instance = ksapi.ApiKeysApi(api_client)
    create_api_key_request = ksapi.CreateApiKeyRequest() # CreateApiKeyRequest | 
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Create Api Key Handler
        api_response = api_instance.create_api_key(create_api_key_request, ks_uat=ks_uat)
        print("The response of ApiKeysApi->create_api_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApiKeysApi->create_api_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_api_key_request** | [**CreateApiKeyRequest**](CreateApiKeyRequest.md)|  | 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**CreateApiKeyResponse**](CreateApiKeyResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_api_key**
> delete_api_key(api_key_id, ks_uat=ks_uat)

Delete Api Key Handler

Delete an API key.

### Example


```python
import ksapi
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
    api_instance = ksapi.ApiKeysApi(api_client)
    api_key_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Delete Api Key Handler
        api_instance.delete_api_key(api_key_id, ks_uat=ks_uat)
    except Exception as e:
        print("Exception when calling ApiKeysApi->delete_api_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key_id** | **UUID**|  | 
 **ks_uat** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_api_key**
> ApiKeyResponse get_api_key(api_key_id, ks_uat=ks_uat)

Get Api Key Handler

Get a single API key by ID.

### Example


```python
import ksapi
from ksapi.models.api_key_response import ApiKeyResponse
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
    api_instance = ksapi.ApiKeysApi(api_client)
    api_key_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Get Api Key Handler
        api_response = api_instance.get_api_key(api_key_id, ks_uat=ks_uat)
        print("The response of ApiKeysApi->get_api_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApiKeysApi->get_api_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key_id** | **UUID**|  | 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**ApiKeyResponse**](ApiKeyResponse.md)

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

# **list_api_keys**
> List[ApiKeyResponse] list_api_keys(ks_uat=ks_uat)

List Api Keys Handler

List all API keys for the current user.

### Example


```python
import ksapi
from ksapi.models.api_key_response import ApiKeyResponse
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
    api_instance = ksapi.ApiKeysApi(api_client)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # List Api Keys Handler
        api_response = api_instance.list_api_keys(ks_uat=ks_uat)
        print("The response of ApiKeysApi->list_api_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApiKeysApi->list_api_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ks_uat** | **str**|  | [optional] 

### Return type

[**List[ApiKeyResponse]**](ApiKeyResponse.md)

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

