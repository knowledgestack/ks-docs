# CreateWorkflowDefinitionRequest

Create a new workflow definition.  Inputs are per-run (see ``POST /workflow-definitions/{id}/runs``) so only the instruction lives on the definition. ``instruction_path_part_id`` is a ``DOCUMENT`` path_part.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**description** | **str** |  | [optional] 
**max_run_duration_seconds** | **int** |  | [optional] [default to 1800]
**instruction_path_part_id** | **UUID** | DOCUMENT path_part of the instruction document. Omit (or pass null) to have the server auto-create an empty instruction.md. | [optional] 
**approval_required** | **bool** |  | 

## Example

```python
from ksapi.models.create_workflow_definition_request import CreateWorkflowDefinitionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateWorkflowDefinitionRequest from a JSON string
create_workflow_definition_request_instance = CreateWorkflowDefinitionRequest.from_json(json)
# print the JSON string representation of the object
print(CreateWorkflowDefinitionRequest.to_json())

# convert the object into a dict
create_workflow_definition_request_dict = create_workflow_definition_request_instance.to_dict()
# create an instance of CreateWorkflowDefinitionRequest from a dict
create_workflow_definition_request_from_dict = CreateWorkflowDefinitionRequest.from_dict(create_workflow_definition_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


