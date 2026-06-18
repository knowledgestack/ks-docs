# ApiConnectionRequestRequest

An outbound request the caller (or agent) wants executed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**method** | **str** |  | 
**path** | **str** |  | [optional] [default to '/']
**query** | **Dict[str, str]** |  | [optional] 
**headers** | **Dict[str, str]** |  | [optional] 
**body** | **object** |  | [optional] 

## Example

```python
from ksapi.models.api_connection_request_request import ApiConnectionRequestRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiConnectionRequestRequest from a JSON string
api_connection_request_request_instance = ApiConnectionRequestRequest.from_json(json)
# print the JSON string representation of the object
print(ApiConnectionRequestRequest.to_json())

# convert the object into a dict
api_connection_request_request_dict = api_connection_request_request_instance.to_dict()
# create an instance of ApiConnectionRequestRequest from a dict
api_connection_request_request_from_dict = ApiConnectionRequestRequest.from_dict(api_connection_request_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


