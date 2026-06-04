# ksapi.WorkflowRunsApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clone_workflow_run**](WorkflowRunsApi.md#clone_workflow_run) | **POST** /v1/workflow-runs/{run_id}/clone | Clone Workflow Run Handler
[**delete_workflow_run**](WorkflowRunsApi.md#delete_workflow_run) | **DELETE** /v1/workflow-runs/{run_id} | Delete Workflow Run Handler
[**get_workflow_run**](WorkflowRunsApi.md#get_workflow_run) | **GET** /v1/workflow-runs/{run_id} | Get Workflow Run Handler
[**retry_workflow_run**](WorkflowRunsApi.md#retry_workflow_run) | **POST** /v1/workflow-runs/{run_id}/retry | Retry Workflow Run Handler
[**set_workflow_run_approval**](WorkflowRunsApi.md#set_workflow_run_approval) | **POST** /v1/workflow-runs/{run_id}/approval | Set Workflow Run Approval Handler
[**start_workflow_run**](WorkflowRunsApi.md#start_workflow_run) | **POST** /v1/workflow-runs/{run_id}/start | Start Workflow Run Handler
[**stop_workflow_run**](WorkflowRunsApi.md#stop_workflow_run) | **POST** /v1/workflow-runs/{run_id}/stop | Stop Workflow Run Handler
[**update_workflow_run**](WorkflowRunsApi.md#update_workflow_run) | **PATCH** /v1/workflow-runs/{run_id} | Update Workflow Run Handler
[**workflow_run_callback**](WorkflowRunsApi.md#workflow_run_callback) | **POST** /v1/workflow-runs/{run_id}/callback | Workflow Run Callback Handler


# **clone_workflow_run**
> WorkflowRunResponse clone_workflow_run(run_id, clone_workflow_run_request, authorization=authorization, ks_uat=ks_uat)

Clone Workflow Run Handler

Clone a started run into a new NOT_STARTED draft.

``include_inputs=True`` pins the source's snapshotted inputs onto
the new run; uploads stay in the source's ``inputs/`` and are
referenced by path_part_id. No S3 copy. A NOT_STARTED source has
no snapshot to pin → 409. The clone is born NOT_STARTED so the
user can edit it (PATCH) before pressing Start.

### Example


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


# Enter a context with an instance of the API client
with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.WorkflowRunsApi(api_client)
    run_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    clone_workflow_run_request = ksapi.CloneWorkflowRunRequest() # CloneWorkflowRunRequest | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Clone Workflow Run Handler
        api_response = api_instance.clone_workflow_run(run_id, clone_workflow_run_request, authorization=authorization, ks_uat=ks_uat)
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
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**WorkflowRunResponse**](WorkflowRunResponse.md)

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

# **delete_workflow_run**
> delete_workflow_run(run_id, authorization=authorization, ks_uat=ks_uat)

Delete Workflow Run Handler

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
    api_instance = ksapi.WorkflowRunsApi(api_client)
    run_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Delete Workflow Run Handler
        api_instance.delete_workflow_run(run_id, authorization=authorization, ks_uat=ks_uat)
    except Exception as e:
        print("Exception when calling WorkflowRunsApi->delete_workflow_run: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **run_id** | **UUID**|  | 
 **authorization** | **str**|  | [optional] 
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

# **get_workflow_run**
> WorkflowRunResponse get_workflow_run(run_id, authorization=authorization, ks_uat=ks_uat)

Get Workflow Run Handler

### Example


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


# Enter a context with an instance of the API client
with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.WorkflowRunsApi(api_client)
    run_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Get Workflow Run Handler
        api_response = api_instance.get_workflow_run(run_id, authorization=authorization, ks_uat=ks_uat)
        print("The response of WorkflowRunsApi->get_workflow_run:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowRunsApi->get_workflow_run: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **run_id** | **UUID**|  | 
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**WorkflowRunResponse**](WorkflowRunResponse.md)

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

# **retry_workflow_run**
> WorkflowRunResponse retry_workflow_run(run_id, authorization=authorization, ks_uat=ks_uat)

Retry Workflow Run Handler

Re-run a FAILED run (including a user-stopped one) in place.

Flips ``FAILED -> IN_PROGRESS`` against the run's existing snapshot and
re-dispatches the agent. 409 if the run is not FAILED (NOT_STARTED/PENDING
use Start; COMPLETED is cloned) or was never started. Triggerer or
OWNER/ADMIN only.

### Example


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


# Enter a context with an instance of the API client
with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.WorkflowRunsApi(api_client)
    run_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Retry Workflow Run Handler
        api_response = api_instance.retry_workflow_run(run_id, authorization=authorization, ks_uat=ks_uat)
        print("The response of WorkflowRunsApi->retry_workflow_run:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowRunsApi->retry_workflow_run: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **run_id** | **UUID**|  | 
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**WorkflowRunResponse**](WorkflowRunResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **set_workflow_run_approval**
> WorkflowRunResponse set_workflow_run_approval(run_id, set_workflow_run_approval_request, authorization=authorization, ks_uat=ks_uat)

Set Workflow Run Approval Handler

Approve an entire completed run in one call.

Approves every output document under ``outputs/`` then the run folder.
The run must be ``COMPLETED`` and its definition must have required
approval. Requires write access to the run folder. ``run_id`` is the
WorkflowRun id.

### Example


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


# Enter a context with an instance of the API client
with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.WorkflowRunsApi(api_client)
    run_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    set_workflow_run_approval_request = ksapi.SetWorkflowRunApprovalRequest() # SetWorkflowRunApprovalRequest | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Set Workflow Run Approval Handler
        api_response = api_instance.set_workflow_run_approval(run_id, set_workflow_run_approval_request, authorization=authorization, ks_uat=ks_uat)
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
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**WorkflowRunResponse**](WorkflowRunResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **start_workflow_run**
> WorkflowRunResponse start_workflow_run(run_id, authorization=authorization, ks_uat=ks_uat)

Start Workflow Run Handler

Flip a NOT_STARTED run to IN_PROGRESS and dispatch its agent run.

Idempotent on IN_PROGRESS (returns the row). Terminal states → 409.
Inputs still ingesting or in a failed terminal state → 409. The
snapshot is built at this point (KB DOCUMENTs resolve to active
versions, uploaded DVs are walked from inputs/, KB FOLDERs stay live).

### Example


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


# Enter a context with an instance of the API client
with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.WorkflowRunsApi(api_client)
    run_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Start Workflow Run Handler
        api_response = api_instance.start_workflow_run(run_id, authorization=authorization, ks_uat=ks_uat)
        print("The response of WorkflowRunsApi->start_workflow_run:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowRunsApi->start_workflow_run: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **run_id** | **UUID**|  | 
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**WorkflowRunResponse**](WorkflowRunResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stop_workflow_run**
> WorkflowRunResponse stop_workflow_run(run_id, authorization=authorization, ks_uat=ks_uat)

Stop Workflow Run Handler

Stop a running workflow run, terminalizing it so its thread un-bricks.

While a run sits ``IN_PROGRESS`` its run thread is read-only: every new USER
message 409s (``run_in_progress``). A user "stop" must therefore move the run
out of ``IN_PROGRESS``. We mark it ``FAILED`` ("Stopped by user") with a pure
DB write that does **not** depend on Temporal — so this same call also
recovers a run already stranded ``IN_PROGRESS`` by a cancel whose terminal
callback never landed (the permanent-brick case) — then best-effort cancel
its Temporal workflow.

Idempotent: a run already in a terminal state (or not yet started) is
returned unchanged. The terminal-state guard in ``mark_run_failed`` plus the
callback handler's ``already_terminal`` no-op make a real completion landing
concurrently safe (last writer is ignored, never an error).

### Example


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


# Enter a context with an instance of the API client
with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.WorkflowRunsApi(api_client)
    run_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Stop Workflow Run Handler
        api_response = api_instance.stop_workflow_run(run_id, authorization=authorization, ks_uat=ks_uat)
        print("The response of WorkflowRunsApi->stop_workflow_run:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowRunsApi->stop_workflow_run: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **run_id** | **UUID**|  | 
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**WorkflowRunResponse**](WorkflowRunResponse.md)

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

# **update_workflow_run**
> WorkflowRunResponse update_workflow_run(run_id, update_workflow_run_request, authorization=authorization, ks_uat=ks_uat)

Update Workflow Run Handler

Edit a NOT_STARTED run's KB scope and / or display name.

Both body fields are optional but at least one must be present. The
run must be ``NOT_STARTED`` (409 otherwise). Caller must be the
triggerer or OWNER/ADMIN (403 otherwise). A name collision with a
sibling run under the same definition's ``runs/`` folder maps to a
409 via ``IntegrityError`` translation.

### Example


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


# Enter a context with an instance of the API client
with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.WorkflowRunsApi(api_client)
    run_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    update_workflow_run_request = ksapi.UpdateWorkflowRunRequest() # UpdateWorkflowRunRequest | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Update Workflow Run Handler
        api_response = api_instance.update_workflow_run(run_id, update_workflow_run_request, authorization=authorization, ks_uat=ks_uat)
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
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**WorkflowRunResponse**](WorkflowRunResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workflow_run_callback**
> WorkflowCallbackResponse workflow_run_callback(run_id, workflow_run_callback_request, authorization=authorization, ks_uat=ks_uat)

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


# Enter a context with an instance of the API client
with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.WorkflowRunsApi(api_client)
    run_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    workflow_run_callback_request = ksapi.WorkflowRunCallbackRequest() # WorkflowRunCallbackRequest | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Workflow Run Callback Handler
        api_response = api_instance.workflow_run_callback(run_id, workflow_run_callback_request, authorization=authorization, ks_uat=ks_uat)
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
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**WorkflowCallbackResponse**](WorkflowCallbackResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

