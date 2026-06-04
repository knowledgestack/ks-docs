# DissolveSectionResponse

Response from dissolving a section into a text chunk.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text_chunk_id** | **UUID** | ID of the created text chunk | 
**reparented_children** | **int** | Number of children reparented to the parent | 

## Example

```python
from ksapi.models.dissolve_section_response import DissolveSectionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DissolveSectionResponse from a JSON string
dissolve_section_response_instance = DissolveSectionResponse.from_json(json)
# print the JSON string representation of the object
print(DissolveSectionResponse.to_json())

# convert the object into a dict
dissolve_section_response_dict = dissolve_section_response_instance.to_dict()
# create an instance of DissolveSectionResponse from a dict
dissolve_section_response_from_dict = DissolveSectionResponse.from_dict(dissolve_section_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


