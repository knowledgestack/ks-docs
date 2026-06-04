# PathPartsApi

All URIs are relative to *http://localhost:8000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**appendPathPartEvent**](PathPartsApi.md#appendpathpartevent) | **POST** /v1/path-parts/{path_part_id}/events | Append Path Part Event Handler |
| [**bulkRemovePathPartTags**](PathPartsApi.md#bulkremovepathparttags) | **DELETE** /v1/path-parts/{path_part_id}/tags | Bulk Remove Path Part Tags Handler |
| [**getPathPart**](PathPartsApi.md#getpathpart) | **GET** /v1/path-parts/{path_part_id} | Get Path Part Handler |
| [**getPathPartAncestry**](PathPartsApi.md#getpathpartancestry) | **GET** /v1/path-parts/{path_part_id}/ancestry | Get Path Part Ancestry Handler |
| [**getPathPartSubtreeChunks**](PathPartsApi.md#getpathpartsubtreechunks) | **GET** /v1/path-parts/{path_part_id}/subtree_chunks | Get Path Part Subtree Chunks Handler |
| [**getPathPartTags**](PathPartsApi.md#getpathparttags) | **GET** /v1/path-parts/{path_part_id}/tags | Get Path Part Tags Handler |
| [**listPathPartEvents**](PathPartsApi.md#listpathpartevents) | **GET** /v1/path-parts/{path_part_id}/events | List Path Part Events Handler |
| [**listPathParts**](PathPartsApi.md#listpathparts) | **GET** /v1/path-parts | List Path Parts Handler |
| [**setPathPartTags**](PathPartsApi.md#setpathparttags) | **POST** /v1/path-parts/{path_part_id}/tags | Set Path Part Tags Handler |



## appendPathPartEvent

> EventResponse appendPathPartEvent(pathPartId, appendEventRequest, authorization, ksUat)

Append Path Part Event Handler

Record an event for a subject path_part from the frontend.  Auth: caller must hold &#x60;&#x60;can_write&#x60;&#x60; on the subject\&#39;s materialized_path (OWNER/ADMIN bypass). Server stamps &#x60;&#x60;actor_user_id&#x60;&#x60; from the caller\&#39;s identity — callers cannot impersonate other users on the audit trail.  &#x60;&#x60;kind&#x60;&#x60; is free-form text but reserved server namespaces (&#x60;&#x60;workflow.&#x60;&#x60;, &#x60;&#x60;document.&#x60;&#x60;, &#x60;&#x60;folder.&#x60;&#x60;, &#x60;&#x60;permission.&#x60;&#x60;, &#x60;&#x60;connector.&#x60;&#x60;, &#x60;&#x60;query.&#x60;&#x60;, &#x60;&#x60;auth.&#x60;&#x60;, &#x60;&#x60;tenant.&#x60;&#x60;) are rejected at 422 so clients cannot forge server-emitted audit events. Clients should namespace under &#x60;&#x60;client.*&#x60;&#x60;. &#x60;&#x60;payload&#x60;&#x60; is capped at 64KB encoded JSON.

### Example

```ts
import {
  Configuration,
  PathPartsApi,
} from '@knowledge-stack/ksapi';
import type { AppendPathPartEventRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const api = new PathPartsApi();

  const body = {
    // string
    pathPartId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // AppendEventRequest
    appendEventRequest: ...,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
  } satisfies AppendPathPartEventRequest;

  try {
    const data = await api.appendPathPartEvent(body);
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
| **pathPartId** | `string` |  | [Defaults to `undefined`] |
| **appendEventRequest** | [AppendEventRequest](AppendEventRequest.md) |  | |
| **authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ksUat** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**EventResponse**](EventResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## bulkRemovePathPartTags

> PathPartTagsResponse bulkRemovePathPartTags(pathPartId, bulkTagRequest, authorization, ksUat)

Bulk Remove Path Part Tags Handler

Bulk remove tags from a path part.  Silently ignores tags that aren\&#39;t attached. Requires write permission on the target path part.

### Example

```ts
import {
  Configuration,
  PathPartsApi,
} from '@knowledge-stack/ksapi';
import type { BulkRemovePathPartTagsRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const api = new PathPartsApi();

  const body = {
    // string
    pathPartId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // BulkTagRequest
    bulkTagRequest: ...,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
  } satisfies BulkRemovePathPartTagsRequest;

  try {
    const data = await api.bulkRemovePathPartTags(body);
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
| **pathPartId** | `string` |  | [Defaults to `undefined`] |
| **bulkTagRequest** | [BulkTagRequest](BulkTagRequest.md) |  | |
| **authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ksUat** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**PathPartTagsResponse**](PathPartTagsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPathPart

> PathPartResponse getPathPart(pathPartId, authorization, ksUat)

Get Path Part Handler

Get a path part by its ID.  Returns the path part with its attached tag IDs.

### Example

```ts
import {
  Configuration,
  PathPartsApi,
} from '@knowledge-stack/ksapi';
import type { GetPathPartRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const api = new PathPartsApi();

  const body = {
    // string
    pathPartId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
  } satisfies GetPathPartRequest;

  try {
    const data = await api.getPathPart(body);
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
| **pathPartId** | `string` |  | [Defaults to `undefined`] |
| **authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ksUat** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**PathPartResponse**](PathPartResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPathPartAncestry

> AncestryResponse getPathPartAncestry(pathPartId, authorization, ksUat)

Get Path Part Ancestry Handler

Get the full ancestry chain for a path part (root to leaf, inclusive).  Returns all ancestors from the root down to and including the target path part. Authorization is checked on the leaf — if the user can read the leaf, they can navigate its ancestors.

### Example

```ts
import {
  Configuration,
  PathPartsApi,
} from '@knowledge-stack/ksapi';
import type { GetPathPartAncestryRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const api = new PathPartsApi();

  const body = {
    // string
    pathPartId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
  } satisfies GetPathPartAncestryRequest;

  try {
    const data = await api.getPathPartAncestry(body);
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
| **pathPartId** | `string` |  | [Defaults to `undefined`] |
| **authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ksUat** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**AncestryResponse**](AncestryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPathPartSubtreeChunks

> SubtreeChunksResponse getPathPartSubtreeChunks(pathPartId, authorization, ksUat)

Get Path Part Subtree Chunks Handler

Resolve all descendant chunks for a subtree root.  Returns chunks grouped by identical (path_part_ids, tag_ids) tuples.

### Example

```ts
import {
  Configuration,
  PathPartsApi,
} from '@knowledge-stack/ksapi';
import type { GetPathPartSubtreeChunksRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const api = new PathPartsApi();

  const body = {
    // string
    pathPartId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
  } satisfies GetPathPartSubtreeChunksRequest;

  try {
    const data = await api.getPathPartSubtreeChunks(body);
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
| **pathPartId** | `string` |  | [Defaults to `undefined`] |
| **authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ksUat** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**SubtreeChunksResponse**](SubtreeChunksResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPathPartTags

> PathPartTagsResponse getPathPartTags(pathPartId, includeInherited, authorization, ksUat)

Get Path Part Tags Handler

Get tags for a path part.  When include_inherited&#x3D;False (default), returns only directly-attached tags. When include_inherited&#x3D;True, walks the ancestor chain and returns the deduplicated union of tags from all ancestors (including the path part itself).

### Example

```ts
import {
  Configuration,
  PathPartsApi,
} from '@knowledge-stack/ksapi';
import type { GetPathPartTagsRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const api = new PathPartsApi();

  const body = {
    // string
    pathPartId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // boolean | Include tags inherited from ancestor path parts (optional)
    includeInherited: true,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
  } satisfies GetPathPartTagsRequest;

  try {
    const data = await api.getPathPartTags(body);
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
| **pathPartId** | `string` |  | [Defaults to `undefined`] |
| **includeInherited** | `boolean` | Include tags inherited from ancestor path parts | [Optional] [Defaults to `false`] |
| **authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ksUat** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**PathPartTagsResponse**](PathPartTagsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listPathPartEvents

> PaginatedResponseEventResponse listPathPartEvents(pathPartId, kind, since, until, recursive, limit, offset, authorization, ksUat)

List Path Part Events Handler

List events anchored to a specific path_part subject.  Subject permission is enforced via the existing &#x60;&#x60;PathPermissionService&#x60;&#x60; — caller must have &#x60;&#x60;can_read&#x60;&#x60; on the subject\&#39;s materialized_path (OWNER/ADMIN bypass). Events are ordered newest-first by &#x60;&#x60;ts&#x60;&#x60; and paginated.  When &#x60;&#x60;recursive&#x3D;True&#x60;&#x60;, events on any descendant of the subject are included — useful for \&quot;all events under this folder\&quot; or \&quot;all events under this workflow definition\&quot;.

### Example

```ts
import {
  Configuration,
  PathPartsApi,
} from '@knowledge-stack/ksapi';
import type { ListPathPartEventsRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const api = new PathPartsApi();

  const body = {
    // string
    pathPartId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Filter to a single event kind (optional)
    kind: kind_example,
    // Date | Only events at or after this timestamp (optional)
    since: 2013-10-20T19:20:30+01:00,
    // Date | Only events strictly before this timestamp (optional)
    until: 2013-10-20T19:20:30+01:00,
    // boolean | Include events from descendant path_parts as well as the subject itself (optional)
    recursive: true,
    // number | Number of items per page (optional)
    limit: 56,
    // number | Number of items to skip (optional)
    offset: 56,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
  } satisfies ListPathPartEventsRequest;

  try {
    const data = await api.listPathPartEvents(body);
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
| **pathPartId** | `string` |  | [Defaults to `undefined`] |
| **kind** | `string` | Filter to a single event kind | [Optional] [Defaults to `undefined`] |
| **since** | `Date` | Only events at or after this timestamp | [Optional] [Defaults to `undefined`] |
| **until** | `Date` | Only events strictly before this timestamp | [Optional] [Defaults to `undefined`] |
| **recursive** | `boolean` | Include events from descendant path_parts as well as the subject itself | [Optional] [Defaults to `false`] |
| **limit** | `number` | Number of items per page | [Optional] [Defaults to `20`] |
| **offset** | `number` | Number of items to skip | [Optional] [Defaults to `0`] |
| **authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ksUat** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**PaginatedResponseEventResponse**](PaginatedResponseEventResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listPathParts

> PaginatedResponsePathPartResponse listPathParts(parentPathId, maxDepth, sortOrder, limit, offset, authorization, ksUat)

List Path Parts Handler

List path parts under a parent with traversal.  This is a generic endpoint for traversing the path hierarchy. It returns the navigable, container-like nodes of the tree: FOLDER, WORKFLOW_DEFINITION, and WORKFLOW_RUN path parts.  - If parent_path_id is not provided, lists contents of the root folder. - max_depth controls how deep to traverse (1 &#x3D; direct children only). - sort_order controls the ordering: LOGICAL (linked-list), NAME, UPDATED_AT, CREATED_AT.  For listing folder contents that includes documents with enriched metadata, use GET /folders/{folder_id}/contents instead.

### Example

```ts
import {
  Configuration,
  PathPartsApi,
} from '@knowledge-stack/ksapi';
import type { ListPathPartsRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const api = new PathPartsApi();

  const body = {
    // string | Parent PathPart ID (defaults to root) (optional)
    parentPathId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // number | Maximum depth to traverse (1 = direct children, default: 1) (optional)
    maxDepth: 56,
    // PathOrder | Sort order for results (default: LOGICAL) (optional)
    sortOrder: ...,
    // number | Number of items per page (optional)
    limit: 56,
    // number | Number of items to skip (optional)
    offset: 56,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
  } satisfies ListPathPartsRequest;

  try {
    const data = await api.listPathParts(body);
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
| **parentPathId** | `string` | Parent PathPart ID (defaults to root) | [Optional] [Defaults to `undefined`] |
| **maxDepth** | `number` | Maximum depth to traverse (1 &#x3D; direct children, default: 1) | [Optional] [Defaults to `1`] |
| **sortOrder** | `PathOrder` | Sort order for results (default: LOGICAL) | [Optional] [Defaults to `undefined`] [Enum: LOGICAL, NAME, UPDATED_AT, CREATED_AT] |
| **limit** | `number` | Number of items per page | [Optional] [Defaults to `20`] |
| **offset** | `number` | Number of items to skip | [Optional] [Defaults to `0`] |
| **authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ksUat** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**PaginatedResponsePathPartResponse**](PaginatedResponsePathPartResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setPathPartTags

> PathPartTagsResponse setPathPartTags(pathPartId, bulkTagRequest, authorization, ksUat)

Set Path Part Tags Handler

Set tags on a path part, replacing any existing tags.  The provided tag_ids become the complete tag set for the path part. Tags not in the list are removed; missing tags are added. An empty list clears all tags. Returns 400 if any tag_id doesn\&#39;t exist (FK violation). Requires write permission on the target path part.

### Example

```ts
import {
  Configuration,
  PathPartsApi,
} from '@knowledge-stack/ksapi';
import type { SetPathPartTagsRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const api = new PathPartsApi();

  const body = {
    // string
    pathPartId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // BulkTagRequest
    bulkTagRequest: ...,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
  } satisfies SetPathPartTagsRequest;

  try {
    const data = await api.setPathPartTags(body);
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
| **pathPartId** | `string` |  | [Defaults to `undefined`] |
| **bulkTagRequest** | [BulkTagRequest](BulkTagRequest.md) |  | |
| **authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ksUat** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**PathPartTagsResponse**](PathPartTagsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

