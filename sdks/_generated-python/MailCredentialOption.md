# MailCredentialOption

A registration as anyone in the workspace may see it.  The whole of it. Picking one is all an ordinary member does with it, and a name is all picking needs — the ids are the admin's business and the secret is nobody's. This is also what a connector echoes, because a connector is readable by anyone with read access to its folder.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **UUID** |  | 
**name** | **str** | What an admin called this registration | 
**provider** | **str** | Which provider it registers an app with | 

## Example

```python
from ksapi.models.mail_credential_option import MailCredentialOption

# TODO update the JSON string below
json = "{}"
# create an instance of MailCredentialOption from a JSON string
mail_credential_option_instance = MailCredentialOption.from_json(json)
# print the JSON string representation of the object
print(MailCredentialOption.to_json())

# convert the object into a dict
mail_credential_option_dict = mail_credential_option_instance.to_dict()
# create an instance of MailCredentialOption from a dict
mail_credential_option_from_dict = MailCredentialOption.from_dict(mail_credential_option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


