


(function(A,aN){
var jF={},
AB={};



function cPn(Cr,bow,eF)
{
if(!Cr)
{
return;
}
function showTips(_aoEvent)
{
A.show(A.S("capTip"),true);
}
function hideTips()
{
A.show(A.S("capTip"),false);
}
var Ee=-1;
A.addEvents(Cr,{
keydown:function(_aoEvent)
{
var fZ=_aoEvent.keyCode||_aoEvent.charCode
if(fZ==20)
{
if(Ee==0)
{
showTips(_aoEvent);
Ee=1;
}
else if(Ee==1)
{
hideTips();
Ee=0;
}

}
},
keypress:function(_aoEvent)
{
var fZ=_aoEvent.keyCode||_aoEvent.charCode,
xL=_aoEvent.shiftKey;
if((fZ>=65&&fZ<=90&&!xL)
||(fZ>=97&&fZ<=122&&xL))
{
Ee=1
showTips(_aoEvent);
}
else if((fZ>=97&&fZ<=122&&!xL)||(fZ>=65&&fZ<=90&&xL))
{
Ee=0;
hideTips();
}
else
{
hideTips();
}
},
blur:function()
{
hideTips();
}
});
};
function deb(bFw)
{
var hG=typeof bFw=="string"?[bFw]:bFw;
function fF()
{
if(hG.length)
{
for(var i=0;i<hG.length;i++)
{
cZR(hG[i]);
}
}
}


function cZR(aK)
{
var ye="label_",
fB=A.S(ye+aK),
bI=A.S(aK);
if(!fB||!bI)return;

A.addEvent(bI,"keyup",yK);
A.addEvent(bI,"keydown",yK);
A.addEvent(bI,"input",yK);
A.addEvent(bI,"click",yK);


bI.onfocus=function(){if(aK=="p"){ayO();}yK(this);wM(true)};
bI.onblur=function(){yK(this);wM()};

function wM(asb)
{
fB.style.color=asb?"#ccc":"";

};
function yK()
{
fB.innerHTML=bI.value?"&nbsp;":fB.getAttribute("default_txt");
fB.style.color=bI.value?"":"#ccc";
};
function bwv(o,l)
{
if(o.value)
{
l.innerHTML="&nbsp;";
}
else
{
l.innerHTML=l.getAttribute("default_txt");
}
};
bwv(bI,fB);


setTimeout(function(o,l){
return function(){
bwv(o,l);
}
}(bI,fB),100);
setInterval(function(o,l){
return function(){
bwv(o,l);
}
}(bI,fB),800);
};

fF();
};
function daP(bYa,vf,AG,bZG,gn)
{
var ao=this;

function fF()
{
ao.afJ=cWv(bYa);
ao.drq=bYa;
ao.bdz=vf;
ao.Hv=AG;
ao.cVd=bZG;


for(var i=0;i<AG.length;i++)
{
if(AG[i]==vf.value)
{
vf.style.fontSize=bZG[i];
break;
}
}

A.addEvent(vf,"click",yK);
};
function bYp(cTt)
{

var aMy=0;
var bt=ao.Hv;
for(var i=bt.length;i>0;i--)
{
if(bt[i-1].indexOf(cTt)==0)
{
aMy=i-1
}
}
return aMy;
};
function yK(fx)
{
var pk=ao.drq.value,

bAC=ao.bdz.value,
Jk=fx||event,
bxS=Jk.keyCode==38||Jk.keyCode==40;

if(Jk.type=="click"||bxS)
{
var mL=[],
bt=ao.Hv,
aMy=bYp(bAC);

for(var i=0;i<bt.length;i++)
{
mL.push([
'<div class="auto_item ',aMy==i?'selected auto_select':'','" ',
' alias="',pk,'" domain="',AG[i],'" title="\u4F7F\u7528 ',pk,AG[i],' \u767B\u5F55" ',
' fontsize="',ao.cVd[i],'"',
'>',
'<span class="ico_selected"></span>',AG[i],
'</div>'
].join(""));
}

{
ao.afJ.innerHTML=mL.join("");
}



var bt=ao.afJ.childNodes;

for(var i=0,l=bt.length;i<l;i++)
{
(function(_aoDom,dI){
A.addEvent(_aoDom,"mousedown",function(){
ahc();
ayO();
});
A.addEvent(_aoDom,"mouseover",function(){
awJ(dI);
});
})(bt[i],i);
}

if(Jk.type=="keydown")
{

if(Jk.keyCode==38)
{
if(typeof ao.Xp=="undefined")
{
ao.Xp=bt.length-1;
}
else
{
ao.Xp--;
if(ao.Xp<0)
{
ao.Xp=bt.length-1;
}
}

ahc();
A.preventDefault(Jk);
return false;
}

else if(Jk.keyCode==40)
{
if(typeof ao.Xp=="undefined")
{
ao.Xp=1;
}
else
{
ao.Xp++;
if(ao.Xp>bt.length-1)
{
ao.Xp=0
}
}

ahc();
A.preventDefault(Jk);
return false;
}

else if(Jk.keyCode==13)
{


A.preventDefault(Jk);
}

else if(Jk.keyCode==9)
{


}
}
else
{
ao.show();
}
}


};
function awJ(tw)
{

var bt=ao.afJ.childNodes;
for(var i=0,l=bt.length;i<l;i++)
{
if(tw==i)
{
A.addClass(bt[i],"auto_select");
ao.Xp=i;
}
else
{
A.rmClass(bt[i],"auto_select");
}
}
};
function ahc()
{

var bt=ao.afJ.childNodes,
bpm=bt[ao.Xp],
_sDomain=ao.bdz.value,
aMy=bYp(_sDomain),
bAC="|"+_sDomain,
cRJ=["|",ao.Hv.join("|"),"|"].join("");

if(bpm)
{

if(_sDomain&&(cRJ.indexOf(bAC)>-1))
{
ao.bdz.value=bpm.getAttribute("domain");
ao.bdz.style.fontSize=bpm.getAttribute("fontsize");
}
ao.hide();
gn&&setTimeout(function(){
gn();
});
}
};
function cWv(cRZ)
{
var OA=document.createElement("div");
OA.className="autocomplete";
OA.id="auto_container";

OA.setAttribute("tabindex","-1");
OA.setAttribute("hidefocus","true");
OA.onblur=function()
{
ao.hide();
};
A.show(OA,false);
cRZ.parentNode.appendChild(OA);
return OA;
};

ao.show=function()
{
A.show(ao.afJ,true);
A.setFocus(ao.afJ);
A.addClass(ao.afJ,"login_domains_show");
};
ao.hide=function()
{
A.show(ao.afJ,false);
A.rmClass(ao.afJ,"login_domains_show");
};

fF();
};
function cHL(MW)
{
var Hq=A.S('dialog_wrap'),
bfK=A.S('mask');

if(MW)
{
A.hasClass(Hq,"dropmenu")
&&A.rmClass(Hq,"dropmenu");
!A.hasClass(Hq,"popup")
&&A.addClass(Hq,"popup");
A.addClass(bfK,"mask-open");
A.show(Hq,true);
arZ();
}
else
{
A.show(Hq,false);
A.rmClass(bfK,"mask-open");
}
};
function dBA(MW,afv)
{
var Hq=A.S('dialog_wrap'),
aNz=A.S('login_menu'),
bfK=A.S('mask');

A.rmClass(bfK,"mask-open");
!A.hasClass(afv,"drop")
&&A.addClass(afv,"drop");

if(MW)
{
A.hasClass(Hq,"popup")
&&A.rmClass(Hq,"popup");
!A.hasClass(Hq,"dropmenu")
&&A.addClass(Hq,"dropmenu");

A.show(Hq,true);
}
else
{
A.show(aNz,true);
}

if(!document.onmousedown)
{
document.onmousedown=function(_aoEvent)
{
_aoEvent=_aoEvent||event;
var aZA=_aoEvent.target||_aoEvent.srcElement;
if(A.contains(afv,aZA))
{
return;
}
if(!A.contains(Hq,aZA)&&A.hasClass(Hq,"dropmenu"))
{
A.show(Hq,false);
A.rmClass(Hq,"dropmenu");
A.hasClass(afv,"drop")
&&A.rmClass(afv,"drop");
}
else if(aNz&&aNz.style.display!="none"&&!A.contains(aNz,aZA))
{
A.show(aNz,false);
A.hasClass(afv,"drop")
&&A.rmClass(afv,"drop");
}
};
}
arZ();
};
function dnt(dms,cRY)
{
var ao=this;
ao.cOe=0;
ao.abT=A.getElementsByClassName('slide-ctrl',A.S(dms),'a');
ao.cbf=A.getElementsByClassName('slide-content',A.S(cRY),'div');

function dga(dI)
{
ao.cOe=dI;
jF.sSubType=dI;
for(var i=0;i<ao.abT.length;i++)
{
if(A.hasClass(ao.abT[i],"current"))
{
A.rmClass(ao.abT[i],"current");
A.rmClass(ao.cbf[i],"current");
}
}
if(!A.hasClass(ao.abT[dI],"current"))
{
A.addClass(ao.abT[dI],"current");
A.addClass(ao.cbf[dI],"current");
}
};
function fF()
{
for(var i=0;i<ao.abT.length;i++)
{
(function(dI){
ao.abT[dI].onclick=function()
{
dga(dI);
}
})(i);
}
};
fF();
};




function ajD(dcO,dcK)
{
var dD=document.createElement("img"),
Be=AB.sServerName+"/cgi-bin/getinvestigate?stat=newlogin&log1=#log1#&log2=#log2#&r=#random#";
dD.src=Be.replace("#log1#",dcO).replace("#log2#",dcK).replace("#random#",Math.random());
A.show(dD,false);
document.body.appendChild(dD);
dD=null;
}
function ckr(eDk,ix)
{
var dD=document.createElement("img"),
Be=[AB.sServerName,"/cgi-bin/getinvestigate?stat=loginerr&code=",eDk,"&err=",ix,"&r=",Math.random()].join("");
dD.src=Be;
A.show(dD,false);
document.body.appendChild(dD);
dD=null;
}

function jE(Bs,aSL)
{
jF.btv={
"pt":10,
"qm":20,
"op":30,
"dm":40,
"d2":50
}[AB.sLoginType];
jF.EW=Bs||0;
if(Bs==1)
{

jF.bpJ=1;
}

if(Bs==4&&AB.bUsingPT)
{
aSL==jF.cal&&jF.aND++;
aSL&&(jF.brt=aSL);

ajD([jF.btv+jF.EW,jF.EA,jF.aCi].join(","),[jF.bpJ,jF.brt,jF.aND,jF.bDn].join(","));
}

else if(Bs==5&&AB.bUsingPT)
{
ajD([jF.btv+jF.EW,jF.EA,jF.aCi].join(","),[jF.bpJ,"",jF.aND,jF.bDn].join(","));
}



};

function cWl(gn)
{
if(AB.bUsingPT)
{



setTimeout(function(){
gn&&gn();
},500);
setInterval(function(){
gn&&gn();
},3*60*1000);
}
};

function mR(eEF)
{
var cKW=A.S('uin'),
csm=A.S('domain'),
Zs=A.S('u'),

cgF=A.S('u1'),
bdW="",
pk,_sDomain;

if(csm)
{
pk=cKW.value;
_sDomain=csm.value;
Zs.value=pk?(pk+_sDomain):"";
}
else if(AB.bUsingPT)
{
var bZB=Zs.value;
pk=bZB.split("@")[0];
_sDomain=bZB.split("@")[1];
_sDomain=_sDomain?("@"+_sDomain):"";
bdW=jF.sSubType;
}

if(AB.bUsingPT)
{

jF.EA=pk;
jF.cxL=_sDomain?_sDomain:(/\d+/.test(pk)?"qq.com":"");

if(_sDomain=="@vip.qq.com")
{
jF.aCi="vip";
}
else if(_sDomain=="@foxmail.com")
{
jF.aCi="fox";
}
else if(_sDomain=="@qq.com")
{
jF.aCi="";
}
else
{
jF.aCi=_sDomain||"__noInput__";
}


cgF.value=A.urlReplacer(A.extend(

{
"ss":(A.S('remerber_password')&&A.S('remerber_password').checked)?"1":""
},

eEF?{
"validcnt":jF.aND,
"clientaddr":Zs.value
}:{},

(function(az){
switch(az)
{
case"op":
return({
"sub":bdW 
});
case"dm":
return({



"errtemplate":"dm_loginpage",
"aliastype":"other",
"dmtype":"domain",
"delegate_url":encodeURIComponent(A.S("delegate_url").value),
"s":A.S("s").value,
"loginEntry":A.S("loginEntry").value,
"target":A.S("target").value,
"name":encodeURIComponent(A.S("name").value),
"bcid":A.S("bcid").value,
"token":A.S("token").value
});
default:
return;
}
})(AB.sLoginType)
),cgF.value);
}
return true;
};

function bmI(az)
{
jE(2);

if(AB.bUsingPT)
{

mR(true);
if(az=="addr")
{
avr();
return false;
}


var bBG=A.S("p");
if(bBG.value.length>jF.bZw)
{
jF.bDn=1;
bBG.value=bBG.value.substr(0,jF.bZw);
}

try
{
var aAa=function()
{
if(!ptui_checkValidate())
{

arZ();
}
};


if(!pt.isLoadVC&&!gfT())
{
pt.g_uin="";
ayO();
setTimeout(function()
{
aAa();
},1000);
}
else
{
aAa();
}

}
catch(e)
{

window['bIsAutoLogin']=1;
aDD(false);
}
if(!jF.EA)
{
A.setFocus("uin");
}
jE(3);
return false;
}
else
{
if(A.S("pp"))
{
var bej=window.org_pass=A.S("pp").value,
eS=document.loginform;
if(!bej)
{
avr("\u8BF7\u8F93\u5165\u72EC\u7ACB\u5BC6\u7801");
A.setFocus("pp");
jE(3);
return false;
}


if(AB.bNeedEncrypt)
{
if(bej.length>170)
{
eS.p.value=bej;
}
else
{
var PublicKey="CF87D7B4C864F4842F1D337491A48FFF54B73A17300E8E42FA365420393AC0346AE55D8AFAD975DFA175FAF0106CBA81AF1DDE4ACEC284DAC6ED9A0D8FEB1CC070733C58213EFFED46529C54CEA06D774E3CC7E073346AEBD6C66FC973F299EB74738E400B22B1E7CDC54E71AED059D228DFEB5B29C530FF341502AE56DDCFE9",
PublicTs=eS.ts.value,
RSA=new RSAKey();
RSA.setPublic(PublicKey,"10001");

var Res=RSA.encrypt(eS.pp.value+'\n'+PublicTs+'\n');
if(Res)
{
eS.p.value=hex2b64(Res);
}
}
}
else
{
eS.p.value=bej;
}
}

if(A.S("verifyinput").style.display!="none"&&!A.S("verifycode").value)
{
avr("\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801");
A.setFocus("verifycode");
jE(3);
return false;
}


if(A.S("pp"))
{
eS.pp.value=eS.p.value;
}

jE(4);
}
return true;
};
function aDD(ahD)
{
var jx=A.S('btlogin');
if(ahD)
{
jx.value=(jx.getAttribute("progress")||"\u767B\u5F55\u4E2D");
jx.parentNode.className="login_btn_wrapper_disabled";
jx.setAttribute("loading",1)
}
else
{
jx.removeAttribute("loading");
jx.value=(jx.getAttribute("default")||"\u767B\u5F55");
jx.parentNode.className="login_btn_wrapper";
}
};
function cOC()
{
if(AB.bUsingPT)
{
imgLoadReport();
}
jE(1);
};
function bFX()
{
if(AB.bUsingPT)
{
try
{
ptui_changeImg();
}
catch(e)
{
avr("errorPT","img:"+e.message);
}
}
else
{
A.S('vfcode').src=AB.sServerName+"/cgi-bin/getverifyimage?aid=23000101&f=html&ck=1&r="+Math.random();
A.setFocus("verifycode");
}
};
function cTB(gx)
{

if(gx==jF.dmS)
{
jE(5);
}
else
{
jE(4,gx);
}

ckr(gx);
aDD(false);
};
function avr(_asMsg,ix)
{
var erD=_asMsg;
aDD(false);
if(!_asMsg)
{
A.S("msgContainer").style.display="none";
return;
}

var bCq=
{
errorPT:"\u7F51\u7EDC\u5F02\u5E38\uFF0C\u90E8\u5206\u8D44\u6E90\u672A\u80FD\u62C9\u53D6\uFF0C\u8BF7\u5237\u65B0\u540E\u91CD\u8BD5\u3002",
errorCheck:"\u7F51\u7EDC\u5F02\u5E38\uFF0C\u8BF7\u5237\u65B0\u540E\u91CD\u8BD5\u3002",
errorSecondPwdNeedQQErr:"\u4E3A\u589E\u5F3A\u90AE\u7BB1\u5B89\u5168\u6027\uFF0C\u767B\u5F55\u65F6\u9700\u8981\u9A8C\u8BC1\u60A8\u7684QQ\u5BC6\u7801\u3002"
},
Zd=A.S("msgContainer");

bCq[_asMsg]&&(_asMsg=bCq[_asMsg]);

if(cOT())
{
_asMsg=bCq["errorSecondPwdNeedQQErr"]
}
Zd.innerHTML=_asMsg.replace(/[\,\.\!\?\uFF0C\u3002\uFF01]$/g,"");
Zd.style.display="";



if(AB.bUsingPT)
{
var dSV=511,
bJP={
errorPT:551,
errorCheck:552,
errorSecondPwdNeedQQErr:553
}[erD]||-1;
if(window.pt&&pt.lang)
{
var n=-1;
for(var i in pt.lang)
{
n++;
if(_asMsg.indexOf(pt.lang[i])==0)
{
bJP=dSV+n;
break;
}
}
}

bJP>-1
&&ckr(bJP,ix);
}
};
function cOT()
{




if(jF.bLe==AB.sLoginType
&&jF.aND>=jF.dpc
&&jF.brt==jF.cal
&&jF.EW==4)
{
jF.dhH=1;
return true;
}
return false;
};
function ayO()
{
if(AB.bUsingPT)
{
mR();
try
{
window.check&&check();
}
catch(e)
{


}
}
};
function arZ()
{
var Eb=jF.bLe==AB.sLoginType?"uin":"u",
cWF=[Eb,"pp","p","verifycode"];
for(var i=0,l=cWF.length;i<l;i++)
{
var aS=cWF[i];
if(A.S(aS)&&!A.S(aS).value)
{
A.setFocus(aS);
break;
}
aS=null;
}
};
function bhY()
{
avr();
setTimeout(function(){
ayO();
arZ();
});
};
function cBE(gn,dgW)
{
var eJ=AB.sLocale=="en_US"?"login_div_1033.js":"login_div.js",
bnP=dgW||[
[!AB.bNeedEncrypt?
('https://ui.ptlogin2.qq.com/js/'+eJ):
('http://imgcache.qq.com/ptlogin/ac/v9/js/'+eJ),"UTF-8"],
[AB.oResCfg&&AB.oResCfg.sPtUrl||"","GBK"]
];
if(bnP.length&&bnP[0][0])
{
var aL=bnP.shift(),
eo=document.createElement("script");
eo.type="text/javascript";
eo.charset=aL[1];
eo.src=aL[0];

cCY();

window["PTLOGIN_TIMER"]=+new Date();
A.waitFor(
function()
{
return window["pt"];
},
function(fjy)
{
if(fjy)
{
typeof(window.onload)=="function"&&jF.eey
&&window.onload();

cCY(true);
gn(fjy);




!bnP.length&&ckr(typeof window["PTLOGIN_RESCODE"]=="undefined"?1009:(1000+window["PTLOGIN_RESCODE"]));
}
else
{
if(bnP.length)
{
cJz();
cBE(gn,bnP);
}
else
{
cJz(true);
cCY(true);
}
}
}
);

document.body.appendChild(eo);
};
function cJz(enE)
{
var dbX={
"pt":7,
"dm":9
}[AB.sLoginType]||11;
enE&&(dbX++);
(new Image()).src=A.urlReplacer({
"jsfailtime":dbX,
"r":Math.random()
},AB.oResCfg.sReportUrl);
};
};



function gkq()
{
if(window['bIsAutoLogin'])
{
ayO();
A.waitFor(
function()
{
return pt.isLoadVC||A.S("verifycode").value;
},
function(nW)
{
nW&&bmI();
}
);


}
else if(window['bIsAnythigInput'])
{
ayO();
}
};

function gfT()
{

if(!pt.f_v.value)
{
return false;
}

var ye=[jF.EA,jF.cxL].join(""),
vT=pt.f_v.value,
cHE=jF.efQ[vT];


if(cHE.sUserName!=ye)
{
return false;
}


return+new Date()-cHE.nTimeStamp<60000;
};




function fSB()
{
var eKn=function()
{
if(!window.pt)
{
return;
}

if(!pt.f_v.value)
{
return;
}

var ye=[jF.EA,jF.cxL].join(""),
vT=pt.f_v.value,
cHE=jF.efQ[vT];

if(!cHE)
{
cHE=jF.efQ[vT]=
{
nTimeStamp:+new Date(),
sUserName:ye
};
}

};


jF.fcq
&&clearInterval(jF.fcq);
jF.fcq=setInterval(eKn,1000);

eKn();
};
function cCY(eky)
{
var xS=["u","p","verifycode"];
for(var i=0;i<xS.length;i++)
{
(function(){
if(!eky)
{

if(!A.S(xS[i]).tfocus)
{
A.S(xS[i]).tfocus=A.S(xS[i]).focus;
A.S(xS[i]).focus=function(){};
}
}
else
{
if(i==0)
{

A.S(xS[i]).focus=function()
{
try
{
this.tfocus();
}
catch(e){}
}
}
else
{
A.S(xS[i]).focus=A.S(xS[i]).tfocus;
}
}
})();
};
}

jF=window["QMLogin"]=A.extend({




changeImg:bFX,




checkInput:bmI,



judgeVC:ayO,



switchMode:bhY,





onLoadVC:cOC
},{
init:function(av)
{
AB=av;


A.extend(
window,
{

pt_init_end:function()
{
gkq();
},

callback:function()
{
try
{
document.selection
&&document.selection.empty()
}
catch(e){}

if(window["bIsAutoLogin"]||window["bIsAnythigInput"])
{


pt.switchPage();
}
},

ptlogin2_onResize:function()
{
av.onResize&&av.onResize.apply(this,arguments);
},

ptlogin2_onMibaoCancel:function()
{
location.replace(location)
},

ptui_bos:function()
{
cTB.apply(null,arguments);
av.onSubmit&&av.onSubmit.apply(this,arguments);
},

pt_show_err:function()
{
avr.apply(null,arguments)
}
}
);


if(av.bNeedEncrypt&&!av.bUsingPT&&av.oResCfg.sEncryptUrl)
{
var eo=document.createElement("script");
eo.type="text/javascript";
eo.charset="GBK";
eo.src=av.oResCfg.sEncryptUrl;
document.body.appendChild(eo);
eo=null;
}
},



ready:function()
{
if(AB.bUsingPT)
{

A.addEvent(window,"error",function(e)
{

aDD(false);
ckr(919,e.message||"runtime script error!");
});


if(jF.dKu==AB.sLoginType)
{
pt_need_qlogin=0;
}


A.addEvent(document.loginform,"keydown",function(fx)
{
window["bIsAnythigInput"]=true;
});


if(A.S("uin"))
{
arZ();
cBE(function(bc)
{
if(A.S("u").value&&!A.S("uin").value)
{
A.S("uin").value=A.S("u").value.split("@")[0];
arZ();
}
});
}
else
{

var cha=(A.getCookie("ptui_loginuin")||""),
cKl=(A.getCookie("qqmail_alias")||"");
if(!cKl&&cha)
{
A.setCookie("ptui_loginuin",cKl);
}

cBE(function(bc)
{

var cZq=A.S("u").getAttribute("default");
if(cZq)
{
A.S("u").value=cZq;
}
arZ();
});
}
}
else
{
arZ();
}

var ao=this,
kT={



"basic":function()
{
fSB();

cWl(function()
{
ayO();
}
);
A.S('btlogin').onclick=function()
{
var jx=this;
if(jx.getAttribute("loading"))
{








return false;
}
else
{
aDD(true);
}
};
},



"caps":function()
{
new cPn(A.S("pp")||A.S("p"));
},



"label":function()
{
new deb(["uin","u","p","pp","verifycode"]);
},



"slide":function()
{
new dnt('slide_ctrls','slide_contents');
},



"domain":function()
{
var aAd=A.S("uin"),
aPm=A.S("domain");
if(aAd)
{
new daP(aAd,aPm,jF.cPj,jF.doQ);
A.addEvent(aAd,"blur",function(){
A.rmClass(aAd.parentNode,"active");
});
A.addEvent(aAd,"focus",function(){
A.addClass(aAd.parentNode,"active");
});

if(!-[1,]&&!window.XMLHttpRequest)
{
A.addEvent(aPm,"mouseout",function(){
A.rmClass(aPm.parentNode,"active");
});
A.addEvent(aPm,"mouseover",function(){
A.addClass(aPm.parentNode,"active");
});
}
}
},



"popup":function()
{
A.S("dialog_close").onclick=function()
{
cHL(false);
};
A.S("login").onclick=function(fx)
{
dBA(!AB.bIsLogin,this);
};

A.each(A.getElementsByClassName("button-blue"),function(_aoDom)
{
(function(){
_aoDom&&_aoDom.getAttribute("data-uigroup")=="dialog"&&AB.sLoginType==ao.dyO
&&(_aoDom.onclick=function(fx){
fx=fx||event;
if(!AB.bIsLogin)
{
cHL(true);
A.preventDefault(fx);
return false;
}
});
})();
}
);
}
},
aAE={

"pt":["basic","caps","label","domain"],

"op":["basic","caps","label","popup","slide"],

"qm":["basic","caps","label"],

"dm":["basic"],

"d2":["basic"]
};


A.each(AB.oUseCom||aAE[AB.sLoginType],function(cVv)
{
kT[cVv].apply(ao);
}
);
}
},{



dpc:2,
bZw:16,

cPj:["@vip.qq.com","@qq.com","@foxmail.com"],
doQ:["14px","18px","13px"],



dmS:"0",
cal:"3",



fat:"qm",
bLe:"pt",
dyO:"op",
dKu:"dm",
eZd:"d2",






btv:0,
EW:0,



aND:0,
bpJ:0,
dhH:0,
bDn:0,
aCi:"",
cxL:"@qq.com",
brt:"",
efQ:{},
EA:""
});

A.addEvent(window,"load",function()
{
jF.eey=!window["pt"];
}
);
})
(function()
{
function fY(aK)
{
return document.getElementById(aK)||null;
};
function diH(aP,bQ,mM,dw,kR,pU)
{
if(aP)
{
var fI=[
'$name$=$value$; ',
!mM?'':'expires=$expires$; ',
'path=$path$; ',
'domain=$domain$; ',
!pU?'':'$secure$'
].join(""),
dpd={
name:aP,
value:encodeURIComponent(bQ||""),
expires:mM&&mM.toGMTString(),
path:dw||'/',
domain:kR||"qq.com",
secure:pU?"secure":""
};
for(var i in dpd)
{
fI=fI.replace("\$"+i+"\$",dpd[i]);
};

document.cookie=fI;
return true;
}
else
{
return false;
}
};
function dXY(HV)
{
return HV.replace(/([\^\.\[\$\(\)\|\*\+\?\{\\])/ig,"\\$1");
}
function efV(aP)
{
return(new RegExp([
"(?:; )?",dXY(aP),"=([^;]*);?"
].join("")
)).test(document.cookie)&&decodeURIComponent(RegExp["$1"]);
};
function eBy(aP,dw,kR)
{
diH(aP,"",new Date(0),dw,kR);
}
function Bk(_aoDom,az,nG,lq)
{
if(_aoDom&&nG)
{
if(_aoDom.addEventListener)
{
_aoDom[lq?"removeEventListener":"addEventListener"](
az,nG,false
);
}
else if(_aoDom.attachEvent)
{
_aoDom[lq?"detachEvent":"attachEvent"]("on"+az,
nG
);
}
else
{
_aoDom["on"+az]=lq?null:nG;
}
}
return _aoDom;
};
function cZj(str)
{
return str.replace(/(^\s+|\s+$)/g,"");
};
function bxv(aP,bQ,aTh)
{
var rG=new RegExp("([?&]"+aP+"=)([^&#]*)?"),
cm=bQ?bQ:"";

return(rG.test(aTh)?
aTh.replace(rG,"$1"+cm)
:[aTh,"&",aP,"=",cm].join(""));
};


return({
S:fY,
trim:cZj,
addEvent:Bk,
setCookie:diH,
getCookie:efV,
delCookie:eBy,
addEvents:function(dA,jW,lq)
{
for(var az in jW)
{
Bk(dA,az,jW[az],lq);
}
return dA;
},
setFocus:function(kF)
{
var _oDom=typeof kF=="string"?fY(kF):kF;
if(_oDom)
{
try
{
_oDom.focus();
_oDom.onfocus();
}catch(e){};
}
},
show:function(oD,kM,cU)
{
var cX=(typeof(oD)=="string"?fY(oD,cU):oD);
if(cX)
{
cX.style.display=(kM?"":"none");
}
return cX;
},
preventDefault:function(evt)
{
if(evt)
{
evt.preventDefault?evt.preventDefault():(evt.returnValue=false);
}
},

hasClass:function(_aoDom,_asClass)
{
return(" "+_aoDom.className+" ").indexOf(" "+_asClass+" ")>-1;
},
addClass:function(_aoDom,_asClass)
{
var hY=" "+_aoDom.className+" ";
if(hY.indexOf(" "+_asClass+" ")<0)
{
_aoDom.className+=_aoDom.className?" "+_asClass:_asClass;
}
},
rmClass:function(_aoDom,_asClass)
{
if(_asClass)
{
var hY=" "+_aoDom.className+" ";
hY=hY.replace(" "+_asClass+" "," ");
_aoDom.className=cZj(hY);
}
else
{
_aoDom.className="";
}
},
extend:function()
{
for(var bk=arguments,qb=bk[0],i=1,_nLen=bk.length;i<_nLen;i++)
{
var sG=bk[i];
for(var j in sG)
{
qb[j]=sG[j];
}
}
return qb;
},
waitFor:function(KK,CL,tK,qx)
{
var fW=0,
jd=tK||500,
KN=(qx||10*500)/jd;

function adr(nW)
{
try
{
CL(nW)
}
catch(aZ)
{

}
};

(function()
{
try
{
if(KK())
{
return adr(true);
}
}
catch(aZ)
{

}

if(fW++>KN)
{
return adr(false);
}

setTimeout(arguments.callee,jd);
})();
},
getElementsByClassName:function(afe,_aoDom,kI)
{
if(document.getElementsByClassName)
{
return document.getElementsByClassName(afe);
}
else
{
_aoDom=_aoDom||document;
kI=kI||"*";
var hX=[],
atE=(kI=='*'&&_aoDom.all)?_aoDom.all:_aoDom.getElementsByTagName(kI),
i=atE.length;
afe=afe.replace(/\-/g,'\\-');
var hM=new RegExp('(^|\\s)'+afe+'(\\s|$)');
while(--i>=0)
{
if(hM.test(atE[i].className))
{
hX.push(atE[i]);
}
}
return hX;
}
},
each:function(dH,afFunc)
{
if(typeof dH.length=="number")
for(var i=0,l=dH.length;i<l;i++)
{
afFunc&&afFunc.apply(null,[dH[i],i])
}
else
for(var i in dH)
{
afFunc&&afFunc.apply(null,[dH[i],i])
}
return dH;
},
contains:function(bbx,cdr)
{
if(bbx.contains)
{
return bbx.contains(cdr);
}
else if(bbx.compareDocumentPosition)
{
var dQ=bbx.compareDocumentPosition(cdr);
return dQ==20||dQ==0;
}

return false;
},
urlReplacer:function()
{
var ce=arguments[0],
fe=(typeof ce=="object"?arguments[1]:arguments[2])||location.href,
fe=fe+(fe.indexOf("?")>-1?"":"?"),
bDD=fe.substr(0,fe.indexOf("?")),
aV=fe.substr(fe.indexOf("?"),fe.length);
switch(typeof ce)
{
case"object":
for(var i in ce)
{
aV=bxv(i,ce[i],aV);
}
break;
case"string":
aV=bxv(arguments[0],arguments[1],aV);
break;
default:
}
return bDD+aV;
}
});
}());
