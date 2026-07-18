# LabeledSeries

A named series (e.g. one per document origin or ingestion outcome).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **str** | Series label, e.g. &#39;SOURCE&#39; or &#39;FAILED&#39;. | 
**points** | [**List[TimeseriesPoint]**](TimeseriesPoint.md) |  | [optional] 

## Example

```python
from ksapi.models.labeled_series import LabeledSeries

# TODO update the JSON string below
json = "{}"
# create an instance of LabeledSeries from a JSON string
labeled_series_instance = LabeledSeries.from_json(json)
# print the JSON string representation of the object
print(LabeledSeries.to_json())

# convert the object into a dict
labeled_series_dict = labeled_series_instance.to_dict()
# create an instance of LabeledSeries from a dict
labeled_series_from_dict = LabeledSeries.from_dict(labeled_series_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


