# UploadConstraints


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**formats** | [**List[UploadFormat]**](UploadFormat.md) |  | 
**max_bytes** | **int** |  | 
**max_image_bytes** | **int** |  | 
**max_media_bytes** | **int** |  | 
**max_media_duration_ms** | **int** |  | 
**resumable_part_size** | **int** |  | 

## Example

```python
from ksapi.models.upload_constraints import UploadConstraints

# TODO update the JSON string below
json = "{}"
# create an instance of UploadConstraints from a JSON string
upload_constraints_instance = UploadConstraints.from_json(json)
# print the JSON string representation of the object
print(UploadConstraints.to_json())

# convert the object into a dict
upload_constraints_dict = upload_constraints_instance.to_dict()
# create an instance of UploadConstraints from a dict
upload_constraints_from_dict = UploadConstraints.from_dict(upload_constraints_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


