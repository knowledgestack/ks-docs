# EmailThreadLastMessage

The newest mail in a conversation, for the row that shows it collapsed.  A reference on the conversation plus one join, rather than a column per field: whichever field a row turns out to need is already here, and the listing still costs one query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email_message_id** | **UUID** |  | 
**sender** | **str** | From header, verbatim — who last moved it | 
**sent_at** | **datetime** |  | 
**title** | **str** | That mail&#39;s own subject, which a reply prefixes | 
**external_source_folder** | **str** | Which side it is: the provider&#39;s own folder key | [optional] 
**preview** | **str** | The opening of this mail&#39;s own words, for the row&#39;s second line. Quoted thread removed, whitespace collapsed to one line, cut at 255 characters — clamp it to however many lines you draw. Null for a mail whose body never arrived | [optional] 
**recipients** | **List[str]** | Who this mail went to, at most two, from headers verbatim. A sent row reads &#x60;&#x60;To: …&#x60;&#x60; where a received row reads the sender, and the conversation&#39;s &#x60;&#x60;participants&#x60;&#x60; cannot serve that — they are senders, so every row in a Sent view would name the mailbox itself. Fewer than &#x60;&#x60;recipient_count&#x60;&#x60; by design | [optional] 
**recipient_count** | **int** | How many this mail went to in all, counting the ones not named above. &#x60;&#x60;To&#x60;&#x60; only: &#x60;&#x60;cc&#x60;&#x60; and &#x60;&#x60;bcc&#x60;&#x60; stay on the message, where a reader opens them deliberately | [optional] [default to 0]

## Example

```python
from ksapi.models.email_thread_last_message import EmailThreadLastMessage

# TODO update the JSON string below
json = "{}"
# create an instance of EmailThreadLastMessage from a JSON string
email_thread_last_message_instance = EmailThreadLastMessage.from_json(json)
# print the JSON string representation of the object
print(EmailThreadLastMessage.to_json())

# convert the object into a dict
email_thread_last_message_dict = email_thread_last_message_instance.to_dict()
# create an instance of EmailThreadLastMessage from a dict
email_thread_last_message_from_dict = EmailThreadLastMessage.from_dict(email_thread_last_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


