# ErrorResponse

Standard error body returned for every non-2xx response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | **str** | Human-readable explanation of the error. | 
**code** | **str** | Stable, machine-readable error code from a closed set. Branch on this instead of parsing &#39;detail&#39;. &#39;quota_exceeded&#39;/&#39;too_many_requests&#39; carry a Retry-After header; &#39;service_unavailable&#39; is retryable. | 
**request_id** | **str** | Correlates to the x-request-id response header; quote it to support. | [optional] 

## Example

```python
from ksapi.models.error_response import ErrorResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorResponse from a JSON string
error_response_instance = ErrorResponse.from_json(json)
# print the JSON string representation of the object
print(ErrorResponse.to_json())

# convert the object into a dict
error_response_dict = error_response_instance.to_dict()
# create an instance of ErrorResponse from a dict
error_response_from_dict = ErrorResponse.from_dict(error_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


