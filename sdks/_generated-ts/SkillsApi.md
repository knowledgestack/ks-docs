# SkillsApi

All URIs are relative to *http://localhost:8000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**activateSkillVersion**](SkillsApi.md#activateskillversionoperation) | **POST** /v1/skills/{skill_id}/versions/{version_id}/activate | Activate Skill Version Handler |
| [**checkinSkill**](SkillsApi.md#checkinskill) | **POST** /v1/skills/{skill_id}/checkin | Checkin Skill Handler |
| [**checkoutSkill**](SkillsApi.md#checkoutskill) | **POST** /v1/skills/{skill_id}/checkout | Checkout Skill Handler |
| [**createSkill**](SkillsApi.md#createskilloperation) | **POST** /v1/skills | Create Skill Handler |
| [**deleteSkill**](SkillsApi.md#deleteskill) | **DELETE** /v1/skills/{skill_id} | Delete Skill Handler |
| [**discardSkillDraft**](SkillsApi.md#discardskilldraft) | **POST** /v1/skills/{skill_id}/discard-draft | Discard Skill Draft Handler |
| [**exportSkill**](SkillsApi.md#exportskill) | **GET** /v1/skills/{skill_id}/export | Export Skill Handler |
| [**getSkill**](SkillsApi.md#getskill) | **GET** /v1/skills/{skill_id} | Get Skill Handler |
| [**importSkill**](SkillsApi.md#importskill) | **POST** /v1/skills/import | Import Skill Handler |
| [**listSkillVersions**](SkillsApi.md#listskillversions) | **GET** /v1/skills/{skill_id}/versions | List Skill Versions Handler |
| [**listSkills**](SkillsApi.md#listskills) | **GET** /v1/skills | List Skills Handler |
| [**publishSkillVersion**](SkillsApi.md#publishskillversion) | **POST** /v1/skills/{skill_id}/versions | Publish Skill Version Handler |
| [**searchSkills**](SkillsApi.md#searchskillsoperation) | **POST** /v1/skills/search | Search Skills Handler |
| [**updateSkill**](SkillsApi.md#updateskilloperation) | **PATCH** /v1/skills/{skill_id} | Update Skill Handler |



## activateSkillVersion

> SkillResponse activateSkillVersion(skillId, versionId, activateSkillVersionRequest)

Activate Skill Version Handler

Activate a published version, restoring the working copy to it.  Requires a held checkout (it overwrites the working copy).

### Example

```ts
import {
  Configuration,
  SkillsApi,
} from '@knowledge-stack/ksapi';
import type { ActivateSkillVersionOperationRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SkillsApi(config);

  const body = {
    // string
    skillId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    versionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // ActivateSkillVersionRequest
    activateSkillVersionRequest: ...,
  } satisfies ActivateSkillVersionOperationRequest;

  try {
    const data = await api.activateSkillVersion(body);
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
| **skillId** | `string` |  | [Defaults to `undefined`] |
| **versionId** | `string` |  | [Defaults to `undefined`] |
| **activateSkillVersionRequest** | [ActivateSkillVersionRequest](ActivateSkillVersionRequest.md) |  | |

### Return type

[**SkillResponse**](SkillResponse.md)

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


## checkinSkill

> checkinSkill(skillId)

Checkin Skill Handler

Release the skill\&#39;s checkout so another author can edit it.

### Example

```ts
import {
  Configuration,
  SkillsApi,
} from '@knowledge-stack/ksapi';
import type { CheckinSkillRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SkillsApi(config);

  const body = {
    // string
    skillId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies CheckinSkillRequest;

  try {
    const data = await api.checkinSkill(body);
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
| **skillId** | `string` |  | [Defaults to `undefined`] |

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


## checkoutSkill

> SkillResponse checkoutSkill(skillId)

Checkout Skill Handler

Check out the whole skill for editing (409 if another user holds it).  Locks the skill via its &#x60;&#x60;SKILL.md&#x60;&#x60; document; hold it to edit any file (&#x60;&#x60;SKILL.md&#x60;&#x60; or scripts) and release it with &#x60;&#x60;checkin&#x60;&#x60;.

### Example

```ts
import {
  Configuration,
  SkillsApi,
} from '@knowledge-stack/ksapi';
import type { CheckoutSkillRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SkillsApi(config);

  const body = {
    // string
    skillId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies CheckoutSkillRequest;

  try {
    const data = await api.checkoutSkill(body);
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
| **skillId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**SkillResponse**](SkillResponse.md)

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


## createSkill

> SkillResponse createSkill(createSkillRequest)

Create Skill Handler

Author a skill (JSON) under /agents/skills; requires can_write there.

### Example

```ts
import {
  Configuration,
  SkillsApi,
} from '@knowledge-stack/ksapi';
import type { CreateSkillOperationRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SkillsApi(config);

  const body = {
    // CreateSkillRequest
    createSkillRequest: ...,
  } satisfies CreateSkillOperationRequest;

  try {
    const data = await api.createSkill(body);
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
| **createSkillRequest** | [CreateSkillRequest](CreateSkillRequest.md) |  | |

### Return type

[**SkillResponse**](SkillResponse.md)

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


## deleteSkill

> deleteSkill(skillId)

Delete Skill Handler

Soft-delete a skill; requires can_delete; 409 if another holds checkout.

### Example

```ts
import {
  Configuration,
  SkillsApi,
} from '@knowledge-stack/ksapi';
import type { DeleteSkillRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SkillsApi(config);

  const body = {
    // string
    skillId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteSkillRequest;

  try {
    const data = await api.deleteSkill(body);
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
| **skillId** | `string` |  | [Defaults to `undefined`] |

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


## discardSkillDraft

> SkillResponse discardSkillDraft(skillId)

Discard Skill Draft Handler

Discard unpublished edits: restore the working copy to the active version.  Requires a held checkout (it overwrites the working copy).

### Example

```ts
import {
  Configuration,
  SkillsApi,
} from '@knowledge-stack/ksapi';
import type { DiscardSkillDraftRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SkillsApi(config);

  const body = {
    // string
    skillId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DiscardSkillDraftRequest;

  try {
    const data = await api.discardSkillDraft(body);
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
| **skillId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**SkillResponse**](SkillResponse.md)

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


## exportSkill

> any exportSkill(skillId)

Export Skill Handler

Download the active published version as a self-contained ZIP for sharing.

### Example

```ts
import {
  Configuration,
  SkillsApi,
} from '@knowledge-stack/ksapi';
import type { ExportSkillRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SkillsApi(config);

  const body = {
    // string
    skillId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies ExportSkillRequest;

  try {
    const data = await api.exportSkill(body);
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
| **skillId** | `string` |  | [Defaults to `undefined`] |

### Return type

**any**

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


## getSkill

> SkillResponse getSkill(skillId)

Get Skill Handler

Skill detail: SKILL.md, scripts, has_unpublished_changes, permissions.

### Example

```ts
import {
  Configuration,
  SkillsApi,
} from '@knowledge-stack/ksapi';
import type { GetSkillRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SkillsApi(config);

  const body = {
    // string
    skillId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetSkillRequest;

  try {
    const data = await api.getSkill(body);
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
| **skillId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**SkillResponse**](SkillResponse.md)

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


## importSkill

> SkillResponse importSkill(file)

Import Skill Handler

Create a skill by importing a redistributable ZIP (works across tenants).

### Example

```ts
import {
  Configuration,
  SkillsApi,
} from '@knowledge-stack/ksapi';
import type { ImportSkillRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SkillsApi(config);

  const body = {
    // Blob
    file: BINARY_DATA_HERE,
  } satisfies ImportSkillRequest;

  try {
    const data = await api.importSkill(body);
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
| **file** | `Blob` |  | [Defaults to `undefined`] |

### Return type

[**SkillResponse**](SkillResponse.md)

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


## listSkillVersions

> Array&lt;SkillVersionResponse&gt; listSkillVersions(skillId)

List Skill Versions Handler

List a skill\&#39;s published versions, newest first.

### Example

```ts
import {
  Configuration,
  SkillsApi,
} from '@knowledge-stack/ksapi';
import type { ListSkillVersionsRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SkillsApi(config);

  const body = {
    // string
    skillId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies ListSkillVersionsRequest;

  try {
    const data = await api.listSkillVersions(body);
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
| **skillId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**Array&lt;SkillVersionResponse&gt;**](SkillVersionResponse.md)

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


## listSkills

> PaginatedResponseSkillResponse listSkills(sortBy, search, limit, offset, sortDir)

List Skills Handler

List readable skills: paginated, sortable both ways, name-searchable.

### Example

```ts
import {
  Configuration,
  SkillsApi,
} from '@knowledge-stack/ksapi';
import type { ListSkillsRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SkillsApi(config);

  const body = {
    // SkillOrder | Field to sort skills by (default: CREATED_AT) (optional)
    sortBy: ...,
    // string | Case-insensitive skill-name substring filter (search bar) (optional)
    search: search_example,
    // number | Number of items per page (optional)
    limit: 56,
    // number | Number of items to skip (optional)
    offset: 56,
    // SortDirection | Sort direction (ASC or DESC); overrides the field\'s natural default. Every sort field supports both directions. (optional)
    sortDir: ...,
  } satisfies ListSkillsRequest;

  try {
    const data = await api.listSkills(body);
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
| **sortBy** | `SkillOrder` | Field to sort skills by (default: CREATED_AT) | [Optional] [Defaults to `undefined`] [Enum: NAME, CREATED_AT, UPDATED_AT] |
| **search** | `string` | Case-insensitive skill-name substring filter (search bar) | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items per page | [Optional] [Defaults to `20`] |
| **offset** | `number` | Number of items to skip | [Optional] [Defaults to `0`] |
| **sortDir** | `SortDirection` | Sort direction (ASC or DESC); overrides the field\&#39;s natural default. Every sort field supports both directions. | [Optional] [Defaults to `undefined`] [Enum: ASC, DESC] |

### Return type

[**PaginatedResponseSkillResponse**](PaginatedResponseSkillResponse.md)

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


## publishSkillVersion

> SkillResponse publishSkillVersion(skillId)

Publish Skill Version Handler

Snapshot the working copy into a new immutable version and activate it.  Requires a held checkout on the skill (publishing mutates it), so a second author cannot push a version over the checkout holder\&#39;s in-progress draft.

### Example

```ts
import {
  Configuration,
  SkillsApi,
} from '@knowledge-stack/ksapi';
import type { PublishSkillVersionRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SkillsApi(config);

  const body = {
    // string
    skillId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies PublishSkillVersionRequest;

  try {
    const data = await api.publishSkillVersion(body);
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
| **skillId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**SkillResponse**](SkillResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Successful Response |  -  |
| **422** | Validation Error |  -  |
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchSkills

> SearchSkillsResponse searchSkills(searchSkillsRequest)

Search Skills Handler

Find skills by the meaning of their routing card (agent discovery).  Dense semantic search over each skill\&#39;s &#x60;&#x60;name + description&#x60;&#x60; card, scoped to the tenant. Fail-closed: hits are re-loaded tenant-scoped from Postgres (the authority — a mis-scoped Qdrant hit can\&#39;t leak another tenant\&#39;s skill) and any the caller cannot read are dropped.

### Example

```ts
import {
  Configuration,
  SkillsApi,
} from '@knowledge-stack/ksapi';
import type { SearchSkillsOperationRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SkillsApi(config);

  const body = {
    // SearchSkillsRequest
    searchSkillsRequest: ...,
  } satisfies SearchSkillsOperationRequest;

  try {
    const data = await api.searchSkills(body);
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
| **searchSkillsRequest** | [SearchSkillsRequest](SearchSkillsRequest.md) |  | |

### Return type

[**SearchSkillsResponse**](SearchSkillsResponse.md)

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


## updateSkill

> SkillResponse updateSkill(skillId, updateSkillRequest)

Update Skill Handler

Edit the working copy in place; requires can_write + a held checkout.

### Example

```ts
import {
  Configuration,
  SkillsApi,
} from '@knowledge-stack/ksapi';
import type { UpdateSkillOperationRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SkillsApi(config);

  const body = {
    // string
    skillId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateSkillRequest
    updateSkillRequest: ...,
  } satisfies UpdateSkillOperationRequest;

  try {
    const data = await api.updateSkill(body);
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
| **skillId** | `string` |  | [Defaults to `undefined`] |
| **updateSkillRequest** | [UpdateSkillRequest](UpdateSkillRequest.md) |  | |

### Return type

[**SkillResponse**](SkillResponse.md)

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

