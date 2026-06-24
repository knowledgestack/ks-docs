# StartWorkflowRunRequest

Optional JSON body for ``POST /v1/workflow-runs/{id}/start``.  The whole body is optional: an absent body starts the run with just the localized \"Started workflow: X\" opening message, exactly as before. When ``user_message`` is set it is appended to that opening thread message AND injected into the runner's first user turn, so the agent acts on it as guidance layered on the workflow instruction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_message** | **str** | Free-text instruction shown in the run thread and passed to the agent as additional guidance on top of the workflow instruction. Optional. | [optional] 

## Example

```python
from ksapi.models.start_workflow_run_request import StartWorkflowRunRequest

# TODO update the JSON string below
json = "{}"
# create an instance of StartWorkflowRunRequest from a JSON string
start_workflow_run_request_instance = StartWorkflowRunRequest.from_json(json)
# print the JSON string representation of the object
print(StartWorkflowRunRequest.to_json())

# convert the object into a dict
start_workflow_run_request_dict = start_workflow_run_request_instance.to_dict()
# create an instance of StartWorkflowRunRequest from a dict
start_workflow_run_request_from_dict = StartWorkflowRunRequest.from_dict(start_workflow_run_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


