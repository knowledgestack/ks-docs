# YidingConfigChange


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cron** | **str** | Crawl recurrence, in the tenant&#39;s timezone | [optional] 
**password** | **str** | Write-only: omit it to keep the stored one | [optional] 

## Example

```python
from ksapi.models.yiding_config_change import YidingConfigChange

# TODO update the JSON string below
json = "{}"
# create an instance of YidingConfigChange from a JSON string
yiding_config_change_instance = YidingConfigChange.from_json(json)
# print the JSON string representation of the object
print(YidingConfigChange.to_json())

# convert the object into a dict
yiding_config_change_dict = yiding_config_change_instance.to_dict()
# create an instance of YidingConfigChange from a dict
yiding_config_change_from_dict = YidingConfigChange.from_dict(yiding_config_change_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


