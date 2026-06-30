# UpdateWorkflowRunRequest

PATCH body for ``/v1/workflow-runs/{id}`` — NOT_STARTED runs only.  Both fields are optional. A body with both ``None`` is rejected as 400 (no-op PATCH). ``input_scope`` replaces the row's KB-ref list wholesale; ``name`` renames the run path_part (the trigger cascades ``materialized_path`` to every descendant).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input_scope** | **List[UUID]** | New KB-reference scope (DOCUMENT + FOLDER + DATA_SOURCE + API_CONNECTION pp_ids). Replaces the row&#39;s &#x60;&#x60;input_path_part_ids&#x60;&#x60; wholesale. Uploaded files live in &#x60;&#x60;inputs/&#x60;&#x60; and are walked at Start; they are not part of this list. | [optional] 
**name** | **str** | New display name for the run (mirrors path_part.name). | [optional] 
**auto_start** | **bool** | Arm (or disarm) auto-start on a draft run. When set true, the run dispatches itself once its &#x60;&#x60;inputs/&#x60;&#x60; uploads finish ingesting (see &#x60;&#x60;CreateWorkflowRunRequest.auto_start&#x60;&#x60;). Arm a PENDING run after queuing all uploads to avoid a partial-input start. &#x60;&#x60;null&#x60;&#x60; leaves the current setting unchanged. | [optional] 
**user_message** | **str** | Set the note applied when this run auto-starts (see &#x60;&#x60;CreateWorkflowRunRequest.user_message&#x60;&#x60;). &#x60;&#x60;null&#x60;&#x60; leaves the stored message unchanged; send an empty string to clear it. | [optional] 

## Example

```python
from ksapi.models.update_workflow_run_request import UpdateWorkflowRunRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateWorkflowRunRequest from a JSON string
update_workflow_run_request_instance = UpdateWorkflowRunRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateWorkflowRunRequest.to_json())

# convert the object into a dict
update_workflow_run_request_dict = update_workflow_run_request_instance.to_dict()
# create an instance of UpdateWorkflowRunRequest from a dict
update_workflow_run_request_from_dict = UpdateWorkflowRunRequest.from_dict(update_workflow_run_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


