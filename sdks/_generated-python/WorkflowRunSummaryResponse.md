# WorkflowRunSummaryResponse

Aggregate workflow-runs health over a window, permission-scoped.  Read-gated like the run list: the numbers cover only runs under workflows the caller can read (OWNER/ADMIN ⇒ tenant-wide). All windowed metrics filter runs by ``created_at`` in ``[window_start, window_end]``; the approval backlog and ``active_definitions`` are point-in-time (not windowed). ``failure_rate`` and the duration percentiles are ``None`` when their denominator set is empty.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**window_start** | **datetime** |  | 
**window_end** | **datetime** |  | 
**total** | **int** | Runs created in the window. | 
**counts_by_state** | **Dict[str, int]** | Run count per execution_state (all states present). | 
**failure_rate** | **float** | FAILED / (COMPLETED + FAILED); null when no terminal runs. | 
**duration_p50_seconds** | **float** | Median run duration over terminal runs; null when none. | 
**duration_p95_seconds** | **float** | p95 run duration over terminal runs; null when none. | 
**pending_approval_count** | **int** | Runs currently awaiting approval (point-in-time). | 
**oldest_pending_age_seconds** | **float** | Age of the oldest pending-approval request; null when none. | 
**adoption** | [**WorkflowAdoptionStats**](WorkflowAdoptionStats.md) |  | 

## Example

```python
from ksapi.models.workflow_run_summary_response import WorkflowRunSummaryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowRunSummaryResponse from a JSON string
workflow_run_summary_response_instance = WorkflowRunSummaryResponse.from_json(json)
# print the JSON string representation of the object
print(WorkflowRunSummaryResponse.to_json())

# convert the object into a dict
workflow_run_summary_response_dict = workflow_run_summary_response_instance.to_dict()
# create an instance of WorkflowRunSummaryResponse from a dict
workflow_run_summary_response_from_dict = WorkflowRunSummaryResponse.from_dict(workflow_run_summary_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


