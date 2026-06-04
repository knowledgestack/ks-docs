# TenantUserResponse

Tenant member response model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_id** | **UUID** | User ID | 
**email** | **str** | User email address | [optional] 
**first_name** | **str** | User first name | [optional] 
**last_name** | **str** | User last name | [optional] 
**role** | [**TenantUserRole**](TenantUserRole.md) |  | 
**department** | **str** | User&#39;s department | [optional] 
**job_title** | **str** | User&#39;s job title | [optional] 
**deactivated_on** | **datetime** | Soft-deletion timestamp. NULL &#x3D; active. | [optional] 
**is_tenant_idp_managed** | **bool** | Whether the user is managed by the tenant&#39;s identity provider | 
**created_at** | **datetime** | Date the user was added to the tenant | 
**updated_at** | **datetime** | Date the user was updated | 

## Example

```python
from ksapi.models.tenant_user_response import TenantUserResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TenantUserResponse from a JSON string
tenant_user_response_instance = TenantUserResponse.from_json(json)
# print the JSON string representation of the object
print(TenantUserResponse.to_json())

# convert the object into a dict
tenant_user_response_dict = tenant_user_response_instance.to_dict()
# create an instance of TenantUserResponse from a dict
tenant_user_response_from_dict = TenantUserResponse.from_dict(tenant_user_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


