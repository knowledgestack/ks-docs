# RunsInProgressStatus

Workflow runs in progress against the plan's cap on runs at once.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**used** | **int** | Workflow runs in progress now | 
**limit** | **int** | Runs the plan admits at once; null when it does not cap them. A start past it is refused until a run ends. | 

## Example

```python
from ksapi.models.runs_in_progress_status import RunsInProgressStatus

# TODO update the JSON string below
json = "{}"
# create an instance of RunsInProgressStatus from a JSON string
runs_in_progress_status_instance = RunsInProgressStatus.from_json(json)
# print the JSON string representation of the object
print(RunsInProgressStatus.to_json())

# convert the object into a dict
runs_in_progress_status_dict = runs_in_progress_status_instance.to_dict()
# create an instance of RunsInProgressStatus from a dict
runs_in_progress_status_from_dict = RunsInProgressStatus.from_dict(runs_in_progress_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


