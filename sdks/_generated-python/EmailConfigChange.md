# EmailConfigChange

What a mailbox connector's config may still change: how often it runs.  Not the mailbox: pointing an existing connector at another address would leave the first mailbox's mail under a connector that now claims to be the second one's, and the stored grant would not refresh for it anyway. A second mailbox is a second connector.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cron** | **str** | Crawl recurrence; omit to keep the stored one | [optional] 

## Example

```python
from ksapi.models.email_config_change import EmailConfigChange

# TODO update the JSON string below
json = "{}"
# create an instance of EmailConfigChange from a JSON string
email_config_change_instance = EmailConfigChange.from_json(json)
# print the JSON string representation of the object
print(EmailConfigChange.to_json())

# convert the object into a dict
email_config_change_dict = email_config_change_instance.to_dict()
# create an instance of EmailConfigChange from a dict
email_config_change_from_dict = EmailConfigChange.from_dict(email_config_change_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


