# MailCredentialResponse

A registration as an admin may see it: the ids, never the secret.  The two GUIDs are here so an admin can tell two registrations in one directory apart, and confirm against what they typed in the provider's portal. They are not secrets — they travel in every consent URL — but they are noise to a member who only has to pick one, which is why the picker gets :class:`MailCredentialOption` instead.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **UUID** |  | 
**name** | **str** | What an admin called this registration | 
**provider** | **str** | Which provider it registers an app with | 
**directory_id** | **UUID** | The customer&#39;s own directory | 
**client_id** | **str** | The application&#39;s id at the provider | 
**redirect_uri** | **str** | The callback this registration must list at the provider, as it was stored when the registration was created. The provider compares it character for character, so a later FRONTEND_URL change does not move an existing registration off it | 
**created_at** | **datetime** |  | 
**mailbox_count** | **int** | How many mailboxes point at this registration. What a retirement has to deal with, and what makes a rotation&#39;s blast radius visible before it is pressed | 

## Example

```python
from ksapi.models.mail_credential_response import MailCredentialResponse

# TODO update the JSON string below
json = "{}"
# create an instance of MailCredentialResponse from a JSON string
mail_credential_response_instance = MailCredentialResponse.from_json(json)
# print the JSON string representation of the object
print(MailCredentialResponse.to_json())

# convert the object into a dict
mail_credential_response_dict = mail_credential_response_instance.to_dict()
# create an instance of MailCredentialResponse from a dict
mail_credential_response_from_dict = MailCredentialResponse.from_dict(mail_credential_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


