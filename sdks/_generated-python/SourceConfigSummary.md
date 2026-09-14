# SourceConfigSummary

A YIDINGSYNC connector's stored config, with the password left out.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**username** | **str** | The account the crawler signs in to the panel as | 
**business_id** | **str** | The panel&#39;s own id for the shop. Only the customer list is scoped by it — orders follow the logged-in account — but it answers a wrong one with a 500, so an empty value fails the crawl, not just that page. | 
**start_date** | **date** | First dining day to sync; earlier orders are not fetched | 
**cron** | **str** | Crawl recurrence, in the tenant&#39;s timezone | 
**base_url** | **str** | Root of the YiDing admin panel the crawler signs in to | [optional] [default to 'https://admin.zhidianfan.com/seller_resv_sys']

## Example

```python
from ksapi.models.source_config_summary import SourceConfigSummary

# TODO update the JSON string below
json = "{}"
# create an instance of SourceConfigSummary from a JSON string
source_config_summary_instance = SourceConfigSummary.from_json(json)
# print the JSON string representation of the object
print(SourceConfigSummary.to_json())

# convert the object into a dict
source_config_summary_dict = source_config_summary_instance.to_dict()
# create an instance of SourceConfigSummary from a dict
source_config_summary_from_dict = SourceConfigSummary.from_dict(source_config_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


