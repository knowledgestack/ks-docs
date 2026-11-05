# CreateEmailThreadRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parent_path_part_id** | **UUID** |  | 
**source_conversation_id** | **str** |  | 
**title** | **str** |  | 

## Example

```python
from ksapi.models.create_email_thread_request import CreateEmailThreadRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateEmailThreadRequest from a JSON string
create_email_thread_request_instance = CreateEmailThreadRequest.from_json(json)
# print the JSON string representation of the object
print(CreateEmailThreadRequest.to_json())

# convert the object into a dict
create_email_thread_request_dict = create_email_thread_request_instance.to_dict()
# create an instance of CreateEmailThreadRequest from a dict
create_email_thread_request_from_dict = CreateEmailThreadRequest.from_dict(create_email_thread_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


