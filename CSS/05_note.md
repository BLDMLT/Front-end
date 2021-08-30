#### emmet语法
+ 用缩写的方法来提高编写速度
#### 1. 快速html
+ ！ -> 直接生成html
+ tab键直接补全
+ 用* 生成多个文件  -> div*10 （不能有空格）
+ 用>生成父子关系， ul > li
+ 用+生成兄弟关系 div+p
+ .nav 或者 #banner 自动生成默认div -> p.nav 可以直接
+ div生成有顺序 用$  -> .demo$*5
+ 想生成标签默认文字{} -> div{xxxx}*5


#### 2. 快速css
+ w200 -> width: 200px;
+ lh26 -> line-height: 26px;
+ 有时要加单位 lh26px
  

#### 3. 快速格式化
+ shift + Alt + F
+ 
#### 4. 复合选择器
+ 后代选择器
    +  元素1（父） 元素2（子），中间空格，父只有限定的作用，元素2可以是孙子！！

        ol li {
            color: pink;
        }

+ 子选择器
    nav>a {

    }
  + 只选最近的子元素
+ 并集选择器
    + 可以选择多组标签，通常用于集体声明
    + 元素1，元素2 加逗号，都改，最后一个没逗号
+ 伪类选择器，用冒号表示 ->鼠标经过改颜色
  + 链接伪类 LVHA
    + a:link -> 所有未被访问过的链接
    + a:visited -> 所有访问过的链接
    + a:hover -> 鼠标放上去
    + a:active -> 活动链接，鼠标下按，未弹起的链接
     

  + 表单伪类
    + LVHA顺序声明 :link -> :visited -> :hover -> -:active


     a {
            color: yellowgreen;
        }

        a:hover {
            color: yellow;
        }


+  :focus 伪类选择器 -> z主要用于input


+   










