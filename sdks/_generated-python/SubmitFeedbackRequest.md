# SubmitFeedbackRequest

Request to create or update feedback on a knowledge entity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target_type** | [**FeedbackTargetType**](FeedbackTargetType.md) |  | 
**target_id** | **UUID** |  | 
**rating** | [**FeedbackRating**](FeedbackRating.md) |  | 
**reason** | [**FeedbackReason**](FeedbackReason.md) |  | [optional] 
**comment** | **str** |  | [optional] 
**extra_metadata** | **Dict[str, object]** |  | [optional] 

## Example

```python
from ksapi.models.submit_feedback_request import SubmitFeedbackRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SubmitFeedbackRequest from a JSON string
submit_feedback_request_instance = SubmitFeedbackRequest.from_json(json)
# print the JSON string representation of the object
print(SubmitFeedbackRequest.to_json())

# convert the object into a dict
submit_feedback_request_dict = submit_feedback_request_instance.to_dict()
# create an instance of SubmitFeedbackRequest from a dict
submit_feedback_request_from_dict = SubmitFeedbackRequest.from_dict(submit_feedback_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


