##### CSS3 特性

+ 兼容性问题 > IE9

##### 属性选择器

      <!-- 1.利用属性选择器，可以不用借助于类或者id选择器 -> E[att] -->
    <!-- <input type="text" value="Plz enter your name">
    <input type="text"> -->
    <!-- 2. 属性选择器还可以选择属性=值的某些元素 -> E[att="val"] -->
    <input type="text" name="" id="">
    <input type="password" name="" id="">
    <!-- 3. 可以选择以属性值开头的元素 -> E[att^="val"] -->
    <div class="incon1">小图标1</div>
    <div class="incon2">小图标2</div>
    <div class="incon3">小图标3</div>
    <div class="incon4">小图标4</div>
    <div class="incon5">小图标5</div>
    <!-- 4. 可以选择属性结尾的元素 -> E[att$="val"] -->
    <selction class="icon1-date">结尾属性1</selction>
    <selction class="icon2-date">结尾属性2</selction>
    <selction class="icon3-date">结尾属性3</selction>
    <selction class="icon4-date">结尾属性4</selction>
    <selction class="icon5-date">结尾属性5</selction>
    <!-- 5.属性中含有-> E[att*="val"] ->  -->


     /* E[att]  */
        
        input[value] {
            color: pink;
        }
        /* 只选择type是text的 */
        /* E[att=""] */
        
        input[type=text] {
            color: powderblue;
        }
        /* E[att^=""] */
        
        div[class^=incon] {
            color: red;
        }
        
        selction[class$=date] {
            color: pink;
        }


2. 伪类选择器
   
| 选择器          | 简介                              |
| :-------------- | :-------------------------------- |
| E:first-child   | 匹配父元素中的第一个子元素E       |
| E:last-child    | 匹配父元素中最后一个E元素         |
| E:nth-child(n)  | 匹配父元素中第n个子元素  odd even |
| E:first-of-type | 指定类型E的第一个                 |
| E:last-of-type  | 指定类型E的最后一个               |
| E:nth-of-type   | 指定类型E的第n个                  |

* nth可以是数字，关键词，公式
+ nth(n) -> 选择所有元素 -> n 从0开始
+ 2n -> 选择偶数
+ 2n+1 -> 选择奇数

