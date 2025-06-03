# Constants `变量`
```
[Constants]
global $required_wwmi_version = 0.77
global $object_guid = 174510
global $mesh_vertex_count = 24484
global $shapekey_vertex_count = 4776
global $mod_id = -1000
global $state_id = 0
global $mod_enabled = 0
global $object_detected = 0
```
## 解释

Constants 更应该被翻译为常量，但是在大多数时候被当做变量使用，为了符合主流认知和方便讨论，最终我将其翻译为变量。

* “Constants”这一术语可能源自于 DirectX 或 HLSL（High-Level Shader Language）编程的传统。在着色器编程中，“常量”（Constants）通常指在渲染管线中保持不变或仅在特定阶段更新的值，例如全局参数或缓冲区中的数据。
* 3DMigoto 的开发者沿用了这一术语，尽管 [Constants] 节中的变量可以通过按键或其他机制动态改变，功能更像“变量”（Variables）。这可能是为了与着色器编程的惯例保持一致，避免引入新的术语（如 [Variables]）造成混淆。
* 在 [Constants] 中定义的变量（如 $my_variable）在单个渲染帧内通常保持不变，符合“常量”的概念。只有在用户输入（如按键）或特定条件下，这些值才会动态更新。因此，“Constants”可能反映了它们在渲染管线中的“暂时不变”特性。

## 用法

1.在[Constants]中定义变量，并在`ini`中的绝大部分代码节里调用

2.可同时存在多个[Constants]，在多个节内定义变量等效单个[Constants]

3.调用HLSL文件中定义的变量并赋值