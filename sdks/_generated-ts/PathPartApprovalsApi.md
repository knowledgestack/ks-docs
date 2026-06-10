# PathPartApprovalsApi

All URIs are relative to *http://localhost:8000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getPathPartApproval**](PathPartApprovalsApi.md#getpathpartapproval) | **GET** /v1/path-parts/{path_part_id}/approval | Get Path Part Approval Handler |
| [**setPathPartApproval**](PathPartApprovalsApi.md#setpathpartapproval) | **POST** /v1/path-parts/{path_part_id}/approval | Set Path Part Approval Handler |



## getPathPartApproval

> PathPartApprovalResponse getPathPartApproval(pathPartId)

Get Path Part Approval Handler

Return the current approval audit row for a path_part.  Exposes &#x60;&#x60;reviewer_id&#x60;&#x60; / &#x60;&#x60;reason&#x60;&#x60; and the decision timestamps so a caller can re-read who decided what and why. 404 if the path_part never entered the approval flow (its &#x60;&#x60;approval_state&#x60;&#x60; is still &#x60;&#x60;not_required&#x60;&#x60;).

### Example

```ts
import {
  Configuration,
  PathPartApprovalsApi,
} from '@knowledge-stack/ksapi';
import type { GetPathPartApprovalRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PathPartApprovalsApi(config);

  const body = {
    // string
    pathPartId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetPathPartApprovalRequest;

  try {
    const data = await api.getPathPartApproval(body);
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
| **pathPartId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**PathPartApprovalResponse**](PathPartApprovalResponse.md)

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


## setPathPartApproval

> PathPartApprovalResponse setPathPartApproval(pathPartId, setApprovalStateRequest)

Set Path Part Approval Handler

Set the approval state on a path_part.  | current ↓ / target → | pending                  | approved                 | | -------------------- | ------------------------ | ------------------------ | | not_required         | 200 request              | 409                      | | pending              | 200 (returns current row)| 200 approve              | | approved             | 200 unapprove            | 200 (returns current row)|  &#x60;&#x60;reason&#x60;&#x60; is forwarded to whichever service method handles the transition and persisted on the audit row (for &#x60;&#x60;approved&#x60;&#x60;) or captured in the corresponding event payload (for &#x60;&#x60;pending&#x60;&#x60;).

### Example

```ts
import {
  Configuration,
  PathPartApprovalsApi,
} from '@knowledge-stack/ksapi';
import type { SetPathPartApprovalRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PathPartApprovalsApi(config);

  const body = {
    // string
    pathPartId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // SetApprovalStateRequest
    setApprovalStateRequest: ...,
  } satisfies SetPathPartApprovalRequest;

  try {
    const data = await api.setPathPartApproval(body);
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
| **pathPartId** | `string` |  | [Defaults to `undefined`] |
| **setApprovalStateRequest** | [SetApprovalStateRequest](SetApprovalStateRequest.md) |  | |

### Return type

[**PathPartApprovalResponse**](PathPartApprovalResponse.md)

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

