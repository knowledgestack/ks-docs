# FeedbackEventResponse

Response schema for a single FeedbackEvent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **UUID** |  | 
**target_type** | [**FeedbackTargetType**](FeedbackTargetType.md) |  | 
**target_id** | **UUID** |  | 
**user_id** | **UUID** |  | 
**rating** | [**FeedbackRating**](FeedbackRating.md) |  | 
**reason** | [**FeedbackReason**](FeedbackReason.md) |  | 
**comment** | **str** |  | 
**extra_metadata** | **Dict[str, object]** |  | 
**created_at** | **datetime** |  | 
**updated_at** | **datetime** |  | 

## Example

```python
from ksapi.models.feedback_event_response import FeedbackEventResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FeedbackEventResponse from a JSON string
feedback_event_response_instance = FeedbackEventResponse.from_json(json)
# print the JSON string representation of the object
print(FeedbackEventResponse.to_json())

# convert the object into a dict
feedback_event_response_dict = feedback_event_response_instance.to_dict()
# create an instance of FeedbackEventResponse from a dict
feedback_event_response_from_dict = FeedbackEventResponse.from_dict(feedback_event_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


