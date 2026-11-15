# ScheduledChange

A plan change already scheduled for the subscription's period end.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**plan** | **str** | The plan it changes to; null when the schedule names no plan. | 
**seats** | **int** | The seats it changes to, when stated. | 
**at** | **date** | The day it takes effect: the period&#39;s end. | 

## Example

```python
from ksapi.models.scheduled_change import ScheduledChange

# TODO update the JSON string below
json = "{}"
# create an instance of ScheduledChange from a JSON string
scheduled_change_instance = ScheduledChange.from_json(json)
# print the JSON string representation of the object
print(ScheduledChange.to_json())

# convert the object into a dict
scheduled_change_dict = scheduled_change_instance.to_dict()
# create an instance of ScheduledChange from a dict
scheduled_change_from_dict = ScheduledChange.from_dict(scheduled_change_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


