# ksapi.DataSourcesApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_data_source**](DataSourcesApi.md#create_data_source) | **POST** /v1/data-sources | Create Data Source Handler
[**delete_data_source**](DataSourcesApi.md#delete_data_source) | **DELETE** /v1/data-sources/{data_source_id} | Delete Data Source Handler
[**delete_data_source_schema**](DataSourcesApi.md#delete_data_source_schema) | **DELETE** /v1/data-sources/{data_source_id}/schemas/{schema_id} | Delete Data Source Schema Handler
[**delete_data_source_table**](DataSourcesApi.md#delete_data_source_table) | **DELETE** /v1/data-sources/{data_source_id}/tables/{table_id} | Delete Data Source Table Handler
[**describe_data_source_tables**](DataSourcesApi.md#describe_data_source_tables) | **POST** /v1/data-sources/{data_source_id}/describe | Describe Data Source Tables Handler
[**get_data_source**](DataSourcesApi.md#get_data_source) | **GET** /v1/data-sources/{data_source_id} | Get Data Source Handler
[**get_data_source_catalog**](DataSourcesApi.md#get_data_source_catalog) | **GET** /v1/data-sources/{data_source_id}/catalog | Get Data Source Catalog Handler
[**list_data_source_schemas**](DataSourcesApi.md#list_data_source_schemas) | **GET** /v1/data-sources/{data_source_id}/schemas | List Data Source Schemas Handler
[**model_data_source_table**](DataSourcesApi.md#model_data_source_table) | **POST** /v1/data-sources/{data_source_id}/tables | Model Data Source Table Handler
[**model_data_source_tables**](DataSourcesApi.md#model_data_source_tables) | **POST** /v1/data-sources/{data_source_id}/tables/batch | Model Data Source Tables Handler
[**query_data_source**](DataSourcesApi.md#query_data_source) | **POST** /v1/data-sources/{data_source_id}/query | Query Data Source Handler
[**search_data_source_tables**](DataSourcesApi.md#search_data_source_tables) | **POST** /v1/data-sources/tables/search | Search Data Source Tables Handler
[**sync_data_source**](DataSourcesApi.md#sync_data_source) | **POST** /v1/data-sources/{data_source_id}/sync | Sync Data Source Handler
[**test_data_source_connection**](DataSourcesApi.md#test_data_source_connection) | **POST** /v1/data-sources/{data_source_id}/test | Test Data Source Connection Handler
[**test_data_source_connection_fresh**](DataSourcesApi.md#test_data_source_connection_fresh) | **POST** /v1/data-sources/test-connection | Test Data Source Connection Fresh Handler
[**update_data_source**](DataSourcesApi.md#update_data_source) | **PATCH** /v1/data-sources/{data_source_id} | Update Data Source Handler
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

# **delete_data_source**
> delete_data_source(data_source_id)

Delete Data Source Handler

Move a connector and its schemas/tables to trash.

Soft-delete via the path_part subtree (schemas + tables are children, so
they trash with it). Each modeled table's summary Qdrant point carries that
table's path_part, so the set-trashed workflow flips it to trashed too —
keeping trashed tables out of the agent's table search (best-effort, mirrors
the document delete path).

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
        # Delete Data Source Handler
        api_instance.delete_data_source(data_source_id)
    except Exception as e:
        print("Exception when calling DataSourcesApi->delete_data_source: %s\n" % e)
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

# **delete_data_source_schema**
> delete_data_source_schema(data_source_id, schema_id)

Delete Data Source Schema Handler

Un-model a schema and the tables under it (hard-delete the namespace).

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
    schema_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Delete Data Source Schema Handler
        api_instance.delete_data_source_schema(data_source_id, schema_id)
    except Exception as e:
        print("Exception when calling DataSourcesApi->delete_data_source_schema: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_source_id** | **UUID**|  | 
 **schema_id** | **UUID**|  | 

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

# **delete_data_source_table**
> delete_data_source_table(data_source_id, table_id)

Delete Data Source Table Handler

Un-model a single table (hard-delete it) and purge its summary point.

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
    table_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Delete Data Source Table Handler
        api_instance.delete_data_source_table(data_source_id, table_id)
    except Exception as e:
        print("Exception when calling DataSourcesApi->delete_data_source_table: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_source_id** | **UUID**|  | 
 **table_id** | **UUID**|  | 

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

# **describe_data_source_tables**
> DataSourceDescribeResponse describe_data_source_tables(data_source_id)

Describe Data Source Tables Handler

Summarize + embed each modeled table so the agent can find it by meaning.

Requires ``can_write`` on the connector. Writes one dense Qdrant point per
table (``object_kind=table_description``) so the agent's table search
surfaces the right table across the corpus, while users never see the
summaries in ordinary chunk search. Content-hash gated: a table whose
summary + exposed columns are unchanged makes no LLM/embedding call, so a
repeat call is cheap.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.data_source_describe_response import DataSourceDescribeResponse
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
        # Describe Data Source Tables Handler
        api_response = api_instance.describe_data_source_tables(data_source_id)
        print("The response of DataSourcesApi->describe_data_source_tables:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataSourcesApi->describe_data_source_tables: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_source_id** | **UUID**|  | 

### Return type

[**DataSourceDescribeResponse**](DataSourceDescribeResponse.md)

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
> DataSourceCatalogResponse get_data_source_catalog(data_source_id, var_schema=var_schema)

Get Data Source Catalog Handler

Live-introspect a schema of the external DB so an admin can pick tables.

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
    var_schema = 'var_schema_example' # str | Schema/namespace to introspect (default: connection default) (optional)

    try:
        # Get Data Source Catalog Handler
        api_response = api_instance.get_data_source_catalog(data_source_id, var_schema=var_schema)
        print("The response of DataSourcesApi->get_data_source_catalog:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataSourcesApi->get_data_source_catalog: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_source_id** | **UUID**|  | 
 **var_schema** | **str**| Schema/namespace to introspect (default: connection default) | [optional] 

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

# **list_data_source_schemas**
> DataSourceSchemaListResponse list_data_source_schemas(data_source_id)

List Data Source Schemas Handler

List the source's user namespaces (PG schemas / MySQL databases).

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.data_source_schema_list_response import DataSourceSchemaListResponse
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
        # List Data Source Schemas Handler
        api_response = api_instance.list_data_source_schemas(data_source_id)
        print("The response of DataSourcesApi->list_data_source_schemas:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataSourcesApi->list_data_source_schemas: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_source_id** | **UUID**|  | 

### Return type

[**DataSourceSchemaListResponse**](DataSourceSchemaListResponse.md)

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

Model a table under its (auto-created) Schema PDO; auto-introspect columns.

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

# **model_data_source_tables**
> BulkModelTablesResponse model_data_source_tables(data_source_id, bulk_model_tables_request)

Model Data Source Tables Handler

Import several tables across one or more schemas; per-item results.

Schemas are auto find-or-created. Duplicates are pre-checked against the
already-modeled tables and earlier items in the same batch (so a conflict
never triggers a failed INSERT, which would otherwise roll back the batch's
prior writes); introspection failures are reported per item. One bad item
never aborts the batch.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.bulk_model_tables_request import BulkModelTablesRequest
from ksapi.models.bulk_model_tables_response import BulkModelTablesResponse
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
    bulk_model_tables_request = ksapi.BulkModelTablesRequest() # BulkModelTablesRequest | 

    try:
        # Model Data Source Tables Handler
        api_response = api_instance.model_data_source_tables(data_source_id, bulk_model_tables_request)
        print("The response of DataSourcesApi->model_data_source_tables:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataSourcesApi->model_data_source_tables: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_source_id** | **UUID**|  | 
 **bulk_model_tables_request** | [**BulkModelTablesRequest**](BulkModelTablesRequest.md)|  | 

### Return type

[**BulkModelTablesResponse**](BulkModelTablesResponse.md)

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

# **search_data_source_tables**
> SearchTablesResponse search_data_source_tables(search_tables_request)

Search Data Source Tables Handler

Find modeled tables by the meaning of their summaries (agent discovery).

Dense semantic search over each table's summary, scoped to the tenant
(optionally one connector). Only tables the caller can read are returned;
users never see these summaries in ordinary chunk search.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.search_tables_request import SearchTablesRequest
from ksapi.models.search_tables_response import SearchTablesResponse
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
    search_tables_request = ksapi.SearchTablesRequest() # SearchTablesRequest | 

    try:
        # Search Data Source Tables Handler
        api_response = api_instance.search_data_source_tables(search_tables_request)
        print("The response of DataSourcesApi->search_data_source_tables:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataSourcesApi->search_data_source_tables: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search_tables_request** | [**SearchTablesRequest**](SearchTablesRequest.md)|  | 

### Return type

[**SearchTablesResponse**](SearchTablesResponse.md)

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

# **sync_data_source**
> DataSourceSyncResponse sync_data_source(data_source_id)

Sync Data Source Handler

Reconcile modeled tables against the live external catalog.

Requires ``can_write``. Re-introspects each modeled schema and, per table:
a schema change (columns added/removed/retyped) refreshes ``column_config``
(preserving the admin's ``exposed``/``comment`` field-modeling) and
re-summarizes + re-embeds; an unchanged table is a no-op; a table dropped
from the source is soft-deleted (keeping the "was modeled, now gone" record)
and its embedding purged. It never models tables that were not imported.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.data_source_sync_response import DataSourceSyncResponse
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
        # Sync Data Source Handler
        api_response = api_instance.sync_data_source(data_source_id)
        print("The response of DataSourcesApi->sync_data_source:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataSourcesApi->sync_data_source: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_source_id** | **UUID**|  | 

### Return type

[**DataSourceSyncResponse**](DataSourceSyncResponse.md)

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

# **test_data_source_connection_fresh**
> TestConnectionResponse test_data_source_connection_fresh(test_connection_request)

Test Data Source Connection Fresh Handler

Probe fresh creds or a stored connector without persisting anything.

Returns a 200 body describing success/failure (vs the 400 the create/test
routes raise) so the FE can render inline connection validation.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.test_connection_request import TestConnectionRequest
from ksapi.models.test_connection_response import TestConnectionResponse
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
    test_connection_request = ksapi.TestConnectionRequest() # TestConnectionRequest | 

    try:
        # Test Data Source Connection Fresh Handler
        api_response = api_instance.test_data_source_connection_fresh(test_connection_request)
        print("The response of DataSourcesApi->test_data_source_connection_fresh:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataSourcesApi->test_data_source_connection_fresh: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **test_connection_request** | [**TestConnectionRequest**](TestConnectionRequest.md)|  | 

### Return type

[**TestConnectionResponse**](TestConnectionResponse.md)

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

# **update_data_source**
> DataSourceResponse update_data_source(data_source_id, update_data_source_request)

Update Data Source Handler

Rename, move, and/or re-credential a connector.

Requires ``can_write`` on the connector (and on the destination folder
for a move). Fresh ``connection_config`` is re-validated against the DB
before persisting (bad creds → 400, consistent with create); creds are
never echoed back. ``engine`` is immutable.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.data_source_response import DataSourceResponse
from ksapi.models.update_data_source_request import UpdateDataSourceRequest
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
    update_data_source_request = ksapi.UpdateDataSourceRequest() # UpdateDataSourceRequest | 

    try:
        # Update Data Source Handler
        api_response = api_instance.update_data_source(data_source_id, update_data_source_request)
        print("The response of DataSourcesApi->update_data_source:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataSourcesApi->update_data_source: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_source_id** | **UUID**|  | 
 **update_data_source_request** | [**UpdateDataSourceRequest**](UpdateDataSourceRequest.md)|  | 

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
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_data_source_table**
> DataSourceTableResponse update_data_source_table(data_source_id, table_id, update_table_request)

Update Data Source Table Handler

Field-modeling: update the table's column allowlist.

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

