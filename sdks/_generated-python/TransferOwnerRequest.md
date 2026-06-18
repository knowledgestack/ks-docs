# TransferOwnerRequest

Transfer a path_part's ownership to another tenant member.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_owner_user_id** | **UUID** | user_id of the new owner | 

## Example

```python
from ksapi.models.transfer_owner_request import TransferOwnerRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TransferOwnerRequest from a JSON string
transfer_owner_request_instance = TransferOwnerRequest.from_json(json)
# print the JSON string representation of the object
print(TransferOwnerRequest.to_json())

# convert the object into a dict
transfer_owner_request_dict = transfer_owner_request_instance.to_dict()
# create an instance of TransferOwnerRequest from a dict
transfer_owner_request_from_dict = TransferOwnerRequest.from_dict(transfer_owner_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


