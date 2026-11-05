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
**engine** | [**DataSourceEngine**](DataSourceEngine.md) |  | [optional] 
**source_type** | [**SourceType**](SourceType.md) |  | 
**connection_summary** | [**ConnectionSummary**](ConnectionSummary.md) | Where the connector points, without the password. Null on a YIDINGSYNC connector until provisioning has built its database, so polling this is how the UI learns the sync is ready. | [optional] 
**source_config** | [**SourceConfigSummary**](SourceConfigSummary.md) | A YIDINGSYNC connector&#39;s crawler config without the password: which shop, from when, and the crawl recurrence. Null on DIRECT and on EMAIL, which reports through email_config. | [optional] 
**email_config** | [**EmailConfigSummary**](EmailConfigSummary.md) | An EMAIL connector&#39;s folder list and cron; null otherwise | [optional] 
**mailbox_address** | **str** | The mailbox an EMAIL connector syncs; null otherwise, and null on a mailbox connector until its first consent lands, because the address is read out of the id token rather than typed. From then on it is fixed: a later sign-in as another account is refused rather than stored, so this is the mailbox whose mail is in the tree. The connector&#39;s own &#x60;&#x60;name&#x60;&#x60; is a separate label of the caller&#39;s choosing; show both. | [optional] 
**mail_credential** | [**MailCredentialOption**](MailCredentialOption.md) | The app registration this mailbox authenticates with; null on a connector that is not a mailbox. Name and provider only: the ids are the admin&#39;s business and the secret is nobody&#39;s | [optional] 
**email_progress** | [**EmailSyncProgress**](EmailSyncProgress.md) | When an EMAIL connector last reported in; null otherwise. Read with sync_status, which says whether it is healthy rather than whether it is still moving. | [optional] 
**sync_status** | [**ConnectorSyncStatus**](ConnectorSyncStatus.md) |  | 
**sync_cron** | **str** | How often this connector is crawled, as a cron expression in the tenant&#39;s timezone. Absent on a source nothing crawls. | [optional] 
**last_sync_error** | **str** | Why the last crawl ended badly | [optional] 
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


