# DataSourceResponse

Connector response; a discriminated-union variant for folder listings.  The stored ``connection_config`` is never returned whole: the password is write-only and never serialized back. What it points at travels in ``connection_summary`` instead, which a YIDINGSYNC connector needs — the server generated those credentials, so this is the only place its owner ever sees which database the sync built.

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
**source_type** | [**SourceType**](SourceType.md) |  | 
**connection_summary** | [**ConnectionSummary**](ConnectionSummary.md) | Where the connector points, without the password. Null on a YIDINGSYNC connector until provisioning has built its database, so polling this is how the UI learns the sync is ready. | [optional] 
**source_config** | [**SourceConfigSummary**](SourceConfigSummary.md) | A YIDINGSYNC connector&#39;s crawler config without the password: which shop, from when, and the crawl recurrence. Null on DIRECT. | [optional] 
**approval_state** | [**PathPartApprovalState**](PathPartApprovalState.md) |  | 
**owner** | [**UserInfo**](UserInfo.md) | Current owner (creator) of the connector, or null if unowned. | [optional] 
**permissions** | [**ItemPermissions**](ItemPermissions.md) |  | 
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


