# AuditEventsApi

All URIs are relative to *http://localhost:8000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**exportAuditEvents**](AuditEventsApi.md#exportauditevents) | **GET** /v1/audit-events/export | Export Audit Events Handler |
| [**listAuditEvents**](AuditEventsApi.md#listauditevents) | **GET** /v1/audit-events | List Audit Events Handler |



## exportAuditEvents

> Blob exportAuditEvents(actorUserId, kind, subjectPathPartId, recursive, since, until)

Export Audit Events Handler

Export the tenant\&#39;s audit events as a CSV download (admin/owner only).  Same filters as &#x60;&#x60;list_audit_events&#x60;&#x60; but unpaginated — streams every matching event newest-first. Each row resolves the actor\&#39;s name and the subject\&#39;s name + path so an auditor can read the file directly in Excel.  With no &#x60;since&#x60;/&#x60;until&#x60; the export covers the entire audit log; pass either bound to narrow to an optional from/to window.

### Example

```ts
import {
  Configuration,
  AuditEventsApi,
} from '@knowledge-stack/ksapi';
import type { ExportAuditEventsRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AuditEventsApi(config);

  const body = {
    // string | Filter to one actor (optional)
    actorUserId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Filter to one event kind (optional)
    kind: kind_example,
    // string | Scope to one document/folder/run subject (optional)
    subjectPathPartId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // boolean | Include the subject\'s descendants (needs subject) (optional)
    recursive: true,
    // Date | Window start (inclusive). Omit for the endpoint\'s default range. (optional)
    since: 2013-10-20T19:20:30+01:00,
    // Date | Window end. Omit for no explicit upper bound; see the endpoint\'s boundary semantics. (optional)
    until: 2013-10-20T19:20:30+01:00,
  } satisfies ExportAuditEventsRequest;

  try {
    const data = await api.exportAuditEvents(body);
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
| **actorUserId** | `string` | Filter to one actor | [Optional] [Defaults to `undefined`] |
| **kind** | `string` | Filter to one event kind | [Optional] [Defaults to `undefined`] |
| **subjectPathPartId** | `string` | Scope to one document/folder/run subject | [Optional] [Defaults to `undefined`] |
| **recursive** | `boolean` | Include the subject\&#39;s descendants (needs subject) | [Optional] [Defaults to `false`] |
| **since** | `Date` | Window start (inclusive). Omit for the endpoint\&#39;s default range. | [Optional] [Defaults to `undefined`] |
| **until** | `Date` | Window end. Omit for no explicit upper bound; see the endpoint\&#39;s boundary semantics. | [Optional] [Defaults to `undefined`] |

### Return type

**Blob**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `text/csv`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Audit events as a UTF-8 CSV download (BOM-prefixed so Excel renders Chinese and English correctly). |  -  |
| **422** | Validation Error |  -  |
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listAuditEvents

> PaginatedResponseEventResponse listAuditEvents(actorUserId, kind, subjectPathPartId, recursive, limit, offset, sortDir, since, until)

List Audit Events Handler

List the tenant\&#39;s audit events, newest first (admin/owner only).  Returns every event in the caller\&#39;s own tenant — ADMIN/OWNER bypass path permissions by design. Filter by actor, kind, an optional &#x60;since&#x60;(from)/ &#x60;until&#x60;(to) window, and/or a subject subtree. Each event carries its resolved actor name.

### Example

```ts
import {
  Configuration,
  AuditEventsApi,
} from '@knowledge-stack/ksapi';
import type { ListAuditEventsRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AuditEventsApi(config);

  const body = {
    // string | Filter to one actor (optional)
    actorUserId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Filter to one event kind (optional)
    kind: kind_example,
    // string | Scope to one document/folder/run subject (optional)
    subjectPathPartId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // boolean | Include the subject\'s descendants (needs subject) (optional)
    recursive: true,
    // number | Number of items per page (optional)
    limit: 56,
    // number | Number of items to skip (optional)
    offset: 56,
    // SortDirection | Sort direction (ASC or DESC); overrides the field\'s natural default. Every sort field supports both directions. (optional)
    sortDir: ...,
    // Date | Window start (inclusive). Omit for the endpoint\'s default range. (optional)
    since: 2013-10-20T19:20:30+01:00,
    // Date | Window end. Omit for no explicit upper bound; see the endpoint\'s boundary semantics. (optional)
    until: 2013-10-20T19:20:30+01:00,
  } satisfies ListAuditEventsRequest;

  try {
    const data = await api.listAuditEvents(body);
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
| **actorUserId** | `string` | Filter to one actor | [Optional] [Defaults to `undefined`] |
| **kind** | `string` | Filter to one event kind | [Optional] [Defaults to `undefined`] |
| **subjectPathPartId** | `string` | Scope to one document/folder/run subject | [Optional] [Defaults to `undefined`] |
| **recursive** | `boolean` | Include the subject\&#39;s descendants (needs subject) | [Optional] [Defaults to `false`] |
| **limit** | `number` | Number of items per page | [Optional] [Defaults to `20`] |
| **offset** | `number` | Number of items to skip | [Optional] [Defaults to `0`] |
| **sortDir** | `SortDirection` | Sort direction (ASC or DESC); overrides the field\&#39;s natural default. Every sort field supports both directions. | [Optional] [Defaults to `undefined`] [Enum: ASC, DESC] |
| **since** | `Date` | Window start (inclusive). Omit for the endpoint\&#39;s default range. | [Optional] [Defaults to `undefined`] |
| **until** | `Date` | Window end. Omit for no explicit upper bound; see the endpoint\&#39;s boundary semantics. | [Optional] [Defaults to `undefined`] |

### Return type

[**PaginatedResponseEventResponse**](PaginatedResponseEventResponse.md)

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

