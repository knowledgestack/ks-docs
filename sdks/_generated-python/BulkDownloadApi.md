# ksapi.BulkDownloadApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**start_bulk_download**](BulkDownloadApi.md#start_bulk_download) | **POST** /v1/bulk-download | Start Bulk Download Handler


# **start_bulk_download**
> bytes start_bulk_download(bulk_download_request)

Start Bulk Download Handler

Package the selected folders/documents into one ``.zip`` and stream it.

Folders are enumerated recursively; trashed and unreadable items are
excluded, and each included file is recorded as a ``document.downloaded``
audit event. The selection is capped — exceeding it returns ``400``. Files
that cannot be included (no source, still ingesting) are skipped; the count
is returned in the ``X-Bulk-Download-Skipped`` header.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.bulk_download_request import BulkDownloadRequest
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
    api_instance = ksapi.BulkDownloadApi(api_client)
    bulk_download_request = ksapi.BulkDownloadRequest() # BulkDownloadRequest | 

    try:
        # Start Bulk Download Handler
        api_response = api_instance.start_bulk_download(bulk_download_request)
        print("The response of BulkDownloadApi->start_bulk_download:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BulkDownloadApi->start_bulk_download: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulk_download_request** | [**BulkDownloadRequest**](BulkDownloadRequest.md)|  | 

### Return type

**bytes**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/zip, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A ZIP archive of the selected documents. |  -  |
**422** | Validation Error |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

