### 盒子模型

#### 1. 布局
1. 准备相关元素，都是盒子
2. CSS -> 设置好样式，摆放相应位置
3. 装入内容

#### 2. 盒子（box model）组成
+ 边框（border）-> 四周边框
+ 内容（content）-> 装入的内容
+ 内边距（padding）-> 边框和内容的距离
+ 外边距（margin）-> 盒子间的距离

#### 3. 边框（border）border: border-width | border-style |  border-color
| 属性         | 作用             |
| :----------- | :--------------- |
| border-width | 边框粗细，单位px |
| border-style | 边框样式         |
| border-color | 边框颜色         |

+ none | solid | dashed |dotted
+ 简写：border: 1px solid red; -> 没有顺序
+ 可分开：border-bottom
+ border-collapse: collapse -> 相邻的单元格边框合并
+ table td th 都要

#### 4. 内边距(padding)
+ padding-top | padding-bottom | padding-left | padding-right|
+ 可简写，如果只有一个值，则是四周
+ 如果2个值，则上下，左右
+ 如果3个值，则上，左右，下
+ 如果4个值，则上，右，下，左，顺时针
+ 注意，padding会影响实际盒子大小，会撑大盒子

#### 5. 外边框（margin）
+ margin-top | margin-bottom | margin-left | margin-right|
+ F12 -> computed 查看
+ 使用方法和padding相同
+ 水平居住：设置宽度，左右auto
+ -> 行内元素: 父元素加上 text-align: center
+ 外边框合并 -> 上下边距取最大的为准
+ 外边距塌陷：-> 子元素和父元素边距取最大 
  + 父元素指定一个边框 -> border ｜ padding
  + 父元素加    overflow:hidden
  
#### 6. 清除内外边距-> 元素有默认边距
     * {
            margin: 0;
            padding: 0;
        }
        
+ 行内元素尽量只设置左右内外边距，不设置上下内外边距 -> 转换成块or行内块

