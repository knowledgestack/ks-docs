# LastRunSummary

The definition's most recent run — a compact projection for list rows.  ``approval_state`` is the run folder's own approval state (execution and approval are separate axes). Named to avoid colliding with the unrelated ``last_run_timestamp`` document-ingestion concept.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **UUID** |  | 
**execution_state** | [**WorkflowExecutionState**](WorkflowExecutionState.md) |  | 
**approval_state** | [**PathPartApprovalState**](PathPartApprovalState.md) |  | 
**created_at** | **datetime** |  | 
**started_at** | **datetime** |  | [optional] 
**completed_at** | **datetime** |  | [optional] 
**error** | **str** |  | [optional] 

## Example

```python
from ksapi.models.last_run_summary import LastRunSummary

# TODO update the JSON string below
json = "{}"
# create an instance of LastRunSummary from a JSON string
last_run_summary_instance = LastRunSummary.from_json(json)
# print the JSON string representation of the object
print(LastRunSummary.to_json())

# convert the object into a dict
last_run_summary_dict = last_run_summary_instance.to_dict()
# create an instance of LastRunSummary from a dict
last_run_summary_from_dict = LastRunSummary.from_dict(last_run_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


