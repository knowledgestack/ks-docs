# ksapi.DocumentCheckoutApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**acquire_document_checkout**](DocumentCheckoutApi.md#acquire_document_checkout) | **POST** /v1/documents/{document_id}/checkout | Acquire Document Checkout Handler
[**get_document_checkout**](DocumentCheckoutApi.md#get_document_checkout) | **GET** /v1/documents/{document_id}/checkout | Get Document Checkout Handler
[**release_document_checkout**](DocumentCheckoutApi.md#release_document_checkout) | **DELETE** /v1/documents/{document_id}/checkout | Release Document Checkout Handler


# **acquire_document_checkout**
> DocumentCheckoutResponse acquire_document_checkout(document_id, force=force, authorization=authorization, ks_uat=ks_uat)

Acquire Document Checkout Handler

Acquire a write lock on the document.

If the caller already holds the lock, re-acquire refreshes
``acquired_at``; the response is 200 in both cases. If another user
holds the lock, returns 409. ``?force=true`` lets OWNER/ADMIN steal
the lock from the current holder; a sealed (approved) document is
refused regardless of ``force``. Locks have no TTL —
they persist until released by the holder.

### Example


```python
import ksapi
from ksapi.models.document_checkout_response import DocumentCheckoutResponse
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
    api_instance = ksapi.DocumentCheckoutApi(api_client)
    document_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Document ID
    force = False # bool | OWNER/ADMIN only — atomically take the checkout regardless of the current holder. Sealed docs are still refused. (optional) (default to False)
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Acquire Document Checkout Handler
        api_response = api_instance.acquire_document_checkout(document_id, force=force, authorization=authorization, ks_uat=ks_uat)
        print("The response of DocumentCheckoutApi->acquire_document_checkout:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentCheckoutApi->acquire_document_checkout: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **document_id** | **UUID**| Document ID | 
 **force** | **bool**| OWNER/ADMIN only — atomically take the checkout regardless of the current holder. Sealed docs are still refused. | [optional] [default to False]
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**DocumentCheckoutResponse**](DocumentCheckoutResponse.md)

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

# **get_document_checkout**
> DocumentCheckoutResponse get_document_checkout(document_id, authorization=authorization, ks_uat=ks_uat)

Get Document Checkout Handler

Get the active checkout for the document.

404 if no active checkout exists. The holder can always GET their own
lock regardless of current path permissions (parallel to the release
holder-bypass).

### Example


```python
import ksapi
from ksapi.models.document_checkout_response import DocumentCheckoutResponse
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
    api_instance = ksapi.DocumentCheckoutApi(api_client)
    document_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Document ID
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Get Document Checkout Handler
        api_response = api_instance.get_document_checkout(document_id, authorization=authorization, ks_uat=ks_uat)
        print("The response of DocumentCheckoutApi->get_document_checkout:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentCheckoutApi->get_document_checkout: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **document_id** | **UUID**| Document ID | 
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**DocumentCheckoutResponse**](DocumentCheckoutResponse.md)

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

# **release_document_checkout**
> release_document_checkout(document_id, authorization=authorization, ks_uat=ks_uat)

Release Document Checkout Handler

Release the write lock on the document.

Only the holder may release the lock; others receive 403. The holder
can always release regardless of current path permissions (in case a
folder move relocated the doc to a path the holder can no longer
write to).

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
    api_instance = ksapi.DocumentCheckoutApi(api_client)
    document_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Document ID
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Release Document Checkout Handler
        api_instance.release_document_checkout(document_id, authorization=authorization, ks_uat=ks_uat)
    except Exception as e:
        print("Exception when calling DocumentCheckoutApi->release_document_checkout: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **document_id** | **UUID**| Document ID | 
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

