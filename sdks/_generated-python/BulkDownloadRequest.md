# BulkDownloadRequest

A selection of folders and/or documents to package into one ``.zip``.  Folder ids and document ids are PDO ids. Folders are enumerated recursively; documents are included directly. At least one id must be provided.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**folder_ids** | **List[UUID]** |  | [optional] 
**document_ids** | **List[UUID]** |  | [optional] 

## Example

```python
from ksapi.models.bulk_download_request import BulkDownloadRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BulkDownloadRequest from a JSON string
bulk_download_request_instance = BulkDownloadRequest.from_json(json)
# print the JSON string representation of the object
print(BulkDownloadRequest.to_json())

# convert the object into a dict
bulk_download_request_dict = bulk_download_request_instance.to_dict()
# create an instance of BulkDownloadRequest from a dict
bulk_download_request_from_dict = BulkDownloadRequest.from_dict(bulk_download_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


