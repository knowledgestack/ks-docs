# EventResponse

One event row, anchored to a path_part subject.  ``kind`` is namespaced ``domain.action`` (e.g. ``workflow.approval``, ``document.created``). ``payload`` is the domain-specific structured JSON associated with the event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **UUID** |  | 
**subject_path_part_id** | **UUID** |  | 
**kind** | **str** |  | 
**ts** | **datetime** |  | 
**actor_user_id** | **UUID** |  | 
**payload** | **Dict[str, object]** |  | 

## Example

```python
from ksapi.models.event_response import EventResponse

# TODO update the JSON string below
json = "{}"
# create an instance of EventResponse from a JSON string
event_response_instance = EventResponse.from_json(json)
# print the JSON string representation of the object
print(EventResponse.to_json())

# convert the object into a dict
event_response_dict = event_response_instance.to_dict()
# create an instance of EventResponse from a dict
event_response_from_dict = EventResponse.from_dict(event_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


