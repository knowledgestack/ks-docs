# CatalogColumnResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**data_type** | **str** |  | 
**is_pk** | **bool** |  | 
**references** | [**ColumnReference**](ColumnReference.md) |  | [optional] 

## Example

```python
from ksapi.models.catalog_column_response import CatalogColumnResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CatalogColumnResponse from a JSON string
catalog_column_response_instance = CatalogColumnResponse.from_json(json)
# print the JSON string representation of the object
print(CatalogColumnResponse.to_json())

# convert the object into a dict
catalog_column_response_dict = catalog_column_response_instance.to_dict()
# create an instance of CatalogColumnResponse from a dict
catalog_column_response_from_dict = CatalogColumnResponse.from_dict(catalog_column_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


