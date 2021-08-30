

### 1. 字体

        p {
            font-family: "Microsoft YaHei", Arial;
        }
+ 多个字体间逗号分隔，多个单词的用引号包含
+ 尽量使用系统默认字体，多字体兼容性好，依次按顺序显示
+ 一般定义在body中

### 2. 字体大小
      p {
            font-size: 30px;
        }
+ chrome默认16px
+ 一般在body中


### 3. 字体加粗 -> normal （400）/ bold （700）/ bolder / lighter / number    
    .bold {
            font-weight: bold;
        }

+  实际开发中用数字表示加粗


### 4. 斜体 -> 一般不用 
       p {
            /* 斜体 */
            font-style: italic;
        }
        em {
            font-style: normal;
        }
  

### 5. 字体可以复合 -> 可以省略，但是size和family不能省
        div {
            /* font: font-style font-weight font-size/font-hight font-family */
            font: italic 700 16px 'Microsoft YaHei'
        }

