# RecentDocumentResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_id** | **UUID** | Document ID | 
**name** | **str** | Document name | 
**section_title** | **str** | First top-level section of the active version, or its first subsection when that section only repeats the document name; null when there is none | 

## Example

```python
from ksapi.models.recent_document_response import RecentDocumentResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RecentDocumentResponse from a JSON string
recent_document_response_instance = RecentDocumentResponse.from_json(json)
# print the JSON string representation of the object
print(RecentDocumentResponse.to_json())

# convert the object into a dict
recent_document_response_dict = recent_document_response_instance.to_dict()
# create an instance of RecentDocumentResponse from a dict
recent_document_response_from_dict = RecentDocumentResponse.from_dict(recent_document_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


