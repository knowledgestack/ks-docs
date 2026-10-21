# RepoVersionResponse

One saved version: a new main and the run that saved it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version_id** | **UUID** |  | 
**head_sha** | **str** |  | 
**previous_head_sha** | **str** |  | 
**commits_added** | **int** |  | 
**run_id** | **UUID** |  | 
**saved_by_user_id** | **UUID** |  | 
**saved_at** | **datetime** |  | 
**instruction_version_id** | **UUID** |  | 
**candidate_version_id** | **UUID** | Retained run-branch version this publication integrated. | [optional] 

## Example

```python
from ksapi.models.repo_version_response import RepoVersionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RepoVersionResponse from a JSON string
repo_version_response_instance = RepoVersionResponse.from_json(json)
# print the JSON string representation of the object
print(RepoVersionResponse.to_json())

# convert the object into a dict
repo_version_response_dict = repo_version_response_instance.to_dict()
# create an instance of RepoVersionResponse from a dict
repo_version_response_from_dict = RepoVersionResponse.from_dict(repo_version_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


