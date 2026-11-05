# RotateMailCredentialResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mailboxes_affected** | **int** | How many mailboxes authenticate with this registration | 
**reauth_cleared** | **int** | How many were waiting on re-authorization and may now sync again. An expired secret cannot be told apart from a withdrawn consent at refresh time, so a rotation releases them to try once more rather than leaving them parked until somebody consents | 

## Example

```python
from ksapi.models.rotate_mail_credential_response import RotateMailCredentialResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RotateMailCredentialResponse from a JSON string
rotate_mail_credential_response_instance = RotateMailCredentialResponse.from_json(json)
# print the JSON string representation of the object
print(RotateMailCredentialResponse.to_json())

# convert the object into a dict
rotate_mail_credential_response_dict = rotate_mail_credential_response_instance.to_dict()
# create an instance of RotateMailCredentialResponse from a dict
rotate_mail_credential_response_from_dict = RotateMailCredentialResponse.from_dict(rotate_mail_credential_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


