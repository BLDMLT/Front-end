#### 不给父盒子的浮动
+ 父盒子高度变成0
+ 本质父盒子高度随着子盒子自动
+ 选择器 {clear: 属性值;}

| 属性值 | 描述                     |
| :----- | :----------------------- |
| left   | 不允许左侧有浮动元素     |
| right  | 不允许右侧有浮动元素     |
| both   | 同时清楚左右两侧浮动元素 |

#### 4.方法
1. 额外标签法 -> 隔墙法 -> 加个clear: both的墙
2. 父级添加overflow属性 ——> hidden, auto, scroll
   1. 代码简洁，但无法显示溢出部分
3. 父级添加after伪元素
   1. 没有额外标签，机构更简单，但是要照顾低版本


                .clearfix:after {
                    content: "";
                    display: block;
                    height: 0;
                    clear: both;
                    visibility: hidden;
                }
                /* 照顾IE6/7 */
                
                .clearfix {
                    *zoom: 1;
                }
4. 父级添加双伪元素
    + 更简洁
        

            .clearfix:before,
            .clearfix:after {
                content: "";
                display: table;
            }
            
            .clearfix:after {
                clear: both;
            }
            
            .clearfix {
                *zoom: 1;
            }
