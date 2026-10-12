# GuideModuleProgress


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**GuideModuleStatus**](GuideModuleStatus.md) |  | 
**step** | **int** | Index of the last step the person reached | 
**version** | **int** | Version of the module definition | 
**completed_at** | **datetime** | Server-stamped when the module first became COMPLETED; a client value is ignored. Null while not completed. | [optional] 

## Example

```python
from ksapi.models.guide_module_progress import GuideModuleProgress

# TODO update the JSON string below
json = "{}"
# create an instance of GuideModuleProgress from a JSON string
guide_module_progress_instance = GuideModuleProgress.from_json(json)
# print the JSON string representation of the object
print(GuideModuleProgress.to_json())

# convert the object into a dict
guide_module_progress_dict = guide_module_progress_instance.to_dict()
# create an instance of GuideModuleProgress from a dict
guide_module_progress_from_dict = GuideModuleProgress.from_dict(guide_module_progress_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


