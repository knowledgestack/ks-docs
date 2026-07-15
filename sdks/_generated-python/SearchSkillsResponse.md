# SearchSkillsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results** | [**List[SkillSearchResult]**](SkillSearchResult.md) |  | [optional] 

## Example

```python
from ksapi.models.search_skills_response import SearchSkillsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SearchSkillsResponse from a JSON string
search_skills_response_instance = SearchSkillsResponse.from_json(json)
# print the JSON string representation of the object
print(SearchSkillsResponse.to_json())

# convert the object into a dict
search_skills_response_dict = search_skills_response_instance.to_dict()
# create an instance of SearchSkillsResponse from a dict
search_skills_response_from_dict = SearchSkillsResponse.from_dict(search_skills_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


