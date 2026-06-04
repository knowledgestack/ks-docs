# UserMessageRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input_text** | **str** | User input text. Mock agent dev controls may be embedded here (e.g. /mock duration&#x3D;5 wps&#x3D;3 scenario&#x3D;tool_call_once). | [optional] [default to '']

## Example

```python
from ksapi.models.user_message_request import UserMessageRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UserMessageRequest from a JSON string
user_message_request_instance = UserMessageRequest.from_json(json)
# print the JSON string representation of the object
print(UserMessageRequest.to_json())

# convert the object into a dict
user_message_request_dict = user_message_request_instance.to_dict()
# create an instance of UserMessageRequest from a dict
user_message_request_from_dict = UserMessageRequest.from_dict(user_message_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


