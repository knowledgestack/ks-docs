# AdminWorkflowsApi

All URIs are relative to *http://localhost:8000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getAdminWorkflowByHour**](AdminWorkflowsApi.md#getadminworkflowbyhour) | **GET** /v1/admin/workflows/by-hour | Get Admin Workflow By Hour Handler |
| [**getAdminWorkflowLeaderboard**](AdminWorkflowsApi.md#getadminworkflowleaderboard) | **GET** /v1/admin/workflows/leaderboard | Get Admin Workflow Leaderboard Handler |
| [**getAdminWorkflowOutputStats**](AdminWorkflowsApi.md#getadminworkflowoutputstats) | **GET** /v1/admin/workflows/output-stats | Get Admin Workflow Output Stats Handler |
| [**getAdminWorkflowSummary**](AdminWorkflowsApi.md#getadminworkflowsummary) | **GET** /v1/admin/workflows/summary | Get Admin Workflow Summary Handler |
| [**getAdminWorkflowTimeseries**](AdminWorkflowsApi.md#getadminworkflowtimeseries) | **GET** /v1/admin/workflows/timeseries | Get Admin Workflow Timeseries Handler |



## getAdminWorkflowByHour

> HourHistogramResponse getAdminWorkflowByHour(timezone, definitionId, since, until)

Get Admin Workflow By Hour Handler

Runs per hour-of-day (0-23) in the resolved timezone.

### Example

```ts
import {
  Configuration,
  AdminWorkflowsApi,
} from '@knowledge-stack/ksapi';
import type { GetAdminWorkflowByHourRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AdminWorkflowsApi(config);

  const body = {
    // string | IANA tz override; defaults to tenant setting. (optional)
    timezone: timezone_example,
    // string | Scope to one workflow. (optional)
    definitionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // Date | Window start (inclusive). Defaults to 7 days ago. (optional)
    since: 2013-10-20T19:20:30+01:00,
    // Date | Window end (inclusive). (optional)
    until: 2013-10-20T19:20:30+01:00,
  } satisfies GetAdminWorkflowByHourRequest;

  try {
    const data = await api.getAdminWorkflowByHour(body);
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
| **timezone** | `string` | IANA tz override; defaults to tenant setting. | [Optional] [Defaults to `undefined`] |
| **definitionId** | `string` | Scope to one workflow. | [Optional] [Defaults to `undefined`] |
| **since** | `Date` | Window start (inclusive). Defaults to 7 days ago. | [Optional] [Defaults to `undefined`] |
| **until** | `Date` | Window end (inclusive). | [Optional] [Defaults to `undefined`] |

### Return type

[**HourHistogramResponse**](HourHistogramResponse.md)

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


## getAdminWorkflowLeaderboard

> WorkflowLeaderboardResponse getAdminWorkflowLeaderboard(limit, since, until)

Get Admin Workflow Leaderboard Handler

Top workflows and top run owners by run count.

### Example

```ts
import {
  Configuration,
  AdminWorkflowsApi,
} from '@knowledge-stack/ksapi';
import type { GetAdminWorkflowLeaderboardRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AdminWorkflowsApi(config);

  const body = {
    // number | Top-N per leaderboard. (optional)
    limit: 56,
    // Date | Window start (inclusive). Defaults to 7 days ago. (optional)
    since: 2013-10-20T19:20:30+01:00,
    // Date | Window end (inclusive). (optional)
    until: 2013-10-20T19:20:30+01:00,
  } satisfies GetAdminWorkflowLeaderboardRequest;

  try {
    const data = await api.getAdminWorkflowLeaderboard(body);
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
| **limit** | `number` | Top-N per leaderboard. | [Optional] [Defaults to `10`] |
| **since** | `Date` | Window start (inclusive). Defaults to 7 days ago. | [Optional] [Defaults to `undefined`] |
| **until** | `Date` | Window end (inclusive). | [Optional] [Defaults to `undefined`] |

### Return type

[**WorkflowLeaderboardResponse**](WorkflowLeaderboardResponse.md)

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


## getAdminWorkflowOutputStats

> WorkflowOutputStatsResponse getAdminWorkflowOutputStats(since, until)

Get Admin Workflow Output Stats Handler

Average output DOCUMENTs generated per workflow definition (completed runs).

### Example

```ts
import {
  Configuration,
  AdminWorkflowsApi,
} from '@knowledge-stack/ksapi';
import type { GetAdminWorkflowOutputStatsRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AdminWorkflowsApi(config);

  const body = {
    // Date | Window start (inclusive). Defaults to 7 days ago. (optional)
    since: 2013-10-20T19:20:30+01:00,
    // Date | Window end (inclusive). (optional)
    until: 2013-10-20T19:20:30+01:00,
  } satisfies GetAdminWorkflowOutputStatsRequest;

  try {
    const data = await api.getAdminWorkflowOutputStats(body);
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
| **since** | `Date` | Window start (inclusive). Defaults to 7 days ago. | [Optional] [Defaults to `undefined`] |
| **until** | `Date` | Window end (inclusive). | [Optional] [Defaults to `undefined`] |

### Return type

[**WorkflowOutputStatsResponse**](WorkflowOutputStatsResponse.md)

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


## getAdminWorkflowSummary

> WorkflowRunSummaryResponse getAdminWorkflowSummary(definitionId, since, until)

Get Admin Workflow Summary Handler

Tenant-wide run health: counts, failure rate, durations, approval backlog.

### Example

```ts
import {
  Configuration,
  AdminWorkflowsApi,
} from '@knowledge-stack/ksapi';
import type { GetAdminWorkflowSummaryRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AdminWorkflowsApi(config);

  const body = {
    // string | Scope all numbers to one workflow. (optional)
    definitionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // Date | Window start (inclusive). Defaults to 7 days ago. (optional)
    since: 2013-10-20T19:20:30+01:00,
    // Date | Window end (inclusive). (optional)
    until: 2013-10-20T19:20:30+01:00,
  } satisfies GetAdminWorkflowSummaryRequest;

  try {
    const data = await api.getAdminWorkflowSummary(body);
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
| **definitionId** | `string` | Scope all numbers to one workflow. | [Optional] [Defaults to `undefined`] |
| **since** | `Date` | Window start (inclusive). Defaults to 7 days ago. | [Optional] [Defaults to `undefined`] |
| **until** | `Date` | Window end (inclusive). | [Optional] [Defaults to `undefined`] |

### Return type

[**WorkflowRunSummaryResponse**](WorkflowRunSummaryResponse.md)

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


## getAdminWorkflowTimeseries

> RunTimeseriesResponse getAdminWorkflowTimeseries(timezone, definitionId, since, until, bucket)

Get Admin Workflow Timeseries Handler

Run counts bucketed over time, in the resolved timezone.

### Example

```ts
import {
  Configuration,
  AdminWorkflowsApi,
} from '@knowledge-stack/ksapi';
import type { GetAdminWorkflowTimeseriesRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AdminWorkflowsApi(config);

  const body = {
    // string | IANA tz override; defaults to tenant setting. (optional)
    timezone: timezone_example,
    // string | Scope to one workflow. (optional)
    definitionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // Date | Window start (inclusive). Defaults to 7 days ago. (optional)
    since: 2013-10-20T19:20:30+01:00,
    // Date | Window end (inclusive). (optional)
    until: 2013-10-20T19:20:30+01:00,
    // TimeBucket | Bucket size. (optional)
    bucket: ...,
  } satisfies GetAdminWorkflowTimeseriesRequest;

  try {
    const data = await api.getAdminWorkflowTimeseries(body);
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
| **timezone** | `string` | IANA tz override; defaults to tenant setting. | [Optional] [Defaults to `undefined`] |
| **definitionId** | `string` | Scope to one workflow. | [Optional] [Defaults to `undefined`] |
| **since** | `Date` | Window start (inclusive). Defaults to 7 days ago. | [Optional] [Defaults to `undefined`] |
| **until** | `Date` | Window end (inclusive). | [Optional] [Defaults to `undefined`] |
| **bucket** | `TimeBucket` | Bucket size. | [Optional] [Defaults to `undefined`] [Enum: hour, day, week, month] |

### Return type

[**RunTimeseriesResponse**](RunTimeseriesResponse.md)

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

