# YidingConfig

What a customer supplies for a YiDing sync: the summary plus the secret.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**username** | **str** | The account the crawler signs in to the panel as | 
**business_id** | **str** | The panel&#39;s own id for the shop. Only the customer list is scoped by it — orders follow the logged-in account — but it answers a wrong one with a 500, so an empty value fails the crawl, not just that page. | 
**start_date** | **date** | First dining day to sync; earlier orders are not fetched | 
**cron** | **str** | Crawl recurrence, in the tenant&#39;s timezone | 
**base_url** | **str** | Root of the YiDing admin panel the crawler signs in to | [optional] [default to 'https://admin.zhidianfan.com/seller_resv_sys']
**password** | **str** | Write-only: the settings panel never reads it back | 

## Example

```python
from ksapi.models.yiding_config import YidingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of YidingConfig from a JSON string
yiding_config_instance = YidingConfig.from_json(json)
# print the JSON string representation of the object
print(YidingConfig.to_json())

# convert the object into a dict
yiding_config_dict = yiding_config_instance.to_dict()
# create an instance of YidingConfig from a dict
yiding_config_from_dict = YidingConfig.from_dict(yiding_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


