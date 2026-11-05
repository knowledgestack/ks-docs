# EmailAccessToken

A freshly minted mailbox token, for a run that outlives its first one.  Minted on the API side, which owns the cache; the worker never sees the refresh token. One mailbox is one owner, so two concurrent runs cannot overwrite each other's rotation of it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | **str** |  | 
**access_token_expires_at** | **datetime** |  | 

## Example

```python
from ksapi.models.email_access_token import EmailAccessToken

# TODO update the JSON string below
json = "{}"
# create an instance of EmailAccessToken from a JSON string
email_access_token_instance = EmailAccessToken.from_json(json)
# print the JSON string representation of the object
print(EmailAccessToken.to_json())

# convert the object into a dict
email_access_token_dict = email_access_token_instance.to_dict()
# create an instance of EmailAccessToken from a dict
email_access_token_from_dict = EmailAccessToken.from_dict(email_access_token_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


