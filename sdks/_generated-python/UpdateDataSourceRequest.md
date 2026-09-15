# UpdateDataSourceRequest

Rename, move, and/or re-credential a connector (PATCH). All optional.  A body with every field ``None`` is rejected as a no-op 400. ``name`` renames the connector path_part; ``parent_path_part_id`` moves it under a new FOLDER (the move cascades ``materialized_path`` to the modeled-table children). ``connection_config`` supplies a full, fresh credential set (never a partial patch — the stored password is never read back or echoed); it is re-validated before persisting. ``engine`` stays immutable: changing it would invalidate every modeled table's dialect assumptions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**parent_path_part_id** | **UUID** | New parent FOLDER path_part to move the connector under. | [optional] 
**connection_config** | [**ConnectionConfig**](ConnectionConfig.md) | Fresh, whole-object credentials to replace the stored ones. | [optional] 
**source_config** | [**YidingConfigChange**](YidingConfigChange.md) | What a YIDINGSYNC connector&#39;s crawler config may still change: the panel password and the crawl recurrence, each optional and each merged into the stored config rather than replacing it. Which shop and from when are fixed at creation. Rejected on a DIRECT connector. Changing &#x60;&#x60;cron&#x60;&#x60; re-arms the schedule. connection_config stays server-managed for YIDINGSYNC. | [optional] 
**sync_state** | [**YidingCursor**](YidingCursor.md) | The crawl cursor, replaced whole. Written by the sync itself (the worker acts as the connector&#39;s owner) after each batch, so it records what has already been read. Moving it forward by hand makes the next run skip those days for good — the increment only re-scans what the cursor points at. | [optional] 

## Example

```python
from ksapi.models.update_data_source_request import UpdateDataSourceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDataSourceRequest from a JSON string
update_data_source_request_instance = UpdateDataSourceRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateDataSourceRequest.to_json())

# convert the object into a dict
update_data_source_request_dict = update_data_source_request_instance.to_dict()
# create an instance of UpdateDataSourceRequest from a dict
update_data_source_request_from_dict = UpdateDataSourceRequest.from_dict(update_data_source_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


