# KbSummaryResponse

Point-in-time knowledge-base totals for a tenant.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documents_total** | **int** |  | 
**documents_by_origin** | **Dict[str, int]** | Live document count keyed by document_origin. | 
**documents_by_type** | **Dict[str, int]** | Live document count keyed by document_type. | 
**document_versions_total** | **int** |  | 
**chunks_total** | **int** |  | 
**chunks_by_type** | **Dict[str, int]** |  | 
**tokens_total** | **int** | Sum of chunk.num_tokens (cl100k). | 
**sections_total** | **int** |  | 
**threads_total** | **int** |  | 
**messages_total** | **int** |  | 
**messages_by_role** | **Dict[str, int]** |  | 
**data_sources_total** | **int** |  | 
**data_source_tables_total** | **int** |  | 
**documents_checked_out** | **int** |  | 
**quota** | [**List[MeteredQuotaStatus]**](MeteredQuotaStatus.md) | Current-period usage vs limit per metered resource. | 
**feedback_up** | **int** |  | 
**feedback_down** | **int** |  | 

## Example

```python
from ksapi.models.kb_summary_response import KbSummaryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of KbSummaryResponse from a JSON string
kb_summary_response_instance = KbSummaryResponse.from_json(json)
# print the JSON string representation of the object
print(KbSummaryResponse.to_json())

# convert the object into a dict
kb_summary_response_dict = kb_summary_response_instance.to_dict()
# create an instance of KbSummaryResponse from a dict
kb_summary_response_from_dict = KbSummaryResponse.from_dict(kb_summary_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


