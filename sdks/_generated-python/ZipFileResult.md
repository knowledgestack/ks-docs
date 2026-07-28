# ZipFileResult

Per-file outcome from a ZIP ingestion batch.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**zip_path** | **str** |  | 
**document_id** | **UUID** |  | [optional] 
**document_version_id** | **UUID** |  | [optional] 
**workflow_id** | **str** |  | [optional] 
**skipped** | **bool** |  | [optional] [default to False]
**error** | **str** |  | [optional] 

## Example

```python
from ksapi.models.zip_file_result import ZipFileResult

# TODO update the JSON string below
json = "{}"
# create an instance of ZipFileResult from a JSON string
zip_file_result_instance = ZipFileResult.from_json(json)
# print the JSON string representation of the object
print(ZipFileResult.to_json())

# convert the object into a dict
zip_file_result_dict = zip_file_result_instance.to_dict()
# create an instance of ZipFileResult from a dict
zip_file_result_from_dict = ZipFileResult.from_dict(zip_file_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


