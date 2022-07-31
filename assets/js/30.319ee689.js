(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{401:function(a,s,e){"use strict";e.r(s);var t=e(4),r=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"问题背景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题背景"}},[a._v("#")]),a._v(" 问题背景")]),a._v(" "),s("p",[a._v("在处理 "),s("a",{attrs:{href:"https://github.com/eryajf/awesome-github-profile-readme-chinese",target:"_blank",rel:"noopener noreferrer"}},[a._v("awesome-github-profile-readme-chinese"),s("OutboundLink")],1),a._v(" 项目的PR时，我仔细看了小伙伴提交的内容没有问题，就欣然同意了，然而，到底我还是年轻了，仍然出现了合并之后的一个小问题，那就是，我在预览合并之后的效果时发现，竟然无法加载图片。")]),a._v(" "),s("p",[a._v("我点开图片链接确实跳到了404，我再仔细一看，原来引用图片的名字与图片本身的名字大小写不一致：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('- [xJoyLu](https://github.com/xJoyLu)\n  <details>\n    <summary>Preview</summary>\n    <img src="examples/xJoyLu.png">\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("p",[a._v("而实际的文件名为："),s("code",[a._v("xjoylu.png")]),a._v("。")]),a._v(" "),s("p",[a._v("GitHub在加载图片文件的时候，对文件名的大小写是敏感的，如果不一致，则将无法正确加载。")]),a._v(" "),s("p",[a._v("于是，我只能自己再修一下这个小问题了，但是我发现，当我在本地图片文件名改成与引用的名字一致后，提交总是无法生效。")]),a._v(" "),s("h2",{attrs:{id:"解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[a._v("#")]),a._v(" 解决方案")]),a._v(" "),s("p",[a._v("原来Git默认配置为忽略大小写，因此无法正确检测大小写的更改。")]),a._v(" "),s("p",[a._v("这里整理三种解决方案。")]),a._v(" "),s("h3",{attrs:{id:"方案一"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方案一"}},[a._v("#")]),a._v(" 方案一")]),a._v(" "),s("p",[a._v("修改Git的默认配置，从而让其对大小写敏感：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ git config core.ignorecase false\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("运行如上命令，即可关闭Git忽略大小写配置，以实现检测到大小写名称的更改。")]),a._v(" "),s("h3",{attrs:{id:"方案二"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方案二"}},[a._v("#")]),a._v(" 方案二")]),a._v(" "),s("p",[a._v("可以先将图片移出该项目，然后进行提交，提交之后，再移回来，再次提交，也可以达到目的。")]),a._v(" "),s("h3",{attrs:{id:"方案三"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方案三"}},[a._v("#")]),a._v(" 方案三")]),a._v(" "),s("p",[a._v("使用 git mv 命令修改文件名：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ git mv xjoylu.png xJoyLu.png\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("然后再走常规的提交流程就可以了。")])])}),[],!1,null,null,null);s.default=r.exports}}]);