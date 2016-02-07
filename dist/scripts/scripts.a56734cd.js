!function(){"use strict";angular.module("app.home",["ui.router","app.example","app.core"])}(),function(){"use strict";function a(a){a.state("home",{url:"/",templateUrl:"modules/home/home.tpl.html",controller:"HomeController",controllerAs:"home",data:{requiresLogin:!1}})}angular.module("app.home").config(a),a.$inject=["$stateProvider"]}(),function(){"use strict";function a(a,b){function c(a){var b={lineChart:a.lineChart,pieChart:a.pieChart};return b}function d(){var a;return a=b.getWeeklyData(),console.log("weeklydata..."),console.log(a),c(a)}function e(a,b){function c(a,b){j.datum(a).append("circle").attr("class","lineChart--circle").attr("r",0).attr("cx",function(a){return t(a.date)+o/2}).attr("cy",function(a){return w(a.value)}).on("mouseenter",function(a){d3.select(this).attr("class","lineChart--circle lineChart--circle__highlighted").attr("r",7),a.active=!0,f(a)}).on("mouseout",function(a){d3.select(this).attr("class","lineChart--circle").attr("r",6),a.active&&(e(),a.active=!1)}).on("click touch",function(a){a.active?f(a):e()}).transition().delay(i/10*b).attr("r",6)}function d(a){j=s.append("g"),a.forEach(function(a,b){c(a,b)})}function e(){j.selectAll(".lineChart--bubble").remove()}function f(a){var b=j.append("g").attr("class","lineChart--bubble").attr("transform",function(){var b="translate(";return b+=t(a.date),b+=", ",b+=w(a.value)-p-q,b+=")"});b.append("path").attr("d","M2.99990186,0 C1.34310181,0 0,1.34216977 0,2.99898218 L0,47.6680579 C0,49.32435 1.34136094,50.6670401 3.00074875,50.6670401 L44.4095996,50.6670401 C48.9775098,54.3898926 44.4672607,50.6057129 49,54.46875 C53.4190918,50.6962891 49.0050244,54.4362793 53.501875,50.6670401 L94.9943116,50.6670401 C96.6543075,50.6670401 98,49.3248703 98,47.6680579 L98,2.99898218 C98,1.34269006 96.651936,0 95.0000981,0 L2.99990186,0 Z M2.99990186,0").attr("width",o).attr("height",p);var c=b.append("text").attr("class","lineChart--bubble--text");c.append("tspan").attr("class","lineChart--bubble--label").attr("x",o/2).attr("y",p/3).attr("text-anchor","middle").text(a.label),c.append("tspan").attr("class","lineChart--bubble--value").attr("x",o/2).attr("y",p/4*3).attr("text-anchor","middle").text(a.value)}function g(a,b){return function(c){var d=d3.interpolateArray(c,a);return function(a){return b(d(a))}}}var h=d3.time.format("%Y-%m-%d").parse;console.log("drawLineChart...."),console.log(b),b=b.map(function(a){return a.date=h(a.date),a});var j,k=document.getElementById(a),l=k.clientWidth,m=.4*l,n={top:30,right:10,left:10},o=98,p=55,q=10,r=d3.select(k),s=r.select("svg").attr("width",l).attr("height",m+n.top),t=d3.time.scale().range([0,l-o]),u=d3.svg.axis().scale(t).ticks(8).tickSize(-m),v=d3.svg.axis().scale(t).ticks(16).tickSize(-m).tickFormat(""),w=d3.scale.linear().range([m,0]),x=d3.svg.axis().scale(w).ticks(12).tickSize(l).tickFormat("").orient("right"),y=d3.svg.area().interpolate("linear").x(function(a){return t(a.date)+o/2}).y0(m).y1(function(a){return w(a.value)}),z=d3.svg.line().interpolate("linear").x(function(a){return t(a.date)+o/2}).y(function(a){return w(a.value)}),A=b.map(function(a){return{date:a.date,value:0}});t.domain([b[0].date,b[b.length-1].date]),w.domain([0,d3.max(b,function(a){return a.value})+700]),s.append("g").attr("class","lineChart--xAxisTicks").attr("transform","translate("+o/2+","+m+")").call(v),s.append("g").attr("class","lineChart--xAxis").attr("transform","translate("+o/2+","+(m+7)+")").call(u),s.append("g").attr("class","lineChart--yAxisTicks").call(x),s.append("path").datum(A).attr("class","lineChart--areaLine").attr("d",z).transition().duration(i).delay(i/2).attrTween("d",g(b,z)).each("end",function(){d(b)}),s.append("path").datum(A).attr("class","lineChart--area").attr("d",y).transition().duration(i).attrTween("d",g(b,y))}function f(a,b){function c(){var a=m.append("g").attr("class","pieChart--center");a.append("circle").attr("class","pieChart--center--outerCircle").attr("r",0).attr("filter","url(#pieChartDropShadow)").transition().duration(i).delay(j).attr("r",h-50),a.append("circle").attr("id","pieChart-clippy").attr("class","pieChart--center--innerCircle").attr("r",0).transition().delay(j).duration(i).attr("r",h-55).attr("fill","#fff")}function d(a,b){var c,d,e,g=b.getBBox(),h=.3*f;g.x+g.width/2>0?(d=n.append("g").attr("width",h).attr("transform","translate("+(f-h)+","+(g.height+g.y)+")"),c="end",e="right"):(d=n.append("g").attr("width",h).attr("transform","translate(0,"+(g.height+g.y)+")"),c="start",e="left"),d.data([100*a.value]).append("text").text("0 %").attr("class","pieChart--detail--percentage").attr("x","left"===e?0:h).attr("y",-10).attr("text-anchor",c).transition().duration(i).tween("text",function(a){var b=d3.interpolateRound(+this.textContent.replace(/\s%/gi,""),a);return function(a){this.textContent=b(a)+" %"}}),d.append("line").attr("class","pieChart--detail--divider").attr("x1",0).attr("x2",0).attr("y1",0).attr("y2",0).transition().duration(i).attr("x2",h),d.data([a.description]).append("foreignObject").attr("width",h).attr("height",100).append("xhtml:body").attr("class","pieChart--detail--textContainer pieChart--detail__"+e).html(a.description)}var e=document.getElementById(a),f=e.clientWidth,g=.4*f,h=Math.min(f,g)/2,k=d3.select(e),l=k.select("svg").attr("width",f).attr("height",g),m=l.append("g").attr("transform","translate("+f/2+","+g/2+")"),n=l.append("g").attr("class","pieChart--detailedInformation"),o=(2*Math.PI,d3.layout.pie().value(function(a){return a.value})),p=d3.svg.arc().outerRadius(h-20).innerRadius(0);m.datum(b).selectAll("path").data(o).enter().append("path").attr("class",function(a){return"pieChart__"+a.data.color}).attr("filter","url(#pieChartInsetShadow)").attr("d",p).each(function(){this._current={startAngle:0,endAngle:0}}).transition().duration(i).attrTween("d",function(a){var b=d3.interpolate(this._current,a);return this._current=b(0),function(a){return p(b(a))}}).each("end",function(a){d(a.data,this)});c()}function g(){var a=d();console.log(a),f("pieChart",a.pieChart),e("lineChart",a.lineChart)}var h=this;h.items=a.getSomething();var i=1500,j=500;g()}angular.module("app.home").controller("HomeController",a),a.$inject=["ExampleService","DataService"]}(),function(){"use strict";angular.module("app.example",[])}(),function(){"use strict";function a(){function a(){return[{value:"thank"},{value:"you"},{value:"for"},{value:"trying"}]}var b={getSomething:a};return b}angular.module("app.example").factory("ExampleService",a)}(),function(){"use strict";angular.module("app.core",[])}(),function(){"use strict";function a(a){var b={getWeeklyData:function(){return a.get("https://api.thingspeak.com/channels/61942/fields/2.json?results=7").then(function(a){return a.data})}};return b}angular.module("app.core").factory("DataService",a),a.$inject=["$http"]}(),function(){"use strict";angular.module("app",["app.home","app.example","app.core"])}(),function(){"use strict";function a(a){a.otherwise("/")}angular.module("app").config(a),a.$inject=["$urlRouterProvider"]}();