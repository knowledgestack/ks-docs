# PasswordResetTokenResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password_reset_token** | **str** |  | 

## Example

```python
from ksapi.models.password_reset_token_response import PasswordResetTokenResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PasswordResetTokenResponse from a JSON string
password_reset_token_response_instance = PasswordResetTokenResponse.from_json(json)
# print the JSON string representation of the object
print(PasswordResetTokenResponse.to_json())

# convert the object into a dict
password_reset_token_response_dict = password_reset_token_response_instance.to_dict()
# create an instance of PasswordResetTokenResponse from a dict
password_reset_token_response_from_dict = PasswordResetTokenResponse.from_dict(password_reset_token_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


