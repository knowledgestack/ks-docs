# TemporalWorkflowStatusResponse

Generic Temporal workflow status — no DB interaction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workflow_id** | **str** |  | 
**temporal_status** | **str** |  | 
**workflow_type** | **str** |  | 
**task_queue** | **str** |  | 
**start_time** | **datetime** |  | 
**close_time** | **datetime** |  | [optional] 
**run_id** | **str** |  | 

## Example

```python
from ksapi.models.temporal_workflow_status_response import TemporalWorkflowStatusResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TemporalWorkflowStatusResponse from a JSON string
temporal_workflow_status_response_instance = TemporalWorkflowStatusResponse.from_json(json)
# print the JSON string representation of the object
print(TemporalWorkflowStatusResponse.to_json())

# convert the object into a dict
temporal_workflow_status_response_dict = temporal_workflow_status_response_instance.to_dict()
# create an instance of TemporalWorkflowStatusResponse from a dict
temporal_workflow_status_response_from_dict = TemporalWorkflowStatusResponse.from_dict(temporal_workflow_status_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


