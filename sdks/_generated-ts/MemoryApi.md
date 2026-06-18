# MemoryApi

All URIs are relative to *http://localhost:8000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**approveMemoryProposal**](MemoryApi.md#approvememoryproposal) | **POST** /v1/memory/proposals/{chunk_id}/approve | Approve Memory Proposal Handler |
| [**getMemoryBody**](MemoryApi.md#getmemorybody) | **GET** /v1/memory/body | Get Memory Body Handler |
| [**listMemoryProposals**](MemoryApi.md#listmemoryproposals) | **GET** /v1/memory/proposals | List Memory Proposals Handler |
| [**proposeMemoryChunk**](MemoryApi.md#proposememorychunkoperation) | **POST** /v1/memory/proposals | Propose Memory Chunk Handler |
| [**rejectMemoryProposal**](MemoryApi.md#rejectmemoryproposal) | **POST** /v1/memory/proposals/{chunk_id}/reject | Reject Memory Proposal Handler |



## approveMemoryProposal

> MemoryChunkResponse approveMemoryProposal(chunkId)

Approve Memory Proposal Handler

### Example

```ts
import {
  Configuration,
  MemoryApi,
} from '@knowledge-stack/ksapi';
import type { ApproveMemoryProposalRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MemoryApi(config);

  const body = {
    // string
    chunkId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies ApproveMemoryProposalRequest;

  try {
    const data = await api.approveMemoryProposal(body);
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
| **chunkId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**MemoryChunkResponse**](MemoryChunkResponse.md)

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


## getMemoryBody

> MemoryBodyResponse getMemoryBody(scope, ownerId)

Get Memory Body Handler

### Example

```ts
import {
  Configuration,
  MemoryApi,
} from '@knowledge-stack/ksapi';
import type { GetMemoryBodyRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MemoryApi(config);

  const body = {
    // MemoryScope
    scope: ...,
    // string
    ownerId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetMemoryBodyRequest;

  try {
    const data = await api.getMemoryBody(body);
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
| **scope** | `MemoryScope` |  | [Defaults to `undefined`] [Enum: user, workflow] |
| **ownerId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**MemoryBodyResponse**](MemoryBodyResponse.md)

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


## listMemoryProposals

> PaginatedResponsePendingMemoryChunkResponse listMemoryProposals(limit, offset)

List Memory Proposals Handler

### Example

```ts
import {
  Configuration,
  MemoryApi,
} from '@knowledge-stack/ksapi';
import type { ListMemoryProposalsRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MemoryApi(config);

  const body = {
    // number | Number of items per page (optional)
    limit: 56,
    // number | Number of items to skip (optional)
    offset: 56,
  } satisfies ListMemoryProposalsRequest;

  try {
    const data = await api.listMemoryProposals(body);
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

[**PaginatedResponsePendingMemoryChunkResponse**](PaginatedResponsePendingMemoryChunkResponse.md)

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


## proposeMemoryChunk

> ProposedMemoryChunkResponse proposeMemoryChunk(proposeMemoryChunkRequest)

Propose Memory Chunk Handler

### Example

```ts
import {
  Configuration,
  MemoryApi,
} from '@knowledge-stack/ksapi';
import type { ProposeMemoryChunkOperationRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MemoryApi(config);

  const body = {
    // ProposeMemoryChunkRequest
    proposeMemoryChunkRequest: ...,
  } satisfies ProposeMemoryChunkOperationRequest;

  try {
    const data = await api.proposeMemoryChunk(body);
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
| **proposeMemoryChunkRequest** | [ProposeMemoryChunkRequest](ProposeMemoryChunkRequest.md) |  | |

### Return type

[**ProposedMemoryChunkResponse**](ProposedMemoryChunkResponse.md)

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


## rejectMemoryProposal

> rejectMemoryProposal(chunkId)

Reject Memory Proposal Handler

### Example

```ts
import {
  Configuration,
  MemoryApi,
} from '@knowledge-stack/ksapi';
import type { RejectMemoryProposalRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MemoryApi(config);

  const body = {
    // string
    chunkId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies RejectMemoryProposalRequest;

  try {
    const data = await api.rejectMemoryProposal(body);
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
| **chunkId** | `string` |  | [Defaults to `undefined`] |

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

