# RetireMailCredentialResponse

What deleting a registration took with it.  The count is the point of answering at all: the admin saw ``mailbox_count`` before pressing, and this says what was actually acted on. A 204 would leave them to go and look.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mailboxes_disabled** | **int** | How many mailboxes were stopped. Each one is now DISABLED with no registration: it cannot be authorized, synced or repaired, and its mail stays readable | 

## Example

```python
from ksapi.models.retire_mail_credential_response import RetireMailCredentialResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RetireMailCredentialResponse from a JSON string
retire_mail_credential_response_instance = RetireMailCredentialResponse.from_json(json)
# print the JSON string representation of the object
print(RetireMailCredentialResponse.to_json())

# convert the object into a dict
retire_mail_credential_response_dict = retire_mail_credential_response_instance.to_dict()
# create an instance of RetireMailCredentialResponse from a dict
retire_mail_credential_response_from_dict = RetireMailCredentialResponse.from_dict(retire_mail_credential_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


