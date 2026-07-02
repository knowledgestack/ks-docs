# MessageUsage

Token counts only — the run's model lives on ``details.model_id``.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input_tokens** | **int** |  | 
**output_tokens** | **int** |  | 

## Example

```python
from ksapi.models.message_usage import MessageUsage

# TODO update the JSON string below
json = "{}"
# create an instance of MessageUsage from a JSON string
message_usage_instance = MessageUsage.from_json(json)
# print the JSON string representation of the object
print(MessageUsage.to_json())

# convert the object into a dict
message_usage_dict = message_usage_instance.to_dict()
# create an instance of MessageUsage from a dict
message_usage_from_dict = MessageUsage.from_dict(message_usage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


