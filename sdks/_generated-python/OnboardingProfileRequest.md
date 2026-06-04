# OnboardingProfileRequest

Step 2 of onboarding — per-user info for the current tenant.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_name** | **str** | User&#39;s first name | [optional] 
**last_name** | **str** | User&#39;s last name | [optional] 
**job_title** | **str** | What the user does at this tenant | [optional] 

## Example

```python
from ksapi.models.onboarding_profile_request import OnboardingProfileRequest

# TODO update the JSON string below
json = "{}"
# create an instance of OnboardingProfileRequest from a JSON string
onboarding_profile_request_instance = OnboardingProfileRequest.from_json(json)
# print the JSON string representation of the object
print(OnboardingProfileRequest.to_json())

# convert the object into a dict
onboarding_profile_request_dict = onboarding_profile_request_instance.to_dict()
# create an instance of OnboardingProfileRequest from a dict
onboarding_profile_request_from_dict = OnboardingProfileRequest.from_dict(onboarding_profile_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


