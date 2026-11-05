# UnfinishedMail

One mail a run saw and did not finish, and how often it has been tried.  Kept because the walk cannot find it again on its own. A folder is walked by delta, and a delta returns what *changed* — so a mail that failed is not listed again unless something about it changes at the source, which for a mail nobody touches never happens. The bookmark is still saved, and this is what makes that safe: without it the only way not to lose the mail would be to withhold the bookmark, which would re-walk the whole folder on every run for ever once a single mail went permanently bad.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **str** | What went wrong, in the words the attempt produced | 
**attempts** | **int** | How many runs have tried it | [optional] [default to 1]

## Example

```python
from ksapi.models.unfinished_mail import UnfinishedMail

# TODO update the JSON string below
json = "{}"
# create an instance of UnfinishedMail from a JSON string
unfinished_mail_instance = UnfinishedMail.from_json(json)
# print the JSON string representation of the object
print(UnfinishedMail.to_json())

# convert the object into a dict
unfinished_mail_dict = unfinished_mail_instance.to_dict()
# create an instance of UnfinishedMail from a dict
unfinished_mail_from_dict = UnfinishedMail.from_dict(unfinished_mail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


