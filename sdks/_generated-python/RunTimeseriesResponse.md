# RunTimeseriesResponse

Workflow runs bucketed over time.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timezone** | **str** | IANA timezone the buckets are in. | 
**bucket** | [**TimeBucket**](TimeBucket.md) |  | 
**points** | [**List[TimeseriesPoint]**](TimeseriesPoint.md) |  | [optional] 

## Example

```python
from ksapi.models.run_timeseries_response import RunTimeseriesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RunTimeseriesResponse from a JSON string
run_timeseries_response_instance = RunTimeseriesResponse.from_json(json)
# print the JSON string representation of the object
print(RunTimeseriesResponse.to_json())

# convert the object into a dict
run_timeseries_response_dict = run_timeseries_response_instance.to_dict()
# create an instance of RunTimeseriesResponse from a dict
run_timeseries_response_from_dict = RunTimeseriesResponse.from_dict(run_timeseries_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


