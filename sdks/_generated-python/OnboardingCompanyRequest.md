# OnboardingCompanyRequest

Step 1 of onboarding — tenant-wide company info. OWNER/ADMIN only.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Brief company description (≤5000 chars) | [optional] 
**industry** | **str** | Industry / company type (free text) | [optional] 

## Example

```python
from ksapi.models.onboarding_company_request import OnboardingCompanyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of OnboardingCompanyRequest from a JSON string
onboarding_company_request_instance = OnboardingCompanyRequest.from_json(json)
# print the JSON string representation of the object
print(OnboardingCompanyRequest.to_json())

# convert the object into a dict
onboarding_company_request_dict = onboarding_company_request_instance.to_dict()
# create an instance of OnboardingCompanyRequest from a dict
onboarding_company_request_from_dict = OnboardingCompanyRequest.from_dict(onboarding_company_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


