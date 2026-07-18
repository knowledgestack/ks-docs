# WorkflowLeaderboardResponse

Top workflows and top users by run count over a window.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**top_workflows** | [**List[LeaderboardEntry]**](LeaderboardEntry.md) |  | [optional] 
**top_users** | [**List[LeaderboardEntry]**](LeaderboardEntry.md) |  | [optional] 

## Example

```python
from ksapi.models.workflow_leaderboard_response import WorkflowLeaderboardResponse

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowLeaderboardResponse from a JSON string
workflow_leaderboard_response_instance = WorkflowLeaderboardResponse.from_json(json)
# print the JSON string representation of the object
print(WorkflowLeaderboardResponse.to_json())

# convert the object into a dict
workflow_leaderboard_response_dict = workflow_leaderboard_response_instance.to_dict()
# create an instance of WorkflowLeaderboardResponse from a dict
workflow_leaderboard_response_from_dict = WorkflowLeaderboardResponse.from_dict(workflow_leaderboard_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


