# WorkflowCancelResponse

Response for generic workflow cancellation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workflow_id** | **str** |  | 
**message** | **str** |  | 

## Example

```python
from ksapi.models.workflow_cancel_response import WorkflowCancelResponse

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowCancelResponse from a JSON string
workflow_cancel_response_instance = WorkflowCancelResponse.from_json(json)
# print the JSON string representation of the object
print(WorkflowCancelResponse.to_json())

# convert the object into a dict
workflow_cancel_response_dict = workflow_cancel_response_instance.to_dict()
# create an instance of WorkflowCancelResponse from a dict
workflow_cancel_response_from_dict = WorkflowCancelResponse.from_dict(workflow_cancel_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


