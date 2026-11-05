# EmailConfigSummary

A mailbox connector's stored sync config, as the UI reads it.  Not the request schema read back: the stored config also holds the folder list the server picked, which the request deliberately does not take, and ``extra=\"forbid\"`` would refuse it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**folders** | **Dict[str, str]** | Which folders this connector mirrors, as {well-known name: what addresses it at the provider}. Others are skipped. The names are what a reader filters mail by (&#x60;&#x60;external_source_folder&#x60;&#x60;); the values are the provider&#39;s own folder ids, read off it at consent | 

## Example

```python
from ksapi.models.email_config_summary import EmailConfigSummary

# TODO update the JSON string below
json = "{}"
# create an instance of EmailConfigSummary from a JSON string
email_config_summary_instance = EmailConfigSummary.from_json(json)
# print the JSON string representation of the object
print(EmailConfigSummary.to_json())

# convert the object into a dict
email_config_summary_dict = email_config_summary_instance.to_dict()
# create an instance of EmailConfigSummary from a dict
email_config_summary_from_dict = EmailConfigSummary.from_dict(email_config_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


