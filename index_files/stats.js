google.maps.__gjsload__('stats', function(_){'use strict';var H0=function(a,b,c){var d=[];_.Hc(a,function(a,c){d.push(c+b+a)});return d.join(c)},I0=function(a,b,c,d){var e={};e.host=window.document.location&&window.document.location.host||window.location.host;e.v=a;e.r=Math.round(1/b);c&&(e.client=c);d&&(e.key=d);return e},J0=function(a){var b={};_.Hc(a,function(a,d){b[(0,window.encodeURIComponent)(d)]=(0,window.encodeURIComponent)(a).replace(/%7C/g,"|")});return H0(b,":",",")},L0=function(a,b,c,d){var e=_.Q.b[23],f=_.Q.b[22];this.D=a;this.G=
b;this.H=null!=e?e:500;this.l=null!=f?f:2;this.C=c;this.m=d;this.f=new _.Jj;this.b=0;this.j=_.Ia();K0(this)},K0=function(a){window.setTimeout(function(){M0(a);K0(a)},Math.min(a.H*Math.pow(a.l,a.b),2147483647))},N0=function(a,b,c){a.f.set(b,c)},M0=function(a){var b=I0(a.G,a.C,a.m,void 0);b.t=a.b+"-"+(_.Ia()-a.j);a.f.forEach(function(a,d){a=a();0<a&&(b[d]=Number(a.toFixed(2))+(_.lm()?"-if":""))});a.D.b({ev:"api_snap"},b);++a.b},O0=function(a,b,c,d,e){this.m=a;this.D=b;this.l=c;this.f=d;this.j=e;this.b=
new _.Jj;this.C=_.Ia()},P0=function(a,b,c){this.l=b;this.f=a+"/maps/gen_204";this.j=c},Q0=function(){this.b=new _.Jj},R0=function(a){var b=0,c=0;a.b.forEach(function(a){b+=a.zp;c+=a.Wo});return c?b/c:0},S0=function(a,b,c,d,e){this.C=a;this.D=b;this.m=c;this.j=d;this.l=e;this.f={};this.b=[]},T0=function(a,b,c,d){this.j=a;_.E.bind(this.j,"set_at",this,this.l);_.E.bind(this.j,"insert_at",this,this.l);this.C=b;this.D=c;this.m=d;this.f=0;this.b={};this.l()},U0=function(){this.j=_.of(_.Q);var a;_.Zf[35]?
(a=_.ff(_.Q).b[11],a=null!=a?a:""):a=_.aw;this.b=new P0(a,_.Vi,window.document);new T0(_.Ri,(0,_.v)(this.b.b,this.b),_.dg,!!this.j);a=_.lf(new _.$e(_.Q.b[3]));this.D=a.split(".")[1]||a;this.G={};this.C={};this.m={};this.H={};this.J=_.nf();_.Ui&&(this.l=new L0(this.b,this.D,this.J,this.j))};
O0.prototype.G=function(a){var b=_.u(void 0)?void 0:1;this.b.isEmpty()&&window.setTimeout((0,_.v)(function(){var a=I0(this.D,this.l,this.f,this.j);a.t=_.Ia()-this.C;var b=this.b;_.Kj(b);for(var e={},f=0;f<b.b.length;f++){var g=b.b[f];e[g]=b.I[g]}_.mz(a,e);this.b.clear();this.m.b({ev:"api_maprft"},a)},this),500);b=this.b.get(a,0)+b;this.b.set(a,b)};
P0.prototype.b=function(a,b){b=b||{};var c=_.xk().toString(36);b.src="apiv3";b.token=this.l;b.ts=c.substr(c.length-6);a.cad=J0(b);a=H0(a,"=","&");a=this.f+"?target=api&"+a;this.j.createElement("img").src=a;(b=_.Lc.__gm_captureCSI)&&b(a)};Q0.prototype.f=function(a,b,c){this.b.set(_.xb(a),{zp:b,Wo:c})};S0.prototype.G=function(a){this.f[a]||(this.f[a]=!0,this.b.push(a),2>this.b.length&&_.Cz(this,this.H,500))};
S0.prototype.H=function(){for(var a=I0(this.D,this.m,this.j,this.l),b=0,c;c=this.b[b];++b)a[c]="1";a.hybrid=+((_.Jl()||!_.Il())&&_.Il());this.b.length=0;this.C.b({ev:"api_mapft"},a)};T0.prototype.l=function(){for(var a;a=this.j.removeAt(0);){var b=a.Co;a=a.timestamp-this.D;++this.f;this.b[b]||(this.b[b]=0);++this.b[b];if(20<=this.f&&!(this.f%5)){var c={};c.s=b;c.sr=this.b[b];c.tr=this.f;c.te=a;c.hc=this.m?"1":"0";this.C({ev:"api_services"},c)}}};U0.prototype.V=function(a){a=_.xb(a);this.G[a]||(this.G[a]=new S0(this.b,this.D,this.J,this.j));return this.G[a]};U0.prototype.T=function(a){a=_.xb(a);this.C[a]||(this.C[a]=new O0(this.b,this.D,1,this.j));return this.C[a]};U0.prototype.f=function(a){if(this.l){this.m[a]||(this.m[a]=new _.FA,N0(this.l,a,function(){return b.mb()}));var b=this.m[a];return b}};U0.prototype.P=function(a){if(this.l){this.H[a]||(this.H[a]=new Q0,N0(this.l,a,function(){return R0(b)}));var b=this.H[a];return b}};var V0=new U0;_.mc("stats",V0);});
