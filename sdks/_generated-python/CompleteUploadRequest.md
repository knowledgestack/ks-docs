# CompleteUploadRequest

Finalize a resumable upload and start ingestion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**upload_token** | **str** | Token from create-upload | 

## Example

```python
from ksapi.models.complete_upload_request import CompleteUploadRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CompleteUploadRequest from a JSON string
complete_upload_request_instance = CompleteUploadRequest.from_json(json)
# print the JSON string representation of the object
print(CompleteUploadRequest.to_json())

# convert the object into a dict
complete_upload_request_dict = complete_upload_request_instance.to_dict()
# create an instance of CompleteUploadRequest from a dict
complete_upload_request_from_dict = CompleteUploadRequest.from_dict(complete_upload_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


