# SkillSearchResult

One skill matched by semantic search.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**skill_id** | **UUID** |  | 
**name** | **str** |  | 
**description** | **str** |  | 
**materialized_path** | **str** |  | 
**score** | **float** |  | 

## Example

```python
from ksapi.models.skill_search_result import SkillSearchResult

# TODO update the JSON string below
json = "{}"
# create an instance of SkillSearchResult from a JSON string
skill_search_result_instance = SkillSearchResult.from_json(json)
# print the JSON string representation of the object
print(SkillSearchResult.to_json())

# convert the object into a dict
skill_search_result_dict = skill_search_result_instance.to_dict()
# create an instance of SkillSearchResult from a dict
skill_search_result_from_dict = SkillSearchResult.from_dict(skill_search_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


