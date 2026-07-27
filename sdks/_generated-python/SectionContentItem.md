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
**chunk_start_index** | **int** | 0-based ordinal of the first chunk in this section&#39;s subtree, counting CHUNK rows in DFS order from the traversal root. Null when the section has no chunk anywhere below it, and on endpoints that do not compute traversal ordinals. | [optional] 
**chunk_end_index** | **int** | 0-based ordinal of the last chunk in this section&#39;s subtree, inclusive. Chunks outside the section — a later sibling, or a chunk attached to an ancestor — are excluded, so the span covers only this section&#39;s own content. Null under the same conditions as chunk_start_index. | [optional] 
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


