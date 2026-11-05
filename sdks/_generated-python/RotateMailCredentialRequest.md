# RotateMailCredentialRequest

A new secret for one registration. OWNER/ADMIN only.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_secret** | **str** |  | 

## Example

```python
from ksapi.models.rotate_mail_credential_request import RotateMailCredentialRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RotateMailCredentialRequest from a JSON string
rotate_mail_credential_request_instance = RotateMailCredentialRequest.from_json(json)
# print the JSON string representation of the object
print(RotateMailCredentialRequest.to_json())

# convert the object into a dict
rotate_mail_credential_request_dict = rotate_mail_credential_request_instance.to_dict()
# create an instance of RotateMailCredentialRequest from a dict
rotate_mail_credential_request_from_dict = RotateMailCredentialRequest.from_dict(rotate_mail_credential_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


