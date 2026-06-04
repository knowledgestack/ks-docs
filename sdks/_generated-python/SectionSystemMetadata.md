# SectionSystemMetadata

Schema for section.system_metadata JSONB field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**information_statistics** | [**InformationStatistics**](InformationStatistics.md) |  | [optional] 

## Example

```python
from ksapi.models.section_system_metadata import SectionSystemMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of SectionSystemMetadata from a JSON string
section_system_metadata_instance = SectionSystemMetadata.from_json(json)
# print the JSON string representation of the object
print(SectionSystemMetadata.to_json())

# convert the object into a dict
section_system_metadata_dict = section_system_metadata_instance.to_dict()
# create an instance of SectionSystemMetadata from a dict
section_system_metadata_from_dict = SectionSystemMetadata.from_dict(section_system_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


