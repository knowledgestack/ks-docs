# ksapi.BulkDeleteApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bulk_delete**](BulkDeleteApi.md#bulk_delete) | **POST** /v1/bulk-delete | Bulk Delete Handler


# **bulk_delete**
> BulkOperationResponse bulk_delete(bulk_delete_request)

Bulk Delete Handler

Move the selected folders and documents to Trash, reporting per item.

Each id is soft-deleted in its own transaction: items the caller may not
delete, that are approval-sealed, held by another user, contain an
in-progress run, or sit inside another selected folder land in ``failed``
with a reason while the rest succeed. Over the selection cap returns ``400``.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.bulk_delete_request import BulkDeleteRequest
from ksapi.models.bulk_operation_response import BulkOperationResponse
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
    api_instance = ksapi.BulkDeleteApi(api_client)
    bulk_delete_request = ksapi.BulkDeleteRequest() # BulkDeleteRequest | 

    try:
        # Bulk Delete Handler
        api_response = api_instance.bulk_delete(bulk_delete_request)
        print("The response of BulkDeleteApi->bulk_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BulkDeleteApi->bulk_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulk_delete_request** | [**BulkDeleteRequest**](BulkDeleteRequest.md)|  | 

### Return type

[**BulkOperationResponse**](BulkOperationResponse.md)

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

