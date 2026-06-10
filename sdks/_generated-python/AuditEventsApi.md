# ksapi.AuditEventsApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list_audit_events**](AuditEventsApi.md#list_audit_events) | **GET** /v1/audit-events | List Audit Events Handler


# **list_audit_events**
> PaginatedResponseEventResponse list_audit_events(actor_user_id=actor_user_id, kind=kind, since=since, until=until, subject_path_part_id=subject_path_part_id, recursive=recursive, limit=limit, offset=offset)

List Audit Events Handler

List the tenant's audit events, newest first (admin/owner only).

Returns every event in the caller's own tenant — ADMIN/OWNER bypass path
permissions by design. Filter by actor, kind, time window, and/or a subject
subtree. Each event carries its resolved actor name.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.paginated_response_event_response import PaginatedResponseEventResponse
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
    api_instance = ksapi.AuditEventsApi(api_client)
    actor_user_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Filter to one actor (optional)
    kind = 'kind_example' # str | Filter to one event kind (optional)
    since = '2013-10-20T19:20:30+01:00' # datetime | Only events at or after this timestamp (optional)
    until = '2013-10-20T19:20:30+01:00' # datetime | Only events strictly before this timestamp (optional)
    subject_path_part_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | Scope to one document/folder/run subject (optional)
    recursive = False # bool | Include the subject's descendants (needs subject) (optional) (default to False)
    limit = 20 # int | Number of items per page (optional) (default to 20)
    offset = 0 # int | Number of items to skip (optional) (default to 0)

    try:
        # List Audit Events Handler
        api_response = api_instance.list_audit_events(actor_user_id=actor_user_id, kind=kind, since=since, until=until, subject_path_part_id=subject_path_part_id, recursive=recursive, limit=limit, offset=offset)
        print("The response of AuditEventsApi->list_audit_events:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuditEventsApi->list_audit_events: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **actor_user_id** | **UUID**| Filter to one actor | [optional] 
 **kind** | **str**| Filter to one event kind | [optional] 
 **since** | **datetime**| Only events at or after this timestamp | [optional] 
 **until** | **datetime**| Only events strictly before this timestamp | [optional] 
 **subject_path_part_id** | **UUID**| Scope to one document/folder/run subject | [optional] 
 **recursive** | **bool**| Include the subject&#39;s descendants (needs subject) | [optional] [default to False]
 **limit** | **int**| Number of items per page | [optional] [default to 20]
 **offset** | **int**| Number of items to skip | [optional] [default to 0]

### Return type

[**PaginatedResponseEventResponse**](PaginatedResponseEventResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

