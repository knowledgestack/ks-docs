# UploadStatusResponse

Parts S3 already holds — resume by re-sending the rest.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parts** | [**List[UploadPartResponse]**](UploadPartResponse.md) |  | 
**uploaded_bytes** | **int** |  | 

## Example

```python
from ksapi.models.upload_status_response import UploadStatusResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UploadStatusResponse from a JSON string
upload_status_response_instance = UploadStatusResponse.from_json(json)
# print the JSON string representation of the object
print(UploadStatusResponse.to_json())

# convert the object into a dict
upload_status_response_dict = upload_status_response_instance.to_dict()
# create an instance of UploadStatusResponse from a dict
upload_status_response_from_dict = UploadStatusResponse.from_dict(upload_status_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


