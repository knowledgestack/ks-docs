# EnrichedCitation

Citation with optional document context, populated at read time.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chunk_id** | **UUID** |  | 
**quote** | **str** | The quote from the chunk | 
**start_char** | **int** | The 0-based start character of the quote in the chunk | 
**length** | **int** | The length of the quote | 
**document_id** | **UUID** |  | [optional] 
**document_version_id** | **UUID** |  | [optional] 
**document_name** | **str** |  | [optional] 
**version_number** | **int** |  | [optional] 
**path_part_id** | **UUID** |  | [optional] 
**materialized_path** | **str** |  | [optional] 

## Example

```python
from ksapi.models.enriched_citation import EnrichedCitation

# TODO update the JSON string below
json = "{}"
# create an instance of EnrichedCitation from a JSON string
enriched_citation_instance = EnrichedCitation.from_json(json)
# print the JSON string representation of the object
print(EnrichedCitation.to_json())

# convert the object into a dict
enriched_citation_dict = enriched_citation_instance.to_dict()
# create an instance of EnrichedCitation from a dict
enriched_citation_from_dict = EnrichedCitation.from_dict(enriched_citation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


