# DataSourceSchemaResponse

A schema PDO under a connector, with the readable tables it contains.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**part_type** | **str** | Path part type | [optional] [default to 'DATA_SOURCE_SCHEMA']
**id** | **UUID** |  | 
**path_part_id** | **UUID** | DATA_SOURCE_SCHEMA path_part of this schema | 
**parent_path_part_id** | **UUID** | DATA_SOURCE path_part of the parent connector | 
**materialized_path** | **str** | Full materialized path from root | 
**tenant_id** | **UUID** |  | 
**name** | **str** |  | 
**data_source_id** | **UUID** |  | 
**schema_name** | **str** | Real namespace in the external DB | 
**is_default** | **bool** | True for the connection&#39;s default namespace | 
**description** | **str** |  | 
**approval_state** | [**PathPartApprovalState**](PathPartApprovalState.md) |  | 
**permissions** | [**ItemPermissions**](ItemPermissions.md) |  | 
**created_at** | **datetime** |  | 
**updated_at** | **datetime** |  | 
**tables** | [**List[DataSourceTableResponse]**](DataSourceTableResponse.md) | Readable modeled tables in this schema | [optional] 

## Example

```python
from ksapi.models.data_source_schema_response import DataSourceSchemaResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DataSourceSchemaResponse from a JSON string
data_source_schema_response_instance = DataSourceSchemaResponse.from_json(json)
# print the JSON string representation of the object
print(DataSourceSchemaResponse.to_json())

# convert the object into a dict
data_source_schema_response_dict = data_source_schema_response_instance.to_dict()
# create an instance of DataSourceSchemaResponse from a dict
data_source_schema_response_from_dict = DataSourceSchemaResponse.from_dict(data_source_schema_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


