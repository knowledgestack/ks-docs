# ChunkMetadata

Metadata for a chunk including source document references.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**polygons** | [**List[PolygonReference]**](PolygonReference.md) | List of bounding boxes in the source document for the chunk, potentially from multiple areas of multiple pages. | [optional] 
**s3_urls** | **List[str]** | Ordered s3:// URIs to visual assets for this chunk. Single-element for standard IMAGE/TABLE/HTML chunks, multi-element for multi-page single-chunk ingestion. | [optional] 
**summary** | **str** | LLM-generated summary of the chunk content. Used for TABLE and HTML chunks to enrich embedding text. | [optional] 
**extracted_text_s3_uri** | **str** | S3 URI to extracted PDF text used for LLM grounding during enrichment | [optional] 
**secondary_taxonomy** | [**ImageTaxonomy**](ImageTaxonomy.md) |  | [optional] 
**sheet_name** | **str** | Worksheet name this chunk was extracted from (XLSX only) | [optional] 
**block_type** | **str** | XLSXParser block type (e.g. table, calculation_block, chart_anchor) | [optional] 
**source_uri** | **str** | Cell range URI reference in the source workbook (XLSX only) | [optional] 
**enriched_html** | **str** | Rendered HTML for non-table XLSX chunks (tables use render_html as content) | [optional] 
**cell_range** | **str** | Cell address range, e.g. &#39;A1:D10&#39; (XLSX only) | [optional] 
**dependency_summary** | **Dict[str, object]** | Upstream/downstream/cross-sheet cell references for audit reasoning (XLSX only) | [optional] 
**formulas** | **List[Dict[str, str]]** | Formula cells in this chunk as [{address, formula, value}] (XLSX only) | [optional] 
**key_cells** | **List[str]** | Notable output/header cells as A1 refs, e.g. &#39;Sheet1!A1&#39; (XLSX only) | [optional] 
**named_ranges** | **List[str]** | Names of named ranges overlapping this chunk (XLSX only) | [optional] 

## Example

```python
from ksapi.models.chunk_metadata import ChunkMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of ChunkMetadata from a JSON string
chunk_metadata_instance = ChunkMetadata.from_json(json)
# print the JSON string representation of the object
print(ChunkMetadata.to_json())

# convert the object into a dict
chunk_metadata_dict = chunk_metadata_instance.to_dict()
# create an instance of ChunkMetadata from a dict
chunk_metadata_from_dict = ChunkMetadata.from_dict(chunk_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


