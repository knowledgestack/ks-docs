# DocumentVersionMetadata

Schema for document_version.system_metadata JSONB field.  Tracks S3 URLs for generated artifacts, pipeline execution state, and document statistics. Convention-based paths (images, page screenshots) are derived from document_id/document_version_id via s3_paths helpers, using a flat S3 layout: documents/{document_id}/{document_version_id}/...  Internal conversion artifact paths (standard_pipeline_json_s3, high_accuracy_*_s3) are excluded from API responses via ``Field(exclude=True)`` so we don't expose underlying technology names to external consumers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_s3** | **str** | S3 URL to the source document (set by API on upload) | [optional] 
**cleaned_source_s3** | **str** | S3 URL to watermark-removed source document | [optional] 
**fast_plaintext_s3** | **str** | S3 URL to the fast plaintext export of the document | [optional] 
**hash** | **str** | Base64-encoded SHA256 hash of the uploaded source file | [optional] 
**pipeline_state** | [**PipelineState**](PipelineState.md) | Current state of the ingestion pipeline workflow | [optional] 
**total_pages** | **int** | Total number of pages in the document | [optional] 
**total_sections** | **int** | Total number of sections created | [optional] 
**total_chunks** | **int** | Total number of chunks created | [optional] 
**total_formulas** | **int** | Total formula cells in the workbook (XLSX only) | [optional] 
**xlsx_parse_result_s3** | **str** | S3 URI to the full XLSX parse result JSON containing dependency graph, named ranges, and KPI catalog | [optional] 
**xlsx_named_ranges** | **List[Dict[str, object]]** | Named ranges defined in the workbook (name, ref_string, scope) | [optional] 
**xlsx_kpi_catalog** | **List[Dict[str, object]]** | KPI (Key Performance Indicator) cells detected by the XLSX parser. Each entry contains a label, computed value, cell address, and driver cell references. Applicable to financial models and operational spreadsheets; not populated for template spreadsheets that lack computed KPI cells. | [optional] 
**citation_anchors** | [**List[XlsxCellAnchorOutputOrDocxParagraphAnchorOutput]**](XlsxCellAnchorOutputOrDocxParagraphAnchorOutput.md) | In-file citation anchors for agent-generated .xlsx/.docx deliverables. Each anchor binds an in-file location (cell or paragraph) to the chunk IDs cited there. Populated by save_document during upload; &#x60;&#x60;null&#x60;&#x60; for versions ingested before this field shipped or for files re-uploaded outside the agent flow. FE enriches chunks via /v1/chunks/bulk. | [optional] 
**information_statistics** | [**InformationStatistics**](InformationStatistics.md) | Aggregate statistics for the document version (tokens, chunk counts, depth) | [optional] 
**quota_charged** | **bool** | True once the conversion activity successfully consumed PAGE quota | [optional] [default to False]
**quota_page_count** | **int** | Page quantity charged at conversion start; 0 if not yet charged | [optional] [default to 0]
**quota_idempotency_key** | **str** | Stable consume key (matches workflow_id); &#39;UNSET&#39; for pre-Phase-2 docs so refund logic short-circuits | [optional] [default to 'UNSET']
**file_md5** | **str** | MD5 of source bytes; &#39;UNSET&#39; for pre-Phase-2 docs, real hex digest after first prep run | [optional] [default to 'UNSET']

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


