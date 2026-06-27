# DataSourceTableResponse

Modeled-table response; a discriminated-union variant for listings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**part_type** | **str** | Path part type | [optional] [default to 'DATA_SOURCE_TABLE']
**id** | **UUID** |  | 
**path_part_id** | **UUID** | DATA_SOURCE_TABLE path_part of this table | 
**parent_path_part_id** | **UUID** | DATA_SOURCE path_part of the parent connector | 
**materialized_path** | **str** | Full materialized path from root | 
**tenant_id** | **UUID** |  | 
**name** | **str** |  | 
**data_source_id** | **UUID** |  | 
**table_name** | **str** |  | 
**schema_name** | **str** | Schema/namespace in the external DB; null &#x3D; default schema | [optional] 
**description** | **str** |  | 
**column_config** | **List[Dict[str, object]]** |  | 
**approval_state** | [**PathPartApprovalState**](PathPartApprovalState.md) |  | 
**permissions** | [**ItemPermissions**](ItemPermissions.md) |  | 
**created_at** | **datetime** |  | 
**updated_at** | **datetime** |  | 

## Example

```python
from ksapi.models.data_source_table_response import DataSourceTableResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DataSourceTableResponse from a JSON string
data_source_table_response_instance = DataSourceTableResponse.from_json(json)
# print the JSON string representation of the object
print(DataSourceTableResponse.to_json())

# convert the object into a dict
data_source_table_response_dict = data_source_table_response_instance.to_dict()
# create an instance of DataSourceTableResponse from a dict
data_source_table_response_from_dict = DataSourceTableResponse.from_dict(data_source_table_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


