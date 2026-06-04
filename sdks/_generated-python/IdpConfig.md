# IdpConfig

Polymorphic IdP configuration for a tenant.  Stored as JSONB in tenant.idp_config. The ``provider`` field determines which typed config class to use when parsing ``configuration``.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provider** | [**SupportedIdP**](SupportedIdP.md) |  | 
**configuration** | **Dict[str, object]** | Provider-specific configuration | 

## Example

```python
from ksapi.models.idp_config import IdpConfig

# TODO update the JSON string below
json = "{}"
# create an instance of IdpConfig from a JSON string
idp_config_instance = IdpConfig.from_json(json)
# print the JSON string representation of the object
print(IdpConfig.to_json())

# convert the object into a dict
idp_config_dict = idp_config_instance.to_dict()
# create an instance of IdpConfig from a dict
idp_config_from_dict = IdpConfig.from_dict(idp_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


