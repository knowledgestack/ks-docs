# TenantUserEditRequest

Request to update a tenant user's role and optional profile fields.  ``job_title`` and ``department`` follow partial-update semantics: omit (or send null) to leave the field unchanged, send an empty string to clear it to NULL.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**role** | [**TenantUserRole**](TenantUserRole.md) |  | 
**job_title** | **str** | User&#39;s job title; omit to leave unchanged, empty string to clear | [optional] 
**department** | **str** | User&#39;s department; omit to leave unchanged, empty string to clear | [optional] 

## Example

```python
from ksapi.models.tenant_user_edit_request import TenantUserEditRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TenantUserEditRequest from a JSON string
tenant_user_edit_request_instance = TenantUserEditRequest.from_json(json)
# print the JSON string representation of the object
print(TenantUserEditRequest.to_json())

# convert the object into a dict
tenant_user_edit_request_dict = tenant_user_edit_request_instance.to_dict()
# create an instance of TenantUserEditRequest from a dict
tenant_user_edit_request_from_dict = TenantUserEditRequest.from_dict(tenant_user_edit_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


