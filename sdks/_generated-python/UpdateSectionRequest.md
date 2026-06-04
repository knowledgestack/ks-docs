# UpdateSectionRequest

Request to update a section.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | New section name (can contain any characters) | [optional] 
**page_number** | **int** | New page number (must be &gt; 0) | [optional] 
**prev_sibling_path_id** | **UUID** | Move after this sibling PathPart ID | [optional] 
**move_to_head** | **bool** | Set to true to move to head of sibling list. This is needed since prev_sibling_path_id &#x3D; None means no update | [optional] [default to False]
**parent_path_part_id** | **UUID** | Reparent to this PathPart ID (must be DOCUMENT_VERSION or SECTION in the same document version) | [optional] 

## Example

```python
from ksapi.models.update_section_request import UpdateSectionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateSectionRequest from a JSON string
update_section_request_instance = UpdateSectionRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateSectionRequest.to_json())

# convert the object into a dict
update_section_request_dict = update_section_request_instance.to_dict()
# create an instance of UpdateSectionRequest from a dict
update_section_request_from_dict = UpdateSectionRequest.from_dict(update_section_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


