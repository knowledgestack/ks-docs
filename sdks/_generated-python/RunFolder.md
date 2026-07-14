# RunFolder

A run subfolder plus its resolved assets (``inputs/`` or ``outputs/``).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **UUID** |  | 
**path_part_id** | **UUID** |  | 
**materialized_path** | **str** |  | 
**assets** | [**List[WorkflowRunAsset]**](WorkflowRunAsset.md) |  | [optional] 

## Example

```python
from ksapi.models.run_folder import RunFolder

# TODO update the JSON string below
json = "{}"
# create an instance of RunFolder from a JSON string
run_folder_instance = RunFolder.from_json(json)
# print the JSON string representation of the object
print(RunFolder.to_json())

# convert the object into a dict
run_folder_dict = run_folder_instance.to_dict()
# create an instance of RunFolder from a dict
run_folder_from_dict = RunFolder.from_dict(run_folder_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


