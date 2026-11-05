# CompleteAuthorizationRequest

What the provider left in the fragment, forwarded by the page that opened it.  Every field is the provider's own, passed through verbatim: the callback route reads the fragment and relays it, deciding nothing. Which of them arrive says which way the consent went — ``code`` on a success, ``error`` on a refusal — so both are optional here and the refusal is the API's to name.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** | **str** | MSAL&#39;s own, echoed by the provider. The key the parked flow is found under, and what says which connector this consent was for | 
**code** | **str** | The authorization code, on a success | [optional] 
**error** | **str** | The provider&#39;s error code, on a refusal | [optional] 
**error_description** | **str** | The provider&#39;s own sentence about the refusal | [optional] 
**client_info** | **str** | Pass it on if the provider sent it. MSAL builds the account&#39;s &#x60;&#x60;home_account_id&#x60;&#x60; from it, and that id — not the sign-in name — is what tells a re-authorization of this mailbox from somebody else&#39;s, so dropping it loses the one judgement that survives a rename | [optional] 

## Example

```python
from ksapi.models.complete_authorization_request import CompleteAuthorizationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CompleteAuthorizationRequest from a JSON string
complete_authorization_request_instance = CompleteAuthorizationRequest.from_json(json)
# print the JSON string representation of the object
print(CompleteAuthorizationRequest.to_json())

# convert the object into a dict
complete_authorization_request_dict = complete_authorization_request_instance.to_dict()
# create an instance of CompleteAuthorizationRequest from a dict
complete_authorization_request_from_dict = CompleteAuthorizationRequest.from_dict(complete_authorization_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


