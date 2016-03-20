!function(){"use strict";angular.module("app.home",["ui.router","app.example","app.core"])}(),function(){"use strict";function a(a){a.state("home",{url:"/",templateUrl:"modules/home/home.tpl.html",controller:"HomeController",controllerAs:"vm",data:{requiresLogin:!1}})}angular.module("app.home").config(a),a.$inject=["$stateProvider"]}(),function(){"use strict";function a(a,b){function c(){b.getWeeklyData().then(function(a){var b=a.pieChart[0].count;0==b?f.currentOccupancy="Currently, nobody is in the office.":1==b?f.currentOccupancy="Currently, 1 person is in the office.":f.currentOccupancy="Currently, "+b+" people are in the office.",console.log("currentOccupancy: "+f.currentOccupancy),e("pieChart",a.pieChart),d("lineChart",a.lineChart)},function(a){console.log(a)})}function d(a,b){function c(a,b){j.datum(a).append("circle").attr("class","lineChart--circle").attr("r",0).attr("cx",function(a){return t(a.date)+o/2}).attr("cy",function(a){return w(a.value)}).on("mouseenter",function(a){d3.select(this).attr("class","lineChart--circle lineChart--circle__highlighted").attr("r",7),a.active=!0,f(a)}).on("mouseout",function(a){d3.select(this).attr("class","lineChart--circle").attr("r",6),a.active&&(e(),a.active=!1)}).on("click touch",function(a){a.active?f(a):e()}).transition().delay(g/10*b).attr("r",6)}function d(a){j=s.append("g"),a.forEach(function(a,b){c(a,b)})}function e(){j.selectAll(".lineChart--bubble").remove()}function f(a){var b=j.append("g").attr("class","lineChart--bubble").attr("transform",function(){var b="translate(";return b+=t(a.date),b+=", ",b+=w(a.value)-p-q,b+=")"});b.append("path").attr("d","M2.99990186,0 C1.34310181,0 0,1.34216977 0,2.99898218 L0,47.6680579 C0,49.32435 1.34136094,50.6670401 3.00074875,50.6670401 L44.4095996,50.6670401 C48.9775098,54.3898926 44.4672607,50.6057129 49,54.46875 C53.4190918,50.6962891 49.0050244,54.4362793 53.501875,50.6670401 L94.9943116,50.6670401 C96.6543075,50.6670401 98,49.3248703 98,47.6680579 L98,2.99898218 C98,1.34269006 96.651936,0 95.0000981,0 L2.99990186,0 Z M2.99990186,0").attr("width",o).attr("height",p);var c=b.append("text").attr("class","lineChart--bubble--text");c.append("tspan").attr("class","lineChart--bubble--label").attr("x",o/2).attr("y",p/3).attr("text-anchor","middle").text(a.label),c.append("tspan").attr("class","lineChart--bubble--value").attr("x",o/2).attr("y",p/4*3).attr("text-anchor","middle").text(a.value)}function h(a,b){return function(c){var d=d3.interpolateArray(c,a);return function(a){return b(d(a))}}}var i=d3.time.format("%Y-%m-%d").parse;b=b.map(function(a){return a.date=i(a.date),a});var j,k=document.getElementById(a),l=k.clientWidth,m=.4*l,n={top:30,right:10,left:10},o=98,p=55,q=10,r=d3.select(k),s=r.select("svg").attr("width",l).attr("height",m+n.top),t=d3.time.scale().range([0,l-o]),u=d3.svg.axis().scale(t).ticks(8).tickSize(-m),v=d3.svg.axis().scale(t).ticks(16).tickSize(-m).tickFormat(""),w=d3.scale.linear().range([m,0]),x=d3.svg.axis().scale(w).ticks(12).tickSize(l).tickFormat("").orient("right"),y=d3.svg.area().interpolate("linear").x(function(a){return t(a.date)+o/2}).y0(m).y1(function(a){return w(a.value)}),z=d3.svg.line().interpolate("linear").x(function(a){return t(a.date)+o/2}).y(function(a){return w(a.value)}),A=b.map(function(a){return{date:a.date,value:0}});t.domain([b[0].date,b[b.length-1].date]),w.domain([0,d3.max(b,function(a){return a.value})+50]),s.append("g").attr("class","lineChart--xAxisTicks").attr("transform","translate("+o/2+","+m+")").call(v),s.append("g").attr("class","lineChart--xAxis").attr("transform","translate("+o/2+","+(m+7)+")").call(u),s.append("g").attr("class","lineChart--yAxisTicks").call(x),s.append("path").datum(A).attr("class","lineChart--areaLine").attr("d",z).transition().duration(g).delay(g/2).attrTween("d",h(b,z)).each("end",function(){d(b)}),s.append("path").datum(A).attr("class","lineChart--area").attr("d",y).transition().duration(g).attrTween("d",h(b,y))}function e(a,b){function c(){var a=m.append("g").attr("class","pieChart--center");a.append("circle").attr("class","pieChart--center--outerCircle").attr("r",0).attr("filter","url(#pieChartDropShadow)").transition().duration(g).delay(h).attr("r",j-50),a.append("circle").attr("id","pieChart-clippy").attr("class","pieChart--center--innerCircle").attr("r",0).transition().delay(h).duration(g).attr("r",j-55).attr("fill","#fff")}function d(a,b){var c,d,e,h=b.getBBox(),i=.3*f;h.x+h.width/2>0?(d=n.append("g").attr("width",i).attr("transform","translate("+(f-i)+","+(h.height+h.y)+")"),c="end",e="right"):(d=n.append("g").attr("width",i).attr("transform","translate(0,"+(h.height+h.y)+")"),c="start",e="left"),d.data([100*a.value]).append("text").text("0 %").attr("class","pieChart--detail--percentage").attr("x","left"===e?0:i).attr("y",-10).attr("text-anchor",c).transition().duration(g).tween("text",function(a){var b=d3.interpolateRound(+this.textContent.replace(/\s%/gi,""),a);return function(a){this.textContent=b(a)+" %"}}),d.append("line").attr("class","pieChart--detail--divider").attr("x1",0).attr("x2",0).attr("y1",0).attr("y2",0).transition().duration(g).attr("x2",i),d.data([a.description]).append("foreignObject").attr("width",i).attr("height",100).append("xhtml:body").attr("class","pieChart--detail--textContainer pieChart--detail__"+e).html(a.description)}var e=document.getElementById(a),f=e.clientWidth,i=.4*f,j=Math.min(f,i)/2,k=d3.select(e),l=k.select("svg").attr("width",f).attr("height",i),m=l.append("g").attr("transform","translate("+f/2+","+i/2+")"),n=l.append("g").attr("class","pieChart--detailedInformation"),o=(2*Math.PI,d3.layout.pie().value(function(a){return a.value})),p=d3.svg.arc().outerRadius(j-20).innerRadius(0);m.datum(b).selectAll("path").data(o).enter().append("path").attr("class",function(a){return"pieChart__"+a.data.color}).attr("filter","url(#pieChartInsetShadow)").attr("d",p).each(function(){this._current={startAngle:0,endAngle:0}}).transition().duration(g).attrTween("d",function(a){var b=d3.interpolate(this._current,a);return this._current=b(0),function(a){return p(b(a))}}).each("end",function(a){d(a.data,this)});c()}var f=this;f.items=a.getSomething(),f.currentOccupancy="Currently, nobody is in the office";var g=2500,h=500;c()}angular.module("app.home").controller("HomeController",a),a.$inject=["ExampleService","DataService"]}(),function(){"use strict";angular.module("app.example",[])}(),function(){"use strict";function a(){function a(){return[{value:"thank"},{value:"you"},{value:"for"},{value:"trying"}]}var b={getSomething:a};return b}angular.module("app.example").factory("ExampleService",a)}(),function(){"use strict";angular.module("app.core",[])}(),function(){"use strict";function a(a){function b(a){var b=c(),e=a.feeds[0].field1;b.pieChart[0].count=e,0>e?e=0:e>d&&(e=d);var f=e/d,g=1-f;return b.pieChart[0].value=f,b.pieChart[1].value=g,b}function c(){var a={lineChart:[{date:"2016-02-01",label:"Mon @ 09:00",value:74},{date:"2016-02-02",label:"Tue @ 11:00",value:54},{date:"2016-02-03",label:"Wed @ 18:00",value:64},{date:"2016-02-04",label:"Thu @ 15:00",value:34},{date:"2016-02-05",label:"Fri @ 13:24",value:56},{date:"2016-02-06",label:"Sat @ 09:21",value:3},{date:"2016-02-07",label:"Sun @ 00:00",value:0},{date:"2016-02-08",label:"Mon @ 10:39",value:48},{date:"2016-02-09",label:"Tue @ 09:37",value:32},{date:"2016-02-10",label:"Wed @ 12:56",value:54},{date:"2016-02-11",label:"Thu @ 15:34",value:23},{date:"2016-02-12",label:"Fri @ 11:54",value:45},{date:"2016-02-13",label:"Sat @ 11:14",value:10},{date:"2016-02-14",label:"Sun @ 00:00",value:0},{date:"2016-02-15",label:"Sat @ 11:14",value:29},{date:"2016-02-16",label:"Sun @ 00:00",value:14}],pieChart:[{color:"red",description:"Occupied",title:"occupied",value:.48,count:0},{color:"blue",description:"free space",title:"free",value:.52,count:0}]};return a}var d=20,e="https://api.thingspeak.com/channels/61942/fields/",f="1.json?results=1",g={getWeeklyData:function(){return a.get(e+f).then(function(a){var c=b(a.data);return c})}};return g}angular.module("app.core").factory("DataService",a),a.$inject=["$http"]}(),function(){"use strict";angular.module("app",["app.home","app.example","app.core"])}(),function(){"use strict";function a(a){a.otherwise("/")}angular.module("app").config(a),a.$inject=["$urlRouterProvider"]}();