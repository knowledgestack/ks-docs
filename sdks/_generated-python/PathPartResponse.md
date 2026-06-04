# PathPartResponse

Generic path part response model.

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
**exclude_from_qdrant** | **bool** | Direct exclusion flag on this path part only. The effective exclusion also applies when any ancestor has the flag set — walk the ancestry to determine effective state. | 
**tags** | [**List[TagResponse]**](TagResponse.md) | Tags attached to this path part | [optional] 
**can_read** | **bool** | Whether the current user can read | 
**can_write** | **bool** | Whether the current user can write | 
**created_at** | **datetime** | Creation timestamp | 
**updated_at** | **datetime** | Last update timestamp | 

## Example

```python
from ksapi.models.path_part_response import PathPartResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PathPartResponse from a JSON string
path_part_response_instance = PathPartResponse.from_json(json)
# print the JSON string representation of the object
print(PathPartResponse.to_json())

# convert the object into a dict
path_part_response_dict = path_part_response_instance.to_dict()
# create an instance of PathPartResponse from a dict
path_part_response_from_dict = PathPartResponse.from_dict(path_part_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


