# EmailSyncConfig

How often a mailbox is read. Not which mailbox — nobody types that.  The address is whatever account consents, read back out of the id token and stored then. Asking for it up front looked like a safeguard and was mostly a trap: what the owner signs in with is their sign-in name (UPN), which for some organizations is not the mailbox's SMTP address at all — so a correctly typed email address would be refused at consent, and the admin would be told to recreate the connector with a string they had no way to know.  What is lost with it is a check on the *first* consent: a connector with no declared address accepts whoever signs in. Every consent after that is still checked against the stored address, which is the moment that actually goes wrong — somebody clicking through re-authorization in a hurry. And a first consent as the wrong account is visible rather than silent, because the connector carries a name of its own and the address beside it.  Which folders are mirrored is not here either: it is received and sent, which is what makes a conversation whole. See ``DEFAULT_EMAIL_FOLDERS``.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cron** | **str** |  | [optional] [default to '*/15 * * * *']

## Example

```python
from ksapi.models.email_sync_config import EmailSyncConfig

# TODO update the JSON string below
json = "{}"
# create an instance of EmailSyncConfig from a JSON string
email_sync_config_instance = EmailSyncConfig.from_json(json)
# print the JSON string representation of the object
print(EmailSyncConfig.to_json())

# convert the object into a dict
email_sync_config_dict = email_sync_config_instance.to_dict()
# create an instance of EmailSyncConfig from a dict
email_sync_config_from_dict = EmailSyncConfig.from_dict(email_sync_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


