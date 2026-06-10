# DataSourcesApi

All URIs are relative to *http://localhost:8000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createDataSource**](DataSourcesApi.md#createdatasourceoperation) | **POST** /v1/data-sources | Create Data Source Handler |
| [**getDataSource**](DataSourcesApi.md#getdatasource) | **GET** /v1/data-sources/{data_source_id} | Get Data Source Handler |
| [**getDataSourceCatalog**](DataSourcesApi.md#getdatasourcecatalog) | **GET** /v1/data-sources/{data_source_id}/catalog | Get Data Source Catalog Handler |
| [**modelDataSourceTable**](DataSourcesApi.md#modeldatasourcetable) | **POST** /v1/data-sources/{data_source_id}/tables | Model Data Source Table Handler |
| [**queryDataSource**](DataSourcesApi.md#querydatasource) | **POST** /v1/data-sources/{data_source_id}/query | Query Data Source Handler |
| [**testDataSourceConnection**](DataSourcesApi.md#testdatasourceconnection) | **POST** /v1/data-sources/{data_source_id}/test | Test Data Source Connection Handler |
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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDataSourceCatalog

> DataSourceCatalogResponse getDataSourceCatalog(dataSourceId)

Get Data Source Catalog Handler

Live-introspect the external DB so an admin can pick tables to model.

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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## modelDataSourceTable

> DataSourceTableResponse modelDataSourceTable(dataSourceId, modelTableRequest)

Model Data Source Table Handler

Model a table as a queryable PathPart child; auto-introspect columns.

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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

