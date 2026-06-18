# AuditEventsApi

All URIs are relative to *http://localhost:8000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**exportAuditEvents**](AuditEventsApi.md#exportauditevents) | **GET** /v1/audit-events/export | Export Audit Events Handler |
| [**listAuditEvents**](AuditEventsApi.md#listauditevents) | **GET** /v1/audit-events | List Audit Events Handler |



## exportAuditEvents

> Blob exportAuditEvents(actorUserId, kind, since, until, subjectPathPartId, recursive)

Export Audit Events Handler

Export the tenant\&#39;s audit events as a CSV download (admin/owner only).  Same filters as &#x60;&#x60;list_audit_events&#x60;&#x60; but unpaginated — streams every matching event newest-first. Each row resolves the actor\&#39;s name and the subject\&#39;s name + path so an auditor can read the file directly in Excel.

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
    // Date | Only events at or after this timestamp (optional)
    since: 2013-10-20T19:20:30+01:00,
    // Date | Only events strictly before this timestamp (optional)
    until: 2013-10-20T19:20:30+01:00,
    // string | Scope to one document/folder/run subject (optional)
    subjectPathPartId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // boolean | Include the subject\'s descendants (needs subject) (optional)
    recursive: true,
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
| **since** | `Date` | Only events at or after this timestamp | [Optional] [Defaults to `undefined`] |
| **until** | `Date` | Only events strictly before this timestamp | [Optional] [Defaults to `undefined`] |
| **subjectPathPartId** | `string` | Scope to one document/folder/run subject | [Optional] [Defaults to `undefined`] |
| **recursive** | `boolean` | Include the subject\&#39;s descendants (needs subject) | [Optional] [Defaults to `false`] |

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

> PaginatedResponseEventResponse listAuditEvents(actorUserId, kind, since, until, subjectPathPartId, recursive, sortDir, limit, offset)

List Audit Events Handler

List the tenant\&#39;s audit events, newest first (admin/owner only).  Returns every event in the caller\&#39;s own tenant — ADMIN/OWNER bypass path permissions by design. Filter by actor, kind, time window, and/or a subject subtree. Each event carries its resolved actor name.

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
    // Date | Only events at or after this timestamp (optional)
    since: 2013-10-20T19:20:30+01:00,
    // Date | Only events strictly before this timestamp (optional)
    until: 2013-10-20T19:20:30+01:00,
    // string | Scope to one document/folder/run subject (optional)
    subjectPathPartId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // boolean | Include the subject\'s descendants (needs subject) (optional)
    recursive: true,
    // SortDirection | Sort by timestamp (default: DESC, newest first) (optional)
    sortDir: ...,
    // number | Number of items per page (optional)
    limit: 56,
    // number | Number of items to skip (optional)
    offset: 56,
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
| **since** | `Date` | Only events at or after this timestamp | [Optional] [Defaults to `undefined`] |
| **until** | `Date` | Only events strictly before this timestamp | [Optional] [Defaults to `undefined`] |
| **subjectPathPartId** | `string` | Scope to one document/folder/run subject | [Optional] [Defaults to `undefined`] |
| **recursive** | `boolean` | Include the subject\&#39;s descendants (needs subject) | [Optional] [Defaults to `false`] |
| **sortDir** | `SortDirection` | Sort by timestamp (default: DESC, newest first) | [Optional] [Defaults to `undefined`] [Enum: ASC, DESC] |
| **limit** | `number` | Number of items per page | [Optional] [Defaults to `20`] |
| **offset** | `number` | Number of items to skip | [Optional] [Defaults to `0`] |

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

