# RepoCommitSummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sha** | **str** |  | 
**subject** | **str** | First line of the commit message. | 
**authored_at** | **datetime** |  | 
**run_id** | **UUID** | The run saving this repository snapshot. | 
**saved_by_user_id** | **UUID** |  | 

## Example

```python
from ksapi.models.repo_commit_summary import RepoCommitSummary

# TODO update the JSON string below
json = "{}"
# create an instance of RepoCommitSummary from a JSON string
repo_commit_summary_instance = RepoCommitSummary.from_json(json)
# print the JSON string representation of the object
print(RepoCommitSummary.to_json())

# convert the object into a dict
repo_commit_summary_dict = repo_commit_summary_instance.to_dict()
# create an instance of RepoCommitSummary from a dict
repo_commit_summary_from_dict = RepoCommitSummary.from_dict(repo_commit_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


