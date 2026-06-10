# AgentApi

All URIs are relative to *http://localhost:8000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**agentAsk**](AgentApi.md#agentask) | **POST** /v1/agent/ask | Agent Ask Handler |
| [**agentExtract**](AgentApi.md#agentextract) | **POST** /v1/agent/extract | Agent Extract Handler |



## agentAsk

> AskResponse agentAsk(askRequest)

Agent Ask Handler

Run a one-shot text agent request to completion and return the payload.  The request blocks until the underlying Temporal workflow finishes. Clients should set a generous HTTP timeout to accommodate tool-heavy runs.  Quota: consumes one MESSAGE before &#x60;&#x60;start_workflow&#x60;&#x60;. Refund semantics distinguish cause:  * **Cancellation** (client disconnect → &#x60;&#x60;asyncio.CancelledError&#x60;&#x60;,   OR explicit &#x60;&#x60;DELETE /v1/workflows/{id}&#x60;&#x60; while we await   &#x60;&#x60;handle.result()&#x60;&#x60; → Temporal-wrapped &#x60;&#x60;CancelledError&#x60;&#x60;)   → **NO REFUND.** The user walked away or actively cancelled;   that\&#39;s their volition. We still best-effort cancel the   workflow so the agent stops burning LLM tokens, but the   consume stays charged. Detection uses   &#x60;&#x60;temporalio.exceptions.is_cancelled_exception&#x60;&#x60; which spans   both forms. * Any other exception (pre-enqueue &#x60;&#x60;start_workflow&#x60;&#x60; raise,   Temporal failure, workflow-internal error) → **REFUND.** Server   / our-problem failures don\&#39;t bill the user.

### Example

```ts
import {
  Configuration,
  AgentApi,
} from '@knowledge-stack/ksapi';
import type { AgentAskRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AgentApi(config);

  const body = {
    // AskRequest
    askRequest: ...,
  } satisfies AgentAskRequest;

  try {
    const data = await api.agentAsk(body);
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
| **askRequest** | [AskRequest](AskRequest.md) |  | |

### Return type

[**AskResponse**](AskResponse.md)

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


## agentExtract

> ExtractResponse agentExtract(extractRequest)

Agent Extract Handler

Run a one-shot structured extraction request and return the payload.  Validates the schema input on the route side (DOCUMENT → active version → valid JSON object) BEFORE consuming quota or starting the workflow. Bad schema → 400 with no quota debit. The workflow activity trusts the input and does not re-validate.  Quota: consumes one MESSAGE before &#x60;&#x60;start_workflow&#x60;&#x60;. Refunds on any failure between consume and &#x60;&#x60;handle.result()&#x60;&#x60; returning — pre-enqueue &#x60;&#x60;start_workflow&#x60;&#x60; raises and post-enqueue workflow failures both refund.

### Example

```ts
import {
  Configuration,
  AgentApi,
} from '@knowledge-stack/ksapi';
import type { AgentExtractRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AgentApi(config);

  const body = {
    // ExtractRequest
    extractRequest: ...,
  } satisfies AgentExtractRequest;

  try {
    const data = await api.agentExtract(body);
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
| **extractRequest** | [ExtractRequest](ExtractRequest.md) |  | |

### Return type

[**ExtractResponse**](ExtractResponse.md)

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

