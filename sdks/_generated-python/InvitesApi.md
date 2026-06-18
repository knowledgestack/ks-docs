# ksapi.InvitesApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accept_invite**](InvitesApi.md#accept_invite) | **POST** /v1/invites/{invite_id}/accept | Accept Invite
[**create_invite**](InvitesApi.md#create_invite) | **POST** /v1/invites | Create Invite
[**delete_invite**](InvitesApi.md#delete_invite) | **DELETE** /v1/invites/{invite_id} | Delete Invite
[**list_invites**](InvitesApi.md#list_invites) | **GET** /v1/invites | List Invites Handler
[**update_invite**](InvitesApi.md#update_invite) | **PATCH** /v1/invites/{invite_id} | Update Invite Handler


# **accept_invite**
> AcceptInviteResponse accept_invite(invite_id)

Accept Invite

Accept an invite OR a tenant invite-link.

The path parameter ``invite_id`` may be either:
  * a Tenant ID (when an admin has enabled ``invite_link`` on the tenant), OR
  * an Invite ID (the traditional per-email invite flow).

Tenant lookup is tried first. If the row is found, the request is treated
as an invite-link request — both 400 paths below have *distinct* messages
so the frontend can branch on copy:
  * "does not have invite link enabled" → admin hasn't turned it on
  * "does not support inviting users"   → tenant kill-switch
``system_metadata.can_invite`` is honored on this path too — it's a hard
kill switch for self-serve onboarding. Only when no tenant matches do we
look up an Invite row.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.accept_invite_response import AcceptInviteResponse
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

# Configure Bearer authorization: bearerAuth
configuration = ksapi.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.InvitesApi(api_client)
    invite_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Either an Invite ID (traditional per-email invite) OR a Tenant ID (when the tenant has ``invite_link.enabled``). Tenant lookup is tried first.

    try:
        # Accept Invite
        api_response = api_instance.accept_invite(invite_id)
        print("The response of InvitesApi->accept_invite:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvitesApi->accept_invite: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invite_id** | **UUID**| Either an Invite ID (traditional per-email invite) OR a Tenant ID (when the tenant has &#x60;&#x60;invite_link.enabled&#x60;&#x60;). Tenant lookup is tried first. | 

### Return type

[**AcceptInviteResponse**](AcceptInviteResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_invite**
> InviteResponse create_invite(invite_user_request)

Create Invite

Create an invite for a user to join a tenant (admin-only).

For external IdP tenants (idp_config is set), users are added directly if they exist.
For shared IdP tenants (PASSWORD/GOOGLE), an email invite is sent that must be accepted.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.invite_response import InviteResponse
from ksapi.models.invite_user_request import InviteUserRequest
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

# Configure Bearer authorization: bearerAuth
configuration = ksapi.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.InvitesApi(api_client)
    invite_user_request = ksapi.InviteUserRequest() # InviteUserRequest | 

    try:
        # Create Invite
        api_response = api_instance.create_invite(invite_user_request)
        print("The response of InvitesApi->create_invite:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvitesApi->create_invite: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invite_user_request** | [**InviteUserRequest**](InviteUserRequest.md)|  | 

### Return type

[**InviteResponse**](InviteResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_invite**
> delete_invite(invite_id)

Delete Invite

Hard-delete an invite (admin/owner only).

Permanently removes the invite. The invite must belong to the caller's current tenant.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
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

# Configure Bearer authorization: bearerAuth
configuration = ksapi.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.InvitesApi(api_client)
    invite_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Delete Invite
        api_instance.delete_invite(invite_id)
    except Exception as e:
        print("Exception when calling InvitesApi->delete_invite: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invite_id** | **UUID**|  | 

### Return type

void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**422** | Validation Error |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_invites**
> PaginatedResponseInviteResponse list_invites(email=email, status=status, role=role, invited_by=invited_by, sort_by=sort_by, sort_dir=sort_dir, limit=limit, offset=offset, created_after=created_after, created_before=created_before, updated_after=updated_after, updated_before=updated_before)

List Invites Handler

List invites with pagination, filtering, and sorting.

Supports filtering by email, status, role, and a created_at/updated_at
timestamp range. Results sort by created_at (ascending) by default.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.invite_order import InviteOrder
from ksapi.models.invite_status import InviteStatus
from ksapi.models.paginated_response_invite_response import PaginatedResponseInviteResponse
from ksapi.models.sort_direction import SortDirection
from ksapi.models.tenant_user_role import TenantUserRole
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

# Configure Bearer authorization: bearerAuth
configuration = ksapi.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.InvitesApi(api_client)
    email = 'email_example' # str | Filter by email (case-insensitive partial match) (optional)
    status = ksapi.InviteStatus() # InviteStatus | Filter by invite status (pending, accepted, expired) (optional)
    role = ksapi.TenantUserRole() # TenantUserRole | Filter by invite role (optional)
    invited_by = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Filter to invites sent by this user (optional)
    sort_by = ksapi.InviteOrder() # InviteOrder | Field to sort invites by (default: CREATED_AT) (optional)
    sort_dir = ksapi.SortDirection() # SortDirection | Sort direction; overrides the field's natural default (optional)
    limit = 20 # int | Number of items per page (optional) (default to 20)
    offset = 0 # int | Number of items to skip (optional) (default to 0)
    created_after = '2013-10-20T19:20:30+01:00' # datetime | Only items created at or after this timestamp (inclusive) (optional)
    created_before = '2013-10-20T19:20:30+01:00' # datetime | Only items created strictly before this timestamp (optional)
    updated_after = '2013-10-20T19:20:30+01:00' # datetime | Only items updated at or after this timestamp (inclusive) (optional)
    updated_before = '2013-10-20T19:20:30+01:00' # datetime | Only items updated strictly before this timestamp (optional)

    try:
        # List Invites Handler
        api_response = api_instance.list_invites(email=email, status=status, role=role, invited_by=invited_by, sort_by=sort_by, sort_dir=sort_dir, limit=limit, offset=offset, created_after=created_after, created_before=created_before, updated_after=updated_after, updated_before=updated_before)
        print("The response of InvitesApi->list_invites:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvitesApi->list_invites: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **str**| Filter by email (case-insensitive partial match) | [optional] 
 **status** | [**InviteStatus**](.md)| Filter by invite status (pending, accepted, expired) | [optional] 
 **role** | [**TenantUserRole**](.md)| Filter by invite role | [optional] 
 **invited_by** | **UUID**| Filter to invites sent by this user | [optional] 
 **sort_by** | [**InviteOrder**](.md)| Field to sort invites by (default: CREATED_AT) | [optional] 
 **sort_dir** | [**SortDirection**](.md)| Sort direction; overrides the field&#39;s natural default | [optional] 
 **limit** | **int**| Number of items per page | [optional] [default to 20]
 **offset** | **int**| Number of items to skip | [optional] [default to 0]
 **created_after** | **datetime**| Only items created at or after this timestamp (inclusive) | [optional] 
 **created_before** | **datetime**| Only items created strictly before this timestamp | [optional] 
 **updated_after** | **datetime**| Only items updated at or after this timestamp (inclusive) | [optional] 
 **updated_before** | **datetime**| Only items updated strictly before this timestamp | [optional] 

### Return type

[**PaginatedResponseInviteResponse**](PaginatedResponseInviteResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_invite**
> InviteResponse update_invite(invite_id, update_invite_request)

Update Invite Handler

Update an invite's expiry or groups (admin/owner only).

The invite must belong to the caller's current tenant. Any provided
groups are validated to belong to the same tenant.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.invite_response import InviteResponse
from ksapi.models.update_invite_request import UpdateInviteRequest
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

# Configure Bearer authorization: bearerAuth
configuration = ksapi.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.InvitesApi(api_client)
    invite_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    update_invite_request = ksapi.UpdateInviteRequest() # UpdateInviteRequest | 

    try:
        # Update Invite Handler
        api_response = api_instance.update_invite(invite_id, update_invite_request)
        print("The response of InvitesApi->update_invite:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvitesApi->update_invite: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invite_id** | **UUID**|  | 
 **update_invite_request** | [**UpdateInviteRequest**](UpdateInviteRequest.md)|  | 

### Return type

[**InviteResponse**](InviteResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

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

