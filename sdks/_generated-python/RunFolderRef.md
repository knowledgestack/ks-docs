# RunFolderRef

A run's managed subfolder (inputs / outputs / discussions).  ``id`` is the FOLDER PDO id — pass it to ``list_folder_contents`` or ``bulk-download`` (``folder_ids``) to act on the whole folder in one call. ``path_part_id`` is the underlying path part.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **UUID** |  | 
**path_part_id** | **UUID** |  | 
**materialized_path** | **str** |  | 

## Example

```python
from ksapi.models.run_folder_ref import RunFolderRef

# TODO update the JSON string below
json = "{}"
# create an instance of RunFolderRef from a JSON string
run_folder_ref_instance = RunFolderRef.from_json(json)
# print the JSON string representation of the object
print(RunFolderRef.to_json())

# convert the object into a dict
run_folder_ref_dict = run_folder_ref_instance.to_dict()
# create an instance of RunFolderRef from a dict
run_folder_ref_from_dict = RunFolderRef.from_dict(run_folder_ref_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


