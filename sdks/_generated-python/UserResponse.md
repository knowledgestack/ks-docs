# UserResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **UUID** | User ID | 
**email** | **str** | Email address of the user | 
**phone_number** | **str** | Subscriber number as a string of digits (no country code). Returned as a string to avoid JS Number precision issues. | [optional] 
**first_name** | **str** | First name of the user | 
**last_name** | **str** | Last name of the user | 
**idp_type** | [**IdpType**](IdpType.md) |  | 
**current_tenant_id** | **UUID** | Current tenant ID the user is logged into | 
**current_tenant_role** | [**TenantUserRole**](TenantUserRole.md) |  | 
**default_tenant_id** | **UUID** | Default tenant ID the user shall be logged into | 
**job_title** | **str** | User&#39;s job title at the current tenant (per-membership) | [optional] 
**department** | **str** | User&#39;s department at the current tenant (per-membership) | [optional] 
**bio** | **str** | What the user wrote about themselves at the current tenant. The chat agent reads it on every turn. | [optional] 
**avatar_url** | **str** | Presigned URL of the user&#39;s profile photo at the current tenant. Expires after six hours; read GET /v1/users/me again for a fresh one. | [optional] 
**language_preference** | [**SupportedLanguage**](SupportedLanguage.md) |  | 
**onboarding_completed_at** | **datetime** | When the user finished onboarding for the current tenant. NULL &#x3D; wizard should be shown. | [optional] 
**join_method** | [**TenantUserJoinMethod**](TenantUserJoinMethod.md) |  | 
**onboarding_state** | [**OnboardingState**](OnboardingState.md) | Resume step and guide progress for the current membership. | [optional] 
**invited_by** | [**UserInfo**](UserInfo.md) | Who sent the accepted invite that created the current membership. NULL when the membership did not come from an email invite, and on the sign-in and sign-up responses; read it from GET /v1/users/me. | [optional] 
**added_by** | [**AddedBy**](AddedBy.md) |  | [optional] 
**idp_managed_fields** | **List[str]** | Profile fields the identity provider owns, so clients render them read-only and updates to them are refused. Empty unless directory-managed. | [optional] 
**onboarding_enabled** | **bool** | The current tenant&#39;s onboarding switch: true forces the flow on, false hides it, NULL follows the deployment default. | [optional] 

## Example

```python
from ksapi.models.user_response import UserResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UserResponse from a JSON string
user_response_instance = UserResponse.from_json(json)
# print the JSON string representation of the object
print(UserResponse.to_json())

# convert the object into a dict
user_response_dict = user_response_instance.to_dict()
# create an instance of UserResponse from a dict
user_response_from_dict = UserResponse.from_dict(user_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


