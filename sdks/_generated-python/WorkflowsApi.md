# ksapi.WorkflowsApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel_temporal_workflow**](WorkflowsApi.md#cancel_temporal_workflow) | **DELETE** /v1/workflows/{workflow_id} | Cancel Temporal Workflow Handler
[**dv_workflow_rerun**](WorkflowsApi.md#dv_workflow_rerun) | **POST** /v1/workflows/document_versions/{workflow_id} | Dv Workflow Rerun Handler
[**get_dv_workflow**](WorkflowsApi.md#get_dv_workflow) | **GET** /v1/workflows/document_versions/{workflow_id} | Get Dv Workflow Handler
[**get_temporal_workflow_status**](WorkflowsApi.md#get_temporal_workflow_status) | **GET** /v1/workflows/{workflow_id} | Get Temporal Workflow Status Handler
[**list_dv_workflows**](WorkflowsApi.md#list_dv_workflows) | **GET** /v1/workflows/document_versions | List Dv Workflows Handler


# **cancel_temporal_workflow**
> WorkflowCancelResponse cancel_temporal_workflow(workflow_id, authorization=authorization, ks_uat=ks_uat)

Cancel Temporal Workflow Handler

Cancel any Temporal workflow owned by the caller's tenant.

No status guard — this is a thin Temporal wrapper. Cancelling an
already-terminal workflow is a no-op on the Temporal side.

### Example


```python
import ksapi
from ksapi.models.workflow_cancel_response import WorkflowCancelResponse
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
    api_instance = ksapi.WorkflowsApi(api_client)
    workflow_id = 'workflow_id_example' # str | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Cancel Temporal Workflow Handler
        api_response = api_instance.cancel_temporal_workflow(workflow_id, authorization=authorization, ks_uat=ks_uat)
        print("The response of WorkflowsApi->cancel_temporal_workflow:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowsApi->cancel_temporal_workflow: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workflow_id** | **str**|  | 
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**WorkflowCancelResponse**](WorkflowCancelResponse.md)

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

# **dv_workflow_rerun**
> WorkflowActionResponse dv_workflow_rerun(workflow_id, authorization=authorization, ks_uat=ks_uat)

Dv Workflow Rerun Handler

Rerun a workflow. USER role requires ``can_write`` on the document path.

``s3_client`` is injected because ``DocumentIngestionService.__init__``
requires it, even though the re-ingestion path reuses the existing S3 source.

### Example


```python
import ksapi
from ksapi.models.workflow_action_response import WorkflowActionResponse
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
    api_instance = ksapi.WorkflowsApi(api_client)
    workflow_id = 'workflow_id_example' # str | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Dv Workflow Rerun Handler
        api_response = api_instance.dv_workflow_rerun(workflow_id, authorization=authorization, ks_uat=ks_uat)
        print("The response of WorkflowsApi->dv_workflow_rerun:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowsApi->dv_workflow_rerun: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workflow_id** | **str**|  | 
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**WorkflowActionResponse**](WorkflowActionResponse.md)

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

# **get_dv_workflow**
> WorkflowDetailResponse get_dv_workflow(workflow_id, authorization=authorization, ks_uat=ks_uat)

Get Dv Workflow Handler

Get single workflow detail with live Temporal status.

### Example


```python
import ksapi
from ksapi.models.workflow_detail_response import WorkflowDetailResponse
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
    api_instance = ksapi.WorkflowsApi(api_client)
    workflow_id = 'workflow_id_example' # str | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Get Dv Workflow Handler
        api_response = api_instance.get_dv_workflow(workflow_id, authorization=authorization, ks_uat=ks_uat)
        print("The response of WorkflowsApi->get_dv_workflow:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowsApi->get_dv_workflow: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workflow_id** | **str**|  | 
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**WorkflowDetailResponse**](WorkflowDetailResponse.md)

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

# **get_temporal_workflow_status**
> TemporalWorkflowStatusResponse get_temporal_workflow_status(workflow_id, authorization=authorization, ks_uat=ks_uat)

Get Temporal Workflow Status Handler

Get live Temporal status for any workflow owned by the caller's tenant.

### Example


```python
import ksapi
from ksapi.models.temporal_workflow_status_response import TemporalWorkflowStatusResponse
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
    api_instance = ksapi.WorkflowsApi(api_client)
    workflow_id = 'workflow_id_example' # str | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Get Temporal Workflow Status Handler
        api_response = api_instance.get_temporal_workflow_status(workflow_id, authorization=authorization, ks_uat=ks_uat)
        print("The response of WorkflowsApi->get_temporal_workflow_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowsApi->get_temporal_workflow_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workflow_id** | **str**|  | 
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**TemporalWorkflowStatusResponse**](TemporalWorkflowStatusResponse.md)

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

# **list_dv_workflows**
> PaginatedResponseWorkflowSummaryResponse list_dv_workflows(limit=limit, offset=offset, authorization=authorization, ks_uat=ks_uat)

List Dv Workflows Handler

List all workflows for the current tenant (paginated, DB-backed).

ADMIN/OWNER see all workflows; USER sees only those under permitted paths.

### Example


```python
import ksapi
from ksapi.models.paginated_response_workflow_summary_response import PaginatedResponseWorkflowSummaryResponse
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
    api_instance = ksapi.WorkflowsApi(api_client)
    limit = 20 # int | Number of items per page (optional) (default to 20)
    offset = 0 # int | Number of items to skip (optional) (default to 0)
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # List Dv Workflows Handler
        api_response = api_instance.list_dv_workflows(limit=limit, offset=offset, authorization=authorization, ks_uat=ks_uat)
        print("The response of WorkflowsApi->list_dv_workflows:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowsApi->list_dv_workflows: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Number of items per page | [optional] [default to 20]
 **offset** | **int**| Number of items to skip | [optional] [default to 0]
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**PaginatedResponseWorkflowSummaryResponse**](PaginatedResponseWorkflowSummaryResponse.md)

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

