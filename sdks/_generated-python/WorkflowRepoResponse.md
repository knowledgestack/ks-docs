# WorkflowRepoResponse

The workflow's repository at its current ``main``.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Directory name runs check the repository out under (&#x60;/work/&lt;name&gt;&#x60;); fixed by the first save. | 
**exists** | **bool** |  | 
**version_id** | **UUID** | DocumentVersion holding the current main; null before any save. | 
**head** | [**RepoCommitSummary**](RepoCommitSummary.md) |  | 
**file_count** | **int** |  | 
**total_bytes** | **int** |  | 
**commit_count** | **int** |  | 
**updated_at** | **datetime** |  | 
**writable_by_me** | **bool** | Whether the caller may save new versions (write on the workflow). | 
**instruction_version_id** | **UUID** | Instruction version (DOCUMENT_VERSION path_part) the current main was saved against. | 

## Example

```python
from ksapi.models.workflow_repo_response import WorkflowRepoResponse

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowRepoResponse from a JSON string
workflow_repo_response_instance = WorkflowRepoResponse.from_json(json)
# print the JSON string representation of the object
print(WorkflowRepoResponse.to_json())

# convert the object into a dict
workflow_repo_response_dict = workflow_repo_response_instance.to_dict()
# create an instance of WorkflowRepoResponse from a dict
workflow_repo_response_from_dict = WorkflowRepoResponse.from_dict(workflow_repo_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


