# RecordRepoSaveSkipRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**run_id** | **UUID** | The run whose turn produced the changes. | 
**reason** | [**RepoSaveSkipReason**](RepoSaveSkipReason.md) |  | 
**detail** | **str** | A machine-readable code adding context, e.g. the refusal code (&#x60;repo_too_large&#x60;) or &#x60;commits_not_on_main&#x60;; never free text. | [optional] 

## Example

```python
from ksapi.models.record_repo_save_skip_request import RecordRepoSaveSkipRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RecordRepoSaveSkipRequest from a JSON string
record_repo_save_skip_request_instance = RecordRepoSaveSkipRequest.from_json(json)
# print the JSON string representation of the object
print(RecordRepoSaveSkipRequest.to_json())

# convert the object into a dict
record_repo_save_skip_request_dict = record_repo_save_skip_request_instance.to_dict()
# create an instance of RecordRepoSaveSkipRequest from a dict
record_repo_save_skip_request_from_dict = RecordRepoSaveSkipRequest.from_dict(record_repo_save_skip_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


