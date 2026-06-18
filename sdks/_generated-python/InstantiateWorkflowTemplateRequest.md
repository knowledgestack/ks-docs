# InstantiateWorkflowTemplateRequest

Create a runnable workflow by copying a source definition.  The source may be a template (the curated case) or any other workflow.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parent_path_part_id** | **UUID** | FOLDER path_part to create the new workflow under; the caller needs write access to it. | 
**name** | **str** | Name for the new workflow; defaults to the source&#39;s name. | [optional] 

## Example

```python
from ksapi.models.instantiate_workflow_template_request import InstantiateWorkflowTemplateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of InstantiateWorkflowTemplateRequest from a JSON string
instantiate_workflow_template_request_instance = InstantiateWorkflowTemplateRequest.from_json(json)
# print the JSON string representation of the object
print(InstantiateWorkflowTemplateRequest.to_json())

# convert the object into a dict
instantiate_workflow_template_request_dict = instantiate_workflow_template_request_instance.to_dict()
# create an instance of InstantiateWorkflowTemplateRequest from a dict
instantiate_workflow_template_request_from_dict = InstantiateWorkflowTemplateRequest.from_dict(instantiate_workflow_template_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


