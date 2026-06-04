# ksapi.SectionsApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_section**](SectionsApi.md#create_section) | **POST** /v1/sections | Create Section Handler
[**delete_section**](SectionsApi.md#delete_section) | **DELETE** /v1/sections/{section_id} | Delete Section Handler
[**dissolve_section**](SectionsApi.md#dissolve_section) | **POST** /v1/sections/{section_id}/dissolve | Dissolve Section Handler
[**get_section**](SectionsApi.md#get_section) | **GET** /v1/sections/{section_id} | Get Section Handler
[**get_sections_bulk**](SectionsApi.md#get_sections_bulk) | **GET** /v1/sections/bulk | Get Sections Bulk Handler
[**update_section**](SectionsApi.md#update_section) | **PATCH** /v1/sections/{section_id} | Update Section Handler


# **create_section**
> SectionResponse create_section(create_section_request, authorization=authorization, ks_uat=ks_uat)

Create Section Handler

Create a new section.

The section is created as a child of the specified parent (must be
DOCUMENT_VERSION or SECTION). If prev_sibling_path_id is provided,
the section is inserted after that sibling; otherwise it is appended
to the end of the sibling list.

### Example


```python
import ksapi
from ksapi.models.create_section_request import CreateSectionRequest
from ksapi.models.section_response import SectionResponse
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
    api_instance = ksapi.SectionsApi(api_client)
    create_section_request = ksapi.CreateSectionRequest() # CreateSectionRequest | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Create Section Handler
        api_response = api_instance.create_section(create_section_request, authorization=authorization, ks_uat=ks_uat)
        print("The response of SectionsApi->create_section:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SectionsApi->create_section: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_section_request** | [**CreateSectionRequest**](CreateSectionRequest.md)|  | 
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**SectionResponse**](SectionResponse.md)

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

# **delete_section**
> delete_section(section_id, authorization=authorization, ks_uat=ks_uat)

Delete Section Handler

Delete a section and all its children.

WARNING: This cascades to all child sections due to parent_id ON DELETE CASCADE.

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
    api_instance = ksapi.SectionsApi(api_client)
    section_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Delete Section Handler
        api_instance.delete_section(section_id, authorization=authorization, ks_uat=ks_uat)
    except Exception as e:
        print("Exception when calling SectionsApi->delete_section: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **section_id** | **UUID**|  | 
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

# **dissolve_section**
> DissolveSectionResponse dissolve_section(section_id, authorization=authorization, ks_uat=ks_uat)

Dissolve Section Handler

Dissolve a section: convert it to a text chunk, reparent children, delete the section.

The section's name becomes the content of a new TEXT chunk. Any children
of the section are reparented to the section's parent, preserving order.
The section itself is then deleted.

### Example


```python
import ksapi
from ksapi.models.dissolve_section_response import DissolveSectionResponse
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
    api_instance = ksapi.SectionsApi(api_client)
    section_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Dissolve Section Handler
        api_response = api_instance.dissolve_section(section_id, authorization=authorization, ks_uat=ks_uat)
        print("The response of SectionsApi->dissolve_section:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SectionsApi->dissolve_section: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **section_id** | **UUID**|  | 
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**DissolveSectionResponse**](DissolveSectionResponse.md)

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

# **get_section**
> SectionResponse get_section(section_id, authorization=authorization, ks_uat=ks_uat)

Get Section Handler

Get a section by its ID.

### Example


```python
import ksapi
from ksapi.models.section_response import SectionResponse
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
    api_instance = ksapi.SectionsApi(api_client)
    section_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Get Section Handler
        api_response = api_instance.get_section(section_id, authorization=authorization, ks_uat=ks_uat)
        print("The response of SectionsApi->get_section:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SectionsApi->get_section: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **section_id** | **UUID**|  | 
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**SectionResponse**](SectionResponse.md)

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

# **get_sections_bulk**
> List[SectionResponse] get_sections_bulk(section_ids=section_ids, authorization=authorization, ks_uat=ks_uat)

Get Sections Bulk Handler

Batch-fetch sections by ID.

Returns sections with system_metadata. Non-existent IDs are silently
skipped. Limited to 200 IDs per call.

### Example


```python
import ksapi
from ksapi.models.section_response import SectionResponse
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
    api_instance = ksapi.SectionsApi(api_client)
    section_ids = None # List[UUID] | Section IDs to fetch (max 200) (optional)
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Get Sections Bulk Handler
        api_response = api_instance.get_sections_bulk(section_ids=section_ids, authorization=authorization, ks_uat=ks_uat)
        print("The response of SectionsApi->get_sections_bulk:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SectionsApi->get_sections_bulk: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **section_ids** | [**List[UUID]**](UUID.md)| Section IDs to fetch (max 200) | [optional] 
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**List[SectionResponse]**](SectionResponse.md)

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

# **update_section**
> SectionResponse update_section(section_id, update_section_request, authorization=authorization, ks_uat=ks_uat)

Update Section Handler

Update a section.

Can update name, page_number, and/or reorder within siblings.
To move: provide prev_sibling_path_id OR move_to_head (not both).
Moving is only allowed within the same document version.

Note: Section names can contain any characters. The corresponding
path_part.name will be automatically normalized by a database trigger.

### Example


```python
import ksapi
from ksapi.models.section_response import SectionResponse
from ksapi.models.update_section_request import UpdateSectionRequest
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
    api_instance = ksapi.SectionsApi(api_client)
    section_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    update_section_request = ksapi.UpdateSectionRequest() # UpdateSectionRequest | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Update Section Handler
        api_response = api_instance.update_section(section_id, update_section_request, authorization=authorization, ks_uat=ks_uat)
        print("The response of SectionsApi->update_section:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SectionsApi->update_section: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **section_id** | **UUID**|  | 
 **update_section_request** | [**UpdateSectionRequest**](UpdateSectionRequest.md)|  | 
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**SectionResponse**](SectionResponse.md)

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

