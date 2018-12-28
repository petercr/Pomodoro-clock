(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(57)},28:function(e,t,a){},30:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var s=a(0),i=a.n(s),n=a(16),r=a.n(n),c=(a(28),a(17)),o=a(18),l=a(20),m=a(19),h=a(21),u=a(1),d=(a(30),a(2)),b=a.n(d),k=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={timer:{minutes:1,seconds:0},break:{minutes:1,seconds:0},selection:"Session",hasStarted:!1,initSessionLength:1,initBreakLength:1,clockTimer:null,alarmTimer:null},e.increment=e.increment.bind(Object(u.a)(Object(u.a)(e))),e.decrement=e.decrement.bind(Object(u.a)(Object(u.a)(e))),e.resetTimer=e.resetTimer.bind(Object(u.a)(Object(u.a)(e))),e.setTheClock=e.setTheClock.bind(Object(u.a)(Object(u.a)(e))),e.startTheClock=e.startTheClock.bind(Object(u.a)(Object(u.a)(e))),e.timer=e.timer.bind(Object(u.a)(Object(u.a)(e))),e.alarm=e.alarm.bind(Object(u.a)(Object(u.a)(e))),e.pause=e.pause.bind(Object(u.a)(Object(u.a)(e))),e.finish=e.finish.bind(Object(u.a)(Object(u.a)(e))),e.startTheBreak=e.startTheBreak.bind(Object(u.a)(Object(u.a)(e))),e.breakTimer=e.breakTimer.bind(Object(u.a)(Object(u.a)(e))),e}return Object(h.a)(t,e),Object(o.a)(t,[{key:"increment",value:function(e){var t=this.state.timer.minutes,a=this.state.break.minutes;if("session-increment"===e.currentTarget.id&&t<60){var s=this.state.timer.minutes+1,i=this.state.timer.seconds,n=this.state.initSessionLength+1;this.setState({timer:{minutes:s,seconds:i}}),this.setState({initSessionLength:n})}else if("break-increment"===e.currentTarget.id&&a<60){var r=this.state.break.minutes+1,c=this.state.break.seconds,o=this.state.initBreakLength+1;this.setState({break:{minutes:r,seconds:c}}),this.setState({initBreakLength:o})}}},{key:"decrement",value:function(e){var t=this.state.timer.minutes,a=this.state.break.minutes;if("session-decrement"===e.currentTarget.id&&t>0){var s=this.state.timer.minutes-1,i=this.state.timer.seconds,n=this.state.initSessionLength-1;this.setState({timer:{minutes:s,seconds:i}}),this.setState({initSessionLength:n})}else if("break-decrement"===e.currentTarget.id&&a>0){var r=this.state.initBreakLength-1,c=this.state.break.seconds,o=this.state.initBreakLength-1;this.setState({break:{minutes:r,seconds:c}}),this.setState({initBreakLength:o})}}},{key:"resetTimer",value:function(){var e=document.getElementById("beep");e.currentTime=0,e.pause(),this.setState({timer:{minutes:25,seconds:0}}),this.setState({break:{minutes:5,seconds:0}}),this.setState({initSessionLength:25}),this.setState({initBreakLength:5}),window.clearInterval(this.state.clockTimer),window.clearTimeout(this.state.alarmTimer),this.setState({hasStarted:!1}),this.setState({selection:"Session"})}},{key:"setTheClock",value:function(){var e=this.state.initSessionLength,t=this.state.initBreakLength;this.setState({timer:{minutes:e,seconds:0}}),this.setState({break:{minutes:t,seconds:0}})}},{key:"startTheClock",value:function(){this.setState({hasStarted:!0});var e=60*this.state.timer.minutes;e+=this.state.timer.seconds,console.log(e);var t=window.setInterval(this.timer,100);this.setState({clockTimer:t});var a=window.setTimeout(this.alarm,100*e+100);this.setState({alarmTimer:a})}},{key:"startTheBreak",value:function(){this.setState({hasStarted:!0});var e=60*this.state.break.minutes;e+=this.state.break.seconds,console.log(e);var t=window.setInterval(this.breakTimer,100);this.setState({clockTimer:t});var a=window.setTimeout(this.finish,100*e+100);this.setState({alarmTimer:a})}},{key:"timer",value:function(){var e=this.state.timer.minutes,t=this.state.timer.seconds;0===t&&e>=1?(e--,t=59,this.setState({timer:{minutes:e,seconds:t}})):0===e&&0===t?this.alarm():(t--,this.setState({timer:{minutes:e,seconds:t}})),console.log(e,t)}},{key:"breakTimer",value:function(){var e=this.state.break.minutes,t=this.state.break.seconds;0===t&&e>=1?(e--,t=59,this.setState({break:{minutes:e,seconds:t}})):0===e&&0===t?this.finish():(t--,this.setState({break:{minutes:e,seconds:t}})),console.log(e,t)}},{key:"alarm",value:function(){var e=document.getElementById("beep");this.setState({selection:"Break"}),window.clearInterval(this.state.clockTimer),window.clearTimeout(this.state.alarmTimer),e.play(),setTimeout(this.startTheBreak,1500)}},{key:"pause",value:function(){window.clearInterval(this.state.clockTimer),window.clearTimeout(this.state.alarmTimer),this.setState({hasStarted:!1})}},{key:"finish",value:function(){var e=document.getElementById("beep");this.setState({selection:"Session"}),window.clearInterval(this.state.clockTimer),window.clearTimeout(this.state.alarmTimer),e.play(),this.setTheClock(),setTimeout(this.startTheClock,1500)}},{key:"render",value:function(){var e=this,t=this.state.initSessionLength,a=this.state.initBreakLength,s=this.state.hasStarted,n="Session"===this.state.selection?this.state.timer.minutes:this.state.break.minutes,r="Session"===this.state.selection?this.state.timer.seconds:this.state.break.seconds;return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("h1",null,"Pomodoro Clock")),i.a.createElement("div",{className:"top-panels"},i.a.createElement("div",null,i.a.createElement("p",{id:"session-label"},"Session Length"),i.a.createElement("p",{id:"session-length"},t),i.a.createElement("div",{className:"button-style"}),i.a.createElement("button",{id:"session-increment",className:"btn",onClick:s?null:function(t){return e.increment(t)}},i.a.createElement(b.a,{icon:"arrow_upward"})),i.a.createElement("button",{id:"session-decrement",className:"btn",onClick:s?null:function(t){return e.decrement(t)}},i.a.createElement(b.a,{icon:"arrow_downward"}))),i.a.createElement("div",null,i.a.createElement("p",{id:"break-label"},"Break Length"),i.a.createElement("p",{id:"break-length"},a),i.a.createElement("div",{className:"button-style"}),i.a.createElement("button",{id:"break-increment",className:"btn",onClick:s?null:function(t){return e.increment(t)}},i.a.createElement(b.a,{icon:"arrow_upward"})),i.a.createElement("button",{id:"break-decrement",className:"btn",onClick:s?null:function(t){return e.decrement(t)}},i.a.createElement(b.a,{icon:"arrow_downward"})))),i.a.createElement("div",{className:"main-timer"},i.a.createElement("h2",{id:"timer-label"},this.state.selection),i.a.createElement("p",{id:"time-left"},n>9?n:"0"+n,":",r>9?r:"0"+r)),i.a.createElement("div",{className:"button-area"},i.a.createElement("button",{id:"start_stop",className:"btn",onClick:s?this.pause:function(){return e.startTheClock(e)}},i.a.createElement(b.a,{icon:"play_arrow"}),i.a.createElement(b.a,{icon:"pause_circle_outline"})),i.a.createElement("button",{id:"reset",className:"btn",onClick:this.resetTimer},i.a.createElement(b.a,{icon:"loop"}))),i.a.createElement("audio",{src:"https://storage.cloud.google.com/my-little-alarm-sounds/Short-ringtone-for-notification.mp3?_ga=2.21506491.-1426996322.1544825551",id:"beep"}))}}]),t}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,2,1]]]);
//# sourceMappingURL=main.8cf6736b.chunk.js.map