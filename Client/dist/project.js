webpackJsonp([1],{295:function(t,e,a){(function(t,e,o){var r=a(7),n=a(30),i=a(31),s=a(81);t.remove("teamId"),t.remove("teamName"),t.remove("versionId"),t.remove("versionName"),t.remove("versionDis");new e({el:"#app",data:{showAdd:!1,showTeam:!1,name:"",dis:"",addPending:!1,showApply:!1,tab:"project"},store:s,components:{mainnav:r,projectlist:n,teamlist:i},methods:{addProject:function(){if(!this.name)return void this.$message.error("请输入名称");var t=this;this.addPending=!0,s.dispatch("addProject",{name:this.name,dis:this.dis}).then(function(e){t.addPending=!1,t.name="",t.dis="",200==e.code?(o.notify("创建成功",1),t.showAdd=!1):o.notify(e.msg,0)})},addTeam:function(){if(!this.name)return void this.$message.error("请输入名称");var t=this;this.addPending=!0,s.dispatch("addTeam",{name:this.name,dis:this.dis}).then(function(e){t.addPending=!1,t.name="",t.dis="",200==e.code?(o.notify("创建成功",1),t.showTeam=!1):o.notify(e.msg,0)})},importProject:function(){o.showBox(this,"importProject")},handleApply:function(t,e){o.startHud(),s.dispatch("handleApply",{item:t,state:e}).then(function(t){o.stopHud(),200!=t.code&&o.notify(t.msg,0)})}},created:function(){var t=this;s.dispatch("getList").then(function(){o.stopLoading(),s.state.arrApply.length>0&&(t.showApply=!0)}).catch(function(t){o.notify(t,0)})}});o.ready(function(){o.startLoading()})}).call(e,a(3),a(2),a(0))},81:function(t,e,a){(function(e,a){t.exports=new e.Store({state:{projectCreateList:[],projectJoinList:[],teamCreateList:[],teamJoinList:[],projectCreateSort:0,projectJoinSort:0,teamCreateSort:0,teamJoinSort:0,arrApply:[]},getters:{},mutations:{addProjectCreate:function(t,e){if(0==t.projectCreateSort)t.projectCreateList.unshift(e);else for(var a=0;;a++)if(a==t.projectCreateList.length||t.projectCreateList[a].name.toLowerCase()>=e.name.toLowerCase()){t.projectCreateList.splice(a,0,e);break}},addTeamCreate:function(t,e){if(0==t.teamCreateSort)t.teamCreateList.unshift(e);else for(var a=0;;a++)if(a==t.teamCreateList.length||t.teamCreateList[a].name.toLowerCase()>=e.name.toLowerCase()){t.teamCreateList.splice(a,0,e);break}},addTeamJoin:function(t,e){if(0==t.teamJoinSort)t.teamJoinList.unshift(e);else for(var a=0;;a++)if(a==t.teamJoinList.length||t.teamJoinList[a].name.toLowerCase()>=e.name.toLowerCase()){t.teamJoinList.splice(a,0,e);break}},changeProjectSortCreate:function(t,e){0==t.projectCreateSort?t.projectCreateList.sort(function(t,e){return t.createdAt>e.createdAt?-1:t.createdAt<e.createdAt?1:0}):t.projectCreateList.sort(function(t,e){return t.name.toLowerCase()<e.name.toLowerCase()?-1:t.name.toLowerCase()>e.name.toLowerCase()?1:0})},changeProjectSortJoin:function(t,e){0==t.projectJoinSort?t.projectJoinList.sort(function(t,e){return t.createdAt>e.createdAt?-1:t.createdAt<e.createdAt?1:0}):t.projectJoinList.sort(function(t,e){return t.name.toLowerCase()<e.name.toLowerCase()?-1:t.name.toLowerCase()>e.name.toLowerCase()?1:0})},changeTeamSortCreate:function(t,e){0==t.teamCreateSort?t.teamCreateList.sort(function(t,e){return t.createdAt>e.createdAt?-1:t.createdAt<e.createdAt?1:0}):t.teamCreateList.sort(function(t,e){return t.name.toLowerCase()<e.name.toLowerCase()?-1:t.name.toLowerCase()>e.name.toLowerCase()?1:0})}},actions:{addProject:function(t,e){return a.post("/project/create",{name:e.name,dis:e.dis}).then(function(e){return 200==e.code&&t.commit("addProjectCreate",e.data),e})},addTeam:function(t,e){return a.post("/team/save",{name:e.name,dis:e.dis}).then(function(e){return 200==e.code&&t.commit("addTeamCreate",e.data),e})},handleApply:function(t,e){return a.put("/user/handleapply",{apply:e.item._id,state:e.state}).then(function(e){200==e.code?"object"==typeof e.data?(e.item.handle=1,t.commit("addTeamJoin",e.data)):e.item.handle=2:e.item.handle=3})},getList:function(t){return Promise.all([a.get("/project/list",{}),a.get("/user/applylist",{})]).then(function(e){var a=e[0],o=e[1];if(200!=a.code)throw a.msg;for(var r=0;r<a.data.project.create.length;r++)t.state.projectCreateList.push(a.data.project.create[r]);for(var r=0;r<a.data.project.join.length;r++)t.state.projectJoinList.push(a.data.project.join[r]);for(var r=0;r<a.data.team.create.length;r++)t.state.teamCreateList.push(a.data.team.create[r]);for(var r=0;r<a.data.team.join.length;r++)t.state.teamJoinList.push(a.data.team.join[r]);if(200!=o.code)throw o.msg;o.data.forEach(function(t){t.handle=0}),t.state.arrApply=o.data})}}})}).call(e,a(18),a(4))}},[295]);