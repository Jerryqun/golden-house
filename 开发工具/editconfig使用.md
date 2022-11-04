生效形式 （是否需要插件）
有些编辑器自带了对这个文件的支持，无需安装插件。有些则需要再自行安装相应插件。
(VS Code 需要安装插件 EditorConfig for VS Code)
编辑器是否需要安装插件可以查看官网列出的统计
editorconfig.org/

在 VS Code 中，创建好文件和安装好插件后，需要重启编辑器，但是此时只是修改编辑器的编辑设置，并不会将你已经存在的代码进行规范，可以通过快捷键格式化生效

参考
https://juejin.cn/post/6844903679993053191


# 表明这是最顶层的配置文件，这样才会停止继续向上查找 .editorconfig 文件；
# 查找的 .editorconfig 文件是从顶层开始读取的，类似变量作用域的效果，内部
# 的 .editorconfig 文件属性优先级更高
root = true

# 指定作用文件格式
[*]

# 缩进的类型 [space | tab]
indent_style = space

# 缩进的大小 
# tab_width: 设置整数用于指定替代tab的列数。默认值就是indent_size的值，一般无需指定。
indent_size = 2

# 定义换行符 [lf | cr | crlf]
end_of_line = lf

# 编码格式。支持latin1、utf-8、utf-8-bom、utf-16be和utf-16le，不建议使用uft-8-bom。
charset = utf-8

# 是否除去换行行首的任意空白字符
trim_trailing_whitespace = false

# 文件是否以一个空白行结尾 [true | false]
insert_final_newline = true

