# WorkflowDetailResponse

Single item - adds live Temporal fields.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workflow_id** | **str** |  | 
**document_id** | **UUID** |  | 
**document_version_id** | **UUID** |  | 
**status** | [**PipelineStatus**](PipelineStatus.md) |  | 
**last_activity** | **str** |  | [optional] 
**error** | **str** |  | [optional] 
**last_run_timestamp** | **datetime** |  | 
**last_state_update_timestamp** | **datetime** |  | [optional] 
**created_at** | **datetime** |  | 
**temporal_status** | **str** |  | 
**start_time** | **datetime** |  | 
**close_time** | **datetime** |  | [optional] 
**workflow_type** | **str** |  | 
**task_queue** | **str** |  | 
**run_id** | **str** |  | 
**chunks_processed** | **int** |  | [optional] 

## Example

```python
from ksapi.models.workflow_detail_response import WorkflowDetailResponse

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowDetailResponse from a JSON string
workflow_detail_response_instance = WorkflowDetailResponse.from_json(json)
# print the JSON string representation of the object
print(WorkflowDetailResponse.to_json())

# convert the object into a dict
workflow_detail_response_dict = workflow_detail_response_instance.to_dict()
# create an instance of WorkflowDetailResponse from a dict
workflow_detail_response_from_dict = WorkflowDetailResponse.from_dict(workflow_detail_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


