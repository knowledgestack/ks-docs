# EmailConnectorsApi

All URIs are relative to *http://localhost:8000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**completeEmailConnectorAuthorization**](EmailConnectorsApi.md#completeemailconnectorauthorization) | **POST** /v1/email-connectors/callback | Complete Email Connector Authorization Handler |
| [**emailRemoved**](EmailConnectorsApi.md#emailremovedoperation) | **POST** /v1/email-connectors/{data_source_id}/removed | Email Removed Handler |
| [**emailStoredIds**](EmailConnectorsApi.md#emailstoredidsoperation) | **POST** /v1/email-connectors/{data_source_id}/stored-ids | Email Stored Ids Handler |
| [**mintEmailAccessToken**](EmailConnectorsApi.md#mintemailaccesstoken) | **POST** /v1/email-connectors/{data_source_id}/access-token | Mint Email Access Token Handler |
| [**recordEmailDeltaLink**](EmailConnectorsApi.md#recordemaildeltalink) | **POST** /v1/email-connectors/{data_source_id}/delta-link | Record Email Delta Link Handler |
| [**recordEmailUnfinished**](EmailConnectorsApi.md#recordemailunfinished) | **POST** /v1/email-connectors/{data_source_id}/unfinished | Record Email Unfinished Handler |
| [**startEmailConnectorAuthorization**](EmailConnectorsApi.md#startemailconnectorauthorization) | **POST** /v1/email-connectors/{data_source_id}/authorize | Start Email Connector Authorization Handler |
| [**syncEmailConnector**](EmailConnectorsApi.md#syncemailconnector) | **POST** /v1/email-connectors/{data_source_id}/sync | Sync Email Connector Handler |
| [**testEmailConnector**](EmailConnectorsApi.md#testemailconnector) | **POST** /v1/email-connectors/{data_source_id}/test | Test Email Connector Handler |



## completeEmailConnectorAuthorization

> CompleteAuthorizationResponse completeEmailConnectorAuthorization(completeAuthorizationRequest)

Complete Email Connector Authorization Handler

Redeem the consent the popup brought back.  Called by our own frontend, with its own session: the consent runs in a popup the page opened, the popup hands the fragment to that page, and the page posts it here. So this is an ordinary authorized call — it needs &#x60;&#x60;can_write&#x60;&#x60; on the connector like every other acting endpoint, and the tenant comes from the caller rather than from anything the provider echoed. &#x60;&#x60;state&#x60;&#x60; is what finds the parked flow and says which connector the consent was for; it decides no authority of its own.  The outcome goes back in the response body, to the page that never moved. A refusal is an ordinary error — &#x60;&#x60;{detail, code, request_id}&#x60;&#x60; — and the handshake\&#39;s four have their own codes in that closed set: &#x60;&#x60;consent_refused&#x60;&#x60;, &#x60;&#x60;no_code&#x60;&#x60;, &#x60;&#x60;wrong_account&#x60;&#x60; and &#x60;&#x60;mailbox_in_use&#x60;&#x60;. Branch on the code rather than on &#x60;&#x60;detail&#x60;&#x60;, which is an English literal in a product that is not.

### Example

```ts
import {
  Configuration,
  EmailConnectorsApi,
} from '@knowledge-stack/ksapi';
import type { CompleteEmailConnectorAuthorizationRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EmailConnectorsApi(config);

  const body = {
    // CompleteAuthorizationRequest
    completeAuthorizationRequest: ...,
  } satisfies CompleteEmailConnectorAuthorizationRequest;

  try {
    const data = await api.completeEmailConnectorAuthorization(body);
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
| **completeAuthorizationRequest** | [CompleteAuthorizationRequest](CompleteAuthorizationRequest.md) |  | |

### Return type

[**CompleteAuthorizationResponse**](CompleteAuthorizationResponse.md)

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


## emailRemoved

> EmailRemovedResponse emailRemoved(dataSourceId, emailRemovedRequest)

Email Removed Handler

Trash the mail this mailbox no longer holds in the folders it walks.  The other half of the sync diff. The tree mirrors the mailbox\&#39;s send and receive folders, so a mail that left them is no longer a record of anything — and the provider reports leaving a folder and nothing finer: measured on 2026-10-25, a mail deleted and a mail moved to Archive both came back from the folder\&#39;s delta as &#x60;&#x60;@removed&#x60;&#x60; with &#x60;&#x60;reason: \&quot;deleted\&quot;&#x60;&#x60;.  Only the mail this connector records as living in the folder that is reporting it, which is why the folder is in the body. A delta is per folder, so a mail moved from Sent to Inbox is reported removed from Sent while the mailbox still holds it — and the diff is connector-wide, so the Inbox pass skipped it rather than re-filing it. Trashing on the id alone took that mail, with both folders\&#39; bookmarks advanced so that no later run ever listed it again.  Trashed, not erased. The path system\&#39;s trash is the mechanism this product already has for a removal, and a mail is still there to be looked at; erasing on request is a separate thing and not this path.  The sync\&#39;s own identity only, like creating mail here. A connector\&#39;s subtree is its crawl\&#39;s: everything in it is &#x60;&#x60;system_managed&#x60;&#x60; precisely so that nobody edits the record by hand, and a removal that follows the source is the record changing rather than somebody editing it.  POST for the same reason as the diff: a page\&#39;s worth of opaque ids is the request\&#39;s body in every meaningful sense.

### Example

```ts
import {
  Configuration,
  EmailConnectorsApi,
} from '@knowledge-stack/ksapi';
import type { EmailRemovedOperationRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EmailConnectorsApi(config);

  const body = {
    // string
    dataSourceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // EmailRemovedRequest
    emailRemovedRequest: ...,
  } satisfies EmailRemovedOperationRequest;

  try {
    const data = await api.emailRemoved(body);
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
| **dataSourceId** | `string` |  | [Defaults to `undefined`] |
| **emailRemovedRequest** | [EmailRemovedRequest](EmailRemovedRequest.md) |  | |

### Return type

[**EmailRemovedResponse**](EmailRemovedResponse.md)

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


## emailStoredIds

> EmailStoredIdsResponse emailStoredIds(dataSourceId, emailStoredIdsRequest)

Email Stored Ids Handler

The sync diff for one listing page: which of these ids we already hold.  Asked per page rather than handed over whole at the start of the run. The id set grows with the mailbox, so shipping it would make the sync work for a small mailbox and fail outright for a large one.  Answered for the connector rather than for the folder, on purpose: one mail held by two walked folders must not be stored twice. The folder is still named, and the mail reported as already stored is recorded as living in it — the only moment a move between two walked folders is recorded, and what keeps the folder it left from trashing it when that folder\&#39;s own delta reports it gone.  POST rather than GET because the ids are a page\&#39;s worth of opaque strings; they do not fit a query string, and they are the request\&#39;s body in every meaningful sense. The write it also does makes it a POST twice over.

### Example

```ts
import {
  Configuration,
  EmailConnectorsApi,
} from '@knowledge-stack/ksapi';
import type { EmailStoredIdsOperationRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EmailConnectorsApi(config);

  const body = {
    // string
    dataSourceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // EmailStoredIdsRequest
    emailStoredIdsRequest: ...,
  } satisfies EmailStoredIdsOperationRequest;

  try {
    const data = await api.emailStoredIds(body);
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
| **dataSourceId** | `string` |  | [Defaults to `undefined`] |
| **emailStoredIdsRequest** | [EmailStoredIdsRequest](EmailStoredIdsRequest.md) |  | |

### Return type

[**EmailStoredIdsResponse**](EmailStoredIdsResponse.md)

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


## mintEmailAccessToken

> EmailAccessToken mintEmailAccessToken(dataSourceId)

Mint Email Access Token Handler

A fresh token for a run that has outlived the one it started with.  A mailbox takes hours to walk and a Graph token lasts about one, so without this a first sync would spend most of its run being refused — and every refusal looks like one more unreadable mail, not like an expired token.  POST rather than GET: minting rotates the stored refresh token.  **This connector\&#39;s own crawl only**, which is the one gate here that is not a path permission. What comes back is a Graph bearer token, and its reach is not ours to narrow: a delegated token carries the *consenting mailbox owner\&#39;s* permissions, intersected with what the app registration asked for — never the permissions of whoever called this. So a KS user with read on one subfolder would get a token that reads the entire mailbox, outside our permission system and for as long as it lives.  Gated through :func:&#x60;is_sync_identity&#x60;, the same predicate that decides who may write inside a connector\&#39;s subtree — one definition, so narrowing it narrows both. It asks a token minted through &#x60;&#x60;/system/auth/assume_user&#x60;&#x60; (which needs the deployment\&#39;s admin key, so no browser session reaches this however privileged) **and** that the identity is this connector\&#39;s own owner, which is what its crawl assumes. A bare \&quot;is a service identity\&quot; was not enough: every ingestion activity assumes its uploader and every agent run carries one too, so a user who happens to be the uploader on an unrelated document could have minted a token for any mailbox they had write on.  A tenant admin who wants the mail reads it through the mail endpoints, where our own path scoping still applies.

### Example

```ts
import {
  Configuration,
  EmailConnectorsApi,
} from '@knowledge-stack/ksapi';
import type { MintEmailAccessTokenRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EmailConnectorsApi(config);

  const body = {
    // string
    dataSourceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies MintEmailAccessTokenRequest;

  try {
    const data = await api.mintEmailAccessToken(body);
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
| **dataSourceId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**EmailAccessToken**](EmailAccessToken.md)

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


## recordEmailDeltaLink

> recordEmailDeltaLink(dataSourceId, emailDeltaLinkRequest)

Record Email Delta Link Handler

Record where one folder\&#39;s walk got to, for the next run to start from.  One folder at a time rather than a whole run\&#39;s worth, because that is when the link is earned: Graph hands it over only once a folder\&#39;s pages have run out, and a run that dies on the third folder should keep what the first two did.  Merged into &#x60;&#x60;sync_state&#x60;&#x60; rather than replacing it. The other key there is written by the sync report, and a folder list that changed since the last run leaves behind links for folders nobody walks any more — harmless, and cheaper than reconciling them: an unused key costs nothing and a wrong reconciliation costs a full re-walk.  The crawl calls this as the connector\&#39;s owner, which is also the gate: &#x60;&#x60;can_write&#x60;&#x60;, because what it writes is the connector\&#39;s own cursor. The tenant comes from the token and the connector from the path, so no body can name a row in somebody else\&#39;s workspace — which is what this endpoint traded away by living under &#x60;&#x60;/system&#x60;&#x60;, where the tenant was a parameter the caller chose.

### Example

```ts
import {
  Configuration,
  EmailConnectorsApi,
} from '@knowledge-stack/ksapi';
import type { RecordEmailDeltaLinkRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EmailConnectorsApi(config);

  const body = {
    // string
    dataSourceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // EmailDeltaLinkRequest
    emailDeltaLinkRequest: ...,
  } satisfies RecordEmailDeltaLinkRequest;

  try {
    const data = await api.recordEmailDeltaLink(body);
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
| **dataSourceId** | `string` |  | [Defaults to `undefined`] |
| **emailDeltaLinkRequest** | [EmailDeltaLinkRequest](EmailDeltaLinkRequest.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Successful Response |  -  |
| **422** | Validation Error |  -  |
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## recordEmailUnfinished

> recordEmailUnfinished(dataSourceId, emailUnfinishedRequest)

Record Email Unfinished Handler

Record what one folder\&#39;s pass could not finish, for the next run to retry.  A folder is walked by delta, and a delta returns what *changed* — so a mail this pass could not store is not listed again unless something about it changes at the source, which for a mail nobody touches never happens. Without this ledger the only way not to lose it would be to withhold the bookmark, which re-walks the whole folder on every run for ever once one mail goes permanently bad. With it the bookmark is saved as usual and the few that failed are fetched by id next time.  Replaces that folder\&#39;s entries rather than merging into them: the pass that calls this just finished walking that folder, so it knows the whole answer for it, and anything it managed this time is simply absent from what it sends. Other folders are untouched — a run walks them in sequence.  Gated like the bookmark: &#x60;&#x60;can_write&#x60;&#x60; on the connector *and* the crawl\&#39;s own identity, with the tenant from the token and the connector from the path.

### Example

```ts
import {
  Configuration,
  EmailConnectorsApi,
} from '@knowledge-stack/ksapi';
import type { RecordEmailUnfinishedRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EmailConnectorsApi(config);

  const body = {
    // string
    dataSourceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // EmailUnfinishedRequest
    emailUnfinishedRequest: ...,
  } satisfies RecordEmailUnfinishedRequest;

  try {
    const data = await api.recordEmailUnfinished(body);
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
| **dataSourceId** | `string` |  | [Defaults to `undefined`] |
| **emailUnfinishedRequest** | [EmailUnfinishedRequest](EmailUnfinishedRequest.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Successful Response |  -  |
| **422** | Validation Error |  -  |
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## startEmailConnectorAuthorization

> StartAuthorizationResponse startEmailConnectorAuthorization(dataSourceId)

Start Email Connector Authorization Handler

Build the consent URL from the registration this mailbox carries.

### Example

```ts
import {
  Configuration,
  EmailConnectorsApi,
} from '@knowledge-stack/ksapi';
import type { StartEmailConnectorAuthorizationRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EmailConnectorsApi(config);

  const body = {
    // string
    dataSourceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies StartEmailConnectorAuthorizationRequest;

  try {
    const data = await api.startEmailConnectorAuthorization(body);
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
| **dataSourceId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**StartAuthorizationResponse**](StartAuthorizationResponse.md)

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


## syncEmailConnector

> any syncEmailConnector(dataSourceId)

Sync Email Connector Handler

Sync this mailbox now, without waiting for the recurrence.  202, not 200: the crawl is accepted, not finished — a mailbox takes minutes to hours. A press while this connector is already syncing is refused with 409 by the workflow id rather than queued, so the caller is never told a crawl started when it did not.

### Example

```ts
import {
  Configuration,
  EmailConnectorsApi,
} from '@knowledge-stack/ksapi';
import type { SyncEmailConnectorRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EmailConnectorsApi(config);

  const body = {
    // string
    dataSourceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies SyncEmailConnectorRequest;

  try {
    const data = await api.syncEmailConnector(body);
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
| **dataSourceId** | `string` |  | [Defaults to `undefined`] |

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
| **202** | Successful Response |  -  |
| **422** | Validation Error |  -  |
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## testEmailConnector

> TestConnectionResponse testEmailConnector(dataSourceId)

Test Email Connector Handler

Whether this mailbox is reachable right now, without starting a sync.  The outcome is in the body with a 200 either way, exactly as the SQL connectors\&#39; test does, so the frontend renders it inline rather than handling a 400.  Both halves are tested, because either can be what is broken: the stored grant is refreshed, and the token is then spent on one folder listing against the directory\&#39;s own cloud. A grant that refreshes but cannot read mail is the case a token check alone would call healthy.  Deliberately read-only about &#x60;&#x60;sync_status&#x60;&#x60;. A connector is marked NEEDS_REAUTH by the crawl and by the system token endpoint, which are the paths that were trying to do real work; a probe anyone can press should not move a working connector\&#39;s state because the network blinked.

### Example

```ts
import {
  Configuration,
  EmailConnectorsApi,
} from '@knowledge-stack/ksapi';
import type { TestEmailConnectorRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EmailConnectorsApi(config);

  const body = {
    // string
    dataSourceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies TestEmailConnectorRequest;

  try {
    const data = await api.testEmailConnector(body);
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
| **dataSourceId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**TestConnectionResponse**](TestConnectionResponse.md)

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

