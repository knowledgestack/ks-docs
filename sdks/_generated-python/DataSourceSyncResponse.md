# DataSourceSyncResponse

Result of reconciling modeled tables against the live external catalog.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_source_id** | **UUID** |  | 
**updated** | **int** | Tables whose columns changed → column_config + summary refreshed | 
**unchanged** | **int** | Tables still present with no schema change | 
**deleted** | **int** | Tables dropped externally → soft-deleted + embedding purged | 

## Example

```python
from ksapi.models.data_source_sync_response import DataSourceSyncResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DataSourceSyncResponse from a JSON string
data_source_sync_response_instance = DataSourceSyncResponse.from_json(json)
# print the JSON string representation of the object
print(DataSourceSyncResponse.to_json())

# convert the object into a dict
data_source_sync_response_dict = data_source_sync_response_instance.to_dict()
# create an instance of DataSourceSyncResponse from a dict
data_source_sync_response_from_dict = DataSourceSyncResponse.from_dict(data_source_sync_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


