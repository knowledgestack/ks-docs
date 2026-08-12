# DocumentVersionMetadata

Schema for document_version.system_metadata JSONB field.  Tracks S3 URLs for generated artifacts, pipeline execution state, and document statistics. Convention-based paths (images, page screenshots) are derived from document_id/document_version_id via s3_paths helpers, using a flat S3 layout: documents/{document_id}/{document_version_id}/...  Internal conversion artifact paths (standard_pipeline_json_s3, high_accuracy_*_s3) are excluded from API responses via ``Field(exclude=True)`` so we don't expose underlying technology names to external consumers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_s3** | **str** | S3 URL to the source document (set by API on upload) | [optional] 
**cleaned_source_s3** | **str** | S3 URL to watermark-removed source document | [optional] 
**preconversion_source_s3** | **str** | S3 URL to the original pre-conversion legacy Office file; null unless this version was converted from a legacy binary format. After conversion source_s3 points at the modern OOXML file and this field preserves the original for traceability. | [optional] 
**cited_source_s3** | **str** | S3 URL to the agent&#39;s cited copy of the source (KS Citation comments intact); null unless the agent uploaded a file carrying citations. Read only for the agent edit round-trip so a follow-up chat re-extracts citation anchors instead of losing them; source_s3 stays the clean artifact served to chunking, the FE viewer, and downloads. | [optional] 
**fast_plaintext_s3** | **str** | S3 URL to the fast plaintext export of the document | [optional] 
**transcript_s3** | **str** | S3 URI of the ASR transcript JSON (per-segment start_ms/end_ms/text); null for non-media. Chunks carry timings too, but at merged-chunk granularity, so this is the only per-segment source. | [optional] 
**hash** | **str** | Base64-encoded SHA256 hash of the uploaded source file | [optional] 
**pipeline_state** | [**PipelineState**](PipelineState.md) | Current state of the ingestion pipeline workflow | [optional] 
**total_pages** | **int** | Total number of pages in the document | [optional] 
**total_sections** | **int** | Total number of sections created | [optional] 
**total_chunks** | **int** | Total number of chunks created | [optional] 
**duration_ms** | **int** | Media (audio/video) duration in milliseconds; null for non-media | [optional] 
**language** | **str** | ASR-detected language of the media transcript, as returned by the ASR provider; null for non-media or when the provider omits it | [optional] 
**segment_count** | **int** | Number of transcript segments produced by ASR; null for non-media | [optional] 
**total_formulas** | **int** | Total formula cells in the workbook (XLSX only) | [optional] 
**xlsx_parse_result_s3** | **str** | S3 URI to the full XLSX parse result JSON containing dependency graph, named ranges, and KPI catalog | [optional] 
**xlsx_named_ranges** | **List[Dict[str, object]]** | Named ranges defined in the workbook (name, ref_string, scope) | [optional] 
**xlsx_kpi_catalog** | **List[Dict[str, object]]** | KPI (Key Performance Indicator) cells detected by the XLSX parser. Each entry contains a label, computed value, cell address, and driver cell references. Applicable to financial models and operational spreadsheets; not populated for template spreadsheets that lack computed KPI cells. | [optional] 
**citation_anchors** | [**List[XlsxCellAnchorOutputOrDocxParagraphAnchorOutput]**](XlsxCellAnchorOutputOrDocxParagraphAnchorOutput.md) | In-file citation anchors for agent-generated .xlsx/.docx deliverables. Each anchor binds an in-file location (cell or paragraph) to the chunk IDs cited there. Populated by ks_upload_from_sandbox during upload; &#x60;&#x60;null&#x60;&#x60; for versions ingested before this field shipped or for files re-uploaded outside the agent flow. FE enriches chunks via /v1/chunks/bulk. | [optional] 
**information_statistics** | [**InformationStatistics**](InformationStatistics.md) | Aggregate statistics for the document version (tokens, chunk counts, depth) | [optional] 
**quota_charged** | **bool** | Diagnostics only — nothing reads it and nothing refunds. Kept for pre-existing rows that carry it. | [optional] [default to False]
**quota_page_count** | **int** | Page quantity charged at conversion start; 0 if not yet charged | [optional] [default to 0]
**quota_media_minutes** | **int** | MEDIA_MINUTE quantity charged at media preparation; 0 if not yet charged | [optional] [default to 0]
**quota_idempotency_key** | **str** | Stable consume key (matches workflow_id) written for diagnostics/audit; &#39;UNSET&#39; when no consume was committed | [optional] [default to 'UNSET']
**file_md5** | **str** | MD5 of source bytes; &#39;UNSET&#39; for pre-Phase-2 docs, real hex digest after first prep run | [optional] [default to 'UNSET']
**idempotency_key** | **str** | Opt-in create key. A repeat ingest with the same key at the same (parent, name) replays this document instead of colliding — makes a ZIP fan-out member retry idempotent. | [optional] 

## Example

```python
from ksapi.models.document_version_metadata import DocumentVersionMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentVersionMetadata from a JSON string
document_version_metadata_instance = DocumentVersionMetadata.from_json(json)
# print the JSON string representation of the object
print(DocumentVersionMetadata.to_json())

# convert the object into a dict
document_version_metadata_dict = document_version_metadata_instance.to_dict()
# create an instance of DocumentVersionMetadata from a dict
document_version_metadata_from_dict = DocumentVersionMetadata.from_dict(document_version_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


