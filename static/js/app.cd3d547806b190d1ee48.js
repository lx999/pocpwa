webpackJsonp([1],[,,,,,function(t,e,s){"use strict";var a=s(6),i=s.n(a),n=s(2);e.a={name:"app",methods:{showConnexionBar:function(t){this.$localStorage.set("online",!1),this.connexionDown=!0,window.scrollTo(0,0)},hideConnexionBar:function(t){this.$localStorage.set("online",!0),this.connexionDown=!1},showServerBar:function(){this.serverDown=!0,window.scrollTo(0,0)},hideServerBar:function(){this.serverDown=!1},updateClassement:function(){var t=this;this.$http.get("https://qlf-www-lfp-fr.aw.atos.net/pwa/data/rankings.php").then(function(e){t.$store.commit("setClassements",e.data),t.$localStorage.set("classements",i()(e.data))},function(e){null!==t.$localStorage.get("classements")&&t.$store.commit("setClassements",JSON.parse(t.$localStorage.get("classements"))),console.log("error call data")})},updateMatche:function(){var t=this;this.$http.get("https://qlf-www-lfp-fr.aw.atos.net/pwa/data/matches.php").then(function(e){t.$store.commit("setMatches",e.data),t.$localStorage.set("matches",i()(e.data)),t.notifications=e.data},function(e){null!==t.$localStorage.get("matches")&&t.$store.commit("setMatches",JSON.parse(t.$localStorage.get("matches"))),console.log("error call data")})},updateClassements:n(function(){this.updateClassement()},1e4),updateMatches:n(function(){this.updateMatche()},1e4),checkNotif:n(function(){for(var t in this.notifications.notifications){var e=this.notifications.notifications[t];e.id>this.$localStorage.get("lastPushId")&&(console.log(this.$localStorage.get("lastPushId")),this.showPush(e))}},1e3),showPush:function(t){this.$localStorage.set("lastPushId",t.id),"BUT"===t.type&&this.showBut({title:t.title,message:t.message}),"JAUNE"===t.type&&this.showCartonJaune({title:t.title,message:t.message}),"ROUGE"===t.type&&this.showCartonRouge({title:t.title,message:t.message}),"INFO"===t.type&&this.showInfo({title:t.title,message:t.message})}},data:function(){return{connexionDown:!1,serverDown:!1,notifications:[],notification:""}},created:function(){this.updateMatche(),this.updateClassement(),null===this.$localStorage.get("lastPushId")&&this.$localStorage.set("lastPushId",0),this.checkNotif()},mounted:function(){console.log("app.vue mounted"),window.addEventListener("online",this.hideConnexionBar),window.addEventListener("offline",this.showConnexionBar),window.addEventListener("online",this.checkNotif),navigator.onLine||this.showConnexionBar()},watch:{pushes:function(){this.checkNotif()},notif:function(){var t=this;self.addEventListener("notificationclick",function(e){var s=e.notification,a=e.action,i=s.data.link;"close"!==a&&i&&t.openWindow(i),s.close(),console.log("notificationclick action is",a)})},matches:function(){this.updateMatches()},classements:function(){this.updateClassements()}},notifications:{showBut:{type:"success",timeout:1e4},showCartonJaune:{type:"warn",timeout:1e4},showCartonRouge:{type:"error",timeout:1e4},showInfo:{type:"info",timeout:1e4}}}},,function(t,e,s){"use strict";var a=s(2);e.a={name:"matchs",data:function(){return{matches:[],match:"",id:""}},methods:{onSwipeLeft:function(){this.$router.push("classements")},onSwipeRight:function(){this.$router.push("classements")},toComment:function(t){this.$localStorage.set("id",t),this.$router.push("Commentaires")},getLogoClub:function(t){return"static/img/clubs/"+t+".svg"},update:function(){this.matches=this.$store.state.matches},updateMatches:a(function(){this.update()},1e3)},watch:{matches:function(){this.updateMatches()}},created:function(){window.addEventListener("online",this.updateMatches)},mounted:function(){this.update(),this.update()}}},function(t,e,s){"use strict";var a=s(2);e.a={name:"classements",data:function(){return{classements:"",classement1s:[],classement2s:[],classement:""}},methods:{onSwipeRight:function(){this.$router.push("/")},onSwipeLeft:function(){this.$router.push("/")},getLogoClub:function(t){return"static/img/clubs/"+t+".svg"},update:function(){this.classements=this.$store.state.classements,this.classement1s=this.classements.ligue1.classement,this.classement2s=this.classements.ligue2.classement},updateClassements:a(function(){this.update()},1e3)},watch:{classements:function(){this.updateClassements()}},created:function(){window.addEventListener("online",this.updateClassements)},mounted:function(){this.update()}}},function(t,e,s){"use strict";var a=s(6),i=s.n(a),n=s(2);e.a={name:"commentaires",data:function(){return{commentaires:"",commentaire:""}},methods:{updateCommentaire:function(){var t=this,e=this.$localStorage.get("id");e&&this.$http.get("https://qlf-www-lfp-fr.aw.atos.net/pwa/data/comments.php?id="+e).then(function(e){t.commentaires=e.data,t.$localStorage.set("commentaires",i()(e.data))},function(t){console.log("error call data")})},updateCommentaires:n(function(){this.updateCommentaire()},1e3)},watch:{commentaires:function(){this.updateCommentaires()}},created:function(){window.addEventListener("online",this.updateCommentaires)},mounted:function(){this.updateCommentaire(),console.log("commentaires mounted")}}},function(t,e,s){"use strict";function a(t){var e=t.title,s=t.message,a=t.type,i=t.timeout,n=t.cb;return _.a[a](s,e,i,n)}Object.defineProperty(e,"__esModule",{value:!0});var i=s(3),n=s(13),c=s(19),o=s(30),r=s.n(o),l=s(31),m=s(33),u=s.n(m),d=s(34),h=(s.n(d),s(35)),p=s.n(h),v=s(36),g=s.n(v),_=s(37),f=s(38);i.default.config.productionTip=!1,i.default.use(l.a),i.default.use(r.a),i.default.use(u.a),i.default.use(p.a),i.default.use(f.a);var w={success:"success",error:"error",info:"info",warn:"warn"};_.a.init({types:w});var C={success:a,error:a,info:a,warn:a};i.default.use(g.a,C);var y=new f.a.Store({state:{matches:[],classements:[]},mutations:{setMatches:function(t,e){t.matches=e},setClassements:function(t,e){t.classements=e}}}),S=s(39);i.default.use(S,{name:"v-touch"}),S.config.swipe={direction:"horizontal"},new i.default({el:"#app",router:c.a,store:y,template:"<App/>",components:{App:n.a}})},,,function(t,e,s){"use strict";function a(t){s(14)}var i=s(5),n=s(18),c=s(1),o=a,r=c(i.a,n.a,!1,o,null,null);e.a=r.exports},function(t,e){},,,,function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app-viewport",attrs:{id:"app"}},[s("v-tabs",{attrs:{"icons-and-text":"",centered:"",color:"blue-grey darken-1"}},[s("v-tabs-slider",{staticStyle:{width:"100%"},attrs:{color:"white"}}),t._v(" "),s("v-tab",{staticStyle:{color:"white !important"},attrs:{to:"/"}},[t._v("\n      Matchs\n      "),s("v-icon",{attrs:{color:"white"}},[t._v("access_time")])],1),t._v(" "),s("v-tab",{staticStyle:{color:"white !important"},attrs:{to:"/classements"}},[t._v("\n      Classement\n      "),s("v-icon",{attrs:{color:"white"}},[t._v("start")])],1)],1),t._v(" "),s("img",{staticStyle:{position:"absolute",top:"15px",height:"40px",width:"40px"},attrs:{src:"static/img/icons/android-chrome-200x200_LFP.png"}}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.connexionDown,expression:"connexionDown"}],ref:"connexionBar",staticClass:"md-layout",staticStyle:{"background-color":"#FFF59D"},attrs:{id:"connexionBar"}},[s("div",{staticClass:"md-layout-item"},[s("md-icon",{staticClass:"md-primary"},[t._v("warning")])],1),t._v(" "),s("div",{staticClass:"md-layout-item",attrs:{"md-vertical-align":"center"}},[t._v("Vous êtes hors connexion ...")])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.serverDown,expression:"serverDown"}],ref:"serverBar",staticClass:"md-layout",staticStyle:{"background-color":"#FFF59D"},attrs:{id:"serverBar"}},[s("div",{staticClass:"md-layout-item"},[s("md-icon",{staticClass:"md-primary"},[t._v("warning")])],1),t._v(" "),s("div",{staticClass:"md-layout-item",attrs:{"md-vertical-align":"center"}},[t._v("Serveur injoignable ...")])]),t._v(" "),s("div",{staticClass:"simple"},[t._v("\n    17h30\n  ")]),t._v(" "),s("main",[s("router-view")],1)],1)},i=[],n={render:a,staticRenderFns:i};e.a=n},function(t,e,s){"use strict";var a=s(3),i=s(20),n=s(21),c=s(24),o=s(27);a.default.use(i.a),e.a=new i.a({routes:[{path:"/",name:"Matchs",component:n.a},{path:"/classements",name:"Classements",component:c.a},{path:"/commentaires",name:"Commentaires",component:o.a}]})},,function(t,e,s){"use strict";function a(t){s(22)}var i=s(7),n=s(23),c=s(1),o=a,r=c(i.a,n.a,!1,o,null,null);e.a=r.exports},function(t,e){},function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-touch",{on:{swipeleft:t.onSwipeLeft,swiperight:t.onSwipeRight}},[s("div",[t.matches.updated?s("span",{staticClass:"updated"},[t._v("MAJ:"+t._s(t.matches.updated.substring(11,13))+"h"+t._s(t.matches.updated.substring(14,16)))]):t._e(),t._v(" "),t._l(t.matches.matches,function(e){return"L"==e.statut?s("md-toolbar",{key:e.id,staticClass:"match_Live"},[s("div",{staticStyle:{width:"100%",height:"100%"},on:{click:function(s){t.toComment(e.id)}}},[s("img",{staticClass:"logo",attrs:{src:t.getLogoClub(e.recevant.slug)}}),t._v(" "),s("span",{staticClass:"score",staticStyle:{color:"#ff1e00"}},[t._v(t._s(e.recevant.score))]),t._v(" "),s("span",{staticClass:"time",staticStyle:{color:"#ff1e00"}},[t._v(t._s(e.time))]),t._v(" "),s("span",{staticClass:"score",staticStyle:{color:"#ff1e00"}},[t._v(t._s(e.visiteur.score))]),t._v(" "),s("img",{staticClass:"logo",attrs:{src:t.getLogoClub(e.visiteur.slug)}}),t._v(" "),s("div",{staticClass:"ligue"},[t._v("Ligue"+t._s(e.ligue))])])]):t._e()}),t._v(" "),s("br"),t._v(" "),t._l(t.matches.matches,function(e){return"P"==e.statut?s("md-toolbar",{key:e.id,staticClass:"match"},[s("div",{staticStyle:{width:"100%",height:"100%"},on:{click:function(s){t.toComment(e.id)}}},[s("img",{staticClass:"logo",attrs:{src:t.getLogoClub(e.recevant.slug)}}),t._v(" "),s("span",{staticClass:"temp"},[t._v(t._s(e.time))]),t._v(" "),s("img",{staticClass:"logo",attrs:{src:t.getLogoClub(e.visiteur.slug)}}),t._v(" "),s("div",{staticClass:"ligue"},[t._v("Ligue"+t._s(e.ligue))])])]):t._e()}),t._v(" "),s("br"),t._v(" "),t._l(t.matches.matches,function(e){return"J"==e.statut?s("md-toolbar",{key:e.id,staticClass:"match"},[s("div",{staticStyle:{width:"100%",height:"100%"},on:{click:function(s){t.toComment(e.id)}}},[s("img",{staticClass:"logo_joue",attrs:{src:t.getLogoClub(e.recevant.slug)}}),t._v(" "),s("span",{staticClass:"score"},[t._v(t._s(e.recevant.score))]),t._v(" "),s("span",{staticClass:"time"},[t._v("-")]),t._v(" "),s("span",{staticClass:"score"},[t._v(t._s(e.visiteur.score))]),t._v(" "),s("img",{staticClass:"logo_joue",attrs:{src:t.getLogoClub(e.visiteur.slug)}}),t._v(" "),s("div",{staticClass:"ligue"},[t._v("Ligue"+t._s(e.ligue))])])]):t._e()})],2)])},i=[],n={render:a,staticRenderFns:i};e.a=n},function(t,e,s){"use strict";function a(t){s(25)}var i=s(8),n=s(26),c=s(1),o=a,r=c(i.a,n.a,!1,o,null,null);e.a=r.exports},function(t,e){},function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-touch",{on:{swipeleft:t.onSwipeLeft,swiperight:t.onSwipeRight}},[s("div",[t.classements.updated?s("span",{staticClass:"updated"},[t._v("MAJ:"+t._s(t.classements.updated.substring(11,13))+"h"+t._s(t.classements.updated.substring(14,16)))]):t._e(),t._v(" "),s("br"),t._v(" "),s("div",{staticClass:"classements",staticStyle:{width:"100%"}},t._l(t.classement1s,function(e){return s("div",{staticClass:"classement-item"},[s("div",{staticClass:"position",staticStyle:{width:"5%",display:"table-cell"}},[t._v("\r\n          "+t._s(e.position)+"\r\n        ")]),t._v(" "),s("div",{staticStyle:{width:"5%",display:"table-cell"}},[s("img",{staticClass:"logo_classement",attrs:{src:t.getLogoClub(e.slug)}})]),t._v(" "),s("div",{staticStyle:{width:"30%",display:"table-cell","text-align":"center","vertical-align":"middle"}},[t._v("\r\n          "+t._s(e.club)+"\r\n        ")]),t._v(" "),s("div",{staticStyle:{width:"10%",display:"table-cell","font-size":"calc(12px + 0.6vw + 0.4vh)"}},[t._v("\r\n          "+t._s(e.points)+"\r\n        ")]),t._v(" "),s("div",{staticStyle:{width:"10%",display:"table-cell"}},[t._v("\r\n          "+t._s(e.joues)+"\r\n        ")]),t._v(" "),s("div",{staticStyle:{width:"10%",display:"table-cell"}},[t._v("\r\n          "+t._s(e.diff)+"\r\n        ")])])}))])])},i=[],n={render:a,staticRenderFns:i};e.a=n},function(t,e,s){"use strict";function a(t){s(28)}var i=s(9),n=s(29),c=s(1),o=a,r=c(i.a,n.a,!1,o,null,null);e.a=r.exports},function(t,e){},function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.commentaires.updated?s("span",{staticClass:"updated"},[t._v("MAJ:"+t._s(t.commentaires.updated.substring(11,13))+"h"+t._s(t.commentaires.updated.substring(14,16)))]):t._e(),t._v(" "),"P"==t.commentaires.match.statut?s("md-toolbar",{key:t.commentaires.match.id,staticClass:"match"},[s("div",{staticStyle:{width:"100%"}},[s("div",{staticClass:"nom",staticStyle:{width:"40%"}},[s("span",{staticClass:"classement"},[t._v("("+t._s(t.commentaires.match.recevant.classement)+")")]),t._v(" "+t._s(t.commentaires.match.recevant.club)+"\n          ")]),t._v(" "),s("div",{staticClass:"temp_commentaires"},[t._v(t._s(t.commentaires.match.time))]),t._v(" "),s("div",{staticClass:"nom",staticStyle:{width:"40%"}},[t._v(t._s(t.commentaires.match.visiteur.club)+" \n            "),s("span",{staticClass:"classement"},[t._v("("+t._s(t.commentaires.match.visiteur.classement)+")")])]),t._v(" "),s("div",{staticClass:"ligue_commentaires",staticStyle:{width:"100%"}},[t._v("Ligue"+t._s(t.commentaires.match.ligue))])])]):"J"==t.commentaires.match.statut||"L"==t.commentaires.match.statut?s("md-toolbar",{key:t.commentaires.match.id,staticClass:"match"},[s("div",{staticClass:"nom",staticStyle:{width:"35%"}},[s("span",{staticClass:"classement"},[t._v("("+t._s(t.commentaires.match.recevant.classement)+")")]),t._v("\n         "+t._s(t.commentaires.match.recevant.club)+"\n      ")]),t._v(" "),s("div",{staticStyle:{float:"left",width:"30%",display:"table-cell",margin:"auto"}},[s("span",{staticClass:"score_commentaires"},[t._v(t._s(t.commentaires.match.recevant.score))]),t._v(" "),s("span",{staticClass:"time"},[t._v("-")]),t._v(" "),s("span",{staticClass:"score_commentaires"},[t._v(t._s(t.commentaires.match.visiteur.score))])]),t._v(" "),s("div",{staticClass:"nom",staticStyle:{width:"35%"}},[t._v(t._s(t.commentaires.match.visiteur.club)+" \n        "),s("span",{staticClass:"classement"},[t._v("("+t._s(t.commentaires.match.visiteur.classement)+")")])]),t._v(" "),s("div",{staticStyle:{width:"100%"}},[s("div",{staticStyle:{width:"40%",float:"left"}},[t._l(parseInt(t.commentaires.match.recevant.nbRed),function(t){return s("img",{staticStyle:{width:"15px",height:"15px"},attrs:{src:"static/img/commentairesIcons/rouge.png"}})}),t._v(" "),t._l(parseInt(t.commentaires.match.recevant.nbYellow),function(t){return s("img",{staticStyle:{width:"15px",height:"15px"},attrs:{src:"static/img/commentairesIcons/jaune.png"}})})],2),t._v(" "),s("div",{staticClass:"ligue_commentaires",staticStyle:{width:"20%",float:"left"}},[t._v("  Ligue"+t._s(t.commentaires.match.ligue)+" ")]),t._v(" "),s("div",{staticStyle:{width:"40%",float:"left"}},[t._l(parseInt(t.commentaires.match.visiteur.nbRed),function(t){return s("img",{staticStyle:{width:"15px",height:"15px"},attrs:{src:"static/img/commentairesIcons/rouge.png"}})}),t._v(" "),t._l(parseInt(t.commentaires.match.visiteur.nbYellow),function(t){return s("img",{staticStyle:{width:"15px",height:"15px"},attrs:{src:"static/img/commentairesIcons/jaune.png"}})})],2)])]):t._e(),t._v(" "),s("div",[s("table",{staticStyle:{border:"none",cellspacing:"0"}},[s("tbody",t._l(t.commentaires.comments,function(e){return s("tr",{staticStyle:{height:"80px",width:"100%"}},["But"===e.type?s("td",{staticStyle:{"background-color":"rgb(102, 153, 115)"},attrs:{width:"2%"}}):s("td",{staticStyle:{"background-color":"rgb(194, 194, 214)"},attrs:{width:"2%"}}),t._v(" "),s("td",{staticStyle:{"background-color":"rgb(224, 224, 235)",position:"relative"},attrs:{width:"18%"}},[!e.minute||"But"!==e.type&&"CRg"!==e.type&&"CJn"!==e.type&&"Rpl"!==e.type&&"Pen"!==e.type&&"Crn"!==e.type&&"CpF"!==e.type?t._e():s("div",{staticClass:"minute"},[t._v(t._s(e.minute)+"'")]),t._v(" "),e.minute&&"But"!==e.type&&"CRg"!==e.type&&"CJn"!==e.type&&"Rpl"!==e.type&&"Pen"!==e.type&&"Crn"!==e.type&&"CpF"!==e.type?s("div",{staticClass:"minute_middle"},[t._v(t._s(e.minute))]):t._e(),t._v(" "),s("div",{staticClass:"type"},["But"===e.type?s("img",{staticStyle:{width:"20px",height:"20px"},attrs:{src:"static/img/commentairesIcons/ball.png"}}):"CRg"===e.type?s("img",{staticStyle:{width:"20px",height:"20px"},attrs:{src:"static/img/commentairesIcons/rouge.png"}}):"CJn"===e.type?s("img",{staticStyle:{width:"20px",height:"20px"},attrs:{src:"static/img/commentairesIcons/jaune.png"}}):"Rpl"===e.type?s("img",{staticStyle:{width:"20px",height:"20px"},attrs:{src:"static/img/commentairesIcons/change.png"}}):"Pen"===e.type?s("img",{staticStyle:{width:"20px",height:"20px"},attrs:{src:"static/img/commentairesIcons/penalty.png"}}):"Crn"===e.type?s("img",{staticStyle:{width:"20px",height:"20px"},attrs:{src:"static/img/commentairesIcons/corner.png"}}):"CpF"===e.type?s("img",{staticStyle:{width:"20px",height:"20px"},attrs:{src:"static/img/commentairesIcons/coup_franc.png"}}):t._e()])]),t._v(" "),s("td",{attrs:{width:"80%"}},["But"===e.type||"Pen"===e.type?s("div",{staticClass:"text",staticStyle:{"font-weight":"bold","text-align":"left"}},[t._v(t._s(e.text))]):s("div",{staticClass:"text",staticStyle:{"font-weight":"normal","text-align":"left"}},[t._v(t._s(e.text))])])])}))])])],1)},i=[],n={render:a,staticRenderFns:i};e.a=n},,,function(t,e){},,function(t,e){}],[10]);
//# sourceMappingURL=app.cd3d547806b190d1ee48.js.map