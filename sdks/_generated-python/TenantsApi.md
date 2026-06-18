# ksapi.TenantsApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activate_tenant_user**](TenantsApi.md#activate_tenant_user) | **POST** /v1/tenants/{tenant_id}/users/{user_id}/activate | Activate Tenant User Handler
[**deactivate_tenant_user**](TenantsApi.md#deactivate_tenant_user) | **POST** /v1/tenants/{tenant_id}/users/{user_id}/deactivate | Deactivate Tenant User Handler
[**delete_tenant**](TenantsApi.md#delete_tenant) | **DELETE** /v1/tenants/{tenant_id} | Delete Tenant
[**delete_tenant_logo**](TenantsApi.md#delete_tenant_logo) | **DELETE** /v1/tenants/{tenant_id}/branding/logo | Delete Tenant Logo
[**delete_tenant_user**](TenantsApi.md#delete_tenant_user) | **DELETE** /v1/tenants/{tenant_id}/users/{user_id} | Delete Tenant User Handler
[**get_tenant**](TenantsApi.md#get_tenant) | **GET** /v1/tenants/{tenant_id} | Get Tenant
[**get_tenant_quota_state**](TenantsApi.md#get_tenant_quota_state) | **GET** /v1/tenants/{tenant_id}/quota | Get Tenant Quota State Handler
[**list_tenant_users**](TenantsApi.md#list_tenant_users) | **GET** /v1/tenants/{tenant_id}/users | List Tenant Users
[**list_tenants**](TenantsApi.md#list_tenants) | **GET** /v1/tenants | List Tenants
[**update_tenant**](TenantsApi.md#update_tenant) | **PATCH** /v1/tenants/{tenant_id} | Update Tenant
[**update_tenant_user**](TenantsApi.md#update_tenant_user) | **PATCH** /v1/tenants/{tenant_id}/users/{user_id} | Update Tenant User
[**upload_tenant_logo**](TenantsApi.md#upload_tenant_logo) | **POST** /v1/tenants/{tenant_id}/branding/logo | Upload Tenant Logo


# **activate_tenant_user**
> TenantUserResponse activate_tenant_user(tenant_id, user_id)

Activate Tenant User Handler

Reactivate a deactivated tenant user.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.tenant_user_response import TenantUserResponse
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
    api_instance = ksapi.TenantsApi(api_client)
    tenant_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    user_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Activate Tenant User Handler
        api_response = api_instance.activate_tenant_user(tenant_id, user_id)
        print("The response of TenantsApi->activate_tenant_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TenantsApi->activate_tenant_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenant_id** | **UUID**|  | 
 **user_id** | **UUID**|  | 

### Return type

[**TenantUserResponse**](TenantUserResponse.md)

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

# **deactivate_tenant_user**
> TenantUserResponse deactivate_tenant_user(tenant_id, user_id)

Deactivate Tenant User Handler

Deactivate a tenant user (soft delete).

The user's group memberships in this tenant are permanently removed.
They will not be restored on reactivation and must be re-added manually.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.tenant_user_response import TenantUserResponse
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
    api_instance = ksapi.TenantsApi(api_client)
    tenant_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    user_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Deactivate Tenant User Handler
        api_response = api_instance.deactivate_tenant_user(tenant_id, user_id)
        print("The response of TenantsApi->deactivate_tenant_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TenantsApi->deactivate_tenant_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenant_id** | **UUID**|  | 
 **user_id** | **UUID**|  | 

### Return type

[**TenantUserResponse**](TenantUserResponse.md)

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

# **delete_tenant**
> delete_tenant(tenant_id)

Delete Tenant

Delete a tenant.

Requires OWNER role in the tenant.
Deletes the tenant's LiteLLM team/keys and S3 bucket after the DB
transaction commits.

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
    api_instance = ksapi.TenantsApi(api_client)
    tenant_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Delete Tenant
        api_instance.delete_tenant(tenant_id)
    except Exception as e:
        print("Exception when calling TenantsApi->delete_tenant: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenant_id** | **UUID**|  | 

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

# **delete_tenant_logo**
> TenantResponse delete_tenant_logo(tenant_id, logo_type=logo_type)

Delete Tenant Logo

Delete a branding logo.

Requires OWNER or ADMIN role.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.branding_logo_type import BrandingLogoType
from ksapi.models.tenant_response import TenantResponse
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
    api_instance = ksapi.TenantsApi(api_client)
    tenant_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    logo_type = ksapi.BrandingLogoType() # BrandingLogoType |  (optional)

    try:
        # Delete Tenant Logo
        api_response = api_instance.delete_tenant_logo(tenant_id, logo_type=logo_type)
        print("The response of TenantsApi->delete_tenant_logo:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TenantsApi->delete_tenant_logo: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenant_id** | **UUID**|  | 
 **logo_type** | [**BrandingLogoType**](.md)|  | [optional] 

### Return type

[**TenantResponse**](TenantResponse.md)

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

# **delete_tenant_user**
> delete_tenant_user(tenant_id, user_id)

Delete Tenant User Handler

Remove a user from a tenant (hard delete).

Only non-directory-synced users can be removed. Directory-synced
users must be managed via directory sync.

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
    api_instance = ksapi.TenantsApi(api_client)
    tenant_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    user_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Delete Tenant User Handler
        api_instance.delete_tenant_user(tenant_id, user_id)
    except Exception as e:
        print("Exception when calling TenantsApi->delete_tenant_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenant_id** | **UUID**|  | 
 **user_id** | **UUID**|  | 

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

# **get_tenant**
> TenantResponse get_tenant(tenant_id)

Get Tenant

Get tenant information by ID.

User must be a member of the tenant.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.tenant_response import TenantResponse
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
    api_instance = ksapi.TenantsApi(api_client)
    tenant_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Get Tenant
        api_response = api_instance.get_tenant(tenant_id)
        print("The response of TenantsApi->get_tenant:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TenantsApi->get_tenant: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenant_id** | **UUID**|  | 

### Return type

[**TenantResponse**](TenantResponse.md)

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

# **get_tenant_quota_state**
> TenantQuotaStateResponse get_tenant_quota_state(tenant_id)

Get Tenant Quota State Handler

Read the tenant's current quota state across all metered caps + seats.

Any active member of the tenant can read. Read-only — does not mutate
quota state.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.tenant_quota_state_response import TenantQuotaStateResponse
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
    api_instance = ksapi.TenantsApi(api_client)
    tenant_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Get Tenant Quota State Handler
        api_response = api_instance.get_tenant_quota_state(tenant_id)
        print("The response of TenantsApi->get_tenant_quota_state:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TenantsApi->get_tenant_quota_state: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenant_id** | **UUID**|  | 

### Return type

[**TenantQuotaStateResponse**](TenantQuotaStateResponse.md)

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

# **list_tenant_users**
> PaginatedResponseTenantUserResponse list_tenant_users(tenant_id, sort_by=sort_by, sort_dir=sort_dir, role=role, username_like=username_like, active_only=active_only, limit=limit, offset=offset)

List Tenant Users

List members of a tenant with pagination.

Requires OWNER or ADMIN membership in the tenant.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.paginated_response_tenant_user_response import PaginatedResponseTenantUserResponse
from ksapi.models.sort_direction import SortDirection
from ksapi.models.tenant_user_order import TenantUserOrder
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
    api_instance = ksapi.TenantsApi(api_client)
    tenant_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    sort_by = ksapi.TenantUserOrder() # TenantUserOrder | Field to sort members by (default: active-first) (optional)
    sort_dir = ksapi.SortDirection() # SortDirection | Sort direction; overrides the field's natural default (optional)
    role = ksapi.TenantUserRole() # TenantUserRole | Filter to members with this role (optional)
    username_like = 'username_like_example' # str | Case-insensitive substring filter on first/last name (optional)
    active_only = False # bool | Exclude deactivated members (optional) (default to False)
    limit = 20 # int | Number of items per page (optional) (default to 20)
    offset = 0 # int | Number of items to skip (optional) (default to 0)

    try:
        # List Tenant Users
        api_response = api_instance.list_tenant_users(tenant_id, sort_by=sort_by, sort_dir=sort_dir, role=role, username_like=username_like, active_only=active_only, limit=limit, offset=offset)
        print("The response of TenantsApi->list_tenant_users:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TenantsApi->list_tenant_users: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenant_id** | **UUID**|  | 
 **sort_by** | [**TenantUserOrder**](.md)| Field to sort members by (default: active-first) | [optional] 
 **sort_dir** | [**SortDirection**](.md)| Sort direction; overrides the field&#39;s natural default | [optional] 
 **role** | [**TenantUserRole**](.md)| Filter to members with this role | [optional] 
 **username_like** | **str**| Case-insensitive substring filter on first/last name | [optional] 
 **active_only** | **bool**| Exclude deactivated members | [optional] [default to False]
 **limit** | **int**| Number of items per page | [optional] [default to 20]
 **offset** | **int**| Number of items to skip | [optional] [default to 0]

### Return type

[**PaginatedResponseTenantUserResponse**](PaginatedResponseTenantUserResponse.md)

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

# **list_tenants**
> PaginatedResponseTenantResponse list_tenants(limit=limit, offset=offset)

List Tenants

List all tenants the current user belongs to.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.paginated_response_tenant_response import PaginatedResponseTenantResponse
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
    api_instance = ksapi.TenantsApi(api_client)
    limit = 20 # int | Number of items per page (optional) (default to 20)
    offset = 0 # int | Number of items to skip (optional) (default to 0)

    try:
        # List Tenants
        api_response = api_instance.list_tenants(limit=limit, offset=offset)
        print("The response of TenantsApi->list_tenants:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TenantsApi->list_tenants: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Number of items per page | [optional] [default to 20]
 **offset** | **int**| Number of items to skip | [optional] [default to 0]

### Return type

[**PaginatedResponseTenantResponse**](PaginatedResponseTenantResponse.md)

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

# **update_tenant**
> TenantResponse update_tenant(tenant_id, update_tenant_request)

Update Tenant

Update tenant configuration.

Requires OWNER or ADMIN role in the tenant.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.tenant_response import TenantResponse
from ksapi.models.update_tenant_request import UpdateTenantRequest
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
    api_instance = ksapi.TenantsApi(api_client)
    tenant_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    update_tenant_request = ksapi.UpdateTenantRequest() # UpdateTenantRequest | 

    try:
        # Update Tenant
        api_response = api_instance.update_tenant(tenant_id, update_tenant_request)
        print("The response of TenantsApi->update_tenant:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TenantsApi->update_tenant: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenant_id** | **UUID**|  | 
 **update_tenant_request** | [**UpdateTenantRequest**](UpdateTenantRequest.md)|  | 

### Return type

[**TenantResponse**](TenantResponse.md)

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

# **update_tenant_user**
> TenantUserResponse update_tenant_user(tenant_id, user_id, tenant_user_edit_request)

Update Tenant User

Update a user's role in a tenant.

Requires OWNER or ADMIN role. Cannot create a duplicate owner.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.tenant_user_edit_request import TenantUserEditRequest
from ksapi.models.tenant_user_response import TenantUserResponse
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
    api_instance = ksapi.TenantsApi(api_client)
    tenant_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    user_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    tenant_user_edit_request = ksapi.TenantUserEditRequest() # TenantUserEditRequest | 

    try:
        # Update Tenant User
        api_response = api_instance.update_tenant_user(tenant_id, user_id, tenant_user_edit_request)
        print("The response of TenantsApi->update_tenant_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TenantsApi->update_tenant_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenant_id** | **UUID**|  | 
 **user_id** | **UUID**|  | 
 **tenant_user_edit_request** | [**TenantUserEditRequest**](TenantUserEditRequest.md)|  | 

### Return type

[**TenantUserResponse**](TenantUserResponse.md)

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

# **upload_tenant_logo**
> TenantResponse upload_tenant_logo(tenant_id, file, logo_type=logo_type)

Upload Tenant Logo

Upload a branding logo (primary, dark-mode variant, or favicon).

Requires OWNER or ADMIN role.
Accepted image types: PNG, JPEG, SVG, WebP, ICO. Max 2 MB.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.branding_logo_type import BrandingLogoType
from ksapi.models.tenant_response import TenantResponse
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
    api_instance = ksapi.TenantsApi(api_client)
    tenant_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    file = None # bytes | 
    logo_type = ksapi.BrandingLogoType() # BrandingLogoType |  (optional)

    try:
        # Upload Tenant Logo
        api_response = api_instance.upload_tenant_logo(tenant_id, file, logo_type=logo_type)
        print("The response of TenantsApi->upload_tenant_logo:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TenantsApi->upload_tenant_logo: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenant_id** | **UUID**|  | 
 **file** | **bytes**|  | 
 **logo_type** | [**BrandingLogoType**](BrandingLogoType.md)|  | [optional] 

### Return type

[**TenantResponse**](TenantResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

