# RepoTreeEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **str** |  | 
**size** | **int** |  | 
**is_binary** | **bool** |  | 

## Example

```python
from ksapi.models.repo_tree_entry import RepoTreeEntry

# TODO update the JSON string below
json = "{}"
# create an instance of RepoTreeEntry from a JSON string
repo_tree_entry_instance = RepoTreeEntry.from_json(json)
# print the JSON string representation of the object
print(RepoTreeEntry.to_json())

# convert the object into a dict
repo_tree_entry_dict = repo_tree_entry_instance.to_dict()
# create an instance of RepoTreeEntry from a dict
repo_tree_entry_from_dict = RepoTreeEntry.from_dict(repo_tree_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


