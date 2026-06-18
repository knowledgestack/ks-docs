# WorkflowAdoptionStats

Adoption proxies for a workflow-runs summary.  These are deliberately labelled \"adoption\", not \"value\" — they measure how much the system is used, not the business value it produced (which is not derivable from any column we store).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**runs** | **int** | Runs created in the window. | 
**active_definitions** | **int** | Currently-active workflow definitions in scope (not windowed). | 
**distinct_triggerers** | **int** | Distinct run owners in the window. | 

## Example

```python
from ksapi.models.workflow_adoption_stats import WorkflowAdoptionStats

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowAdoptionStats from a JSON string
workflow_adoption_stats_instance = WorkflowAdoptionStats.from_json(json)
# print the JSON string representation of the object
print(WorkflowAdoptionStats.to_json())

# convert the object into a dict
workflow_adoption_stats_dict = workflow_adoption_stats_instance.to_dict()
# create an instance of WorkflowAdoptionStats from a dict
workflow_adoption_stats_from_dict = WorkflowAdoptionStats.from_dict(workflow_adoption_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


