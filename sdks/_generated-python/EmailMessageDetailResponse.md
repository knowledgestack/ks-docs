# EmailMessageDetailResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**part_type** | **str** | Path part type | [optional] [default to 'EMAIL_MESSAGE']
**id** | **UUID** |  | 
**path_part_id** | **UUID** |  | 
**parent_path_part_id** | **UUID** |  | 
**materialized_path** | **str** |  | 
**tenant_id** | **UUID** |  | 
**name** | **str** | PathPart name — this PDO&#39;s own UUID, shared by every folder-listing variant. Render &#x60;&#x60;title&#x60;&#x60; instead; the name exists so path-based callers can treat the listing union uniformly. | 
**external_message_id** | **str** |  | 
**external_source_folder** | **str** |  | 
**preview** | **str** | The opening of this mail&#39;s own words, as one line with the markup taken out — for a row in a list, so a list does not need a body fetch per row. Null for a mail stored without a body | [optional] 
**sent_at** | **datetime** |  | 
**title** | **str** |  | 
**sender** | **str** |  | 
**recipients** | **List[str]** |  | 
**cc_recipients** | **List[str]** |  | 
**bcc_recipients** | **List[str]** |  | 
**has_attachments** | **bool** | Whether this mail is the one in the conversation carrying a file. The row&#39;s paperclip answers for the whole conversation and cannot say which message earned it. Counted from the files under this mail as they stand, so it never points at nothing: an attachment the ingest refused, or one deleted since, leaves this false | [optional] [default to False]
**approval_state** | [**PathPartApprovalState**](PathPartApprovalState.md) |  | 
**owner** | [**UserInfo**](UserInfo.md) |  | [optional] 
**permissions** | [**ItemPermissions**](ItemPermissions.md) |  | 
**created_at** | **datetime** |  | 
**updated_at** | **datetime** |  | 
**content** | **str** | This message&#39;s own words as text, without the conversation it quotes. The provider separates the two before we see it and only this half is stored, so there is no quoted history to expand: the rest of the conversation is the thread&#39;s other messages. This is also what retrieval reads. Empty for a mail stored without a body at all. | 
**attachments** | [**List[EmailAttachmentResponse]**](EmailAttachmentResponse.md) |  | [optional] 

## Example

```python
from ksapi.models.email_message_detail_response import EmailMessageDetailResponse

# TODO update the JSON string below
json = "{}"
# create an instance of EmailMessageDetailResponse from a JSON string
email_message_detail_response_instance = EmailMessageDetailResponse.from_json(json)
# print the JSON string representation of the object
print(EmailMessageDetailResponse.to_json())

# convert the object into a dict
email_message_detail_response_dict = email_message_detail_response_instance.to_dict()
# create an instance of EmailMessageDetailResponse from a dict
email_message_detail_response_from_dict = EmailMessageDetailResponse.from_dict(email_message_detail_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


