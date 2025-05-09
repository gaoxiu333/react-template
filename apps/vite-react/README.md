# 构建 React 项目

## 参考
[bulletproof-react](https://github.com/alan2207/bulletproof-react)

## 初始化
1. 使用 `pnpm create vite@latest` 初始化项目
2. 添加接口请求。

## TODO
1. 配置路由
2. 配置数据获取方法fetch/axios？
3. 状态管理
4. 乐观更新？
5. 错误处理？
6. 类型！！
7. 配置别名


## 堆栈

**路由**
- React Router

**UI**
- Tailwind CSS
- Shadcn UI

**MOCK**
- MSW

**状态管理**
- Zustand
- React Query

**工具**
- zod
- clsx
- axios

// TODO
登录状态
zstand 存储 登录状态。。。然后是否可以联合 localstoarge
错误处理
    1. 需要在全局catch 路由层之上的全局错误
    2. 路由层的错误需要在react-router上catch
    3. 页面级，颗粒度更细的在页面层catch
    4. 不同的是react-router使用的错误catch和页面的不是同一个
    5. 怎么整合统一收集错误呢？
    https://www.brandondail.com/posts/fault-tolerance-react
    拆分：按照功能来拆分
    1. 页眉、导航、主内容、侧边栏、页脚，这些页面元素通常会保留一定的独立性
    2. 视觉上的独立板块很可能就是独立功能
    3. 思考：当前组件的错误边界是否会影响兄弟组件（功能上？）
    4. 测试：  throw new Error("oops, I made a mistake!");


```md
概括
因此，这基本上都是在用一种冗长的方式告诉你应该：

避免在顶部只有一个错误边界。这很少是处理故障的最佳方式。

不要过度使用错误边界。这会导致糟糕的用户体验，并可能损害性能。

确定应用中的功能边界，并将错误边界放在那里。由于 React 应用是树状结构，因此一个好的方法是从顶部开始，然后向下进行。

递归地问自己“如果这个组件崩溃了，它的兄弟组件是否也会崩溃？”。这是找到这些功能边界的一个很好的启发式方法。

有意针对错误状态设计应用。将错误边界置于功能边界时，可以更轻松地创建外观美观且让用户知道出现问题的自定义回退 UI。您甚至可以实现特定于功能的重试逻辑，以便用户可以刷新该部分而无需刷新整个页面。

故意去破坏一些东西，看看会发生什么。
```


loading
环境处理

SEO 放在 layout，所以需要layout组件