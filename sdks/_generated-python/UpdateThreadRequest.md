# UpdateThreadRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **str** | New thread title | [optional] 
**parent_thread_id** | **UUID** | Parent thread ID. Set to a UUID to link, or null to clear. | [optional] 

## Example

```python
from ksapi.models.update_thread_request import UpdateThreadRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateThreadRequest from a JSON string
update_thread_request_instance = UpdateThreadRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateThreadRequest.to_json())

# convert the object into a dict
update_thread_request_dict = update_thread_request_instance.to_dict()
# create an instance of UpdateThreadRequest from a dict
update_thread_request_from_dict = UpdateThreadRequest.from_dict(update_thread_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


