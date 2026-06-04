# PaginatedResponseAnnotatedUnionFolderResponseDocumentResponseWorkflowDefinitionResponseWorkflowRunResponseDiscriminator


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[FolderResponseOrDocumentResponseOrWorkflowDefinitionResponseOrWorkflowRunResponse]**](FolderResponseOrDocumentResponseOrWorkflowDefinitionResponseOrWorkflowRunResponse.md) | List of items | 
**total** | **int** | Total number of items | 
**limit** | **int** | Number of items per page | 
**offset** | **int** | Number of items to skip | 

## Example

```python
from ksapi.models.paginated_response_annotated_union_folder_response_document_response_workflow_definition_response_workflow_run_response_discriminator import PaginatedResponseAnnotatedUnionFolderResponseDocumentResponseWorkflowDefinitionResponseWorkflowRunResponseDiscriminator

# TODO update the JSON string below
json = "{}"
# create an instance of PaginatedResponseAnnotatedUnionFolderResponseDocumentResponseWorkflowDefinitionResponseWorkflowRunResponseDiscriminator from a JSON string
paginated_response_annotated_union_folder_response_document_response_workflow_definition_response_workflow_run_response_discriminator_instance = PaginatedResponseAnnotatedUnionFolderResponseDocumentResponseWorkflowDefinitionResponseWorkflowRunResponseDiscriminator.from_json(json)
# print the JSON string representation of the object
print(PaginatedResponseAnnotatedUnionFolderResponseDocumentResponseWorkflowDefinitionResponseWorkflowRunResponseDiscriminator.to_json())

# convert the object into a dict
paginated_response_annotated_union_folder_response_document_response_workflow_definition_response_workflow_run_response_discriminator_dict = paginated_response_annotated_union_folder_response_document_response_workflow_definition_response_workflow_run_response_discriminator_instance.to_dict()
# create an instance of PaginatedResponseAnnotatedUnionFolderResponseDocumentResponseWorkflowDefinitionResponseWorkflowRunResponseDiscriminator from a dict
paginated_response_annotated_union_folder_response_document_response_workflow_definition_response_workflow_run_response_discriminator_from_dict = PaginatedResponseAnnotatedUnionFolderResponseDocumentResponseWorkflowDefinitionResponseWorkflowRunResponseDiscriminator.from_dict(paginated_response_annotated_union_folder_response_document_response_workflow_definition_response_workflow_run_response_discriminator_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


