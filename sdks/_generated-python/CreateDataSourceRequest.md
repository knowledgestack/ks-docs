# CreateDataSourceRequest

Create a connector under a folder the caller can write to.  ``name`` is the one thing a mailbox does not take: it is named after the address it syncs, because a second name for it would only ever disagree with the mailbox. Where it goes is still the caller's, as it is for every other connector — the folder a connector hangs in is what decides who can read what hangs under it, so a personal mailbox and an organization's belong in different places.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | What to call this connector. Required. On a mailbox it is a label of the caller&#39;s choosing — the address itself is read back from the consent and reported separately. | [optional] 
**parent_path_part_id** | **UUID** |  | 
**source_type** | [**SourceType**](SourceType.md) |  | [optional] 
**engine** | [**DataSourceEngine**](DataSourceEngine.md) |  | [optional] 
**connection_config** | [**ConnectionConfig**](ConnectionConfig.md) |  | [optional] 
**source_config** | [**YidingConfig**](YidingConfig.md) |  | [optional] 
**mail_credential_id** | **UUID** | On EMAIL, **required**: the registration this mailbox will consent against, chosen from &#x60;&#x60;GET /v1/mail-credentials&#x60;&#x60;. Only OWNER/ADMIN can put one there, which is the point — creating a connector needs folder write, and that is not enough to be handed a client secret. Set at creation and never changed: the stored grant is a refresh token issued to one client, so repointing it would leave a mailbox that can never refresh | [optional] 
**email_config** | [**EmailSyncConfig**](EmailSyncConfig.md) | Optional on EMAIL, refused otherwise. Only carries the recurrence, which has a default. | [optional] 

## Example

```python
from ksapi.models.create_data_source_request import CreateDataSourceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateDataSourceRequest from a JSON string
create_data_source_request_instance = CreateDataSourceRequest.from_json(json)
# print the JSON string representation of the object
print(CreateDataSourceRequest.to_json())

# convert the object into a dict
create_data_source_request_dict = create_data_source_request_instance.to_dict()
# create an instance of CreateDataSourceRequest from a dict
create_data_source_request_from_dict = CreateDataSourceRequest.from_dict(create_data_source_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


