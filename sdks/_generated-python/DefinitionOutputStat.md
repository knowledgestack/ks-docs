# DefinitionOutputStat

Average output-document count for one workflow definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**definition_id** | **UUID** |  | 
**name** | **str** |  | 
**completed_runs** | **int** | COMPLETED runs in the window. | 
**avg_documents** | **float** | Mean output DOCUMENTs generated per completed run. | 

## Example

```python
from ksapi.models.definition_output_stat import DefinitionOutputStat

# TODO update the JSON string below
json = "{}"
# create an instance of DefinitionOutputStat from a JSON string
definition_output_stat_instance = DefinitionOutputStat.from_json(json)
# print the JSON string representation of the object
print(DefinitionOutputStat.to_json())

# convert the object into a dict
definition_output_stat_dict = definition_output_stat_instance.to_dict()
# create an instance of DefinitionOutputStat from a dict
definition_output_stat_from_dict = DefinitionOutputStat.from_dict(definition_output_stat_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


