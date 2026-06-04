# SetWorkflowRunApprovalRequest

Body for ``POST /v1/workflow-runs/{run_id}/approval``.  Approves an entire completed run in one call — every output document under ``outputs/`` plus the run folder itself. ``reason`` is an optional reviewer note persisted on each approval audit row.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** | **str** |  | 
**reason** | **str** | Optional reviewer note attached to the decision. | [optional] 

## Example

```python
from ksapi.models.set_workflow_run_approval_request import SetWorkflowRunApprovalRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SetWorkflowRunApprovalRequest from a JSON string
set_workflow_run_approval_request_instance = SetWorkflowRunApprovalRequest.from_json(json)
# print the JSON string representation of the object
print(SetWorkflowRunApprovalRequest.to_json())

# convert the object into a dict
set_workflow_run_approval_request_dict = set_workflow_run_approval_request_instance.to_dict()
# create an instance of SetWorkflowRunApprovalRequest from a dict
set_workflow_run_approval_request_from_dict = SetWorkflowRunApprovalRequest.from_dict(set_workflow_run_approval_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


