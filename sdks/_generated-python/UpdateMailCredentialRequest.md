# UpdateMailCredentialRequest

Correct a registration. All fields optional; an empty body is a 400.  ``name`` is always editable: it is a label and nothing authenticates with it.  The three that say *which application* are editable **only while no mailbox points at this registration**. A mailbox's stored grant is a refresh token issued to one client in one directory, so moving a registration that is in use would leave every mailbox on it unable to refresh — and across directories unable to match its own account id ever again. Before the first mailbox there is no grant, no token cache and no account id, so a mistyped id is just a mistyped id. ``mailbox_count`` is the gate, and the refusal names it.  Supplying ``client_secret`` here is for one typed wrong, which is why it follows the same gate. Replacing a secret that is *in use* is ``POST /{id}/rotate``, which is allowed at any count because a refresh token is bound to the client rather than to a particular secret.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**directory_id** | **UUID** | The Directory (tenant) ID in Azure | [optional] 
**client_id** | **str** | The Application ID | [optional] 
**client_secret** | **str** | Write-only. Never returned by any route | [optional] 

## Example

```python
from ksapi.models.update_mail_credential_request import UpdateMailCredentialRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateMailCredentialRequest from a JSON string
update_mail_credential_request_instance = UpdateMailCredentialRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateMailCredentialRequest.to_json())

# convert the object into a dict
update_mail_credential_request_dict = update_mail_credential_request_instance.to_dict()
# create an instance of UpdateMailCredentialRequest from a dict
update_mail_credential_request_from_dict = UpdateMailCredentialRequest.from_dict(update_mail_credential_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


