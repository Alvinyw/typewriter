# typewriter
通过 Javascript 实现打字机插件

## 一、通过 Node 引用

```javascript
npm i alvin-typewriter
```

在 VUE 的 SPA 中的使用示例：

```html
<template>
  <div id="main">
    <div id="typewriter" class="item">
一天叶子离开了,它问树：你为什么不挽留我，树默默的说：因为风在追你，所以我选择了放弃；叶子问风：你为什么要追求我，风平淡的回答：因为树放弃了你，我看你孤独就追你了。叶子沉默了，是树太懦弱，还是自己太傻。
　　终有一天叶子感到筋疲力尽了，于是选择了随风漂泊，它问树：你为什么不挽留我?树骄傲的说：世界上不只有你一片叶子；叶子伤心走了，它问风：你为什么要追求我，风真诚的回答：因为世界上没有相同的两片叶子。叶子沉默了，是树不懂得爱,还是风太执着。
    </div>
  </div>
</template>
<script>
import createTypewriter from "alvin-typewriter";
export default {
  name: "Typewriter",
  data() {
    return {
      typewriter: "",
    };
  },
  mounted() {
    var cfg = {
      targetNodeId: "typewriter",
      typingSpeed: 70
    };
    this.typewriter = createTypewriter(cfg);
  },
};
</script>
```

## 二、通过 script 脚本引入

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

## 三、插件可供设置的参数及参数的默认值

```javascript
<script>
$(targetNode).typewriter({
	typingSpeed: 75 // 设置“打一个字”所需的时间，默认值是 75ms，数值越大打字越慢
});
</script>
```

## 四、示例

- 可打印英文，中文，代码块，带样式的 html 文本等：
[Demo](https://alvinyw.github.io/Blog/typewriter/typewriter.html)