# Citation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chunk_id** | **UUID** | Chunk source; absent for Excel selections | [optional] 
**document_version_id** | **UUID** | Exact source document version for cross-chunk text and Excel citations | [optional] 
**sheet_name** | **str** | Exact Excel worksheet name | [optional] 
**cell_ranges** | **List[str]** | Ordered A1 cells/rectangles on one worksheet | [optional] 
**quote** | **str** | Legacy chunk preview; omitted for passage citations | [optional] [default to '']
**start_char** | **int** | The zero-based Unicode code-point offset of the quote in canonical chunk content | [optional] [default to 0]
**length** | **int** | Legacy chunk preview length in Unicode code points | [optional] [default to 0]
**source_marker** | **str** | Original complete quote/anchor marker identifying this text citation | [optional] 
**resolution** | **str** | Text selector resolved to a source span or a chunk fallback | [optional] 
**end_chunk_id** | **UUID** | Ending chunk when different from the starting chunk | [optional] 
**end_char** | **int** | Exclusive Unicode code-point offset in the ending chunk | [optional] 
**selection_hash** | **str** | SHA-256 of the UTF-8 compact JSON array of ordered [chunk ID, selected text] pairs | [optional] 
**start_ms** | **int** | Start time (ms) of the cited chunk in the source media, for AUDIO/VIDEO — lets the client deep-link playback to the moment. None for non-media chunks. | [optional] 
**end_ms** | **int** | End time (ms) of the cited chunk in the source media (AUDIO/VIDEO); None for non-media chunks. | [optional] 

## Example

```python
from ksapi.models.citation import Citation

# TODO update the JSON string below
json = "{}"
# create an instance of Citation from a JSON string
citation_instance = Citation.from_json(json)
# print the JSON string representation of the object
print(Citation.to_json())

# convert the object into a dict
citation_dict = citation_instance.to_dict()
# create an instance of Citation from a dict
citation_from_dict = Citation.from_dict(citation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


