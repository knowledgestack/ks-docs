# ActivateSkillVersionRequest

Activate a specific published version.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confirm_discard_unpublished** | **bool** | Required (true) to activate when the working copy has unpublished edits — activating overwrites them. Otherwise the request is a 409. | [optional] [default to False]

## Example

```python
from ksapi.models.activate_skill_version_request import ActivateSkillVersionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ActivateSkillVersionRequest from a JSON string
activate_skill_version_request_instance = ActivateSkillVersionRequest.from_json(json)
# print the JSON string representation of the object
print(ActivateSkillVersionRequest.to_json())

# convert the object into a dict
activate_skill_version_request_dict = activate_skill_version_request_instance.to_dict()
# create an instance of ActivateSkillVersionRequest from a dict
activate_skill_version_request_from_dict = ActivateSkillVersionRequest.from_dict(activate_skill_version_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


