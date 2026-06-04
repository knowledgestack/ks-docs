# Args


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------

## Example

```python
from ksapi.models.args import Args

# TODO update the JSON string below
json = "{}"
# create an instance of Args from a JSON string
args_instance = Args.from_json(json)
# print the JSON string representation of the object
print(Args.to_json())

# convert the object into a dict
args_dict = args_instance.to_dict()
# create an instance of Args from a dict
args_from_dict = Args.from_dict(args_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


