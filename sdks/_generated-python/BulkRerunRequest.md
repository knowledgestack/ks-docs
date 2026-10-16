# BulkRerunRequest

Re-run ingestion for the selected document versions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_version_ids** | **List[UUID]** |  | [optional] 

## Example

```python
from ksapi.models.bulk_rerun_request import BulkRerunRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BulkRerunRequest from a JSON string
bulk_rerun_request_instance = BulkRerunRequest.from_json(json)
# print the JSON string representation of the object
print(BulkRerunRequest.to_json())

# convert the object into a dict
bulk_rerun_request_dict = bulk_rerun_request_instance.to_dict()
# create an instance of BulkRerunRequest from a dict
bulk_rerun_request_from_dict = BulkRerunRequest.from_dict(bulk_rerun_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


