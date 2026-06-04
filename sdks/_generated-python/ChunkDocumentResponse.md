# ChunkDocumentResponse

Lightweight document info attached to a chunk response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **UUID** | Document ID | 
**name** | **str** | Document name | 
**document_type** | [**DocumentType**](DocumentType.md) |  | 
**document_origin** | [**DocumentOrigin**](DocumentOrigin.md) |  | 

## Example

```python
from ksapi.models.chunk_document_response import ChunkDocumentResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ChunkDocumentResponse from a JSON string
chunk_document_response_instance = ChunkDocumentResponse.from_json(json)
# print the JSON string representation of the object
print(ChunkDocumentResponse.to_json())

# convert the object into a dict
chunk_document_response_dict = chunk_document_response_instance.to_dict()
# create an instance of ChunkDocumentResponse from a dict
chunk_document_response_from_dict = ChunkDocumentResponse.from_dict(chunk_document_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


