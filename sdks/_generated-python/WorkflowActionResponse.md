# WorkflowActionResponse

POST response for rerun.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workflow_id** | **str** |  | 
**action** | **str** |  | 
**message** | **str** |  | 

## Example

```python
from ksapi.models.workflow_action_response import WorkflowActionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowActionResponse from a JSON string
workflow_action_response_instance = WorkflowActionResponse.from_json(json)
# print the JSON string representation of the object
print(WorkflowActionResponse.to_json())

# convert the object into a dict
workflow_action_response_dict = workflow_action_response_instance.to_dict()
# create an instance of WorkflowActionResponse from a dict
workflow_action_response_from_dict = WorkflowActionResponse.from_dict(workflow_action_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


