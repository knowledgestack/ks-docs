# FeedbackApi

All URIs are relative to *http://localhost:8000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteFeedback**](FeedbackApi.md#deletefeedback) | **DELETE** /v1/feedback/{feedback_id} | Delete Feedback Handler |
| [**listFeedback**](FeedbackApi.md#listfeedback) | **GET** /v1/feedback | List Feedback Handler |
| [**submitFeedback**](FeedbackApi.md#submitfeedbackoperation) | **POST** /v1/feedback | Submit Feedback Handler |



## deleteFeedback

> deleteFeedback(feedbackId)

Delete Feedback Handler

Delete a feedback entry.  USER role: can only delete their own feedback. OWNER/ADMIN role: can delete any feedback. Returns 404 if the feedback does not exist. Returns 403 if the user does not own the feedback and is not OWNER/ADMIN.

### Example

```ts
import {
  Configuration,
  FeedbackApi,
} from '@knowledge-stack/ksapi';
import type { DeleteFeedbackRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new FeedbackApi(config);

  const body = {
    // string
    feedbackId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteFeedbackRequest;

  try {
    const data = await api.deleteFeedback(body);
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
| **feedbackId** | `string` |  | [Defaults to `undefined`] |

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


## listFeedback

> PaginatedResponseFeedbackEventResponse listFeedback(targetType, targetId, rating, sortBy, sortDir, limit, offset, createdAfter, createdBefore, updatedAfter, updatedBefore)

List Feedback Handler

List feedback entries with optional filters.  USER role: only returns their own feedback. OWNER/ADMIN role: returns feedback from all users.

### Example

```ts
import {
  Configuration,
  FeedbackApi,
} from '@knowledge-stack/ksapi';
import type { ListFeedbackRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new FeedbackApi(config);

  const body = {
    // FeedbackTargetType (optional)
    targetType: ...,
    // string (optional)
    targetId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // FeedbackRating (optional)
    rating: ...,
    // FeedbackOrder | Field to sort feedback by (default: CREATED_AT) (optional)
    sortBy: ...,
    // SortDirection | Sort direction; overrides the field\'s natural default (optional)
    sortDir: ...,
    // number | Number of items per page (optional)
    limit: 56,
    // number | Number of items to skip (optional)
    offset: 56,
    // Date | Only items created at or after this timestamp (inclusive) (optional)
    createdAfter: 2013-10-20T19:20:30+01:00,
    // Date | Only items created strictly before this timestamp (optional)
    createdBefore: 2013-10-20T19:20:30+01:00,
    // Date | Only items updated at or after this timestamp (inclusive) (optional)
    updatedAfter: 2013-10-20T19:20:30+01:00,
    // Date | Only items updated strictly before this timestamp (optional)
    updatedBefore: 2013-10-20T19:20:30+01:00,
  } satisfies ListFeedbackRequest;

  try {
    const data = await api.listFeedback(body);
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
| **targetType** | `FeedbackTargetType` |  | [Optional] [Defaults to `undefined`] [Enum: THREAD, MESSAGE, DOCUMENT, DOCUMENT_VERSION, CHUNK] |
| **targetId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **rating** | `FeedbackRating` |  | [Optional] [Defaults to `undefined`] [Enum: UP, DOWN] |
| **sortBy** | `FeedbackOrder` | Field to sort feedback by (default: CREATED_AT) | [Optional] [Defaults to `undefined`] [Enum: CREATED_AT] |
| **sortDir** | `SortDirection` | Sort direction; overrides the field\&#39;s natural default | [Optional] [Defaults to `undefined`] [Enum: ASC, DESC] |
| **limit** | `number` | Number of items per page | [Optional] [Defaults to `20`] |
| **offset** | `number` | Number of items to skip | [Optional] [Defaults to `0`] |
| **createdAfter** | `Date` | Only items created at or after this timestamp (inclusive) | [Optional] [Defaults to `undefined`] |
| **createdBefore** | `Date` | Only items created strictly before this timestamp | [Optional] [Defaults to `undefined`] |
| **updatedAfter** | `Date` | Only items updated at or after this timestamp (inclusive) | [Optional] [Defaults to `undefined`] |
| **updatedBefore** | `Date` | Only items updated strictly before this timestamp | [Optional] [Defaults to `undefined`] |

### Return type

[**PaginatedResponseFeedbackEventResponse**](PaginatedResponseFeedbackEventResponse.md)

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


## submitFeedback

> FeedbackEventResponse submitFeedback(submitFeedbackRequest)

Submit Feedback Handler

Create or update feedback on a knowledge entity (upsert).  Returns 201 when feedback is newly created, 200 when updated. Validates that the target entity exists and the user can read it.

### Example

```ts
import {
  Configuration,
  FeedbackApi,
} from '@knowledge-stack/ksapi';
import type { SubmitFeedbackOperationRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new FeedbackApi(config);

  const body = {
    // SubmitFeedbackRequest
    submitFeedbackRequest: ...,
  } satisfies SubmitFeedbackOperationRequest;

  try {
    const data = await api.submitFeedback(body);
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
| **submitFeedbackRequest** | [SubmitFeedbackRequest](SubmitFeedbackRequest.md) |  | |

### Return type

[**FeedbackEventResponse**](FeedbackEventResponse.md)

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

