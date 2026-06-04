# PathPartAncestorItem

Single ancestor item in an ancestry chain.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path_part_id** | **UUID** | PathPart ID | 
**name** | **str** | Item name | 
**part_type** | [**PartType**](PartType.md) |  | 
**parent_path_id** | **UUID** | Parent PathPart ID | 
**metadata_obj_id** | **UUID** | ID of the underlying object | 
**materialized_path** | **str** | Full materialized path from root | 
**system_managed** | **bool** | Whether this path part is system-managed | 
**exclude_from_qdrant** | **bool** | Direct exclusion flag on this ancestor only (not inherited). The effective exclusion is the OR across the full chain. | 
**created_at** | **datetime** | Creation timestamp | 
**updated_at** | **datetime** | Last update timestamp | 

## Example

```python
from ksapi.models.path_part_ancestor_item import PathPartAncestorItem

# TODO update the JSON string below
json = "{}"
# create an instance of PathPartAncestorItem from a JSON string
path_part_ancestor_item_instance = PathPartAncestorItem.from_json(json)
# print the JSON string representation of the object
print(PathPartAncestorItem.to_json())

# convert the object into a dict
path_part_ancestor_item_dict = path_part_ancestor_item_instance.to_dict()
# create an instance of PathPartAncestorItem from a dict
path_part_ancestor_item_from_dict = PathPartAncestorItem.from_dict(path_part_ancestor_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


