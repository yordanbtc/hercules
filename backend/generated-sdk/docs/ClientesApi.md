# ClientesApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**customersControllerCreate**](#customerscontrollercreate) | **POST** /Customers | |
|[**customersControllerFindAll**](#customerscontrollerfindall) | **GET** /Customers | |
|[**customersControllerFindOne**](#customerscontrollerfindone) | **GET** /Customers/{id} | |
|[**customersControllerRemove**](#customerscontrollerremove) | **DELETE** /Customers/{id} | |
|[**customersControllerUpdate**](#customerscontrollerupdate) | **PATCH** /Customers/{id} | |

# **customersControllerCreate**
> CustomerEntity customersControllerCreate(createCustomerDto)


### Example

```typescript
import {
    ClientesApi,
    Configuration,
    CreateCustomerDto
} from './api';

const configuration = new Configuration();
const apiInstance = new ClientesApi(configuration);

let createCustomerDto: CreateCustomerDto; //

const { status, data } = await apiInstance.customersControllerCreate(
    createCustomerDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCustomerDto** | **CreateCustomerDto**|  | |


### Return type

**CustomerEntity**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **customersControllerFindAll**
> customersControllerFindAll()


### Example

```typescript
import {
    ClientesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ClientesApi(configuration);

const { status, data } = await apiInstance.customersControllerFindAll();
```

### Parameters
This endpoint does not have any parameters.


### Return type

void (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **customersControllerFindOne**
> customersControllerFindOne()


### Example

```typescript
import {
    ClientesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ClientesApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.customersControllerFindOne(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **customersControllerRemove**
> customersControllerRemove()


### Example

```typescript
import {
    ClientesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ClientesApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.customersControllerRemove(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **customersControllerUpdate**
> customersControllerUpdate(updateCustomerDto)


### Example

```typescript
import {
    ClientesApi,
    Configuration,
    UpdateCustomerDto
} from './api';

const configuration = new Configuration();
const apiInstance = new ClientesApi(configuration);

let id: string; // (default to undefined)
let updateCustomerDto: UpdateCustomerDto; //

const { status, data } = await apiInstance.customersControllerUpdate(
    id,
    updateCustomerDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateCustomerDto** | **UpdateCustomerDto**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

