# SearchSkillsRequest

Semantic skill discovery for the agent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | **str** | What the agent needs a skill for. | 
**top_k** | **int** |  | [optional] [default to 10]
**score_threshold** | **float** |  | [optional] [default to 0.0]

## Example

```python
from ksapi.models.search_skills_request import SearchSkillsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SearchSkillsRequest from a JSON string
search_skills_request_instance = SearchSkillsRequest.from_json(json)
# print the JSON string representation of the object
print(SearchSkillsRequest.to_json())

# convert the object into a dict
search_skills_request_dict = search_skills_request_instance.to_dict()
# create an instance of SearchSkillsRequest from a dict
search_skills_request_from_dict = SearchSkillsRequest.from_dict(search_skills_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


