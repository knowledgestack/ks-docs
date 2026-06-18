# TrashItemResponse

A top-level item currently in trash.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path_part_id** | **UUID** | PathPart ID | 
**metadata_obj_id** | **UUID** | Underlying PDO ID | 
**part_type** | [**PartType**](PartType.md) |  | 
**name** | **str** | Display name | 
**parent_path_part_id** | **UUID** | Parent PathPart ID | 
**materialized_path** | **str** | Original materialized path | 
**deleted_at** | **datetime** | When the item was moved to trash | 
**deleted_by** | **UUID** | User that moved it to trash | 
**owner** | [**UserInfo**](UserInfo.md) | Current owner (creator) of the item, or null if unowned. | [optional] 

## Example

```python
from ksapi.models.trash_item_response import TrashItemResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TrashItemResponse from a JSON string
trash_item_response_instance = TrashItemResponse.from_json(json)
# print the JSON string representation of the object
print(TrashItemResponse.to_json())

# convert the object into a dict
trash_item_response_dict = trash_item_response_instance.to_dict()
# create an instance of TrashItemResponse from a dict
trash_item_response_from_dict = TrashItemResponse.from_dict(trash_item_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


