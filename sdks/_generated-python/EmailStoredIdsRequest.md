# EmailStoredIdsRequest

Which of these source message ids are already stored under a connector.  The sync diff, one page at a time. The whole set is deliberately not shipped to the worker: it grows with the mailbox, and a decade-old one would outgrow a Temporal payload — silently working until it did not.  Names the folder that is asking, which makes this a small write as well as a question: a mail reported as already stored is recorded as living in that folder. Nothing else records a move between two walked folders, because the answer is deliberately connector-wide — and ``external_source_folder`` is what the Inbox / Sent view filters on and what a removal is checked against.  Carries no tenant or connector id, for the same reason as ``EmailDeltaLinkRequest``: both come from the request's own identity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**folder** | **str** | Which of this connector&#39;s folders has just listed these ids. Recorded against the ones already stored, because the answer itself is connector-wide: a mail that moved between two walked folders is skipped by the folder it arrived in, and the folder it left then reports it removed. | 
**external_message_ids** | **List[str]** | One Graph page&#39;s worth of ids; the cap bounds the payload | 

## Example

```python
from ksapi.models.email_stored_ids_request import EmailStoredIdsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EmailStoredIdsRequest from a JSON string
email_stored_ids_request_instance = EmailStoredIdsRequest.from_json(json)
# print the JSON string representation of the object
print(EmailStoredIdsRequest.to_json())

# convert the object into a dict
email_stored_ids_request_dict = email_stored_ids_request_instance.to_dict()
# create an instance of EmailStoredIdsRequest from a dict
email_stored_ids_request_from_dict = EmailStoredIdsRequest.from_dict(email_stored_ids_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


