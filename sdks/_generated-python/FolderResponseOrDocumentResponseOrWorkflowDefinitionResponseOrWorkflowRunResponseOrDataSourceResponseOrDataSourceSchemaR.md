# FolderResponseOrDocumentResponseOrWorkflowDefinitionResponseOrWorkflowRunResponseOrDataSourceResponseOrDataSourceSchemaR


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**part_type** | **str** | Path part type | [default to 'SKILL']
**id** | **UUID** |  | 
**path_part_id** | **UUID** | SKILL path_part of this skill | 
**name** | **str** |  | 
**parent_path_part_id** | **UUID** | FOLDER path_part of the containing folder | 
**materialized_path** | **str** | Full materialized path from root | 
**system_managed** | **bool** | Whether this document is system-managed | 
**approval_state** | [**PathPartApprovalState**](PathPartApprovalState.md) |  | 
**exclude_from_qdrant** | **bool** | Direct exclusion flag on this document&#39;s path part only. The effective exclusion also applies when any ancestor folder has the flag set — fetch the ancestry to determine effective state. | 
**tenant_id** | **UUID** |  | 
**owner** | [**UserInfo**](UserInfo.md) | Creator, or null. | [optional] 
**created_at** | **datetime** |  | 
**updated_at** | **datetime** |  | 
**tags** | [**List[TagResponse]**](TagResponse.md) | Tags attached to this document | [optional] 
**permissions** | [**ItemPermissions**](ItemPermissions.md) | Caller&#39;s effective rights; null on mutation responses. | 
**document_type** | [**DocumentType**](DocumentType.md) |  | 
**document_origin** | [**DocumentOrigin**](DocumentOrigin.md) |  | 
**active_version_id** | **UUID** | Active version ID | 
**active_version** | [**DocumentVersionResponse**](DocumentVersionResponse.md) |  | 
**checkout** | [**DocumentCheckoutResponse**](DocumentCheckoutResponse.md) | Active write-lock state. Null when no checkout is held. Populated on detail endpoints (GET /v1/documents/{id}). Any tenant member with read access may observe this state. | [optional] 
**description** | **str** | One-line &#39;use when…&#39; routing signal, from the SKILL.md frontmatter. | 
**max_run_duration_seconds** | **int** |  | 
**instruction_path_part_id** | **UUID** | DOCUMENT path_part of the instruction document | 
**is_active** | **bool** |  | 
**approval_required** | **bool** |  | 
**is_template** | **bool** | Whether this definition is a non-runnable template | 
**selected_skill_ids** | **List[UUID]** | Skill PDO ids force-loaded into every run by default. The FE prefills these as the run&#39;s selected skills. | [optional] 
**common_file_path_part_ids** | **List[UUID]** | Common files attached to every run (path_part ids). The FE renders these as &#39;attached to every run&#39; on the workflow page. | [optional] 
**created_from_id** | **UUID** | Source definition this workflow was copied from (a template or any other workflow); null if hand-authored. | 
**copy_count** | **int** | Number of workflows copied from this definition. | [optional] [default to 0]
**workflow_definition_id** | **UUID** |  | 
**triggered_by** | [**UserInfo**](UserInfo.md) |  | 
**execution_state** | [**WorkflowExecutionState**](WorkflowExecutionState.md) |  | 
**started_at** | **datetime** | When Start dispatched the run. NULL while the run is NOT_STARTED. | 
**completed_at** | **datetime** |  | 
**run_snapshot** | [**WorkflowRunSnapshot**](WorkflowRunSnapshot.md) | Frozen workflow configuration captured at Start time. NULL while the run is NOT_STARTED. | 
**error** | **str** |  | 
**auto_start** | **bool** | Whether the run dispatches itself once its &#x60;&#x60;inputs/&#x60;&#x60; uploads finish ingesting, with no separate Start call. | 
**auto_start_user_message** | **str** | The note applied when this run auto-starts (set via create / PATCH &#x60;&#x60;user_message&#x60;&#x60;); null when none was supplied. | [optional] 
**inputs** | [**RunFolder**](RunFolder.md) |  | 
**outputs** | [**RunFolder**](RunFolder.md) |  | 
**discussions** | [**RunFolderRef**](RunFolderRef.md) |  | 
**excluded_common_files** | [**List[ExcludedCommonFile]**](ExcludedCommonFile.md) | Definition common files that were excluded from this run at Start (deleted or unreadable by the starter). Empty until Start builds the snapshot, and empty for the common happy path. | [optional] 
**run_thread_id** | **UUID** | The run&#39;s primary chat thread (1:1). NULL while NOT_STARTED; set by Start. The FE opens the run by opening this thread. | [optional] 
**engine** | [**DataSourceEngine**](DataSourceEngine.md) |  | 
**data_source_id** | **UUID** |  | 
**schema_name** | **str** | Real namespace in the external DB | 
**is_default** | **bool** | True for the connection&#39;s default namespace | 
**tables** | [**List[DataSourceTableResponse]**](DataSourceTableResponse.md) | Readable modeled tables in this schema | [optional] 
**data_source_schema_id** | **UUID** | PDO id of the parent schema this table belongs to | 
**table_name** | **str** |  | 
**column_config** | **List[Dict[str, object]]** |  | 
**base_url** | **str** |  | 
**network_class** | [**NetworkClass**](NetworkClass.md) |  | 
**verify_tls** | **bool** |  | 
**api_docs** | **str** |  | 
**disclaimer_accepted_at** | **datetime** |  | 
**disclaimer_accepted_by** | **UUID** |  | 
**skill_md** | **str** | Full SKILL.md content; populated on detail reads, null on list. | [optional] 
**script_names** | **List[str]** | Bundled script file names; populated on detail reads. | [optional] 
**has_unpublished_changes** | **bool** | Whether the working copy differs from the active published version. Always present (incl. list responses) so the UI can flag a skill with an unpublished draft. | [optional] [default to False]

## Example

```python
from ksapi.models.folder_response_or_document_response_or_workflow_definition_response_or_workflow_run_response_or_data_source_response_or_data_source_schema_r import FolderResponseOrDocumentResponseOrWorkflowDefinitionResponseOrWorkflowRunResponseOrDataSourceResponseOrDataSourceSchemaR

# TODO update the JSON string below
json = "{}"
# create an instance of FolderResponseOrDocumentResponseOrWorkflowDefinitionResponseOrWorkflowRunResponseOrDataSourceResponseOrDataSourceSchemaR from a JSON string
folder_response_or_document_response_or_workflow_definition_response_or_workflow_run_response_or_data_source_response_or_data_source_schema_r_instance = FolderResponseOrDocumentResponseOrWorkflowDefinitionResponseOrWorkflowRunResponseOrDataSourceResponseOrDataSourceSchemaR.from_json(json)
# print the JSON string representation of the object
print(FolderResponseOrDocumentResponseOrWorkflowDefinitionResponseOrWorkflowRunResponseOrDataSourceResponseOrDataSourceSchemaR.to_json())

# convert the object into a dict
folder_response_or_document_response_or_workflow_definition_response_or_workflow_run_response_or_data_source_response_or_data_source_schema_r_dict = folder_response_or_document_response_or_workflow_definition_response_or_workflow_run_response_or_data_source_response_or_data_source_schema_r_instance.to_dict()
# create an instance of FolderResponseOrDocumentResponseOrWorkflowDefinitionResponseOrWorkflowRunResponseOrDataSourceResponseOrDataSourceSchemaR from a dict
folder_response_or_document_response_or_workflow_definition_response_or_workflow_run_response_or_data_source_response_or_data_source_schema_r_from_dict = FolderResponseOrDocumentResponseOrWorkflowDefinitionResponseOrWorkflowRunResponseOrDataSourceResponseOrDataSourceSchemaR.from_dict(folder_response_or_document_response_or_workflow_definition_response_or_workflow_run_response_or_data_source_response_or_data_source_schema_r_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


