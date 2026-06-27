# WorkflowDefinitionsApi

All URIs are relative to *http://localhost:8000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createWorkflowDefinition**](WorkflowDefinitionsApi.md#createworkflowdefinitionoperation) | **POST** /v1/workflow-definitions | Create Workflow Definition Handler |
| [**createWorkflowRun**](WorkflowDefinitionsApi.md#createworkflowrun) | **POST** /v1/workflow-definitions/{definition_id}/runs | Create Workflow Run Handler |
| [**deleteWorkflowDefinition**](WorkflowDefinitionsApi.md#deleteworkflowdefinition) | **DELETE** /v1/workflow-definitions/{definition_id} | Delete Workflow Definition Handler |
| [**getWorkflowDefinition**](WorkflowDefinitionsApi.md#getworkflowdefinition) | **GET** /v1/workflow-definitions/{definition_id} | Get Workflow Definition Handler |
| [**instantiateWorkflowTemplate**](WorkflowDefinitionsApi.md#instantiateworkflowtemplateoperation) | **POST** /v1/workflow-definitions/{template_id}/instantiate | Instantiate Workflow Template Handler |
| [**listWorkflowDefinitions**](WorkflowDefinitionsApi.md#listworkflowdefinitions) | **GET** /v1/workflow-definitions | List Workflow Definitions Handler |
| [**listWorkflowRuns**](WorkflowDefinitionsApi.md#listworkflowruns) | **GET** /v1/workflow-definitions/{definition_id}/runs | List Workflow Runs Handler |
| [**updateWorkflowDefinition**](WorkflowDefinitionsApi.md#updateworkflowdefinitionoperation) | **PUT** /v1/workflow-definitions/{definition_id} | Update Workflow Definition Handler |



## createWorkflowDefinition

> WorkflowDefinitionResponse createWorkflowDefinition(createWorkflowDefinitionRequest)

Create Workflow Definition Handler

### Example

```ts
import {
  Configuration,
  WorkflowDefinitionsApi,
} from '@knowledge-stack/ksapi';
import type { CreateWorkflowDefinitionOperationRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WorkflowDefinitionsApi(config);

  const body = {
    // CreateWorkflowDefinitionRequest
    createWorkflowDefinitionRequest: ...,
  } satisfies CreateWorkflowDefinitionOperationRequest;

  try {
    const data = await api.createWorkflowDefinition(body);
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
| **createWorkflowDefinitionRequest** | [CreateWorkflowDefinitionRequest](CreateWorkflowDefinitionRequest.md) |  | |

### Return type

[**WorkflowDefinitionResponse**](WorkflowDefinitionResponse.md)

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


## createWorkflowRun

> WorkflowRunResponse createWorkflowRun(definitionId, files, inputScope, idempotencyKey, autoStart, userMessage)

Create Workflow Run Handler

Create a NOT_STARTED run draft, optionally seeded with KB references.  All three fields are optional: an empty request creates an empty draft instantly (the two-step flow — the FE then uploads files into the run\&#39;s &#x60;&#x60;inputs/&#x60;&#x60; folder and/or PATCHes &#x60;&#x60;input_scope&#x60;&#x60; before Start). Each &#x60;&#x60;input_scope&#x60;&#x60; entry is resolved per its part_type: a DOCUMENT is pinned to its active &#x60;&#x60;DOCUMENT_VERSION&#x60;&#x60;; a FOLDER is pinned by reference only and read live by the runner.  &#x60;&#x60;files&#x60;&#x60; is DEPRECATED — see the field description. When supplied, uploads are still ingested under &#x60;&#x60;runs/&lt;id&gt;/inputs/&#x60;&#x60; so callers mid-migration keep working, but the call blocks on synchronous S3 upload.

### Example

```ts
import {
  Configuration,
  WorkflowDefinitionsApi,
} from '@knowledge-stack/ksapi';
import type { CreateWorkflowRunRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WorkflowDefinitionsApi(config);

  const body = {
    // string
    definitionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // Array<Blob> | DEPRECATED — do not send files here. Carrying file bytes on run creation makes the call block on synchronous S3 upload (the ~30s \\\'Create run\\\' wait). Instead create an empty draft (omit this field), then upload each file to the run\\\'s ``inputs/`` folder via ``POST /v1/documents/ingest`` with ``path_part_id`` set to the run\\\'s ``inputs_path_part_id``; that path ingests asynchronously and auto-syncs the run\\\'s state. This field will be removed once the FE has migrated. (optional)
    files: /path/to/file.txt,
    // string | JSON array of ``DOCUMENT`` or ``FOLDER`` path_part UUIDs referenced from the existing knowledge base, pinned onto the new draft\\\'s input scope. Optional — omit for an empty draft and add references later via PATCH. (optional)
    inputScope: inputScope_example,
    // string | Optional key to prevent duplicate runs from retries. (optional)
    idempotencyKey: idempotencyKey_example,
    // boolean | When true, the run starts itself once its ``inputs/`` uploads finish ingesting — eliminating the separate Start call. If an upload\\\'s ingestion fails, the run is marked FAILED. Default false (two-step flow). Arm only after all uploads are queued; a synchronously-completing first upload would otherwise start the run before later uploads are added. (optional)
    autoStart: true,
    // string | Optional note carried to the auto-start dispatch (the equivalent of the Start endpoint\\\'s ``user_message`` for a self-starting run). Applied only when ``auto_start`` fires. (optional)
    userMessage: userMessage_example,
  } satisfies CreateWorkflowRunRequest;

  try {
    const data = await api.createWorkflowRun(body);
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
| **files** | `Array<Blob>` | DEPRECATED — do not send files here. Carrying file bytes on run creation makes the call block on synchronous S3 upload (the ~30s \\\&#39;Create run\\\&#39; wait). Instead create an empty draft (omit this field), then upload each file to the run\\\&#39;s &#x60;&#x60;inputs/&#x60;&#x60; folder via &#x60;&#x60;POST /v1/documents/ingest&#x60;&#x60; with &#x60;&#x60;path_part_id&#x60;&#x60; set to the run\\\&#39;s &#x60;&#x60;inputs_path_part_id&#x60;&#x60;; that path ingests asynchronously and auto-syncs the run\\\&#39;s state. This field will be removed once the FE has migrated. | [Optional] |
| **inputScope** | `string` | JSON array of &#x60;&#x60;DOCUMENT&#x60;&#x60; or &#x60;&#x60;FOLDER&#x60;&#x60; path_part UUIDs referenced from the existing knowledge base, pinned onto the new draft\\\&#39;s input scope. Optional — omit for an empty draft and add references later via PATCH. | [Optional] [Defaults to `undefined`] |
| **idempotencyKey** | `string` | Optional key to prevent duplicate runs from retries. | [Optional] [Defaults to `undefined`] |
| **autoStart** | `boolean` | When true, the run starts itself once its &#x60;&#x60;inputs/&#x60;&#x60; uploads finish ingesting — eliminating the separate Start call. If an upload\\\&#39;s ingestion fails, the run is marked FAILED. Default false (two-step flow). Arm only after all uploads are queued; a synchronously-completing first upload would otherwise start the run before later uploads are added. | [Optional] [Defaults to `false`] |
| **userMessage** | `string` | Optional note carried to the auto-start dispatch (the equivalent of the Start endpoint\\\&#39;s &#x60;&#x60;user_message&#x60;&#x60; for a self-starting run). Applied only when &#x60;&#x60;auto_start&#x60;&#x60; fires. | [Optional] [Defaults to `undefined`] |

### Return type

[**WorkflowRunResponse**](WorkflowRunResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Successful Response |  -  |
| **422** | Validation Error |  -  |
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteWorkflowDefinition

> deleteWorkflowDefinition(definitionId)

Delete Workflow Definition Handler

### Example

```ts
import {
  Configuration,
  WorkflowDefinitionsApi,
} from '@knowledge-stack/ksapi';
import type { DeleteWorkflowDefinitionRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WorkflowDefinitionsApi(config);

  const body = {
    // string
    definitionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteWorkflowDefinitionRequest;

  try {
    const data = await api.deleteWorkflowDefinition(body);
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


## getWorkflowDefinition

> WorkflowDefinitionResponse getWorkflowDefinition(definitionId)

Get Workflow Definition Handler

### Example

```ts
import {
  Configuration,
  WorkflowDefinitionsApi,
} from '@knowledge-stack/ksapi';
import type { GetWorkflowDefinitionRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WorkflowDefinitionsApi(config);

  const body = {
    // string
    definitionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetWorkflowDefinitionRequest;

  try {
    const data = await api.getWorkflowDefinition(body);
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

[**WorkflowDefinitionResponse**](WorkflowDefinitionResponse.md)

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


## instantiateWorkflowTemplate

> WorkflowDefinitionResponse instantiateWorkflowTemplate(templateId, instantiateWorkflowTemplateRequest)

Instantiate Workflow Template Handler

### Example

```ts
import {
  Configuration,
  WorkflowDefinitionsApi,
} from '@knowledge-stack/ksapi';
import type { InstantiateWorkflowTemplateOperationRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WorkflowDefinitionsApi(config);

  const body = {
    // string
    templateId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // InstantiateWorkflowTemplateRequest
    instantiateWorkflowTemplateRequest: ...,
  } satisfies InstantiateWorkflowTemplateOperationRequest;

  try {
    const data = await api.instantiateWorkflowTemplate(body);
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
| **templateId** | `string` |  | [Defaults to `undefined`] |
| **instantiateWorkflowTemplateRequest** | [InstantiateWorkflowTemplateRequest](InstantiateWorkflowTemplateRequest.md) |  | |

### Return type

[**WorkflowDefinitionResponse**](WorkflowDefinitionResponse.md)

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


## listWorkflowDefinitions

> PaginatedResponseWorkflowDefinitionResponse listWorkflowDefinitions(mine, sortBy, sortDir, isTemplate, limit, offset, createdAfter, createdBefore, updatedAfter, updatedBefore)

List Workflow Definitions Handler

### Example

```ts
import {
  Configuration,
  WorkflowDefinitionsApi,
} from '@knowledge-stack/ksapi';
import type { ListWorkflowDefinitionsRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WorkflowDefinitionsApi(config);

  const body = {
    // boolean | Only definitions the caller created (owner). (optional)
    mine: true,
    // WorkflowDefinitionOrder | Field to sort definitions by (default: CREATED_AT) (optional)
    sortBy: ...,
    // SortDirection | Sort direction; overrides the field\'s natural default (optional)
    sortDir: ...,
    // boolean (optional)
    isTemplate: true,
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
  } satisfies ListWorkflowDefinitionsRequest;

  try {
    const data = await api.listWorkflowDefinitions(body);
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
| **mine** | `boolean` | Only definitions the caller created (owner). | [Optional] [Defaults to `false`] |
| **sortBy** | `WorkflowDefinitionOrder` | Field to sort definitions by (default: CREATED_AT) | [Optional] [Defaults to `undefined`] [Enum: CREATED_AT, UPDATED_AT] |
| **sortDir** | `SortDirection` | Sort direction; overrides the field\&#39;s natural default | [Optional] [Defaults to `undefined`] [Enum: ASC, DESC] |
| **isTemplate** | `boolean` |  | [Optional] [Defaults to `false`] |
| **limit** | `number` | Number of items per page | [Optional] [Defaults to `20`] |
| **offset** | `number` | Number of items to skip | [Optional] [Defaults to `0`] |
| **createdAfter** | `Date` | Only items created at or after this timestamp (inclusive) | [Optional] [Defaults to `undefined`] |
| **createdBefore** | `Date` | Only items created strictly before this timestamp | [Optional] [Defaults to `undefined`] |
| **updatedAfter** | `Date` | Only items updated at or after this timestamp (inclusive) | [Optional] [Defaults to `undefined`] |
| **updatedBefore** | `Date` | Only items updated strictly before this timestamp | [Optional] [Defaults to `undefined`] |

### Return type

[**PaginatedResponseWorkflowDefinitionResponse**](PaginatedResponseWorkflowDefinitionResponse.md)

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


## listWorkflowRuns

> PaginatedResponseWorkflowRunResponse listWorkflowRuns(definitionId, sortBy, sortDir, limit, offset, createdAfter, createdBefore, updatedAfter, updatedBefore)

List Workflow Runs Handler

### Example

```ts
import {
  Configuration,
  WorkflowDefinitionsApi,
} from '@knowledge-stack/ksapi';
import type { ListWorkflowRunsRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WorkflowDefinitionsApi(config);

  const body = {
    // string
    definitionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
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
  } satisfies ListWorkflowRunsRequest;

  try {
    const data = await api.listWorkflowRuns(body);
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


## updateWorkflowDefinition

> WorkflowDefinitionResponse updateWorkflowDefinition(definitionId, updateWorkflowDefinitionRequest)

Update Workflow Definition Handler

Update a workflow definition (PUT semantics).  To move: provide &#x60;&#x60;parent_path_part_id&#x60;&#x60;. Rejected with 409 while a run is IN_PROGRESS. The FOR UPDATE load serializes the move against run start, which takes the same definition-row lock.

### Example

```ts
import {
  Configuration,
  WorkflowDefinitionsApi,
} from '@knowledge-stack/ksapi';
import type { UpdateWorkflowDefinitionOperationRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WorkflowDefinitionsApi(config);

  const body = {
    // string
    definitionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateWorkflowDefinitionRequest
    updateWorkflowDefinitionRequest: ...,
  } satisfies UpdateWorkflowDefinitionOperationRequest;

  try {
    const data = await api.updateWorkflowDefinition(body);
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
| **updateWorkflowDefinitionRequest** | [UpdateWorkflowDefinitionRequest](UpdateWorkflowDefinitionRequest.md) |  | |

### Return type

[**WorkflowDefinitionResponse**](WorkflowDefinitionResponse.md)

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

