!function t(e,i,n){function s(o,r){if(!i[o]){if(!e[o]){var h="function"==typeof require&&require;if(!r&&h)return h(o,!0);if(a)return a(o,!0);throw new Error("Cannot find module '"+o+"'")}var p=i[o]={exports:{}};e[o][0].call(p.exports,function(t){var i=e[o][1][t];return s(i?i:t)},p,p.exports,t,e,i,n)}return i[o].exports}for(var a="function"==typeof require&&require,o=0;o<n.length;o++)s(n[o]);return s}({1:[function(t,e,i){!function(t,e){function i(t,e){var i;for(e>t&&(i=t,t=e,e=i);0!==e;)i=t%e,t=e,e=i;return t}function n(t){for(var e in t)t.hasOwnProperty(e)&&(r[e]=t[e])}var s=Math.abs,a=Math.floor,o=Math.round,r={autoReduce:!1},h=function(t,e){if(0===e)throw"Division by zero";t instanceof h?(this.n=t.n,this.d=t.d,this.s=t.s):"string"==typeof t?this._fromString(t):(this.n=s(t),e=e||1,this.d=s(e),this.s=t&&o(t*e/s(t*e)),r.autoReduce&&this.reduce())},p=/^ *(-?\d+(?! *\/)) *(?: (\d+) *\/ *(\d+))? *$/,c=/^ *(-?\d+) *\/ *(-?\d+) *$/;h.prototype._fromString=function(t){var e,i,n,a;if(a=p.exec(t))e=parseInt(a[1],10),a[2]?(this.d=parseInt(a[3],10),this.n=s(e)*this.d+parseInt(a[2],10),this.s=e&&o(e/s(e))):(this.n=s(e),this.d=1,this.s=e&&o(this.n/e));else{if(!(a=c.exec(t)))throw"Unparseable fraction";i=parseInt(a[1],10),n=parseInt(a[2],10),this.n=s(i),this.d=s(n),this.s=this.n&&o(this.n*this.d/(i*n))}r.autoReduce&&this.reduce()},h.prototype.copy=function(){return new h(this.n,this.d)},h.prototype.reduce=function(){var t=i(this.n,this.d);this.n=a(this.n/t),this.d=a(this.d/t)},h.prototype.plus=function(t){t instanceof h||(t=new h(t));var e=i(this.d,t.d);return new h(o(this.s*this.n*t.d/e+t.s*t.n*this.d/e),a(this.d*t.d/e))},h.prototype.minus=function(t){t instanceof h||(t=new h(t));var e=i(this.d,t.d);return new h(o(this.s*this.n*t.d/e-t.s*t.n*this.d/e),a(this.d*t.d/e))},h.prototype.times=function(t){return t instanceof h||(t=new h(t)),new h(this.s*this.n*t.s*t.n,this.d*t.d)},h.prototype.dividedby=function(t){return t instanceof h||(t=new h(t)),new h(this.s*this.n*t.s*t.d,this.d*t.n)},h.prototype.isZero=function(){return 0===this.n},h.prototype.isGreater=function(t){return t instanceof h||(t=new h(t)),this.s*this.n*t.d>t.s*t.n*this.d},h.prototype.isLess=function(t){return t instanceof h||(t=new h(t)),this.s*this.n*t.d<t.s*t.n*this.d},h.prototype.isEqual=function(t){return t instanceof h||(t=h(t)),this.s*this.n*t.d===t.s*t.n*this.d},h.prototype.toDecimal=function(){return this.s*this.n/this.d},e.Frac=h,e.setOptions=n;var l=function(t,e,i){t instanceof l?(this.x=t.x,this.y=t.y,this.label=t.label):t instanceof Array?(this.x=new h(t[0]),this.y=new h(t[1]),this.label=e):(this.x=new h(t),this.y=new h(e),this.label=i)};e.Point=l;var u=function(t,e,i){3===arguments.length?this._fromStandard(t,e,i):"string"==typeof t?this._fromString(t):t instanceof Array||t instanceof l?this._fromPoints(t,e):e instanceof Array||e instanceof l?this._fromPointSlope(t,e):this._fromSlopeIntercept(t,e)};u.prototype._fromStandard=function(t,e,i){this.a=new h(t),this.b=new h(e),this.c=new h(i),this.format="std"},u.prototype._fromPointSlope=function(t,e){t=new h(t),e=new l(e),this.a=t.times(-1),this.b=new h(1),this.c=this.a.times(e.x).plus(e.y),this.format="ps",this.displayPoint=e},u.prototype._fromSlopeIntercept=function(t,e){this._fromPointSlope(t,[0,e]),this.format="si"},u.prototype._fromPoints=function(t,e){if(t=new l(t),e=new l(e),t.x.isEqual(e.x))this.a=new h(1),this.b=new h(0),this.c=t.x.copy(),this.format="std";else{var i=t.y.minus(e.y),n=t.x.minus(e.x);this._fromPointSlope(i.dividedby(n),t),this.format="si"}},u.prototype.contains=function(t){return t=new l(t),this.a.times(t.x).plus(this.b.times(t.y)).isEqual(this.c)},u.prototype.getFunction=function(){if(this.b.isZero())return!1;var t=this.a.times(-1).dividedby(this.b).toDecimal(),e=this.c.dividedby(this.b).toDecimal();return function(i){return t*i+e}},u.prototype.getInverseFunction=function(){if(this.a.isZero())return!1;var t=this.b.times(-1).dividedby(this.a).toDecimal(),e=this.c.dividedby(this.a).toDecimal();return function(i){return t*i+e}},u.prototype.getXintercept=function(){return this.b.isZero()?this.c.dividedby(this.a).toDecimal():!1};new RegExp,new RegExp,new RegExp;u.prototype._fromString=function(){throw"Not implemented"},e.LinEq=u}(e,i)},{}],2:[function(t,e,i){!function(e){var i=t("./utilities.js"),n={width:800,height:600,background:"white"},s=function(t,e){return i.merge(e,n),this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.canvas.id=t,this.resize(e),this.background=e.background,this};s.prototype.resize=function(t){this.canvas.width=t.width,this.canvas.height=t.height},s.prototype.attach=function(t){return"string"==typeof t&&(t=document.getElementById(t)),this.parent=t,t.appendChild(this.canvas),this.resize({width:t.clientWidth,height:t.clientHeight}),this.clear(),this},s.prototype.clear=function(){this.context.save(),this.context.fillStyle=this.background,this.context.fillRect(0,0,this.canvas.width,this.canvas.height),this.context.restore()};var a={fillStyle:!0,strokeStyle:!0,lineWidth:!0,globalAlpha:!0,lineCap:!0,lineJoin:!0,miterLimit:!0};s.prototype.setOptions=function(t){"color"in t&&(this.context.fillStyle=t.color,this.context.strokeStyle=t.color);for(var e in t)e in a&&(this.context[e]=t[e])},s.prototype.method=function(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return this.context[t].apply(this.context,e)},s.prototype.get=function(t){return this.context[t]},s.prototype.set=function(t,e){this.context[t]=e},e.exports=s}(e,i)},{"./utilities.js":7}],3:[function(t,e,i){!function(e){var i=t("./canvas-wrapper.js"),n=t("./utilities.js"),s=Math.PI,a=Math.atan2,o=Math.min,r=Math.max,h=Math.floor,p=Math.ceil,c={acute:{path:[-5,-3,0,0,-5,3],filled:!1},"acute-filled":{path:[-5,-3,0,0,-5,3],filled:!0},right:{path:[-5,-5,0,0,-5,5],filled:!1},"right-filled":{path:[-5,-5,0,0,-5,5],filled:!0}},l={minx:-10,miny:-10,maxx:10,maxy:10,square:!0,expand:!0,padding:3},u=function(t,e){n.merge(e,l),i.call(this,t,e)};u.prototype=Object.create(i.prototype),u.prototype.resize=function(t){i.prototype.resize.call(this,t);var e=t.square||this.square,n=t.expand||this.expand,s=t.padding||this.padding,a=t.padding||this.padding,r=t.width-2*s,c=t.height-2*a,l=t.minx||this.minx,u=t.miny||this.miny,d=t.maxx||this.maxx,f=t.maxy||this.maxy,m=r/(d-l),x=c/(f-u);if(e&&m!==x)if(x>m){x=m;var g=f-u;if(n){var y=h(c/x);u-=h((y-g)/2),f+=p((y-g)/2)}else a+=(c-g*x)/2}else m=x,g=d-l,n?(y=h(r/m),l-=h((y-g)/2),d+=p((y-g)/2)):s+=(r-y*m)/2;this.minx=l,this.miny=u,this.maxx=d,this.maxy=f,this.dx=m,this.dy=x,this.ds=o(m,x),this.padding=this.padding||t.padding,this.xpadding=s,this.ypadding=a,this.square=e,this.expand=n},u.prototype.clear=function(){i.prototype.clear.call(this);this.canvas.width,this.canvas.height;this.context.save(),this.context.strokeStyle="black",this.context.globalAlpha=.5;for(var t=this.minx,e=0;t<=this.maxx;t++,e+=this.dx)0===t?this.drawLine(t,this.miny,t,this.maxy,{globalAlpha:1,lineWidth:3,arrows:"acute-filled"}):this.drawLine(t,this.miny,t,this.maxy);for(var t=this.miny,e=0;t<=this.maxy;t++,e+=this.dy)0===t?this.drawLine(this.minx,t,this.maxx,t,{globalAlpha:1,lineWidth:3,arrows:"acute-filled"}):this.drawLine(this.minx,t,this.maxx,t);this.context.restore()},i.prototype.drawLine=function(t,e,i,n,o){if(o=o||{},this.context.save(),this.context.beginPath(),this.setOptions(o),this._transform(),this.context.moveTo(t,e),this.context.lineTo(i,n),this.context.save(),this.context.lineWidth=this.context.lineWidth/this.ds,this.context.stroke(),this.context.restore(),o.arrows){var r=a(n-e,i-t);this._drawArrowHead(t,e,r+s,o.arrows),this._drawArrowHead(i,n,r,o.arrows)}return this.context.restore(),this},u.prototype._transform=function(){this.context.translate(this.xpadding,this.ypadding),this.context.scale(this.dx,-this.dy),this.context.translate(-this.minx,-this.maxy)};var d={shape:"circle",radius:3,fill:!0,stroke:!1,color:"black"};u.prototype.plotPoint=function(t,e){switch(n.merge(e,d),this.context.save(),this.setOptions(e),this._transform(),this.context.beginPath(),this.context.translate(t.x.toDecimal(),t.y.toDecimal()),this.context.scale(1/this.dx,1/this.dy),e.shape){case"circle":this.context.arc(0,0,e.radius,0,2*s);break;case"square":this.context.moveTo(e.radius,e.radius),this.context.lineTo(-e.radius,e.radius),this.context.lineTo(-e.radius,-e.radius),this.context.lineTo(e.radius,-e.radius),this.context.closePath();break;case"x":this.context.moveTo(e.radius,e.radius),this.context.lineTo(-e.radius,-e.radius),this.context.moveTo(-e.radius,e.radius),this.context.lineTo(e.radius,-e.radius),e.stroke=!0,e.fill=!1}return e.fill&&this.context.fill(),e.stroke&&this.context.stroke(),this.context.restore(),this},u.prototype.graphLinear=function(t,e){e=e||{},e.arrows="acute",e.lineWidth=2;var i=t.getFunction();if(!i){var n=t.getXintercept();return void this.drawLine(n,this.miny,n,this.maxy,e)}var s=t.getInverseFunction();if(!s){var a=i(0);return void this.drawLine(this.minx,a,this.maxx,a,e)}var h=s(this.maxy),p=s(this.miny),c=r(this.minx,o(h,p)),l=o(this.maxx,r(h,p));this.drawLine(c,i(c),l,i(l),e)},u.prototype._drawArrowHead=function(t,e,i,n){n=c[n],this.context.save(),this.context.translate(t,e),this.context.rotate(i),this.context.scale(1/this.dx,1/this.dy),this.context.beginPath(),this.context.moveTo(n.path[0],n.path[1]);for(var s=2,a=n.path.length;a>s;s+=2)this.context.lineTo(n.path[s],n.path[s+1]);n.filled&&this.context.fill(),this.context.miterLimit=3,this.context.stroke(),this.context.restore()},e.exports=u}(e,i)},{"./canvas-wrapper.js":2,"./utilities.js":7}],4:[function(t){!function(e){var i=(t("./graphing-blocks.js"),t("./cartesian-canvas.js")),n=t("./graphing.js");window.onload=function(){var t=.95*window.innerWidth,s=Math.floor(.9*window.innerHeight),a=Math.min(800,Math.floor(.5*t)),o=Math.min(s,Math.floor(1.33*a)),r=Math.floor(t-a-48),h=Math.min(s,r),p=document.getElementById("blocklydiv"),c=document.getElementById("canvasdiv");p.style.width=a+"px",p.style.height=o+"px",c.style.width=r+"px",c.style.height=h+"px",e.inject(p,{toolbox:document.getElementById("toolbox"),comments:!0});var l=new i("newcanvas",{width:200,height:200});l.attach("canvasdiv"),n.start(l)}}(Blockly)},{"./cartesian-canvas.js":3,"./graphing-blocks.js":5,"./graphing.js":6}],5:[function(t,e,i){!function(e){var i=t("./algebra.js");e.Blocks.grapher_number={init:function(){this.setColour(320),this.appendDummyInput().appendField(new e.FieldTextInput("1",this.validator),"NUM"),this.setOutput(!0,"Number"),this.setTooltip("Integer or fractions in the form n/d")},validator:function(t){try{{new i.Frac(t)}return t}catch(e){return null}}},e.Blocks.grapher_pair={init:function(){this.setColour(120),this.appendDummyInput().appendField("("),this.appendValueInput("X").setCheck("Number"),this.appendDummyInput().appendField(","),this.appendValueInput("Y").setCheck("Number"),this.appendDummyInput().appendField(")"),this.setPreviousStatement(!0,"Pair"),this.setNextStatement(!0,"Pair"),this.setInputsInline(!0),this.setTooltip("Ordered (x,y) pair")}},e.Blocks.grapher_si_equation={init:function(){this.setColour(240),this.appendDummyInput().appendField("y ="),this.appendValueInput("M").setCheck("Number"),this.appendDummyInput().appendField("x +"),this.appendValueInput("B").setCheck("Number"),this.setNextStatement(!0,["Table","Graph"]),this.setInputsInline(!0),this.setTooltip("Slope intercept equation")}},e.Blocks.grapher_std_equation={init:function(){this.setColour(240),this.appendValueInput("A").setCheck("Number"),this.appendDummyInput().appendField("x +"),this.appendValueInput("B").setCheck("Number"),this.appendDummyInput().appendField("y ="),this.appendValueInput("C").setCheck("Number"),this.setNextStatement(!0,["Table","Graph"]),this.setInputsInline(!0),this.setTooltip("Standard form equation")}},e.Blocks.grapher_ps_equation={init:function(){this.setColour(240),this.appendDummyInput().appendField("y - "),this.appendValueInput("Y0").setCheck("Number"),this.appendDummyInput().appendField(" = "),this.appendValueInput("M").setCheck("Number"),this.appendDummyInput().appendField("(x - "),this.appendValueInput("X0").setCheck("Number"),this.appendDummyInput().appendField(")"),this.setNextStatement(!0,["Table","Graph"]),this.setInputsInline(!0),this.setTooltip("Point-slope equation")}},e.Blocks.grapher_table={init:function(){this.setColour(180),this.appendDummyInput().appendField("function table").appendField(new e.FieldColour("#ff0000"),"COLOR"),this.appendStatementInput("PAIRS").setCheck("Pair"),this.setPreviousStatement(!0,"Table"),this.setNextStatement(!0,"Graph"),this.setTooltip("Table of points")}},e.Blocks.grapher_graph={init:function(){this.setColour(120),this.appendDummyInput().appendField("draw graph").appendField(new e.FieldColour("#ff0000"),"COLOR"),this.setPreviousStatement(!0,"Graph"),this.setTooltip("Attach to equation or table to graph")}}}(Blockly,e,i)},{"./algebra.js":1}],6:[function(t,e,i){!function(e,i,n){function s(){var t=n.mainWorkspace.getTopBlocks();h.clear();for(var e=0,i=t.length,s=t[e];i>e;e++,s=t[1])switch(s.type){case"grapher_table":o(s);break;case"grapher_si_equation":case"grapher_std_equation":case"grapher_ps_equation":a(s);break;case"grapher_pair":s.setWarningText(null)}}function a(t){var e,i,n,s,a,r,c;switch(t.type){case"grapher_si_equation":e=t.getInputTargetBlock("M"),i=t.getInputTargetBlock("B");try{s=e&&new p.Frac(e.getFieldValue("NUM")),a=i&&new p.Frac(i.getFieldValue("NUM"))}catch(l){return}if(!s||!a)return;c=new p.LinEq(s,a);break;case"grapher_std_equation":e=t.getInputTargetBlock("A"),i=t.getInputTargetBlock("B"),n=t.getInputTargetBlock("C");try{s=e&&new p.Frac(e.getFieldValue("NUM")),a=i&&new p.Frac(i.getFieldValue("NUM")),r=i&&new p.Frac(n.getFieldValue("NUM"))}catch(l){return}if(!(s&&a&&r))return;c=new p.LinEq(s,a,r);break;case"grapher_ps_equation":e=t.getInputTargetBlock("Y0"),i=t.getInputTargetBlock("M"),n=t.getInputTargetBlock("X0");try{s=e&&new p.Frac(e.getFieldValue("NUM")),a=i&&new p.Frac(i.getFieldValue("NUM")),r=i&&new p.Frac(n.getFieldValue("NUM"))}catch(l){return}if(!(s&&a&&r))return;c=new p.LinEq(a,[r,s])}for(var u=t.nextConnection&&t.nextConnection.targetBlock();u;){if("grapher_table"===u.type)o(u,c);else if("grapher_graph"===u.type){var d=u.getFieldValue("COLOR");h.graphLinear(c,{color:d})}u=u.nextConnection&&u.nextConnection.targetBlock()}}function o(t,e){for(var i=t.getFieldValue("COLOR"),n=t.getInputTargetBlock("PAIRS");n;){var s=n.getInputTargetBlock("X"),a=n.getInputTargetBlock("Y"),o=s&&s.getFieldValue("NUM"),r=a&&a.getFieldValue("NUM");try{var c=new p.Point(o,r)}catch(l){c=null}c&&(e?e.contains(c)?(h.plotPoint(c,{color:i}),n.setWarningText(null)):(h.plotPoint(c,{globalAlpha:.5,color:i}),h.plotPoint(c,{shape:"x",color:"black",lineWidth:1}),n.setWarningText("This point is not on the graph of this equation")):(h.plotPoint(c,{shape:"square",globalAlpha:.75,color:i}),n.setWarningText(null))),n=n.nextConnection&&n.nextConnection.targetBlock()}}function r(t){h=t,n.addChangeListener(s)}var h,p=t("./algebra.js");i.start=r}(e,i,Blockly)},{"./algebra.js":1}],7:[function(t,e,i){!function(t,e){function i(t,e){t=t||{},e=e||{};for(var i in e)e.hasOwnProperty(i)&&!t.hasOwnProperty(i)&&(t[i]=e[i])}e.merge=i}(e,i)},{}]},{},[4]);