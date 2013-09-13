/*!
 * Fotorama 4.3.1-beta | http://fotorama.io/license/
 */
!function(a,b,c,d){"use strict";function e(a){var b="bez_"+c.makeArray(arguments).join("_").replace(".","p");if("function"!=typeof c.easing[b]){var d=function(a,b){var c=[null,null],d=[null,null],e=[null,null],f=function(f,g){return e[g]=3*a[g],d[g]=3*(b[g]-a[g])-e[g],c[g]=1-e[g]-d[g],f*(e[g]+f*(d[g]+f*c[g]))},g=function(a){return e[0]+a*(2*d[0]+3*c[0]*a)},h=function(a){for(var b,c=a,d=0;++d<14&&(b=f(c,0)-a,!(Math.abs(b)<.001));)c-=b/g(c);return c};return function(a){return f(h(a),1)}};c.easing[b]=function(b,c,e,f,g){return f*d([a[0],a[1]],[a[2],a[3]])(c/g)+e}}return b}function f(){}function g(a,b,c){return Math.max(isNaN(b)?-1/0:b,Math.min(isNaN(c)?1/0:c,a))}function h(a){return a.match(/ma/)&&a.match(/-?\d+(?!d)/g)[a.match(/3d/)?12:4]}function i(a){return uc?+h(a.css("transform")):+a.css("left").replace("px","")}function j(a,b){var c={};return uc?c.transform="translate3d("+(a+(b?.001:0))+"px,0,0)":c.left=a,c}function k(a){return{"transition-duration":a+"ms"}}function l(a,b){return+String(a).replace(b||"px","")}function m(a){return/%$/.test(a)&&l(a,"%")}function n(a){return(!!l(a)||!!l(a,"%"))&&a}function o(a,b,c,d){return(a-(d||0))*(b+(c||0))}function p(a,b,c,d){return-Math.round(a/(b+(c||0))-(d||0))}function q(a){var b=a.data();if(!b.tEnd){var c=a[0],d={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",msTransition:"MSTransitionEnd",transition:"transitionend"};c.addEventListener(d[$.prefixed("transition")],function(a){b.tProp&&a.propertyName.match(b.tProp)&&b.onEndFn()}),b.tEnd=!0}}function r(a,b,c,d){var e,f=a.data();f&&(f.onEndFn=function(){e||(e=!0,clearTimeout(f.tT),c())},f.tProp=b,clearTimeout(f.tT),f.tT=setTimeout(function(){f.onEndFn()},1.5*d),q(a))}function s(a,b,c){if(a.length){var d=a.data();uc?(a.css(k(0)),d.onEndFn=f,clearTimeout(d.tT)):a.stop();var e=t(b,function(){return i(a)});return a.css(j(e,c)),e}}function t(){for(var a,b=0,c=arguments.length;c>b&&(a=b?arguments[b]():arguments[b],"number"!=typeof a);b++);return a}function u(a,b){return Math.round(a+(b-a)/1.5)}function v(){return v.p=v.p||("https://"===location.protocol?"https://":"http://"),v.p}function w(a){var c=b.createElement("a");return c.href=a,c}function x(a,b){if("string"!=typeof a)return a;a=w(a);var c,d;if(a.host.match(/youtube\.com/)&&a.search){if(c=a.search.split("v=")[1]){var e=c.indexOf("&");-1!==e&&(c=c.substring(0,e)),d="youtube"}}else a.host.match(/youtube\.com|youtu\.be/)?(c=a.pathname.replace(/^\/(embed\/|v\/)?/,"").replace(/\/.*/,""),d="youtube"):a.host.match(/vimeo\.com/)&&(d="vimeo",c=a.pathname.replace(/^\/(video\/)?/,"").replace(/\/.*/,""));return c&&d||!b||(c=a.href,d="custom"),c?{id:c,type:d}:!1}function y(a,b,d){var e,f,g=a.video;return"youtube"===g.type?(f=v()+"img.youtube.com/vi/"+g.id+"/default.jpg",e=f.replace(/\/default.jpg$/,"/hqdefault.jpg"),a.thumbsReady=!0):"vimeo"===g.type?c.ajax({url:v()+"vimeo.com/api/v2/video/"+g.id+".json",dataType:"jsonp",success:function(c){a.thumbsReady=!0,z(b,{img:c[0].thumbnail_large,thumb:c[0].thumbnail_small},a.i,d)}}):a.thumbsReady=!0,{img:e,thumb:f}}function z(a,b,d,e){for(var f=0,g=a.length;g>f;f++){var h=a[f];if(h.i===d&&h.thumbsReady){var i={videoReady:!0};i[Hc]=i[Jc]=i[Ic]=!1,e.splice(f,1,c.extend({},h,i,b));break}}}function A(a){function b(a,b,c){var e=a.children("img").eq(0),f=a.attr("href"),g=a.attr("src"),h=e.attr("src"),i=b.video,j=c?x(f,i===!0):!1;j?f=!1:j=i;var k=b.img||f||g||h,m=b.thumb||h||g||f,n=k!==m,o=l(b.width||a.attr("width")),p=l(b.height||a.attr("height")),q=l(b.thumbwidth||e.attr("width")||n||o),r=l(b.thumbheight||e.attr("height")||n||p);return{video:j,img:k,width:o||d,height:p||d,thumb:m,thumbratio:q/r||d}}var e=[];return a.children().each(function(){var a=c(this),d=O(c.extend(a.data(),{id:a.attr("id")}));if(a.is("a, img"))c.extend(d,b(a,d,!0));else{if(a.is(":empty"))return;c.extend(d,{html:this,_html:a.html()})}e.push(d)}),e}function B(a){return 0===a.offsetWidth&&0===a.offsetHeight}function C(a){return!c.contains(b.documentElement,a)}function D(a,b,c){a()?b():setTimeout(function(){D(a,b)},c||100)}function E(a){location.replace(location.protocol+"//"+location.host+location.pathname.replace(/^\/?/,"/")+location.search+"#"+a)}function F(a,b,c){var d=a.data(),e=d.measures;if(e&&(!d.l||d.l.W!==e.width||d.l.H!==e.height||d.l.r!==e.ratio||d.l.w!==b.w||d.l.h!==b.h||d.l.m!==c)){var f=e.width,h=e.height,i=b.w/b.h,j=e.ratio>=i,k="scaledown"===c,l="contain"===c,m="cover"===c;j&&(k||l)||!j&&m?(f=g(b.w,0,k?f:1/0),h=f/e.ratio):(j&&m||!j&&(k||l))&&(h=g(b.h,0,k?h:1/0),f=h*e.ratio),a.css({width:Math.ceil(f),height:Math.ceil(h),marginLeft:Math.floor(-f/2),marginTop:Math.floor(-h/2)}),d.l={W:e.width,H:e.height,r:e.ratio,w:b.w,h:b.h,m:c}}return!0}function G(a,b){var c=a[0];c.styleSheet?c.styleSheet.cssText=b:a.html(b)}function H(a,b,c){return b===c?!1:b>=a?"left":a>=c?"right":"left right"}function I(a,b,c){if(!c)return!1;if(!isNaN(a))return a-1;for(var d,e=0,f=b.length;f>e;e++){var g=b[e];if(g.id===a){d=e;break}}return d}function J(a,b,d){d=d||{},a.each(function(){var a,e=c(this),g=e.data();g.clickOn||(g.clickOn=!0,c.extend(S(e,{onStart:function(b){a=b,(d.onStart||f).call(this,b)},onMove:d.onMove||f,onEnd:function(c){c.moved||d.tail.checked||b.call(this,a)}}),d.tail))})}function K(a,b){return'<div class="'+a+'">'+(b||"")+"</div>"}function L(a){for(var b=a.length;b;){var c=Math.floor(Math.random()*b--),d=a[b];a[b]=a[c],a[c]=d}return a}function M(a){return"[object Array]"==Object.prototype.toString.call(a)&&c.map(a,function(a){return c.extend({},a)})}function N(a,b){qc.scrollLeft(a).scrollTop(b)}function O(a){if(a){var b={};return c.each(a,function(a,c){b[a.toLowerCase()]=c}),b}}function P(a,b){var d=Math.round(b.pos),e=b.onEnd||f;"undefined"!=typeof b.overPos&&b.overPos!==b.pos&&(d=b.overPos,e=function(){P(a,c.extend({},b,{overPos:b.pos,time:Math.max(Bc,b.time/2)}))});var g=c.extend(j(d,b._001),{width:b.width});uc?(a.css(c.extend(k(b.time),g)),b.time>10?r(a,"transform",e,b.time):e()):a.stop().animate(g,b.time,Kc,e)}function Q(a,b,d,e,g,h){var i="undefined"!=typeof h;if(i||(g.push(arguments),Array.prototype.push.call(arguments,g.length),!(g.length>1))){a=a||c(a),b=b||c(b);var j=a[0],k=b[0],l="crossfade"===e.method,m=function(){if(!m.done){m.done=!0;var a=(i||g.shift())&&g.shift();a&&Q.apply(this,a),(e.onEnd||f)(!!a)}},n=e.time/(h||1);d.not(a.addClass(Rb).removeClass(Qb)).not(b.addClass(Qb).removeClass(Rb)).removeClass(Rb+" "+Qb),a.stop(),b.stop(),l&&k&&a.fadeTo(0,0),a.fadeTo(l?n:1,1,l&&m),b.fadeTo(n,0,m),j&&l||k||m()}}function R(a){var b=(a.touches||[])[0]||a;a._x=b.pageX,a._y=b.clientY}function S(d,e){function g(a){return o=c(a.target),u.checked=r=s=!1,m||u.flow||a.touches&&a.touches.length>1||a.which>1||fb&&fb.type!==a.type&&hb||(r=e.select&&o.is(e.select,t))?r:(q=a.type.match(/^t/),s=o.is("a, a *",t),R(a),n=fb=a,gb=a.type.replace(/down|start/,"move").replace(/Down/,"Move"),p=u.control,(e.onStart||f).call(t,a,{control:p,$target:o}),m=u.flow=!0,(!q||u.go)&&a.preventDefault(),void 0)}function h(a){if(a.touches&&a.touches.length>1||zc&&!a.isPrimary||gb!==a.type||!m)return m&&i(),void 0;R(a);var b=Math.abs(a._x-n._x),c=Math.abs(a._y-n._y),d=b-c,g=(u.go||u.x||d>0)&&!u.noSwipe,h=0>d;q&&!u.checked?(m=g,m&&a.preventDefault()):(a.preventDefault(),(e.onMove||f).call(t,a,{touch:q})),u.checked=u.checked||g||h}function i(a){var b=m;u.control=m=!1,b&&(u.flow=!1),!b||s&&!u.checked||(a&&a.preventDefault(),hb=!0,clearTimeout(ib),ib=setTimeout(function(){hb=!1},1e3),(e.onEnd||f).call(t,{moved:u.checked,$target:o,control:p,touch:q,startEvent:n,aborted:!a}))}function j(){clearTimeout(l),l=setTimeout(function(){u.flow=!0},10)}function k(){clearTimeout(l),l=setTimeout(function(){u.flow=!1},Ac)}var l,m,n,o,p,q,r,s,t=d[0],u={};return zc?(t[Lc]("MSPointerDown",g),b[Lc]("MSPointerMove",h),b[Lc]("MSPointerCancel",i),b[Lc]("MSPointerUp",i)):(t[Lc]&&(t[Lc]("touchstart",g),t[Lc]("touchmove",h),t[Lc]("touchend",i),b[Lc]("touchstart",j),b[Lc]("touchend",k),a[Lc]("scroll",k)),d.on("mousedown",g),rc.on("mousemove",h).on("mouseup",i)),d.on("click","a",function(a){u.checked&&a.preventDefault()}),u}function T(a,b){function d(d){k=l=d._x,q=c.now(),p=[[q,k]],m=n=C.noMove?0:s(a,b.getPos&&b.getPos()),(b.onStart||f).call(A,d)}function e(a,b){t=B.min,v=B.max,w=B.snap,x=a.altKey,z=!1,y=b.control,y||d(a)}function h(e,g){y&&(y=!1,d(e)),C.noSwipe||(l=e._x,p.push([c.now(),l]),n=m-(k-l),o=H(n,t,v),t>=n?n=u(n,t):n>=v&&(n=u(n,v)),C.noMove||(a.css(j(n)),z||(z=!0,g.touch||zc||a.addClass(ec)),(b.onMove||f).call(A,e,{pos:n,edge:o})))}function i(d){if(!y){d.touch||zc||a.removeClass(ec),r=(new Date).getTime();for(var e,h,i,j,k,o,q,s,u,z=r-Ac,B=null,C=Bc,D=b.friction,E=p.length-1;E>=0;E--){if(e=p[E][0],h=Math.abs(e-z),null===B||i>h)B=e,j=p[E][1];else if(B===z||h>i)break;i=h}q=g(n,t,v);var F=j-l,G=F>=0,H=r-B,I=H>Ac,J=!I&&n!==m&&q===n;w&&(q=g(Math[J?G?"floor":"ceil":"round"](n/w)*w,t,v),t=v=q),J&&(w||q===n)&&(u=-(F/H),C*=g(Math.abs(u),b.timeLow,b.timeHigh),k=Math.round(n+u*C/D),w||(q=k),(!G&&k>v||G&&t>k)&&(o=G?t:v,s=k-o,w||(q=o),s=g(q+.03*s,o-50,o+50),C=Math.abs((n-s)/(u/D)))),C*=x?10:1,(b.onEnd||f).call(A,c.extend(d,{pos:n,newPos:q,overPos:s,time:C,moved:I&&w||d.moved}))}}var k,l,m,n,o,p,q,r,t,v,w,x,y,z,A=a[0],B=a.data(),C={};return C=c.extend(S(b.$wrap,{onStart:e,onMove:h,onEnd:i,select:b.select,control:b.control}),C)}function U(a){V(!0),Mc.appendTo(a),kb=0,Nc(),jb=setInterval(Nc,200)}function V(a){a||Mc.detach(),clearInterval(jb)}function W(){c.each(c.Fotorama.instances,function(a,b){b.index=a})}function X(a){c.Fotorama.instances.push(a),W()}function Y(a){c.Fotorama.instances.splice(a.index,1),W()}var Z={},$=function(a,b,c){function d(a){r.cssText=a}function e(a,b){return typeof a===b}function f(a,b){return!!~(""+a).indexOf(b)}function g(a,b){for(var d in a){var e=a[d];if(!f(e,"-")&&r[e]!==c)return"pfx"==b?e:!0}return!1}function h(a,b,d){for(var f in a){var g=b[a[f]];if(g!==c)return d===!1?a[f]:e(g,"function")?g.bind(d||b):g}return!1}function i(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),f=(a+" "+u.join(d+" ")+d).split(" ");return e(b,"string")||e(b,"undefined")?g(f,b):(f=(a+" "+v.join(d+" ")+d).split(" "),h(f,b,c))}var j,k,l,m="2.6.2",n={},o=b.documentElement,p="modernizr",q=b.createElement(p),r=q.style,s=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),t="Webkit Moz O ms",u=t.split(" "),v=t.toLowerCase().split(" "),w={},x=[],y=x.slice,z=function(a,c,d,e){var f,g,h,i,j=b.createElement("div"),k=b.body,l=k||b.createElement("body");if(parseInt(d,10))for(;d--;)h=b.createElement("div"),h.id=e?e[d]:p+(d+1),j.appendChild(h);return f=["&#173;",'<style id="s',p,'">',a,"</style>"].join(""),j.id=p,(k?j:l).innerHTML+=f,l.appendChild(j),k||(l.style.background="",l.style.overflow="hidden",i=o.style.overflow,o.style.overflow="hidden",o.appendChild(l)),g=c(j,a),k?j.parentNode.removeChild(j):(l.parentNode.removeChild(l),o.style.overflow=i),!!g},A={}.hasOwnProperty;l=e(A,"undefined")||e(A.call,"undefined")?function(a,b){return b in a&&e(a.constructor.prototype[b],"undefined")}:function(a,b){return A.call(a,b)},Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError;var c=y.call(arguments,1),d=function(){if(this instanceof d){var e=function(){};e.prototype=b.prototype;var f=new e,g=b.apply(f,c.concat(y.call(arguments)));return Object(g)===g?g:f}return b.apply(a,c.concat(y.call(arguments)))};return d}),w.csstransforms3d=function(){var a=!!i("perspective");return a};for(var B in w)l(w,B)&&(k=B.toLowerCase(),n[k]=w[B](),x.push((n[k]?"":"no-")+k));return n.addTest=function(a,b){if("object"==typeof a)for(var d in a)l(a,d)&&n.addTest(d,a[d]);else{if(a=a.toLowerCase(),n[a]!==c)return n;b="function"==typeof b?b():b,"undefined"!=typeof enableClasses&&enableClasses&&(o.className+=" "+(b?"":"no-")+a),n[a]=b}return n},d(""),q=j=null,n._version=m,n._prefixes=s,n._domPrefixes=v,n._cssomPrefixes=u,n.testProp=function(a){return g([a])},n.testAllProps=i,n.testStyles=z,n.prefixed=function(a,b,c){return b?i(a,b,c):i(a,"pfx")},n}(a,b),_={ok:!1,is:function(){return!1},request:function(){},cancel:function(){},event:"",prefix:""},ab="webkit moz o ms khtml".split(" ");if("undefined"!=typeof b.cancelFullScreen)_.ok=!0;else for(var bb=0,cb=ab.length;cb>bb;bb++)if(_.prefix=ab[bb],"undefined"!=typeof b[_.prefix+"CancelFullScreen"]){_.ok=!0;break}_.ok&&(_.event=_.prefix+"fullscreenchange",_.is=function(){switch(this.prefix){case"":return b.fullScreen;case"webkit":return b.webkitIsFullScreen;default:return b[this.prefix+"FullScreen"]}},_.request=function(a){return""===this.prefix?a.requestFullScreen():a[this.prefix+"RequestFullScreen"]()},_.cancel=function(){return""===this.prefix?b.cancelFullScreen():b[this.prefix+"CancelFullScreen"]()});var db,eb,fb,gb,hb,ib,jb,kb,lb="fotorama",mb="fullscreen",nb=lb+"__wrap",ob=nb+"--css3",pb=nb+"--video",qb=nb+"--fade",rb=nb+"--slide",sb=nb+"--no-controls",tb=nb+"--no-shadows",ub=nb+"--pan-y",vb=lb+"__stage",wb=vb+"__frame",xb=wb+"--video",yb=vb+"__shaft",zb=vb+"--only-active",Ab=lb+"__grab",Bb=lb+"__pointer",Cb=lb+"__arr",Db=Cb+"--disabled",Eb=Cb+"--prev",Fb=Cb+"--next",Gb=Cb+"__arr",Hb=lb+"__nav",Ib=Hb+"-wrap",Jb=Hb+"__shaft",Kb=Hb+"--dots",Lb=Hb+"--thumbs",Mb=Hb+"__frame",Nb=Mb+"--dot",Ob=Mb+"--thumb",Pb=lb+"__fade",Qb=Pb+"-front",Rb=Pb+"-rear",Sb=lb+"__shadow",Tb=Sb+"s",Ub=Tb+"--left",Vb=Tb+"--right",Wb=lb+"__active",Xb=lb+"__select",Yb=lb+"--hidden",Zb=lb+"--fullscreen",$b=lb+"__fullscreen-icon",_b=lb+"__error",ac=lb+"__loading",bc=lb+"__loaded",cc=bc+"--full",dc=bc+"--img",ec=lb+"__grabbing",fc=lb+"__img",gc=fc+"--full",hc=lb+"__dot",ic=lb+"__thumb",jc=ic+"-border",kc=lb+"__html",lc=lb+"__video",mc=lc+"-play",nc=lc+"-close",oc=lb+"__caption",pc=lb+"__oooo",qc=c(a),rc=c(b),sc="quirks"===location.hash.replace("#",""),tc=$.csstransforms3d,uc=tc&&!sc,vc=tc||"CSS1Compat"===b.compatMode,wc=_.ok,xc=navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i),yc=!uc||xc,zc=a.navigator.msPointerEnabled,Ac=250,Bc=300,Cc=5e3,Dc=2,Ec=64,Fc=500,Gc=333,Hc="$stageFrame",Ic="$navDotFrame",Jc="$navThumbFrame",Kc=e([.1,0,.25,1]),Lc="addEventListener",Mc=c(K("",K(pc))),Nc=function(){Mc.attr("class",pc+" "+pc+"--"+kb),kb++,kb>4&&(kb=0)};jQuery.Fotorama=function(a,e){function h(){c.each(_c,function(a,b){if(!b.i){b.i=Kd++;var c=x(b.video,!0);if(c){var d={};b.video=c,b.img||b.thumb?b.thumbsReady=!0:d=y(b,_c,Gd),z(_c,{img:d.img,thumb:d.thumb},b.i,Gd)}}})}function i(a){var b="keydown."+lb,c="keydown."+lb+Hd,d="resize."+lb+Hd;a?(rc.on(c,function(a){cd&&27===a.keyCode?(a.preventDefault(),Tc(cd,!0,!0)):(Gd.fullScreen||e.keyboard&&!Gd.index)&&(27===a.keyCode?(a.preventDefault(),Gd.cancelFullScreen()):39===a.keyCode||40===a.keyCode&&Gd.fullScreen?(a.preventDefault(),Gd.show({index:">",slow:a.altKey,direct:!0})):(37===a.keyCode||38===a.keyCode&&Gd.fullScreen)&&(a.preventDefault(),Gd.show({index:"<",slow:a.altKey,direct:!0})))}),Gd.index||rc.off(b).on(b,"textarea, input, select",function(a){!eb.hasClass(mb)&&a.stopPropagation()}),qc.on(d,Gd.resize)):(rc.off(c),qc.off(d))}function j(b){b!==j.f&&(b?(a.html("").addClass(Id).append(Od).before(Md).before(Nd),X(Gd)):(Od.detach(),Md.detach(),Nd.detach(),a.html(Ld.urtext).removeClass(Id),Y(Gd)),i(b),j.f=b)}function q(){_c=Gd.data=_c||M(e.data)||A(a),ad=Gd.size=_c.length,!$c.ok&&e.shuffle&&L(_c),h(),ge=R(ge),ad&&j(!0)}function r(){var a=2>ad||cd;je.noMove=a||rd,je.noSwipe=a||!e.swipe,Qd.toggleClass(Ab,!je.noMove&&!je.noSwipe),zc&&Od.toggleClass(ub,!je.noSwipe)}function u(a){a===!0&&(a=""),e.autoplay=Math.max(+a||Cc,1.5*ud)}function v(a){return a?"add":"remove"}function w(){Gd.options=e=O(e),rd="crossfade"===e.transition||"dissolve"===e.transition,ld=e.loop&&(ad>2||rd),ud=+e.transitionduration||Bc;var a={add:[],remove:[]};ad>1?(md=e.nav,od="top"===e.navposition,a.remove.push(Xb),Ud.toggle(e.arrows),Sb()):(md=!1,Ud.hide()),e.autoplay&&u(e.autoplay),sd=l(e.thumbwidth)||Ec,td=l(e.thumbheight)||Ec,r(),Lc(e,!0),nd="thumbs"===md,nd?(hb(ad,"navThumb"),bd=Zd,Fd=Jc,G(Md,c.Fotorama.jst.style({w:sd,h:td,m:Dc,s:Hd,q:!vc})),Wd.addClass(Lb).removeClass(Kb)):"dots"===md?(hb(ad,"navDot"),bd=Yd,Fd=Ic,Wd.addClass(Kb).removeClass(Lb)):(md=!1,Wd.removeClass(Lb+" "+Kb)),md&&(od?Vd.insertBefore(Pd):Vd.insertAfter(Pd),Pb.nav=!1,Pb(bd,Xd,"nav")),pd=e.allowfullscreen,pd?(be.appendTo(Pd),qd=wc&&"native"===pd):(be.detach(),qd=!1),a[v(rd)].push(qb),a[v(!rd)].push(rb),vd=e.shadows&&!yc,a[v(!vd)].push(tb),V(),Od.addClass(a.add.join(" ")).removeClass(a.remove.join(" ")),he=c.extend({},e)}function B(a){return 0>a?(ad+a%ad)%ad:a>=ad?a%ad:a}function R(a){return g(a,0,ad-1)}function S(a){return ld?B(a):R(a)}function W(a){return a>0||ld?a-1:!1}function Z(a){return ad-1>a||ld?a+1:!1}function $(){$d.min=ld?-1/0:-o(ad-1,ie.w,Dc,fd),$d.max=ld?1/0:-o(0,ie.w,Dc,fd),$d.snap=ie.w+Dc}function ab(){_d.min=Math.min(0,ie.w-Xd.width()),_d.max=0,ke.noMove=_d.min===_d.max,Xd.toggleClass(Ab,!ke.noMove)}function bb(a,b,e){if("number"==typeof a){a=new Array(a);var f=!0}return c.each(a,function(a,c){if(f&&(c=a),"number"==typeof c){var g=_c[B(c)];if(g!==d){var h="$"+b+"Frame",i=g[h];e.call(this,a,c,g,i,h,i&&i.data())}}})}function cb(a,b,c,d){(!wd||"*"===wd&&d===kd)&&(a=n(e.width)||n(a)||Fc,b=n(e.height)||n(b)||Gc,Gd.resize({width:a,ratio:e.ratio||c||a/b},0,d===kd?!0:"*"))}function fb(a,b,d,f,g){bb(a,b,function(a,h,i,j,k,l){function m(a){var b=B(h);Mc(a,{index:b,src:v,frame:_c[b]})}function n(){s.remove(),c.Fotorama.cache[v]="error",i.html&&"stage"===b||!w||w===v?(v&&!i.html?(j.trigger("f:error").removeClass(ac).addClass(_b),m("error")):"stage"===b&&(j.trigger("f:load").removeClass(ac+" "+_b).addClass(bc),m("load"),cb()),l.state="error",!(ad>1)||i.html||i.deleted||i.video||q||(i.deleted=!0,Gd.splice(h,1))):(i[u]=v=w,fb([h],b,d,f,!0))}function o(){var a=r.width,g=r.height,k=a/g;t.measures={width:a,height:g,ratio:k},cb(a,g,k,h),s.off("load error").addClass(fc+(q?" "+gc:"")).prependTo(j),F(s,d||ie,f||i.fit||e.fit),c.Fotorama.cache[v]="loaded",l.state="loaded",setTimeout(function(){j.trigger("f:load").removeClass(ac+" "+_b).addClass(bc+" "+(q?cc:dc)),"stage"===b&&m("load")},5)}function p(){var a=10;D(function(){return!Dd||!a--&&!yc},function(){o()})}if(j){var q=Gd.fullScreen&&i.full&&!l.$full&&"stage"===b;if(!l.$img||g||q){var r=new Image,s=c(r),t=s.data();l[q?"$full":"$img"]=s;var u="stage"===b?q?"full":"img":"thumb",v=i[u],w=q?null:i["stage"===b?"thumb":"img"];if("navThumb"===b&&(j=l.$wrap),!v)return n(),void 0;c.Fotorama.cache[v]?function x(){"error"===c.Fotorama.cache[v]?n():"loaded"===c.Fotorama.cache[v]?setTimeout(p,0):setTimeout(x,100)}():(c.Fotorama.cache[v]="*",s.on("load",p).on("error",n)),r.src=v}}})}function gb(){var a=Gd.activeFrame[Hc];a&&!a.data().state&&(U(a),a.on("f:load f:error",function(){a.off("f:load f:error"),V()}))}function hb(a,b){bb(a,b,function(a,d,f,g,h,i){g||(g=f[h]=Od[h].clone(),i=g.data(),i.data=f,"stage"===b?(f.html&&c('<div class="'+kc+'"></div>').append(f._html?c(f.html).removeAttr("id").html(f._html):f.html).appendTo(g),e.captions&&f.caption&&c('<div class="'+oc+'"></div>').append(f.caption).appendTo(g),f.video&&g.addClass(xb).append(de.clone()),Rd=Rd.add(g)):"navDot"===b?Yd=Yd.add(g):"navThumb"===b&&(i.$wrap=g.children(":first"),Zd=Zd.add(g),f.video&&g.append(de.clone())))})}function ib(a,b,c){return a&&a.length&&F(a,b,c)}function jb(a){bb(a,"stage",function(a,b,d,f,g,h){if(f){me[Hc][B(b)]=f.css(c.extend({left:rd?0:o(b,ie.w,Dc,fd)},rd&&k(0))),C(f[0])&&(f.appendTo(Qd),Tc(d.$video));var i=d.fit||e.fit;ib(h.$img,ie,i),ib(h.$full,ie,i)}})}function kb(a,b){if("thumbs"===md&&!isNaN(a)){var d=-a,e=-a+ie.w;Zd.each(function(){var a=c(this),f=a.data(),g=f.eq,h={h:td},i="cover";h.w=f.w,f.l+f.w<d||f.l>e||ib(f.$img,h,i)||b&&fb([g],"navThumb",h,i)})}}function Pb(a,b,d){if(!Pb[d]){var e="nav"===d&&nd,f=0;b.append(a.filter(function(){for(var a,b=c(this),d=b.data(),e=0,f=_c.length;f>e;e++)if(d.data===_c[e]){a=!0,d.eq=e;break}return a||b.remove()&&!1}).sort(function(a,b){return c(a).data().eq-c(b).data().eq}).each(function(){if(e){var a=c(this),b=a.data(),d=Math.round(td*b.data.thumbratio)||sd;b.l=f,b.w=d,a.css({width:d}),f+=d+Dc}})),Pb[d]=!0}}function Qb(a){return a-ne>ie.w/3}function Rb(a){return!(ld||ge+a&&ge-ad+a||cd)}function Sb(){Ud.each(function(a){c(this).toggleClass(Db,Rb(a))})}function ec(a){var b,c,d=a.data();return nd?(b=d.l,c=d.w):(b=a.position().left,c=a.width()),{c:b+c/2,min:-b+10*Dc,max:-b+ie.w-c-10*Dc}}function lc(a){var b=Gd.activeFrame[Fd].data();P(ae,{time:.9*a,pos:b.l,width:b.w-2*Dc})}function pc(a){var b=_c[a.guessIndex][Fd];if(b){var c=_d.min!==_d.max,d=c&&ec(Gd.activeFrame[Fd]),e=c&&(a.keep&&pc.l?pc.l:g((a.coo||ie.w/2)-ec(b).c,d.min,d.max)),f=c&&g(e,_d.min,_d.max),h=.9*a.time;P(Xd,{time:h,pos:f||0,onEnd:function(){kb(f,!0)}}),h&&kb(f),Sc(Wd,H(f,_d.min,_d.max)),pc.l=e}}function sc(){tc(Fd),le[Fd].push(Gd.activeFrame[Fd].addClass(Wb))}function tc(a){for(var b=le[a];b.length;)b.shift().removeClass(Wb)}function xc(a){var b=me[a];c.each(ed,function(a,c){delete b[c]}),c.each(b,function(a,c){delete b[a],c.detach()})}function Kc(a){fd=gd=ge;var b=Gd.activeFrame,c=b[Hc];c&&(tc(Hc),le[Hc].push(c.addClass(Wb)),a||Gd.show.onEnd(!0),s(Qd,0,!0),xc(Hc),jb(ed),$(),ab())}function Lc(a,b){a&&c.extend(ie,{width:a.width||ie.width,height:a.height,minwidth:a.minwidth,maxwidth:a.maxwidth,minheight:a.minheight,maxheight:a.maxheight,ratio:function(a){if(a){var b=Number(a);return isNaN(b)?(b=a.split("/"),Number(b[0]/b[1])||d):b}}(a.ratio)})&&!b&&c.extend(e,{width:ie.width,height:ie.height,minwidth:ie.minwidth,maxwidth:ie.maxwidth,minheight:ie.minheight,maxheight:ie.maxheight,ratio:ie.ratio})}function Mc(b,c,d){a.trigger(lb+":"+b,[Gd,c]),Gd.prevent[b]?delete Gd.prevent[b]:(d||f)()}function Nc(){clearTimeout(Oc.t),Dd=1,e.stopautoplayontouch?Gd.stopAutoplay():Ad=!0}function Oc(){Oc.t=setTimeout(function(){Dd=0},Bc+Ac)}function Pc(){Ad=!(!cd&&!Bd)}function Qc(){if(clearTimeout(Qc.t),!e.autoplay||Ad)return Gd.autoplay&&(Gd.autoplay=!1,Mc("stopautoplay")),void 0;Gd.autoplay||(Gd.autoplay=!0,Mc("startautoplay"));var a=ge;Qc.t=setTimeout(function(){var b=Gd.activeFrame[Hc].data();D(function(){return b.state||a!==ge},function(){Ad||a!==ge||Gd.show(ld?">":B(ge+1))})},e.autoplay)}function Rc(){Gd.fullScreen&&(Gd.fullScreen=!1,wc&&_.cancel(Jd),eb.removeClass(mb),db.removeClass(mb),a.removeClass(Zb).insertAfter(Nd),ie=c.extend({},Cd),Tc(cd,!0,!0),Xc("x",!1),Gd.resize(),fb(ed,"stage"),N(yd,xd),Mc("fullscreenexit"))}function Sc(a,b){vd&&(a.removeClass(Ub+" "+Vb),b&&!cd&&a.addClass(b.replace(/^|\s/g," "+Tb+"--")))}function Tc(a,b,c){b&&(Od.removeClass(pb),cd=!1,r()),a&&a!==cd&&(a.remove(),Mc("unloadvideo")),c&&(Pc(),Qc())}function Uc(a){Od.toggleClass(sb,a)}function Vc(a){if(!je.flow){var b=a?a.pageX:Vc.x,c=!Rb(Qb(b))&&e.click;Vc.p===c||!rd&&e.swipe||!Pd.toggleClass(Bb,c)||(Vc.p=c,Vc.x=b)}}function Wc(a,b){var f=a.target,g=c(f);g.hasClass(mc)?Gd.playVideo():f===ce?Gd[(Gd.fullScreen?"cancel":"request")+"FullScreen"]():cd?f===fe&&Tc(cd,!0,!0):Mc("stagetap",d,function(){b?Uc():e.click&&Gd.show({index:a.shiftKey||!Qb(a._x)?"<":">",slow:a.altKey,direct:!0})})}function Xc(a,b){je[a]=ke[a]=b}function Yc(a,b){var d=c(this).data().eq;Gd.show({index:d,slow:a.altKey,direct:!0,coo:a._x-Wd.offset().left,time:b})}function Zc(){q(),w(),$c.ok||(e.hash&&location.hash&&(kd=I(location.hash.replace(/^#/,""),_c,0===Gd.index)),ge=fd=gd=hd=kd=S(kd)||0),ad?(cd&&Tc(cd,!0),ed=[],xc(Hc),Gd.show({index:ge,time:0}),Gd.resize()):Gd.destroy()}function $c(){$c.ok||($c.ok=!0,Mc("ready"))}db=db||c("html"),eb=eb||c("body");var _c,ad,bd,cd,dd,ed,fd,gd,hd,id,jd,kd,ld,md,nd,od,pd,qd,rd,sd,td,ud,vd,wd,xd,yd,zd,Ad,Bd,Cd,Dd,Ed,Fd,Gd=this,Hd=c.now(),Id=lb+Hd,Jd=a[0],Kd=1,Ld=a.data(),Md=c("<style></style>"),Nd=c(K(Yb)),Od=c(K(nb)),Pd=c(K(vb)).appendTo(Od),Qd=(Pd[0],c(K(yb)).appendTo(Pd)),Rd=c(),Sd=c(K(Cb+" "+Eb,K(Gb))),Td=c(K(Cb+" "+Fb,K(Gb))),Ud=Sd.add(Td).appendTo(Pd),Vd=c(K(Ib)),Wd=c(K(Hb)).appendTo(Vd),Xd=c(K(Jb)).appendTo(Wd),Yd=c(),Zd=c(),$d=Qd.data(),_d=Xd.data(),ae=c(K(jc)).appendTo(Xd),be=c(K($b)),ce=be[0],de=c(K(mc)),ee=c(K(nc)).appendTo(Pd),fe=ee[0],ge=!1,he={},ie={},je={},ke={},le={},me={},ne=0,oe=[];Od[Hc]=c(K(wb)),Od[Jc]=c(K(Mb+" "+Ob,K(ic))),Od[Ic]=c(K(Mb+" "+Nb,K(hc))),le[Hc]=[],le[Jc]=[],le[Ic]=[],me[Hc]={},Gd.prevent={},uc&&Od.addClass(ob),Ld.fotorama=this,Gd.startAutoplay=function(a){return Gd.autoplay?this:(Ad=Bd=!1,u(a||e.autoplay),Qc(),this)},Gd.stopAutoplay=function(){return Gd.autoplay&&(Ad=Bd=!0,Qc()),this},Gd.show=function(a){var b;"object"!=typeof a?(b=a,a={}):b=a.index,b=">"===b?gd+1:"<"===b?gd-1:"<<"===b?0:">>"===b?ad-1:b,b=isNaN(b)?I(b,_c,!0):b,b="undefined"==typeof b?ge||0:b,Gd.activeIndex=ge=S(b),id=W(ge),jd=Z(ge),ed=[ge,id,jd],gd=ld?b:ge;var c=Math.abs(hd-gd),d=t(a.time,function(){return Math.min(ud*(1+(c-1)/12),2*ud)}),f=a.overPos;a.slow&&(d*=10),Gd.activeFrame=dd=_c[ge],Tc(cd,dd.i!==_c[B(fd)].i),hb(ed,"stage"),jb([gd,W(gd),Z(gd)]),Xc("go",!0),Mc("show",a.direct);var h=Gd.show.onEnd=function(b){h.ok||(h.ok=!0,gb(),fb(ed,"stage"),b||Kc(!0),Mc("showend",a.direct),Xc("go",!1),Vc(),Pc(),Qc())};if(rd){var i=dd[Hc],j=ge!==hd?_c[hd][Hc]:null;Q(i,j,Rd,{time:d,method:e.transition,onEnd:h},oe)}else P(Qd,{pos:-o(gd,ie.w,Dc,fd),overPos:f,time:d,onEnd:h,_001:!0});if(Sb(),md){sc();var k=R(ge+g(gd-hd,-1,1));pc({time:d,coo:k!==ge&&a.coo,guessIndex:"undefined"!=typeof a.coo?k:ge}),nd&&lc(d)}return zd="undefined"!=typeof hd&&hd!==ge,hd=ge,e.hash&&zd&&!Gd.eq&&E(dd.id||ge+1),this},Gd.requestFullScreen=function(){return pd&&!Gd.fullScreen&&(xd=qc.scrollTop(),yd=qc.scrollLeft(),N(0,0),Xc("x",!0),Cd=c.extend({},ie),a.addClass(Zb).appendTo(eb.addClass(mb)),db.addClass(mb),Tc(cd,!0,!0),Gd.fullScreen=!0,qd&&_.request(Jd),Gd.resize(),fb(ed,"stage"),Mc("fullscreenenter")),this},Gd.cancelFullScreen=function(){return qd&&_.is()?_.cancel(b):Rc(),this},b.addEventListener&&b.addEventListener(_.event,function(){!_c||_.is()||cd||Rc()}),Gd.resize=function(a){if(!_c)return this;Lc(Gd.fullScreen?{width:"100%",maxwidth:null,minwidth:null,height:"100%",maxheight:null,minheight:null}:O(a),Gd.fullScreen);var b=arguments[1]||0,c=arguments[2],d=ie.width,e=ie.height,f=ie.ratio,h=qc.height()-(md?Wd.height():0);return n(d)&&(Od.css({width:d,minWidth:ie.minwidth,maxWidth:ie.maxwidth}),d=ie.w=Od.width(),e=m(e)/100*h||l(e),e=e||f&&d/f,e&&(d=Math.round(d),e=ie.h=Math.round(g(e,m(ie.minheight)/100*h||l(ie.minheight),m(ie.maxheight)/100*h||l(ie.maxheight))),Kc(),Pd.addClass(zb).stop().animate({width:d,height:e},b,function(){Pd.removeClass(zb)}),md&&(Wd.stop().animate({width:d},b),pc({guessIndex:ge,time:b,keep:!0}),nd&&Pb.nav&&lc(b)),wd=c||!0,$c())),ne=Pd.offset().left,this},Gd.setOptions=function(a){return c.extend(e,a),Zc(),this},Gd.shuffle=function(){return _c&&L(_c)&&Zc(),this},Gd.destroy=function(){return Gd.cancelFullScreen(),Gd.stopAutoplay(),_c=Gd.data=null,j(),ed=[],xc(Hc),this},Gd.playVideo=function(){var a=Gd.activeFrame,b=a.video,d=ge;return"object"==typeof b&&a.videoReady&&(qd&&Gd.fullScreen&&Gd.cancelFullScreen(),D(function(){return!_.is()||d!==ge},function(){d===ge&&(a.$video=a.$video||c(c.Fotorama.jst.video(b)),a.$video.appendTo(a[Hc]),Od.addClass(pb),cd=a.$video,r(),Mc("loadvideo"))})),this},Gd.stopVideo=function(){return Tc(cd,!0,!0),this},Pd.on("mousemove",Vc),je=T(Qd,{onStart:Nc,onMove:function(a,b){Sc(Pd,b.edge)},onEnd:function(a){Sc(Pd),Oc();var b=(zc&&!Ed||a.touch)&&e.arrows;if(a.moved||b&&a.pos!==a.newPos){var c=p(a.newPos,ie.w,Dc,fd);Gd.show({index:c,time:rd?ud:a.time,overPos:a.overPos,direct:!0})}else a.aborted||Wc(a.startEvent,b)},getPos:function(){return-o(gd,ie.w,Dc,fd)},timeLow:1,timeHigh:1,friction:2,select:"."+Xb+", ."+Xb+" *",$wrap:Pd}),ke=T(Xd,{onStart:Nc,onMove:function(a,b){Sc(Wd,b.edge)},onEnd:function(a){function b(){pc.l=a.newPos,Pc(),Qc(),kb(a.newPos,!0)}if(Oc(),a.moved)a.pos!==a.newPos?(P(Xd,{time:a.time,pos:a.newPos,overPos:a.overPos,onEnd:b}),kb(a.newPos),Sc(Wd,H(a.newPos,_d.min,_d.max))):b();else{var c=a.$target.closest("."+Mb,Xd)[0];c&&Yc.call(c,a.startEvent)}},timeLow:.5,timeHigh:2,friction:5,$wrap:Wd}),Od.hover(function(){setTimeout(function(){Dd||(Ed=!0,Uc(!Ed))},0)},function(){Ed&&(Ed=!1,Uc(!Ed))}),J(Ud,function(a){a.preventDefault(),cd?Tc(cd,!0,!0):(Oc(),Gd.show({index:Ud.index(this)?">":"<",slow:a.altKey,direct:!0}))},{onStart:function(){Nc(),je.control=!0},tail:je}),c.each("load push pop shift unshift reverse sort splice".split(" "),function(a,b){Gd[b]=function(){return _c=_c||[],"load"!==b?Array.prototype[b].apply(_c,arguments):arguments[0]&&"object"==typeof arguments[0]&&arguments[0].length&&(_c=arguments[0]),Zc(),Gd}}),Zc()},c.fn.fotorama=function(a){return this.each(function(){var b=this,d=c(this),e=d.data(),f=e.fotorama;f?f.setOptions(a):D(function(){return!B(b)},function(){e.urtext=d.html(),new c.Fotorama(d,c.extend({},{width:null,minwidth:null,maxwidth:"100%",height:null,minheight:null,maxheight:null,ratio:null,nav:"dots",navposition:"bottom",thumbwidth:Ec,thumbheight:Ec,arrows:!0,click:!0,swipe:!0,allowfullscreen:!1,fit:"contain",transition:"slide",transitionduration:Bc,captions:!0,hash:!1,autoplay:!1,stopautoplayontouch:!0,keyboard:!1,loop:!1,shuffle:!1,shadows:!0},a,e))})})},c.Fotorama.instances=[],c.Fotorama.cache={},c=c||{},c.Fotorama=c.Fotorama||{},c.Fotorama.jst=c.Fotorama.jst||{},c.Fotorama.jst.style=function(a){var b,c="";return Z.escape,c+=".fotorama"+(null==(b=a.s)?"":b)+" .fotorama__nav--thumbs .fotorama__nav__frame{\npadding:"+(null==(b=a.m)?"":b)+"px;\nheight:"+(null==(b=a.h)?"":b)+"px}\n.fotorama"+(null==(b=a.s)?"":b)+" .fotorama__thumb-border{\nheight:"+(null==(b=a.h-a.m*(a.q?0:2))?"":b)+"px;\nborder-width:"+(null==(b=a.m)?"":b)+"px;\nmargin-top:"+(null==(b=a.m)?"":b)+"px}"},c.Fotorama.jst.video=function(a){function b(){c+=d.call(arguments,"")}var c="",d=(Z.escape,Array.prototype.join);return c+='<div class="fotorama__video"><iframe src="',b("youtube"==a.type?"http://youtube.com/embed/"+a.id+"?autoplay=1":"vimeo"==a.type?"http://player.vimeo.com/video/"+a.id+"?autoplay=1&amp;badge=0":a.id),c+='" frameborder="0" allowfullscreen></iframe></div>'},c(function(){c("."+lb+':not([data-auto="false"])').fotorama()})}(window,document,jQuery);