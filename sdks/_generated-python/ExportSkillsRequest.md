# ExportSkillsRequest

Skills to pack into one ZIP, each under a top-level folder named after it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**skill_ids** | **List[UUID]** | Skills whose frozen active versions are packed together; duplicates are ignored. Every skill must exist and be readable. | 

## Example

```python
from ksapi.models.export_skills_request import ExportSkillsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ExportSkillsRequest from a JSON string
export_skills_request_instance = ExportSkillsRequest.from_json(json)
# print the JSON string representation of the object
print(ExportSkillsRequest.to_json())

# convert the object into a dict
export_skills_request_dict = export_skills_request_instance.to_dict()
# create an instance of ExportSkillsRequest from a dict
export_skills_request_from_dict = ExportSkillsRequest.from_dict(export_skills_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


