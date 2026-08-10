# BulkGrantResponse

Per-item outcome of a bulk grant (composite-keyed, unlike other bulks).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**succeeded** | [**List[BulkGrantSuccess]**](BulkGrantSuccess.md) |  | [optional] 
**failed** | [**List[BulkGrantItemFailure]**](BulkGrantItemFailure.md) |  | [optional] 

## Example

```python
from ksapi.models.bulk_grant_response import BulkGrantResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BulkGrantResponse from a JSON string
bulk_grant_response_instance = BulkGrantResponse.from_json(json)
# print the JSON string representation of the object
print(BulkGrantResponse.to_json())

# convert the object into a dict
bulk_grant_response_dict = bulk_grant_response_instance.to_dict()
# create an instance of BulkGrantResponse from a dict
bulk_grant_response_from_dict = BulkGrantResponse.from_dict(bulk_grant_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


