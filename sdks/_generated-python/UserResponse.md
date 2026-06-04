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
**onboarding_completed_at** | **datetime** | When the user finished onboarding for the current tenant. NULL &#x3D; wizard should be shown. | [optional] 

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


