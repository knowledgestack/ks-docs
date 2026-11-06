# EmailMessagesApi

All URIs are relative to *http://localhost:8000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createEmailMessage**](EmailMessagesApi.md#createemailmessage) | **POST** /v1/email-messages | Create Email Message Handler |
| [**deleteEmailMessage**](EmailMessagesApi.md#deleteemailmessage) | **DELETE** /v1/email-messages/{message_id} | Delete Email Message Handler |
| [**getEmailMessage**](EmailMessagesApi.md#getemailmessage) | **GET** /v1/email-messages/{message_id} | Get Email Message Handler |
| [**listEmailMessages**](EmailMessagesApi.md#listemailmessages) | **GET** /v1/email-messages | List Email Messages Handler |
| [**updateEmailMessage**](EmailMessagesApi.md#updateemailmessageoperation) | **PATCH** /v1/email-messages/{message_id} | Update Email Message Handler |



## createEmailMessage

> CreateEmailMessageResponse createEmailMessage(parentPathPartId, externalMessageId, sentAt, title, sender, externalSourceFolder, recipients, ccRecipients, bccRecipients, content, attachments)

Create Email Message Handler

### Example

```ts
import {
  Configuration,
  EmailMessagesApi,
} from '@knowledge-stack/ksapi';
import type { CreateEmailMessageRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EmailMessagesApi(config);

  const body = {
    // string
    parentPathPartId: '38400000-8cf0-11bd-b23e-10b96e4ef00d',
    // string | The id the source gives this message — Graph\\\'s immutable id, Gmail\\\'s message id. Not the RFC 5322 Message-ID header. Unique per tenant: a re-POST is refused with 409.
    externalMessageId: 'externalMessageId_example',
    // Date | When the source says the mail was sent
    sentAt: 2013-10-20T19:20:30+01:00,
    // string
    title: 'title_example',
    // string | The header value, stored verbatim — display name and all, exactly as the source wrote it: ``\\\"张三 <zhang@example.cn>\\\"``. Not parsed, not validated.
    sender: 'sender_example',
    // string | The source folder this mail was read from, as the provider\\\'s well-known key, for callers that sync a mailbox folder by folder. Omit it for a mail that has no such origin. (optional)
    externalSourceFolder: 'externalSourceFolder_example',
    // Array<string> | Header values, stored verbatim. One entry may hold several comma-separated addresses, which is what a mail header looks like and what a generated SDK sends for an array form field. (optional)
    recipients: ...,
    // Array<string> | Header values, stored verbatim. One entry may hold several comma-separated addresses, which is what a mail header looks like and what a generated SDK sends for an array form field. (optional)
    ccRecipients: ...,
    // Array<string> | Header values, stored verbatim. One entry may hold several comma-separated addresses, which is what a mail header looks like and what a generated SDK sends for an array form field. (optional)
    bccRecipients: ...,
    // string | The body; stored as this message\\\'s CHUNK child, not on the row. Omit it for a mail that has none — no chunk is written, and the detail response returns an empty string. (optional)
    content: 'content_example',
    // Array<Blob> | Files sent with the mail. Each becomes a Document under this message and is ingested on its own; one that cannot be stored is reported in ``attachment_errors`` and does not fail the message. (optional)
    attachments: [new Blob(['example file content'], { type: 'application/octet-stream' })],
  } satisfies CreateEmailMessageRequest;

  try {
    const data = await api.createEmailMessage(body);
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
| **parentPathPartId** | `string` |  | [Defaults to `undefined`] |
| **externalMessageId** | `string` | The id the source gives this message — Graph\\\&#39;s immutable id, Gmail\\\&#39;s message id. Not the RFC 5322 Message-ID header. Unique per tenant: a re-POST is refused with 409. | [Defaults to `undefined`] |
| **sentAt** | `Date` | When the source says the mail was sent | [Defaults to `undefined`] |
| **title** | `string` |  | [Defaults to `undefined`] |
| **sender** | `string` | The header value, stored verbatim — display name and all, exactly as the source wrote it: &#x60;&#x60;\\\&quot;张三 &lt;zhang@example.cn&gt;\\\&quot;&#x60;&#x60;. Not parsed, not validated. | [Defaults to `undefined`] |
| **externalSourceFolder** | `string` | The source folder this mail was read from, as the provider\\\&#39;s well-known key, for callers that sync a mailbox folder by folder. Omit it for a mail that has no such origin. | [Optional] [Defaults to `undefined`] |
| **recipients** | `Array<string>` | Header values, stored verbatim. One entry may hold several comma-separated addresses, which is what a mail header looks like and what a generated SDK sends for an array form field. | [Optional] |
| **ccRecipients** | `Array<string>` | Header values, stored verbatim. One entry may hold several comma-separated addresses, which is what a mail header looks like and what a generated SDK sends for an array form field. | [Optional] |
| **bccRecipients** | `Array<string>` | Header values, stored verbatim. One entry may hold several comma-separated addresses, which is what a mail header looks like and what a generated SDK sends for an array form field. | [Optional] |
| **content** | `string` | The body; stored as this message\\\&#39;s CHUNK child, not on the row. Omit it for a mail that has none — no chunk is written, and the detail response returns an empty string. | [Optional] [Defaults to `undefined`] |
| **attachments** | `Array<Blob>` | Files sent with the mail. Each becomes a Document under this message and is ingested on its own; one that cannot be stored is reported in &#x60;&#x60;attachment_errors&#x60;&#x60; and does not fail the message. | [Optional] |

### Return type

[**CreateEmailMessageResponse**](CreateEmailMessageResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Successful Response |  -  |
| **200** | The mail was already there and this call completed it, or it was in the trash and this call restored it. |  -  |
| **422** | Validation Error |  -  |
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteEmailMessage

> deleteEmailMessage(messageId)

Delete Email Message Handler

### Example

```ts
import {
  Configuration,
  EmailMessagesApi,
} from '@knowledge-stack/ksapi';
import type { DeleteEmailMessageRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EmailMessagesApi(config);

  const body = {
    // string
    messageId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteEmailMessageRequest;

  try {
    const data = await api.deleteEmailMessage(body);
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
| **messageId** | `string` |  | [Defaults to `undefined`] |

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


## getEmailMessage

> EmailMessageDetailResponse getEmailMessage(messageId)

Get Email Message Handler

### Example

```ts
import {
  Configuration,
  EmailMessagesApi,
} from '@knowledge-stack/ksapi';
import type { GetEmailMessageRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EmailMessagesApi(config);

  const body = {
    // string
    messageId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetEmailMessageRequest;

  try {
    const data = await api.getEmailMessage(body);
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
| **messageId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**EmailMessageDetailResponse**](EmailMessageDetailResponse.md)

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


## listEmailMessages

> PaginatedResponseEmailMessageResponse listEmailMessages(parentPathPartId, ancestorPathPartId, sortBy, search, externalSourceFolder, sender, sentAfter, sentBefore, limit, offset, sortDir)

List Email Messages Handler

List mail under one node, or anywhere under one subtree, oldest first.  The metadata filters are matched exactly, in SQL. A chunk\&#39;s text never holds the sender or the send time, so no amount of vector search reaches them; bodies and attachments stay with &#x60;&#x60;POST /v1/chunks/search&#x60;&#x60;, where &#x60;&#x60;hybrid_profile&#x3D;sparse&#x60;&#x60; matches exact tokens and &#x60;&#x60;dense&#x60;&#x60; matches meaning. Scope that search to one mailbox or one folder by passing its path part id as &#x60;&#x60;parent_path_ids&#x60;&#x60;.  Nonempty subject or metadata filters limit every role to readable /shared and personal paths. Empty string filters are inactive. Unfiltered browsing and direct ID reads retain ordinary read access.

### Example

```ts
import {
  Configuration,
  EmailMessagesApi,
} from '@knowledge-stack/ksapi';
import type { ListEmailMessagesRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EmailMessagesApi(config);

  const body = {
    // string | Conversation or folder whose direct messages are listed. Exactly one of this and ``ancestor_path_part_id``. (optional)
    parentPathPartId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | List every message anywhere under this node instead — a mailbox connector, to search one mailbox. Mail sits under a conversation under a folder, so a direct-parent listing cannot reach it. (optional)
    ancestorPathPartId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // EmailMessageOrder (optional)
    sortBy: ...,
    // string | Title substring (optional)
    search: search_example,
    // string | The provider\'s folder key the mail was read from, exactly (``inbox``, ``sentitems``). (optional)
    externalSourceFolder: externalSourceFolder_example,
    // string | Substring of the From header, which is stored verbatim — match on the display name or on the address. (optional)
    sender: sender_example,
    // Date | Sent at or after this instant (the mail\'s own clock) (optional)
    sentAfter: 2013-10-20T19:20:30+01:00,
    // Date | Sent strictly before this instant (optional)
    sentBefore: 2013-10-20T19:20:30+01:00,
    // number | Number of items per page (optional)
    limit: 56,
    // number | Number of items to skip (optional)
    offset: 56,
    // SortDirection | Sort direction (ASC or DESC); overrides the field\'s natural default. Every sort field supports both directions. (optional)
    sortDir: ...,
  } satisfies ListEmailMessagesRequest;

  try {
    const data = await api.listEmailMessages(body);
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
| **parentPathPartId** | `string` | Conversation or folder whose direct messages are listed. Exactly one of this and &#x60;&#x60;ancestor_path_part_id&#x60;&#x60;. | [Optional] [Defaults to `undefined`] |
| **ancestorPathPartId** | `string` | List every message anywhere under this node instead — a mailbox connector, to search one mailbox. Mail sits under a conversation under a folder, so a direct-parent listing cannot reach it. | [Optional] [Defaults to `undefined`] |
| **sortBy** | `EmailMessageOrder` |  | [Optional] [Defaults to `undefined`] [Enum: SENT_AT, TITLE] |
| **search** | `string` | Title substring | [Optional] [Defaults to `undefined`] |
| **externalSourceFolder** | `string` | The provider\&#39;s folder key the mail was read from, exactly (&#x60;&#x60;inbox&#x60;&#x60;, &#x60;&#x60;sentitems&#x60;&#x60;). | [Optional] [Defaults to `undefined`] |
| **sender** | `string` | Substring of the From header, which is stored verbatim — match on the display name or on the address. | [Optional] [Defaults to `undefined`] |
| **sentAfter** | `Date` | Sent at or after this instant (the mail\&#39;s own clock) | [Optional] [Defaults to `undefined`] |
| **sentBefore** | `Date` | Sent strictly before this instant | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items per page | [Optional] [Defaults to `20`] |
| **offset** | `number` | Number of items to skip | [Optional] [Defaults to `0`] |
| **sortDir** | `SortDirection` | Sort direction (ASC or DESC); overrides the field\&#39;s natural default. Every sort field supports both directions. | [Optional] [Defaults to `undefined`] [Enum: ASC, DESC] |

### Return type

[**PaginatedResponseEmailMessageResponse**](PaginatedResponseEmailMessageResponse.md)

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


## updateEmailMessage

> EmailMessageDetailResponse updateEmailMessage(messageId, updateEmailMessageRequest)

Update Email Message Handler

Update a message; a changed body is re-embedded. Not exposed on the FE.  A message synced from a mailbox is system-managed and returns 409. The title, the recipients and the body are what the sender sent, and an agent citing the message afterwards would be quoting something the source never said.

### Example

```ts
import {
  Configuration,
  EmailMessagesApi,
} from '@knowledge-stack/ksapi';
import type { UpdateEmailMessageOperationRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EmailMessagesApi(config);

  const body = {
    // string
    messageId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateEmailMessageRequest
    updateEmailMessageRequest: ...,
  } satisfies UpdateEmailMessageOperationRequest;

  try {
    const data = await api.updateEmailMessage(body);
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
| **messageId** | `string` |  | [Defaults to `undefined`] |
| **updateEmailMessageRequest** | [UpdateEmailMessageRequest](UpdateEmailMessageRequest.md) |  | |

### Return type

[**EmailMessageDetailResponse**](EmailMessageDetailResponse.md)

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

