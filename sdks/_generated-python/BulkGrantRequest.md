# BulkGrantRequest

Grant many (user, object, capability) permissions in one request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenant_id** | **UUID** |  | 
**grants** | [**List[BulkGrantItem]**](BulkGrantItem.md) |  | [optional] 

## Example

```python
from ksapi.models.bulk_grant_request import BulkGrantRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BulkGrantRequest from a JSON string
bulk_grant_request_instance = BulkGrantRequest.from_json(json)
# print the JSON string representation of the object
print(BulkGrantRequest.to_json())

# convert the object into a dict
bulk_grant_request_dict = bulk_grant_request_instance.to_dict()
# create an instance of BulkGrantRequest from a dict
bulk_grant_request_from_dict = BulkGrantRequest.from_dict(bulk_grant_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


