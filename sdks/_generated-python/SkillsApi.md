# ksapi.SkillsApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activate_skill_version**](SkillsApi.md#activate_skill_version) | **POST** /v1/skills/{skill_id}/versions/{version_id}/activate | Activate Skill Version Handler
[**checkin_skill**](SkillsApi.md#checkin_skill) | **POST** /v1/skills/{skill_id}/checkin | Checkin Skill Handler
[**checkout_skill**](SkillsApi.md#checkout_skill) | **POST** /v1/skills/{skill_id}/checkout | Checkout Skill Handler
[**create_skill**](SkillsApi.md#create_skill) | **POST** /v1/skills | Create Skill Handler
[**delete_skill**](SkillsApi.md#delete_skill) | **DELETE** /v1/skills/{skill_id} | Delete Skill Handler
[**discard_skill_draft**](SkillsApi.md#discard_skill_draft) | **POST** /v1/skills/{skill_id}/discard-draft | Discard Skill Draft Handler
[**export_skill**](SkillsApi.md#export_skill) | **GET** /v1/skills/{skill_id}/export | Export Skill Handler
[**get_skill**](SkillsApi.md#get_skill) | **GET** /v1/skills/{skill_id} | Get Skill Handler
[**import_skill**](SkillsApi.md#import_skill) | **POST** /v1/skills/import | Import Skill Handler
[**list_skill_versions**](SkillsApi.md#list_skill_versions) | **GET** /v1/skills/{skill_id}/versions | List Skill Versions Handler
[**list_skills**](SkillsApi.md#list_skills) | **GET** /v1/skills | List Skills Handler
[**publish_skill_version**](SkillsApi.md#publish_skill_version) | **POST** /v1/skills/{skill_id}/versions | Publish Skill Version Handler
[**search_skills**](SkillsApi.md#search_skills) | **POST** /v1/skills/search | Search Skills Handler
[**update_skill**](SkillsApi.md#update_skill) | **PATCH** /v1/skills/{skill_id} | Update Skill Handler


# **activate_skill_version**
> SkillResponse activate_skill_version(skill_id, version_id, activate_skill_version_request)

Activate Skill Version Handler

Activate a published version, restoring the working copy to it.

Requires a held checkout (it overwrites the working copy).

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.activate_skill_version_request import ActivateSkillVersionRequest
from ksapi.models.skill_response import SkillResponse
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
    api_instance = ksapi.SkillsApi(api_client)
    skill_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    version_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    activate_skill_version_request = ksapi.ActivateSkillVersionRequest() # ActivateSkillVersionRequest | 

    try:
        # Activate Skill Version Handler
        api_response = api_instance.activate_skill_version(skill_id, version_id, activate_skill_version_request)
        print("The response of SkillsApi->activate_skill_version:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SkillsApi->activate_skill_version: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skill_id** | **UUID**|  | 
 **version_id** | **UUID**|  | 
 **activate_skill_version_request** | [**ActivateSkillVersionRequest**](ActivateSkillVersionRequest.md)|  | 

### Return type

[**SkillResponse**](SkillResponse.md)

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

# **checkin_skill**
> checkin_skill(skill_id)

Checkin Skill Handler

Release the skill's checkout so another author can edit it.

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
    api_instance = ksapi.SkillsApi(api_client)
    skill_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Checkin Skill Handler
        api_instance.checkin_skill(skill_id)
    except Exception as e:
        print("Exception when calling SkillsApi->checkin_skill: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skill_id** | **UUID**|  | 

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

# **checkout_skill**
> SkillResponse checkout_skill(skill_id)

Checkout Skill Handler

Check out the whole skill for editing (409 if another user holds it).

Locks the skill via its ``SKILL.md`` document; hold it to edit any file
(``SKILL.md`` or scripts) and release it with ``checkin``.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.skill_response import SkillResponse
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
    api_instance = ksapi.SkillsApi(api_client)
    skill_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Checkout Skill Handler
        api_response = api_instance.checkout_skill(skill_id)
        print("The response of SkillsApi->checkout_skill:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SkillsApi->checkout_skill: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skill_id** | **UUID**|  | 

### Return type

[**SkillResponse**](SkillResponse.md)

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

# **create_skill**
> SkillResponse create_skill(create_skill_request)

Create Skill Handler

Author a skill (JSON) under /agents/skills; requires can_write there.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.create_skill_request import CreateSkillRequest
from ksapi.models.skill_response import SkillResponse
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
    api_instance = ksapi.SkillsApi(api_client)
    create_skill_request = ksapi.CreateSkillRequest() # CreateSkillRequest | 

    try:
        # Create Skill Handler
        api_response = api_instance.create_skill(create_skill_request)
        print("The response of SkillsApi->create_skill:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SkillsApi->create_skill: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_skill_request** | [**CreateSkillRequest**](CreateSkillRequest.md)|  | 

### Return type

[**SkillResponse**](SkillResponse.md)

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

# **delete_skill**
> delete_skill(skill_id)

Delete Skill Handler

Soft-delete a skill; requires can_delete; 409 if another holds checkout.

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
    api_instance = ksapi.SkillsApi(api_client)
    skill_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Delete Skill Handler
        api_instance.delete_skill(skill_id)
    except Exception as e:
        print("Exception when calling SkillsApi->delete_skill: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skill_id** | **UUID**|  | 

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

# **discard_skill_draft**
> SkillResponse discard_skill_draft(skill_id)

Discard Skill Draft Handler

Discard unpublished edits: restore the working copy to the active version.

Requires a held checkout (it overwrites the working copy).

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.skill_response import SkillResponse
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
    api_instance = ksapi.SkillsApi(api_client)
    skill_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Discard Skill Draft Handler
        api_response = api_instance.discard_skill_draft(skill_id)
        print("The response of SkillsApi->discard_skill_draft:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SkillsApi->discard_skill_draft: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skill_id** | **UUID**|  | 

### Return type

[**SkillResponse**](SkillResponse.md)

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

# **export_skill**
> object export_skill(skill_id)

Export Skill Handler

Download the active published version as a self-contained ZIP for sharing.

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
    api_instance = ksapi.SkillsApi(api_client)
    skill_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Export Skill Handler
        api_response = api_instance.export_skill(skill_id)
        print("The response of SkillsApi->export_skill:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SkillsApi->export_skill: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skill_id** | **UUID**|  | 

### Return type

**object**

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

# **get_skill**
> SkillResponse get_skill(skill_id)

Get Skill Handler

Skill detail: SKILL.md, script contents, has_unpublished_changes, perms.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.skill_response import SkillResponse
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
    api_instance = ksapi.SkillsApi(api_client)
    skill_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Get Skill Handler
        api_response = api_instance.get_skill(skill_id)
        print("The response of SkillsApi->get_skill:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SkillsApi->get_skill: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skill_id** | **UUID**|  | 

### Return type

[**SkillResponse**](SkillResponse.md)

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

# **import_skill**
> SkillResponse import_skill(file)

Import Skill Handler

Create a skill by importing a redistributable ZIP (works across tenants).

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.skill_response import SkillResponse
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
    api_instance = ksapi.SkillsApi(api_client)
    file = None # bytes | 

    try:
        # Import Skill Handler
        api_response = api_instance.import_skill(file)
        print("The response of SkillsApi->import_skill:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SkillsApi->import_skill: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **bytes**|  | 

### Return type

[**SkillResponse**](SkillResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_skill_versions**
> List[SkillVersionResponse] list_skill_versions(skill_id)

List Skill Versions Handler

List a skill's published versions, newest first.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.skill_version_response import SkillVersionResponse
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
    api_instance = ksapi.SkillsApi(api_client)
    skill_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # List Skill Versions Handler
        api_response = api_instance.list_skill_versions(skill_id)
        print("The response of SkillsApi->list_skill_versions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SkillsApi->list_skill_versions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skill_id** | **UUID**|  | 

### Return type

[**List[SkillVersionResponse]**](SkillVersionResponse.md)

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

# **list_skills**
> PaginatedResponseSkillResponse list_skills(sort_by=sort_by, search=search, limit=limit, offset=offset, sort_dir=sort_dir)

List Skills Handler

List readable skills: paginated, sortable both ways, name-searchable.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.paginated_response_skill_response import PaginatedResponseSkillResponse
from ksapi.models.skill_order import SkillOrder
from ksapi.models.sort_direction import SortDirection
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
    api_instance = ksapi.SkillsApi(api_client)
    sort_by = ksapi.SkillOrder() # SkillOrder | Field to sort skills by (default: CREATED_AT) (optional)
    search = 'search_example' # str | Case-insensitive skill-name substring filter (search bar) (optional)
    limit = 20 # int | Number of items per page (optional) (default to 20)
    offset = 0 # int | Number of items to skip (optional) (default to 0)
    sort_dir = ksapi.SortDirection() # SortDirection | Sort direction (ASC or DESC); overrides the field's natural default. Every sort field supports both directions. (optional)

    try:
        # List Skills Handler
        api_response = api_instance.list_skills(sort_by=sort_by, search=search, limit=limit, offset=offset, sort_dir=sort_dir)
        print("The response of SkillsApi->list_skills:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SkillsApi->list_skills: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort_by** | [**SkillOrder**](.md)| Field to sort skills by (default: CREATED_AT) | [optional] 
 **search** | **str**| Case-insensitive skill-name substring filter (search bar) | [optional] 
 **limit** | **int**| Number of items per page | [optional] [default to 20]
 **offset** | **int**| Number of items to skip | [optional] [default to 0]
 **sort_dir** | [**SortDirection**](.md)| Sort direction (ASC or DESC); overrides the field&#39;s natural default. Every sort field supports both directions. | [optional] 

### Return type

[**PaginatedResponseSkillResponse**](PaginatedResponseSkillResponse.md)

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

# **publish_skill_version**
> SkillResponse publish_skill_version(skill_id)

Publish Skill Version Handler

Snapshot the working copy into a new immutable version and activate it.

Requires a held checkout on the skill (publishing mutates it), so a second
author cannot push a version over the checkout holder's in-progress draft.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.skill_response import SkillResponse
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
    api_instance = ksapi.SkillsApi(api_client)
    skill_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Publish Skill Version Handler
        api_response = api_instance.publish_skill_version(skill_id)
        print("The response of SkillsApi->publish_skill_version:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SkillsApi->publish_skill_version: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skill_id** | **UUID**|  | 

### Return type

[**SkillResponse**](SkillResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_skills**
> SearchSkillsResponse search_skills(search_skills_request)

Search Skills Handler

Find skills by the meaning of their routing card (agent discovery).

Dense semantic search over each skill's ``name + description`` card, scoped
to the tenant. Fail-closed: hits are re-loaded tenant-scoped from Postgres
(the authority — a mis-scoped Qdrant hit can't leak another tenant's skill)
and any the caller cannot read are dropped.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.search_skills_request import SearchSkillsRequest
from ksapi.models.search_skills_response import SearchSkillsResponse
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
    api_instance = ksapi.SkillsApi(api_client)
    search_skills_request = ksapi.SearchSkillsRequest() # SearchSkillsRequest | 

    try:
        # Search Skills Handler
        api_response = api_instance.search_skills(search_skills_request)
        print("The response of SkillsApi->search_skills:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SkillsApi->search_skills: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search_skills_request** | [**SearchSkillsRequest**](SearchSkillsRequest.md)|  | 

### Return type

[**SearchSkillsResponse**](SearchSkillsResponse.md)

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

# **update_skill**
> SkillResponse update_skill(skill_id, update_skill_request)

Update Skill Handler

Edit the working copy in place; requires can_write + a held checkout.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.skill_response import SkillResponse
from ksapi.models.update_skill_request import UpdateSkillRequest
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
    api_instance = ksapi.SkillsApi(api_client)
    skill_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    update_skill_request = ksapi.UpdateSkillRequest() # UpdateSkillRequest | 

    try:
        # Update Skill Handler
        api_response = api_instance.update_skill(skill_id, update_skill_request)
        print("The response of SkillsApi->update_skill:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SkillsApi->update_skill: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skill_id** | **UUID**|  | 
 **update_skill_request** | [**UpdateSkillRequest**](UpdateSkillRequest.md)|  | 

### Return type

[**SkillResponse**](SkillResponse.md)

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

