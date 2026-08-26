# TenantInvitationsApi

All URIs are relative to *http://localhost:8000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**acceptTenantInvitation**](TenantInvitationsApi.md#accepttenantinvitationoperation) | **POST** /v1/tenant-invitations/{invitation_id}/accept | Accept Tenant Invitation Handler |



## acceptTenantInvitation

> AcceptTenantInvitationResponse acceptTenantInvitation(invitationId, acceptTenantInvitationRequest)

Accept Tenant Invitation Handler

Accept an invitation, creating the customer tenant and its OWNER.  New owner: supply &#x60;&#x60;password&#x60;&#x60; — the account is created and signed in. Existing owner: accept while signed in as &#x60;&#x60;owner_email&#x60;&#x60; (no password).

### Example

```ts
import {
  Configuration,
  TenantInvitationsApi,
} from '@knowledge-stack/ksapi';
import type { AcceptTenantInvitationOperationRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
  });
  const api = new TenantInvitationsApi(config);

  const body = {
    // string
    invitationId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // AcceptTenantInvitationRequest
    acceptTenantInvitationRequest: ...,
  } satisfies AcceptTenantInvitationOperationRequest;

  try {
    const data = await api.acceptTenantInvitation(body);
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
| **invitationId** | `string` |  | [Defaults to `undefined`] |
| **acceptTenantInvitationRequest** | [AcceptTenantInvitationRequest](AcceptTenantInvitationRequest.md) |  | |

### Return type

[**AcceptTenantInvitationResponse**](AcceptTenantInvitationResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth)

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

