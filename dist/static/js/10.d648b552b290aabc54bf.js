webpackJsonp([10],{"CpF+":function(e,t){},"a/o8":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("Xxa5"),r=a.n(n),s=a("exGp"),l=a.n(s),o=a("Dd8w"),i=a.n(o),u=a("nuLj"),c={name:"UserForm",data:function(){return{dialogConf:{width:"700px",isShow:!1,center:!0,title:null},type:null,sendData:{},initData:{name:null,account:null,group:"下拉选择",password:null,pwd:null,remark:null},rules:{name:[{required:!0,message:"请输入用户名",trigger:"blur"}],account:[{required:!0,message:"请输入账号",trigger:"blur"},{min:11,max:11,message:"请使用正确的手机号!",trigger:"blur"}],group:[{required:!0,message:"请选择归属分组",trigger:"change"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],pwd:[{required:!0,message:"请再次输入密码",trigger:"blur"}]},id:null}},methods:{init:function(e){var t=this,a=e.type,n=e.title,s=e.id,o=e.data;return l()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.dialogConf.isShow=!0,t.id=s,t.type=a,n&&(t.dialogConf.title=n),"add"===a?t.sendData=u.a.deepCloneObject(t.initData):"update"===a&&(t.sendData=i()({},u.a.deepCloneObject(t.initData),o));case 5:case"end":return e.stop()}},e,t)}))()},submitForm:function(e){var t,a=this;this.$refs[e].validate((t=l()(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t||a.$message.error("请填写完表单");case 1:case"end":return e.stop()}},e,a)})),function(e){return t.apply(this,arguments)}))},resetForm:function(e){this.$refs[e].resetFields(),this.dialogConf.isShow=!1}}},d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("dialog-container",{attrs:{"dialog-conf":e.dialogConf}},[a("el-row",{staticClass:"app-form plat-form",attrs:{gutter:e.$store.state.config.dialogFormGutterWidth}},[a("el-form",{ref:"rhForm",attrs:{model:e.sendData,"label-position":e.$store.state.config.labelPosition,rules:e.rules,"label-width":"125px"},nativeOn:{submit:function(e){e.preventDefault()}}},[a("el-col",{attrs:{span:16,offset:3}},[a("el-form-item",{attrs:{label:"用户名",prop:"name"}},[a("el-input",{model:{value:e.sendData.name,callback:function(t){e.$set(e.sendData,"name",t)},expression:"sendData.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"账号",prop:"account"}},[a("el-input",{model:{value:e.sendData.account,callback:function(t){e.$set(e.sendData,"account",t)},expression:"sendData.account"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"归属分组",prop:"group"}},[a("el-input",{attrs:{disabled:""},model:{value:e.sendData.group,callback:function(t){e.$set(e.sendData,"group",t)},expression:"sendData.group"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"密码",prop:"password"}},[a("el-input",{model:{value:e.sendData.password,callback:function(t){e.$set(e.sendData,"password",t)},expression:"sendData.password"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"确认密码",prop:"pwd"}},[a("el-input",{model:{value:e.sendData.pwd,callback:function(t){e.$set(e.sendData,"pwd",t)},expression:"sendData.pwd"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"备注",prop:"remark"}},[a("el-input",{attrs:{type:"textarea",rows:6},model:{value:e.sendData.remark,callback:function(t){e.$set(e.sendData,"remark",t)},expression:"sendData.remark"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:24}},[a("div",{staticClass:"app-submit-btns"},[a("el-form-item",{staticClass:"app-text-center"},[a("el-button",{on:{click:function(t){return e.submitForm("rhForm")}}},[e._v("\n                            保存\n                        ")]),e._v(" "),a("el-button",{staticClass:"resetForm",on:{click:function(t){return e.resetForm("rhForm")}}},[e._v("\n                            返回\n                        ")])],1)],1)])],1)],1)],1)},staticRenderFns:[]};var p={name:"UserMange",components:{UserForm:a("VU/8")(c,d,!1,function(e){a("CpF+")},"data-v-03138982",null).exports},data:function(){return{utils:{left:[{label:"用户名",slot:"query-1"},{label:"归属分组",slot:"query-2"},{slot:"query"}],cols:[24]},queryData:{pageNum:1,pageSize:10,name:null,group:"下拉框"},table:{data:[],total:0,tableType:1,cols:[{key:"序号",label:"序号"},{key:"用户",label:"用户"},{key:"账号",label:"账号"},{key:"归属分组",label:"归属分组"},{key:"备注",label:"备注"},{key:"operation",label:"操作"}]}}},created:function(){this.init()},methods:{init:function(){this.table.data=[{"序号":1,"用户":"admin","账号":"admin","归属分组":"成都片区","备注":"该片区使用"}]},handleCurrentChange:function(e){this.queryData.pageNum=e,this.init()},handleDelete:function(e){var t=this;e.id;this.$confirm("此操作将会删除此条数据,是否继续?","提示",{cancelButtonText:"取消",confirmButtonText:"确定",type:"warning",center:!0,customClass:"bg-warning"}).then(l()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e,t)}))).catch(function(){})},showDialog:function(e){var t=e.type,a=e.id,n=e.data;"add"===t?this.$refs.UserForm.init({type:t,title:"新增用户"}):"update"===t&&this.$refs.UserForm.init({type:t,id:a,data:n,title:"修改用户"})}}},m={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content_box"},[a("app-table-utils",{attrs:{utils:e.utils}},[a("el-input",{attrs:{slot:"query-1"},slot:"query-1",model:{value:e.queryData.name,callback:function(t){e.$set(e.queryData,"name",t)},expression:"queryData.name"}}),e._v(" "),a("el-input",{attrs:{slot:"query-2",disabled:""},slot:"query-2",model:{value:e.queryData.group,callback:function(t){e.$set(e.queryData,"group",t)},expression:"queryData.group"}}),e._v(" "),a("el-button",{staticClass:"queryBtn",attrs:{slot:"query"},slot:"query"},[e._v("查询")]),e._v(" "),a("el-button",{staticClass:"queryBtn",attrs:{slot:"query"},on:{click:function(t){return e.showDialog({type:"add"})}},slot:"query"},[e._v("添加用户")])],1),e._v(" "),a("div",{staticClass:"table-line"}),e._v(" "),a("app-tables",{attrs:{table:e.table},on:{pageChange:e.handleCurrentChange},scopedSlots:e._u([{key:"column",fn:function(t){var n=t.data;return["operation"===n.col.key?[a("el-button",{attrs:{type:"text"},on:{click:function(t){return e.showDialog({type:"update",data:n.row})}}},[e._v("修改")]),e._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(t){return e.handleDelete(n.row)}}},[e._v("删除")])]:[e._v(e._s(n.row[n.col.key]||"-"))]]}}])}),e._v(" "),a("user-form",{ref:"UserForm",on:{refresh:function(t){return e.init()}}})],1)},staticRenderFns:[]},f=a("VU/8")(p,m,!1,null,null,null);t.default=f.exports}});
//# sourceMappingURL=10.d648b552b290aabc54bf.js.map