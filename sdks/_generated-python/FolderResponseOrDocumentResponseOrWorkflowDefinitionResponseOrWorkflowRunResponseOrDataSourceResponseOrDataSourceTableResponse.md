# FolderResponseOrDocumentResponseOrWorkflowDefinitionResponseOrWorkflowRunResponseOrDataSourceResponseOrDataSourceTableResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**part_type** | **str** | Path part type | [default to 'DATA_SOURCE_TABLE']
**id** | **UUID** |  | 
**path_part_id** | **UUID** | DATA_SOURCE_TABLE path_part of this table | 
**name** | **str** |  | 
**parent_path_part_id** | **UUID** | DATA_SOURCE path_part of the parent connector | 
**materialized_path** | **str** | Full materialized path from root | 
**system_managed** | **bool** | Whether this document is system-managed | 
**approval_state** | [**PathPartApprovalState**](PathPartApprovalState.md) |  | 
**exclude_from_qdrant** | **bool** | Direct exclusion flag on this document&#39;s path part only. The effective exclusion also applies when any ancestor folder has the flag set — fetch the ancestry to determine effective state. | 
**tenant_id** | **UUID** |  | 
**created_at** | **datetime** |  | 
**updated_at** | **datetime** |  | 
**tags** | [**List[TagResponse]**](TagResponse.md) | Tags attached to this document | [optional] 
**permissions** | [**ItemPermissions**](ItemPermissions.md) | Caller&#39;s effective rights; null on mutation responses. | [optional] 
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
**engine** | [**DataSourceEngine**](DataSourceEngine.md) |  | 
**data_source_id** | **UUID** |  | 
**table_name** | **str** |  | 
**column_config** | **List[Dict[str, object]]** |  | 

## Example

```python
from ksapi.models.folder_response_or_document_response_or_workflow_definition_response_or_workflow_run_response_or_data_source_response_or_data_source_table_response import FolderResponseOrDocumentResponseOrWorkflowDefinitionResponseOrWorkflowRunResponseOrDataSourceResponseOrDataSourceTableResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FolderResponseOrDocumentResponseOrWorkflowDefinitionResponseOrWorkflowRunResponseOrDataSourceResponseOrDataSourceTableResponse from a JSON string
folder_response_or_document_response_or_workflow_definition_response_or_workflow_run_response_or_data_source_response_or_data_source_table_response_instance = FolderResponseOrDocumentResponseOrWorkflowDefinitionResponseOrWorkflowRunResponseOrDataSourceResponseOrDataSourceTableResponse.from_json(json)
# print the JSON string representation of the object
print(FolderResponseOrDocumentResponseOrWorkflowDefinitionResponseOrWorkflowRunResponseOrDataSourceResponseOrDataSourceTableResponse.to_json())

# convert the object into a dict
folder_response_or_document_response_or_workflow_definition_response_or_workflow_run_response_or_data_source_response_or_data_source_table_response_dict = folder_response_or_document_response_or_workflow_definition_response_or_workflow_run_response_or_data_source_response_or_data_source_table_response_instance.to_dict()
# create an instance of FolderResponseOrDocumentResponseOrWorkflowDefinitionResponseOrWorkflowRunResponseOrDataSourceResponseOrDataSourceTableResponse from a dict
folder_response_or_document_response_or_workflow_definition_response_or_workflow_run_response_or_data_source_response_or_data_source_table_response_from_dict = FolderResponseOrDocumentResponseOrWorkflowDefinitionResponseOrWorkflowRunResponseOrDataSourceResponseOrDataSourceTableResponse.from_dict(folder_response_or_document_response_or_workflow_definition_response_or_workflow_run_response_or_data_source_response_or_data_source_table_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


