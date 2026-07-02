# ThreadMessageResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **UUID** | ThreadMessage ID | 
**path_part_id** | **UUID** | PathPart ID | 
**sequence** | **int** | Sequence number (from path_part.name) | 
**role** | [**MessageRole**](MessageRole.md) |  | 
**content** | [**EnrichedThreadMessageContent**](EnrichedThreadMessageContent.md) |  | 
**details** | [**ThreadMessageDetails**](ThreadMessageDetails.md) | Message details (None when not requested via with_details) | [optional] 
**parts** | [**List[TextPartOrReasoningPartOrToolPartOrDocEditPart]**](TextPartOrReasoningPartOrToolPartOrDocEditPart.md) | Ordered content parts (text/reasoning/tool/doc_edit). Native rows return details.parts; legacy rows return a best-effort read-time projection of details.steps. Empty when details are not requested. | [optional] 
**parent_path_id** | **UUID** | Thread&#39;s PathPart ID | 
**materialized_path** | **str** | Full materialized path from root | 
**tenant_id** | **UUID** | Tenant ID | 
**author_tenant_user_id** | **UUID** | tenant_user.user_id of the sender for USER messages. NULL for ASSISTANT / SYSTEM rows and for legacy USER rows written before multi-user thread support landed. | [optional] 
**created_at** | **datetime** | Creation timestamp | 
**updated_at** | **datetime** | Last update timestamp | 

## Example

```python
from ksapi.models.thread_message_response import ThreadMessageResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ThreadMessageResponse from a JSON string
thread_message_response_instance = ThreadMessageResponse.from_json(json)
# print the JSON string representation of the object
print(ThreadMessageResponse.to_json())

# convert the object into a dict
thread_message_response_dict = thread_message_response_instance.to_dict()
# create an instance of ThreadMessageResponse from a dict
thread_message_response_from_dict = ThreadMessageResponse.from_dict(thread_message_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


