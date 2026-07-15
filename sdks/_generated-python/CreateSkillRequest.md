# CreateSkillRequest

Author a skill from a SKILL.md bundle.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Skill machine name (its folder name); unique within the tenant. | 
**skill_md** | **str** | Full SKILL.md content: YAML frontmatter with name + description, then the markdown instruction body. | 
**scripts** | [**List[SkillScriptFile]**](SkillScriptFile.md) | Optional scripts bundled under the skill&#39;s scripts/ folder. | [optional] 

## Example

```python
from ksapi.models.create_skill_request import CreateSkillRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateSkillRequest from a JSON string
create_skill_request_instance = CreateSkillRequest.from_json(json)
# print the JSON string representation of the object
print(CreateSkillRequest.to_json())

# convert the object into a dict
create_skill_request_dict = create_skill_request_instance.to_dict()
# create an instance of CreateSkillRequest from a dict
create_skill_request_from_dict = CreateSkillRequest.from_dict(create_skill_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


