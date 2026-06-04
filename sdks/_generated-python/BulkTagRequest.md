# BulkTagRequest

Request to set or remove tags on a path part.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tag_ids** | **List[UUID]** | List of tag IDs to set/remove | 

## Example

```python
from ksapi.models.bulk_tag_request import BulkTagRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BulkTagRequest from a JSON string
bulk_tag_request_instance = BulkTagRequest.from_json(json)
# print the JSON string representation of the object
print(BulkTagRequest.to_json())

# convert the object into a dict
bulk_tag_request_dict = bulk_tag_request_instance.to_dict()
# create an instance of BulkTagRequest from a dict
bulk_tag_request_from_dict = BulkTagRequest.from_dict(bulk_tag_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


