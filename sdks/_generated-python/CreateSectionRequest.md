# CreateSectionRequest

Request to create a new section.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Section name (can contain any characters) | 
**parent_path_id** | **UUID** | Parent PathPart ID (must be DOCUMENT_VERSION or SECTION) | 
**page_number** | **int** | Page number in source document (must be &gt; 0) | [optional] 
**prev_sibling_path_id** | **UUID** | PathPart ID to insert after (null &#x3D; append to tail) | [optional] 

## Example

```python
from ksapi.models.create_section_request import CreateSectionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateSectionRequest from a JSON string
create_section_request_instance = CreateSectionRequest.from_json(json)
# print the JSON string representation of the object
print(CreateSectionRequest.to_json())

# convert the object into a dict
create_section_request_dict = create_section_request_instance.to_dict()
# create an instance of CreateSectionRequest from a dict
create_section_request_from_dict = CreateSectionRequest.from_dict(create_section_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


