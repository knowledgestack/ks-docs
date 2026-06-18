# SectionsApi

All URIs are relative to *http://localhost:8000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createSection**](SectionsApi.md#createsectionoperation) | **POST** /v1/sections | Create Section Handler |
| [**deleteSection**](SectionsApi.md#deletesection) | **DELETE** /v1/sections/{section_id} | Delete Section Handler |
| [**dissolveSection**](SectionsApi.md#dissolvesection) | **POST** /v1/sections/{section_id}/dissolve | Dissolve Section Handler |
| [**getSection**](SectionsApi.md#getsection) | **GET** /v1/sections/{section_id} | Get Section Handler |
| [**getSectionsBulk**](SectionsApi.md#getsectionsbulk) | **GET** /v1/sections/bulk | Get Sections Bulk Handler |
| [**updateSection**](SectionsApi.md#updatesectionoperation) | **PATCH** /v1/sections/{section_id} | Update Section Handler |



## createSection

> SectionResponse createSection(createSectionRequest)

Create Section Handler

Create a new section.  The section is created as a child of the specified parent (must be DOCUMENT_VERSION or SECTION). If prev_sibling_path_id is provided, the section is inserted after that sibling; otherwise it is appended to the end of the sibling list.

### Example

```ts
import {
  Configuration,
  SectionsApi,
} from '@knowledge-stack/ksapi';
import type { CreateSectionOperationRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SectionsApi(config);

  const body = {
    // CreateSectionRequest
    createSectionRequest: ...,
  } satisfies CreateSectionOperationRequest;

  try {
    const data = await api.createSection(body);
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
| **createSectionRequest** | [CreateSectionRequest](CreateSectionRequest.md) |  | |

### Return type

[**SectionResponse**](SectionResponse.md)

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


## deleteSection

> deleteSection(sectionId)

Delete Section Handler

Delete a section and all its children.  WARNING: This cascades to all child sections due to parent_id ON DELETE CASCADE.

### Example

```ts
import {
  Configuration,
  SectionsApi,
} from '@knowledge-stack/ksapi';
import type { DeleteSectionRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SectionsApi(config);

  const body = {
    // string
    sectionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteSectionRequest;

  try {
    const data = await api.deleteSection(body);
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
| **sectionId** | `string` |  | [Defaults to `undefined`] |

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


## dissolveSection

> DissolveSectionResponse dissolveSection(sectionId)

Dissolve Section Handler

Dissolve a section: convert it to a text chunk, reparent children, delete the section.  The section\&#39;s name becomes the content of a new TEXT chunk. Any children of the section are reparented to the section\&#39;s parent, preserving order. The section itself is then deleted.

### Example

```ts
import {
  Configuration,
  SectionsApi,
} from '@knowledge-stack/ksapi';
import type { DissolveSectionRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SectionsApi(config);

  const body = {
    // string
    sectionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DissolveSectionRequest;

  try {
    const data = await api.dissolveSection(body);
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
| **sectionId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**DissolveSectionResponse**](DissolveSectionResponse.md)

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


## getSection

> SectionResponse getSection(sectionId)

Get Section Handler

Get a section by its ID.

### Example

```ts
import {
  Configuration,
  SectionsApi,
} from '@knowledge-stack/ksapi';
import type { GetSectionRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SectionsApi(config);

  const body = {
    // string
    sectionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetSectionRequest;

  try {
    const data = await api.getSection(body);
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
| **sectionId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**SectionResponse**](SectionResponse.md)

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


## getSectionsBulk

> Array&lt;SectionResponse&gt; getSectionsBulk(sectionIds)

Get Sections Bulk Handler

Batch-fetch sections by ID.  Returns sections with system_metadata. Non-existent IDs are silently skipped. Limited to 200 IDs per call.

### Example

```ts
import {
  Configuration,
  SectionsApi,
} from '@knowledge-stack/ksapi';
import type { GetSectionsBulkRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SectionsApi(config);

  const body = {
    // Array<string> | Section IDs to fetch (max 200) (optional)
    sectionIds: ...,
  } satisfies GetSectionsBulkRequest;

  try {
    const data = await api.getSectionsBulk(body);
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
| **sectionIds** | `Array<string>` | Section IDs to fetch (max 200) | [Optional] |

### Return type

[**Array&lt;SectionResponse&gt;**](SectionResponse.md)

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


## updateSection

> SectionResponse updateSection(sectionId, updateSectionRequest)

Update Section Handler

Update a section.  Can update name, page_number, and/or reorder within siblings. To move: provide prev_sibling_path_id OR move_to_head (not both). Moving is only allowed within the same document version.  Note: Section names can contain any characters. The corresponding path_part.name will be automatically normalized by a database trigger.

### Example

```ts
import {
  Configuration,
  SectionsApi,
} from '@knowledge-stack/ksapi';
import type { UpdateSectionOperationRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SectionsApi(config);

  const body = {
    // string
    sectionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateSectionRequest
    updateSectionRequest: ...,
  } satisfies UpdateSectionOperationRequest;

  try {
    const data = await api.updateSection(body);
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
| **sectionId** | `string` |  | [Defaults to `undefined`] |
| **updateSectionRequest** | [UpdateSectionRequest](UpdateSectionRequest.md) |  | |

### Return type

[**SectionResponse**](SectionResponse.md)

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

