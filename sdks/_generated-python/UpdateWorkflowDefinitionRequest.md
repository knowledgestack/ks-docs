# UpdateWorkflowDefinitionRequest

Full replacement (PUT semantics).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**description** | **str** |  | [optional] 
**max_run_duration_seconds** | **int** |  | [optional] [default to 1800]
**instruction_path_part_id** | **UUID** | DOCUMENT path_part of the instruction document. Pass null (or omit) to retain the existing pinned instruction; pass a UUID to replace it. Never nulled out — the column is NOT NULL. | [optional] 
**parent_path_part_id** | **UUID** | FOLDER path_part to move the definition under. Pass null (or omit) to leave it where it is. The move is rejected with 409 while any run of this definition is IN_PROGRESS. | [optional] 
**is_active** | **bool** |  | 
**approval_required** | **bool** |  | 

## Example

```python
from ksapi.models.update_workflow_definition_request import UpdateWorkflowDefinitionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateWorkflowDefinitionRequest from a JSON string
update_workflow_definition_request_instance = UpdateWorkflowDefinitionRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateWorkflowDefinitionRequest.to_json())

# convert the object into a dict
update_workflow_definition_request_dict = update_workflow_definition_request_instance.to_dict()
# create an instance of UpdateWorkflowDefinitionRequest from a dict
update_workflow_definition_request_from_dict = UpdateWorkflowDefinitionRequest.from_dict(update_workflow_definition_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


