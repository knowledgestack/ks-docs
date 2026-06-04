# SubtreeChunkGroup

A group of chunks sharing identical path_part_ids and tag_ids.  Used by PathPartCRUDService.resolve_subtree_chunks to batch downstream Qdrant set_payload calls.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chunk_ids** | **List[UUID]** |  | 
**path_part_ids** | **List[UUID]** |  | 
**tag_ids** | **List[UUID]** |  | 

## Example

```python
from ksapi.models.subtree_chunk_group import SubtreeChunkGroup

# TODO update the JSON string below
json = "{}"
# create an instance of SubtreeChunkGroup from a JSON string
subtree_chunk_group_instance = SubtreeChunkGroup.from_json(json)
# print the JSON string representation of the object
print(SubtreeChunkGroup.to_json())

# convert the object into a dict
subtree_chunk_group_dict = subtree_chunk_group_instance.to_dict()
# create an instance of SubtreeChunkGroup from a dict
subtree_chunk_group_from_dict = SubtreeChunkGroup.from_dict(subtree_chunk_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


