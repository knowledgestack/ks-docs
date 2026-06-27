# WorkflowRunResponse

Workflow run response.  Doubles as a discriminated-union variant for folder-listing responses so the FE can mix WD/Run entries with regular folders + documents and route based on ``part_type``.  Two-step flow note: a NOT_STARTED run has ``started_at=None`` and ``run_snapshot=None``; both are populated when Start dispatches the run. The flat ``input_path_part_ids`` list carries the currently-pinned KB references so the FE can render them on a NOT_STARTED run (the snapshot's typed list is not available yet).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**part_type** | **str** | Path part type | [optional] [default to 'WORKFLOW_RUN']
**id** | **UUID** |  | 
**path_part_id** | **UUID** | WORKFLOW_RUN path_part of this run | 
**parent_path_part_id** | **UUID** | FOLDER path_part of the containing folder | 
**materialized_path** | **str** | Full materialized path from root | 
**tenant_id** | **UUID** |  | 
**name** | **str** | Run display name; mirrors &#x60;&#x60;path_part.name&#x60;&#x60; (the run&#39;s UUID until a slug feature lands). | 
**workflow_definition_id** | **UUID** |  | 
**triggered_by** | [**UserInfo**](UserInfo.md) |  | 
**execution_state** | [**WorkflowExecutionState**](WorkflowExecutionState.md) |  | 
**approval_state** | [**PathPartApprovalState**](PathPartApprovalState.md) |  | 
**started_at** | **datetime** | When Start dispatched the run. NULL while the run is NOT_STARTED. | 
**completed_at** | **datetime** |  | 
**run_snapshot** | [**WorkflowRunSnapshot**](WorkflowRunSnapshot.md) | Frozen workflow configuration captured at Start time. NULL while the run is NOT_STARTED. | 
**error** | **str** |  | 
**auto_start** | **bool** | Whether the run dispatches itself once its &#x60;&#x60;inputs/&#x60;&#x60; uploads finish ingesting, with no separate Start call. | 
**auto_start_user_message** | **str** | The note applied when this run auto-starts (set via create / PATCH &#x60;&#x60;user_message&#x60;&#x60;); null when none was supplied. | [optional] 
**inputs_path_part_id** | **UUID** | FOLDER path_part of the run&#39;s &#x60;&#x60;inputs/&#x60;&#x60; subfolder | 
**outputs_path_part_id** | **UUID** | FOLDER path_part of the run&#39;s &#x60;&#x60;outputs/&#x60;&#x60; subfolder | 
**discussions_path_part_id** | **UUID** | FOLDER path_part of the run&#39;s &#x60;&#x60;discussions/&#x60;&#x60; subfolder | 
**input_path_part_ids** | **List[UUID]** | Flat list of currently-pinned KB-reference path_part ids (DOCUMENT + FOLDER). On a NOT_STARTED run this is the only surface for KB refs (run_snapshot is NULL). | [optional] 
**outputs_path_part_ids** | **List[UUID]** |  | 
**run_thread_id** | **UUID** | The run&#39;s primary chat thread (1:1). NULL while NOT_STARTED; set by Start. The FE opens the run by opening this thread. | [optional] 
**owner** | [**UserInfo**](UserInfo.md) | Current owner (creator) of the run, or null if unowned. Usually the same user as &#x60;&#x60;triggered_by&#x60;&#x60; unless ownership was transferred. | [optional] 
**created_at** | **datetime** |  | 
**updated_at** | **datetime** |  | 
**permissions** | [**ItemPermissions**](ItemPermissions.md) | Caller&#39;s effective rights; null on mutation responses. | [optional] 

## Example

```python
from ksapi.models.workflow_run_response import WorkflowRunResponse

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowRunResponse from a JSON string
workflow_run_response_instance = WorkflowRunResponse.from_json(json)
# print the JSON string representation of the object
print(WorkflowRunResponse.to_json())

# convert the object into a dict
workflow_run_response_dict = workflow_run_response_instance.to_dict()
# create an instance of WorkflowRunResponse from a dict
workflow_run_response_from_dict = WorkflowRunResponse.from_dict(workflow_run_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


