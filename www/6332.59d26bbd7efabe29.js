"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6332],{6332:(A,d,s)=>{s.r(d),s.d(d,{ChatPageModule:()=>Z});var h=s(822),c=s(6814),g=s(95),i=s(7027),p=s(7991),u=s(5861),n=s(6689),m=s(1786),_=s(717);let f=(()=>{var t;class r{constructor(){}ngOnInit(){}}return(t=r).\u0275fac=function(o){return new(o||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-chat-box"]],inputs:{chat:"chat",current_user_id:"current_user_id"},decls:9,vars:9,consts:[["lines","none"],[1,"ion-text-wrap",3,"slot"],["name","checkmark-done-outline",3,"color"]],template:function(o,e){1&o&&(n.TgZ(0,"ion-item",0)(1,"ion-label",1)(2,"ion-text"),n._uU(3),n.qZA(),n.TgZ(4,"ion-note")(5,"small"),n._uU(6),n.ALo(7,"date"),n.qZA(),n._UZ(8,"ion-icon",2),n.qZA()()()),2&o&&(n.Tol((null==e.chat?null:e.chat.sender)!=e.current_user_id?"sender":"user"),n.xp6(1),n.Q6J("slot",(null==e.chat?null:e.chat.sender)==e.current_user_id?"end":"start"),n.xp6(2),n.Oqu(null==e.chat?null:e.chat.message),n.xp6(3),n.Oqu(n.xi3(7,6,null==e.chat||null==e.chat.createdAt?null:e.chat.createdAt.toDate(),"HH:mm")),n.xp6(2),n.Q6J("color",(null==e.chat?null:e.chat.sender)==e.current_user_id?"light":"primary"))},dependencies:[i.gu,i.Ie,i.Q$,i.uN,i.yW,c.uU],styles:['ion-item[_ngcontent-%COMP%]{--background: transparent;--padding-start: 8px;--padding-end: 0px;--ion-safe-area-left: 0px;--min-height: 32px;--border-width: 0}ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{position:relative;border-radius:12px;padding:4px 8px;margin-top:12px;max-width:70%;min-width:50%}ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{font-weight:400;font-size:.9rem}ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]:after{content:"";width:52px;height:12px;display:inline-block;vertical-align:top;visibility:hidden;font-size:.75rem}ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]{position:absolute;display:flex;right:0;bottom:0;padding:4px 8px 4px 4px;line-height:16px;pointer-events:auto;color:var(--ion-color-medium)}.sender[_ngcontent-%COMP%]:after{content:"";position:absolute;border:0 solid transparent;border-top-color:transparent;border-top-style:solid;border-top-width:0px;border-top:9px solid var(--ion-color-light);border-radius:0 20px;width:15px;height:30px;transform:rotate(112deg);bottom:-4px;left:-4px}.sender[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin-left:8px;background-color:var(--ion-color-light)}.sender[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]:after{width:72px!important}.sender[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{margin-right:2px;line-height:16px}.sender[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:16px}.user[_ngcontent-%COMP%]:after{content:"";position:absolute;border:0 solid transparent;border-bottom-color:transparent;border-bottom-style:solid;border-bottom-width:0px;border-bottom:9px solid var(--ion-color-primary);border-radius:20px 0;width:15px;height:30px;transform:rotate(50deg);bottom:0;right:0}.user[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{background-color:var(--ion-color-primary);color:#fff}.user[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]:after{width:72px!important}.user[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{margin-right:2px;line-height:16px;color:var(--ion-color-dark)}.user[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:16px}']}),r})();function C(t,r){if(1&t&&n._UZ(0,"app-empty-screen",10),2&t){const a=n.oxw();n.Q6J("model",a.model)}}function P(t,r){if(1&t&&(n.TgZ(0,"ion-item-group",14),n._UZ(1,"app-chat-box",15),n.qZA()),2&t){const a=r.$implicit,o=n.oxw(3);n.xp6(1),n.Q6J("chat",a)("current_user_id",o.chatService.currentUserId)}}function b(t,r){if(1&t&&(n.TgZ(0,"ion-list",12),n.YNc(1,P,2,2,"ion-item-group",13),n.qZA()),2&t){const a=n.oxw().ngIf;n.xp6(1),n.Q6J("ngForOf",a)}}function M(t,r){if(1&t&&(n.ynx(0),n.YNc(1,b,2,1,"ion-list",11),n.BQk()),2&t){const a=r.ngIf;n.xp6(1),n.Q6J("ngIf",(null==a?null:a.length)>0)}}function x(t,r){if(1&t){const a=n.EpF();n.TgZ(0,"ion-fab-button",16),n.NdJ("click",function(){n.CHM(a);const e=n.oxw();return n.KtG(e.sendMessage())}),n._UZ(1,"ion-icon",17),n.qZA()}}function O(t,r){1&t&&(n.TgZ(0,"ion-fab-button",18),n._UZ(1,"ion-spinner",19),n.qZA())}const v=[{path:"",component:(()=>{var t;class r{constructor(o,e,l){this.route=o,this.navCtrl=e,this.chatService=l,this.model={icon:"chatbubbles-outline",title:"No Conversation",color:"danger"}}ngOnInit(){const o=this.route.snapshot.queryParams;console.log("data: ",o),o?.name&&(this.name=o.name);const e=this.route.snapshot.paramMap.get("id");console.log("check id: ",e),e?(this.id=e,this.chatService.getChatRoomMessages(this.id),this.chats=this.chatService.selectedChatRoomMessages,console.log(this.chats)):this.navCtrl.back()}ngAfterViewChecked(){this.scrollToBottom()}scrollToBottom(){console.log("scroll bottom"),this.chats&&this.content.scrollToBottom(500)}sendMessage(){var o=this;return(0,u.Z)(function*(){if(o.message&&""!=o.message?.trim())try{o.isLoading=!0,yield o.chatService.sendMessage(o.id,o.message),o.message="",o.isLoading=!1,o.scrollToBottom()}catch(e){o.isLoading=!1,console.log(e)}})()}}return(t=r).\u0275fac=function(o){return new(o||t)(n.Y36(p.gz),n.Y36(i.SH),n.Y36(m.a))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-chat"]],viewQuery:function(o,e){if(1&o&&n.Gf(i.W2,5),2&o){let l;n.iGM(l=n.CRH())&&(e.content=l.first)}},decls:17,vars:9,consts:[["color","primary"],["slot","start"],["defaultHref","/home"],[3,"model",4,"ngIf"],[4,"ngIf"],["color","light"],["autoGrow","","rows","1","placeholder","Send message",1,"ion-text-center",3,"ngModel","ngModelChange"],["slot","end"],["size","small","color","primary",3,"click",4,"ngIf"],["size","small","color","primary",4,"ngIf"],[3,"model"],["lines","none",4,"ngIf"],["lines","none"],["class","chats-group",4,"ngFor","ngForOf"],[1,"chats-group"],[3,"chat","current_user_id"],["size","small","color","primary",3,"click"],["name","send"],["size","small","color","primary"],["name","crescent","color","white"]],template:function(o,e){if(1&o&&(n.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),n._UZ(3,"ion-back-button",2),n.qZA(),n.TgZ(4,"ion-title"),n._uU(5,"Chat App"),n.qZA()()(),n.TgZ(6,"ion-content"),n.YNc(7,C,1,1,"app-empty-screen",3),n.ALo(8,"async"),n.YNc(9,M,2,1,"ng-container",4),n.ALo(10,"async"),n.qZA(),n.TgZ(11,"ion-footer")(12,"ion-toolbar",5)(13,"ion-textarea",6),n.NdJ("ngModelChange",function(T){return e.message=T}),n.qZA(),n.TgZ(14,"ion-buttons",7),n.YNc(15,x,2,0,"ion-fab-button",8),n.YNc(16,O,2,0,"ion-fab-button",9),n.qZA()()()),2&o){let l;n.xp6(7),n.Q6J("ngIf",0==(null==(l=n.lcZ(8,5,e.chats))?null:l.length)),n.xp6(2),n.Q6J("ngIf",n.lcZ(10,7,e.chats)),n.xp6(4),n.Q6J("ngModel",e.message),n.xp6(2),n.Q6J("ngIf",!e.isLoading),n.xp6(1),n.Q6J("ngIf",e.isLoading)}},dependencies:[c.sg,c.O5,g.JJ,g.On,i.oU,i.Sm,i.W2,i.W4,i.fr,i.Gu,i.gu,i.Ub,i.q_,i.PQ,i.g2,i.wd,i.sr,i.j9,i.cs,_.s,f,c.Ov],styles:["ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{background:transparent}ion-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{padding:0 3px}ion-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-textarea[_ngcontent-%COMP%]{border:1px solid var(--ion-color-medium);border-radius:20px;margin:.5vh 0}"]}),r})()}];let y=(()=>{var t;class r{}return(t=r).\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[p.Bz.forChild(v),p.Bz]}),r})(),Z=(()=>{var t;class r{}return(t=r).\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[c.ez,g.u5,i.Pc,y,h.K]}),r})()}}]);