# CompleteAuthorizationResponse

What consented, for the page that was waiting on it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_source_id** | **UUID** | The connector this consent belonged to. The page that started the handshake already knows it; the one that did not — the consent route redeeming on its own because its opener is gone — has only this to route by | 
**mailbox_address** | **str** | The account that signed in, as the directory spells it, lowercased. Show it: a consent as the wrong account is stored, and the only thing that makes it a glance rather than an investigation is seeing the address beside the connector&#39;s name | 

## Example

```python
from ksapi.models.complete_authorization_response import CompleteAuthorizationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CompleteAuthorizationResponse from a JSON string
complete_authorization_response_instance = CompleteAuthorizationResponse.from_json(json)
# print the JSON string representation of the object
print(CompleteAuthorizationResponse.to_json())

# convert the object into a dict
complete_authorization_response_dict = complete_authorization_response_instance.to_dict()
# create an instance of CompleteAuthorizationResponse from a dict
complete_authorization_response_from_dict = CompleteAuthorizationResponse.from_dict(complete_authorization_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


