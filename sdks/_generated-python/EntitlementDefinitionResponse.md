# EntitlementDefinitionResponse

An entitlement a plan can grant.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **UUID** | Refer to the entitlement by this id. | 
**key** | [**EntitlementKey**](EntitlementKey.md) |  | 
**kind** | [**EntitlementKind**](EntitlementKind.md) |  | 
**display_name** | **str** |  | 

## Example

```python
from ksapi.models.entitlement_definition_response import EntitlementDefinitionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of EntitlementDefinitionResponse from a JSON string
entitlement_definition_response_instance = EntitlementDefinitionResponse.from_json(json)
# print the JSON string representation of the object
print(EntitlementDefinitionResponse.to_json())

# convert the object into a dict
entitlement_definition_response_dict = entitlement_definition_response_instance.to_dict()
# create an instance of EntitlementDefinitionResponse from a dict
entitlement_definition_response_from_dict = EntitlementDefinitionResponse.from_dict(entitlement_definition_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


