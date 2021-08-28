

### 1. 表格标签
+ 表格是用来展示数据的
+ &#60;table> 定义表格 &#60;/table> 
+ &#60;tr> 表格内的行 &#60;/tr> 
+ &#60;td> 行内的单元格 &#60;/td> 
+ &#60;th> 表头 &#60;/th> title head的缩写，文字居中加粗
  
### 2. 表格属性
+ 一般在CSS中设置属性
    | 属性名      | 属性值              | 表述                                    |
    | :---------- | :------------------ | :-------------------------------------- |
    | align       | left, center, right | 表格的对其方式                          |
    | border      | 1 或 ""             | 表格有无边框                            |
    | cellpadding | 像素值              | 规定单元格边缘与内容间的空白，默认1像素 |
    | cellspacing | 像素值              | 规定单元格之间的空白，默认2像素         |
    | width       | 像素值或百分比      | 单元格的宽度                            |

+ 复杂的表格，表头和主体分开（<thead>标签表格的头部区域，<tbody>标签表格的主体区域
+ 例子： q.stock.sohu.com

### 3. 合并单元格
  + 跨行合并： rowspan="合并单元格的个数"
  + 跨列合并： colpan="合并单元格的个数"

### 4. 列表标签
+ 无序列表，&#60;ul> 中只能是&#60;li>标签，&#60;li>之间可以放任何元素  
&#60;ul>  
    &emsp;&#60;li> 列表1 &emsp;&#60;/li>  
    &emsp;&#60;li> 列表2 &emsp;&#60;/li>  
    &emsp;&#60;li> 列表3 &emsp;&#60;/li>  
&#60;/ul>  
+ 有序列表 &#60;ol>
&#60;ol>  
    &emsp;&#60;li> 列表1 &emsp;&#60;/li>  
    &emsp;&#60;li> 列表2 &emsp;&#60;/li>  
    &emsp;&#60;li> 列表3 &emsp;&#60;/li>  
&#60;/ol>  

+ 自定义列表，列表前无任何项目符号，dd和dt个数没有限制
&#60;dl>  
    &emsp;&#60;dt> 名词1 &emsp;&#60;/dt>  
    &emsp;&#60;dd> 解释1 &emsp;&#60;/dd>  
    &emsp;&#60;dd> 解释2 &emsp;&#60;/dd>  
    &emsp;&#60;dd> 解释3 &emsp;&#60;/dd>  
&#60;/dl>  

### 5. 表单域
+ 将&#60; form>中的元素提交到服务器  
  
  &#60; form action="url地址" method="提交方式" name="表单域名称">  
    各种表单元素控件  
  &#60; /form>  

| 属性   | 属性值   | 作用                     |
| :----- | :------- | :----------------------- |
| action | url地址  | 指定接收地址             |
| method | GET/POST | 提交方式                 |
| name   | 名称     | 区分一个页面中的多个表单 |



### 6. 表单控件
+ input 输入/ select 下拉 / textarea 文本域
+ &#60;input type="属性值" /> 单标签

| 属性      | 描述                   |
| :-------- | :--------------------- |
| text      | 输入的文本，默认20字符 |
| password  | 用*掩饰的密码框        |
| radio     | 单选按钮               |
| checkbox  | 多选框                 |
| name      | input的名称            |
| value     | 默认的显示值           |
| checked   | 默认选择               |
| maxlength | 可输入的最大长度       |

+ 按钮
  
 | 属性   | 描述                     |
 | :----- | :----------------------- |
 | submit | 提交按钮                 |
 | reset  | 重制表单内容             |
 | button | 点击，通常通过j设置      |
 | file   | 弹出浏览按钮，供选择上传 |

 + label标签，对input元素定义标注。是双标签
   + &#60;label> XXX &#60;/label>
  
 + select 下拉表单

&#60;select>  
 &emsp;&emsp;&#60;option> 选项1 &#60;/option>  
 &emsp;&emsp;&#60;option> 选项2 &#60;/option>  
 &emsp;&emsp;&#60;option> 选项3 &#60;/option>  
 &emsp;&emsp;&#60;option selected> 选项3 （默认选中） &#60;/option>  
&#60;/select>
  
+ textarea 文本框，row和cols一般用CSS改

        <textarea name="" id="" cols="30" rows="10">
        文本内容
        </textarea>


