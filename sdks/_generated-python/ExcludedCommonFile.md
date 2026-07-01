# ExcludedCommonFile

A definition common file that could not be applied to a run at Start.  Common files resolve resiliently (record-and-continue): one that is missing/deleted or unreadable by the run-starter is recorded here rather than failing the run, so the exclusion is auditable and visible to the FE.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path_part_id** | **UUID** | The common file&#39;s path_part id, as set on the definition | 
**reason** | [**CommonFileExclusionReason**](CommonFileExclusionReason.md) |  | 

## Example

```python
from ksapi.models.excluded_common_file import ExcludedCommonFile

# TODO update the JSON string below
json = "{}"
# create an instance of ExcludedCommonFile from a JSON string
excluded_common_file_instance = ExcludedCommonFile.from_json(json)
# print the JSON string representation of the object
print(ExcludedCommonFile.to_json())

# convert the object into a dict
excluded_common_file_dict = excluded_common_file_instance.to_dict()
# create an instance of ExcludedCommonFile from a dict
excluded_common_file_from_dict = ExcludedCommonFile.from_dict(excluded_common_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


