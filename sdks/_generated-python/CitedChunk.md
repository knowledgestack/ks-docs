# CitedChunk

One cited chunk with the source document context for FE rendering.  ``chunk_id`` is the load-bearing field — every reader can use it via ``/v1/chunks/bulk``. The document fields are populated by ``ks_upload_from_sandbox`` when it resolves each chunk through the KS API at save time; they stay ``None`` only when a *transient* resolve failure (network, 5xx) left the chunk unenriched. A chunk that no longer exists (a definitive 404) is dropped at save time rather than persisted with a bare id, so a dead citation never reaches the FE. The doc-info snapshot is captured at save time; later renames or replacements of the source document do not update it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chunk_id** | **UUID** |  | 
**document_id** | **UUID** |  | [optional] 
**document_name** | **str** | Source document name as of save time. May be stale if the document was later renamed or replaced. | [optional] 
**document_type** | [**DocumentType**](DocumentType.md) |  | [optional] 
**document_version_id** | **UUID** |  | [optional] 
**version_number** | **int** |  | [optional] 

## Example

```python
from ksapi.models.cited_chunk import CitedChunk

# TODO update the JSON string below
json = "{}"
# create an instance of CitedChunk from a JSON string
cited_chunk_instance = CitedChunk.from_json(json)
# print the JSON string representation of the object
print(CitedChunk.to_json())

# convert the object into a dict
cited_chunk_dict = cited_chunk_instance.to_dict()
# create an instance of CitedChunk from a dict
cited_chunk_from_dict = CitedChunk.from_dict(cited_chunk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


