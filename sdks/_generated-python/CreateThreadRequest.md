# CreateThreadRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parent_path_part_id** | **UUID** | Parent PathPart ID. When omitted, auto-provisions and uses the user&#39;s /users/{user_id}/threads/ folder. | [optional] 
**title** | **str** | Thread title. Mutually exclusive with message_for_title. | [optional] 
**message_for_title** | **str** | Message content used solely for automated title generation. This does NOT create a thread message; it is only used to generate the thread title. Mutually exclusive with title. | [optional] 
**path_part_name** | **str** | Override the thread path_part name. Defaults to the thread UUID. Used by the workflow runner to enforce one &#x60;&#x60;main&#x60;&#x60; thread per run via the structural sibling-name uniqueness index. | [optional] 
**system_managed** | **bool** | Mark the thread&#39;s path_part as system-managed (immutable from the public API). Used by the workflow runner. | [optional] [default to False]

## Example

```python
from ksapi.models.create_thread_request import CreateThreadRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateThreadRequest from a JSON string
create_thread_request_instance = CreateThreadRequest.from_json(json)
# print the JSON string representation of the object
print(CreateThreadRequest.to_json())

# convert the object into a dict
create_thread_request_dict = create_thread_request_instance.to_dict()
# create an instance of CreateThreadRequest from a dict
create_thread_request_from_dict = CreateThreadRequest.from_dict(create_thread_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


