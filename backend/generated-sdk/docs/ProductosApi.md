# ProductosApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**productsControllerCreate**](#productscontrollercreate) | **POST** /products | |
|[**productsControllerFindAll**](#productscontrollerfindall) | **GET** /products | |
|[**productsControllerFindOne**](#productscontrollerfindone) | **GET** /products/{id} | |
|[**productsControllerRemove**](#productscontrollerremove) | **DELETE** /products/{id} | |
|[**productsControllerUpdate**](#productscontrollerupdate) | **PATCH** /products/{id} | |

# **productsControllerCreate**
> ProductEntity productsControllerCreate(createProductDto)


### Example

```typescript
import {
    ProductosApi,
    Configuration,
    CreateProductDto
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductosApi(configuration);

let createProductDto: CreateProductDto; //

const { status, data } = await apiInstance.productsControllerCreate(
    createProductDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createProductDto** | **CreateProductDto**|  | |


### Return type

**ProductEntity**

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

# **productsControllerFindAll**
> productsControllerFindAll()


### Example

```typescript
import {
    ProductosApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductosApi(configuration);

const { status, data } = await apiInstance.productsControllerFindAll();
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

# **productsControllerFindOne**
> productsControllerFindOne()


### Example

```typescript
import {
    ProductosApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductosApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.productsControllerFindOne(
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

# **productsControllerRemove**
> productsControllerRemove()


### Example

```typescript
import {
    ProductosApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductosApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.productsControllerRemove(
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

# **productsControllerUpdate**
> productsControllerUpdate(updateProductDto)


### Example

```typescript
import {
    ProductosApi,
    Configuration,
    UpdateProductDto
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductosApi(configuration);

let id: string; // (default to undefined)
let updateProductDto: UpdateProductDto; //

const { status, data } = await apiInstance.productsControllerUpdate(
    id,
    updateProductDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateProductDto** | **UpdateProductDto**|  | |
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

