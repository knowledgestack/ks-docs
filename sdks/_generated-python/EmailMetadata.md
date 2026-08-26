# EmailMetadata

Structured headers of an ingested email (EMAIL document type only).  Populated by ``document_preparation_activity`` from the same parse that renders the message body, so the stored metadata and the rendered document cannot disagree. Null on a multi-message archive: its messages are ingested as their own documents, and each carries its own block.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subject** | **str** | Message subject | [optional] [default to '']
**sender** | [**EmailParty**](EmailParty.md) | Sender; null if unparseable | [optional] 
**to** | [**List[EmailParty]**](EmailParty.md) | To recipients | [optional] 
**cc** | [**List[EmailParty]**](EmailParty.md) | Cc recipients | [optional] 
**bcc** | [**List[EmailParty]**](EmailParty.md) | Bcc recipients. Present only when the source file carries them — a sending MTA strips Bcc, so it survives in the sender&#39;s own copy (a .msg exported from Sent Items) but never in a received .eml. | [optional] 
**sent_at** | **str** | Date header, as written | [optional] [default to '']
**message_id** | **str** | RFC 5322 Message-ID | [optional] [default to '']
**in_reply_to** | **str** | Message-ID being replied to | [optional] [default to '']
**references** | **List[str]** | Reply chain, oldest first | [optional] 
**conversation_topic** | **str** | Outlook PidTagConversationTopic (.msg only) | [optional] [default to '']
**thread_root_id** | **str** | Message-ID that started the thread — the first References entry, or this message&#39;s own id. Group by this to reconstruct a thread. | [optional] [default to '']
**raw_headers** | **str** | The verbatim header block, so a header this schema does not model stays recoverable without re-reading the source file. | [optional] [default to '']

## Example

```python
from ksapi.models.email_metadata import EmailMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of EmailMetadata from a JSON string
email_metadata_instance = EmailMetadata.from_json(json)
# print the JSON string representation of the object
print(EmailMetadata.to_json())

# convert the object into a dict
email_metadata_dict = email_metadata_instance.to_dict()
# create an instance of EmailMetadata from a dict
email_metadata_from_dict = EmailMetadata.from_dict(email_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


