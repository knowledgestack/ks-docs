# ksapi.UserPermissionsApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_user_permission**](UserPermissionsApi.md#create_user_permission) | **POST** /v1/user-permissions | Create User Permission Handler
[**delete_user_permission**](UserPermissionsApi.md#delete_user_permission) | **DELETE** /v1/user-permissions/{permission_id} | Delete User Permission Handler
[**list_user_permissions**](UserPermissionsApi.md#list_user_permissions) | **GET** /v1/user-permissions | List User Permissions Handler
[**update_user_permission**](UserPermissionsApi.md#update_user_permission) | **PATCH** /v1/user-permissions/{permission_id} | Update User Permission Handler


# **create_user_permission**
> PermissionResponse create_user_permission(create_permission_request)

Create User Permission Handler

Create a path permission for a user in a tenant (admin/owner only).

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.create_permission_request import CreatePermissionRequest
from ksapi.models.permission_response import PermissionResponse
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
    api_instance = ksapi.UserPermissionsApi(api_client)
    create_permission_request = ksapi.CreatePermissionRequest() # CreatePermissionRequest | 

    try:
        # Create User Permission Handler
        api_response = api_instance.create_user_permission(create_permission_request)
        print("The response of UserPermissionsApi->create_user_permission:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserPermissionsApi->create_user_permission: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_permission_request** | [**CreatePermissionRequest**](CreatePermissionRequest.md)|  | 

### Return type

[**PermissionResponse**](PermissionResponse.md)

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

# **delete_user_permission**
> delete_user_permission(permission_id, tenant_id)

Delete User Permission Handler

Delete a path permission (admin/owner only).

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
    api_instance = ksapi.UserPermissionsApi(api_client)
    permission_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    tenant_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Tenant ID the permission belongs to

    try:
        # Delete User Permission Handler
        api_instance.delete_user_permission(permission_id, tenant_id)
    except Exception as e:
        print("Exception when calling UserPermissionsApi->delete_user_permission: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **permission_id** | **UUID**|  | 
 **tenant_id** | **UUID**| Tenant ID the permission belongs to | 

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

# **list_user_permissions**
> PaginatedResponsePermissionResponse list_user_permissions(tenant_id, user_id, sort_by=sort_by, sort_dir=sort_dir, capability=capability, limit=limit, offset=offset)

List User Permissions Handler

List path permissions for a user in a tenant (admin/owner only).

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.paginated_response_permission_response import PaginatedResponsePermissionResponse
from ksapi.models.permission_capability import PermissionCapability
from ksapi.models.sort_direction import SortDirection
from ksapi.models.user_permission_order import UserPermissionOrder
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
    api_instance = ksapi.UserPermissionsApi(api_client)
    tenant_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Tenant ID to list permissions for
    user_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | User ID to list permissions for
    sort_by = ksapi.UserPermissionOrder() # UserPermissionOrder | Field to sort permissions by (default: CREATED_AT) (optional)
    sort_dir = ksapi.SortDirection() # SortDirection | Sort direction; overrides the field's natural default (optional)
    capability = ksapi.PermissionCapability() # PermissionCapability | Filter to a single capability level (optional)
    limit = 20 # int | Number of items per page (optional) (default to 20)
    offset = 0 # int | Number of items to skip (optional) (default to 0)

    try:
        # List User Permissions Handler
        api_response = api_instance.list_user_permissions(tenant_id, user_id, sort_by=sort_by, sort_dir=sort_dir, capability=capability, limit=limit, offset=offset)
        print("The response of UserPermissionsApi->list_user_permissions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserPermissionsApi->list_user_permissions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenant_id** | **UUID**| Tenant ID to list permissions for | 
 **user_id** | **UUID**| User ID to list permissions for | 
 **sort_by** | [**UserPermissionOrder**](.md)| Field to sort permissions by (default: CREATED_AT) | [optional] 
 **sort_dir** | [**SortDirection**](.md)| Sort direction; overrides the field&#39;s natural default | [optional] 
 **capability** | [**PermissionCapability**](.md)| Filter to a single capability level | [optional] 
 **limit** | **int**| Number of items per page | [optional] [default to 20]
 **offset** | **int**| Number of items to skip | [optional] [default to 0]

### Return type

[**PaginatedResponsePermissionResponse**](PaginatedResponsePermissionResponse.md)

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

# **update_user_permission**
> PermissionResponse update_user_permission(permission_id, tenant_id, update_permission_request)

Update User Permission Handler

Update a path permission (admin/owner only).

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.permission_response import PermissionResponse
from ksapi.models.update_permission_request import UpdatePermissionRequest
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
    api_instance = ksapi.UserPermissionsApi(api_client)
    permission_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    tenant_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Tenant ID the permission belongs to
    update_permission_request = ksapi.UpdatePermissionRequest() # UpdatePermissionRequest | 

    try:
        # Update User Permission Handler
        api_response = api_instance.update_user_permission(permission_id, tenant_id, update_permission_request)
        print("The response of UserPermissionsApi->update_user_permission:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserPermissionsApi->update_user_permission: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **permission_id** | **UUID**|  | 
 **tenant_id** | **UUID**| Tenant ID the permission belongs to | 
 **update_permission_request** | [**UpdatePermissionRequest**](UpdatePermissionRequest.md)|  | 

### Return type

[**PermissionResponse**](PermissionResponse.md)

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

