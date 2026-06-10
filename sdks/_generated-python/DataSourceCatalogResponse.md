# DataSourceCatalogResponse

Live introspection of the external DB (pick tables to model from here).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tables** | [**List[CatalogTableResponse]**](CatalogTableResponse.md) |  | 

## Example

```python
from ksapi.models.data_source_catalog_response import DataSourceCatalogResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DataSourceCatalogResponse from a JSON string
data_source_catalog_response_instance = DataSourceCatalogResponse.from_json(json)
# print the JSON string representation of the object
print(DataSourceCatalogResponse.to_json())

# convert the object into a dict
data_source_catalog_response_dict = data_source_catalog_response_instance.to_dict()
# create an instance of DataSourceCatalogResponse from a dict
data_source_catalog_response_from_dict = DataSourceCatalogResponse.from_dict(data_source_catalog_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


