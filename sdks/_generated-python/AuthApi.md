# ksapi.AuthApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**change_phone_number**](AuthApi.md#change_phone_number) | **PUT** /v1/auth/pw/me/phone_number | Change Phone Number Handler
[**create_password_user**](AuthApi.md#create_password_user) | **POST** /v1/auth/pw/user | Create Password User Handler
[**create_phone_password_user**](AuthApi.md#create_phone_password_user) | **POST** /v1/auth/pw/phone_user | Create Phone Password User Handler
[**fanwei_directory_sync**](AuthApi.md#fanwei_directory_sync) | **POST** /v1/auth/sso/{tenant_id}/directory_sync | Directory Sync Handler
[**fanwei_directory_sync_0**](AuthApi.md#fanwei_directory_sync_0) | **POST** /v1/auth/sso/{tenant_id}/directory_sync | Directory Sync Handler
[**initiate_sso**](AuthApi.md#initiate_sso) | **POST** /v1/auth/sso/initiate | Initiate Sso Handler
[**oauth2_callback**](AuthApi.md#oauth2_callback) | **GET** /v1/auth/sso/oauth2/callback | Oauth2 Callback Handler
[**pw_email_verification**](AuthApi.md#pw_email_verification) | **POST** /v1/auth/pw/email_verification | Pw Email Verification Handler
[**pw_phone_verification**](AuthApi.md#pw_phone_verification) | **POST** /v1/auth/pw/phone_verification | Pw Phone Verification Handler
[**pw_signin**](AuthApi.md#pw_signin) | **POST** /v1/auth/pw/signin | Signin Handler
[**refresh_uat**](AuthApi.md#refresh_uat) | **POST** /v1/auth/uat | Refresh Uat Handler
[**request_phone_change**](AuthApi.md#request_phone_change) | **POST** /v1/auth/pw/me/phone_number/verify | Request Phone Change Handler
[**reset_password**](AuthApi.md#reset_password) | **POST** /v1/auth/pw/reset | Reset Password Handler
[**reset_password_with_token**](AuthApi.md#reset_password_with_token) | **POST** /v1/auth/pw/reset_with_token | Reset Password With Token Handler
[**send_pw_reset_email**](AuthApi.md#send_pw_reset_email) | **POST** /v1/auth/pw/send_reset_email | Send Pw Reset Email Handler
[**signout**](AuthApi.md#signout) | **POST** /v1/auth/signout | Signout Handler
[**sso_signin**](AuthApi.md#sso_signin) | **GET** /v1/auth/sso/{tenant_id}/signin | Sso Login Handler
[**validate_pw_reset_code**](AuthApi.md#validate_pw_reset_code) | **POST** /v1/auth/pw/validate_reset_code | Validate Reset Code Handler


# **change_phone_number**
> UserResponse change_phone_number(change_phone_number_request, authorization=authorization, ks_uat=ks_uat)

Change Phone Number Handler

Apply a verified phone-number change to the authenticated user.

The new phone is read from the Redis validation record pinned by
``/me/phone_number/verify``.

### Example


```python
import ksapi
from ksapi.models.change_phone_number_request import ChangePhoneNumberRequest
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
    api_instance = ksapi.AuthApi(api_client)
    change_phone_number_request = ksapi.ChangePhoneNumberRequest() # ChangePhoneNumberRequest | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Change Phone Number Handler
        api_response = api_instance.change_phone_number(change_phone_number_request, authorization=authorization, ks_uat=ks_uat)
        print("The response of AuthApi->change_phone_number:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthApi->change_phone_number: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **change_phone_number_request** | [**ChangePhoneNumberRequest**](ChangePhoneNumberRequest.md)|  | 
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

# **create_password_user**
> UserResponse create_password_user(create_password_user_request)

Create Password User Handler

### Example


```python
import ksapi
from ksapi.models.create_password_user_request import CreatePasswordUserRequest
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
    api_instance = ksapi.AuthApi(api_client)
    create_password_user_request = ksapi.CreatePasswordUserRequest() # CreatePasswordUserRequest | 

    try:
        # Create Password User Handler
        api_response = api_instance.create_password_user(create_password_user_request)
        print("The response of AuthApi->create_password_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthApi->create_password_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_password_user_request** | [**CreatePasswordUserRequest**](CreatePasswordUserRequest.md)|  | 

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
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_phone_password_user**
> UserResponse create_phone_password_user(create_phone_password_user_request)

Create Phone Password User Handler

Complete phone-based signup using a verified validation code.

The phone number is read from the Redis validation record — it was
pinned there by ``/phone_verification`` — so the client cannot
submit a different phone here than the one it just proved ownership
of.

### Example


```python
import ksapi
from ksapi.models.create_phone_password_user_request import CreatePhonePasswordUserRequest
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
    api_instance = ksapi.AuthApi(api_client)
    create_phone_password_user_request = ksapi.CreatePhonePasswordUserRequest() # CreatePhonePasswordUserRequest | 

    try:
        # Create Phone Password User Handler
        api_response = api_instance.create_phone_password_user(create_phone_password_user_request)
        print("The response of AuthApi->create_phone_password_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthApi->create_phone_password_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_phone_password_user_request** | [**CreatePhonePasswordUserRequest**](CreatePhonePasswordUserRequest.md)|  | 

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
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fanwei_directory_sync**
> DirectorySyncResponse fanwei_directory_sync(tenant_id, authorization=authorization, ks_uat=ks_uat)

Directory Sync Handler

Trigger directory synchronization for a FanWei E9 tenant.

Accepts either:
- A logged-in OWNER/ADMIN user (via UAT cookie)
- An admin API key (via Authorization: Bearer header)

### Example


```python
import ksapi
from ksapi.models.directory_sync_response import DirectorySyncResponse
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
    api_instance = ksapi.AuthApi(api_client)
    tenant_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Directory Sync Handler
        api_response = api_instance.fanwei_directory_sync(tenant_id, authorization=authorization, ks_uat=ks_uat)
        print("The response of AuthApi->fanwei_directory_sync:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthApi->fanwei_directory_sync: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenant_id** | **UUID**|  | 
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**DirectorySyncResponse**](DirectorySyncResponse.md)

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

# **fanwei_directory_sync_0**
> DirectorySyncResponse fanwei_directory_sync_0(tenant_id, authorization=authorization, ks_uat=ks_uat)

Directory Sync Handler

Trigger directory synchronization for a FanWei E9 tenant.

Accepts either:
- A logged-in OWNER/ADMIN user (via UAT cookie)
- An admin API key (via Authorization: Bearer header)

### Example


```python
import ksapi
from ksapi.models.directory_sync_response import DirectorySyncResponse
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
    api_instance = ksapi.AuthApi(api_client)
    tenant_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Directory Sync Handler
        api_response = api_instance.fanwei_directory_sync_0(tenant_id, authorization=authorization, ks_uat=ks_uat)
        print("The response of AuthApi->fanwei_directory_sync_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthApi->fanwei_directory_sync_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenant_id** | **UUID**|  | 
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**DirectorySyncResponse**](DirectorySyncResponse.md)

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

# **initiate_sso**
> SSOInitiateResponse initiate_sso(provider, tenant_id=tenant_id)

Initiate Sso Handler

Initiate SSO with the given provider and tenant ID.

### Example


```python
import ksapi
from ksapi.models.idp_type import IdpType
from ksapi.models.sso_initiate_response import SSOInitiateResponse
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
    api_instance = ksapi.AuthApi(api_client)
    provider = ksapi.IdpType() # IdpType | Provider to initiate SSO with
    tenant_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Tenant ID to initiate SSO with (optional)

    try:
        # Initiate Sso Handler
        api_response = api_instance.initiate_sso(provider, tenant_id=tenant_id)
        print("The response of AuthApi->initiate_sso:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthApi->initiate_sso: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **provider** | [**IdpType**](.md)| Provider to initiate SSO with | 
 **tenant_id** | **UUID**| Tenant ID to initiate SSO with | [optional] 

### Return type

[**SSOInitiateResponse**](SSOInitiateResponse.md)

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

# **oauth2_callback**
> UserResponse oauth2_callback(provider, code=code, state=state, error=error, error_description=error_description, tenant_id=tenant_id)

Oauth2 Callback Handler

Handle OAuth2 callback from the given OAuth client.

### Example


```python
import ksapi
from ksapi.models.idp_type import IdpType
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
    api_instance = ksapi.AuthApi(api_client)
    provider = ksapi.IdpType() # IdpType | Provider to initiate SSO with
    code = 'code_example' # str | Authorization code from provider (optional)
    state = 'state_example' # str | State parameter for CSRF protection (optional)
    error = 'error_example' # str | Error code if authorization failed (optional)
    error_description = 'error_description_example' # str | Error description (optional)
    tenant_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Tenant ID to initiate SSO with (optional)

    try:
        # Oauth2 Callback Handler
        api_response = api_instance.oauth2_callback(provider, code=code, state=state, error=error, error_description=error_description, tenant_id=tenant_id)
        print("The response of AuthApi->oauth2_callback:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthApi->oauth2_callback: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **provider** | [**IdpType**](.md)| Provider to initiate SSO with | 
 **code** | **str**| Authorization code from provider | [optional] 
 **state** | **str**| State parameter for CSRF protection | [optional] 
 **error** | **str**| Error code if authorization failed | [optional] 
 **error_description** | **str**| Error description | [optional] 
 **tenant_id** | **UUID**| Tenant ID to initiate SSO with | [optional] 

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

# **pw_email_verification**
> EmailSentResponse pw_email_verification(email_verification_request)

Pw Email Verification Handler

Send password user email verification email.

This endpoint is the first step in the password user creation process.
The user receives an email with a link to create their account.

### Example


```python
import ksapi
from ksapi.models.email_sent_response import EmailSentResponse
from ksapi.models.email_verification_request import EmailVerificationRequest
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
    api_instance = ksapi.AuthApi(api_client)
    email_verification_request = ksapi.EmailVerificationRequest() # EmailVerificationRequest | 

    try:
        # Pw Email Verification Handler
        api_response = api_instance.pw_email_verification(email_verification_request)
        print("The response of AuthApi->pw_email_verification:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthApi->pw_email_verification: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email_verification_request** | [**EmailVerificationRequest**](EmailVerificationRequest.md)|  | 

### Return type

[**EmailSentResponse**](EmailSentResponse.md)

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

# **pw_phone_verification**
> PhoneValidationResponse pw_phone_verification(phone_verification_request)

Pw Phone Verification Handler

Send a 6-digit signup verification code to ``phone_number``.

Rejects (409) if a user already exists for this phone — this leaks
enumeration but matches the duplicate-signup UX of the email flow.

### Example


```python
import ksapi
from ksapi.models.phone_validation_response import PhoneValidationResponse
from ksapi.models.phone_verification_request import PhoneVerificationRequest
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
    api_instance = ksapi.AuthApi(api_client)
    phone_verification_request = ksapi.PhoneVerificationRequest() # PhoneVerificationRequest | 

    try:
        # Pw Phone Verification Handler
        api_response = api_instance.pw_phone_verification(phone_verification_request)
        print("The response of AuthApi->pw_phone_verification:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthApi->pw_phone_verification: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phone_verification_request** | [**PhoneVerificationRequest**](PhoneVerificationRequest.md)|  | 

### Return type

[**PhoneValidationResponse**](PhoneValidationResponse.md)

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

# **pw_signin**
> UserResponse pw_signin(sign_in_request)

Signin Handler

Validate password credentials and redirect to callback.

This endpoint validates the user's credentials and stores the user ID
in the session, then redirects to /auth/callback?method=pw to maintain
consistency with OAuth flows.

### Example


```python
import ksapi
from ksapi.models.sign_in_request import SignInRequest
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
    api_instance = ksapi.AuthApi(api_client)
    sign_in_request = ksapi.SignInRequest() # SignInRequest | 

    try:
        # Signin Handler
        api_response = api_instance.pw_signin(sign_in_request)
        print("The response of AuthApi->pw_signin:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthApi->pw_signin: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sign_in_request** | [**SignInRequest**](SignInRequest.md)|  | 

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

# **refresh_uat**
> UserResponse refresh_uat(tenant_id=tenant_id, authorization=authorization, ks_uat=ks_uat)

Refresh Uat Handler

Refresh or switch the user's active tenant token.

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
    api_instance = ksapi.AuthApi(api_client)
    tenant_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Target tenant ID to switch to. None=refresh current tenant (optional)
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Refresh Uat Handler
        api_response = api_instance.refresh_uat(tenant_id=tenant_id, authorization=authorization, ks_uat=ks_uat)
        print("The response of AuthApi->refresh_uat:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthApi->refresh_uat: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenant_id** | **UUID**| Target tenant ID to switch to. None&#x3D;refresh current tenant | [optional] 
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

# **request_phone_change**
> PhoneValidationResponse request_phone_change(request_phone_change_request, authorization=authorization, ks_uat=ks_uat)

Request Phone Change Handler

Dispatch an SMS code to authorize a phone-number change.

Confirms the new phone isn't already taken by *another* user. The
caller is identified by their UAT, so authentication is required.

### Example


```python
import ksapi
from ksapi.models.phone_validation_response import PhoneValidationResponse
from ksapi.models.request_phone_change_request import RequestPhoneChangeRequest
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
    api_instance = ksapi.AuthApi(api_client)
    request_phone_change_request = ksapi.RequestPhoneChangeRequest() # RequestPhoneChangeRequest | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Request Phone Change Handler
        api_response = api_instance.request_phone_change(request_phone_change_request, authorization=authorization, ks_uat=ks_uat)
        print("The response of AuthApi->request_phone_change:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthApi->request_phone_change: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request_phone_change_request** | [**RequestPhoneChangeRequest**](RequestPhoneChangeRequest.md)|  | 
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**PhoneValidationResponse**](PhoneValidationResponse.md)

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

# **reset_password**
> UserResponse reset_password(password_reset_request, authorization=authorization, ks_uat=ks_uat)

Reset Password Handler

Reset password for the authenticated user

### Example


```python
import ksapi
from ksapi.models.password_reset_request import PasswordResetRequest
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
    api_instance = ksapi.AuthApi(api_client)
    password_reset_request = ksapi.PasswordResetRequest() # PasswordResetRequest | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Reset Password Handler
        api_response = api_instance.reset_password(password_reset_request, authorization=authorization, ks_uat=ks_uat)
        print("The response of AuthApi->reset_password:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthApi->reset_password: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **password_reset_request** | [**PasswordResetRequest**](PasswordResetRequest.md)|  | 
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

# **reset_password_with_token**
> UserResponse reset_password_with_token(password_reset_with_token_request)

Reset Password With Token Handler

Reset password with a single-use PasswordResetToken JWT

### Example


```python
import ksapi
from ksapi.models.password_reset_with_token_request import PasswordResetWithTokenRequest
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
    api_instance = ksapi.AuthApi(api_client)
    password_reset_with_token_request = ksapi.PasswordResetWithTokenRequest() # PasswordResetWithTokenRequest | 

    try:
        # Reset Password With Token Handler
        api_response = api_instance.reset_password_with_token(password_reset_with_token_request)
        print("The response of AuthApi->reset_password_with_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthApi->reset_password_with_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **password_reset_with_token_request** | [**PasswordResetWithTokenRequest**](PasswordResetWithTokenRequest.md)|  | 

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

# **send_pw_reset_email**
> ResponseSendPwResetEmail send_pw_reset_email(send_password_reset_request)

Send Pw Reset Email Handler

Initiate a password reset via the requested ``method``.

``method=EMAIL`` (default) mints a ``PasswordResetToken`` and sends
the existing reset email. ``method=SMS`` looks up the user by
phone, dispatches an SMS verification code, and the caller must
follow up with ``/validate_reset_code``.

### Example


```python
import ksapi
from ksapi.models.response_send_pw_reset_email import ResponseSendPwResetEmail
from ksapi.models.send_password_reset_request import SendPasswordResetRequest
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
    api_instance = ksapi.AuthApi(api_client)
    send_password_reset_request = ksapi.SendPasswordResetRequest() # SendPasswordResetRequest | 

    try:
        # Send Pw Reset Email Handler
        api_response = api_instance.send_pw_reset_email(send_password_reset_request)
        print("The response of AuthApi->send_pw_reset_email:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthApi->send_pw_reset_email: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **send_password_reset_request** | [**SendPasswordResetRequest**](SendPasswordResetRequest.md)|  | 

### Return type

[**ResponseSendPwResetEmail**](ResponseSendPwResetEmail.md)

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

# **signout**
> object signout()

Signout Handler

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
    api_instance = ksapi.AuthApi(api_client)

    try:
        # Signout Handler
        api_response = api_instance.signout()
        print("The response of AuthApi->signout:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthApi->signout: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sso_signin**
> sso_signin(tenant_id, redirect=redirect)

Sso Login Handler

SSO login endpoint.

Resolves the tenant's IdP configuration and dispatches to the
appropriate provider-specific handler. Sets the UAT cookie and
redirects to the frontend.

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
    api_instance = ksapi.AuthApi(api_client)
    tenant_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    redirect = '' # str | Post-login redirect path (optional) (default to '')

    try:
        # Sso Login Handler
        api_instance.sso_signin(tenant_id, redirect=redirect)
    except Exception as e:
        print("Exception when calling AuthApi->sso_signin: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenant_id** | **UUID**|  | 
 **redirect** | **str**| Post-login redirect path | [optional] [default to &#39;&#39;]

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
**307** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **validate_pw_reset_code**
> PasswordResetTokenResponse validate_pw_reset_code(validate_reset_code_request)

Validate Reset Code Handler

Validate an SMS reset code and return a single-use reset JWT.

### Example


```python
import ksapi
from ksapi.models.password_reset_token_response import PasswordResetTokenResponse
from ksapi.models.validate_reset_code_request import ValidateResetCodeRequest
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
    api_instance = ksapi.AuthApi(api_client)
    validate_reset_code_request = ksapi.ValidateResetCodeRequest() # ValidateResetCodeRequest | 

    try:
        # Validate Reset Code Handler
        api_response = api_instance.validate_pw_reset_code(validate_reset_code_request)
        print("The response of AuthApi->validate_pw_reset_code:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthApi->validate_pw_reset_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **validate_reset_code_request** | [**ValidateResetCodeRequest**](ValidateResetCodeRequest.md)|  | 

### Return type

[**PasswordResetTokenResponse**](PasswordResetTokenResponse.md)

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

