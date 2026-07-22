# ksapi.WorkflowRunsApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clone_workflow_run**](WorkflowRunsApi.md#clone_workflow_run) | **POST** /v1/workflow-runs/{run_id}/clone | Clone Workflow Run Handler
[**delete_workflow_run**](WorkflowRunsApi.md#delete_workflow_run) | **DELETE** /v1/workflow-runs/{run_id} | Delete Workflow Run Handler
[**get_workflow_run**](WorkflowRunsApi.md#get_workflow_run) | **GET** /v1/workflow-runs/{run_id} | Get Workflow Run Handler
[**get_workflow_runs_summary**](WorkflowRunsApi.md#get_workflow_runs_summary) | **GET** /v1/workflow-runs/summary | Get Workflow Runs Summary Handler
[**list_workflow_runs_for_tenant**](WorkflowRunsApi.md#list_workflow_runs_for_tenant) | **GET** /v1/workflow-runs | List Workflow Runs For Tenant Handler
[**resume_workflow_run**](WorkflowRunsApi.md#resume_workflow_run) | **POST** /v1/workflow-runs/{run_id}/resume | Resume Workflow Run Handler
[**retry_workflow_run**](WorkflowRunsApi.md#retry_workflow_run) | **POST** /v1/workflow-runs/{run_id}/retry | Retry Workflow Run Handler
[**set_workflow_run_approval**](WorkflowRunsApi.md#set_workflow_run_approval) | **POST** /v1/workflow-runs/{run_id}/approval | Set Workflow Run Approval Handler
[**start_workflow_run**](WorkflowRunsApi.md#start_workflow_run) | **POST** /v1/workflow-runs/{run_id}/start | Start Workflow Run Handler
[**stop_workflow_run**](WorkflowRunsApi.md#stop_workflow_run) | **POST** /v1/workflow-runs/{run_id}/stop | Stop Workflow Run Handler
[**update_workflow_run**](WorkflowRunsApi.md#update_workflow_run) | **PATCH** /v1/workflow-runs/{run_id} | Update Workflow Run Handler
[**workflow_run_callback**](WorkflowRunsApi.md#workflow_run_callback) | **POST** /v1/workflow-runs/{run_id}/callback | Workflow Run Callback Handler


# **clone_workflow_run**
> WorkflowRunResponse clone_workflow_run(run_id, clone_workflow_run_request)

Clone Workflow Run Handler

Clone a started run into a new NOT_STARTED draft.

``include_inputs=True`` pins the source's snapshotted inputs onto
the new run; uploads stay in the source's ``inputs/`` and are
referenced by path_part_id. No S3 copy. A NOT_STARTED source has
no snapshot to pin → 409. The clone is born NOT_STARTED so the
user can edit it (PATCH) before pressing Start.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.clone_workflow_run_request import CloneWorkflowRunRequest
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
    api_instance = ksapi.WorkflowRunsApi(api_client)
    run_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    clone_workflow_run_request = ksapi.CloneWorkflowRunRequest() # CloneWorkflowRunRequest | 

    try:
        # Clone Workflow Run Handler
        api_response = api_instance.clone_workflow_run(run_id, clone_workflow_run_request)
        print("The response of WorkflowRunsApi->clone_workflow_run:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowRunsApi->clone_workflow_run: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **run_id** | **UUID**|  | 
 **clone_workflow_run_request** | [**CloneWorkflowRunRequest**](CloneWorkflowRunRequest.md)|  | 

### Return type

[**WorkflowRunResponse**](WorkflowRunResponse.md)

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

# **delete_workflow_run**
> delete_workflow_run(run_id)

Delete Workflow Run Handler

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
    api_instance = ksapi.WorkflowRunsApi(api_client)
    run_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Delete Workflow Run Handler
        api_instance.delete_workflow_run(run_id)
    except Exception as e:
        print("Exception when calling WorkflowRunsApi->delete_workflow_run: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **run_id** | **UUID**|  | 

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

# **get_workflow_run**
> WorkflowRunResponse get_workflow_run(run_id)

Get Workflow Run Handler

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
    api_instance = ksapi.WorkflowRunsApi(api_client)
    run_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Get Workflow Run Handler
        api_response = api_instance.get_workflow_run(run_id)
        print("The response of WorkflowRunsApi->get_workflow_run:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowRunsApi->get_workflow_run: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **run_id** | **UUID**|  | 

### Return type

[**WorkflowRunResponse**](WorkflowRunResponse.md)

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

# **get_workflow_runs_summary**
> WorkflowRunSummaryResponse get_workflow_runs_summary(since=since, until=until, definition_id=definition_id)

Get Workflow Runs Summary Handler

Aggregate workflow-runs health, read-gated and permission-scoped.

Numbers cover only runs under workflows the caller can read (OWNER/ADMIN
⇒ tenant-wide). Windowed metrics default to the last 7 days; the approval
backlog and active-definition count are point-in-time.

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
    api_instance = ksapi.WorkflowRunsApi(api_client)
    since = '2013-10-20T19:20:30+01:00' # datetime | Window start (inclusive). Defaults to 7 days ago. (optional)
    until = '2013-10-20T19:20:30+01:00' # datetime | Window end (inclusive). Defaults to open-ended. (optional)
    definition_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Scope all numbers to one workflow (requires read). (optional)

    try:
        # Get Workflow Runs Summary Handler
        api_response = api_instance.get_workflow_runs_summary(since=since, until=until, definition_id=definition_id)
        print("The response of WorkflowRunsApi->get_workflow_runs_summary:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowRunsApi->get_workflow_runs_summary: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **since** | **datetime**| Window start (inclusive). Defaults to 7 days ago. | [optional] 
 **until** | **datetime**| Window end (inclusive). Defaults to open-ended. | [optional] 
 **definition_id** | **UUID**| Scope all numbers to one workflow (requires read). | [optional] 

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

# **list_workflow_runs_for_tenant**
> PaginatedResponseWorkflowRunResponse list_workflow_runs_for_tenant(state=state, mine=mine, approvable_by_me=approvable_by_me, definition_id=definition_id, owner_id=owner_id, sort_by=sort_by, sort_dir=sort_dir, limit=limit, offset=offset, created_after=created_after, created_before=created_before, updated_after=updated_after, updated_before=updated_before, approval_state=approval_state, include_tag_ids=include_tag_ids, exclude_tag_ids=exclude_tag_ids)

List Workflow Runs For Tenant Handler

List runs across every workflow in the tenant, permission-scoped.

The single spine behind the dashboard worklists — the FE composes its
tabs from preset filters (``mine`` + ``state``, and the approval worklist
``approval_state=pending`` + ``approvable_by_me``). Visibility follows the
same model as the per-definition list: OWNER/ADMIN see all; a USER sees
runs under workflows they can read.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.paginated_response_workflow_run_response import PaginatedResponseWorkflowRunResponse
from ksapi.models.path_part_approval_state import PathPartApprovalState
from ksapi.models.sort_direction import SortDirection
from ksapi.models.workflow_execution_state import WorkflowExecutionState
from ksapi.models.workflow_run_order import WorkflowRunOrder
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
    api_instance = ksapi.WorkflowRunsApi(api_client)
    state = [ksapi.WorkflowExecutionState()] # List[WorkflowExecutionState] | Keep only runs in these execution states (repeatable). (optional)
    mine = False # bool | Only runs the caller created (owner). Overrides owner_id. (optional) (default to False)
    approvable_by_me = False # bool | Only runs the caller may approve (approve-path scoped). Compose with approval_state=pending for the approval worklist. (optional) (default to False)
    definition_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Only runs under this workflow definition. (optional)
    owner_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Only runs created by this user. (optional)
    sort_by = ksapi.WorkflowRunOrder() # WorkflowRunOrder | Field to sort runs by (default: STARTED_AT) (optional)
    sort_dir = ksapi.SortDirection() # SortDirection | Sort direction; overrides the field's natural default (optional)
    limit = 20 # int | Number of items per page (optional) (default to 20)
    offset = 0 # int | Number of items to skip (optional) (default to 0)
    created_after = '2013-10-20T19:20:30+01:00' # datetime | Only items created at or after this timestamp (inclusive) (optional)
    created_before = '2013-10-20T19:20:30+01:00' # datetime | Only items created strictly before this timestamp (optional)
    updated_after = '2013-10-20T19:20:30+01:00' # datetime | Only items updated at or after this timestamp (inclusive) (optional)
    updated_before = '2013-10-20T19:20:30+01:00' # datetime | Only items updated strictly before this timestamp (optional)
    approval_state = [ksapi.PathPartApprovalState()] # List[PathPartApprovalState] | Keep only items in these approval states (repeatable): not_required, pending, approved. (optional)
    include_tag_ids = None # List[UUID] | Keep only items that carry at least one of these tags on the item itself or any ancestor folder (repeatable, OR / tag inheritance). (optional)
    exclude_tag_ids = None # List[UUID] | Drop items that carry any of these tags on the item itself or any ancestor folder (repeatable). Takes precedence over include_tag_ids. (optional)

    try:
        # List Workflow Runs For Tenant Handler
        api_response = api_instance.list_workflow_runs_for_tenant(state=state, mine=mine, approvable_by_me=approvable_by_me, definition_id=definition_id, owner_id=owner_id, sort_by=sort_by, sort_dir=sort_dir, limit=limit, offset=offset, created_after=created_after, created_before=created_before, updated_after=updated_after, updated_before=updated_before, approval_state=approval_state, include_tag_ids=include_tag_ids, exclude_tag_ids=exclude_tag_ids)
        print("The response of WorkflowRunsApi->list_workflow_runs_for_tenant:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowRunsApi->list_workflow_runs_for_tenant: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **state** | [**List[WorkflowExecutionState]**](WorkflowExecutionState.md)| Keep only runs in these execution states (repeatable). | [optional] 
 **mine** | **bool**| Only runs the caller created (owner). Overrides owner_id. | [optional] [default to False]
 **approvable_by_me** | **bool**| Only runs the caller may approve (approve-path scoped). Compose with approval_state&#x3D;pending for the approval worklist. | [optional] [default to False]
 **definition_id** | **UUID**| Only runs under this workflow definition. | [optional] 
 **owner_id** | **UUID**| Only runs created by this user. | [optional] 
 **sort_by** | [**WorkflowRunOrder**](.md)| Field to sort runs by (default: STARTED_AT) | [optional] 
 **sort_dir** | [**SortDirection**](.md)| Sort direction; overrides the field&#39;s natural default | [optional] 
 **limit** | **int**| Number of items per page | [optional] [default to 20]
 **offset** | **int**| Number of items to skip | [optional] [default to 0]
 **created_after** | **datetime**| Only items created at or after this timestamp (inclusive) | [optional] 
 **created_before** | **datetime**| Only items created strictly before this timestamp | [optional] 
 **updated_after** | **datetime**| Only items updated at or after this timestamp (inclusive) | [optional] 
 **updated_before** | **datetime**| Only items updated strictly before this timestamp | [optional] 
 **approval_state** | [**List[PathPartApprovalState]**](PathPartApprovalState.md)| Keep only items in these approval states (repeatable): not_required, pending, approved. | [optional] 
 **include_tag_ids** | [**List[UUID]**](UUID.md)| Keep only items that carry at least one of these tags on the item itself or any ancestor folder (repeatable, OR / tag inheritance). | [optional] 
 **exclude_tag_ids** | [**List[UUID]**](UUID.md)| Drop items that carry any of these tags on the item itself or any ancestor folder (repeatable). Takes precedence over include_tag_ids. | [optional] 

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
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resume_workflow_run**
> WorkflowRunResponse resume_workflow_run(run_id)

Resume Workflow Run Handler

Continue a FAILED run in place instead of restarting it.

Unlike ``retry`` (which restarts the agent cold), ``resume`` loads the run's
surviving thread history — the checkpoint summary and any persisted partial
reply — and re-hydrates ``/work/``, so a run that timed out or was stopped
near the end finishes from where it left off rather than redoing the work.
Same guards as retry: 409 if the run is not FAILED or was never started;
triggerer or OWNER/ADMIN only.

Runs in the background — poll ``GET /v1/workflow-runs/{run_id}`` (also given
in the ``Location`` header) until ``execution_state`` is COMPLETED or FAILED.

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
    api_instance = ksapi.WorkflowRunsApi(api_client)
    run_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Resume Workflow Run Handler
        api_response = api_instance.resume_workflow_run(run_id)
        print("The response of WorkflowRunsApi->resume_workflow_run:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowRunsApi->resume_workflow_run: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **run_id** | **UUID**|  | 

### Return type

[**WorkflowRunResponse**](WorkflowRunResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Successful Response |  * Location - Poll this run resource until &#x60;&#x60;execution_state&#x60;&#x60; is COMPLETED or FAILED. <br>  |
**422** | Validation Error |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retry_workflow_run**
> WorkflowRunResponse retry_workflow_run(run_id)

Retry Workflow Run Handler

Re-run a FAILED run (including a user-stopped one) from scratch.

Restarts the agent cold: flips ``FAILED -> IN_PROGRESS`` against the run's
existing snapshot and re-dispatches with empty history. Use ``resume`` to
continue from surviving history instead. 409 if the run is not FAILED
(NOT_STARTED/PENDING use Start; COMPLETED is cloned) or was never started.
Triggerer or OWNER/ADMIN only.

Runs in the background — poll ``GET /v1/workflow-runs/{run_id}`` (also given
in the ``Location`` header) until ``execution_state`` is COMPLETED or FAILED.

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
    api_instance = ksapi.WorkflowRunsApi(api_client)
    run_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Retry Workflow Run Handler
        api_response = api_instance.retry_workflow_run(run_id)
        print("The response of WorkflowRunsApi->retry_workflow_run:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowRunsApi->retry_workflow_run: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **run_id** | **UUID**|  | 

### Return type

[**WorkflowRunResponse**](WorkflowRunResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Successful Response |  * Location - Poll this run resource until &#x60;&#x60;execution_state&#x60;&#x60; is COMPLETED or FAILED. <br>  |
**422** | Validation Error |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **set_workflow_run_approval**
> WorkflowRunResponse set_workflow_run_approval(run_id, set_workflow_run_approval_request)

Set Workflow Run Approval Handler

Approve an entire completed run in one call.

Approves every output document under ``outputs/`` then the run folder.
The run must be ``COMPLETED`` and its definition must have required
approval. Requires approve access to the run folder and refuses agents
(assumed identities) — approval is human-in-the-loop. ``run_id`` is the
WorkflowRun id.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.set_workflow_run_approval_request import SetWorkflowRunApprovalRequest
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
    api_instance = ksapi.WorkflowRunsApi(api_client)
    run_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    set_workflow_run_approval_request = ksapi.SetWorkflowRunApprovalRequest() # SetWorkflowRunApprovalRequest | 

    try:
        # Set Workflow Run Approval Handler
        api_response = api_instance.set_workflow_run_approval(run_id, set_workflow_run_approval_request)
        print("The response of WorkflowRunsApi->set_workflow_run_approval:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowRunsApi->set_workflow_run_approval: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **run_id** | **UUID**|  | 
 **set_workflow_run_approval_request** | [**SetWorkflowRunApprovalRequest**](SetWorkflowRunApprovalRequest.md)|  | 

### Return type

[**WorkflowRunResponse**](WorkflowRunResponse.md)

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

# **start_workflow_run**
> WorkflowRunResponse start_workflow_run(run_id, start_workflow_run_request=start_workflow_run_request)

Start Workflow Run Handler

Flip a NOT_STARTED run to IN_PROGRESS and dispatch its agent run.

Idempotent on IN_PROGRESS (returns the row). Terminal states → 409.
Inputs still ingesting or in a failed terminal state → 409. The
snapshot is built at this point (KB DOCUMENTs resolve to active
versions, uploaded DVs are walked from inputs/, KB FOLDERs stay live).

The body is optional; ``user_message`` (when sent) is pinned into the
snapshot and shown in the run thread (see ``StartWorkflowRunRequest``).

The run executes in the background — poll ``GET /v1/workflow-runs/{run_id}``
(also given in the ``Location`` header) until ``execution_state`` is
COMPLETED or FAILED. There is no completion webhook.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.start_workflow_run_request import StartWorkflowRunRequest
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
    api_instance = ksapi.WorkflowRunsApi(api_client)
    run_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    start_workflow_run_request = ksapi.StartWorkflowRunRequest() # StartWorkflowRunRequest |  (optional)

    try:
        # Start Workflow Run Handler
        api_response = api_instance.start_workflow_run(run_id, start_workflow_run_request=start_workflow_run_request)
        print("The response of WorkflowRunsApi->start_workflow_run:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowRunsApi->start_workflow_run: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **run_id** | **UUID**|  | 
 **start_workflow_run_request** | [**StartWorkflowRunRequest**](StartWorkflowRunRequest.md)|  | [optional] 

### Return type

[**WorkflowRunResponse**](WorkflowRunResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Successful Response |  * Location - Poll this run resource until &#x60;&#x60;execution_state&#x60;&#x60; is COMPLETED or FAILED. <br>  |
**422** | Validation Error |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stop_workflow_run**
> WorkflowRunResponse stop_workflow_run(run_id)

Stop Workflow Run Handler

Stop a running workflow run, terminalizing it so its thread un-bricks.

Marks the run ``FAILED`` ("Stopped by user") with a pure DB write (no Temporal
dependency, so it also recovers a run stranded ``IN_PROGRESS`` by a lost
cancel callback), then best-effort revokes the streaming reply's lease and
cancels the Temporal workflow. Revoking the lease is what makes stop
authoritative — the cancel only *requests* a cooperative stop; see
docs/api/notification_system.md for the lease protocol.

Idempotent: a terminal or not-yet-started run is returned unchanged (the
``mark_run_failed`` guard + the callback's ``already_terminal`` no-op keep a
real completion landing concurrently safe).

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
    api_instance = ksapi.WorkflowRunsApi(api_client)
    run_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Stop Workflow Run Handler
        api_response = api_instance.stop_workflow_run(run_id)
        print("The response of WorkflowRunsApi->stop_workflow_run:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowRunsApi->stop_workflow_run: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **run_id** | **UUID**|  | 

### Return type

[**WorkflowRunResponse**](WorkflowRunResponse.md)

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

# **update_workflow_run**
> WorkflowRunResponse update_workflow_run(run_id, update_workflow_run_request)

Update Workflow Run Handler

Edit a NOT_STARTED run's KB scope, name, and / or auto_start.

Both body fields are optional but at least one must be present. The
run must be ``NOT_STARTED`` or ``PENDING`` (409 otherwise). Caller must be
the triggerer or OWNER/ADMIN (403 otherwise). A name collision with a
sibling run under the same definition's ``runs/`` folder maps to a
409 via ``IntegrityError`` translation.

Arming ``auto_start`` on a run that is already ``NOT_STARTED`` (its inputs
have settled) dispatches it immediately — the run would otherwise never
receive an ingestion-completion hook to start it. A ``PENDING`` run is
left to auto-advance when its uploads finish.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.update_workflow_run_request import UpdateWorkflowRunRequest
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
    api_instance = ksapi.WorkflowRunsApi(api_client)
    run_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    update_workflow_run_request = ksapi.UpdateWorkflowRunRequest() # UpdateWorkflowRunRequest | 

    try:
        # Update Workflow Run Handler
        api_response = api_instance.update_workflow_run(run_id, update_workflow_run_request)
        print("The response of WorkflowRunsApi->update_workflow_run:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowRunsApi->update_workflow_run: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **run_id** | **UUID**|  | 
 **update_workflow_run_request** | [**UpdateWorkflowRunRequest**](UpdateWorkflowRunRequest.md)|  | 

### Return type

[**WorkflowRunResponse**](WorkflowRunResponse.md)

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

# **workflow_run_callback**
> WorkflowCallbackResponse workflow_run_callback(run_id, workflow_run_callback_request)

Workflow Run Callback Handler

Terminal-state write seam for the in-process agent runner.

The gating Temporal activities ``mark_run_completed_activity`` and
``mark_run_failed_activity`` authenticate as the triggering user
(via ``assume_user``) and POST here. Only the user who triggered the
run (or OWNER/ADMIN) may write its terminal state. The handler is
idempotent: a callback against an already-terminal row returns
``already_terminal`` and the activity-level retry treats it as a
no-op.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.workflow_callback_response import WorkflowCallbackResponse
from ksapi.models.workflow_run_callback_request import WorkflowRunCallbackRequest
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
    api_instance = ksapi.WorkflowRunsApi(api_client)
    run_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    workflow_run_callback_request = ksapi.WorkflowRunCallbackRequest() # WorkflowRunCallbackRequest | 

    try:
        # Workflow Run Callback Handler
        api_response = api_instance.workflow_run_callback(run_id, workflow_run_callback_request)
        print("The response of WorkflowRunsApi->workflow_run_callback:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowRunsApi->workflow_run_callback: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **run_id** | **UUID**|  | 
 **workflow_run_callback_request** | [**WorkflowRunCallbackRequest**](WorkflowRunCallbackRequest.md)|  | 

### Return type

[**WorkflowCallbackResponse**](WorkflowCallbackResponse.md)

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

