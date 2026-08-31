# ChunkMetadata

Metadata for a chunk including source document references.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**polygons** | [**List[PolygonReference]**](PolygonReference.md) | List of bounding boxes in the source document for the chunk, potentially from multiple areas of multiple pages. | [optional] 
**s3_urls** | **List[str]** | Ordered s3:// URIs to visual assets for this chunk. Single-element for standard IMAGE/TABLE/HTML chunks, multi-element for multi-page single-chunk ingestion. | [optional] 
**summary** | **str** | LLM-generated summary of the chunk content. Used for TABLE and HTML chunks to enrich embedding text, and for JSON/YAML chunks (with summarize_for_embedding) as the sole dense embedding text. | [optional] 
**summarize_for_embedding** | **bool** | When True, this chunk&#39;s dense embedding is built from its LLM-generated summary (see summary) instead of its raw content. Set for parsed JSON/YAML single chunks so noisy structured text does not dominate the vector; the raw content is still kept for display and sparse (keyword) retrieval. Enrichment generates the summary when this is set and summary is empty. | [optional] [default to False]
**extracted_text_s3_uri** | **str** | S3 URI to extracted PDF text used for LLM grounding during enrichment | [optional] 
**caption** | **str** | Caption and footnote lines MinerU extracted next to a visual, joined by newlines. IMAGE chunks only: their content is a generated description that enrichment overwrites, so the caption cannot live there — enrichment appends it to the description it writes. TABLE captions are appended to table_body directly, because a table&#39;s content is extracted text rather than generated. | [optional] 
**secondary_taxonomy** | [**ImageTaxonomy**](ImageTaxonomy.md) |  | [optional] 
**start_ms** | **int** | Start time of this chunk in the source media (ms from start). | [optional] 
**end_ms** | **int** | End time of this chunk in the source media (ms from start). | [optional] 
**speakers** | **List[int]** | Every speaker label appearing in this chunk&#39;s segments, sorted. Lets a citation say which turn it came from. None when the provider does not diarize. | [optional] 
**languages** | **List[str]** | Every language the ASR recognised across this chunk&#39;s segments, sorted. A meeting routinely code-switches, so a chunk can hold more than one; the document-level language is only the majority label and misreports a bilingual recording. None for non-media chunks and for media ingested before this field existed. | [optional] 
**segments** | [**List[SegmentSpan]**](SegmentSpan.md) | Per-ASR-segment spans inside this media chunk, in order, each carrying its char offset in the chunk content. Lets citation resolution narrow a chunk-level timeframe to the enclosing segment. None for non-media chunks and media ingested before this field existed. | [optional] 
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


