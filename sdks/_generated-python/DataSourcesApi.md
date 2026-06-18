# ksapi.DataSourcesApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_data_source**](DataSourcesApi.md#create_data_source) | **POST** /v1/data-sources | Create Data Source Handler
[**get_data_source**](DataSourcesApi.md#get_data_source) | **GET** /v1/data-sources/{data_source_id} | Get Data Source Handler
[**get_data_source_catalog**](DataSourcesApi.md#get_data_source_catalog) | **GET** /v1/data-sources/{data_source_id}/catalog | Get Data Source Catalog Handler
[**model_data_source_table**](DataSourcesApi.md#model_data_source_table) | **POST** /v1/data-sources/{data_source_id}/tables | Model Data Source Table Handler
[**query_data_source**](DataSourcesApi.md#query_data_source) | **POST** /v1/data-sources/{data_source_id}/query | Query Data Source Handler
[**test_data_source_connection**](DataSourcesApi.md#test_data_source_connection) | **POST** /v1/data-sources/{data_source_id}/test | Test Data Source Connection Handler
[**update_data_source_table**](DataSourcesApi.md#update_data_source_table) | **PATCH** /v1/data-sources/{data_source_id}/tables/{table_id} | Update Data Source Table Handler


# **create_data_source**
> DataSourceResponse create_data_source(create_data_source_request)

Create Data Source Handler

Create a connector under a writable folder; test the connection first.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.create_data_source_request import CreateDataSourceRequest
from ksapi.models.data_source_response import DataSourceResponse
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
    api_instance = ksapi.DataSourcesApi(api_client)
    create_data_source_request = ksapi.CreateDataSourceRequest() # CreateDataSourceRequest | 

    try:
        # Create Data Source Handler
        api_response = api_instance.create_data_source(create_data_source_request)
        print("The response of DataSourcesApi->create_data_source:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataSourcesApi->create_data_source: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_data_source_request** | [**CreateDataSourceRequest**](CreateDataSourceRequest.md)|  | 

### Return type

[**DataSourceResponse**](DataSourceResponse.md)

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

# **get_data_source**
> DataSourceDetailResponse get_data_source(data_source_id)

Get Data Source Handler

Describe a connector + the modeled tables the caller can read.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.data_source_detail_response import DataSourceDetailResponse
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
    api_instance = ksapi.DataSourcesApi(api_client)
    data_source_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Get Data Source Handler
        api_response = api_instance.get_data_source(data_source_id)
        print("The response of DataSourcesApi->get_data_source:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataSourcesApi->get_data_source: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_source_id** | **UUID**|  | 

### Return type

[**DataSourceDetailResponse**](DataSourceDetailResponse.md)

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

# **get_data_source_catalog**
> DataSourceCatalogResponse get_data_source_catalog(data_source_id)

Get Data Source Catalog Handler

Live-introspect the external DB so an admin can pick tables to model.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.data_source_catalog_response import DataSourceCatalogResponse
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
    api_instance = ksapi.DataSourcesApi(api_client)
    data_source_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Get Data Source Catalog Handler
        api_response = api_instance.get_data_source_catalog(data_source_id)
        print("The response of DataSourcesApi->get_data_source_catalog:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataSourcesApi->get_data_source_catalog: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_source_id** | **UUID**|  | 

### Return type

[**DataSourceCatalogResponse**](DataSourceCatalogResponse.md)

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

# **model_data_source_table**
> DataSourceTableResponse model_data_source_table(data_source_id, model_table_request)

Model Data Source Table Handler

Model a table as a queryable PathPart child; auto-introspect columns.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.data_source_table_response import DataSourceTableResponse
from ksapi.models.model_table_request import ModelTableRequest
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
    api_instance = ksapi.DataSourcesApi(api_client)
    data_source_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    model_table_request = ksapi.ModelTableRequest() # ModelTableRequest | 

    try:
        # Model Data Source Table Handler
        api_response = api_instance.model_data_source_table(data_source_id, model_table_request)
        print("The response of DataSourcesApi->model_data_source_table:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataSourcesApi->model_data_source_table: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_source_id** | **UUID**|  | 
 **model_table_request** | [**ModelTableRequest**](ModelTableRequest.md)|  | 

### Return type

[**DataSourceTableResponse**](DataSourceTableResponse.md)

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

# **query_data_source**
> DataSourceQueryResponse query_data_source(data_source_id, data_source_query_request)

Query Data Source Handler

Run a read-only SQL query, gated by per-table path permissions.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.data_source_query_request import DataSourceQueryRequest
from ksapi.models.data_source_query_response import DataSourceQueryResponse
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
    api_instance = ksapi.DataSourcesApi(api_client)
    data_source_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    data_source_query_request = ksapi.DataSourceQueryRequest() # DataSourceQueryRequest | 

    try:
        # Query Data Source Handler
        api_response = api_instance.query_data_source(data_source_id, data_source_query_request)
        print("The response of DataSourcesApi->query_data_source:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataSourcesApi->query_data_source: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_source_id** | **UUID**|  | 
 **data_source_query_request** | [**DataSourceQueryRequest**](DataSourceQueryRequest.md)|  | 

### Return type

[**DataSourceQueryResponse**](DataSourceQueryResponse.md)

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

# **test_data_source_connection**
> test_data_source_connection(data_source_id)

Test Data Source Connection Handler

Re-test a saved connector's connection.

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
    api_instance = ksapi.DataSourcesApi(api_client)
    data_source_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Test Data Source Connection Handler
        api_instance.test_data_source_connection(data_source_id)
    except Exception as e:
        print("Exception when calling DataSourcesApi->test_data_source_connection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_source_id** | **UUID**|  | 

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

# **update_data_source_table**
> DataSourceTableResponse update_data_source_table(data_source_id, table_id, update_table_request)

Update Data Source Table Handler

Field-modeling: update the table's description / column allowlist.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.data_source_table_response import DataSourceTableResponse
from ksapi.models.update_table_request import UpdateTableRequest
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
    api_instance = ksapi.DataSourcesApi(api_client)
    data_source_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    table_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    update_table_request = ksapi.UpdateTableRequest() # UpdateTableRequest | 

    try:
        # Update Data Source Table Handler
        api_response = api_instance.update_data_source_table(data_source_id, table_id, update_table_request)
        print("The response of DataSourcesApi->update_data_source_table:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataSourcesApi->update_data_source_table: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_source_id** | **UUID**|  | 
 **table_id** | **UUID**|  | 
 **update_table_request** | [**UpdateTableRequest**](UpdateTableRequest.md)|  | 

### Return type

[**DataSourceTableResponse**](DataSourceTableResponse.md)

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

