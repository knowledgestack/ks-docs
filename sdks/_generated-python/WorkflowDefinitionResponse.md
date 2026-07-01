# WorkflowDefinitionResponse

Workflow definition response.  Doubles as a discriminated-union variant for folder-listing responses. The ``part_type`` literal is the discriminator: when the FE walks a folder tree it sees this shape mixed in with ``FolderResponse`` / ``DocumentResponse`` and can route to the dedicated workflow page based on ``part_type``.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**part_type** | **str** | Path part type | [optional] [default to 'WORKFLOW_DEFINITION']
**id** | **UUID** |  | 
**path_part_id** | **UUID** | WORKFLOW_DEFINITION path_part of this definition | 
**parent_path_part_id** | **UUID** | FOLDER path_part of the containing folder | 
**materialized_path** | **str** | Full materialized path from root | 
**tenant_id** | **UUID** |  | 
**name** | **str** |  | 
**description** | **str** |  | 
**max_run_duration_seconds** | **int** |  | 
**instruction_path_part_id** | **UUID** | DOCUMENT path_part of the instruction document | 
**is_active** | **bool** |  | 
**approval_required** | **bool** |  | 
**is_template** | **bool** | Whether this definition is a non-runnable template | 
**common_file_path_part_ids** | **List[UUID]** | Common files attached to every run (path_part ids). The FE renders these as &#39;attached to every run&#39; on the workflow page. | [optional] 
**created_from_id** | **UUID** | Source definition this workflow was copied from (a template or any other workflow); null if hand-authored. | 
**copy_count** | **int** | Number of workflows copied from this definition. | [optional] [default to 0]
**approval_state** | [**PathPartApprovalState**](PathPartApprovalState.md) |  | 
**owner** | [**UserInfo**](UserInfo.md) | Current owner (creator) of the workflow, or null if unowned. | [optional] 
**created_at** | **datetime** |  | 
**updated_at** | **datetime** |  | 
**permissions** | [**ItemPermissions**](ItemPermissions.md) | Caller&#39;s effective rights; null on mutation responses. | [optional] 

## Example

```python
from ksapi.models.workflow_definition_response import WorkflowDefinitionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowDefinitionResponse from a JSON string
workflow_definition_response_instance = WorkflowDefinitionResponse.from_json(json)
# print the JSON string representation of the object
print(WorkflowDefinitionResponse.to_json())

# convert the object into a dict
workflow_definition_response_dict = workflow_definition_response_instance.to_dict()
# create an instance of WorkflowDefinitionResponse from a dict
workflow_definition_response_from_dict = WorkflowDefinitionResponse.from_dict(workflow_definition_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


