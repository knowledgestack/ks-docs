# ksapi.WorkflowDefinitionsApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_workflow_definition**](WorkflowDefinitionsApi.md#create_workflow_definition) | **POST** /v1/workflow-definitions | Create Workflow Definition Handler
[**create_workflow_run**](WorkflowDefinitionsApi.md#create_workflow_run) | **POST** /v1/workflow-definitions/{definition_id}/runs | Create Workflow Run Handler
[**delete_workflow_definition**](WorkflowDefinitionsApi.md#delete_workflow_definition) | **DELETE** /v1/workflow-definitions/{definition_id} | Delete Workflow Definition Handler
[**get_workflow_definition**](WorkflowDefinitionsApi.md#get_workflow_definition) | **GET** /v1/workflow-definitions/{definition_id} | Get Workflow Definition Handler
[**list_workflow_definitions**](WorkflowDefinitionsApi.md#list_workflow_definitions) | **GET** /v1/workflow-definitions | List Workflow Definitions Handler
[**list_workflow_runs**](WorkflowDefinitionsApi.md#list_workflow_runs) | **GET** /v1/workflow-definitions/{definition_id}/runs | List Workflow Runs Handler
[**update_workflow_definition**](WorkflowDefinitionsApi.md#update_workflow_definition) | **PUT** /v1/workflow-definitions/{definition_id} | Update Workflow Definition Handler


# **create_workflow_definition**
> WorkflowDefinitionResponse create_workflow_definition(create_workflow_definition_request)

Create Workflow Definition Handler

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.create_workflow_definition_request import CreateWorkflowDefinitionRequest
from ksapi.models.workflow_definition_response import WorkflowDefinitionResponse
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
    api_instance = ksapi.WorkflowDefinitionsApi(api_client)
    create_workflow_definition_request = ksapi.CreateWorkflowDefinitionRequest() # CreateWorkflowDefinitionRequest | 

    try:
        # Create Workflow Definition Handler
        api_response = api_instance.create_workflow_definition(create_workflow_definition_request)
        print("The response of WorkflowDefinitionsApi->create_workflow_definition:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowDefinitionsApi->create_workflow_definition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_workflow_definition_request** | [**CreateWorkflowDefinitionRequest**](CreateWorkflowDefinitionRequest.md)|  | 

### Return type

[**WorkflowDefinitionResponse**](WorkflowDefinitionResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_workflow_run**
> WorkflowRunResponse create_workflow_run(definition_id, files=files, input_scope=input_scope, idempotency_key=idempotency_key)

Create Workflow Run Handler

Create a NOT_STARTED run draft, optionally seeded with KB references.

All three fields are optional: an empty request creates an empty
draft instantly (the two-step flow — the FE then uploads files into
the run's ``inputs/`` folder and/or PATCHes ``input_scope`` before
Start). Each ``input_scope`` entry is resolved per its part_type: a
DOCUMENT is pinned to its active ``DOCUMENT_VERSION``; a FOLDER is
pinned by reference only and read live by the runner.

``files`` is DEPRECATED — see the field description. When supplied,
uploads are still ingested under ``runs/<id>/inputs/`` so callers
mid-migration keep working, but the call blocks on synchronous S3
upload.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.workflow_run_response import WorkflowRunResponse
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
    api_instance = ksapi.WorkflowDefinitionsApi(api_client)
    definition_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    files = None # List[bytes] | DEPRECATED — do not send files here. Carrying file bytes on run creation makes the call block on synchronous S3 upload (the ~30s 'Create run' wait). Instead create an empty draft (omit this field), then upload each file to the run's ``inputs/`` folder via ``POST /v1/documents/ingest`` with ``path_part_id`` set to the run's ``inputs_path_part_id``; that path ingests asynchronously and auto-syncs the run's state. This field will be removed once the FE has migrated. (optional)
    input_scope = 'input_scope_example' # str | JSON array of ``DOCUMENT`` or ``FOLDER`` path_part UUIDs referenced from the existing knowledge base, pinned onto the new draft's input scope. Optional — omit for an empty draft and add references later via PATCH. (optional)
    idempotency_key = 'idempotency_key_example' # str | Optional key to prevent duplicate runs from retries. (optional)

    try:
        # Create Workflow Run Handler
        api_response = api_instance.create_workflow_run(definition_id, files=files, input_scope=input_scope, idempotency_key=idempotency_key)
        print("The response of WorkflowDefinitionsApi->create_workflow_run:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowDefinitionsApi->create_workflow_run: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **definition_id** | **UUID**|  | 
 **files** | **List[bytes]**| DEPRECATED — do not send files here. Carrying file bytes on run creation makes the call block on synchronous S3 upload (the ~30s &#39;Create run&#39; wait). Instead create an empty draft (omit this field), then upload each file to the run&#39;s &#x60;&#x60;inputs/&#x60;&#x60; folder via &#x60;&#x60;POST /v1/documents/ingest&#x60;&#x60; with &#x60;&#x60;path_part_id&#x60;&#x60; set to the run&#39;s &#x60;&#x60;inputs_path_part_id&#x60;&#x60;; that path ingests asynchronously and auto-syncs the run&#39;s state. This field will be removed once the FE has migrated. | [optional] 
 **input_scope** | **str**| JSON array of &#x60;&#x60;DOCUMENT&#x60;&#x60; or &#x60;&#x60;FOLDER&#x60;&#x60; path_part UUIDs referenced from the existing knowledge base, pinned onto the new draft&#39;s input scope. Optional — omit for an empty draft and add references later via PATCH. | [optional] 
 **idempotency_key** | **str**| Optional key to prevent duplicate runs from retries. | [optional] 

### Return type

[**WorkflowRunResponse**](WorkflowRunResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_workflow_definition**
> delete_workflow_definition(definition_id)

Delete Workflow Definition Handler

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
    api_instance = ksapi.WorkflowDefinitionsApi(api_client)
    definition_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Delete Workflow Definition Handler
        api_instance.delete_workflow_definition(definition_id)
    except Exception as e:
        print("Exception when calling WorkflowDefinitionsApi->delete_workflow_definition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **definition_id** | **UUID**|  | 

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_workflow_definition**
> WorkflowDefinitionResponse get_workflow_definition(definition_id)

Get Workflow Definition Handler

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.workflow_definition_response import WorkflowDefinitionResponse
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
    api_instance = ksapi.WorkflowDefinitionsApi(api_client)
    definition_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Get Workflow Definition Handler
        api_response = api_instance.get_workflow_definition(definition_id)
        print("The response of WorkflowDefinitionsApi->get_workflow_definition:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowDefinitionsApi->get_workflow_definition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **definition_id** | **UUID**|  | 

### Return type

[**WorkflowDefinitionResponse**](WorkflowDefinitionResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_workflow_definitions**
> PaginatedResponseWorkflowDefinitionResponse list_workflow_definitions(limit=limit, offset=offset)

List Workflow Definitions Handler

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.paginated_response_workflow_definition_response import PaginatedResponseWorkflowDefinitionResponse
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
    api_instance = ksapi.WorkflowDefinitionsApi(api_client)
    limit = 20 # int | Number of items per page (optional) (default to 20)
    offset = 0 # int | Number of items to skip (optional) (default to 0)

    try:
        # List Workflow Definitions Handler
        api_response = api_instance.list_workflow_definitions(limit=limit, offset=offset)
        print("The response of WorkflowDefinitionsApi->list_workflow_definitions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowDefinitionsApi->list_workflow_definitions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Number of items per page | [optional] [default to 20]
 **offset** | **int**| Number of items to skip | [optional] [default to 0]

### Return type

[**PaginatedResponseWorkflowDefinitionResponse**](PaginatedResponseWorkflowDefinitionResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_workflow_runs**
> PaginatedResponseWorkflowRunResponse list_workflow_runs(definition_id, limit=limit, offset=offset)

List Workflow Runs Handler

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.paginated_response_workflow_run_response import PaginatedResponseWorkflowRunResponse
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
    api_instance = ksapi.WorkflowDefinitionsApi(api_client)
    definition_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    limit = 20 # int | Number of items per page (optional) (default to 20)
    offset = 0 # int | Number of items to skip (optional) (default to 0)

    try:
        # List Workflow Runs Handler
        api_response = api_instance.list_workflow_runs(definition_id, limit=limit, offset=offset)
        print("The response of WorkflowDefinitionsApi->list_workflow_runs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowDefinitionsApi->list_workflow_runs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **definition_id** | **UUID**|  | 
 **limit** | **int**| Number of items per page | [optional] [default to 20]
 **offset** | **int**| Number of items to skip | [optional] [default to 0]

### Return type

[**PaginatedResponseWorkflowRunResponse**](PaginatedResponseWorkflowRunResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_workflow_definition**
> WorkflowDefinitionResponse update_workflow_definition(definition_id, update_workflow_definition_request)

Update Workflow Definition Handler

Update a workflow definition (PUT semantics).

To move: provide ``parent_path_part_id``. Rejected with 409 while a
run is IN_PROGRESS. The FOR UPDATE load serializes the move against
run start, which takes the same definition-row lock.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.update_workflow_definition_request import UpdateWorkflowDefinitionRequest
from ksapi.models.workflow_definition_response import WorkflowDefinitionResponse
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
    api_instance = ksapi.WorkflowDefinitionsApi(api_client)
    definition_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    update_workflow_definition_request = ksapi.UpdateWorkflowDefinitionRequest() # UpdateWorkflowDefinitionRequest | 

    try:
        # Update Workflow Definition Handler
        api_response = api_instance.update_workflow_definition(definition_id, update_workflow_definition_request)
        print("The response of WorkflowDefinitionsApi->update_workflow_definition:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowDefinitionsApi->update_workflow_definition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **definition_id** | **UUID**|  | 
 **update_workflow_definition_request** | [**UpdateWorkflowDefinitionRequest**](UpdateWorkflowDefinitionRequest.md)|  | 

### Return type

[**WorkflowDefinitionResponse**](WorkflowDefinitionResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

