# PasswordResetWithTokenRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password_reset_token** | **str** | Password reset JWT | 
**new_password** | **str** | New password | 

## Example

```python
from ksapi.models.password_reset_with_token_request import PasswordResetWithTokenRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PasswordResetWithTokenRequest from a JSON string
password_reset_with_token_request_instance = PasswordResetWithTokenRequest.from_json(json)
# print the JSON string representation of the object
print(PasswordResetWithTokenRequest.to_json())

# convert the object into a dict
password_reset_with_token_request_dict = password_reset_with_token_request_instance.to_dict()
# create an instance of PasswordResetWithTokenRequest from a dict
password_reset_with_token_request_from_dict = PasswordResetWithTokenRequest.from_dict(password_reset_with_token_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


