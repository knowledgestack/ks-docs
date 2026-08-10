# BulkTrashRequest

Restore or permanently delete the selected trashed objects by PDO id.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_ids** | **List[UUID]** |  | [optional] 

## Example

```python
from ksapi.models.bulk_trash_request import BulkTrashRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BulkTrashRequest from a JSON string
bulk_trash_request_instance = BulkTrashRequest.from_json(json)
# print the JSON string representation of the object
print(BulkTrashRequest.to_json())

# convert the object into a dict
bulk_trash_request_dict = bulk_trash_request_instance.to_dict()
# create an instance of BulkTrashRequest from a dict
bulk_trash_request_from_dict = BulkTrashRequest.from_dict(bulk_trash_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


