# ksapi.WorkflowRepositoryApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**download_workflow_repo_branch_bundle**](WorkflowRepositoryApi.md#download_workflow_repo_branch_bundle) | **GET** /v1/workflow-definitions/{definition_id}/memory/repo/branches/{run_id}/bundle | Download Workflow Repo Branch Bundle Handler
[**download_workflow_repo_bundle**](WorkflowRepositoryApi.md#download_workflow_repo_bundle) | **GET** /v1/workflow-definitions/{definition_id}/memory/repo/bundle | Download Workflow Repo Bundle Handler
[**get_workflow_repo**](WorkflowRepositoryApi.md#get_workflow_repo) | **GET** /v1/workflow-definitions/{definition_id}/memory/repo | Get Workflow Repo Handler
[**get_workflow_repo_branch**](WorkflowRepositoryApi.md#get_workflow_repo_branch) | **GET** /v1/workflow-definitions/{definition_id}/memory/repo/branches/{run_id} | Get Workflow Repo Branch Handler
[**get_workflow_repo_tree**](WorkflowRepositoryApi.md#get_workflow_repo_tree) | **GET** /v1/workflow-definitions/{definition_id}/memory/repo/tree | Get Workflow Repo Tree Handler
[**list_workflow_repo_versions**](WorkflowRepositoryApi.md#list_workflow_repo_versions) | **GET** /v1/workflow-definitions/{definition_id}/memory/repo/versions | List Workflow Repo Versions Handler
[**record_workflow_repo_skipped_save**](WorkflowRepositoryApi.md#record_workflow_repo_skipped_save) | **POST** /v1/workflow-definitions/{definition_id}/memory/repo/skipped-saves | Record Workflow Repo Skipped Save Handler
[**save_workflow_repo_branch**](WorkflowRepositoryApi.md#save_workflow_repo_branch) | **POST** /v1/workflow-definitions/{definition_id}/memory/repo/branches/{run_id}/versions | Save Workflow Repo Branch Handler
[**save_workflow_repo_version**](WorkflowRepositoryApi.md#save_workflow_repo_version) | **POST** /v1/workflow-definitions/{definition_id}/memory/repo/versions | Save Workflow Repo Version Handler


# **download_workflow_repo_branch_bundle**
> bytes download_workflow_repo_branch_bundle(definition_id, run_id, version_id=version_id)

Download Workflow Repo Branch Bundle Handler

Download a run branch; a named version must belong to that run.

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
    api_instance = ksapi.WorkflowRepositoryApi(api_client)
    definition_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    run_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    version_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Retained branch version (optional)

    try:
        # Download Workflow Repo Branch Bundle Handler
        api_response = api_instance.download_workflow_repo_branch_bundle(definition_id, run_id, version_id=version_id)
        print("The response of WorkflowRepositoryApi->download_workflow_repo_branch_bundle:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowRepositoryApi->download_workflow_repo_branch_bundle: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **definition_id** | **UUID**|  | 
 **run_id** | **UUID**|  | 
 **version_id** | **UUID**| Retained branch version | [optional] 

### Return type

**bytes**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/x-git-bundle, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **download_workflow_repo_bundle**
> bytes download_workflow_repo_bundle(definition_id, version_id=version_id)

Download Workflow Repo Bundle Handler

Download a saved version as a git bundle (what a run clones).

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
    api_instance = ksapi.WorkflowRepositoryApi(api_client)
    definition_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    version_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Saved version; default: main (optional)

    try:
        # Download Workflow Repo Bundle Handler
        api_response = api_instance.download_workflow_repo_bundle(definition_id, version_id=version_id)
        print("The response of WorkflowRepositoryApi->download_workflow_repo_bundle:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowRepositoryApi->download_workflow_repo_bundle: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **definition_id** | **UUID**|  | 
 **version_id** | **UUID**| Saved version; default: main | [optional] 

### Return type

**bytes**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/x-git-bundle, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A full git bundle of main at that version. |  -  |
**422** | Validation Error |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_workflow_repo**
> WorkflowRepoResponse get_workflow_repo(definition_id)

Get Workflow Repo Handler

The repository's current main: name, head commit and size.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.workflow_repo_response import WorkflowRepoResponse
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
    api_instance = ksapi.WorkflowRepositoryApi(api_client)
    definition_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Get Workflow Repo Handler
        api_response = api_instance.get_workflow_repo(definition_id)
        print("The response of WorkflowRepositoryApi->get_workflow_repo:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowRepositoryApi->get_workflow_repo: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **definition_id** | **UUID**|  | 

### Return type

[**WorkflowRepoResponse**](WorkflowRepoResponse.md)

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

# **get_workflow_repo_branch**
> RepoBranchResponse get_workflow_repo_branch(definition_id, run_id)

Get Workflow Repo Branch Handler

The run's retained branch and whether its latest version reached main.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.repo_branch_response import RepoBranchResponse
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
    api_instance = ksapi.WorkflowRepositoryApi(api_client)
    definition_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    run_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Get Workflow Repo Branch Handler
        api_response = api_instance.get_workflow_repo_branch(definition_id, run_id)
        print("The response of WorkflowRepositoryApi->get_workflow_repo_branch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowRepositoryApi->get_workflow_repo_branch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **definition_id** | **UUID**|  | 
 **run_id** | **UUID**|  | 

### Return type

[**RepoBranchResponse**](RepoBranchResponse.md)

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

# **get_workflow_repo_tree**
> RepoTreeResponse get_workflow_repo_tree(definition_id, commit=commit)

Get Workflow Repo Tree Handler

File metadata at a saved snapshot head (default: main), path-sorted.

Intermediate commits without a saved manifest return repo_commit_not_found.
This endpoint never reads object storage or interprets Git objects.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.repo_tree_response import RepoTreeResponse
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
    api_instance = ksapi.WorkflowRepositoryApi(api_client)
    definition_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    commit = 'commit_example' # str |  (optional)

    try:
        # Get Workflow Repo Tree Handler
        api_response = api_instance.get_workflow_repo_tree(definition_id, commit=commit)
        print("The response of WorkflowRepositoryApi->get_workflow_repo_tree:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowRepositoryApi->get_workflow_repo_tree: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **definition_id** | **UUID**|  | 
 **commit** | **str**|  | [optional] 

### Return type

[**RepoTreeResponse**](RepoTreeResponse.md)

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

# **list_workflow_repo_versions**
> PaginatedResponseRepoVersionResponse list_workflow_repo_versions(definition_id, run_id=run_id, limit=limit, offset=offset)

List Workflow Repo Versions Handler

Saved versions, newest first: the save log.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.paginated_response_repo_version_response import PaginatedResponseRepoVersionResponse
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
    api_instance = ksapi.WorkflowRepositoryApi(api_client)
    definition_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    run_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Only versions saved by this run (optional)
    limit = 20 # int | Number of items per page (optional) (default to 20)
    offset = 0 # int | Number of items to skip (optional) (default to 0)

    try:
        # List Workflow Repo Versions Handler
        api_response = api_instance.list_workflow_repo_versions(definition_id, run_id=run_id, limit=limit, offset=offset)
        print("The response of WorkflowRepositoryApi->list_workflow_repo_versions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowRepositoryApi->list_workflow_repo_versions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **definition_id** | **UUID**|  | 
 **run_id** | **UUID**| Only versions saved by this run | [optional] 
 **limit** | **int**| Number of items per page | [optional] [default to 20]
 **offset** | **int**| Number of items to skip | [optional] [default to 0]

### Return type

[**PaginatedResponseRepoVersionResponse**](PaginatedResponseRepoVersionResponse.md)

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

# **record_workflow_repo_skipped_save**
> EventResponse record_workflow_repo_skipped_save(definition_id, record_repo_save_skip_request)

Record Workflow Repo Skipped Save Handler

Record on a run that its turn's repository changes were not kept.

Needs only read on the workflow: the same authority as posting the
follow-up message whose turn produced the changes.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.event_response import EventResponse
from ksapi.models.record_repo_save_skip_request import RecordRepoSaveSkipRequest
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
    api_instance = ksapi.WorkflowRepositoryApi(api_client)
    definition_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    record_repo_save_skip_request = ksapi.RecordRepoSaveSkipRequest() # RecordRepoSaveSkipRequest | 

    try:
        # Record Workflow Repo Skipped Save Handler
        api_response = api_instance.record_workflow_repo_skipped_save(definition_id, record_repo_save_skip_request)
        print("The response of WorkflowRepositoryApi->record_workflow_repo_skipped_save:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowRepositoryApi->record_workflow_repo_skipped_save: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **definition_id** | **UUID**|  | 
 **record_repo_save_skip_request** | [**RecordRepoSaveSkipRequest**](RecordRepoSaveSkipRequest.md)|  | 

### Return type

[**EventResponse**](EventResponse.md)

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

# **save_workflow_repo_branch**
> RepoBranchResponse save_workflow_repo_branch(definition_id, run_id, bundle, expected_version_id=expected_version_id, base_version_id=base_version_id)

Save Workflow Repo Branch Handler

Retain a branch without publishing it to other runs.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.repo_branch_response import RepoBranchResponse
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
    api_instance = ksapi.WorkflowRepositoryApi(api_client)
    definition_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    run_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    bundle = None # bytes | Full git bundle of runs/<run-id>
    expected_version_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Previous retained version of this run branch (optional)
    base_version_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Accepted main version this branch started from (optional)

    try:
        # Save Workflow Repo Branch Handler
        api_response = api_instance.save_workflow_repo_branch(definition_id, run_id, bundle, expected_version_id=expected_version_id, base_version_id=base_version_id)
        print("The response of WorkflowRepositoryApi->save_workflow_repo_branch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowRepositoryApi->save_workflow_repo_branch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **definition_id** | **UUID**|  | 
 **run_id** | **UUID**|  | 
 **bundle** | **bytes**| Full git bundle of runs/&lt;run-id&gt; | 
 **expected_version_id** | **UUID**| Previous retained version of this run branch | [optional] 
 **base_version_id** | **UUID**| Accepted main version this branch started from | [optional] 

### Return type

[**RepoBranchResponse**](RepoBranchResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**200** | Already retained |  -  |
**422** | Validation Error |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **save_workflow_repo_version**
> RepoVersionResponse save_workflow_repo_version(definition_id, bundle, run_id, expected_version_id=expected_version_id, candidate_version_id=candidate_version_id)

Save Workflow Repo Version Handler

Make a bundle the workflow's new main (compare-and-set on the base version).

409 ``repo_head_moved``: main moved since the base; integrate and retry.
409 ``repo_not_fast_forward``: the bundle does not contain main. 422
``repo_invalid_bundle`` / ``repo_too_large`` / ``repo_unsafe_path``.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.repo_version_response import RepoVersionResponse
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
    api_instance = ksapi.WorkflowRepositoryApi(api_client)
    definition_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    bundle = None # bytes | Full git bundle of main
    run_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | The run saving this version
    expected_version_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | The version this save is based on; omit for the first save (optional)
    candidate_version_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Retained run branch being integrated (optional)

    try:
        # Save Workflow Repo Version Handler
        api_response = api_instance.save_workflow_repo_version(definition_id, bundle, run_id, expected_version_id=expected_version_id, candidate_version_id=candidate_version_id)
        print("The response of WorkflowRepositoryApi->save_workflow_repo_version:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowRepositoryApi->save_workflow_repo_version: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **definition_id** | **UUID**|  | 
 **bundle** | **bytes**| Full git bundle of main | 
 **run_id** | **UUID**| The run saving this version | 
 **expected_version_id** | **UUID**| The version this save is based on; omit for the first save | [optional] 
 **candidate_version_id** | **UUID**| Retained run branch being integrated | [optional] 

### Return type

[**RepoVersionResponse**](RepoVersionResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**200** | The bundle&#39;s head already is main; nothing new saved. |  -  |
**422** | Validation Error |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

