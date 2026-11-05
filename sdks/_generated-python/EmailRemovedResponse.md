# EmailRemovedResponse

What the removal actually trashed, for the run's own summary.  Counts rather than a receipt per id: a retried activity and a re-reported removal both arrive asking for mail that has already gone, which is not an error and not worth a line each.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**removed** | **int** | Mails trashed, with their attachments | 
**conversations_removed** | **int** | Conversations trashed because their last mail was one of them | 

## Example

```python
from ksapi.models.email_removed_response import EmailRemovedResponse

# TODO update the JSON string below
json = "{}"
# create an instance of EmailRemovedResponse from a JSON string
email_removed_response_instance = EmailRemovedResponse.from_json(json)
# print the JSON string representation of the object
print(EmailRemovedResponse.to_json())

# convert the object into a dict
email_removed_response_dict = email_removed_response_instance.to_dict()
# create an instance of EmailRemovedResponse from a dict
email_removed_response_from_dict = EmailRemovedResponse.from_dict(email_removed_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


