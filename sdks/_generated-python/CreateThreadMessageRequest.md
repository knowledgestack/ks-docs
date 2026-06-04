# CreateThreadMessageRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message_id** | **UUID** | Optional caller-supplied ThreadMessage ID for idempotent creates. | [optional] 
**role** | [**MessageRole**](MessageRole.md) |  | 
**content** | [**ThreadMessageContent**](ThreadMessageContent.md) |  | 
**details** | [**ThreadMessageDetailsInput**](ThreadMessageDetailsInput.md) | Message details (execution steps). Omit for user messages. | [optional] 

## Example

```python
from ksapi.models.create_thread_message_request import CreateThreadMessageRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateThreadMessageRequest from a JSON string
create_thread_message_request_instance = CreateThreadMessageRequest.from_json(json)
# print the JSON string representation of the object
print(CreateThreadMessageRequest.to_json())

# convert the object into a dict
create_thread_message_request_dict = create_thread_message_request_instance.to_dict()
# create an instance of CreateThreadMessageRequest from a dict
create_thread_message_request_from_dict = CreateThreadMessageRequest.from_dict(create_thread_message_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


