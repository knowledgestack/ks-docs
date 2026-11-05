# EmailSyncProgress

When a mailbox connector last reported in.  What a UI has to say while a first sync is still walking the mailbox. Derived from the connector row alone, so a folder listing that returns many connectors costs no extra query per row.  ``sync_status`` says whether the connector is healthy; this says whether it is still moving. The two are read together: ACTIVE with nothing reported in yet is a mailbox being walked for the first time, not a mailbox that is ready.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_sync_finished_at** | **datetime** | When the last run reported in, successful or not | [optional] 

## Example

```python
from ksapi.models.email_sync_progress import EmailSyncProgress

# TODO update the JSON string below
json = "{}"
# create an instance of EmailSyncProgress from a JSON string
email_sync_progress_instance = EmailSyncProgress.from_json(json)
# print the JSON string representation of the object
print(EmailSyncProgress.to_json())

# convert the object into a dict
email_sync_progress_dict = email_sync_progress_instance.to_dict()
# create an instance of EmailSyncProgress from a dict
email_sync_progress_from_dict = EmailSyncProgress.from_dict(email_sync_progress_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


