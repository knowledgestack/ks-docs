# DocumentVersionMetadataUpdate

Partial update schema for document version metadata.  All fields are optional.  Only non-``None`` fields are merged into the existing metadata dict.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_s3** | **str** |  | [optional] 
**cleaned_source_s3** | **str** |  | [optional] 
**standard_pipeline_json_s3** | **str** |  | [optional] 
**fast_plaintext_s3** | **str** |  | [optional] 
**high_accuracy_content_list_s3** | **str** |  | [optional] 
**high_accuracy_middle_s3** | **str** |  | [optional] 
**hash** | **str** |  | [optional] 
**pipeline_state** | [**PipelineState**](PipelineState.md) |  | [optional] 
**total_pages** | **int** |  | [optional] 
**total_sections** | **int** |  | [optional] 
**total_chunks** | **int** |  | [optional] 
**total_formulas** | **int** |  | [optional] 
**xlsx_parse_result_s3** | **str** |  | [optional] 
**xlsx_named_ranges** | **List[Dict[str, object]]** |  | [optional] 
**xlsx_kpi_catalog** | **List[Dict[str, object]]** |  | [optional] 
**citation_anchors** | [**List[XlsxCellAnchorInputOrDocxParagraphAnchorInput]**](XlsxCellAnchorInputOrDocxParagraphAnchorInput.md) |  | [optional] 
**information_statistics** | [**InformationStatistics**](InformationStatistics.md) |  | [optional] 
**quota_charged** | **bool** |  | [optional] 
**quota_page_count** | **int** |  | [optional] 
**quota_idempotency_key** | **str** |  | [optional] 
**file_md5** | **str** |  | [optional] 

## Example

```python
from ksapi.models.document_version_metadata_update import DocumentVersionMetadataUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentVersionMetadataUpdate from a JSON string
document_version_metadata_update_instance = DocumentVersionMetadataUpdate.from_json(json)
# print the JSON string representation of the object
print(DocumentVersionMetadataUpdate.to_json())

# convert the object into a dict
document_version_metadata_update_dict = document_version_metadata_update_instance.to_dict()
# create an instance of DocumentVersionMetadataUpdate from a dict
document_version_metadata_update_from_dict = DocumentVersionMetadataUpdate.from_dict(document_version_metadata_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


