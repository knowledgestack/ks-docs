# ThreadsApi

All URIs are relative to *http://localhost:8000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createThread**](ThreadsApi.md#createthreadoperation) | **POST** /v1/threads | Create Thread Handler |
| [**deleteThread**](ThreadsApi.md#deletethread) | **DELETE** /v1/threads/{thread_id} | Delete Thread Handler |
| [**getThread**](ThreadsApi.md#getthread) | **GET** /v1/threads/{thread_id} | Get Thread Handler |
| [**listThreads**](ThreadsApi.md#listthreads) | **GET** /v1/threads | List Threads Handler |
| [**sendUserMessage**](ThreadsApi.md#sendusermessage) | **POST** /v1/threads/{thread_id}/user_message | Send User Message Handler |
| [**streamThread**](ThreadsApi.md#streamthread) | **GET** /v1/threads/{thread_id}/stream | Stream Thread Handler |
| [**updateThread**](ThreadsApi.md#updatethreadoperation) | **PATCH** /v1/threads/{thread_id} | Update Thread Handler |



## createThread

> ThreadResponse createThread(createThreadRequest, authorization, ksUat)

Create Thread Handler

Create a new thread.  If parent_path_part_id is omitted, the thread is created under the user\&#39;s /users/{user_id}/threads/ folder (auto-provisioned if needed).

### Example

```ts
import {
  Configuration,
  ThreadsApi,
} from '@knowledge-stack/ksapi';
import type { CreateThreadOperationRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const api = new ThreadsApi();

  const body = {
    // CreateThreadRequest
    createThreadRequest: ...,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
  } satisfies CreateThreadOperationRequest;

  try {
    const data = await api.createThread(body);
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
| **createThreadRequest** | [CreateThreadRequest](CreateThreadRequest.md) |  | |
| **authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ksUat** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**ThreadResponse**](ThreadResponse.md)

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


## deleteThread

> deleteThread(threadId, authorization, ksUat)

Delete Thread Handler

Delete a thread.  Authorization: only conversation threads belonging to the current user (under /users/{user_id}/threads/) can be deleted. Asset threads (attached to documents/sections) are never deletable via this endpoint.

### Example

```ts
import {
  Configuration,
  ThreadsApi,
} from '@knowledge-stack/ksapi';
import type { DeleteThreadRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const api = new ThreadsApi();

  const body = {
    // string
    threadId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
  } satisfies DeleteThreadRequest;

  try {
    const data = await api.deleteThread(body);
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
| **authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ksUat** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getThread

> ThreadResponse getThread(threadId, authorization, ksUat)

Get Thread Handler

Get a thread by its thread ID.

### Example

```ts
import {
  Configuration,
  ThreadsApi,
} from '@knowledge-stack/ksapi';
import type { GetThreadRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const api = new ThreadsApi();

  const body = {
    // string
    threadId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
  } satisfies GetThreadRequest;

  try {
    const data = await api.getThread(body);
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
| **authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ksUat** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**ThreadResponse**](ThreadResponse.md)

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


## listThreads

> PaginatedResponseThreadResponse listThreads(parentPathPartId, limit, offset, authorization, ksUat)

List Threads Handler

List threads under a parent path_part.  When parent_path_part_id is omitted, lists the authenticated user\&#39;s conversation threads from /users/{user_id}/threads/.

### Example

```ts
import {
  Configuration,
  ThreadsApi,
} from '@knowledge-stack/ksapi';
import type { ListThreadsRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const api = new ThreadsApi();

  const body = {
    // string | Parent PathPart ID. Omit to list user\'s conversation threads. (optional)
    parentPathPartId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // number | Number of items per page (optional)
    limit: 56,
    // number | Number of items to skip (optional)
    offset: 56,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
  } satisfies ListThreadsRequest;

  try {
    const data = await api.listThreads(body);
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
| **parentPathPartId** | `string` | Parent PathPart ID. Omit to list user\&#39;s conversation threads. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items per page | [Optional] [Defaults to `20`] |
| **offset** | `number` | Number of items to skip | [Optional] [Defaults to `0`] |
| **authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ksUat** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**PaginatedResponseThreadResponse**](PaginatedResponseThreadResponse.md)

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


## sendUserMessage

> UserMessageResponse sendUserMessage(threadId, userMessageRequest, authorization, ksUat)

Send User Message Handler

Send a user message and trigger agent generation. Returns immediately with a workflow_id.  Connect to GET /{thread_id}/stream (SSE) before or after calling this endpoint to receive the streamed output.  Quota: consumes one MESSAGE inside the same transaction that creates the user-message row and starts the workflow. Any failure on the consume, the workflow start, or anywhere in between rolls back the whole transaction via the session context manager — message insert, quota consume, and downstream side effects are all-or-nothing. No explicit refund path is needed because nothing commits until the workflow has been durably enqueued. Workflow failures observed asynchronously (after enqueue) do **not** refund — the consume stands, matching agent-ask\&#39;s v1 simplification.

### Example

```ts
import {
  Configuration,
  ThreadsApi,
} from '@knowledge-stack/ksapi';
import type { SendUserMessageRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const api = new ThreadsApi();

  const body = {
    // string
    threadId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UserMessageRequest
    userMessageRequest: ...,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
  } satisfies SendUserMessageRequest;

  try {
    const data = await api.sendUserMessage(body);
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
| **userMessageRequest** | [UserMessageRequest](UserMessageRequest.md) |  | |
| **authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ksUat** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**UserMessageResponse**](UserMessageResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## streamThread

> streamThread(threadId, lastMessageId, lastEntryId, authorization, ksUat)

Stream Thread Handler

SSE endpoint for streaming thread messages.  Opens a server-sent event stream for the given thread. Optionally replays missed entries if last_message_id and last_entry_id are provided.

### Example

```ts
import {
  Configuration,
  ThreadsApi,
} from '@knowledge-stack/ksapi';
import type { StreamThreadRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const api = new ThreadsApi();

  const body = {
    // string
    threadId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string (optional)
    lastMessageId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string (optional)
    lastEntryId: lastEntryId_example,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
  } satisfies StreamThreadRequest;

  try {
    const data = await api.streamThread(body);
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
| **lastMessageId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **lastEntryId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ksUat** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

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


## updateThread

> ThreadResponse updateThread(threadId, updateThreadRequest, authorization, ksUat)

Update Thread Handler

Update a thread\&#39;s title and/or parent_thread_id.

### Example

```ts
import {
  Configuration,
  ThreadsApi,
} from '@knowledge-stack/ksapi';
import type { UpdateThreadOperationRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const api = new ThreadsApi();

  const body = {
    // string
    threadId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateThreadRequest
    updateThreadRequest: ...,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
  } satisfies UpdateThreadOperationRequest;

  try {
    const data = await api.updateThread(body);
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
| **updateThreadRequest** | [UpdateThreadRequest](UpdateThreadRequest.md) |  | |
| **authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **ksUat** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**ThreadResponse**](ThreadResponse.md)

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

