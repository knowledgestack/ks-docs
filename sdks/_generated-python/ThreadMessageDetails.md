# ThreadMessageDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parts** | [**List[TextPartOrReasoningPartOrToolPartOrDocEditPart]**](TextPartOrReasoningPartOrToolPartOrDocEditPart.md) |  | [optional] 
**usage** | [**MessageUsage**](MessageUsage.md) |  | [optional] 
**steps** | [**List[Step]**](Step.md) |  | [optional] 
**checkpoint** | [**CheckpointDetails**](CheckpointDetails.md) | Agent history checkpoint. Present only on role&#x3D;SYSTEM messages written by the agent&#39;s archival path. | [optional] 
**model_id** | **str** | Model registry id (FE-stable, e.g. &#x60;&#x60;qwen-flash&#x60;&#x60;) that produced this assistant message. &#x60;&#x60;None&#x60;&#x60; for legacy rows that pre-date model selection. | [optional] 

## Example

```python
from ksapi.models.thread_message_details import ThreadMessageDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ThreadMessageDetails from a JSON string
thread_message_details_instance = ThreadMessageDetails.from_json(json)
# print the JSON string representation of the object
print(ThreadMessageDetails.to_json())

# convert the object into a dict
thread_message_details_dict = thread_message_details_instance.to_dict()
# create an instance of ThreadMessageDetails from a dict
thread_message_details_from_dict = ThreadMessageDetails.from_dict(thread_message_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


