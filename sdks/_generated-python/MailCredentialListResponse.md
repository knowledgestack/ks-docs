# MailCredentialListResponse

A workspace's registrations, and the callback a new one must list.  ``redirect_uri`` is on the envelope rather than only on the rows because it is needed **before** the first row exists: registering the application in the provider's directory is what has to happen first, and it takes this string. Every row in a workspace carries the same one.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[MailCredentialResponse]**](MailCredentialResponse.md) |  | 
**redirect_uri** | **str** | **Show this with a copy affordance** when registering an application. Null when the deployment has no usable frontend URL configured, in which case no mailbox can be connected at all | [optional] 

## Example

```python
from ksapi.models.mail_credential_list_response import MailCredentialListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of MailCredentialListResponse from a JSON string
mail_credential_list_response_instance = MailCredentialListResponse.from_json(json)
# print the JSON string representation of the object
print(MailCredentialListResponse.to_json())

# convert the object into a dict
mail_credential_list_response_dict = mail_credential_list_response_instance.to_dict()
# create an instance of MailCredentialListResponse from a dict
mail_credential_list_response_from_dict = MailCredentialListResponse.from_dict(mail_credential_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


