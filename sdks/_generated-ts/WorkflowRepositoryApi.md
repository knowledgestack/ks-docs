# WorkflowRepositoryApi

All URIs are relative to *http://localhost:8000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**downloadWorkflowRepoBranchBundle**](WorkflowRepositoryApi.md#downloadworkflowrepobranchbundle) | **GET** /v1/workflow-definitions/{definition_id}/memory/repo/branches/{run_id}/bundle | Download Workflow Repo Branch Bundle Handler |
| [**downloadWorkflowRepoBundle**](WorkflowRepositoryApi.md#downloadworkflowrepobundle) | **GET** /v1/workflow-definitions/{definition_id}/memory/repo/bundle | Download Workflow Repo Bundle Handler |
| [**getWorkflowRepo**](WorkflowRepositoryApi.md#getworkflowrepo) | **GET** /v1/workflow-definitions/{definition_id}/memory/repo | Get Workflow Repo Handler |
| [**getWorkflowRepoBranch**](WorkflowRepositoryApi.md#getworkflowrepobranch) | **GET** /v1/workflow-definitions/{definition_id}/memory/repo/branches/{run_id} | Get Workflow Repo Branch Handler |
| [**getWorkflowRepoTree**](WorkflowRepositoryApi.md#getworkflowrepotree) | **GET** /v1/workflow-definitions/{definition_id}/memory/repo/tree | Get Workflow Repo Tree Handler |
| [**listWorkflowRepoVersions**](WorkflowRepositoryApi.md#listworkflowrepoversions) | **GET** /v1/workflow-definitions/{definition_id}/memory/repo/versions | List Workflow Repo Versions Handler |
| [**recordWorkflowRepoSkippedSave**](WorkflowRepositoryApi.md#recordworkflowreposkippedsave) | **POST** /v1/workflow-definitions/{definition_id}/memory/repo/skipped-saves | Record Workflow Repo Skipped Save Handler |
| [**saveWorkflowRepoBranch**](WorkflowRepositoryApi.md#saveworkflowrepobranch) | **POST** /v1/workflow-definitions/{definition_id}/memory/repo/branches/{run_id}/versions | Save Workflow Repo Branch Handler |
| [**saveWorkflowRepoVersion**](WorkflowRepositoryApi.md#saveworkflowrepoversion) | **POST** /v1/workflow-definitions/{definition_id}/memory/repo/versions | Save Workflow Repo Version Handler |



## downloadWorkflowRepoBranchBundle

> Blob downloadWorkflowRepoBranchBundle(definitionId, runId, versionId)

Download Workflow Repo Branch Bundle Handler

Download a run branch; a named version must belong to that run.

### Example

```ts
import {
  Configuration,
  WorkflowRepositoryApi,
} from '@knowledge-stack/ksapi';
import type { DownloadWorkflowRepoBranchBundleRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WorkflowRepositoryApi(config);

  const body = {
    // string
    definitionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    runId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Retained branch version (optional)
    versionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DownloadWorkflowRepoBranchBundleRequest;

  try {
    const data = await api.downloadWorkflowRepoBranchBundle(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **definitionId** | `string` |  | [Defaults to `undefined`] |
| **runId** | `string` |  | [Defaults to `undefined`] |
| **versionId** | `string` | Retained branch version | [Optional] [Defaults to `undefined`] |

### Return type

**Blob**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/x-git-bundle`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## downloadWorkflowRepoBundle

> Blob downloadWorkflowRepoBundle(definitionId, versionId)

Download Workflow Repo Bundle Handler

Download a saved version as a git bundle (what a run clones).

### Example

```ts
import {
  Configuration,
  WorkflowRepositoryApi,
} from '@knowledge-stack/ksapi';
import type { DownloadWorkflowRepoBundleRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WorkflowRepositoryApi(config);

  const body = {
    // string
    definitionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Saved version; default: main (optional)
    versionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DownloadWorkflowRepoBundleRequest;

  try {
    const data = await api.downloadWorkflowRepoBundle(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **definitionId** | `string` |  | [Defaults to `undefined`] |
| **versionId** | `string` | Saved version; default: main | [Optional] [Defaults to `undefined`] |

### Return type

**Blob**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/x-git-bundle`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A full git bundle of main at that version. |  -  |
| **422** | Validation Error |  -  |
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getWorkflowRepo

> WorkflowRepoResponse getWorkflowRepo(definitionId)

Get Workflow Repo Handler

The repository\&#39;s current main: name, head commit and size.

### Example

```ts
import {
  Configuration,
  WorkflowRepositoryApi,
} from '@knowledge-stack/ksapi';
import type { GetWorkflowRepoRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WorkflowRepositoryApi(config);

  const body = {
    // string
    definitionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetWorkflowRepoRequest;

  try {
    const data = await api.getWorkflowRepo(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **definitionId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**WorkflowRepoResponse**](WorkflowRepoResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getWorkflowRepoBranch

> RepoBranchResponse getWorkflowRepoBranch(definitionId, runId)

Get Workflow Repo Branch Handler

The run\&#39;s retained branch and whether its latest version reached main.

### Example

```ts
import {
  Configuration,
  WorkflowRepositoryApi,
} from '@knowledge-stack/ksapi';
import type { GetWorkflowRepoBranchRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WorkflowRepositoryApi(config);

  const body = {
    // string
    definitionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    runId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetWorkflowRepoBranchRequest;

  try {
    const data = await api.getWorkflowRepoBranch(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **definitionId** | `string` |  | [Defaults to `undefined`] |
| **runId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**RepoBranchResponse**](RepoBranchResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getWorkflowRepoTree

> RepoTreeResponse getWorkflowRepoTree(definitionId, commit)

Get Workflow Repo Tree Handler

File metadata at a saved snapshot head (default: main), path-sorted.  Intermediate commits without a saved manifest return repo_commit_not_found. This endpoint never reads object storage or interprets Git objects.

### Example

```ts
import {
  Configuration,
  WorkflowRepositoryApi,
} from '@knowledge-stack/ksapi';
import type { GetWorkflowRepoTreeRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WorkflowRepositoryApi(config);

  const body = {
    // string
    definitionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string (optional)
    commit: commit_example,
  } satisfies GetWorkflowRepoTreeRequest;

  try {
    const data = await api.getWorkflowRepoTree(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **definitionId** | `string` |  | [Defaults to `undefined`] |
| **commit** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**RepoTreeResponse**](RepoTreeResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listWorkflowRepoVersions

> PaginatedResponseRepoVersionResponse listWorkflowRepoVersions(definitionId, runId, limit, offset)

List Workflow Repo Versions Handler

Saved versions, newest first: the save log.

### Example

```ts
import {
  Configuration,
  WorkflowRepositoryApi,
} from '@knowledge-stack/ksapi';
import type { ListWorkflowRepoVersionsRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WorkflowRepositoryApi(config);

  const body = {
    // string
    definitionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Only versions saved by this run (optional)
    runId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // number | Number of items per page (optional)
    limit: 56,
    // number | Number of items to skip (optional)
    offset: 56,
  } satisfies ListWorkflowRepoVersionsRequest;

  try {
    const data = await api.listWorkflowRepoVersions(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **definitionId** | `string` |  | [Defaults to `undefined`] |
| **runId** | `string` | Only versions saved by this run | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items per page | [Optional] [Defaults to `20`] |
| **offset** | `number` | Number of items to skip | [Optional] [Defaults to `0`] |

### Return type

[**PaginatedResponseRepoVersionResponse**](PaginatedResponseRepoVersionResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## recordWorkflowRepoSkippedSave

> EventResponse recordWorkflowRepoSkippedSave(definitionId, recordRepoSaveSkipRequest)

Record Workflow Repo Skipped Save Handler

Record on a run that its turn\&#39;s repository changes were not kept.  Needs only read on the workflow: the same authority as posting the follow-up message whose turn produced the changes.

### Example

```ts
import {
  Configuration,
  WorkflowRepositoryApi,
} from '@knowledge-stack/ksapi';
import type { RecordWorkflowRepoSkippedSaveRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WorkflowRepositoryApi(config);

  const body = {
    // string
    definitionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // RecordRepoSaveSkipRequest
    recordRepoSaveSkipRequest: ...,
  } satisfies RecordWorkflowRepoSkippedSaveRequest;

  try {
    const data = await api.recordWorkflowRepoSkippedSave(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **definitionId** | `string` |  | [Defaults to `undefined`] |
| **recordRepoSaveSkipRequest** | [RecordRepoSaveSkipRequest](RecordRepoSaveSkipRequest.md) |  | |

### Return type

[**EventResponse**](EventResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Successful Response |  -  |
| **422** | Validation Error |  -  |
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## saveWorkflowRepoBranch

> RepoBranchResponse saveWorkflowRepoBranch(definitionId, runId, bundle, expectedVersionId, baseVersionId)

Save Workflow Repo Branch Handler

Retain a branch without publishing it to other runs.

### Example

```ts
import {
  Configuration,
  WorkflowRepositoryApi,
} from '@knowledge-stack/ksapi';
import type { SaveWorkflowRepoBranchRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WorkflowRepositoryApi(config);

  const body = {
    // string
    definitionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    runId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // Blob | Full git bundle of runs/<run-id>
    bundle: BINARY_DATA_HERE,
    // string | Previous retained version of this run branch (optional)
    expectedVersionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Accepted main version this branch started from (optional)
    baseVersionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies SaveWorkflowRepoBranchRequest;

  try {
    const data = await api.saveWorkflowRepoBranch(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **definitionId** | `string` |  | [Defaults to `undefined`] |
| **runId** | `string` |  | [Defaults to `undefined`] |
| **bundle** | `Blob` | Full git bundle of runs/&lt;run-id&gt; | [Defaults to `undefined`] |
| **expectedVersionId** | `string` | Previous retained version of this run branch | [Optional] [Defaults to `undefined`] |
| **baseVersionId** | `string` | Accepted main version this branch started from | [Optional] [Defaults to `undefined`] |

### Return type

[**RepoBranchResponse**](RepoBranchResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Successful Response |  -  |
| **200** | Already retained |  -  |
| **422** | Validation Error |  -  |
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## saveWorkflowRepoVersion

> RepoVersionResponse saveWorkflowRepoVersion(definitionId, bundle, runId, expectedVersionId, candidateVersionId)

Save Workflow Repo Version Handler

Make a bundle the workflow\&#39;s new main (compare-and-set on the base version).  409 &#x60;&#x60;repo_head_moved&#x60;&#x60;: main moved since the base; integrate and retry. 409 &#x60;&#x60;repo_not_fast_forward&#x60;&#x60;: the bundle does not contain main. 422 &#x60;&#x60;repo_invalid_bundle&#x60;&#x60; / &#x60;&#x60;repo_too_large&#x60;&#x60; / &#x60;&#x60;repo_unsafe_path&#x60;&#x60;.

### Example

```ts
import {
  Configuration,
  WorkflowRepositoryApi,
} from '@knowledge-stack/ksapi';
import type { SaveWorkflowRepoVersionRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WorkflowRepositoryApi(config);

  const body = {
    // string
    definitionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // Blob | Full git bundle of main
    bundle: BINARY_DATA_HERE,
    // string | The run saving this version
    runId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | The version this save is based on; omit for the first save (optional)
    expectedVersionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Retained run branch being integrated (optional)
    candidateVersionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies SaveWorkflowRepoVersionRequest;

  try {
    const data = await api.saveWorkflowRepoVersion(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **definitionId** | `string` |  | [Defaults to `undefined`] |
| **bundle** | `Blob` | Full git bundle of main | [Defaults to `undefined`] |
| **runId** | `string` | The run saving this version | [Defaults to `undefined`] |
| **expectedVersionId** | `string` | The version this save is based on; omit for the first save | [Optional] [Defaults to `undefined`] |
| **candidateVersionId** | `string` | Retained run branch being integrated | [Optional] [Defaults to `undefined`] |

### Return type

[**RepoVersionResponse**](RepoVersionResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Successful Response |  -  |
| **200** | The bundle\&#39;s head already is main; nothing new saved. |  -  |
| **422** | Validation Error |  -  |
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

