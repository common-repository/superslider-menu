function superslidermenu(e,t,n,r,i,s,o,u,a,f,l,c){function E(e){var t=0;var n=$(e);var r=n.getElementsByTagName("a");var i=window.location.href.split("#")[0];for(var s=1;s<r.length;s++)if(r[s].href==i){S(r[s]);var t=1}if(t==0){var o=r[0];o.parentNode.addClass("active_nav")}}function S(e){if(e.hasChildNodes())for(var t=0;t<e.childNodes.length;t++)e.parentNode.insertBefore(e.childNodes[t].cloneNode(true),e);e.parentNode.addClass("active_nav");e.parentNode.removeChild(e)}function x(e,t,n,r){var i=$(n);var s=(new Element("div",{id:e,styles:{top:"0",height:"100%","z-index":"100",overflow:"hidden",position:"absolute"},"class":"myNavArrow"})).inject(i);T(e,t,r)}function T(e,t,n){var e=$(e);var r=t+" span"+", "+t+" div";navArrowFollow(e,r,"active_nav",0,22,n)}if(window.ie6)var h="100%";else var h="";var p=n;var d=r;var v=1;var n=$$(p+v);var r=$$(d+v);var m=i;var g=$$(t+m);var y="navArrow"+e;while(n.length>0){function b(e){n.each(function(t,n){t.addEvent("click",function(){Cookie.write("menuOpen"+e,n)})});g.each(function(t,n){t.addEvent("click",function(){Cookie.write("menuOpen"+e,n)})});if(Cookie.read("menuOpen"+e)){var t=Cookie.read("menuOpen"+e).toInt()}else{t=-1}menuOpenAt=t}mycounter=v-1;if(v==1){b(mycounter)}else if(v==2){b(mycounter)}else if(v==3){b(mycounter)}else if(v==4){b(mycounter)}else{menuOpenAt=-1}new Fx.Accordion(n,r,{opacity:u,display:menuOpenAt,alwaysHide:o,height:true,width:false,fixedHeight:false,fixedWidth:false,duration:a,transition:f,onComplete:function(){var e=$(this.elements[this.previous]);if(e&&e.offsetHeight>0)e.setStyle("height",h)},onActive:function(e,t){e.addClass("open");var n=e.parentNode;var r=new Fx.Morph(n,{duration:1100,transition:Fx.Transitions.Sine.easeOut});r.start(".tabopen");e.parentNode.getParent().setStyle("height",h);e.getParent().getParent().getParent().setStyle("height",h)},onBackground:function(e,t){e.removeClass("open");var n=e.parentNode;var r=new Fx.Morph(n,{duration:400,transition:Fx.Transitions.Sine.easeOut});r.start(".tabclosed")}});if(s=="on"){n.addEvent("mouseenter",function(){this.fireEvent("click")})}v++;n=$$(p+v);r=$$(d+v)}var w=t.replace("#","");E(w);if(l=="on"){x(y,t,w,c)}}