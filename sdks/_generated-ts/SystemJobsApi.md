# SystemJobsApi

All URIs are relative to *http://localhost:8000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**cancelTemporalWorkflow**](SystemJobsApi.md#canceltemporalworkflow) | **DELETE** /v1/system-jobs/{workflow_id} | Cancel Temporal Workflow Handler |
| [**dvWorkflowRerun**](SystemJobsApi.md#dvworkflowrerun) | **POST** /v1/system-jobs/document_versions/{workflow_id} | Dv Workflow Rerun Handler |
| [**getDvWorkflow**](SystemJobsApi.md#getdvworkflow) | **GET** /v1/system-jobs/document_versions/{workflow_id} | Get Dv Workflow Handler |
| [**getTemporalWorkflowStatus**](SystemJobsApi.md#gettemporalworkflowstatus) | **GET** /v1/system-jobs/{workflow_id} | Get Temporal Workflow Status Handler |
| [**getZipIngestionStatus**](SystemJobsApi.md#getzipingestionstatus) | **GET** /v1/system-jobs/zip-ingestions/{workflow_id} | Get Zip Ingestion Status Handler |
| [**listDvWorkflows**](SystemJobsApi.md#listdvworkflows) | **GET** /v1/system-jobs/document_versions | List Dv Workflows Handler |



## cancelTemporalWorkflow

> WorkflowCancelResponse cancelTemporalWorkflow(workflowId)

Cancel Temporal Workflow Handler

Cancel any Temporal workflow owned by the caller\&#39;s tenant.  No status guard — this is a thin Temporal wrapper. Cancelling an already-terminal workflow is a no-op on the Temporal side.

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

Rerun a workflow. USER role requires &#x60;&#x60;can_write&#x60;&#x60; on the document path.  &#x60;&#x60;s3_client&#x60;&#x60; is injected because &#x60;&#x60;DocumentIngestionService.__init__&#x60;&#x60; requires it, even though the re-ingestion path reuses the existing S3 source.

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

Get a fan-out\&#39;s live status + per-member outcomes.  Serves both container fan-outs: a ZIP archive\&#39;s members and an email\&#39;s attachments. Both expose the same &#x60;&#x60;results&#x60;&#x60; query, so one endpoint covers them rather than duplicating the tenant check and hydration.  Tenant-scoped via the TenantId search attribute (no per-path can_read check — intentionally consistent with the sibling generic Temporal endpoints below; the opaque workflow_id is only handed to the uploader, who had can_write on the target). The per-member results come from the workflow\&#39;s &#x60;&#x60;results&#x60;&#x60; query (served from retained history), so once Temporal retention expires this 404s.

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


## listDvWorkflows

> PaginatedResponseWorkflowSummaryResponse listDvWorkflows(limit, offset)

List Dv Workflows Handler

List all workflows for the current tenant (paginated, DB-backed).  ADMIN/OWNER see all workflows; USER sees only those under permitted paths.

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

