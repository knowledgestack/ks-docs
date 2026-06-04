# AskRequest

Request body for POST /v1/agent/ask.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**prompt** | **str** | User prompt passed directly to the agent | 

## Example

```python
from ksapi.models.ask_request import AskRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AskRequest from a JSON string
ask_request_instance = AskRequest.from_json(json)
# print the JSON string representation of the object
print(AskRequest.to_json())

# convert the object into a dict
ask_request_dict = ask_request_instance.to_dict()
# create an instance of AskRequest from a dict
ask_request_from_dict = AskRequest.from_dict(ask_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


