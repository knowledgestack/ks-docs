# CreateMailCredentialRequest

Register an application for this workspace. OWNER/ADMIN only.  The hosts are not asked for. Which of the provider's clouds a directory lives in is a fact about the directory, read off the provider here, and getting it wrong surfaces as a provider error code on somebody else's consent screen.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | What the picker shows. Unique in the workspace | 
**directory_id** | **UUID** | The Directory (tenant) ID in Azure | 
**client_id** | **str** | The Application (client) ID | 
**client_secret** | **str** | Write-only. Never returned by any route | 

## Example

```python
from ksapi.models.create_mail_credential_request import CreateMailCredentialRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateMailCredentialRequest from a JSON string
create_mail_credential_request_instance = CreateMailCredentialRequest.from_json(json)
# print the JSON string representation of the object
print(CreateMailCredentialRequest.to_json())

# convert the object into a dict
create_mail_credential_request_dict = create_mail_credential_request_instance.to_dict()
# create an instance of CreateMailCredentialRequest from a dict
create_mail_credential_request_from_dict = CreateMailCredentialRequest.from_dict(create_mail_credential_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


