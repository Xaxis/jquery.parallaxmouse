/*!
 * jquery.parallaxmouse
 * 
 * @author Wil Neeley <william.neeley@gmail.com> (https://github.com/Xaxis)
 * @version 1.0.0
 * @license MIT
 */
!function(a,b,c,d){"use strict";function e(b,c){this._name=f,this._defaults=g,this.element=b,this.options=a.extend({},g,c),this.init()}var f="parallaxmouse",g={range:100,elms:[],invert:!1};a.extend(e.prototype,{init:function(){this.element=a(this.element),this.setInitialPositions(this.options.elms),this.parallaxElms(this.options.elms)},setInitialPositions:function(){a(this.options.elms).each(function(a,b){var c=b.el.position();b.el.hasClass("left")?(b.x=c.left,b.left=!0):(b.x=parseInt(b.el.css("right").replace("px")),b.left=!1),b.el.hasClass("top")?(b.y=c.top,b.top=!0):(b.y=parseInt(b.el.css("bottom").replace("px")),b.top=!1)})},parallaxElms:function(){var b=this;this.element.on("mousemove",function(c){var d=b.element.outerWidth(),e=b.element.outerHeight(),f=c.clientX,g=c.clientY,h=f/d,i=g/e;a(b.options.elms).each(function(a,c){var d=b.options.invert,e=b.options.range*h,f=b.options.range*i,g=d?c.x+e:c.x-e,j=d?c.y+f:c.y-f,k=g*c.rate,l=j*c.rate;c.left?c.el.css("left",c.x+-1*k):c.el.css("right",c.x+k),c.top?c.el.css("top",c.y+-1*l):c.el.css("bottom",c.y+l)})})}}),a.fn[f]=function(b){return this.each(function(){a.data(this,"plugin_"+f)||a.data(this,"plugin_"+f,new e(this,b))})}}(jQuery,window,document);