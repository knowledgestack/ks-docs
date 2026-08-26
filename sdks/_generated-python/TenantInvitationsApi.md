# ksapi.TenantInvitationsApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accept_tenant_invitation**](TenantInvitationsApi.md#accept_tenant_invitation) | **POST** /v1/tenant-invitations/{invitation_id}/accept | Accept Tenant Invitation Handler


# **accept_tenant_invitation**
> AcceptTenantInvitationResponse accept_tenant_invitation(invitation_id, accept_tenant_invitation_request)

Accept Tenant Invitation Handler

Accept an invitation, creating the customer tenant and its OWNER.

New owner: supply ``password`` — the account is created and signed in.
Existing owner: accept while signed in as ``owner_email`` (no password).

### Example

* Api Key Authentication (cookieAuth):

```python
import ksapi
from ksapi.models.accept_tenant_invitation_request import AcceptTenantInvitationRequest
from ksapi.models.accept_tenant_invitation_response import AcceptTenantInvitationResponse
from ksapi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8000
# See configuration.py for a list of all supported configuration parameters.
configuration = ksapi.Configuration(
    host = "http://localhost:8000"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.TenantInvitationsApi(api_client)
    invitation_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    accept_tenant_invitation_request = ksapi.AcceptTenantInvitationRequest() # AcceptTenantInvitationRequest | 

    try:
        # Accept Tenant Invitation Handler
        api_response = api_instance.accept_tenant_invitation(invitation_id, accept_tenant_invitation_request)
        print("The response of TenantInvitationsApi->accept_tenant_invitation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TenantInvitationsApi->accept_tenant_invitation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invitation_id** | **UUID**|  | 
 **accept_tenant_invitation_request** | [**AcceptTenantInvitationRequest**](AcceptTenantInvitationRequest.md)|  | 

### Return type

[**AcceptTenantInvitationResponse**](AcceptTenantInvitationResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

