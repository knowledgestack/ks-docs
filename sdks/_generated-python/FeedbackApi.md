# ksapi.FeedbackApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_feedback**](FeedbackApi.md#delete_feedback) | **DELETE** /v1/feedback/{feedback_id} | Delete Feedback Handler
[**list_feedback**](FeedbackApi.md#list_feedback) | **GET** /v1/feedback | List Feedback Handler
[**submit_feedback**](FeedbackApi.md#submit_feedback) | **POST** /v1/feedback | Submit Feedback Handler


# **delete_feedback**
> delete_feedback(feedback_id, authorization=authorization, ks_uat=ks_uat)

Delete Feedback Handler

Delete a feedback entry.

USER role: can only delete their own feedback.
OWNER/ADMIN role: can delete any feedback.
Returns 404 if the feedback does not exist.
Returns 403 if the user does not own the feedback and is not OWNER/ADMIN.

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
    api_instance = ksapi.FeedbackApi(api_client)
    feedback_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Delete Feedback Handler
        api_instance.delete_feedback(feedback_id, authorization=authorization, ks_uat=ks_uat)
    except Exception as e:
        print("Exception when calling FeedbackApi->delete_feedback: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **feedback_id** | **UUID**|  | 
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

# **list_feedback**
> PaginatedResponseFeedbackEventResponse list_feedback(target_type=target_type, target_id=target_id, rating=rating, limit=limit, offset=offset, authorization=authorization, ks_uat=ks_uat)

List Feedback Handler

List feedback entries with optional filters.

USER role: only returns their own feedback.
OWNER/ADMIN role: returns feedback from all users.

### Example


```python
import ksapi
from ksapi.models.feedback_rating import FeedbackRating
from ksapi.models.feedback_target_type import FeedbackTargetType
from ksapi.models.paginated_response_feedback_event_response import PaginatedResponseFeedbackEventResponse
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
    api_instance = ksapi.FeedbackApi(api_client)
    target_type = ksapi.FeedbackTargetType() # FeedbackTargetType |  (optional)
    target_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID |  (optional)
    rating = ksapi.FeedbackRating() # FeedbackRating |  (optional)
    limit = 20 # int | Number of items per page (optional) (default to 20)
    offset = 0 # int | Number of items to skip (optional) (default to 0)
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # List Feedback Handler
        api_response = api_instance.list_feedback(target_type=target_type, target_id=target_id, rating=rating, limit=limit, offset=offset, authorization=authorization, ks_uat=ks_uat)
        print("The response of FeedbackApi->list_feedback:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FeedbackApi->list_feedback: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **target_type** | [**FeedbackTargetType**](.md)|  | [optional] 
 **target_id** | **UUID**|  | [optional] 
 **rating** | [**FeedbackRating**](.md)|  | [optional] 
 **limit** | **int**| Number of items per page | [optional] [default to 20]
 **offset** | **int**| Number of items to skip | [optional] [default to 0]
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**PaginatedResponseFeedbackEventResponse**](PaginatedResponseFeedbackEventResponse.md)

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

# **submit_feedback**
> FeedbackEventResponse submit_feedback(submit_feedback_request, authorization=authorization, ks_uat=ks_uat)

Submit Feedback Handler

Create or update feedback on a knowledge entity (upsert).

Returns 201 when feedback is newly created, 200 when updated.
Validates that the target entity exists and the user can read it.

### Example


```python
import ksapi
from ksapi.models.feedback_event_response import FeedbackEventResponse
from ksapi.models.submit_feedback_request import SubmitFeedbackRequest
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
    api_instance = ksapi.FeedbackApi(api_client)
    submit_feedback_request = ksapi.SubmitFeedbackRequest() # SubmitFeedbackRequest | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Submit Feedback Handler
        api_response = api_instance.submit_feedback(submit_feedback_request, authorization=authorization, ks_uat=ks_uat)
        print("The response of FeedbackApi->submit_feedback:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FeedbackApi->submit_feedback: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submit_feedback_request** | [**SubmitFeedbackRequest**](SubmitFeedbackRequest.md)|  | 
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**FeedbackEventResponse**](FeedbackEventResponse.md)

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

