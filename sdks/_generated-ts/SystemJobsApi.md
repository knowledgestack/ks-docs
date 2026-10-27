# SystemJobsApi

All URIs are relative to *http://localhost:8000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**bulkRerunDvWorkflows**](SystemJobsApi.md#bulkrerundvworkflows) | **POST** /v1/system-jobs/document_versions/bulk-rerun | Bulk Rerun Dv Workflows Handler |
| [**cancelTemporalWorkflow**](SystemJobsApi.md#canceltemporalworkflow) | **DELETE** /v1/system-jobs/{workflow_id} | Cancel Temporal Workflow Handler |
| [**dvWorkflowRerun**](SystemJobsApi.md#dvworkflowrerun) | **POST** /v1/system-jobs/document_versions/{workflow_id} | Dv Workflow Rerun Handler |
| [**getDvWorkflow**](SystemJobsApi.md#getdvworkflow) | **GET** /v1/system-jobs/document_versions/{workflow_id} | Get Dv Workflow Handler |
| [**getTemporalWorkflowStatus**](SystemJobsApi.md#gettemporalworkflowstatus) | **GET** /v1/system-jobs/{workflow_id} | Get Temporal Workflow Status Handler |
| [**getZipIngestionStatus**](SystemJobsApi.md#getzipingestionstatus) | **GET** /v1/system-jobs/zip-ingestions/{workflow_id} | Get Zip Ingestion Status Handler |
| [**listDvWorkflowUploaders**](SystemJobsApi.md#listdvworkflowuploaders) | **GET** /v1/system-jobs/document_versions/uploaders | List Dv Workflow Uploaders Handler |
| [**listDvWorkflows**](SystemJobsApi.md#listdvworkflows) | **GET** /v1/system-jobs/document_versions | List Dv Workflows Handler |



## bulkRerunDvWorkflows

> BulkOperationResponse bulkRerunDvWorkflows(bulkRerunRequest)

Bulk Rerun Dv Workflows Handler

Re-run ingestion for the selected document versions, reporting per item.  &#x60;&#x60;not_found&#x60;&#x60;: missing, trashed, never ingested or without its stored source; &#x60;&#x60;forbidden&#x60;&#x60;: no &#x60;&#x60;can_write&#x60;&#x60;; &#x60;&#x60;in_progress_workflow&#x60;&#x60;: still pending/processing; &#x60;&#x60;already_ingested&#x60;&#x60;: completed; &#x60;&#x60;unsupported_document_type&#x60;&#x60;: a type that is no longer ingested; &#x60;&#x60;superseded&#x60;&#x60;: a newer version of the document exists. More than 200 ids is a 400 before any re-run.

### Example

```ts
import {
  Configuration,
  SystemJobsApi,
} from '@knowledge-stack/ksapi';
import type { BulkRerunDvWorkflowsRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SystemJobsApi(config);

  const body = {
    // BulkRerunRequest
    bulkRerunRequest: ...,
  } satisfies BulkRerunDvWorkflowsRequest;

  try {
    const data = await api.bulkRerunDvWorkflows(body);
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
| **bulkRerunRequest** | [BulkRerunRequest](BulkRerunRequest.md) |  | |

### Return type

[**BulkOperationResponse**](BulkOperationResponse.md)

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


## cancelTemporalWorkflow

> WorkflowCancelResponse cancelTemporalWorkflow(workflowId)

Cancel Temporal Workflow Handler

Cancel a tenant workflow; tracked ingestion also requires document write access.  Tracked attempts are settled before cancelling their matching Temporal run, including attempts not yet dispatched. Unstarted executions are terminated because cancellation needs a worker. Temporal operations pin the described run so a concurrent rerun is left alone.

### Example

```ts
import {
  Configuration,
  SystemJobsApi,
} from '@knowledge-stack/ksapi';
import type { CancelTemporalWorkflowRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SystemJobsApi(config);

  const body = {
    // string
    workflowId: workflowId_example,
  } satisfies CancelTemporalWorkflowRequest;

  try {
    const data = await api.cancelTemporalWorkflow(body);
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
| **workflowId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**WorkflowCancelResponse**](WorkflowCancelResponse.md)

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


## dvWorkflowRerun

> WorkflowActionResponse dvWorkflowRerun(workflowId)

Dv Workflow Rerun Handler

Rerun a workflow. USER role requires &#x60;&#x60;can_write&#x60;&#x60; on the document path.  A version that a newer live version supersedes is refused with 409. &#x60;&#x60;s3_client&#x60;&#x60; is injected because &#x60;&#x60;DocumentIngestionService.__init__&#x60;&#x60; requires it, even though the re-ingestion path reuses the existing S3 source.

### Example

```ts
import {
  Configuration,
  SystemJobsApi,
} from '@knowledge-stack/ksapi';
import type { DvWorkflowRerunRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SystemJobsApi(config);

  const body = {
    // string
    workflowId: workflowId_example,
  } satisfies DvWorkflowRerunRequest;

  try {
    const data = await api.dvWorkflowRerun(body);
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
| **workflowId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**WorkflowActionResponse**](WorkflowActionResponse.md)

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


## getDvWorkflow

> WorkflowDetailResponse getDvWorkflow(workflowId)

Get Dv Workflow Handler

Get single workflow detail with live Temporal status.

### Example

```ts
import {
  Configuration,
  SystemJobsApi,
} from '@knowledge-stack/ksapi';
import type { GetDvWorkflowRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SystemJobsApi(config);

  const body = {
    // string
    workflowId: workflowId_example,
  } satisfies GetDvWorkflowRequest;

  try {
    const data = await api.getDvWorkflow(body);
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
| **workflowId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**WorkflowDetailResponse**](WorkflowDetailResponse.md)

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


## getTemporalWorkflowStatus

> TemporalWorkflowStatusResponse getTemporalWorkflowStatus(workflowId)

Get Temporal Workflow Status Handler

Get live Temporal status for any workflow owned by the caller\&#39;s tenant.

### Example

```ts
import {
  Configuration,
  SystemJobsApi,
} from '@knowledge-stack/ksapi';
import type { GetTemporalWorkflowStatusRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SystemJobsApi(config);

  const body = {
    // string
    workflowId: workflowId_example,
  } satisfies GetTemporalWorkflowStatusRequest;

  try {
    const data = await api.getTemporalWorkflowStatus(body);
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
| **workflowId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**TemporalWorkflowStatusResponse**](TemporalWorkflowStatusResponse.md)

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


## getZipIngestionStatus

> ZipIngestionStatusResponse getZipIngestionStatus(workflowId)

Get Zip Ingestion Status Handler

Get a ZIP fan-out\&#39;s live status + per-member outcomes.  Tenant-scoped via the TenantId search attribute (no per-path can_read check — intentionally consistent with the sibling generic Temporal endpoints below; the opaque workflow_id is only handed to the uploader, who had can_write on the target). The per-member results come from the workflow\&#39;s &#x60;&#x60;results&#x60;&#x60; query (served from retained history), so once Temporal retention expires this 404s. Any other workflow type has no &#x60;&#x60;results&#x60;&#x60; query and is a 404, not a 500.

### Example

```ts
import {
  Configuration,
  SystemJobsApi,
} from '@knowledge-stack/ksapi';
import type { GetZipIngestionStatusRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SystemJobsApi(config);

  const body = {
    // string
    workflowId: workflowId_example,
  } satisfies GetZipIngestionStatusRequest;

  try {
    const data = await api.getZipIngestionStatus(body);
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
| **workflowId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**ZipIngestionStatusResponse**](ZipIngestionStatusResponse.md)

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


## listDvWorkflowUploaders

> PaginatedResponseUserInfo listDvWorkflowUploaders(usernameLike, limit, offset)

List Dv Workflow Uploaders Handler

People who uploaded a version the caller can list, for the uploader filter.  Scoped like &#x60;&#x60;list_dv_workflows&#x60;&#x60;: USER only counts versions under readable paths.

### Example

```ts
import {
  Configuration,
  SystemJobsApi,
} from '@knowledge-stack/ksapi';
import type { ListDvWorkflowUploadersRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SystemJobsApi(config);

  const body = {
    // string | Case-insensitive substring of the first or last name (optional)
    usernameLike: usernameLike_example,
    // number | Number of items per page (optional)
    limit: 56,
    // number | Number of items to skip (optional)
    offset: 56,
  } satisfies ListDvWorkflowUploadersRequest;

  try {
    const data = await api.listDvWorkflowUploaders(body);
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
| **usernameLike** | `string` | Case-insensitive substring of the first or last name | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items per page | [Optional] [Defaults to `20`] |
| **offset** | `number` | Number of items to skip | [Optional] [Defaults to `0`] |

### Return type

[**PaginatedResponseUserInfo**](PaginatedResponseUserInfo.md)

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


## listDvWorkflows

> PaginatedResponseWorkflowSummaryResponse listDvWorkflows(limit, offset, sortDir, status, nameLike, latestVersionOnly, uploaderUserId, createdAfter, createdBefore, updatedAfter, updatedBefore)

List Dv Workflows Handler

List ingestions of live documents in the current tenant, newest upload first.  ADMIN/OWNER see every version; USER only versions under readable paths. &#x60;&#x60;sort_dir&#x3D;ASC&#x60;&#x60; lists the oldest upload first.

### Example

```ts
import {
  Configuration,
  SystemJobsApi,
} from '@knowledge-stack/ksapi';
import type { ListDvWorkflowsRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SystemJobsApi(config);

  const body = {
    // number | Number of items per page (optional)
    limit: 56,
    // number | Number of items to skip (optional)
    offset: 56,
    // SortDirection | Sort direction (ASC or DESC); overrides the field\'s natural default. Every sort field supports both directions. (optional)
    sortDir: ...,
    // Array<PipelineStatus> | Only versions in one of these pipeline statuses (optional)
    status: ...,
    // string | Case-insensitive substring filter on document name (optional)
    nameLike: nameLike_example,
    // boolean | Skip versions superseded by a newer version (optional)
    latestVersionOnly: true,
    // string | Filter to versions uploaded by this user (optional)
    uploaderUserId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // Date | Only items created at or after this timestamp (inclusive) (optional)
    createdAfter: 2013-10-20T19:20:30+01:00,
    // Date | Only items created strictly before this timestamp (optional)
    createdBefore: 2013-10-20T19:20:30+01:00,
    // Date | Only items updated at or after this timestamp (inclusive) (optional)
    updatedAfter: 2013-10-20T19:20:30+01:00,
    // Date | Only items updated strictly before this timestamp (optional)
    updatedBefore: 2013-10-20T19:20:30+01:00,
  } satisfies ListDvWorkflowsRequest;

  try {
    const data = await api.listDvWorkflows(body);
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
| **limit** | `number` | Number of items per page | [Optional] [Defaults to `20`] |
| **offset** | `number` | Number of items to skip | [Optional] [Defaults to `0`] |
| **sortDir** | `SortDirection` | Sort direction (ASC or DESC); overrides the field\&#39;s natural default. Every sort field supports both directions. | [Optional] [Defaults to `undefined`] [Enum: ASC, DESC] |
| **status** | `Array<PipelineStatus>` | Only versions in one of these pipeline statuses | [Optional] |
| **nameLike** | `string` | Case-insensitive substring filter on document name | [Optional] [Defaults to `undefined`] |
| **latestVersionOnly** | `boolean` | Skip versions superseded by a newer version | [Optional] [Defaults to `false`] |
| **uploaderUserId** | `string` | Filter to versions uploaded by this user | [Optional] [Defaults to `undefined`] |
| **createdAfter** | `Date` | Only items created at or after this timestamp (inclusive) | [Optional] [Defaults to `undefined`] |
| **createdBefore** | `Date` | Only items created strictly before this timestamp | [Optional] [Defaults to `undefined`] |
| **updatedAfter** | `Date` | Only items updated at or after this timestamp (inclusive) | [Optional] [Defaults to `undefined`] |
| **updatedBefore** | `Date` | Only items updated strictly before this timestamp | [Optional] [Defaults to `undefined`] |

### Return type

[**PaginatedResponseWorkflowSummaryResponse**](PaginatedResponseWorkflowSummaryResponse.md)

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

