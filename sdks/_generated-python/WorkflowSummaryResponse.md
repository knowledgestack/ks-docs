# WorkflowSummaryResponse

List item - DB-only fields, no Temporal call per item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workflow_id** | **str** |  | 
**document_id** | **UUID** |  | 
**document_name** | **str** |  | 
**materialized_path** | **str** | The document&#39;s path | 
**document_version_id** | **UUID** |  | 
**is_active_version** | **bool** | Whether this version is the document&#39;s active one; false for an unfinished newer upload and for a superseded older version | 
**uploader** | [**UserInfo**](UserInfo.md) |  | 
**status** | [**PipelineStatus**](PipelineStatus.md) |  | 
**last_activity** | **str** |  | [optional] 
**error** | **str** |  | [optional] 
**last_run_timestamp** | **datetime** | When the last run started; the upload time until a run has started | 
**last_state_update_timestamp** | **datetime** |  | [optional] 
**created_at** | **datetime** |  | 

## Example

```python
from ksapi.models.workflow_summary_response import WorkflowSummaryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowSummaryResponse from a JSON string
workflow_summary_response_instance = WorkflowSummaryResponse.from_json(json)
# print the JSON string representation of the object
print(WorkflowSummaryResponse.to_json())

# convert the object into a dict
workflow_summary_response_dict = workflow_summary_response_instance.to_dict()
# create an instance of WorkflowSummaryResponse from a dict
workflow_summary_response_from_dict = WorkflowSummaryResponse.from_dict(workflow_summary_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


