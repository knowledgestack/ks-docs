# CatalogTableResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**columns** | [**List[CatalogColumnResponse]**](CatalogColumnResponse.md) |  | 

## Example

```python
from ksapi.models.catalog_table_response import CatalogTableResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CatalogTableResponse from a JSON string
catalog_table_response_instance = CatalogTableResponse.from_json(json)
# print the JSON string representation of the object
print(CatalogTableResponse.to_json())

# convert the object into a dict
catalog_table_response_dict = catalog_table_response_instance.to_dict()
# create an instance of CatalogTableResponse from a dict
catalog_table_response_from_dict = CatalogTableResponse.from_dict(catalog_table_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


