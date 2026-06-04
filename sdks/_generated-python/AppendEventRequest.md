# AppendEventRequest

Body for ``POST /v1/path-parts/{path_part_id}/events``.  The route requires ``can_write`` on the subject path_part. Server stamps ``id``/``tenant_id``/``actor_user_id``/``ts``/ ``subject_path_part_id``; frontend supplies only ``kind`` and ``payload``. ``kind`` must NOT use a reserved server namespace — those are emitted by service code so the audit trail can't be forged by an authenticated client.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** |  | 
**payload** | **Dict[str, object]** |  | [optional] 

## Example

```python
from ksapi.models.append_event_request import AppendEventRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AppendEventRequest from a JSON string
append_event_request_instance = AppendEventRequest.from_json(json)
# print the JSON string representation of the object
print(AppendEventRequest.to_json())

# convert the object into a dict
append_event_request_dict = append_event_request_instance.to_dict()
# create an instance of AppendEventRequest from a dict
append_event_request_from_dict = AppendEventRequest.from_dict(append_event_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


