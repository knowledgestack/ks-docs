# EmailRemovedRequest

Source ids that are no longer in a folder this connector walks.  The tree mirrors the mailbox's send and receive folders, so a mail that left them leaves the tree. The provider reports leaving a folder and nothing finer: measured on 2026-10-25, a mail deleted and a mail moved to Archive both came back as ``@removed`` with ``reason: \"deleted\"``.  Which is why the folder is named and checked. A delta is per folder, so moving a mail from Sent to Inbox reports it removed from Sent — and both are walked here. Trashing on the id alone took mail the mailbox still held, with both folders' bookmarks advanced so no later run listed it again; whether it survived depended on the order the folders were walked.  Carries no tenant or connector id, for the same reason as ``EmailDeltaLinkRequest``: both come from the request's own identity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**folder** | **str** | Which of this connector&#39;s folders no longer holds them. Only mail recorded as living in this folder is trashed: a mail that moved to another walked folder is still in the mailbox, and the folder it left reports it gone exactly the same way. | 
**external_message_ids** | **List[str]** | One Graph page&#39;s worth of ids; the cap bounds the payload | 

## Example

```python
from ksapi.models.email_removed_request import EmailRemovedRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EmailRemovedRequest from a JSON string
email_removed_request_instance = EmailRemovedRequest.from_json(json)
# print the JSON string representation of the object
print(EmailRemovedRequest.to_json())

# convert the object into a dict
email_removed_request_dict = email_removed_request_instance.to_dict()
# create an instance of EmailRemovedRequest from a dict
email_removed_request_from_dict = EmailRemovedRequest.from_dict(email_removed_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


