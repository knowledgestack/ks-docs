# EmailUnfinishedRequest

What one folder's pass could not finish, replacing that folder's ledger.  Per folder and whole rather than merged per id, because the pass that writes it just finished walking that folder and therefore knows the entire answer for it: anything it managed this time is gone from the map it sends. The other folders' entries are left alone, which is safe because a run walks its folders one at a time.  Carries no tenant or connector id, for the same reason as ``EmailDeltaLinkRequest``: both come from the request's own identity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**folder** | **str** |  | 
**unfinished** | [**Dict[str, UnfinishedMail]**](UnfinishedMail.md) | By the source&#39;s own message id. Capped like the diff: a folder whose every mail fails is a broken connector, not a queue. | 

## Example

```python
from ksapi.models.email_unfinished_request import EmailUnfinishedRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EmailUnfinishedRequest from a JSON string
email_unfinished_request_instance = EmailUnfinishedRequest.from_json(json)
# print the JSON string representation of the object
print(EmailUnfinishedRequest.to_json())

# convert the object into a dict
email_unfinished_request_dict = email_unfinished_request_instance.to_dict()
# create an instance of EmailUnfinishedRequest from a dict
email_unfinished_request_from_dict = EmailUnfinishedRequest.from_dict(email_unfinished_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


