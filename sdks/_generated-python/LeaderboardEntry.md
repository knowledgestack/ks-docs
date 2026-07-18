# LeaderboardEntry

One ranked entry (a workflow definition or a user).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **UUID** |  | 
**name** | **str** |  | 
**count** | **int** | Run count. | 

## Example

```python
from ksapi.models.leaderboard_entry import LeaderboardEntry

# TODO update the JSON string below
json = "{}"
# create an instance of LeaderboardEntry from a JSON string
leaderboard_entry_instance = LeaderboardEntry.from_json(json)
# print the JSON string representation of the object
print(LeaderboardEntry.to_json())

# convert the object into a dict
leaderboard_entry_dict = leaderboard_entry_instance.to_dict()
# create an instance of LeaderboardEntry from a dict
leaderboard_entry_from_dict = LeaderboardEntry.from_dict(leaderboard_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


