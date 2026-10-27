# ksapi.SystemJobsApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bulk_rerun_dv_workflows**](SystemJobsApi.md#bulk_rerun_dv_workflows) | **POST** /v1/system-jobs/document_versions/bulk-rerun | Bulk Rerun Dv Workflows Handler
[**cancel_temporal_workflow**](SystemJobsApi.md#cancel_temporal_workflow) | **DELETE** /v1/system-jobs/{workflow_id} | Cancel Temporal Workflow Handler
[**dv_workflow_rerun**](SystemJobsApi.md#dv_workflow_rerun) | **POST** /v1/system-jobs/document_versions/{workflow_id} | Dv Workflow Rerun Handler
[**get_dv_workflow**](SystemJobsApi.md#get_dv_workflow) | **GET** /v1/system-jobs/document_versions/{workflow_id} | Get Dv Workflow Handler
[**get_temporal_workflow_status**](SystemJobsApi.md#get_temporal_workflow_status) | **GET** /v1/system-jobs/{workflow_id} | Get Temporal Workflow Status Handler
[**get_zip_ingestion_status**](SystemJobsApi.md#get_zip_ingestion_status) | **GET** /v1/system-jobs/zip-ingestions/{workflow_id} | Get Zip Ingestion Status Handler
[**list_dv_workflow_uploaders**](SystemJobsApi.md#list_dv_workflow_uploaders) | **GET** /v1/system-jobs/document_versions/uploaders | List Dv Workflow Uploaders Handler
[**list_dv_workflows**](SystemJobsApi.md#list_dv_workflows) | **GET** /v1/system-jobs/document_versions | List Dv Workflows Handler


# **bulk_rerun_dv_workflows**
> BulkOperationResponse bulk_rerun_dv_workflows(bulk_rerun_request)

Bulk Rerun Dv Workflows Handler

Re-run ingestion for the selected document versions, reporting per item.

``not_found``: missing, trashed, never ingested or without its stored
source; ``forbidden``: no ``can_write``; ``in_progress_workflow``: still
pending/processing; ``already_ingested``: completed;
``unsupported_document_type``: a type that is no longer ingested;
``superseded``: a newer version of the document exists. More than 200 ids
is a 400 before any re-run.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.bulk_operation_response import BulkOperationResponse
from ksapi.models.bulk_rerun_request import BulkRerunRequest
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
    api_instance = ksapi.SystemJobsApi(api_client)
    bulk_rerun_request = ksapi.BulkRerunRequest() # BulkRerunRequest | 

    try:
        # Bulk Rerun Dv Workflows Handler
        api_response = api_instance.bulk_rerun_dv_workflows(bulk_rerun_request)
        print("The response of SystemJobsApi->bulk_rerun_dv_workflows:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SystemJobsApi->bulk_rerun_dv_workflows: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulk_rerun_request** | [**BulkRerunRequest**](BulkRerunRequest.md)|  | 

### Return type

[**BulkOperationResponse**](BulkOperationResponse.md)

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

# **cancel_temporal_workflow**
> WorkflowCancelResponse cancel_temporal_workflow(workflow_id)

Cancel Temporal Workflow Handler

Cancel a tenant workflow; tracked ingestion also requires document write access.

Tracked attempts are settled before cancelling their matching Temporal run,
including attempts not yet dispatched. Unstarted executions are terminated
because cancellation needs a worker. Temporal operations pin the described run
so a concurrent rerun is left alone.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

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
    api_instance = ksapi.SystemJobsApi(api_client)
    workflow_id = 'workflow_id_example' # str | 

    try:
        # Cancel Temporal Workflow Handler
        api_response = api_instance.cancel_temporal_workflow(workflow_id)
        print("The response of SystemJobsApi->cancel_temporal_workflow:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SystemJobsApi->cancel_temporal_workflow: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workflow_id** | **str**|  | 

### Return type

[**WorkflowCancelResponse**](WorkflowCancelResponse.md)

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

# **dv_workflow_rerun**
> WorkflowActionResponse dv_workflow_rerun(workflow_id)

Dv Workflow Rerun Handler

Rerun a workflow. USER role requires ``can_write`` on the document path.

A version that a newer live version supersedes is refused with 409.
``s3_client`` is injected because ``DocumentIngestionService.__init__``
requires it, even though the re-ingestion path reuses the existing S3 source.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

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
    api_instance = ksapi.SystemJobsApi(api_client)
    workflow_id = 'workflow_id_example' # str | 

    try:
        # Dv Workflow Rerun Handler
        api_response = api_instance.dv_workflow_rerun(workflow_id)
        print("The response of SystemJobsApi->dv_workflow_rerun:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SystemJobsApi->dv_workflow_rerun: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workflow_id** | **str**|  | 

### Return type

[**WorkflowActionResponse**](WorkflowActionResponse.md)

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

# **get_dv_workflow**
> WorkflowDetailResponse get_dv_workflow(workflow_id)

Get Dv Workflow Handler

Get single workflow detail with live Temporal status.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

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
    api_instance = ksapi.SystemJobsApi(api_client)
    workflow_id = 'workflow_id_example' # str | 

    try:
        # Get Dv Workflow Handler
        api_response = api_instance.get_dv_workflow(workflow_id)
        print("The response of SystemJobsApi->get_dv_workflow:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SystemJobsApi->get_dv_workflow: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workflow_id** | **str**|  | 

### Return type

[**WorkflowDetailResponse**](WorkflowDetailResponse.md)

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

# **get_temporal_workflow_status**
> TemporalWorkflowStatusResponse get_temporal_workflow_status(workflow_id)

Get Temporal Workflow Status Handler

Get live Temporal status for any workflow owned by the caller's tenant.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

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
    api_instance = ksapi.SystemJobsApi(api_client)
    workflow_id = 'workflow_id_example' # str | 

    try:
        # Get Temporal Workflow Status Handler
        api_response = api_instance.get_temporal_workflow_status(workflow_id)
        print("The response of SystemJobsApi->get_temporal_workflow_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SystemJobsApi->get_temporal_workflow_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workflow_id** | **str**|  | 

### Return type

[**TemporalWorkflowStatusResponse**](TemporalWorkflowStatusResponse.md)

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

# **get_zip_ingestion_status**
> ZipIngestionStatusResponse get_zip_ingestion_status(workflow_id)

Get Zip Ingestion Status Handler

Get a ZIP fan-out's live status + per-member outcomes.

Tenant-scoped via the TenantId search attribute (no per-path can_read check —
intentionally consistent with the sibling generic Temporal endpoints below;
the opaque workflow_id is only handed to the uploader, who had can_write on
the target). The per-member results come from the workflow's ``results`` query
(served from retained history), so once Temporal retention expires this 404s.
Any other workflow type has no ``results`` query and is a 404, not a 500.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.zip_ingestion_status_response import ZipIngestionStatusResponse
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
    api_instance = ksapi.SystemJobsApi(api_client)
    workflow_id = 'workflow_id_example' # str | 

    try:
        # Get Zip Ingestion Status Handler
        api_response = api_instance.get_zip_ingestion_status(workflow_id)
        print("The response of SystemJobsApi->get_zip_ingestion_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SystemJobsApi->get_zip_ingestion_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workflow_id** | **str**|  | 

### Return type

[**ZipIngestionStatusResponse**](ZipIngestionStatusResponse.md)

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

# **list_dv_workflow_uploaders**
> PaginatedResponseUserInfo list_dv_workflow_uploaders(username_like=username_like, limit=limit, offset=offset)

List Dv Workflow Uploaders Handler

People who uploaded a version the caller can list, for the uploader filter.

Scoped like ``list_dv_workflows``: USER only counts versions under readable paths.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.paginated_response_user_info import PaginatedResponseUserInfo
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
    api_instance = ksapi.SystemJobsApi(api_client)
    username_like = 'username_like_example' # str | Case-insensitive substring of the first or last name (optional)
    limit = 20 # int | Number of items per page (optional) (default to 20)
    offset = 0 # int | Number of items to skip (optional) (default to 0)

    try:
        # List Dv Workflow Uploaders Handler
        api_response = api_instance.list_dv_workflow_uploaders(username_like=username_like, limit=limit, offset=offset)
        print("The response of SystemJobsApi->list_dv_workflow_uploaders:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SystemJobsApi->list_dv_workflow_uploaders: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username_like** | **str**| Case-insensitive substring of the first or last name | [optional] 
 **limit** | **int**| Number of items per page | [optional] [default to 20]
 **offset** | **int**| Number of items to skip | [optional] [default to 0]

### Return type

[**PaginatedResponseUserInfo**](PaginatedResponseUserInfo.md)

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

# **list_dv_workflows**
> PaginatedResponseWorkflowSummaryResponse list_dv_workflows(limit=limit, offset=offset, sort_dir=sort_dir, status=status, name_like=name_like, latest_version_only=latest_version_only, uploader_user_id=uploader_user_id, created_after=created_after, created_before=created_before, updated_after=updated_after, updated_before=updated_before)

List Dv Workflows Handler

List ingestions of live documents in the current tenant, newest upload first.

ADMIN/OWNER see every version; USER only versions under readable paths.
``sort_dir=ASC`` lists the oldest upload first.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.paginated_response_workflow_summary_response import PaginatedResponseWorkflowSummaryResponse
from ksapi.models.pipeline_status import PipelineStatus
from ksapi.models.sort_direction import SortDirection
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
    api_instance = ksapi.SystemJobsApi(api_client)
    limit = 20 # int | Number of items per page (optional) (default to 20)
    offset = 0 # int | Number of items to skip (optional) (default to 0)
    sort_dir = ksapi.SortDirection() # SortDirection | Sort direction (ASC or DESC); overrides the field's natural default. Every sort field supports both directions. (optional)
    status = [ksapi.PipelineStatus()] # List[PipelineStatus] | Only versions in one of these pipeline statuses (optional)
    name_like = 'name_like_example' # str | Case-insensitive substring filter on document name (optional)
    latest_version_only = False # bool | Skip versions superseded by a newer version (optional) (default to False)
    uploader_user_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Filter to versions uploaded by this user (optional)
    created_after = '2013-10-20T19:20:30+01:00' # datetime | Only items created at or after this timestamp (inclusive) (optional)
    created_before = '2013-10-20T19:20:30+01:00' # datetime | Only items created strictly before this timestamp (optional)
    updated_after = '2013-10-20T19:20:30+01:00' # datetime | Only items updated at or after this timestamp (inclusive) (optional)
    updated_before = '2013-10-20T19:20:30+01:00' # datetime | Only items updated strictly before this timestamp (optional)

    try:
        # List Dv Workflows Handler
        api_response = api_instance.list_dv_workflows(limit=limit, offset=offset, sort_dir=sort_dir, status=status, name_like=name_like, latest_version_only=latest_version_only, uploader_user_id=uploader_user_id, created_after=created_after, created_before=created_before, updated_after=updated_after, updated_before=updated_before)
        print("The response of SystemJobsApi->list_dv_workflows:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SystemJobsApi->list_dv_workflows: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Number of items per page | [optional] [default to 20]
 **offset** | **int**| Number of items to skip | [optional] [default to 0]
 **sort_dir** | [**SortDirection**](.md)| Sort direction (ASC or DESC); overrides the field&#39;s natural default. Every sort field supports both directions. | [optional] 
 **status** | [**List[PipelineStatus]**](PipelineStatus.md)| Only versions in one of these pipeline statuses | [optional] 
 **name_like** | **str**| Case-insensitive substring filter on document name | [optional] 
 **latest_version_only** | **bool**| Skip versions superseded by a newer version | [optional] [default to False]
 **uploader_user_id** | **UUID**| Filter to versions uploaded by this user | [optional] 
 **created_after** | **datetime**| Only items created at or after this timestamp (inclusive) | [optional] 
 **created_before** | **datetime**| Only items created strictly before this timestamp | [optional] 
 **updated_after** | **datetime**| Only items updated at or after this timestamp (inclusive) | [optional] 
 **updated_before** | **datetime**| Only items updated strictly before this timestamp | [optional] 

### Return type

[**PaginatedResponseWorkflowSummaryResponse**](PaginatedResponseWorkflowSummaryResponse.md)

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

