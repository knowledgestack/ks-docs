# OnboardingStateUpdate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_step** | [**OnboardingStep**](OnboardingStep.md) |  | [optional] 
**guide_modules** | [**GuideModules**](GuideModules.md) | Guide module progress to merge in. A completed or dismissed module only moves back to in progress under a newer module version. | [optional] 
**setup_checklist_dismissed** | **bool** | Whether the setup checklist is dismissed | [optional] 

## Example

```python
from ksapi.models.onboarding_state_update import OnboardingStateUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of OnboardingStateUpdate from a JSON string
onboarding_state_update_instance = OnboardingStateUpdate.from_json(json)
# print the JSON string representation of the object
print(OnboardingStateUpdate.to_json())

# convert the object into a dict
onboarding_state_update_dict = onboarding_state_update_instance.to_dict()
# create an instance of OnboardingStateUpdate from a dict
onboarding_state_update_from_dict = OnboardingStateUpdate.from_dict(onboarding_state_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


