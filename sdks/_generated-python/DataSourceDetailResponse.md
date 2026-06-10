# DataSourceDetailResponse

A connector plus the modeled tables the caller can read (describe).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_source** | [**DataSourceResponse**](DataSourceResponse.md) |  | 
**tables** | [**List[DataSourceTableResponse]**](DataSourceTableResponse.md) |  | 

## Example

```python
from ksapi.models.data_source_detail_response import DataSourceDetailResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DataSourceDetailResponse from a JSON string
data_source_detail_response_instance = DataSourceDetailResponse.from_json(json)
# print the JSON string representation of the object
print(DataSourceDetailResponse.to_json())

# convert the object into a dict
data_source_detail_response_dict = data_source_detail_response_instance.to_dict()
# create an instance of DataSourceDetailResponse from a dict
data_source_detail_response_from_dict = DataSourceDetailResponse.from_dict(data_source_detail_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


