# WorkflowRunCallbackRequest

Request body for the runner callback endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | 
**error** | **str** |  | [optional] 

## Example

```python
from ksapi.models.workflow_run_callback_request import WorkflowRunCallbackRequest

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowRunCallbackRequest from a JSON string
workflow_run_callback_request_instance = WorkflowRunCallbackRequest.from_json(json)
# print the JSON string representation of the object
print(WorkflowRunCallbackRequest.to_json())

# convert the object into a dict
workflow_run_callback_request_dict = workflow_run_callback_request_instance.to_dict()
# create an instance of WorkflowRunCallbackRequest from a dict
workflow_run_callback_request_from_dict = WorkflowRunCallbackRequest.from_dict(workflow_run_callback_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


