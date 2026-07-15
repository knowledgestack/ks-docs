# SkillVersionResponse

One published version of a skill.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version_id** | **UUID** |  | 
**version** | **int** | Monotonic version number (0, 1, 2, …) | 
**content_sha256** | **str** | Content hash of the version bundle. | [optional] 
**is_active** | **bool** |  | 
**created_at** | **datetime** |  | 

## Example

```python
from ksapi.models.skill_version_response import SkillVersionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SkillVersionResponse from a JSON string
skill_version_response_instance = SkillVersionResponse.from_json(json)
# print the JSON string representation of the object
print(SkillVersionResponse.to_json())

# convert the object into a dict
skill_version_response_dict = skill_version_response_instance.to_dict()
# create an instance of SkillVersionResponse from a dict
skill_version_response_from_dict = SkillVersionResponse.from_dict(skill_version_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


