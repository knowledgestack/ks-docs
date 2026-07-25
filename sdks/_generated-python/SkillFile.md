# SkillFile

One file in a skill bundle, at a path relative to the skill root.  Skills carry arbitrary trees (``scripts/office/validate.py``, ``references/guide.md``, ``assets/logo.png``), so binary files are carried base64-encoded rather than excluded.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **str** | Path relative to the skill root, e.g. scripts/office/run.py | 
**content** | **str** | UTF-8 text, or base64-encoded bytes when encoding&#x3D;base64. | 
**encoding** | **str** | How &#x60;content&#x60; is encoded. | [optional] [default to 'utf-8']

## Example

```python
from ksapi.models.skill_file import SkillFile

# TODO update the JSON string below
json = "{}"
# create an instance of SkillFile from a JSON string
skill_file_instance = SkillFile.from_json(json)
# print the JSON string representation of the object
print(SkillFile.to_json())

# convert the object into a dict
skill_file_dict = skill_file_instance.to_dict()
# create an instance of SkillFile from a dict
skill_file_from_dict = SkillFile.from_dict(skill_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


