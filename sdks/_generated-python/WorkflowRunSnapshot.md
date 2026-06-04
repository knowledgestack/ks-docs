# WorkflowRunSnapshot

Frozen workflow configuration captured at trigger time.  ``workflow_definition_id`` and ``user_id`` are NOT stored here — they live directly on the ``WorkflowRun`` row and are surfaced via ``WorkflowRunResponse`` top-level fields.  Inputs are per-run; outputs land in the run's ``outputs/`` folder. The agent resolves the run's inputs/outputs/discussions folders by listing the run-folder children at activity startup.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workflow_name** | **str** |  | 
**max_run_duration_seconds** | **int** |  | 
**instruction** | [**InstructionSnapshot**](InstructionSnapshot.md) |  | 
**inputs** | [**List[InputSnapshot]**](InputSnapshot.md) |  | 

## Example

```python
from ksapi.models.workflow_run_snapshot import WorkflowRunSnapshot

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowRunSnapshot from a JSON string
workflow_run_snapshot_instance = WorkflowRunSnapshot.from_json(json)
# print the JSON string representation of the object
print(WorkflowRunSnapshot.to_json())

# convert the object into a dict
workflow_run_snapshot_dict = workflow_run_snapshot_instance.to_dict()
# create an instance of WorkflowRunSnapshot from a dict
workflow_run_snapshot_from_dict = WorkflowRunSnapshot.from_dict(workflow_run_snapshot_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


