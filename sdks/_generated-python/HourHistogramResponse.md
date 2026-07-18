# HourHistogramResponse

Workflow runs by hour-of-day (0-23) in the resolved timezone.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timezone** | **str** | IANA timezone the hours are in. | 
**counts_by_hour** | **List[int]** | Exactly 24 entries; index i is the run count for hour i. | 

## Example

```python
from ksapi.models.hour_histogram_response import HourHistogramResponse

# TODO update the JSON string below
json = "{}"
# create an instance of HourHistogramResponse from a JSON string
hour_histogram_response_instance = HourHistogramResponse.from_json(json)
# print the JSON string representation of the object
print(HourHistogramResponse.to_json())

# convert the object into a dict
hour_histogram_response_dict = hour_histogram_response_instance.to_dict()
# create an instance of HourHistogramResponse from a dict
hour_histogram_response_from_dict = HourHistogramResponse.from_dict(hour_histogram_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


