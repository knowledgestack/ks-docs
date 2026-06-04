# ThreadMessageContent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | **str** | The text content of the message | 
**is_error** | **bool** | Whether this message represents a terminal assistant error | [optional] 
**citations** | [**List[Citation]**](Citation.md) | A list of citations from the message | [optional] 
**references** | [**List[ResolvedReferenceInput]**](ResolvedReferenceInput.md) | Resolved inline references attached to this message | [optional] 

## Example

```python
from ksapi.models.thread_message_content import ThreadMessageContent

# TODO update the JSON string below
json = "{}"
# create an instance of ThreadMessageContent from a JSON string
thread_message_content_instance = ThreadMessageContent.from_json(json)
# print the JSON string representation of the object
print(ThreadMessageContent.to_json())

# convert the object into a dict
thread_message_content_dict = thread_message_content_instance.to_dict()
# create an instance of ThreadMessageContent from a dict
thread_message_content_from_dict = ThreadMessageContent.from_dict(thread_message_content_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


