
### 文本属性

#### 1. 文本颜色，三种方法
      div {
            color: red; 预存
            color: #000; 16进制
            color: rgb(red, green, blue);   RGB代码
        }

#### 2. 对其文本
+ text-align 只能水平对齐、
  
        div {
            /* center, right, left */
            text-align: center;
        }

#### 3. 装饰文本
+ text-decoration 下划线，删除线，上划线


      div {
            /* none, underline, line-though, overline */
            text-decoration: line-through;
        }

#### 4. 缩进
+ text-indent 

        p {
            /* em 一个文字大小，相对单位。 */
            /* text-indent: 20px; */
            text-indent: 2em;
        }

#### 5. 行间距
+ line-height  行高 -> 25px

   p {
            line-height: 26px;
        }

+ 上下间距 = （行高 - 文字大小）/2
+ 工具FastStoneCapture
  