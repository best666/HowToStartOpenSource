(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{328:function(s,a,n){"use strict";n.r(a);var t=n(3),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("当我们的项目吸引了更多的同学关注之后，有一些有想法的同学可能就会参与进来，作为项目维护者，我们会面对第一个 issue，第一个 PR，这个时候不要慌，开源是一个很有包容性的理念，甚至有时候没有人关注你的某一个错漏，但你也不要因此就肆无忌惮，因为还会有人关注你的每一处用心与细节。")]),s._v(" "),a("p",[s._v("现在我这里用另外一个账号，模拟项目协同者，来看看这个流程会经历哪些内容。")]),s._v(" "),a("p",[s._v("注意接下来的内容描述将会在两个账号之间切换，这里首先将两个账号角色做个概览：")]),s._v(" "),a("ul",[a("li",[s._v("eryajf：项目 owner。")]),s._v(" "),a("li",[s._v("lql95：项目协作者。")])]),s._v(" "),a("p",[s._v("通常作为协同者，我们会先把项目 fork 到自己的仓库中：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.staticaly.com/gh/eryajf/tu/main/img/image_20220718_171810.png",alt:"image_20220718_171810"}})]),s._v(" "),a("p",[s._v("现在我处于 lql95 的视角，已经将刚刚 eryajf 名下的项目 fork 到了自己的仓库，此时可以将该项目拉到自己本地进行编码：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone git@github.com:lql95/learn-github.git\n\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" learn-github\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("将 README 内容改变如下：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" README.md\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# learn-github")]),s._v("\n学习GitHub相关交互以及功能\n模拟修改提交\n\n这是lql95新增的内容\n\n- a\n- b\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("编码完毕之后，就可以将代码提交到自己的远程仓库了，步骤如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ git add .\n$ git commit -m '以lql95的视角协同维护项目'\n$ git push --set-upstream origin main\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("此时 lql95 的远程仓库实际可以相当于刚刚自己维护的 test 分支，我们需要到 eryajf 的仓库中请求对方将自己的修改 pull 过去：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.staticaly.com/gh/eryajf/tu/main/img/image_20220718_171822.png",alt:"image_20220718_171822"}})]),s._v(" "),a("p",[s._v("方向选择正确之后，我们就可以创建这个 PR 了，同样下一步需要填写标题与备注，这里的标题备注尽量将当次 PR 的内容以列表的形式表明，以便于维护者能够直观地审核自己的这次 PR。")]),s._v(" "),a("p",[s._v("创建完 PR 之后，lql95 突然发现还有一些内容需要修改，于是又进行了一波编码操作：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 调整后的内容如下")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" README.md\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# learn-github")]),s._v("\n学习GitHub相关交互以及功能\n\n这是lql95新增的内容\n\n- a\n- b\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("然后再次进行提交：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ git add .\n$ git commit -m '删除无用内容'\n$ git push\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("这次提交同样会呈现在刚刚创建的那次 PR 之上，现在我们站在 eryajf 的视角来看看这个 PR：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.staticaly.com/gh/eryajf/tu/main/img/image_20220718_171832.png",alt:"image_20220718_171832"}})]),s._v(" "),a("p",[s._v("可以看到 lql95 的 2 次 commit，也可以在差异页面查看此次 PR 的详情，因为这次交互内容不多，所以这里看起来比较简单，在真实项目协作过程中，一次 PR 变化的文件可能有几十个，这个时候再通过页面来看就很不直观了，可以通过如下方式在本地处理。")]),s._v(" "),a("p",[s._v("owner 在自己本地项目目录下，打开 "),a("code",[s._v(".git/config")]),s._v(" 文件，在 "),a("code",[s._v('[remote "origin"]')]),s._v(" 后添加一行：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("fetch = +refs/pull/*/head:refs/pull/origin/*\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("然后执行 "),a("code",[s._v("git pull")]),s._v(" 将远程内容拉到本地：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull\nremote: Enumerating objects: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(", done.\nremote: Counting objects: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v("/11"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", done.\nremote: Compressing objects: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("/5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", done.\nremote: Total "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("delta "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", reused "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("delta "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", pack-reused "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nUnpacking objects: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("/7"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.28")]),s._v(" KiB "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("435.00")]),s._v(" KiB/s, done.\nFrom github.com:eryajf/learn-github\n   85630a4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("421212d  main             -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" origin/main\n * "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("new ref"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("         refs/pull/1/head -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" refs/pull/origin/1\n * "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("new ref"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("         refs/pull/2/head -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" refs/pull/origin/2\nYour configuration specifies to merge with the ref "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'refs/heads/test'")]),s._v("\nfrom the remote, but no such ref was fetched.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("可以看到有两个 PR，我们将分支切到第二个 PR，并在本地创建一个新分支：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ git checkout -b eryajf_test refs/pull/origin/2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("此时项目在本地就将此次 PR 后的最新代码，以 eryajf_test 分支存在，我们可以对协作者提交的代码功能进行一些核验等工作，当我们测验感觉没有问题之后，就可以将代码进行合并了。合并的操作与上边一样，不再赘述。")])])}),[],!1,null,null,null);a.default=e.exports}}]);