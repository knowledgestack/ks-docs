# PaginatedResponseAnnotatedUnionSectionContentItemChunkContentItemDiscriminator


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[SectionContentItemOrChunkContentItem]**](SectionContentItemOrChunkContentItem.md) | List of items | 
**total** | **int** | Total number of items | 
**limit** | **int** | Number of items per page | 
**offset** | **int** | Number of items to skip | 

## Example

```python
from ksapi.models.paginated_response_annotated_union_section_content_item_chunk_content_item_discriminator import PaginatedResponseAnnotatedUnionSectionContentItemChunkContentItemDiscriminator

# TODO update the JSON string below
json = "{}"
# create an instance of PaginatedResponseAnnotatedUnionSectionContentItemChunkContentItemDiscriminator from a JSON string
paginated_response_annotated_union_section_content_item_chunk_content_item_discriminator_instance = PaginatedResponseAnnotatedUnionSectionContentItemChunkContentItemDiscriminator.from_json(json)
# print the JSON string representation of the object
print(PaginatedResponseAnnotatedUnionSectionContentItemChunkContentItemDiscriminator.to_json())

# convert the object into a dict
paginated_response_annotated_union_section_content_item_chunk_content_item_discriminator_dict = paginated_response_annotated_union_section_content_item_chunk_content_item_discriminator_instance.to_dict()
# create an instance of PaginatedResponseAnnotatedUnionSectionContentItemChunkContentItemDiscriminator from a dict
paginated_response_annotated_union_section_content_item_chunk_content_item_discriminator_from_dict = PaginatedResponseAnnotatedUnionSectionContentItemChunkContentItemDiscriminator.from_dict(paginated_response_annotated_union_section_content_item_chunk_content_item_discriminator_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


