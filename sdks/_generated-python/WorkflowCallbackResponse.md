# WorkflowCallbackResponse

Response from the runner callback endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | 

## Example

```python
from ksapi.models.workflow_callback_response import WorkflowCallbackResponse

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowCallbackResponse from a JSON string
workflow_callback_response_instance = WorkflowCallbackResponse.from_json(json)
# print the JSON string representation of the object
print(WorkflowCallbackResponse.to_json())

# convert the object into a dict
workflow_callback_response_dict = workflow_callback_response_instance.to_dict()
# create an instance of WorkflowCallbackResponse from a dict
workflow_callback_response_from_dict = WorkflowCallbackResponse.from_dict(workflow_callback_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


