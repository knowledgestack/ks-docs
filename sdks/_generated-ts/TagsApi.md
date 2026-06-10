# TagsApi

All URIs are relative to *http://localhost:8000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createTag**](TagsApi.md#createtagoperation) | **POST** /v1/tags | Create Tag Handler |
| [**deleteTag**](TagsApi.md#deletetag) | **DELETE** /v1/tags/{tag_id} | Delete Tag Handler |
| [**getTag**](TagsApi.md#gettag) | **GET** /v1/tags/{tag_id} | Get Tag Handler |
| [**listTags**](TagsApi.md#listtags) | **GET** /v1/tags | List Tags Handler |
| [**updateTag**](TagsApi.md#updatetagoperation) | **PATCH** /v1/tags/{tag_id} | Update Tag Handler |



## createTag

> TagResponse createTag(createTagRequest)

Create Tag Handler

Create a new tag for the current tenant. Requires ADMIN or OWNER role.

### Example

```ts
import {
  Configuration,
  TagsApi,
} from '@knowledge-stack/ksapi';
import type { CreateTagOperationRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TagsApi(config);

  const body = {
    // CreateTagRequest
    createTagRequest: ...,
  } satisfies CreateTagOperationRequest;

  try {
    const data = await api.createTag(body);
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
| **createTagRequest** | [CreateTagRequest](CreateTagRequest.md) |  | |

### Return type

[**TagResponse**](TagResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteTag

> deleteTag(tagId)

Delete Tag Handler

Delete a tag and all its path_part associations. Requires ADMIN or OWNER role.

### Example

```ts
import {
  Configuration,
  TagsApi,
} from '@knowledge-stack/ksapi';
import type { DeleteTagRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TagsApi(config);

  const body = {
    // string
    tagId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteTagRequest;

  try {
    const data = await api.deleteTag(body);
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
| **tagId** | `string` |  | [Defaults to `undefined`] |

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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTag

> TagResponse getTag(tagId)

Get Tag Handler

Get a tag by its ID.

### Example

```ts
import {
  Configuration,
  TagsApi,
} from '@knowledge-stack/ksapi';
import type { GetTagRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TagsApi(config);

  const body = {
    // string
    tagId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetTagRequest;

  try {
    const data = await api.getTag(body);
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
| **tagId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**TagResponse**](TagResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listTags

> PaginatedResponseTagResponse listTags(limit, offset)

List Tags Handler

List all tags for the current tenant.

### Example

```ts
import {
  Configuration,
  TagsApi,
} from '@knowledge-stack/ksapi';
import type { ListTagsRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TagsApi(config);

  const body = {
    // number | Number of items per page (optional)
    limit: 56,
    // number | Number of items to skip (optional)
    offset: 56,
  } satisfies ListTagsRequest;

  try {
    const data = await api.listTags(body);
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

[**PaginatedResponseTagResponse**](PaginatedResponseTagResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateTag

> TagResponse updateTag(tagId, updateTagRequest)

Update Tag Handler

Update a tag (name, color, and/or description). Requires ADMIN or OWNER role.

### Example

```ts
import {
  Configuration,
  TagsApi,
} from '@knowledge-stack/ksapi';
import type { UpdateTagOperationRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TagsApi(config);

  const body = {
    // string
    tagId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateTagRequest
    updateTagRequest: ...,
  } satisfies UpdateTagOperationRequest;

  try {
    const data = await api.updateTag(body);
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
| **tagId** | `string` |  | [Defaults to `undefined`] |
| **updateTagRequest** | [UpdateTagRequest](UpdateTagRequest.md) |  | |

### Return type

[**TagResponse**](TagResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

