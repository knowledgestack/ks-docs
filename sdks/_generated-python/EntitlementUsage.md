# EntitlementUsage

Units used and the cap they count against.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**used** | **int** |  | 
**limit** | **int** |  | 

## Example

```python
from ksapi.models.entitlement_usage import EntitlementUsage

# TODO update the JSON string below
json = "{}"
# create an instance of EntitlementUsage from a JSON string
entitlement_usage_instance = EntitlementUsage.from_json(json)
# print the JSON string representation of the object
print(EntitlementUsage.to_json())

# convert the object into a dict
entitlement_usage_dict = entitlement_usage_instance.to_dict()
# create an instance of EntitlementUsage from a dict
entitlement_usage_from_dict = EntitlementUsage.from_dict(entitlement_usage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


