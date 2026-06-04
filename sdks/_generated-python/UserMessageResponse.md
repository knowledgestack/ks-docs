# UserMessageResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workflow_id** | **str** |  | 

## Example

```python
from ksapi.models.user_message_response import UserMessageResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UserMessageResponse from a JSON string
user_message_response_instance = UserMessageResponse.from_json(json)
# print the JSON string representation of the object
print(UserMessageResponse.to_json())

# convert the object into a dict
user_message_response_dict = user_message_response_instance.to_dict()
# create an instance of UserMessageResponse from a dict
user_message_response_from_dict = UserMessageResponse.from_dict(user_message_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


