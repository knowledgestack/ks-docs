# RevisionEdit

One tracked (un-accepted) change in a paragraph — the redline evidence.  ``type`` is ``added`` for an insertion (``w:ins``) and ``removed`` for a deletion (``w:del``). ``author``/``date`` are the proposer and timestamp the editor recorded (may be null). A block carries these so an auditor sees who proposed what, and so finalizing a pending change is never invisible.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**BlockChangeType**](BlockChangeType.md) |  | 
**author** | **str** |  | 
**var_date** | **str** |  | 
**text** | **str** |  | 

## Example

```python
from ksapi.models.revision_edit import RevisionEdit

# TODO update the JSON string below
json = "{}"
# create an instance of RevisionEdit from a JSON string
revision_edit_instance = RevisionEdit.from_json(json)
# print the JSON string representation of the object
print(RevisionEdit.to_json())

# convert the object into a dict
revision_edit_dict = revision_edit_instance.to_dict()
# create an instance of RevisionEdit from a dict
revision_edit_from_dict = RevisionEdit.from_dict(revision_edit_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


