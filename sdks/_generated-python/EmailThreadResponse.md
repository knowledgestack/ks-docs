# EmailThreadResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**part_type** | **str** | Path part type | [optional] [default to 'EMAIL_THREAD']
**id** | **UUID** |  | 
**path_part_id** | **UUID** |  | 
**parent_path_part_id** | **UUID** |  | 
**materialized_path** | **str** |  | 
**tenant_id** | **UUID** |  | 
**name** | **str** | PathPart name — this PDO&#39;s own UUID, shared by every folder-listing variant. Render &#x60;&#x60;title&#x60;&#x60; instead; the name exists so path-based callers can treat the listing union uniformly. | 
**source_conversation_id** | **str** |  | 
**title** | **str** |  | 
**message_count** | **int** | How many mails this conversation holds — the number a collapsed row shows beside the participants. Counted for the whole page in one query; zero for a conversation created before its first mail was stored | [optional] [default to 0]
**participants** | **List[str]** | Who has spoken in this conversation: its distinct senders, oldest first, at most five. From headers verbatim — compare them against the connector&#39;s mailbox_address to render your own side as \&quot;me\&quot;; the server does not localize. For a Sent view, where every row would otherwise name the mailbox itself, read &#x60;&#x60;last_message.recipients&#x60;&#x60; instead — the whole conversation&#39;s audience is not here, because a twenty-recipient thread would not fit a row | [optional] 
**has_attachments** | **bool** | Whether any mail in this conversation has an attachment stored under it — the row&#39;s paperclip. True only when there is something to open | [optional] [default to False]
**attachment_names** | **List[str]** | The filenames to show under the row, at most two. Documents before images, then the newest mail&#39;s files first: a signature logo is stored like any other attachment, so ordering by arrival alone would name &#x60;&#x60;image001.png&#x60;&#x60; and leave the invoice behind a click. Fewer than &#x60;&#x60;attachment_count&#x60;&#x60; by design — open the conversation for the rest | [optional] 
**attachment_count** | **int** | How many attachments this conversation holds across all its mails, counting the ones not named above. Counts what was stored, which is what can be opened; it moves together with &#x60;&#x60;has_attachments&#x60;&#x60; | [optional] [default to 0]
**last_message_at** | **datetime** | When the newest mail in this conversation was sent. Order a mailbox list on it with &#x60;&#x60;sort_by&#x3D;LAST_MESSAGE_AT&#x60;&#x60;; &#x60;&#x60;created_at&#x60;&#x60; is when the conversation&#39;s first mail was stored, so it sorts a months-old conversation that got a reply today as months old. Absent until the conversation holds a mail. | [optional] 
**last_message** | [**EmailThreadLastMessage**](EmailThreadLastMessage.md) | The newest mail in this conversation, as much of it as a collapsed row needs. Served from one join rather than a request per row. Absent until the conversation holds a mail. | [optional] 
**approval_state** | [**PathPartApprovalState**](PathPartApprovalState.md) |  | 
**owner** | [**UserInfo**](UserInfo.md) |  | [optional] 
**permissions** | [**ItemPermissions**](ItemPermissions.md) |  | 
**created_at** | **datetime** |  | 
**updated_at** | **datetime** |  | 

## Example

```python
from ksapi.models.email_thread_response import EmailThreadResponse

# TODO update the JSON string below
json = "{}"
# create an instance of EmailThreadResponse from a JSON string
email_thread_response_instance = EmailThreadResponse.from_json(json)
# print the JSON string representation of the object
print(EmailThreadResponse.to_json())

# convert the object into a dict
email_thread_response_dict = email_thread_response_instance.to_dict()
# create an instance of EmailThreadResponse from a dict
email_thread_response_from_dict = EmailThreadResponse.from_dict(email_thread_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


