# EmailThreadsApi

All URIs are relative to *http://localhost:8000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createEmailThread**](EmailThreadsApi.md#createemailthreadoperation) | **POST** /v1/email-threads | Create Email Thread Handler |
| [**deleteEmailThread**](EmailThreadsApi.md#deleteemailthread) | **DELETE** /v1/email-threads/{thread_id} | Delete Email Thread Handler |
| [**getEmailThread**](EmailThreadsApi.md#getemailthread) | **GET** /v1/email-threads/{thread_id} | Get Email Thread Handler |
| [**listEmailThreads**](EmailThreadsApi.md#listemailthreads) | **GET** /v1/email-threads | List Email Threads Handler |
| [**updateEmailThread**](EmailThreadsApi.md#updateemailthreadoperation) | **PATCH** /v1/email-threads/{thread_id} | Update Email Thread Handler |



## createEmailThread

> EmailThreadResponse createEmailThread(createEmailThreadRequest)

Create Email Thread Handler

Ensure a conversation exists under a parent the caller can write to.  Find-or-create, not create: 201 when this call made it, 200 when it was already there. A conversation is identified by the id its provider gives every message (Graph\&#39;s &#x60;&#x60;conversationId&#x60;&#x60;, Gmail\&#39;s &#x60;&#x60;threadId&#x60;&#x60;), so the caller syncing a mailbox does not know, and cannot cheaply find out, whether the conversation a new message belongs to was stored on an earlier run. Creating unconditionally would add a fresh thread on every sync that brought one more reply.  The id is only matched against conversations under the same parent, so a conversation two connected mailboxes are both on keeps one thread per mailbox: permissions follow the connector\&#39;s path, and merging the two would hang mail one side cannot read under a thread the other side can.

### Example

```ts
import {
  Configuration,
  EmailThreadsApi,
} from '@knowledge-stack/ksapi';
import type { CreateEmailThreadOperationRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EmailThreadsApi(config);

  const body = {
    // CreateEmailThreadRequest
    createEmailThreadRequest: ...,
  } satisfies CreateEmailThreadOperationRequest;

  try {
    const data = await api.createEmailThread(body);
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
| **createEmailThreadRequest** | [CreateEmailThreadRequest](CreateEmailThreadRequest.md) |  | |

### Return type

[**EmailThreadResponse**](EmailThreadResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Successful Response |  -  |
| **200** | The conversation was already there; it is returned unchanged. |  -  |
| **422** | Validation Error |  -  |
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteEmailThread

> deleteEmailThread(threadId)

Delete Email Thread Handler

Move a conversation and its messages to trash. Not exposed on the FE.  Returns 409 for a conversation synced from a mailbox; the path system refuses to trash a system-managed subtree anyway, and this says so first.

### Example

```ts
import {
  Configuration,
  EmailThreadsApi,
} from '@knowledge-stack/ksapi';
import type { DeleteEmailThreadRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EmailThreadsApi(config);

  const body = {
    // string
    threadId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteEmailThreadRequest;

  try {
    const data = await api.deleteEmailThread(body);
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


## getEmailThread

> EmailThreadResponse getEmailThread(threadId)

Get Email Thread Handler

Get a single conversation.

### Example

```ts
import {
  Configuration,
  EmailThreadsApi,
} from '@knowledge-stack/ksapi';
import type { GetEmailThreadRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EmailThreadsApi(config);

  const body = {
    // string
    threadId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetEmailThreadRequest;

  try {
    const data = await api.getEmailThread(body);
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

### Return type

[**EmailThreadResponse**](EmailThreadResponse.md)

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


## listEmailThreads

> PaginatedResponseEmailThreadResponse listEmailThreads(parentPathPartId, sortBy, search, externalSourceFolder, limit, offset, sortDir)

List Email Threads Handler

List a folder\&#39;s conversations, newest first by default.  Each row carries what a collapsed conversation shows — participants, the message count, a paperclip and the latest mail\&#39;s opening line — computed for the whole page by one aggregate. A caller reading those per conversation instead is a request per row, which is what makes a fifty-row page slow.

### Example

```ts
import {
  Configuration,
  EmailThreadsApi,
} from '@knowledge-stack/ksapi';
import type { ListEmailThreadsRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EmailThreadsApi(config);

  const body = {
    // string | Folder whose conversations are listed
    parentPathPartId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // EmailThreadOrder (optional)
    sortBy: ...,
    // string | Title substring (optional)
    search: search_example,
    // string | Keep only conversations holding at least one mail in this folder, by the provider\'s own key (inbox, sentitems). Not a partition: a conversation you replied to has mail in both and shows under either filter (optional)
    externalSourceFolder: externalSourceFolder_example,
    // number | Number of items per page (optional)
    limit: 56,
    // number | Number of items to skip (optional)
    offset: 56,
    // SortDirection | Sort direction (ASC or DESC); overrides the field\'s natural default. Every sort field supports both directions. (optional)
    sortDir: ...,
  } satisfies ListEmailThreadsRequest;

  try {
    const data = await api.listEmailThreads(body);
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
| **parentPathPartId** | `string` | Folder whose conversations are listed | [Defaults to `undefined`] |
| **sortBy** | `EmailThreadOrder` |  | [Optional] [Defaults to `undefined`] [Enum: TITLE, CREATED_AT, LAST_MESSAGE_AT] |
| **search** | `string` | Title substring | [Optional] [Defaults to `undefined`] |
| **externalSourceFolder** | `string` | Keep only conversations holding at least one mail in this folder, by the provider\&#39;s own key (inbox, sentitems). Not a partition: a conversation you replied to has mail in both and shows under either filter | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items per page | [Optional] [Defaults to `20`] |
| **offset** | `number` | Number of items to skip | [Optional] [Defaults to `0`] |
| **sortDir** | `SortDirection` | Sort direction (ASC or DESC); overrides the field\&#39;s natural default. Every sort field supports both directions. | [Optional] [Defaults to `undefined`] [Enum: ASC, DESC] |

### Return type

[**PaginatedResponseEmailThreadResponse**](PaginatedResponseEmailThreadResponse.md)

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


## updateEmailThread

> EmailThreadResponse updateEmailThread(threadId, updateEmailThreadRequest)

Update Email Thread Handler

Update a conversation\&#39;s title. Not exposed on the FE.  A conversation synced from a mailbox is system-managed and returns 409: its title is the subject the source gave it, and an edit would make the stored record disagree with the mail it came from.

### Example

```ts
import {
  Configuration,
  EmailThreadsApi,
} from '@knowledge-stack/ksapi';
import type { UpdateEmailThreadOperationRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EmailThreadsApi(config);

  const body = {
    // string
    threadId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateEmailThreadRequest
    updateEmailThreadRequest: ...,
  } satisfies UpdateEmailThreadOperationRequest;

  try {
    const data = await api.updateEmailThread(body);
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
| **updateEmailThreadRequest** | [UpdateEmailThreadRequest](UpdateEmailThreadRequest.md) |  | |

### Return type

[**EmailThreadResponse**](EmailThreadResponse.md)

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

