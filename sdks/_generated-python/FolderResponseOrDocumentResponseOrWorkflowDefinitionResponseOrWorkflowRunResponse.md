# FolderResponseOrDocumentResponseOrWorkflowDefinitionResponseOrWorkflowRunResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**part_type** | **str** | Path part type | [default to 'WORKFLOW_RUN']
**id** | **UUID** |  | 
**path_part_id** | **UUID** | WORKFLOW_RUN path_part of this run | 
**name** | **str** | Run display name; mirrors &#x60;&#x60;path_part.name&#x60;&#x60; (the run&#39;s UUID until a slug feature lands). | 
**parent_path_part_id** | **UUID** | FOLDER path_part of the containing folder | 
**materialized_path** | **str** | Full materialized path from root | 
**system_managed** | **bool** | Whether this document is system-managed | 
**approval_state** | [**PathPartApprovalState**](PathPartApprovalState.md) |  | 
**exclude_from_qdrant** | **bool** | Direct exclusion flag on this document&#39;s path part only. The effective exclusion also applies when any ancestor folder has the flag set — fetch the ancestry to determine effective state. | 
**tenant_id** | **UUID** |  | 
**created_at** | **datetime** |  | 
**updated_at** | **datetime** |  | 
**tags** | [**List[TagResponse]**](TagResponse.md) | Tags attached to this document | [optional] 
**can_write** | **bool** | Whether the current caller has write access to this document. Only populated by endpoints that compute it (e.g. folder contents). | [optional] 
**document_type** | [**DocumentType**](DocumentType.md) |  | 
**document_origin** | [**DocumentOrigin**](DocumentOrigin.md) |  | 
**active_version_id** | **UUID** | Active version ID | 
**active_version** | [**DocumentVersionResponse**](DocumentVersionResponse.md) |  | 
**owner** | [**UserInfo**](UserInfo.md) |  | 
**checkout** | [**DocumentCheckoutResponse**](DocumentCheckoutResponse.md) | Active write-lock state. Null when no checkout is held. Populated on detail endpoints (GET /v1/documents/{id}). Any tenant member with read access may observe this state. | [optional] 
**description** | **str** |  | 
**max_run_duration_seconds** | **int** |  | 
**instruction_path_part_id** | **UUID** | DOCUMENT path_part of the instruction document | 
**is_active** | **bool** |  | 
**approval_required** | **bool** |  | 
**workflow_definition_id** | **UUID** |  | 
**triggered_by** | [**UserInfo**](UserInfo.md) |  | 
**execution_state** | [**WorkflowExecutionState**](WorkflowExecutionState.md) |  | 
**started_at** | **datetime** | When Start dispatched the run. NULL while the run is NOT_STARTED. | 
**completed_at** | **datetime** |  | 
**run_snapshot** | [**WorkflowRunSnapshot**](WorkflowRunSnapshot.md) | Frozen workflow configuration captured at Start time. NULL while the run is NOT_STARTED. | 
**error** | **str** |  | 
**inputs_path_part_id** | **UUID** | FOLDER path_part of the run&#39;s &#x60;&#x60;inputs/&#x60;&#x60; subfolder | 
**outputs_path_part_id** | **UUID** | FOLDER path_part of the run&#39;s &#x60;&#x60;outputs/&#x60;&#x60; subfolder | 
**discussions_path_part_id** | **UUID** | FOLDER path_part of the run&#39;s &#x60;&#x60;discussions/&#x60;&#x60; subfolder | 
**input_path_part_ids** | **List[UUID]** | Flat list of currently-pinned KB-reference path_part ids (DOCUMENT + FOLDER). On a NOT_STARTED run this is the only surface for KB refs (run_snapshot is NULL). | [optional] 
**outputs_path_part_ids** | **List[UUID]** |  | 
**run_thread_id** | **UUID** | The run&#39;s primary chat thread (1:1). NULL while NOT_STARTED; set by Start. The FE opens the run by opening this thread. | [optional] 

## Example

```python
from ksapi.models.folder_response_or_document_response_or_workflow_definition_response_or_workflow_run_response import FolderResponseOrDocumentResponseOrWorkflowDefinitionResponseOrWorkflowRunResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FolderResponseOrDocumentResponseOrWorkflowDefinitionResponseOrWorkflowRunResponse from a JSON string
folder_response_or_document_response_or_workflow_definition_response_or_workflow_run_response_instance = FolderResponseOrDocumentResponseOrWorkflowDefinitionResponseOrWorkflowRunResponse.from_json(json)
# print the JSON string representation of the object
print(FolderResponseOrDocumentResponseOrWorkflowDefinitionResponseOrWorkflowRunResponse.to_json())

# convert the object into a dict
folder_response_or_document_response_or_workflow_definition_response_or_workflow_run_response_dict = folder_response_or_document_response_or_workflow_definition_response_or_workflow_run_response_instance.to_dict()
# create an instance of FolderResponseOrDocumentResponseOrWorkflowDefinitionResponseOrWorkflowRunResponse from a dict
folder_response_or_document_response_or_workflow_definition_response_or_workflow_run_response_from_dict = FolderResponseOrDocumentResponseOrWorkflowDefinitionResponseOrWorkflowRunResponse.from_dict(folder_response_or_document_response_or_workflow_definition_response_or_workflow_run_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


