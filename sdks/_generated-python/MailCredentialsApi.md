# ksapi.MailCredentialsApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_mail_credential**](MailCredentialsApi.md#create_mail_credential) | **POST** /v1/mail-credentials | Create Mail Credential Handler
[**get_mail_credential**](MailCredentialsApi.md#get_mail_credential) | **GET** /v1/mail-credentials/{credential_id} | Get Mail Credential Handler
[**list_mail_credential_options**](MailCredentialsApi.md#list_mail_credential_options) | **GET** /v1/mail-credentials/options | List Mail Credential Options Handler
[**list_mail_credentials**](MailCredentialsApi.md#list_mail_credentials) | **GET** /v1/mail-credentials | List Mail Credentials Handler
[**retire_mail_credential**](MailCredentialsApi.md#retire_mail_credential) | **DELETE** /v1/mail-credentials/{credential_id} | Retire Mail Credential Handler
[**rotate_mail_credential**](MailCredentialsApi.md#rotate_mail_credential) | **POST** /v1/mail-credentials/{credential_id}/rotate | Rotate Mail Credential Handler
[**update_mail_credential**](MailCredentialsApi.md#update_mail_credential) | **PATCH** /v1/mail-credentials/{credential_id} | Update Mail Credential Handler


# **create_mail_credential**
> MailCredentialResponse create_mail_credential(create_mail_credential_request)

**Synchronous variant:** `create_mail_credential_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Create Mail Credential Handler

Register an application for this workspace. OWNER/ADMIN.

The callback stored on the row is this workspace's, computed here once:
the provider compares it character for character, so a later
``FRONTEND_URL`` change must not move an existing registration off the
string it was registered with.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.create_mail_credential_request import CreateMailCredentialRequest
from ksapi.models.mail_credential_response import MailCredentialResponse
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
async with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.MailCredentialsApi(api_client)
    create_mail_credential_request = ksapi.CreateMailCredentialRequest() # CreateMailCredentialRequest | 

    try:
        # Create Mail Credential Handler
        api_response = await api_instance.create_mail_credential(create_mail_credential_request)
        print("The response of MailCredentialsApi->create_mail_credential:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MailCredentialsApi->create_mail_credential: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_mail_credential_request** | [**CreateMailCredentialRequest**](CreateMailCredentialRequest.md)|  | 

### Return type

[**MailCredentialResponse**](MailCredentialResponse.md)

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

# **get_mail_credential**
> MailCredentialResponse get_mail_credential(credential_id)

**Synchronous variant:** `get_mail_credential_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Get Mail Credential Handler

One registration as an admin sees it. OWNER/ADMIN.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.mail_credential_response import MailCredentialResponse
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
async with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.MailCredentialsApi(api_client)
    credential_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Registration id

    try:
        # Get Mail Credential Handler
        api_response = await api_instance.get_mail_credential(credential_id)
        print("The response of MailCredentialsApi->get_mail_credential:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MailCredentialsApi->get_mail_credential: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **credential_id** | **UUID**| Registration id | 

### Return type

[**MailCredentialResponse**](MailCredentialResponse.md)

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

# **list_mail_credential_options**
> List[MailCredentialOption] list_mail_credential_options()

**Synchronous variant:** `list_mail_credential_options_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

List Mail Credential Options Handler

What a member picks a registration from. Any member of the workspace.

Name and provider, nothing else. Adding a mailbox needs write access to a
folder, not a tenant role, so gating this on OWNER/ADMIN would leave
exactly the caller who is allowed to add one unable to say which
registration it belongs to — while the ids and the secret stay where only
an admin can see them.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.mail_credential_option import MailCredentialOption
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
async with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.MailCredentialsApi(api_client)

    try:
        # List Mail Credential Options Handler
        api_response = await api_instance.list_mail_credential_options()
        print("The response of MailCredentialsApi->list_mail_credential_options:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MailCredentialsApi->list_mail_credential_options: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[MailCredentialOption]**](MailCredentialOption.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_mail_credentials**
> MailCredentialListResponse list_mail_credentials()

**Synchronous variant:** `list_mail_credentials_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

List Mail Credentials Handler

Every registration this workspace holds. OWNER/ADMIN.

``redirect_uri`` is on the envelope because it is needed **before** the
first row exists: registering the application in the customer's own
directory is what has to happen first, and it takes this string.

A member who only has to pick one reads ``/options`` instead, which carries
no ids at all.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.mail_credential_list_response import MailCredentialListResponse
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
async with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.MailCredentialsApi(api_client)

    try:
        # List Mail Credentials Handler
        api_response = await api_instance.list_mail_credentials()
        print("The response of MailCredentialsApi->list_mail_credentials:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MailCredentialsApi->list_mail_credentials: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**MailCredentialListResponse**](MailCredentialListResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retire_mail_credential**
> RetireMailCredentialResponse retire_mail_credential(credential_id)

**Synchronous variant:** `retire_mail_credential_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Retire Mail Credential Handler

Delete this registration and stop the mailboxes on it. OWNER/ADMIN.

A real delete with no undo. Each mailbox that authenticated with it is
severed from it and moved to DISABLED: it keeps its mail, and it can never
sync again, because the only thing it could have authenticated with is
gone. Creating a new mailbox takes a new registration.

The recurrences come down after the transaction, not inside it. A schedule
torn down for a mailbox whose delete then rolled back would stop syncing
while still reporting itself healthy; a schedule left standing for a
mailbox that is already DISABLED merely starts a run that refuses itself.
The second is the better failure.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.retire_mail_credential_response import RetireMailCredentialResponse
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
async with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.MailCredentialsApi(api_client)
    credential_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Registration id

    try:
        # Retire Mail Credential Handler
        api_response = await api_instance.retire_mail_credential(credential_id)
        print("The response of MailCredentialsApi->retire_mail_credential:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MailCredentialsApi->retire_mail_credential: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **credential_id** | **UUID**| Registration id | 

### Return type

[**RetireMailCredentialResponse**](RetireMailCredentialResponse.md)

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

# **rotate_mail_credential**
> RotateMailCredentialResponse rotate_mail_credential(credential_id, rotate_mail_credential_request)

**Synchronous variant:** `rotate_mail_credential_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Rotate Mail Credential Handler

Replace this registration's secret. OWNER/ADMIN.

One write now, where it used to be one per mailbox. What still happens per
mailbox is the consequence: one parked on NEEDS_REAUTH is released to
FAILED, because an expired secret and a withdrawn consent are
indistinguishable at refresh time and only the next run can tell which this
was.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.rotate_mail_credential_request import RotateMailCredentialRequest
from ksapi.models.rotate_mail_credential_response import RotateMailCredentialResponse
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
async with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.MailCredentialsApi(api_client)
    credential_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Registration id
    rotate_mail_credential_request = ksapi.RotateMailCredentialRequest() # RotateMailCredentialRequest | 

    try:
        # Rotate Mail Credential Handler
        api_response = await api_instance.rotate_mail_credential(credential_id, rotate_mail_credential_request)
        print("The response of MailCredentialsApi->rotate_mail_credential:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MailCredentialsApi->rotate_mail_credential: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **credential_id** | **UUID**| Registration id | 
 **rotate_mail_credential_request** | [**RotateMailCredentialRequest**](RotateMailCredentialRequest.md)|  | 

### Return type

[**RotateMailCredentialResponse**](RotateMailCredentialResponse.md)

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

# **update_mail_credential**
> MailCredentialResponse update_mail_credential(credential_id, update_mail_credential_request)

**Synchronous variant:** `update_mail_credential_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Update Mail Credential Handler

Correct a registration. OWNER/ADMIN.

The label is always editable. Which application it names is editable only
while no mailbox points here: a mailbox's grant is a refresh token issued
to one client in one directory, so moving a registration in use would
leave every mailbox on it unable to refresh. Before the first mailbox
there is nothing to break, and refusing would leave retire-and-recreate as
the only way to fix a typo.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.mail_credential_response import MailCredentialResponse
from ksapi.models.update_mail_credential_request import UpdateMailCredentialRequest
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
async with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.MailCredentialsApi(api_client)
    credential_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Registration id
    update_mail_credential_request = ksapi.UpdateMailCredentialRequest() # UpdateMailCredentialRequest | 

    try:
        # Update Mail Credential Handler
        api_response = await api_instance.update_mail_credential(credential_id, update_mail_credential_request)
        print("The response of MailCredentialsApi->update_mail_credential:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MailCredentialsApi->update_mail_credential: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **credential_id** | **UUID**| Registration id | 
 **update_mail_credential_request** | [**UpdateMailCredentialRequest**](UpdateMailCredentialRequest.md)|  | 

### Return type

[**MailCredentialResponse**](MailCredentialResponse.md)

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

