# TransferOwnerResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path_part_id** | **UUID** | PathPart ID | 
**owner_id** | **UUID** | New owner user_id | 

## Example

```python
from ksapi.models.transfer_owner_response import TransferOwnerResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TransferOwnerResponse from a JSON string
transfer_owner_response_instance = TransferOwnerResponse.from_json(json)
# print the JSON string representation of the object
print(TransferOwnerResponse.to_json())

# convert the object into a dict
transfer_owner_response_dict = transfer_owner_response_instance.to_dict()
# create an instance of TransferOwnerResponse from a dict
transfer_owner_response_from_dict = TransferOwnerResponse.from_dict(transfer_owner_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


