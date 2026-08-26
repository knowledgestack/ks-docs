# EmailParty

One email participant.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Display name; empty if unnamed | [optional] [default to '']
**address** | **str** | Email address | 

## Example

```python
from ksapi.models.email_party import EmailParty

# TODO update the JSON string below
json = "{}"
# create an instance of EmailParty from a JSON string
email_party_instance = EmailParty.from_json(json)
# print the JSON string representation of the object
print(EmailParty.to_json())

# convert the object into a dict
email_party_dict = email_party_instance.to_dict()
# create an instance of EmailParty from a dict
email_party_from_dict = EmailParty.from_dict(email_party_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


