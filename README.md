jquery accordion 
===========================
######jquery手风琴插件

##[Demo](http://lengziyu.com/unit/demos/accordion/)
##用法：
```javascript
//no jquery no works
<script src="lib/jquery-1.11.1.min.js"></script>
<script src="jquery.accordion.js"></script>

$(document).ready(function(){
  $(".accordion").accordion();
});
```

###自定义参数：
```javascript
  $(".accordion").accordion({
    max:"620px",   //展示项区域的图片宽度     默认620px
    min:"140px",   //隐藏区域的图片宽度       默认140px
    speed:"5000"   //速度
  });
```
###其他说明：
- 当前版本v0.0.1
