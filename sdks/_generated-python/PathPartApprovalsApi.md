# ksapi.PathPartApprovalsApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_path_part_approval**](PathPartApprovalsApi.md#get_path_part_approval) | **GET** /v1/path-parts/{path_part_id}/approval | Get Path Part Approval Handler
[**set_path_part_approval**](PathPartApprovalsApi.md#set_path_part_approval) | **POST** /v1/path-parts/{path_part_id}/approval | Set Path Part Approval Handler


# **get_path_part_approval**
> PathPartApprovalResponse get_path_part_approval(path_part_id)

Get Path Part Approval Handler

Return the current approval audit row for a path_part.

Exposes ``reviewer_id`` / ``reason`` and
the decision timestamps so a caller can re-read who decided what and
why. 404 if the path_part never entered the approval flow (its
``approval_state`` is still ``not_required``).

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.path_part_approval_response import PathPartApprovalResponse
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
    api_instance = ksapi.PathPartApprovalsApi(api_client)
    path_part_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Get Path Part Approval Handler
        api_response = api_instance.get_path_part_approval(path_part_id)
        print("The response of PathPartApprovalsApi->get_path_part_approval:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PathPartApprovalsApi->get_path_part_approval: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path_part_id** | **UUID**|  | 

### Return type

[**PathPartApprovalResponse**](PathPartApprovalResponse.md)

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

# **set_path_part_approval**
> PathPartApprovalResponse set_path_part_approval(path_part_id, set_approval_state_request)

Set Path Part Approval Handler

Set the approval state on a path_part.

| current ↓ / target → | pending                  | approved                 |
| -------------------- | ------------------------ | ------------------------ |
| not_required         | 200 request              | 409                      |
| pending              | 200 (returns current row)| 200 approve              |
| approved             | 200 unapprove            | 200 (returns current row)|

``reason`` is forwarded to whichever service method handles the
transition and persisted on the audit row (for ``approved``) or
captured in the corresponding event payload (for ``pending``).

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.path_part_approval_response import PathPartApprovalResponse
from ksapi.models.set_approval_state_request import SetApprovalStateRequest
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
    api_instance = ksapi.PathPartApprovalsApi(api_client)
    path_part_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    set_approval_state_request = ksapi.SetApprovalStateRequest() # SetApprovalStateRequest | 

    try:
        # Set Path Part Approval Handler
        api_response = api_instance.set_path_part_approval(path_part_id, set_approval_state_request)
        print("The response of PathPartApprovalsApi->set_path_part_approval:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PathPartApprovalsApi->set_path_part_approval: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path_part_id** | **UUID**|  | 
 **set_approval_state_request** | [**SetApprovalStateRequest**](SetApprovalStateRequest.md)|  | 

### Return type

[**PathPartApprovalResponse**](PathPartApprovalResponse.md)

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

