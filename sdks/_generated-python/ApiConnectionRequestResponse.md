# ApiConnectionRequestResponse

Bounded result of an executed outbound request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status_code** | **int** |  | 
**headers** | **Dict[str, str]** |  | 
**body** | **str** |  | 
**truncated** | **bool** |  | 
**latency_ms** | **int** |  | 

## Example

```python
from ksapi.models.api_connection_request_response import ApiConnectionRequestResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ApiConnectionRequestResponse from a JSON string
api_connection_request_response_instance = ApiConnectionRequestResponse.from_json(json)
# print the JSON string representation of the object
print(ApiConnectionRequestResponse.to_json())

# convert the object into a dict
api_connection_request_response_dict = api_connection_request_response_instance.to_dict()
# create an instance of ApiConnectionRequestResponse from a dict
api_connection_request_response_from_dict = ApiConnectionRequestResponse.from_dict(api_connection_request_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


