# GuideModules


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**core** | [**GuideModuleProgress**](GuideModuleProgress.md) |  | [optional] 
**grounded_answers** | [**GuideModuleProgress**](GuideModuleProgress.md) |  | [optional] 
**knowledge** | [**GuideModuleProgress**](GuideModuleProgress.md) |  | [optional] 
**repeatable_work** | [**GuideModuleProgress**](GuideModuleProgress.md) |  | [optional] 
**access** | [**GuideModuleProgress**](GuideModuleProgress.md) |  | [optional] 
**administration** | [**GuideModuleProgress**](GuideModuleProgress.md) |  | [optional] 
**documents** | [**GuideModuleProgress**](GuideModuleProgress.md) |  | [optional] 
**workflow_runs** | [**GuideModuleProgress**](GuideModuleProgress.md) |  | [optional] 
**search** | [**GuideModuleProgress**](GuideModuleProgress.md) |  | [optional] 
**workflow_setup** | [**GuideModuleProgress**](GuideModuleProgress.md) |  | [optional] 
**skills** | [**GuideModuleProgress**](GuideModuleProgress.md) |  | [optional] 
**dashboard** | [**GuideModuleProgress**](GuideModuleProgress.md) |  | [optional] 
**groups** | [**GuideModuleProgress**](GuideModuleProgress.md) |  | [optional] 
**audit_log** | [**GuideModuleProgress**](GuideModuleProgress.md) |  | [optional] 

## Example

```python
from ksapi.models.guide_modules import GuideModules

# TODO update the JSON string below
json = "{}"
# create an instance of GuideModules from a JSON string
guide_modules_instance = GuideModules.from_json(json)
# print the JSON string representation of the object
print(GuideModules.to_json())

# convert the object into a dict
guide_modules_dict = guide_modules_instance.to_dict()
# create an instance of GuideModules from a dict
guide_modules_from_dict = GuideModules.from_dict(guide_modules_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


