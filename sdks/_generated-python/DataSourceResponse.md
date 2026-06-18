# DataSourceResponse

Connector response; a discriminated-union variant for folder listings.  The ``connection_config`` (host/port/credentials) is intentionally omitted — the password is write-only and never serialized back.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**part_type** | **str** | Path part type | [optional] [default to 'DATA_SOURCE']
**id** | **UUID** |  | 
**path_part_id** | **UUID** | DATA_SOURCE path_part of this connector | 
**parent_path_part_id** | **UUID** | path_part of the containing folder | 
**materialized_path** | **str** | Full materialized path from root | 
**tenant_id** | **UUID** |  | 
**name** | **str** |  | 
**engine** | [**DataSourceEngine**](DataSourceEngine.md) |  | 
**approval_state** | [**PathPartApprovalState**](PathPartApprovalState.md) |  | 
**owner** | [**UserInfo**](UserInfo.md) | Current owner (creator) of the connector, or null if unowned. | [optional] 
**created_at** | **datetime** |  | 
**updated_at** | **datetime** |  | 

## Example

```python
from ksapi.models.data_source_response import DataSourceResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DataSourceResponse from a JSON string
data_source_response_instance = DataSourceResponse.from_json(json)
# print the JSON string representation of the object
print(DataSourceResponse.to_json())

# convert the object into a dict
data_source_response_dict = data_source_response_instance.to_dict()
# create an instance of DataSourceResponse from a dict
data_source_response_from_dict = DataSourceResponse.from_dict(data_source_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


