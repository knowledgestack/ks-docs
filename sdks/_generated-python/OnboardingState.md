# OnboardingState

Stored state: keys and steps this release does not know are dropped.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_step** | [**OnboardingStep**](OnboardingStep.md) |  | [optional] 
**guide_modules** | [**GuideModules**](GuideModules.md) |  | [optional] 
**setup_checklist_dismissed** | **bool** |  | [optional] [default to False]

## Example

```python
from ksapi.models.onboarding_state import OnboardingState

# TODO update the JSON string below
json = "{}"
# create an instance of OnboardingState from a JSON string
onboarding_state_instance = OnboardingState.from_json(json)
# print the JSON string representation of the object
print(OnboardingState.to_json())

# convert the object into a dict
onboarding_state_dict = onboarding_state_instance.to_dict()
# create an instance of OnboardingState from a dict
onboarding_state_from_dict = OnboardingState.from_dict(onboarding_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


