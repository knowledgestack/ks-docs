# SearchItemsResponse

A search page plus how many items of each type the query matched.  ``counts_by_type`` ignores any ``part_type`` filter so the filter chips can keep showing every type's count while one of them is selected.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[FolderResponseOrDocumentResponseOrWorkflowDefinitionResponseOrWorkflowRunResponseOrDataSourceResponseOrDataSourceSchemaR]**](FolderResponseOrDocumentResponseOrWorkflowDefinitionResponseOrWorkflowRunResponseOrDataSourceResponseOrDataSourceSchemaR.md) | List of items | 
**total** | **int** | Total number of items | 
**limit** | **int** | Number of items per page | 
**offset** | **int** | Number of items to skip | 
**counts_by_type** | **Dict[str, int]** | Matches per item type, keyed by SearchablePartType and unaffected by the part_type filter | [optional] 

## Example

```python
from ksapi.models.search_items_response import SearchItemsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SearchItemsResponse from a JSON string
search_items_response_instance = SearchItemsResponse.from_json(json)
# print the JSON string representation of the object
print(SearchItemsResponse.to_json())

# convert the object into a dict
search_items_response_dict = search_items_response_instance.to_dict()
# create an instance of SearchItemsResponse from a dict
search_items_response_from_dict = SearchItemsResponse.from_dict(search_items_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


