"use strict";(self["webpackChunklt_components"]=self["webpackChunklt_components"]||[]).push([[578],{4578:function(e,t,l){l.r(t),l.d(t,{default:function(){return i}});var o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"emoji-filter-wrapper"},[t("div",{staticClass:"form-item"},[t("span",[e._v("原生Input")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.input,expression:"form.input"}],domProps:{value:e.form.input},on:{input:function(t){t.target.composing||e.$set(e.form,"input",t.target.value)}}})]),t("div",{staticClass:"form-item"},[t("span",[e._v("textInput")]),t("el-input",{attrs:{placeholder:"请输入内容"},on:{input:e.testInput},model:{value:e.form.textInput,callback:function(t){e.$set(e.form,"textInput",t)},expression:"form.textInput"}})],1),t("div",{staticClass:"form-item"},[t("span",[e._v("textArea：")]),t("el-input",{attrs:{type:"textarea",placeholder:"请输入内容"},on:{input:e.testInput},model:{value:e.form.textarea,callback:function(t){e.$set(e.form,"textarea",t)},expression:"form.textarea"}})],1),t("div",{staticClass:"form-item"},[t("span",[e._v("InputNumber：")]),t("el-input-number",{attrs:{min:1,max:10,label:"描述文字"},model:{value:e.form.num,callback:function(t){e.$set(e.form,"num",t)},expression:"form.num"}})],1),t("div",{staticClass:"form-item"},[t("span",[e._v("Input-Select：")]),t("el-select",{attrs:{multiple:"",filterable:"",remote:"","reserve-keyword":"",placeholder:"请输入关键词","remote-method":e.remoteMethod},model:{value:e.form.select,callback:function(t){e.$set(e.form,"select",t)},expression:"form.select"}},e._l(e.options,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),t("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("提交")])],1)},a=[],n={data(){return{form:{num:1,input:"",textInput:"",textarea:""},options:[{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶"},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"},{value:"选项5",label:"北京烤鸭"}]}},methods:{submit(){console.log(this.form)},testInput(e){console.log(e)},remoteMethod(e){console.log(e)}}},r=n,s=l(1656),u=(0,s.A)(r,o,a,!1,null,"77c23fdc",null),i=u.exports}}]);
//# sourceMappingURL=578.b7864a88.js.map