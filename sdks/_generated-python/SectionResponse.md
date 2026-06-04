# SectionResponse

Section response model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **UUID** | Section ID | 
**path_part_id** | **UUID** | PathPart ID | 
**name** | **str** | Section name | 
**page_number** | **int** | Page number in source document | [optional] 
**parent_path_id** | **UUID** | Parent PathPart ID | 
**prev_sibling_path_id** | **UUID** | Previous sibling PathPart ID | [optional] 
**next_sibling_path_id** | **UUID** | Next sibling PathPart ID | [optional] 
**materialized_path** | **str** | Full materialized path from root | 
**system_managed** | **bool** | Whether this section is system-managed | 
**system_metadata** | [**SectionSystemMetadata**](SectionSystemMetadata.md) |  | [optional] 
**tenant_id** | **UUID** | Tenant ID | 
**created_at** | **datetime** | Creation timestamp | 
**updated_at** | **datetime** | Last update timestamp | 

## Example

```python
from ksapi.models.section_response import SectionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SectionResponse from a JSON string
section_response_instance = SectionResponse.from_json(json)
# print the JSON string representation of the object
print(SectionResponse.to_json())

# convert the object into a dict
section_response_dict = section_response_instance.to_dict()
# create an instance of SectionResponse from a dict
section_response_from_dict = SectionResponse.from_dict(section_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


