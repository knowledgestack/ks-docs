# KbTimeseriesResponse

A knowledge-base metric bucketed over time.  ``series`` carries one entry per split — two (SOURCE / GENERATED) for ``document_uploads``, one for the ingestion metrics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metric** | [**KbMetric**](KbMetric.md) |  | 
**timezone** | **str** |  | 
**bucket** | [**TimeBucket**](TimeBucket.md) |  | 
**series** | [**List[LabeledSeries]**](LabeledSeries.md) |  | [optional] 

## Example

```python
from ksapi.models.kb_timeseries_response import KbTimeseriesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of KbTimeseriesResponse from a JSON string
kb_timeseries_response_instance = KbTimeseriesResponse.from_json(json)
# print the JSON string representation of the object
print(KbTimeseriesResponse.to_json())

# convert the object into a dict
kb_timeseries_response_dict = kb_timeseries_response_instance.to_dict()
# create an instance of KbTimeseriesResponse from a dict
kb_timeseries_response_from_dict = KbTimeseriesResponse.from_dict(kb_timeseries_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


