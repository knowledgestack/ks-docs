# BulkMoveRequest

Move the selected folders and documents into ``target_folder_id``.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**folder_ids** | **List[UUID]** |  | [optional] 
**document_ids** | **List[UUID]** |  | [optional] 
**target_folder_id** | **UUID** |  | 

## Example

```python
from ksapi.models.bulk_move_request import BulkMoveRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BulkMoveRequest from a JSON string
bulk_move_request_instance = BulkMoveRequest.from_json(json)
# print the JSON string representation of the object
print(BulkMoveRequest.to_json())

# convert the object into a dict
bulk_move_request_dict = bulk_move_request_instance.to_dict()
# create an instance of BulkMoveRequest from a dict
bulk_move_request_from_dict = BulkMoveRequest.from_dict(bulk_move_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


