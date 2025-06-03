# [Present] `呈现`
```
[Present]
post $active = 0
run = CommandListCreditInfo
if $object_detected
    if $mod_enabled
        post $object_detected = 0
        run = CommandListUpdateMergedSkeleton
    else
        if $mod_id == -1000
            run = CommandListRegisterMod
        endif
    endif
endif
```
## 解释

Present 直译为现在、目前，即使理解了它的用法，这个翻译也显得较为抽象，根据它的用途，姑且翻译为呈现

* 在 DirectX 中，Present 是指渲染管线完成一帧的绘制后，将渲染结果从后台缓冲区（back buffer）提交到前台缓冲区（front buffer），最终显示在屏幕上
* 在 3DMigoto 中，[Present] 节是钩子（hook），用于在每帧呈现时执行特定操作（如初始化资源、运行命令列表等）

## 用法

1.存放需要每帧刷新并运行的代码

2.通过传递变量和逻辑，可以使得非[Present]节的代码也具有其特性
