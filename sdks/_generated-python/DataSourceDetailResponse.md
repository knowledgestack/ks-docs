# DataSourceDetailResponse

A connector plus the schemas (and their readable tables) the caller sees.  ``description_document_id`` points at the connector's generated, ingested \"Database overview\" Document (a hidden system file); null until generated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_source** | [**DataSourceResponse**](DataSourceResponse.md) |  | 
**schemas** | [**List[DataSourceSchemaResponse]**](DataSourceSchemaResponse.md) |  | 
**description_document_id** | **UUID** |  | [optional] 

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


