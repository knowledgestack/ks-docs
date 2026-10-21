# RepoSnapshot

The workflow repository version a run was started against.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commit** | **str** | Commit id of main the run checks out | 
**version_id** | **UUID** | DocumentVersion holding that main&#39;s bundle | 
**instruction_version_id** | **UUID** | Instruction version (DOCUMENT_VERSION path_part) that repository version was saved against; the runner compares it with this run&#39;s pinned instruction. | [optional] 

## Example

```python
from ksapi.models.repo_snapshot import RepoSnapshot

# TODO update the JSON string below
json = "{}"
# create an instance of RepoSnapshot from a JSON string
repo_snapshot_instance = RepoSnapshot.from_json(json)
# print the JSON string representation of the object
print(RepoSnapshot.to_json())

# convert the object into a dict
repo_snapshot_dict = repo_snapshot_instance.to_dict()
# create an instance of RepoSnapshot from a dict
repo_snapshot_from_dict = RepoSnapshot.from_dict(repo_snapshot_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


