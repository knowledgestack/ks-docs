# WorkflowRunAsset

One input or output file/reference of a run, actionable in one call.  ``id`` is the PDO id (``path_part.metadata_obj_id``); ``path_part_id`` is the underlying path part (kept for approval-state / path-part lookups). Route on ``part_type`` to pick the API that takes ``id``: ``DOCUMENT`` → download_document / bulk-download (active version); ``DOCUMENT_VERSION`` → download_document_version (a version-pinned input, e.g. a cloned run's inputs); ``FOLDER`` / ``DATA_SOURCE`` / ``API_CONNECTION`` → list/query via that type's endpoint. Output assets are always ``DOCUMENT``.  ``origin`` tags an input's provenance. A ``DEFINITION_COMMON`` document is surfaced as a ``DOCUMENT`` (resolved from its pinned version to the parent document) so it routes to the doc page like a run-picked reference.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **UUID** | PDO id accepted by the download / list-contents APIs | 
**path_part_id** | **UUID** |  | 
**name** | **str** |  | 
**part_type** | [**PartType**](PartType.md) |  | 
**materialized_path** | **str** |  | 
**approval_state** | [**PathPartApprovalState**](PathPartApprovalState.md) |  | 
**origin** | [**InputOrigin**](InputOrigin.md) |  | [optional] 

## Example

```python
from ksapi.models.workflow_run_asset import WorkflowRunAsset

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowRunAsset from a JSON string
workflow_run_asset_instance = WorkflowRunAsset.from_json(json)
# print the JSON string representation of the object
print(WorkflowRunAsset.to_json())

# convert the object into a dict
workflow_run_asset_dict = workflow_run_asset_instance.to_dict()
# create an instance of WorkflowRunAsset from a dict
workflow_run_asset_from_dict = WorkflowRunAsset.from_dict(workflow_run_asset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


