# DataSourcesApi

All URIs are relative to *http://localhost:8000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createDataSource**](DataSourcesApi.md#createdatasourceoperation) | **POST** /v1/data-sources | Create Data Source Handler |
| [**deleteDataSource**](DataSourcesApi.md#deletedatasource) | **DELETE** /v1/data-sources/{data_source_id} | Delete Data Source Handler |
| [**deleteDataSourceSchema**](DataSourcesApi.md#deletedatasourceschema) | **DELETE** /v1/data-sources/{data_source_id}/schemas/{schema_id} | Delete Data Source Schema Handler |
| [**deleteDataSourceTable**](DataSourcesApi.md#deletedatasourcetable) | **DELETE** /v1/data-sources/{data_source_id}/tables/{table_id} | Delete Data Source Table Handler |
| [**generateDataSourceDescription**](DataSourcesApi.md#generatedatasourcedescription) | **POST** /v1/data-sources/{data_source_id}/describe | Generate Data Source Description Handler |
| [**getDataSource**](DataSourcesApi.md#getdatasource) | **GET** /v1/data-sources/{data_source_id} | Get Data Source Handler |
| [**getDataSourceCatalog**](DataSourcesApi.md#getdatasourcecatalog) | **GET** /v1/data-sources/{data_source_id}/catalog | Get Data Source Catalog Handler |
| [**listDataSourceSchemas**](DataSourcesApi.md#listdatasourceschemas) | **GET** /v1/data-sources/{data_source_id}/schemas | List Data Source Schemas Handler |
| [**modelDataSourceTable**](DataSourcesApi.md#modeldatasourcetable) | **POST** /v1/data-sources/{data_source_id}/tables | Model Data Source Table Handler |
| [**modelDataSourceTables**](DataSourcesApi.md#modeldatasourcetables) | **POST** /v1/data-sources/{data_source_id}/tables/batch | Model Data Source Tables Handler |
| [**queryDataSource**](DataSourcesApi.md#querydatasource) | **POST** /v1/data-sources/{data_source_id}/query | Query Data Source Handler |
| [**testDataSourceConnection**](DataSourcesApi.md#testdatasourceconnection) | **POST** /v1/data-sources/{data_source_id}/test | Test Data Source Connection Handler |
| [**updateDataSource**](DataSourcesApi.md#updatedatasourceoperation) | **PATCH** /v1/data-sources/{data_source_id} | Update Data Source Handler |
| [**updateDataSourceTable**](DataSourcesApi.md#updatedatasourcetable) | **PATCH** /v1/data-sources/{data_source_id}/tables/{table_id} | Update Data Source Table Handler |



## createDataSource

> DataSourceResponse createDataSource(createDataSourceRequest)

Create Data Source Handler

Create a connector under a writable folder; test the connection first.

### Example

```ts
import {
  Configuration,
  DataSourcesApi,
} from '@knowledge-stack/ksapi';
import type { CreateDataSourceOperationRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DataSourcesApi(config);

  const body = {
    // CreateDataSourceRequest
    createDataSourceRequest: ...,
  } satisfies CreateDataSourceOperationRequest;

  try {
    const data = await api.createDataSource(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **createDataSourceRequest** | [CreateDataSourceRequest](CreateDataSourceRequest.md) |  | |

### Return type

[**DataSourceResponse**](DataSourceResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Successful Response |  -  |
| **422** | Validation Error |  -  |
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteDataSource

> deleteDataSource(dataSourceId)

Delete Data Source Handler

Move a connector and its schemas/tables to trash.  Soft-delete via the path_part subtree (schemas + tables are children, so they trash with it). The connector\&#39;s generated &#x60;&#x60;.overview&#x60;&#x60; description Document IS ingested, so its Qdrant points are flipped to trashed via the set-trashed workflow (best-effort, mirrors the document delete path).

### Example

```ts
import {
  Configuration,
  DataSourcesApi,
} from '@knowledge-stack/ksapi';
import type { DeleteDataSourceRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DataSourcesApi(config);

  const body = {
    // string
    dataSourceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteDataSourceRequest;

  try {
    const data = await api.deleteDataSource(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **dataSourceId** | `string` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Successful Response |  -  |
| **422** | Validation Error |  -  |
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteDataSourceSchema

> deleteDataSourceSchema(dataSourceId, schemaId)

Delete Data Source Schema Handler

Un-model a schema and the tables under it (hard-delete the namespace).

### Example

```ts
import {
  Configuration,
  DataSourcesApi,
} from '@knowledge-stack/ksapi';
import type { DeleteDataSourceSchemaRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DataSourcesApi(config);

  const body = {
    // string
    dataSourceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    schemaId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteDataSourceSchemaRequest;

  try {
    const data = await api.deleteDataSourceSchema(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **dataSourceId** | `string` |  | [Defaults to `undefined`] |
| **schemaId** | `string` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Successful Response |  -  |
| **422** | Validation Error |  -  |
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteDataSourceTable

> deleteDataSourceTable(dataSourceId, tableId)

Delete Data Source Table Handler

Un-model a single table (hard-delete it from its schema).

### Example

```ts
import {
  Configuration,
  DataSourcesApi,
} from '@knowledge-stack/ksapi';
import type { DeleteDataSourceTableRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DataSourcesApi(config);

  const body = {
    // string
    dataSourceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    tableId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteDataSourceTableRequest;

  try {
    const data = await api.deleteDataSourceTable(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **dataSourceId** | `string` |  | [Defaults to `undefined`] |
| **tableId** | `string` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Successful Response |  -  |
| **422** | Validation Error |  -  |
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## generateDataSourceDescription

> DataSourceDescriptionResponse generateDataSourceDescription(dataSourceId)

Generate Data Source Description Handler

(Re)generate the connector\&#39;s hidden, searchable \&#39;Database overview\&#39; Document.  Requires &#x60;&#x60;can_write&#x60;&#x60; on the connector. The structural overview is deterministic; an LLM prose summary is prepended best-effort. The document ingests through the normal pipeline so the agent\&#39;s semantic search finds it.

### Example

```ts
import {
  Configuration,
  DataSourcesApi,
} from '@knowledge-stack/ksapi';
import type { GenerateDataSourceDescriptionRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DataSourcesApi(config);

  const body = {
    // string
    dataSourceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GenerateDataSourceDescriptionRequest;

  try {
    const data = await api.generateDataSourceDescription(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **dataSourceId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**DataSourceDescriptionResponse**](DataSourceDescriptionResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDataSource

> DataSourceDetailResponse getDataSource(dataSourceId)

Get Data Source Handler

Describe a connector + the modeled tables the caller can read.

### Example

```ts
import {
  Configuration,
  DataSourcesApi,
} from '@knowledge-stack/ksapi';
import type { GetDataSourceRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DataSourcesApi(config);

  const body = {
    // string
    dataSourceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetDataSourceRequest;

  try {
    const data = await api.getDataSource(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **dataSourceId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**DataSourceDetailResponse**](DataSourceDetailResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDataSourceCatalog

> DataSourceCatalogResponse getDataSourceCatalog(dataSourceId, schema)

Get Data Source Catalog Handler

Live-introspect a schema of the external DB so an admin can pick tables.

### Example

```ts
import {
  Configuration,
  DataSourcesApi,
} from '@knowledge-stack/ksapi';
import type { GetDataSourceCatalogRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DataSourcesApi(config);

  const body = {
    // string
    dataSourceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Schema/namespace to introspect (default: connection default) (optional)
    schema: schema_example,
  } satisfies GetDataSourceCatalogRequest;

  try {
    const data = await api.getDataSourceCatalog(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **dataSourceId** | `string` |  | [Defaults to `undefined`] |
| **schema** | `string` | Schema/namespace to introspect (default: connection default) | [Optional] [Defaults to `undefined`] |

### Return type

[**DataSourceCatalogResponse**](DataSourceCatalogResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listDataSourceSchemas

> DataSourceSchemaListResponse listDataSourceSchemas(dataSourceId)

List Data Source Schemas Handler

List the source\&#39;s user namespaces (PG schemas / MySQL databases).

### Example

```ts
import {
  Configuration,
  DataSourcesApi,
} from '@knowledge-stack/ksapi';
import type { ListDataSourceSchemasRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DataSourcesApi(config);

  const body = {
    // string
    dataSourceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies ListDataSourceSchemasRequest;

  try {
    const data = await api.listDataSourceSchemas(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **dataSourceId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**DataSourceSchemaListResponse**](DataSourceSchemaListResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## modelDataSourceTable

> DataSourceTableResponse modelDataSourceTable(dataSourceId, modelTableRequest)

Model Data Source Table Handler

Model a table under its (auto-created) Schema PDO; auto-introspect columns.

### Example

```ts
import {
  Configuration,
  DataSourcesApi,
} from '@knowledge-stack/ksapi';
import type { ModelDataSourceTableRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DataSourcesApi(config);

  const body = {
    // string
    dataSourceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // ModelTableRequest
    modelTableRequest: ...,
  } satisfies ModelDataSourceTableRequest;

  try {
    const data = await api.modelDataSourceTable(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **dataSourceId** | `string` |  | [Defaults to `undefined`] |
| **modelTableRequest** | [ModelTableRequest](ModelTableRequest.md) |  | |

### Return type

[**DataSourceTableResponse**](DataSourceTableResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Successful Response |  -  |
| **422** | Validation Error |  -  |
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## modelDataSourceTables

> BulkModelTablesResponse modelDataSourceTables(dataSourceId, bulkModelTablesRequest)

Model Data Source Tables Handler

Import several tables across one or more schemas; per-item results.  Schemas are auto find-or-created. Duplicates are pre-checked against the already-modeled tables and earlier items in the same batch (so a conflict never triggers a failed INSERT, which would otherwise roll back the batch\&#39;s prior writes); introspection failures are reported per item. One bad item never aborts the batch.

### Example

```ts
import {
  Configuration,
  DataSourcesApi,
} from '@knowledge-stack/ksapi';
import type { ModelDataSourceTablesRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DataSourcesApi(config);

  const body = {
    // string
    dataSourceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // BulkModelTablesRequest
    bulkModelTablesRequest: ...,
  } satisfies ModelDataSourceTablesRequest;

  try {
    const data = await api.modelDataSourceTables(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **dataSourceId** | `string` |  | [Defaults to `undefined`] |
| **bulkModelTablesRequest** | [BulkModelTablesRequest](BulkModelTablesRequest.md) |  | |

### Return type

[**BulkModelTablesResponse**](BulkModelTablesResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Successful Response |  -  |
| **422** | Validation Error |  -  |
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## queryDataSource

> DataSourceQueryResponse queryDataSource(dataSourceId, dataSourceQueryRequest)

Query Data Source Handler

Run a read-only SQL query, gated by per-table path permissions.

### Example

```ts
import {
  Configuration,
  DataSourcesApi,
} from '@knowledge-stack/ksapi';
import type { QueryDataSourceRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DataSourcesApi(config);

  const body = {
    // string
    dataSourceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // DataSourceQueryRequest
    dataSourceQueryRequest: ...,
  } satisfies QueryDataSourceRequest;

  try {
    const data = await api.queryDataSource(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **dataSourceId** | `string` |  | [Defaults to `undefined`] |
| **dataSourceQueryRequest** | [DataSourceQueryRequest](DataSourceQueryRequest.md) |  | |

### Return type

[**DataSourceQueryResponse**](DataSourceQueryResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## testDataSourceConnection

> testDataSourceConnection(dataSourceId)

Test Data Source Connection Handler

Re-test a saved connector\&#39;s connection.

### Example

```ts
import {
  Configuration,
  DataSourcesApi,
} from '@knowledge-stack/ksapi';
import type { TestDataSourceConnectionRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DataSourcesApi(config);

  const body = {
    // string
    dataSourceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies TestDataSourceConnectionRequest;

  try {
    const data = await api.testDataSourceConnection(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **dataSourceId** | `string` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Successful Response |  -  |
| **422** | Validation Error |  -  |
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateDataSource

> DataSourceResponse updateDataSource(dataSourceId, updateDataSourceRequest)

Update Data Source Handler

Rename and/or move a connector.  Requires &#x60;&#x60;can_write&#x60;&#x60; on the connector (and on the destination folder for a move).

### Example

```ts
import {
  Configuration,
  DataSourcesApi,
} from '@knowledge-stack/ksapi';
import type { UpdateDataSourceOperationRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DataSourcesApi(config);

  const body = {
    // string
    dataSourceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateDataSourceRequest
    updateDataSourceRequest: ...,
  } satisfies UpdateDataSourceOperationRequest;

  try {
    const data = await api.updateDataSource(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **dataSourceId** | `string` |  | [Defaults to `undefined`] |
| **updateDataSourceRequest** | [UpdateDataSourceRequest](UpdateDataSourceRequest.md) |  | |

### Return type

[**DataSourceResponse**](DataSourceResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateDataSourceTable

> DataSourceTableResponse updateDataSourceTable(dataSourceId, tableId, updateTableRequest)

Update Data Source Table Handler

Field-modeling: update the table\&#39;s description / column allowlist.

### Example

```ts
import {
  Configuration,
  DataSourcesApi,
} from '@knowledge-stack/ksapi';
import type { UpdateDataSourceTableRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DataSourcesApi(config);

  const body = {
    // string
    dataSourceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    tableId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateTableRequest
    updateTableRequest: ...,
  } satisfies UpdateDataSourceTableRequest;

  try {
    const data = await api.updateDataSourceTable(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **dataSourceId** | `string` |  | [Defaults to `undefined`] |
| **tableId** | `string` |  | [Defaults to `undefined`] |
| **updateTableRequest** | [UpdateTableRequest](UpdateTableRequest.md) |  | |

### Return type

[**DataSourceTableResponse**](DataSourceTableResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

