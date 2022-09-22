<input type="file" accept=".jpg,.png,.gif" />
这个写法在pc端是可以识别的，可以调起选择器，但在移动端是无法识别的

移动端需要换成下面的写法
<input type="file" accept="image/jpeg,image/png,image/gif" />
或
<input type="file" accept="image/*" />
