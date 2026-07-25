# ReorderPathPartRequest

Reorder a path part within its sibling list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**prev_sibling_path_id** | **UUID** | Place this node immediately after the given sibling PathPart id (must share the same parent). Pass the current tail&#39;s id to move to the end. Requires move_to_head&#x3D;false. | [optional] 
**move_to_head** | **bool** | Move this node to the head of its sibling list. | [optional] [default to False]

## Example

```python
from ksapi.models.reorder_path_part_request import ReorderPathPartRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReorderPathPartRequest from a JSON string
reorder_path_part_request_instance = ReorderPathPartRequest.from_json(json)
# print the JSON string representation of the object
print(ReorderPathPartRequest.to_json())

# convert the object into a dict
reorder_path_part_request_dict = reorder_path_part_request_instance.to_dict()
# create an instance of ReorderPathPartRequest from a dict
reorder_path_part_request_from_dict = ReorderPathPartRequest.from_dict(reorder_path_part_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


