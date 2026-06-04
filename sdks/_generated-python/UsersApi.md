# ksapi.UsersApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_me**](UsersApi.md#get_me) | **GET** /v1/users/me | Get Me Handler
[**skip_onboarding**](UsersApi.md#skip_onboarding) | **POST** /v1/users/me/onboarding/skip | Skip Onboarding Handler
[**update_me**](UsersApi.md#update_me) | **PATCH** /v1/users | Update Me Handler
[**update_onboarding_company**](UsersApi.md#update_onboarding_company) | **PATCH** /v1/users/me/onboarding/company | Update Onboarding Company Handler
[**update_onboarding_profile**](UsersApi.md#update_onboarding_profile) | **PATCH** /v1/users/me/onboarding/profile | Update Onboarding Profile Handler


# **get_me**
> UserResponse get_me(authorization=authorization, ks_uat=ks_uat)

Get Me Handler

Get current user information including current tenant context.

Returns the authenticated user's profile along with their current tenant ID
(from the UAT token) and default tenant ID (from user record).

### Example


```python
import ksapi
from ksapi.models.user_response import UserResponse
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
    api_instance = ksapi.UsersApi(api_client)
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Get Me Handler
        api_response = api_instance.get_me(authorization=authorization, ks_uat=ks_uat)
        print("The response of UsersApi->get_me:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->get_me: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**UserResponse**](UserResponse.md)

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

# **skip_onboarding**
> UserResponse skip_onboarding(authorization=authorization, ks_uat=ks_uat)

Skip Onboarding Handler

Mark onboarding complete without writing any profile/company fields.

Idempotent — calling this after onboarding is already complete returns
the current state unchanged (the CRUD only stamps the timestamp when
it is NULL).

### Example


```python
import ksapi
from ksapi.models.user_response import UserResponse
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
    api_instance = ksapi.UsersApi(api_client)
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Skip Onboarding Handler
        api_response = api_instance.skip_onboarding(authorization=authorization, ks_uat=ks_uat)
        print("The response of UsersApi->skip_onboarding:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->skip_onboarding: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**UserResponse**](UserResponse.md)

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

# **update_me**
> UserResponse update_me(update_user_request, authorization=authorization, ks_uat=ks_uat)

Update Me Handler

Update the user's profile (default tenant, name fields).

When updating default_tenant_id, the user must belong to the specified tenant.

### Example


```python
import ksapi
from ksapi.models.update_user_request import UpdateUserRequest
from ksapi.models.user_response import UserResponse
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
    api_instance = ksapi.UsersApi(api_client)
    update_user_request = ksapi.UpdateUserRequest() # UpdateUserRequest | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Update Me Handler
        api_response = api_instance.update_me(update_user_request, authorization=authorization, ks_uat=ks_uat)
        print("The response of UsersApi->update_me:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->update_me: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **update_user_request** | [**UpdateUserRequest**](UpdateUserRequest.md)|  | 
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**UserResponse**](UserResponse.md)

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

# **update_onboarding_company**
> UserResponse update_onboarding_company(onboarding_company_request, authorization=authorization, ks_uat=ks_uat)

Update Onboarding Company Handler

Step 1 of onboarding: tenant-wide company info.

Writes ``industry`` and ``description`` into the current tenant's
settings JSONB. Restricted to OWNER and ADMIN — invited USERs see a
pre-filled, read-only step on the frontend instead.

Does not mark onboarding complete; the user finishes via the profile
step. Re-running while the wizard is still open overwrites prior
values; once onboarding has been completed/skipped, this endpoint
returns 409. Post-onboarding edits go through PATCH /v1/tenants/{id}.

### Example


```python
import ksapi
from ksapi.models.onboarding_company_request import OnboardingCompanyRequest
from ksapi.models.user_response import UserResponse
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
    api_instance = ksapi.UsersApi(api_client)
    onboarding_company_request = ksapi.OnboardingCompanyRequest() # OnboardingCompanyRequest | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Update Onboarding Company Handler
        api_response = api_instance.update_onboarding_company(onboarding_company_request, authorization=authorization, ks_uat=ks_uat)
        print("The response of UsersApi->update_onboarding_company:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->update_onboarding_company: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **onboarding_company_request** | [**OnboardingCompanyRequest**](OnboardingCompanyRequest.md)|  | 
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**UserResponse**](UserResponse.md)

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

# **update_onboarding_profile**
> UserResponse update_onboarding_profile(onboarding_profile_request, authorization=authorization, ks_uat=ks_uat)

Update Onboarding Profile Handler

Step 2 (final) of onboarding: per-user profile for the current tenant.

Writes name to the User row (global) and job_title to the TenantUser
row (per-tenant), then stamps ``onboarding_completed_at`` on the
membership. Returns 409 if onboarding has already been completed or
skipped — post-onboarding edits go through PATCH /v1/users (name) or
a future per-membership profile endpoint (job_title).

### Example


```python
import ksapi
from ksapi.models.onboarding_profile_request import OnboardingProfileRequest
from ksapi.models.user_response import UserResponse
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
    api_instance = ksapi.UsersApi(api_client)
    onboarding_profile_request = ksapi.OnboardingProfileRequest() # OnboardingProfileRequest | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Update Onboarding Profile Handler
        api_response = api_instance.update_onboarding_profile(onboarding_profile_request, authorization=authorization, ks_uat=ks_uat)
        print("The response of UsersApi->update_onboarding_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->update_onboarding_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **onboarding_profile_request** | [**OnboardingProfileRequest**](OnboardingProfileRequest.md)|  | 
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**UserResponse**](UserResponse.md)

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

