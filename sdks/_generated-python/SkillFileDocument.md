# SkillFileDocument


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **str** | Path relative to the skill root, e.g. SKILL.md | 
**document_id** | **UUID** | The file&#39;s Document id, as used in an @[doc:&lt;id&gt;] reference | 

## Example

```python
from ksapi.models.skill_file_document import SkillFileDocument

# TODO update the JSON string below
json = "{}"
# create an instance of SkillFileDocument from a JSON string
skill_file_document_instance = SkillFileDocument.from_json(json)
# print the JSON string representation of the object
print(SkillFileDocument.to_json())

# convert the object into a dict
skill_file_document_dict = skill_file_document_instance.to_dict()
# create an instance of SkillFileDocument from a dict
skill_file_document_from_dict = SkillFileDocument.from_dict(skill_file_document_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


