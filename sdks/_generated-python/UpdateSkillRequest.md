# UpdateSkillRequest

Edit working-copy files in place (does NOT cut a version).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**skill_md** | **str** | Replacement SKILL.md, written to the working copy in place; null leaves it unchanged. Publish a version to snapshot; the active version is unchanged until then. | [optional] 
**scripts** | [**List[SkillScriptFile]**](SkillScriptFile.md) | Replace the working-copy scripts set (add/overwrite/remove to match); null leaves scripts unchanged, [] removes them all. | [optional] 

## Example

```python
from ksapi.models.update_skill_request import UpdateSkillRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateSkillRequest from a JSON string
update_skill_request_instance = UpdateSkillRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateSkillRequest.to_json())

# convert the object into a dict
update_skill_request_dict = update_skill_request_instance.to_dict()
# create an instance of UpdateSkillRequest from a dict
update_skill_request_from_dict = UpdateSkillRequest.from_dict(update_skill_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


