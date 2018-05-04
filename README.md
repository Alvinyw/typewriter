# typewriter
通过 Javascript 实现打字机插件

## 插件用法
```html
<script src="jquery.min.js"></script>
<script src="typewriter.min.js"></script>
```
引入上面两个文件之后，即可调用该插件了：
```javascript
<script>
$(targetNode).typewriter();
</script>
```

## 参数说明
```javascript
<script>
$(targetNode).typewriter({
	typingSpeed: 75
});
</script>
```
- **typingSpeed**：设置“打一个字”所需的时间，默认值是 75ms，数值越大打字越慢；

## 示例
- 可打印英文，中文，代码块，带样式的 html 文本等：
  [typewriter](https://alvinyw.github.io/Blog/typewriter/typewriter.html)