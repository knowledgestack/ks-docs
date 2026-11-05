# FolderResponseOrDocumentResponseOrWorkflowDefinitionResponseOrWorkflowRunResponseOrDataSourceResponseOrDataSourceSchemaR


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**part_type** | **str** | Path part type | [default to 'EMAIL_MESSAGE']
**id** | **UUID** |  | 
**path_part_id** | **UUID** |  | 
**name** | **str** | PathPart name — this PDO&#39;s own UUID, shared by every folder-listing variant. Render &#x60;&#x60;title&#x60;&#x60; instead; the name exists so path-based callers can treat the listing union uniformly. | 
**parent_path_part_id** | **UUID** |  | 
**materialized_path** | **str** |  | 
**system_managed** | **bool** | Whether this document is system-managed | 
**approval_state** | [**PathPartApprovalState**](PathPartApprovalState.md) |  | 
**exclude_from_qdrant** | **bool** | Direct exclusion flag on this document&#39;s path part only. The effective exclusion also applies when any ancestor folder has the flag set — fetch the ancestry to determine effective state. | 
**tenant_id** | **UUID** |  | 
**owner** | [**UserInfo**](UserInfo.md) |  | [optional] 
**created_at** | **datetime** |  | 
**updated_at** | **datetime** |  | 
**tags** | [**List[TagResponse]**](TagResponse.md) | Tags attached to this document | [optional] 
**permissions** | [**ItemPermissions**](ItemPermissions.md) |  | 
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
**last_run** | [**LastRunSummary**](LastRunSummary.md) | The definition&#39;s most recent run, or null if never run. | [optional] 
**pending_approval_count** | **int** | Number of this definition&#39;s runs awaiting approval. | [optional] [default to 0]
**schedule_cadence** | [**ScheduleCadence**](ScheduleCadence.md) |  | [optional] 
**schedule_start_at** | **datetime** | First occurrence, read in &#x60;&#x60;schedule_timezone&#x60;&#x60;. | [optional] 
**schedule_timezone** | **str** | IANA zone the schedule fires in, e.g. &#x60;&#x60;Asia/Shanghai&#x60;&#x60;. Resolved at arm time: the tenant timezone unless the caller overrode it. Null only when unscheduled. | [optional] 
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
**engine** | [**DataSourceEngine**](DataSourceEngine.md) |  | [optional] 
**source_type** | [**SourceType**](SourceType.md) |  | 
**connection_summary** | [**ConnectionSummary**](ConnectionSummary.md) | Where the connector points, without the password. Null on a YIDINGSYNC connector until provisioning has built its database, so polling this is how the UI learns the sync is ready. | [optional] 
**source_config** | [**SourceConfigSummary**](SourceConfigSummary.md) | A YIDINGSYNC connector&#39;s crawler config without the password: which shop, from when, and the crawl recurrence. Null on DIRECT and on EMAIL, which reports through email_config. | [optional] 
**email_config** | [**EmailConfigSummary**](EmailConfigSummary.md) | An EMAIL connector&#39;s folder list and cron; null otherwise | [optional] 
**mailbox_address** | **str** | The mailbox an EMAIL connector syncs; null otherwise, and null on a mailbox connector until its first consent lands, because the address is read out of the id token rather than typed. From then on it is fixed: a later sign-in as another account is refused rather than stored, so this is the mailbox whose mail is in the tree. The connector&#39;s own &#x60;&#x60;name&#x60;&#x60; is a separate label of the caller&#39;s choosing; show both. | [optional] 
**mail_credential** | [**MailCredentialOption**](MailCredentialOption.md) | The app registration this mailbox authenticates with; null on a connector that is not a mailbox. Name and provider only: the ids are the admin&#39;s business and the secret is nobody&#39;s | [optional] 
**email_progress** | [**EmailSyncProgress**](EmailSyncProgress.md) | When an EMAIL connector last reported in; null otherwise. Read with sync_status, which says whether it is healthy rather than whether it is still moving. | [optional] 
**sync_status** | [**ConnectorSyncStatus**](ConnectorSyncStatus.md) |  | 
**sync_cron** | **str** | How often this connector is crawled, as a cron expression in the tenant&#39;s timezone. Absent on a source nothing crawls. | [optional] 
**last_sync_error** | **str** | Why the last crawl ended badly | [optional] 
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
**skill_md** | **str** | Full SKILL.md content; populated on the detail read and on mutation responses, null on list. | [optional] 
**file_paths** | **List[str]** | Bundle file paths relative to the skill root (SKILL.md excluded); populated on the detail read and on mutation responses, empty on list. | [optional] 
**files** | [**List[SkillFile]**](SkillFile.md) | Bundle files with their contents; populated only on the detail read (GET /skills/{id}), null on list. Lets the editor read the current file set so a PATCH can safely resubmit the whole set. | [optional] 
**file_documents** | [**List[SkillFileDocument]**](SkillFileDocument.md) | Every working file with its Document id, SKILL.md included, sorted by path; populated with file_paths, empty on list. | [optional] 
**has_unpublished_changes** | **bool** | Whether the working copy differs from the active published version. Always present (incl. list responses) so the UI can flag a skill with an unpublished draft. | [optional] [default to False]
**source_conversation_id** | **str** |  | 
**title** | **str** |  | 
**message_count** | **int** | How many mails this conversation holds — the number a collapsed row shows beside the participants. Counted for the whole page in one query; zero for a conversation created before its first mail was stored | [optional] [default to 0]
**participants** | **List[str]** | Who has spoken in this conversation: its distinct senders, oldest first, at most five. From headers verbatim — compare them against the connector&#39;s mailbox_address to render your own side as \&quot;me\&quot;; the server does not localize. For a Sent view, where every row would otherwise name the mailbox itself, read &#x60;&#x60;last_message.recipients&#x60;&#x60; instead — the whole conversation&#39;s audience is not here, because a twenty-recipient thread would not fit a row | [optional] 
**has_attachments** | **bool** | Whether this mail is the one in the conversation carrying a file. The row&#39;s paperclip answers for the whole conversation and cannot say which message earned it. Counted from the files under this mail as they stand, so it never points at nothing: an attachment the ingest refused, or one deleted since, leaves this false | [optional] [default to False]
**attachment_names** | **List[str]** | The filenames to show under the row, at most two. Documents before images, then the newest mail&#39;s files first: a signature logo is stored like any other attachment, so ordering by arrival alone would name &#x60;&#x60;image001.png&#x60;&#x60; and leave the invoice behind a click. Fewer than &#x60;&#x60;attachment_count&#x60;&#x60; by design — open the conversation for the rest | [optional] 
**attachment_count** | **int** | How many attachments this conversation holds across all its mails, counting the ones not named above. Counts what was stored, which is what can be opened; it moves together with &#x60;&#x60;has_attachments&#x60;&#x60; | [optional] [default to 0]
**last_message_at** | **datetime** | When the newest mail in this conversation was sent. Order a mailbox list on it with &#x60;&#x60;sort_by&#x3D;LAST_MESSAGE_AT&#x60;&#x60;; &#x60;&#x60;created_at&#x60;&#x60; is when the conversation&#39;s first mail was stored, so it sorts a months-old conversation that got a reply today as months old. Absent until the conversation holds a mail. | [optional] 
**last_message** | [**EmailThreadLastMessage**](EmailThreadLastMessage.md) | The newest mail in this conversation, as much of it as a collapsed row needs. Served from one join rather than a request per row. Absent until the conversation holds a mail. | [optional] 
**external_message_id** | **str** |  | 
**external_source_folder** | **str** |  | 
**preview** | **str** | The opening of this mail&#39;s own words, as one line with the markup taken out — for a row in a list, so a list does not need a body fetch per row. Null for a mail stored without a body | [optional] 
**sent_at** | **datetime** |  | 
**sender** | **str** |  | 
**recipients** | **List[str]** |  | 
**cc_recipients** | **List[str]** |  | 
**bcc_recipients** | **List[str]** |  | 

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


