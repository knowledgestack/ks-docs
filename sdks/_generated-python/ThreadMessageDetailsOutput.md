# ThreadMessageDetailsOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**steps** | [**List[StepOutput]**](StepOutput.md) |  | [optional] 
**checkpoint** | [**CheckpointDetails**](CheckpointDetails.md) | Agent history checkpoint. Present only on role&#x3D;SYSTEM messages written by the agent&#39;s archival path. | [optional] 
**model_id** | **str** | Model registry id (FE-stable, e.g. &#x60;&#x60;qwen-flash&#x60;&#x60;) that produced this assistant message. &#x60;&#x60;None&#x60;&#x60; for legacy rows that pre-date model selection. | [optional] 

## Example

```python
from ksapi.models.thread_message_details_output import ThreadMessageDetailsOutput

# TODO update the JSON string below
json = "{}"
# create an instance of ThreadMessageDetailsOutput from a JSON string
thread_message_details_output_instance = ThreadMessageDetailsOutput.from_json(json)
# print the JSON string representation of the object
print(ThreadMessageDetailsOutput.to_json())

# convert the object into a dict
thread_message_details_output_dict = thread_message_details_output_instance.to_dict()
# create an instance of ThreadMessageDetailsOutput from a dict
thread_message_details_output_from_dict = ThreadMessageDetailsOutput.from_dict(thread_message_details_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


