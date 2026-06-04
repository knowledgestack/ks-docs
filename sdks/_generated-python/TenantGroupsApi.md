# ksapi.TenantGroupsApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_group_member**](TenantGroupsApi.md#add_group_member) | **POST** /v1/tenant-groups/{group_id}/members | Add Group Member Handler
[**create_group_permission**](TenantGroupsApi.md#create_group_permission) | **POST** /v1/tenant-groups/{group_id}/permissions | Create Group Permission Handler
[**create_tenant_group**](TenantGroupsApi.md#create_tenant_group) | **POST** /v1/tenant-groups | Create Tenant Group Handler
[**delete_group_permission**](TenantGroupsApi.md#delete_group_permission) | **DELETE** /v1/tenant-groups/{group_id}/permissions/{permission_id} | Delete Group Permission Handler
[**delete_tenant_group**](TenantGroupsApi.md#delete_tenant_group) | **DELETE** /v1/tenant-groups/{group_id} | Delete Tenant Group Handler
[**get_tenant_group**](TenantGroupsApi.md#get_tenant_group) | **GET** /v1/tenant-groups/{group_id} | Get Tenant Group Handler
[**list_group_members**](TenantGroupsApi.md#list_group_members) | **GET** /v1/tenant-groups/{group_id}/members | List Group Members Handler
[**list_group_permissions**](TenantGroupsApi.md#list_group_permissions) | **GET** /v1/tenant-groups/{group_id}/permissions | List Group Permissions Handler
[**list_my_groups**](TenantGroupsApi.md#list_my_groups) | **GET** /v1/tenant-groups/my-group | List My Groups Handler
[**list_tenant_groups**](TenantGroupsApi.md#list_tenant_groups) | **GET** /v1/tenant-groups | List Tenant Groups Handler
[**remove_group_member**](TenantGroupsApi.md#remove_group_member) | **DELETE** /v1/tenant-groups/{group_id}/members/{user_id} | Remove Group Member Handler
[**update_group_permission**](TenantGroupsApi.md#update_group_permission) | **PATCH** /v1/tenant-groups/{group_id}/permissions/{permission_id} | Update Group Permission Handler
[**update_tenant_group**](TenantGroupsApi.md#update_tenant_group) | **PATCH** /v1/tenant-groups/{group_id} | Update Tenant Group Handler


# **add_group_member**
> MembershipResponse add_group_member(group_id, add_member_request, authorization=authorization, ks_uat=ks_uat)

Add Group Member Handler

Add a user to a group (admin/owner only).

### Example


```python
import ksapi
from ksapi.models.add_member_request import AddMemberRequest
from ksapi.models.membership_response import MembershipResponse
from ksapi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8000
# See configuration.py for a list of all supported configuration parameters.
configuration = ksapi.Configuration(
    host = "http://localhost:8000"
)


# Enter a context with an instance of the API client
with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.TenantGroupsApi(api_client)
    group_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    add_member_request = ksapi.AddMemberRequest() # AddMemberRequest | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Add Group Member Handler
        api_response = api_instance.add_group_member(group_id, add_member_request, authorization=authorization, ks_uat=ks_uat)
        print("The response of TenantGroupsApi->add_group_member:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TenantGroupsApi->add_group_member: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **UUID**|  | 
 **add_member_request** | [**AddMemberRequest**](AddMemberRequest.md)|  | 
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**MembershipResponse**](MembershipResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_group_permission**
> GroupPermissionResponse create_group_permission(group_id, create_group_permission_request, authorization=authorization, ks_uat=ks_uat)

Create Group Permission Handler

Create a path permission for a group (admin/owner only).

### Example


```python
import ksapi
from ksapi.models.create_group_permission_request import CreateGroupPermissionRequest
from ksapi.models.group_permission_response import GroupPermissionResponse
from ksapi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8000
# See configuration.py for a list of all supported configuration parameters.
configuration = ksapi.Configuration(
    host = "http://localhost:8000"
)


# Enter a context with an instance of the API client
with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.TenantGroupsApi(api_client)
    group_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    create_group_permission_request = ksapi.CreateGroupPermissionRequest() # CreateGroupPermissionRequest | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Create Group Permission Handler
        api_response = api_instance.create_group_permission(group_id, create_group_permission_request, authorization=authorization, ks_uat=ks_uat)
        print("The response of TenantGroupsApi->create_group_permission:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TenantGroupsApi->create_group_permission: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **UUID**|  | 
 **create_group_permission_request** | [**CreateGroupPermissionRequest**](CreateGroupPermissionRequest.md)|  | 
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**GroupPermissionResponse**](GroupPermissionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_tenant_group**
> GroupResponse create_tenant_group(create_group_request, authorization=authorization, ks_uat=ks_uat)

Create Tenant Group Handler

Create a new tenant group (admin/owner only).

### Example


```python
import ksapi
from ksapi.models.create_group_request import CreateGroupRequest
from ksapi.models.group_response import GroupResponse
from ksapi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8000
# See configuration.py for a list of all supported configuration parameters.
configuration = ksapi.Configuration(
    host = "http://localhost:8000"
)


# Enter a context with an instance of the API client
with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.TenantGroupsApi(api_client)
    create_group_request = ksapi.CreateGroupRequest() # CreateGroupRequest | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Create Tenant Group Handler
        api_response = api_instance.create_tenant_group(create_group_request, authorization=authorization, ks_uat=ks_uat)
        print("The response of TenantGroupsApi->create_tenant_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TenantGroupsApi->create_tenant_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_group_request** | [**CreateGroupRequest**](CreateGroupRequest.md)|  | 
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**GroupResponse**](GroupResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_group_permission**
> delete_group_permission(group_id, permission_id, authorization=authorization, ks_uat=ks_uat)

Delete Group Permission Handler

Delete a path permission from a group (admin/owner only).

### Example


```python
import ksapi
from ksapi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8000
# See configuration.py for a list of all supported configuration parameters.
configuration = ksapi.Configuration(
    host = "http://localhost:8000"
)


# Enter a context with an instance of the API client
with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.TenantGroupsApi(api_client)
    group_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    permission_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Delete Group Permission Handler
        api_instance.delete_group_permission(group_id, permission_id, authorization=authorization, ks_uat=ks_uat)
    except Exception as e:
        print("Exception when calling TenantGroupsApi->delete_group_permission: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **UUID**|  | 
 **permission_id** | **UUID**|  | 
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_tenant_group**
> delete_tenant_group(group_id, authorization=authorization, ks_uat=ks_uat)

Delete Tenant Group Handler

Delete a tenant group (admin/owner only).

### Example


```python
import ksapi
from ksapi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8000
# See configuration.py for a list of all supported configuration parameters.
configuration = ksapi.Configuration(
    host = "http://localhost:8000"
)


# Enter a context with an instance of the API client
with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.TenantGroupsApi(api_client)
    group_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Delete Tenant Group Handler
        api_instance.delete_tenant_group(group_id, authorization=authorization, ks_uat=ks_uat)
    except Exception as e:
        print("Exception when calling TenantGroupsApi->delete_tenant_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **UUID**|  | 
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_tenant_group**
> GroupResponse get_tenant_group(group_id, authorization=authorization, ks_uat=ks_uat)

Get Tenant Group Handler

Get a tenant group by ID (group member or admin/owner).

### Example


```python
import ksapi
from ksapi.models.group_response import GroupResponse
from ksapi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8000
# See configuration.py for a list of all supported configuration parameters.
configuration = ksapi.Configuration(
    host = "http://localhost:8000"
)


# Enter a context with an instance of the API client
with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.TenantGroupsApi(api_client)
    group_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Get Tenant Group Handler
        api_response = api_instance.get_tenant_group(group_id, authorization=authorization, ks_uat=ks_uat)
        print("The response of TenantGroupsApi->get_tenant_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TenantGroupsApi->get_tenant_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **UUID**|  | 
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**GroupResponse**](GroupResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_group_members**
> PaginatedResponseMembershipResponse list_group_members(group_id, limit=limit, offset=offset, authorization=authorization, ks_uat=ks_uat)

List Group Members Handler

List members of a group (group members or admin/owner).

### Example


```python
import ksapi
from ksapi.models.paginated_response_membership_response import PaginatedResponseMembershipResponse
from ksapi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8000
# See configuration.py for a list of all supported configuration parameters.
configuration = ksapi.Configuration(
    host = "http://localhost:8000"
)


# Enter a context with an instance of the API client
with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.TenantGroupsApi(api_client)
    group_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    limit = 20 # int | Number of items per page (optional) (default to 20)
    offset = 0 # int | Number of items to skip (optional) (default to 0)
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # List Group Members Handler
        api_response = api_instance.list_group_members(group_id, limit=limit, offset=offset, authorization=authorization, ks_uat=ks_uat)
        print("The response of TenantGroupsApi->list_group_members:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TenantGroupsApi->list_group_members: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **UUID**|  | 
 **limit** | **int**| Number of items per page | [optional] [default to 20]
 **offset** | **int**| Number of items to skip | [optional] [default to 0]
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**PaginatedResponseMembershipResponse**](PaginatedResponseMembershipResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_group_permissions**
> PaginatedResponseGroupPermissionResponse list_group_permissions(group_id, limit=limit, offset=offset, authorization=authorization, ks_uat=ks_uat)

List Group Permissions Handler

List path permissions for a group (group member or admin/owner).

### Example


```python
import ksapi
from ksapi.models.paginated_response_group_permission_response import PaginatedResponseGroupPermissionResponse
from ksapi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8000
# See configuration.py for a list of all supported configuration parameters.
configuration = ksapi.Configuration(
    host = "http://localhost:8000"
)


# Enter a context with an instance of the API client
with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.TenantGroupsApi(api_client)
    group_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    limit = 20 # int | Number of items per page (optional) (default to 20)
    offset = 0 # int | Number of items to skip (optional) (default to 0)
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # List Group Permissions Handler
        api_response = api_instance.list_group_permissions(group_id, limit=limit, offset=offset, authorization=authorization, ks_uat=ks_uat)
        print("The response of TenantGroupsApi->list_group_permissions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TenantGroupsApi->list_group_permissions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **UUID**|  | 
 **limit** | **int**| Number of items per page | [optional] [default to 20]
 **offset** | **int**| Number of items to skip | [optional] [default to 0]
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**PaginatedResponseGroupPermissionResponse**](PaginatedResponseGroupPermissionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_my_groups**
> List[GroupResponse] list_my_groups(authorization=authorization, ks_uat=ks_uat)

List My Groups Handler

List groups the current user belongs to.

### Example


```python
import ksapi
from ksapi.models.group_response import GroupResponse
from ksapi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8000
# See configuration.py for a list of all supported configuration parameters.
configuration = ksapi.Configuration(
    host = "http://localhost:8000"
)


# Enter a context with an instance of the API client
with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.TenantGroupsApi(api_client)
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # List My Groups Handler
        api_response = api_instance.list_my_groups(authorization=authorization, ks_uat=ks_uat)
        print("The response of TenantGroupsApi->list_my_groups:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TenantGroupsApi->list_my_groups: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**List[GroupResponse]**](GroupResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_tenant_groups**
> PaginatedResponseGroupResponse list_tenant_groups(limit=limit, offset=offset, authorization=authorization, ks_uat=ks_uat)

List Tenant Groups Handler

List tenant groups.

Admin/owner see all groups; other members see only groups they belong to.

### Example


```python
import ksapi
from ksapi.models.paginated_response_group_response import PaginatedResponseGroupResponse
from ksapi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8000
# See configuration.py for a list of all supported configuration parameters.
configuration = ksapi.Configuration(
    host = "http://localhost:8000"
)


# Enter a context with an instance of the API client
with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.TenantGroupsApi(api_client)
    limit = 20 # int | Number of items per page (optional) (default to 20)
    offset = 0 # int | Number of items to skip (optional) (default to 0)
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # List Tenant Groups Handler
        api_response = api_instance.list_tenant_groups(limit=limit, offset=offset, authorization=authorization, ks_uat=ks_uat)
        print("The response of TenantGroupsApi->list_tenant_groups:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TenantGroupsApi->list_tenant_groups: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Number of items per page | [optional] [default to 20]
 **offset** | **int**| Number of items to skip | [optional] [default to 0]
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**PaginatedResponseGroupResponse**](PaginatedResponseGroupResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_group_member**
> remove_group_member(group_id, user_id, authorization=authorization, ks_uat=ks_uat)

Remove Group Member Handler

Remove a user from a group (admin/owner only).

### Example


```python
import ksapi
from ksapi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8000
# See configuration.py for a list of all supported configuration parameters.
configuration = ksapi.Configuration(
    host = "http://localhost:8000"
)


# Enter a context with an instance of the API client
with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.TenantGroupsApi(api_client)
    group_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    user_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Remove Group Member Handler
        api_instance.remove_group_member(group_id, user_id, authorization=authorization, ks_uat=ks_uat)
    except Exception as e:
        print("Exception when calling TenantGroupsApi->remove_group_member: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **UUID**|  | 
 **user_id** | **UUID**|  | 
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_group_permission**
> GroupPermissionResponse update_group_permission(group_id, permission_id, update_group_permission_request, authorization=authorization, ks_uat=ks_uat)

Update Group Permission Handler

Update a path permission for a group (admin/owner only).

### Example


```python
import ksapi
from ksapi.models.group_permission_response import GroupPermissionResponse
from ksapi.models.update_group_permission_request import UpdateGroupPermissionRequest
from ksapi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8000
# See configuration.py for a list of all supported configuration parameters.
configuration = ksapi.Configuration(
    host = "http://localhost:8000"
)


# Enter a context with an instance of the API client
with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.TenantGroupsApi(api_client)
    group_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    permission_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    update_group_permission_request = ksapi.UpdateGroupPermissionRequest() # UpdateGroupPermissionRequest | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Update Group Permission Handler
        api_response = api_instance.update_group_permission(group_id, permission_id, update_group_permission_request, authorization=authorization, ks_uat=ks_uat)
        print("The response of TenantGroupsApi->update_group_permission:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TenantGroupsApi->update_group_permission: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **UUID**|  | 
 **permission_id** | **UUID**|  | 
 **update_group_permission_request** | [**UpdateGroupPermissionRequest**](UpdateGroupPermissionRequest.md)|  | 
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**GroupPermissionResponse**](GroupPermissionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_tenant_group**
> GroupResponse update_tenant_group(group_id, update_group_request, authorization=authorization, ks_uat=ks_uat)

Update Tenant Group Handler

Update a tenant group (admin/owner only).

### Example


```python
import ksapi
from ksapi.models.group_response import GroupResponse
from ksapi.models.update_group_request import UpdateGroupRequest
from ksapi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8000
# See configuration.py for a list of all supported configuration parameters.
configuration = ksapi.Configuration(
    host = "http://localhost:8000"
)


# Enter a context with an instance of the API client
with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.TenantGroupsApi(api_client)
    group_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    update_group_request = ksapi.UpdateGroupRequest() # UpdateGroupRequest | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Update Tenant Group Handler
        api_response = api_instance.update_tenant_group(group_id, update_group_request, authorization=authorization, ks_uat=ks_uat)
        print("The response of TenantGroupsApi->update_tenant_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TenantGroupsApi->update_tenant_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **UUID**|  | 
 **update_group_request** | [**UpdateGroupRequest**](UpdateGroupRequest.md)|  | 
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**GroupResponse**](GroupResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

