# WorkflowOutputStatsResponse

Avg documents generated per workflow definition (completed runs).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**per_definition** | [**List[DefinitionOutputStat]**](DefinitionOutputStat.md) |  | [optional] 
**overall_avg** | **float** | Mean output DOCUMENTs across all completed runs; null when none. | 

## Example

```python
from ksapi.models.workflow_output_stats_response import WorkflowOutputStatsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowOutputStatsResponse from a JSON string
workflow_output_stats_response_instance = WorkflowOutputStatsResponse.from_json(json)
# print the JSON string representation of the object
print(WorkflowOutputStatsResponse.to_json())

# convert the object into a dict
workflow_output_stats_response_dict = workflow_output_stats_response_instance.to_dict()
# create an instance of WorkflowOutputStatsResponse from a dict
workflow_output_stats_response_from_dict = WorkflowOutputStatsResponse.from_dict(workflow_output_stats_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


