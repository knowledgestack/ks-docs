# ThreadMessagesApi

All URIs are relative to *http://localhost:8000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createThreadMessage**](ThreadMessagesApi.md#createthreadmessageoperation) | **POST** /v1/threads/{thread_id}/messages | Create Thread Message Handler |
| [**getThreadMessage**](ThreadMessagesApi.md#getthreadmessage) | **GET** /v1/threads/{thread_id}/messages/{message_id} | Get Thread Message Handler |
| [**listThreadMessages**](ThreadMessagesApi.md#listthreadmessages) | **GET** /v1/threads/{thread_id}/messages | List Thread Messages Handler |



## createThreadMessage

> ThreadMessageResponse createThreadMessage(threadId, createThreadMessageRequest, authorization, ksUat)

Create Thread Message Handler

Create a new message in a thread.

### Example

```ts
import {
  Configuration,
  ThreadMessagesApi,
} from '@knowledge-stack/ksapi';
import type { CreateThreadMessageOperationRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const api = new ThreadMessagesApi();

  const body = {
    // string
    threadId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // CreateThreadMessageRequest
    createThreadMessageRequest: ...,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
  } satisfies CreateThreadMessageOperationRequest;

  try {
    const data = await api.createThreadMessage(body);
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
| **threadId** | `string` |  | [Defaults to `undefined`] |
| **createThreadMessageRequest** | [CreateThreadMessageRequest](CreateThreadMessageRequest.md) |  | |
| **authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ksUat** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**ThreadMessageResponse**](ThreadMessageResponse.md)

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


## getThreadMessage

> ThreadMessageResponse getThreadMessage(threadId, messageId, withDetails, authorization, ksUat)

Get Thread Message Handler

Get a specific message by its ID.  Use &#x60;with_details&#x3D;false&#x60; to exclude execution step data and reduce payload size.

### Example

```ts
import {
  Configuration,
  ThreadMessagesApi,
} from '@knowledge-stack/ksapi';
import type { GetThreadMessageRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const api = new ThreadMessagesApi();

  const body = {
    // string
    threadId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    messageId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // boolean | Include execution steps in response (default true) (optional)
    withDetails: true,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
  } satisfies GetThreadMessageRequest;

  try {
    const data = await api.getThreadMessage(body);
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
| **threadId** | `string` |  | [Defaults to `undefined`] |
| **messageId** | `string` |  | [Defaults to `undefined`] |
| **withDetails** | `boolean` | Include execution steps in response (default true) | [Optional] [Defaults to `true`] |
| **authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ksUat** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**ThreadMessageResponse**](ThreadMessageResponse.md)

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


## listThreadMessages

> PaginatedResponseThreadMessageResponse listThreadMessages(threadId, before, withDetails, limit, offset, authorization, ksUat)

List Thread Messages Handler

List messages in a thread, ordered by created_at descending.  Supports cursor-based pagination via &#x60;before&#x60; parameter and standard offset-based pagination via &#x60;limit&#x60;/&#x60;offset&#x60;.  Use &#x60;with_details&#x3D;false&#x60; to exclude execution step data and reduce payload size.

### Example

```ts
import {
  Configuration,
  ThreadMessagesApi,
} from '@knowledge-stack/ksapi';
import type { ListThreadMessagesRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const api = new ThreadMessagesApi();

  const body = {
    // string
    threadId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // Date | Cursor for keyset pagination: only return messages with created_at < this value (optional)
    before: 2013-10-20T19:20:30+01:00,
    // boolean | Include execution steps in response (default true) (optional)
    withDetails: true,
    // number | Number of items per page (optional)
    limit: 56,
    // number | Number of items to skip (optional)
    offset: 56,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
  } satisfies ListThreadMessagesRequest;

  try {
    const data = await api.listThreadMessages(body);
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
| **threadId** | `string` |  | [Defaults to `undefined`] |
| **before** | `Date` | Cursor for keyset pagination: only return messages with created_at &lt; this value | [Optional] [Defaults to `undefined`] |
| **withDetails** | `boolean` | Include execution steps in response (default true) | [Optional] [Defaults to `true`] |
| **limit** | `number` | Number of items per page | [Optional] [Defaults to `20`] |
| **offset** | `number` | Number of items to skip | [Optional] [Defaults to `0`] |
| **authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ksUat** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**PaginatedResponseThreadMessageResponse**](PaginatedResponseThreadMessageResponse.md)

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

