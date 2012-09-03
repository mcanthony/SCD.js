/*
 EventEmitter v2.0.0.

 Copyright 2011, Oliver Caldwell (olivercaldwell.co.uk)
 Dual licensed under the MIT or GPL Version 2 licenses.
 https://github.com/Wolfy87/EventEmitter
*/
'use strict';var g=!1;
function k(){var a=this,b={},c=null,j=null,d=null;a.addListener=function(f,c){b[f]?b[f].push(c):b[f]=[c];a.a("newListener",f,c);return a};a.c=a.addListener;a.a=function(a){if(b[a]){j=Array.prototype.slice.call(arguments,1);for(c=0;c<b[a].length;c+=1)b[a][c].apply(null,j)}};a.b=function(a){b[a]||(b[a]=[]);return b[a]};a.d=function(b,c){function e(){c.apply(null,arguments);a.removeListener(b,e)}a.addListener(b,e);return a};a.removeListener=function(f,j){if(b[f]){a:{var e=b[f];if(e.indexOf)d=e.indexOf(j);
else{for(c=0;c<e.length;c+=1)if(e[c]===j){d=c;break a}d=-1}}-1!==d&&b[f].splice(d,1)}else b[f]=[];return a};a.e=function(c){b[c]=[];return a}};/*
 SCD.js.

 Copyright 2011, Guillaume Marty (edo999@gmail.com)
 Dual licensed under the MIT or GPL Version 2 licenses.
 https://github.com/gmarty/SCD.js
*/
function E(a,b,c){function j(a,b){return a-b}function d(){if(!m)if("FastForwardMode"===n&&(a.ended||l>a.duration))f();else{z.drawImage(a,0,0,s,t,0,0,h,i);var b=[],c=z.getImageData(0,0,h,i).data,e=A.getImageData(0,0,h,i).data,d=c.length;do b.push(Math.sqrt(Math.pow(c[d-4]-e[d-4],2)+Math.pow(c[d+-3]-e[d+-3],2)+Math.pow(c[d+-2]-e[d+-2],2)));while(d-=4);B(b)>o&&(C.a("scenecut"),u.sceneTimecodes.push(l));A.drawImage(p,0,0,h,i,0,0,h,i)}}function f(){c&&c();u.stop()}function y(){this.currentTime-v>=q&&(l=
this.currentTime,d(),v=this.currentTime)}function e(){d();this.currentTime=l+=q}function w(){a.width=a.width?a.width:a.videoWidth;a.height=a.height?a.height:a.videoHeight;a.videoWidth/a.videoHeight>a.width/a.height?(s=a.width,t=a.videoHeight/a.videoWidth*a.width):(s=a.videoWidth/a.videoHeight*a.height,t=a.height);p.width=x.width=h;p.height=x.height=i;a.removeEventListener("durationchange",w,g)}if(!a||0>a.constructor.toString().indexOf("HTMLVideoElement"))throw"Inputed element is not a video element.";
var u=this,n="FastForwardMode",h=50,i=50,q=0.25,o=25,F=Math.sqrt(195075)/100,l=0,v=0,s=0,t=0,D=a.controls,p=document.createElement("canvas"),x=document.createElement("canvas"),z=p.getContext("2d"),A=x.getContext("2d"),m=g,r,C,B;E.prototype.events=C=new k;b=b||{};b.mode&&"PlaybackMode"===b.mode&&(n=b.mode);b.step_width&&b.step_height?(h=parseInt(b.step_width,10),i=parseInt(b.step_height,10)):b.step&&(h=i=parseInt(b.step,10));b.minSceneDuration&&(q=parseFloat(b.minSceneDuration));b.threshold&&(o=parseFloat(b.threshold));
v=q;o*=F;b=h*i;r=(b+1)/2-1;3>a.readyState?a.addEventListener("durationchange",w,g):w();E.prototype.start="FastForwardMode"===n?function(){if(!m){a.controls=g;a.currentTime=l;a.addEventListener("seeked",e,g);d()}}:function(){if(!m){a.controls=g;a.currentTime=0;a.addEventListener("timeupdate",y,g);a.addEventListener("ended",f,g);a.play()}};B=b%2?function(a){a.sort(j);return a[r]}:function(a){a.sort(j);return(a[r-0.5]+a[r+0.5])/2};E.prototype.pause=function(){if(!m){if(n==="FastForwardMode"){a.controls=
D;a.removeEventListener("seeked",e,g)}a.pause()}};E.prototype.stop=function(){u.pause();if(n==="FastForwardMode"){a.removeEventListener("seeked",e,g);a.controls=D}else{a.removeEventListener("timeupdate",y,g);a.removeEventListener("ended",f,g)}m=true}}E.prototype.sceneTimecodes=[];window.Scd=E;
