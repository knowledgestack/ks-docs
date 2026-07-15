# SkillScriptFile

A single script bundled under a skill's ``scripts/`` folder.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Script file name, e.g. inspect.py | 
**content** | **str** | Script file contents (UTF-8 text). | 

## Example

```python
from ksapi.models.skill_script_file import SkillScriptFile

# TODO update the JSON string below
json = "{}"
# create an instance of SkillScriptFile from a JSON string
skill_script_file_instance = SkillScriptFile.from_json(json)
# print the JSON string representation of the object
print(SkillScriptFile.to_json())

# convert the object into a dict
skill_script_file_dict = skill_script_file_instance.to_dict()
# create an instance of SkillScriptFile from a dict
skill_script_file_from_dict = SkillScriptFile.from_dict(skill_script_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


