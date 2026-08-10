# BulkDeleteRequest

Soft-delete the selected folders and documents to Trash.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**folder_ids** | **List[UUID]** |  | [optional] 
**document_ids** | **List[UUID]** |  | [optional] 

## Example

```python
from ksapi.models.bulk_delete_request import BulkDeleteRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BulkDeleteRequest from a JSON string
bulk_delete_request_instance = BulkDeleteRequest.from_json(json)
# print the JSON string representation of the object
print(BulkDeleteRequest.to_json())

# convert the object into a dict
bulk_delete_request_dict = bulk_delete_request_instance.to_dict()
# create an instance of BulkDeleteRequest from a dict
bulk_delete_request_from_dict = BulkDeleteRequest.from_dict(bulk_delete_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


