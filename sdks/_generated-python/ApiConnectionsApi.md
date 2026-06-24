# ksapi.ApiConnectionsApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accept_api_connection_disclaimer**](ApiConnectionsApi.md#accept_api_connection_disclaimer) | **POST** /v1/api-connections/{connection_id}/disclaimer | Accept Api Connection Disclaimer Handler
[**create_api_connection**](ApiConnectionsApi.md#create_api_connection) | **POST** /v1/api-connections | Create Api Connection Handler
[**delete_api_connection**](ApiConnectionsApi.md#delete_api_connection) | **DELETE** /v1/api-connections/{connection_id} | Delete Api Connection Handler
[**execute_api_connection_request**](ApiConnectionsApi.md#execute_api_connection_request) | **POST** /v1/api-connections/{connection_id}/request | Execute Api Connection Request Handler
[**get_api_connection**](ApiConnectionsApi.md#get_api_connection) | **GET** /v1/api-connections/{connection_id} | Get Api Connection Handler
[**update_api_connection**](ApiConnectionsApi.md#update_api_connection) | **PATCH** /v1/api-connections/{connection_id} | Update Api Connection Handler


# **accept_api_connection_disclaimer**
> ApiConnectionResponse accept_api_connection_disclaimer(connection_id, accept_disclaimer_request)

Accept Api Connection Disclaimer Handler

Accept the egress disclaimer (Admin/Owner).

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.accept_disclaimer_request import AcceptDisclaimerRequest
from ksapi.models.api_connection_response import ApiConnectionResponse
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
    api_instance = ksapi.ApiConnectionsApi(api_client)
    connection_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    accept_disclaimer_request = ksapi.AcceptDisclaimerRequest() # AcceptDisclaimerRequest | 

    try:
        # Accept Api Connection Disclaimer Handler
        api_response = api_instance.accept_api_connection_disclaimer(connection_id, accept_disclaimer_request)
        print("The response of ApiConnectionsApi->accept_api_connection_disclaimer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApiConnectionsApi->accept_api_connection_disclaimer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connection_id** | **UUID**|  | 
 **accept_disclaimer_request** | [**AcceptDisclaimerRequest**](AcceptDisclaimerRequest.md)|  | 

### Return type

[**ApiConnectionResponse**](ApiConnectionResponse.md)

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

# **create_api_connection**
> ApiConnectionResponse create_api_connection(create_api_connection_request)

Create Api Connection Handler

Create a connection under a writable folder (Admin/Owner; egress on).

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.api_connection_response import ApiConnectionResponse
from ksapi.models.create_api_connection_request import CreateApiConnectionRequest
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
    api_instance = ksapi.ApiConnectionsApi(api_client)
    create_api_connection_request = ksapi.CreateApiConnectionRequest() # CreateApiConnectionRequest | 

    try:
        # Create Api Connection Handler
        api_response = api_instance.create_api_connection(create_api_connection_request)
        print("The response of ApiConnectionsApi->create_api_connection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApiConnectionsApi->create_api_connection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_api_connection_request** | [**CreateApiConnectionRequest**](CreateApiConnectionRequest.md)|  | 

### Return type

[**ApiConnectionResponse**](ApiConnectionResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_api_connection**
> delete_api_connection(connection_id)

Delete Api Connection Handler

Move a connection to trash (Admin/Owner).

Soft-delete via the path_part subtree, mirroring create/update authz. A
connection holds no Qdrant vectors, so there is no trash-sync workflow.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
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
    api_instance = ksapi.ApiConnectionsApi(api_client)
    connection_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Delete Api Connection Handler
        api_instance.delete_api_connection(connection_id)
    except Exception as e:
        print("Exception when calling ApiConnectionsApi->delete_api_connection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connection_id** | **UUID**|  | 

### Return type

void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**422** | Validation Error |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **execute_api_connection_request**
> ApiConnectionRequestResponse execute_api_connection_request(connection_id, api_connection_request_request)

Execute Api Connection Request Handler

Execute a safe, audited outbound request (all gates run in the service).

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.api_connection_request_request import ApiConnectionRequestRequest
from ksapi.models.api_connection_request_response import ApiConnectionRequestResponse
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
    api_instance = ksapi.ApiConnectionsApi(api_client)
    connection_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    api_connection_request_request = ksapi.ApiConnectionRequestRequest() # ApiConnectionRequestRequest | 

    try:
        # Execute Api Connection Request Handler
        api_response = api_instance.execute_api_connection_request(connection_id, api_connection_request_request)
        print("The response of ApiConnectionsApi->execute_api_connection_request:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApiConnectionsApi->execute_api_connection_request: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connection_id** | **UUID**|  | 
 **api_connection_request_request** | [**ApiConnectionRequestRequest**](ApiConnectionRequestRequest.md)|  | 

### Return type

[**ApiConnectionRequestResponse**](ApiConnectionRequestResponse.md)

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

# **get_api_connection**
> ApiConnectionResponse get_api_connection(connection_id)

Get Api Connection Handler

Get a connection (no secret); requires read access.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.api_connection_response import ApiConnectionResponse
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
    api_instance = ksapi.ApiConnectionsApi(api_client)
    connection_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Get Api Connection Handler
        api_response = api_instance.get_api_connection(connection_id)
        print("The response of ApiConnectionsApi->get_api_connection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApiConnectionsApi->get_api_connection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connection_id** | **UUID**|  | 

### Return type

[**ApiConnectionResponse**](ApiConnectionResponse.md)

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

# **update_api_connection**
> ApiConnectionResponse update_api_connection(connection_id, update_api_connection_request)

Update Api Connection Handler

Update a connection (Admin/Owner). A risk-up change re-arms the disclaimer.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.api_connection_response import ApiConnectionResponse
from ksapi.models.update_api_connection_request import UpdateApiConnectionRequest
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
    api_instance = ksapi.ApiConnectionsApi(api_client)
    connection_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    update_api_connection_request = ksapi.UpdateApiConnectionRequest() # UpdateApiConnectionRequest | 

    try:
        # Update Api Connection Handler
        api_response = api_instance.update_api_connection(connection_id, update_api_connection_request)
        print("The response of ApiConnectionsApi->update_api_connection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApiConnectionsApi->update_api_connection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connection_id** | **UUID**|  | 
 **update_api_connection_request** | [**UpdateApiConnectionRequest**](UpdateApiConnectionRequest.md)|  | 

### Return type

[**ApiConnectionResponse**](ApiConnectionResponse.md)

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

