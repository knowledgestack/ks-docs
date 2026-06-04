# CloneWorkflowRunRequest

POST body for ``/v1/workflow-runs/{id}/clone``.  Creates a new NOT_STARTED run under the same definition. When ``include_inputs`` is True, the new run's ``input_path_part_ids`` are pinned from the source's ``run_snapshot.inputs`` — uploaded DVs stay in the source's ``inputs/`` and are referenced by path_part_id (no S3 copy, no re-ingest). The source must have a snapshot to clone from, so cloning a NOT_STARTED source returns 409.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**include_inputs** | **bool** | When True, the new run&#39;s input_path_part_ids are pinned from the source run&#39;s snapshotted inputs (DOCUMENT_VERSION + FOLDER path_parts). When False, the new run is created with an empty input scope. | 

## Example

```python
from ksapi.models.clone_workflow_run_request import CloneWorkflowRunRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CloneWorkflowRunRequest from a JSON string
clone_workflow_run_request_instance = CloneWorkflowRunRequest.from_json(json)
# print the JSON string representation of the object
print(CloneWorkflowRunRequest.to_json())

# convert the object into a dict
clone_workflow_run_request_dict = clone_workflow_run_request_instance.to_dict()
# create an instance of CloneWorkflowRunRequest from a dict
clone_workflow_run_request_from_dict = CloneWorkflowRunRequest.from_dict(clone_workflow_run_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


