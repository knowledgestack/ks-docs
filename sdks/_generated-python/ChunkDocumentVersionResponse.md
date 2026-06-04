# ChunkDocumentVersionResponse

Lightweight document version info attached to a chunk response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **UUID** | DocumentVersion ID | 
**version** | **int** | Version number | 
**name** | **str** | Version path name (e.g. v0) | 

## Example

```python
from ksapi.models.chunk_document_version_response import ChunkDocumentVersionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ChunkDocumentVersionResponse from a JSON string
chunk_document_version_response_instance = ChunkDocumentVersionResponse.from_json(json)
# print the JSON string representation of the object
print(ChunkDocumentVersionResponse.to_json())

# convert the object into a dict
chunk_document_version_response_dict = chunk_document_version_response_instance.to_dict()
# create an instance of ChunkDocumentVersionResponse from a dict
chunk_document_version_response_from_dict = ChunkDocumentVersionResponse.from_dict(chunk_document_version_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


