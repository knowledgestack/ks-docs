# RepoBranchResponse

A retained run branch, independently of whether it reached main.

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
**branch** | **str** |  | 
**base_version_id** | **UUID** |  | 
**integrated_version_id** | **UUID** |  | 
**integrated_head_sha** | **str** |  | 
**files** | [**List[RepoTreeEntry]**](RepoTreeEntry.md) |  | 

## Example

```python
from ksapi.models.repo_branch_response import RepoBranchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RepoBranchResponse from a JSON string
repo_branch_response_instance = RepoBranchResponse.from_json(json)
# print the JSON string representation of the object
print(RepoBranchResponse.to_json())

# convert the object into a dict
repo_branch_response_dict = repo_branch_response_instance.to_dict()
# create an instance of RepoBranchResponse from a dict
repo_branch_response_from_dict = RepoBranchResponse.from_dict(repo_branch_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


