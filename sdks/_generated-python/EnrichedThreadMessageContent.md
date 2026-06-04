# EnrichedThreadMessageContent

ThreadMessageContent with enriched citations for API responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | **str** | The text content of the message | 
**is_error** | **bool** | Whether this message represents a terminal assistant error | [optional] 
**citations** | [**List[EnrichedCitation]**](EnrichedCitation.md) | A list of citations with document context | [optional] 
**references** | [**List[ResolvedReferenceOutput]**](ResolvedReferenceOutput.md) | Resolved inline references attached to this message | [optional] 

## Example

```python
from ksapi.models.enriched_thread_message_content import EnrichedThreadMessageContent

# TODO update the JSON string below
json = "{}"
# create an instance of EnrichedThreadMessageContent from a JSON string
enriched_thread_message_content_instance = EnrichedThreadMessageContent.from_json(json)
# print the JSON string representation of the object
print(EnrichedThreadMessageContent.to_json())

# convert the object into a dict
enriched_thread_message_content_dict = enriched_thread_message_content_instance.to_dict()
# create an instance of EnrichedThreadMessageContent from a dict
enriched_thread_message_content_from_dict = EnrichedThreadMessageContent.from_dict(enriched_thread_message_content_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


