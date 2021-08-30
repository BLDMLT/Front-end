#### 背景


#### 1. 背景颜色
+ background-color: transparent -> 透明


#### 2. 背景图片
+ logo
+ 装饰性小图片
+ 超大的背景图片
+ background-image: none | url(url)


#### 3. 背景平铺 (bgr)
+  background-repeat: repeat | no-repeat | repeat-x | repeat-y 
+ 可添加背景颜色，但是图片会压住背景颜色

#### 4. 背景图片位置 (background-position: x y;)
+ 方位名词，前后无区别 background-position: left right; (top center )
+ background-position: 0 0; ->  左侧和上侧
+ 可混合，但是一定是x y -> 20px center

#### 5. 背景图片固定 (bga)
+  background-attachment: scroll | fixed;

#### 6. background复合写法
+ 没规定，但一般：颜色 地址 平铺 滚动/固定  位置

#### 7.半透明
+   background-color: rgba(red, green, blue, alpha);
+   alpha -> 透明度 0～1 为百分比
+   IE9+ 支持为CSS3
+   指盒子半透明，不影响内容





