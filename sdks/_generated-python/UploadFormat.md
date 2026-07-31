# UploadFormat


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**extension** | **str** |  | 
**content_type** | **str** |  | 

## Example

```python
from ksapi.models.upload_format import UploadFormat

# TODO update the JSON string below
json = "{}"
# create an instance of UploadFormat from a JSON string
upload_format_instance = UploadFormat.from_json(json)
# print the JSON string representation of the object
print(UploadFormat.to_json())

# convert the object into a dict
upload_format_dict = upload_format_instance.to_dict()
# create an instance of UploadFormat from a dict
upload_format_from_dict = UploadFormat.from_dict(upload_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


