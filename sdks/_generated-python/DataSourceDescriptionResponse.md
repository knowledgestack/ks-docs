# DataSourceDescriptionResponse

Result of (re)generating a connector's searchable description Document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_source_id** | **UUID** |  | 
**description_document_id** | **UUID** | PDO id of the generated, ingested &#39;Database overview&#39; doc | 

## Example

```python
from ksapi.models.data_source_description_response import DataSourceDescriptionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DataSourceDescriptionResponse from a JSON string
data_source_description_response_instance = DataSourceDescriptionResponse.from_json(json)
# print the JSON string representation of the object
print(DataSourceDescriptionResponse.to_json())

# convert the object into a dict
data_source_description_response_dict = data_source_description_response_instance.to_dict()
# create an instance of DataSourceDescriptionResponse from a dict
data_source_description_response_from_dict = DataSourceDescriptionResponse.from_dict(data_source_description_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


