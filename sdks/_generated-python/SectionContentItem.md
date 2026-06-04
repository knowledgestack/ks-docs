# SectionContentItem

Response model for a section item in document version contents.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**part_type** | **str** | Path part type | 
**path_part_id** | **UUID** | PathPart ID | 
**name** | **str** | PathPart name | 
**parent_path_id** | **UUID** | Parent PathPart ID | 
**metadata_obj_id** | **UUID** | Section ID | 
**depth** | **int** | Depth relative to document version root | 
**page_number** | **int** | Section page number | [optional] 
**materialized_path** | **str** | Full materialized path from root | 
**system_managed** | **bool** | Whether this item is system-managed | 
**approval_state** | [**PathPartApprovalState**](PathPartApprovalState.md) |  | 
**created_at** | **datetime** | Creation timestamp | 
**updated_at** | **datetime** | Last update timestamp | 

## Example

```python
from ksapi.models.section_content_item import SectionContentItem

# TODO update the JSON string below
json = "{}"
# create an instance of SectionContentItem from a JSON string
section_content_item_instance = SectionContentItem.from_json(json)
# print the JSON string representation of the object
print(SectionContentItem.to_json())

# convert the object into a dict
section_content_item_dict = section_content_item_instance.to_dict()
# create an instance of SectionContentItem from a dict
section_content_item_from_dict = SectionContentItem.from_dict(section_content_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


