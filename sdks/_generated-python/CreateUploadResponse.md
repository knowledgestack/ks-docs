# CreateUploadResponse

Handles for a started resumable upload.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_id** | **UUID** |  | 
**document_version_id** | **UUID** |  | 
**upload_token** | **str** | Opaque token; return it on every part/status/complete/abort | 
**part_size** | **int** | Recommended part size in bytes; every part except the last must be at least 5 MiB | 

## Example

```python
from ksapi.models.create_upload_response import CreateUploadResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateUploadResponse from a JSON string
create_upload_response_instance = CreateUploadResponse.from_json(json)
# print the JSON string representation of the object
print(CreateUploadResponse.to_json())

# convert the object into a dict
create_upload_response_dict = create_upload_response_instance.to_dict()
# create an instance of CreateUploadResponse from a dict
create_upload_response_from_dict = CreateUploadResponse.from_dict(create_upload_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


