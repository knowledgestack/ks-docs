# RepoTreeResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commit** | **str** | Null when the repository does not exist. | 
**entries** | [**List[RepoTreeEntry]**](RepoTreeEntry.md) | Every file, path-sorted. | 

## Example

```python
from ksapi.models.repo_tree_response import RepoTreeResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RepoTreeResponse from a JSON string
repo_tree_response_instance = RepoTreeResponse.from_json(json)
# print the JSON string representation of the object
print(RepoTreeResponse.to_json())

# convert the object into a dict
repo_tree_response_dict = repo_tree_response_instance.to_dict()
# create an instance of RepoTreeResponse from a dict
repo_tree_response_from_dict = RepoTreeResponse.from_dict(repo_tree_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


