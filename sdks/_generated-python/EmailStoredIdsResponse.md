# EmailStoredIdsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stored** | **List[str]** | The subset already stored, unordered | 

## Example

```python
from ksapi.models.email_stored_ids_response import EmailStoredIdsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of EmailStoredIdsResponse from a JSON string
email_stored_ids_response_instance = EmailStoredIdsResponse.from_json(json)
# print the JSON string representation of the object
print(EmailStoredIdsResponse.to_json())

# convert the object into a dict
email_stored_ids_response_dict = email_stored_ids_response_instance.to_dict()
# create an instance of EmailStoredIdsResponse from a dict
email_stored_ids_response_from_dict = EmailStoredIdsResponse.from_dict(email_stored_ids_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


