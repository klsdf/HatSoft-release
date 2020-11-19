(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cfaee"],{6581:function(n,t,e){"use strict";e.r(t);var o=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("markdown-it-vue",{staticClass:"md-body",attrs:{content:n.content}})],1)},a=[],r=e("48cd"),l=e.n(r),i=(e("f417"),'\n# 基础知识\n\n本文采用了最新的es6语法,可以放心食用.\n\n## 专业术语\n\n为了防止在文中反复解释一些术语,我将一些常用术语的解释放在了这里.这意味着你并不需要直接看这里.等之后遇到了这些术语再翻上来看才是正道.\n\n### ES6\n\n### 字面量\n\n字面量就是代码意义上的常量,说白了就是可以放到赋值号右边的都可以叫字面量.这样子这个赋值表达式的值就如字面上一样,你赋值号右边写的是啥,值就是啥,非常容易理解.\n\n**注意,我下面代码中赋值语句的右边是字面量,我写这个语句只是方便理解,别理解错了.**\n\n```javascript\nvar 字符串字面量 = "hello world!";\nvar 数值字面量 = 996;\nvar 数组字面量 = ["java","c++","JavaScript"];\nvar 函数字面量 = function(){}\nvar 对象字面量 = {}\n```\n\n### 函数与方法\n\n理论上对象的函数就叫做方法,但是JavaScript是纯面向对象的语言,万物皆对象.所以函数和方法并没有C++那种半面向对象语言那种严格.一般来讲,window对象的方法叫做函数,其他对象的函数叫做方法,不过也没有那么较真就是了.\n\n## 关于结尾的分号\n\nJavaScript并没有强制要求你加上分号,也没有要求一定不加,一般情况下看自己喜好就行.\n\n不过只有这么两种情况下必须加分号:\n\n## 双引号与单引号\n\nJavaScript不区分单引号和双引号,字符串可以随意用这两种引号,不像其他语言严格取分大小写\n\n## Hello World\n\n浏览器环境下,直接打开浏览器,F12找到console就能看到.\n\n```html\n<!DOCTYPE html>\n<html>\n\t<head>\n\t\t<meta charset="utf-8">\n\t\t<title></title>\n\t\t<script type="text/javascript">\n\t\t\tconsole.log("Hello World");\n\t\t<\/script>\n\t</head>\n\t<body>\n\t</body>\n</html>\n\n```\n\nnode环境下,用node命令执行语句.\n\n```javascript\nconsole.log("Hello World");\n```\n\n\n\n# 值类型\n\n# 引用类型之字符串\n\n## 定义与使用\n\n```javascript\n//用字面量创建\nvar dream ="愿天下没有996!";\n```\n\n\n\n## 字符串常用方法\n\nes6 新增字符串方法\n\n- includes()\n\n- startWith()\n\n  ```javascript\n  //字符串开头字母之后的字符串是否为h\n  str.startWith("h");\n  //字符串开头第2个字母之后的字符串是否为ello\n  str.startWith("ello",1);\n  ```\n\n  \n\n- endWith()\n\n## 模板字符串\n\n模板字符串是超级无敌强化之后的字符串,用**间隔符**(ESC下面那个符号)来引用.\n\n下面简述它的两个主要功能\n\n1. 可以在字符串内直接使用变量,并计算\n2. 可以在字符串内保留回车,不用自己拼接回车了.\n\n当一个字符串拼接的过长时,原来那种+号的写法过于繁琐,所以可以使用模板字符串,直接把变量放在里面\n\n```javascript\n//注意,return中的是间隔符,并不是引号.\nfunction KillerQueen(name,age){\n\treturn `我叫${name},今年${age}岁`\n}\nconsole.log(KillerQueen("吉良吉影",33));\n```\n\n不仅仅是这样,模板字符串里面的变量也可以进行运算,并且保留回车.\n\n```javascript\nfunction Real_GDP_per_capita(money){\n\treturn `\n\t\t赵家有钱${money}万,隔壁9个穷光蛋;\n\t\t平均起来算一算,各个都是赵${money/(9+1)}万`;\n}\nconsole.log(Real_GDP_per_capita(1000));\n```\n\n\n\n# 数组\n\n## 数组常用方法\n\n1. concat() 可以拼接两个数组\n\n   ```javascript\n   var loli1 = ["雷姆","伊莉雅","波莱特","巧克力"];\n   var loli2 = ["86","香子兰","牛顿"];\n   console.log(loli1.concat(loli2));\n   ```\n\n   \n\n# 函数\n\n## 简介\n\n​\tJavaScript的函数就是对象,万物皆对象.但是JavaScript是弱数据类型的,所以在使用函数的时候和别的强数据类型语言还是有差别.\n\n就比如说,函数不用写返回值类型,没有返回值也不用 `return void;` ,并且定义时需要显式定义.\n\n## 定义与使用\n\n函数有两种定义方法(暂时不考虑箭头函数),没有什么好说的,记住就行了.\n\n```javascript\nfunction add(a, b) {\n\treturn a + b;          \n}\n//下面这个是字面量创建\nvar add = function(a,b){\n  return a + b;      \n}\n```\n\n使用也没有什么好说的,跟其他语言一样\n\n```javascript\nadd(a,b);\n```\n\n\n\n## 立即执行函数\n\n​\t把一个匿名函数前后都用小括号括起来就变成了立即执行函数,这种函数只能用一次,一旦程序运行到这里立刻执行.\n\n因为没有名字,之后无法被其他程序调用.\n\n```javascript\n(function(){\n  document.write("我是匿名函数")\n})(); \n```\n\n\n\n## 箭头函数\n\n这个东西看着复杂,实际上就是一个简化版匿名函数,\n\n我们可以用匿名函数来参考着看.\n\n```javascript \nvar fun1 = function (id){\n\tconsole.log("匿名函数"+id);\n}\nvar fun2 = (id) => {\n\tconsole.log("箭头函数"+id);\n}\nfun1(0);\nfun2(1);\n```\n\n若函数,只有一个参数,可以省略小括号,但是没有参数的话,必须加一个空括号().\n\n并且函数只有一行代码的话,可以省略大括号,经典操作了.\n\n```javascript\nvar fun1 = function (id){\n\tconsole.log("匿名函数"+id);\n}\nvar fun2 = id => console.log("箭头函数");\nfun1();\nfun2();\n```\n\n是不是一下子就简化很多了.但是这个还是有一个需要说明的地方.\n\n注意!**如果没有大括号,那么编译器默认会给前面加上return,返回该语句.**\n\n```javascript\nvar fun2 = () => "0"+721;\nconsole.log( fun2());\n```\n\n最后结果返回0721.(柚子厨震怒)\n\n## rest参数\n\n当函数不确定具体有多少参数时,可以使用rest参数,来统一获取剩下所有参数.\n\n我们用**三个点**代表rest参数 ... \n\n```javascript\nfunction Lolis(...lolis){\n\tfor(let girl of lolis)\n\t\tconsole.log(girl);\n}\nLolis("雷姆","伊莉雅","波莱特","巧克力");\n```\n\n可以发现我在console的时候,用了for of语法,这就说明,其实rest参数会把传进来的所有参数封装成数组,可以用数组的方法操作rest参数.\n\n## 高阶函数\n\n```javascript\nconst nums = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];\n//filter用来过滤想要的数据\n//filter函数会调用一个回调函数\n//回调函数的参数n会遍历nums数组的元素\n//回调函数必须返回一个boolean值,\n//若为true则把数据压入新数组,false则过滤掉\nvar newNums = nums.filter(\n  function (item) {\n    if (item > 100)\n      return true;\n  }\n);\nconsole.log("newNums:"+newNums);\n\n//map用来对原数据进行一次映射\n//对数组进行一次映射,遍历数组每一项,把数据存入n中,\n//return的值存入新的数组\nvar newNums2 = newNums.map(\n  function (item) {\n    return item * 10\n  }\n);\nconsole.log("newNums2:"+newNums2);\n\n//用于集合中的所有数据,可以进行如全部加一遍的操作\n//reduce一共传参两个,第一个是回调函数,第二个是给oldValue初始化的值\n//回调函数中,oldValue除第一次外,每次值被赋值为函数return的值\n//item依旧遍历之前的数组\nvar newNums3 = newNums2.reduce(function (oldValue, item) {\n  return oldValue + item;\n}, 0);\nconsole.log("newNums3:"+newNums3);\n\nvar totle = nums.filter(function (item) {\n  if (item > 100)\n    return true;\n}\n                       ).map(function (item) {\n  return item * 10;\n}\n                            ).reduce(function (oldValue, item) {\n  return oldValue+item;\n}, 0);\nconsole.log("totle:"+totle);\n//箭头函数写法\nvar totle2=nums.filter(item=>item>100).map(item=>item*10).reduce((pre,item)=>item+pre);\nconsole.log("totle2:"+totle2);\n```\n\n\n\n# 引用类型之对象\n\n# 类\n\n## 类的创建\n\n### ES5\n\n\n\n### ES6\n\n类可以来创建对象,因为ES6真的很香,跟java他们用法差不多,现在你就能发现ES6有多香了.S5学起来简直难受的一批,浑身不舒服.\n\n```javascript\nclass Loli {\n    constructor(age) {\n        this.age = age;\n    }\n\tgulu_gulu()\n\t{\n\t\tconsole.log("咕噜咕噜~~~");\n\t}\n\tshowAge(){\n\t\tconsole.log(`人家今年${this.age}岁`);\n\t}\n  //静态方法\n\tstatic ne()\n\t{\n\t\tconsole.log("呐呐呐呐呐呐呐呐呐呐呐呐呐呐呐呐");\n\t}\n}\nvar 巧克力 = new Loli(14);\n巧克力.gulu_gulu();\n巧克力.showAge();\nLoli.ne();\n```\n\n可以看到,程序正常运行:\n\n![image-20200831233256840](imgimage-20200831233256840.png)\n\n## 类的继承\n\n用extends表示继承哪个类,之后用super来指定继承的属性,默认继承全部的方法.\n\n```javascript\nclass 天然呆萝莉 extends Loli {\n\tconstructor(age,name) {\n\t\t//用super来直接继承属性\n\t  super(age);\n\t\tthis.name=name;\n\t}\n\t//方法默认全部继承过来,无论是普通方法,还是静态方法.\n\tshowInfo(){\n\t\tconsole.log(`嘟嘟噜~~,${this.name}です,今年${this.age}岁`)\n\t}\n}\nvar 椎名真由理 = new 天然呆萝莉(14,"椎名真由理");\n椎名真由理.showInfo();\n椎名真由理.gulu_gulu();\n天然呆萝莉.ne();\n```\n可以看到程序正常运行:\n\n![image-20200831233416082](imgimage-20200831233416082.png)\n\n# this\n\n精通this是你从JS萌新变成JS巨佬的必经之路,但是想熟练掌握这个东西,并不是一件轻松的工作..\n\n\n# JSON\n\n# BOM和DOM\n\n'),s={components:{MarkdownItVue:l.a},data:function(){return{content:i}}},u=s,c=e("2877"),m=Object(c["a"])(u,o,a,!1,null,null,null);t["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d0cfaee.163da402.js.map