# WorkflowRunsApi

All URIs are relative to *http://localhost:8000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**cloneWorkflowRun**](WorkflowRunsApi.md#cloneworkflowrunoperation) | **POST** /v1/workflow-runs/{run_id}/clone | Clone Workflow Run Handler |
| [**deleteWorkflowRun**](WorkflowRunsApi.md#deleteworkflowrun) | **DELETE** /v1/workflow-runs/{run_id} | Delete Workflow Run Handler |
| [**getWorkflowRun**](WorkflowRunsApi.md#getworkflowrun) | **GET** /v1/workflow-runs/{run_id} | Get Workflow Run Handler |
| [**getWorkflowRunsSummary**](WorkflowRunsApi.md#getworkflowrunssummary) | **GET** /v1/workflow-runs/summary | Get Workflow Runs Summary Handler |
| [**listWorkflowRunsForTenant**](WorkflowRunsApi.md#listworkflowrunsfortenant) | **GET** /v1/workflow-runs | List Workflow Runs For Tenant Handler |
| [**retryWorkflowRun**](WorkflowRunsApi.md#retryworkflowrun) | **POST** /v1/workflow-runs/{run_id}/retry | Retry Workflow Run Handler |
| [**setWorkflowRunApproval**](WorkflowRunsApi.md#setworkflowrunapprovaloperation) | **POST** /v1/workflow-runs/{run_id}/approval | Set Workflow Run Approval Handler |
| [**startWorkflowRun**](WorkflowRunsApi.md#startworkflowrun) | **POST** /v1/workflow-runs/{run_id}/start | Start Workflow Run Handler |
| [**stopWorkflowRun**](WorkflowRunsApi.md#stopworkflowrun) | **POST** /v1/workflow-runs/{run_id}/stop | Stop Workflow Run Handler |
| [**updateWorkflowRun**](WorkflowRunsApi.md#updateworkflowrunoperation) | **PATCH** /v1/workflow-runs/{run_id} | Update Workflow Run Handler |
| [**workflowRunCallback**](WorkflowRunsApi.md#workflowruncallbackoperation) | **POST** /v1/workflow-runs/{run_id}/callback | Workflow Run Callback Handler |



## cloneWorkflowRun

> WorkflowRunResponse cloneWorkflowRun(runId, cloneWorkflowRunRequest)

Clone Workflow Run Handler

Clone a started run into a new NOT_STARTED draft.  &#x60;&#x60;include_inputs&#x3D;True&#x60;&#x60; pins the source\&#39;s snapshotted inputs onto the new run; uploads stay in the source\&#39;s &#x60;&#x60;inputs/&#x60;&#x60; and are referenced by path_part_id. No S3 copy. A NOT_STARTED source has no snapshot to pin → 409. The clone is born NOT_STARTED so the user can edit it (PATCH) before pressing Start.

### Example

```ts
import {
  Configuration,
  WorkflowRunsApi,
} from '@knowledge-stack/ksapi';
import type { CloneWorkflowRunOperationRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WorkflowRunsApi(config);

  const body = {
    // string
    runId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // CloneWorkflowRunRequest
    cloneWorkflowRunRequest: ...,
  } satisfies CloneWorkflowRunOperationRequest;

  try {
    const data = await api.cloneWorkflowRun(body);
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
| **runId** | `string` |  | [Defaults to `undefined`] |
| **cloneWorkflowRunRequest** | [CloneWorkflowRunRequest](CloneWorkflowRunRequest.md) |  | |

### Return type

[**WorkflowRunResponse**](WorkflowRunResponse.md)

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


## deleteWorkflowRun

> deleteWorkflowRun(runId)

Delete Workflow Run Handler

### Example

```ts
import {
  Configuration,
  WorkflowRunsApi,
} from '@knowledge-stack/ksapi';
import type { DeleteWorkflowRunRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WorkflowRunsApi(config);

  const body = {
    // string
    runId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteWorkflowRunRequest;

  try {
    const data = await api.deleteWorkflowRun(body);
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
| **runId** | `string` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Successful Response |  -  |
| **422** | Validation Error |  -  |
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getWorkflowRun

> WorkflowRunResponse getWorkflowRun(runId)

Get Workflow Run Handler

### Example

```ts
import {
  Configuration,
  WorkflowRunsApi,
} from '@knowledge-stack/ksapi';
import type { GetWorkflowRunRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WorkflowRunsApi(config);

  const body = {
    // string
    runId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetWorkflowRunRequest;

  try {
    const data = await api.getWorkflowRun(body);
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
| **runId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**WorkflowRunResponse**](WorkflowRunResponse.md)

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


## getWorkflowRunsSummary

> WorkflowRunSummaryResponse getWorkflowRunsSummary(since, until, definitionId)

Get Workflow Runs Summary Handler

Aggregate workflow-runs health, read-gated and permission-scoped.  Numbers cover only runs under workflows the caller can read (OWNER/ADMIN ⇒ tenant-wide). Windowed metrics default to the last 7 days; the approval backlog and active-definition count are point-in-time.

### Example

```ts
import {
  Configuration,
  WorkflowRunsApi,
} from '@knowledge-stack/ksapi';
import type { GetWorkflowRunsSummaryRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WorkflowRunsApi(config);

  const body = {
    // Date | Window start (inclusive). Defaults to 7 days ago. (optional)
    since: 2013-10-20T19:20:30+01:00,
    // Date | Window end (inclusive). Defaults to open-ended. (optional)
    until: 2013-10-20T19:20:30+01:00,
    // string | Scope all numbers to one workflow (requires read). (optional)
    definitionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetWorkflowRunsSummaryRequest;

  try {
    const data = await api.getWorkflowRunsSummary(body);
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
| **since** | `Date` | Window start (inclusive). Defaults to 7 days ago. | [Optional] [Defaults to `undefined`] |
| **until** | `Date` | Window end (inclusive). Defaults to open-ended. | [Optional] [Defaults to `undefined`] |
| **definitionId** | `string` | Scope all numbers to one workflow (requires read). | [Optional] [Defaults to `undefined`] |

### Return type

[**WorkflowRunSummaryResponse**](WorkflowRunSummaryResponse.md)

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


## listWorkflowRunsForTenant

> PaginatedResponseWorkflowRunResponse listWorkflowRunsForTenant(state, mine, pendingApprovalForMe, definitionId, ownerId, sortBy, sortDir, limit, offset, createdAfter, createdBefore, updatedAfter, updatedBefore)

List Workflow Runs For Tenant Handler

List runs across every workflow in the tenant, permission-scoped.  The single spine behind the dashboard worklists — the FE composes its tabs from preset filters (&#x60;&#x60;mine&#x60;&#x60; + &#x60;&#x60;state&#x60;&#x60;, &#x60;&#x60;pending_approval_for_me&#x60;&#x60;). Visibility follows the same model as the per-definition list: OWNER/ADMIN see all; a USER sees runs under workflows they can read.

### Example

```ts
import {
  Configuration,
  WorkflowRunsApi,
} from '@knowledge-stack/ksapi';
import type { ListWorkflowRunsForTenantRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WorkflowRunsApi(config);

  const body = {
    // Array<WorkflowExecutionState> | Keep only runs in these execution states (repeatable). (optional)
    state: ...,
    // boolean | Only runs the caller created (owner). Overrides owner_id. (optional)
    mine: true,
    // boolean | Only runs pending approval that the caller may approve. (optional)
    pendingApprovalForMe: true,
    // string | Only runs under this workflow definition. (optional)
    definitionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Only runs created by this user. (optional)
    ownerId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // WorkflowRunOrder | Field to sort runs by (default: STARTED_AT) (optional)
    sortBy: ...,
    // SortDirection | Sort direction; overrides the field\'s natural default (optional)
    sortDir: ...,
    // number | Number of items per page (optional)
    limit: 56,
    // number | Number of items to skip (optional)
    offset: 56,
    // Date | Only items created at or after this timestamp (inclusive) (optional)
    createdAfter: 2013-10-20T19:20:30+01:00,
    // Date | Only items created strictly before this timestamp (optional)
    createdBefore: 2013-10-20T19:20:30+01:00,
    // Date | Only items updated at or after this timestamp (inclusive) (optional)
    updatedAfter: 2013-10-20T19:20:30+01:00,
    // Date | Only items updated strictly before this timestamp (optional)
    updatedBefore: 2013-10-20T19:20:30+01:00,
  } satisfies ListWorkflowRunsForTenantRequest;

  try {
    const data = await api.listWorkflowRunsForTenant(body);
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
| **state** | `Array<WorkflowExecutionState>` | Keep only runs in these execution states (repeatable). | [Optional] |
| **mine** | `boolean` | Only runs the caller created (owner). Overrides owner_id. | [Optional] [Defaults to `false`] |
| **pendingApprovalForMe** | `boolean` | Only runs pending approval that the caller may approve. | [Optional] [Defaults to `false`] |
| **definitionId** | `string` | Only runs under this workflow definition. | [Optional] [Defaults to `undefined`] |
| **ownerId** | `string` | Only runs created by this user. | [Optional] [Defaults to `undefined`] |
| **sortBy** | `WorkflowRunOrder` | Field to sort runs by (default: STARTED_AT) | [Optional] [Defaults to `undefined`] [Enum: STARTED_AT, CREATED_AT, COMPLETED_AT] |
| **sortDir** | `SortDirection` | Sort direction; overrides the field\&#39;s natural default | [Optional] [Defaults to `undefined`] [Enum: ASC, DESC] |
| **limit** | `number` | Number of items per page | [Optional] [Defaults to `20`] |
| **offset** | `number` | Number of items to skip | [Optional] [Defaults to `0`] |
| **createdAfter** | `Date` | Only items created at or after this timestamp (inclusive) | [Optional] [Defaults to `undefined`] |
| **createdBefore** | `Date` | Only items created strictly before this timestamp | [Optional] [Defaults to `undefined`] |
| **updatedAfter** | `Date` | Only items updated at or after this timestamp (inclusive) | [Optional] [Defaults to `undefined`] |
| **updatedBefore** | `Date` | Only items updated strictly before this timestamp | [Optional] [Defaults to `undefined`] |

### Return type

[**PaginatedResponseWorkflowRunResponse**](PaginatedResponseWorkflowRunResponse.md)

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


## retryWorkflowRun

> WorkflowRunResponse retryWorkflowRun(runId)

Retry Workflow Run Handler

Re-run a FAILED run (including a user-stopped one) in place.  Flips &#x60;&#x60;FAILED -&gt; IN_PROGRESS&#x60;&#x60; against the run\&#39;s existing snapshot and re-dispatches the agent. 409 if the run is not FAILED (NOT_STARTED/PENDING use Start; COMPLETED is cloned) or was never started. Triggerer or OWNER/ADMIN only.

### Example

```ts
import {
  Configuration,
  WorkflowRunsApi,
} from '@knowledge-stack/ksapi';
import type { RetryWorkflowRunRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WorkflowRunsApi(config);

  const body = {
    // string
    runId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies RetryWorkflowRunRequest;

  try {
    const data = await api.retryWorkflowRun(body);
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
| **runId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**WorkflowRunResponse**](WorkflowRunResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Successful Response |  -  |
| **422** | Validation Error |  -  |
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setWorkflowRunApproval

> WorkflowRunResponse setWorkflowRunApproval(runId, setWorkflowRunApprovalRequest)

Set Workflow Run Approval Handler

Approve an entire completed run in one call.  Approves every output document under &#x60;&#x60;outputs/&#x60;&#x60; then the run folder. The run must be &#x60;&#x60;COMPLETED&#x60;&#x60; and its definition must have required approval. Requires approve access to the run folder and refuses agents (assumed identities) — approval is human-in-the-loop. &#x60;&#x60;run_id&#x60;&#x60; is the WorkflowRun id.

### Example

```ts
import {
  Configuration,
  WorkflowRunsApi,
} from '@knowledge-stack/ksapi';
import type { SetWorkflowRunApprovalOperationRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WorkflowRunsApi(config);

  const body = {
    // string
    runId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // SetWorkflowRunApprovalRequest
    setWorkflowRunApprovalRequest: ...,
  } satisfies SetWorkflowRunApprovalOperationRequest;

  try {
    const data = await api.setWorkflowRunApproval(body);
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
| **runId** | `string` |  | [Defaults to `undefined`] |
| **setWorkflowRunApprovalRequest** | [SetWorkflowRunApprovalRequest](SetWorkflowRunApprovalRequest.md) |  | |

### Return type

[**WorkflowRunResponse**](WorkflowRunResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## startWorkflowRun

> WorkflowRunResponse startWorkflowRun(runId)

Start Workflow Run Handler

Flip a NOT_STARTED run to IN_PROGRESS and dispatch its agent run.  Idempotent on IN_PROGRESS (returns the row). Terminal states → 409. Inputs still ingesting or in a failed terminal state → 409. The snapshot is built at this point (KB DOCUMENTs resolve to active versions, uploaded DVs are walked from inputs/, KB FOLDERs stay live).

### Example

```ts
import {
  Configuration,
  WorkflowRunsApi,
} from '@knowledge-stack/ksapi';
import type { StartWorkflowRunRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WorkflowRunsApi(config);

  const body = {
    // string
    runId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies StartWorkflowRunRequest;

  try {
    const data = await api.startWorkflowRun(body);
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
| **runId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**WorkflowRunResponse**](WorkflowRunResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Successful Response |  -  |
| **422** | Validation Error |  -  |
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## stopWorkflowRun

> WorkflowRunResponse stopWorkflowRun(runId)

Stop Workflow Run Handler

Stop a running workflow run, terminalizing it so its thread un-bricks.  While a run sits &#x60;&#x60;IN_PROGRESS&#x60;&#x60; its run thread is read-only: every new USER message 409s (&#x60;&#x60;run_in_progress&#x60;&#x60;). A user \&quot;stop\&quot; must therefore move the run out of &#x60;&#x60;IN_PROGRESS&#x60;&#x60;. We mark it &#x60;&#x60;FAILED&#x60;&#x60; (\&quot;Stopped by user\&quot;) with a pure DB write that does **not** depend on Temporal — so this same call also recovers a run already stranded &#x60;&#x60;IN_PROGRESS&#x60;&#x60; by a cancel whose terminal callback never landed (the permanent-brick case) — then best-effort cancel its Temporal workflow.  Idempotent: a run already in a terminal state (or not yet started) is returned unchanged. The terminal-state guard in &#x60;&#x60;mark_run_failed&#x60;&#x60; plus the callback handler\&#39;s &#x60;&#x60;already_terminal&#x60;&#x60; no-op make a real completion landing concurrently safe (last writer is ignored, never an error).

### Example

```ts
import {
  Configuration,
  WorkflowRunsApi,
} from '@knowledge-stack/ksapi';
import type { StopWorkflowRunRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WorkflowRunsApi(config);

  const body = {
    // string
    runId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies StopWorkflowRunRequest;

  try {
    const data = await api.stopWorkflowRun(body);
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
| **runId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**WorkflowRunResponse**](WorkflowRunResponse.md)

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


## updateWorkflowRun

> WorkflowRunResponse updateWorkflowRun(runId, updateWorkflowRunRequest)

Update Workflow Run Handler

Edit a NOT_STARTED run\&#39;s KB scope and / or display name.  Both body fields are optional but at least one must be present. The run must be &#x60;&#x60;NOT_STARTED&#x60;&#x60; (409 otherwise). Caller must be the triggerer or OWNER/ADMIN (403 otherwise). A name collision with a sibling run under the same definition\&#39;s &#x60;&#x60;runs/&#x60;&#x60; folder maps to a 409 via &#x60;&#x60;IntegrityError&#x60;&#x60; translation.

### Example

```ts
import {
  Configuration,
  WorkflowRunsApi,
} from '@knowledge-stack/ksapi';
import type { UpdateWorkflowRunOperationRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WorkflowRunsApi(config);

  const body = {
    // string
    runId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateWorkflowRunRequest
    updateWorkflowRunRequest: ...,
  } satisfies UpdateWorkflowRunOperationRequest;

  try {
    const data = await api.updateWorkflowRun(body);
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
| **runId** | `string` |  | [Defaults to `undefined`] |
| **updateWorkflowRunRequest** | [UpdateWorkflowRunRequest](UpdateWorkflowRunRequest.md) |  | |

### Return type

[**WorkflowRunResponse**](WorkflowRunResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## workflowRunCallback

> WorkflowCallbackResponse workflowRunCallback(runId, workflowRunCallbackRequest)

Workflow Run Callback Handler

Terminal-state write seam for the in-process agent runner.  The gating Temporal activities &#x60;&#x60;mark_run_completed_activity&#x60;&#x60; and &#x60;&#x60;mark_run_failed_activity&#x60;&#x60; authenticate as the triggering user (via &#x60;&#x60;assume_user&#x60;&#x60;) and POST here. Only the user who triggered the run (or OWNER/ADMIN) may write its terminal state. The handler is idempotent: a callback against an already-terminal row returns &#x60;&#x60;already_terminal&#x60;&#x60; and the activity-level retry treats it as a no-op.

### Example

```ts
import {
  Configuration,
  WorkflowRunsApi,
} from '@knowledge-stack/ksapi';
import type { WorkflowRunCallbackOperationRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WorkflowRunsApi(config);

  const body = {
    // string
    runId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // WorkflowRunCallbackRequest
    workflowRunCallbackRequest: ...,
  } satisfies WorkflowRunCallbackOperationRequest;

  try {
    const data = await api.workflowRunCallback(body);
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
| **runId** | `string` |  | [Defaults to `undefined`] |
| **workflowRunCallbackRequest** | [WorkflowRunCallbackRequest](WorkflowRunCallbackRequest.md) |  | |

### Return type

[**WorkflowCallbackResponse**](WorkflowCallbackResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

