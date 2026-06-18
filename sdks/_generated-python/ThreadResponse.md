# ThreadResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **UUID** | Thread ID | 
**path_part_id** | **UUID** | PathPart ID | 
**title** | **str** | Thread title | 
**parent_thread_id** | **UUID** | Parent Thread ID (for subthreads) | [optional] 
**materialized_path** | **str** | Full materialized path from root | 
**tenant_id** | **UUID** | Tenant ID | 
**owner** | [**UserInfo**](UserInfo.md) | Current owner (creator) of the thread, or null if unowned. | [optional] 
**created_at** | **datetime** | Creation timestamp | 
**updated_at** | **datetime** | Last update timestamp | 

## Example

```python
from ksapi.models.thread_response import ThreadResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ThreadResponse from a JSON string
thread_response_instance = ThreadResponse.from_json(json)
# print the JSON string representation of the object
print(ThreadResponse.to_json())

# convert the object into a dict
thread_response_dict = thread_response_instance.to_dict()
# create an instance of ThreadResponse from a dict
thread_response_from_dict = ThreadResponse.from_dict(thread_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


