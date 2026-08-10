# BulkRevokeRequest

Revoke many permissions by their own permission-row ids.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenant_id** | **UUID** |  | 
**permission_ids** | **List[UUID]** |  | [optional] 

## Example

```python
from ksapi.models.bulk_revoke_request import BulkRevokeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BulkRevokeRequest from a JSON string
bulk_revoke_request_instance = BulkRevokeRequest.from_json(json)
# print the JSON string representation of the object
print(BulkRevokeRequest.to_json())

# convert the object into a dict
bulk_revoke_request_dict = bulk_revoke_request_instance.to_dict()
# create an instance of BulkRevokeRequest from a dict
bulk_revoke_request_from_dict = BulkRevokeRequest.from_dict(bulk_revoke_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


