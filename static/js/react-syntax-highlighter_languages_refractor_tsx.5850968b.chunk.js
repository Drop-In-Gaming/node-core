"use strict";(self.webpackChunkgh_pages=self.webpackChunkgh_pages||[]).push([[2509],{4679:function(t){function e(t){!function(t){var e=t.util.clone(t.languages.javascript);t.languages.jsx=t.languages.extend("markup",e),t.languages.jsx.tag.pattern=/<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^}]*\}|[^{}])*\}|[^{}])+\}))?|\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}))*\s*\/?)?>/i,t.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/i,t.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i,t.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,t.languages.insertBefore("inside","attr-name",{spread:{pattern:/\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}/,inside:{punctuation:/\.{3}|[{}.]/,"attr-value":/\w+/}}},t.languages.jsx.tag),t.languages.insertBefore("inside","attr-value",{script:{pattern:/=(\{(?:\{(?:\{[^}]*\}|[^}])*\}|[^}])+\})/i,inside:{"script-punctuation":{pattern:/^=(?={)/,alias:"punctuation"},rest:t.languages.jsx},alias:"language-javascript"}},t.languages.jsx.tag);var n=function t(e){return e?"string"===typeof e?e:"string"===typeof e.content?e.content:e.content.map(t).join(""):""},a=function e(a){for(var s=[],i=0;i<a.length;i++){var r=a[i],o=!1;if("string"!==typeof r&&("tag"===r.type&&r.content[0]&&"tag"===r.content[0].type?"</"===r.content[0].content[0].content?s.length>0&&s[s.length-1].tagName===n(r.content[0].content[1])&&s.pop():"/>"===r.content[r.content.length-1].content||s.push({tagName:n(r.content[0].content[1]),openedBraces:0}):s.length>0&&"punctuation"===r.type&&"{"===r.content?s[s.length-1].openedBraces++:s.length>0&&s[s.length-1].openedBraces>0&&"punctuation"===r.type&&"}"===r.content?s[s.length-1].openedBraces--:o=!0),(o||"string"===typeof r)&&s.length>0&&0===s[s.length-1].openedBraces){var g=n(r);i<a.length-1&&("string"===typeof a[i+1]||"plain-text"===a[i+1].type)&&(g+=n(a[i+1]),a.splice(i+1,1)),i>0&&("string"===typeof a[i-1]||"plain-text"===a[i-1].type)&&(g=n(a[i-1])+g,a.splice(i-1,1),i--),a[i]=new t.Token("plain-text",g,null,g)}r.content&&"string"!==typeof r.content&&e(r.content)}};t.hooks.add("after-tokenize",(function(t){"jsx"!==t.language&&"tsx"!==t.language||a(t.tokens)}))}(t)}t.exports=e,e.displayName="jsx",e.aliases=[]},7558:function(t,e,n){var a=n(4679),s=n(4935);function i(t){t.register(a),t.register(s);var e=t.util.clone(t.languages.typescript);t.languages.tsx=t.languages.extend("jsx",e)}t.exports=i,i.displayName="tsx",i.aliases=[]},4935:function(t){function e(t){t.languages.typescript=t.languages.extend("javascript",{keyword:/\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/}),t.languages.ts=t.languages.typescript}t.exports=e,e.displayName="typescript",e.aliases=["ts"]},7404:function(t,e,n){var a,s;function i(){if(s)return a;function t(t){!function(t){var e=t.util.clone(t.languages.javascript);t.languages.jsx=t.languages.extend("markup",e),t.languages.jsx.tag.pattern=/<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^}]*\}|[^{}])*\}|[^{}])+\}))?|\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}))*\s*\/?)?>/i,t.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/i,t.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i,t.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,t.languages.insertBefore("inside","attr-name",{spread:{pattern:/\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}/,inside:{punctuation:/\.{3}|[{}.]/,"attr-value":/\w+/}}},t.languages.jsx.tag),t.languages.insertBefore("inside","attr-value",{script:{pattern:/=(\{(?:\{(?:\{[^}]*\}|[^}])*\}|[^}])+\})/i,inside:{"script-punctuation":{pattern:/^=(?={)/,alias:"punctuation"},rest:t.languages.jsx},alias:"language-javascript"}},t.languages.jsx.tag);var n=function t(e){return e?"string"==typeof e?e:"string"==typeof e.content?e.content:e.content.map(t).join(""):""},a=function e(a){for(var s=[],i=0;i<a.length;i++){var r=a[i],o=!1;if("string"!=typeof r&&("tag"===r.type&&r.content[0]&&"tag"===r.content[0].type?"</"===r.content[0].content[0].content?s.length>0&&s[s.length-1].tagName===n(r.content[0].content[1])&&s.pop():"/>"===r.content[r.content.length-1].content||s.push({tagName:n(r.content[0].content[1]),openedBraces:0}):s.length>0&&"punctuation"===r.type&&"{"===r.content?s[s.length-1].openedBraces++:s.length>0&&s[s.length-1].openedBraces>0&&"punctuation"===r.type&&"}"===r.content?s[s.length-1].openedBraces--:o=!0),(o||"string"==typeof r)&&s.length>0&&0===s[s.length-1].openedBraces){var g=n(r);i<a.length-1&&("string"==typeof a[i+1]||"plain-text"===a[i+1].type)&&(g+=n(a[i+1]),a.splice(i+1,1)),i>0&&("string"==typeof a[i-1]||"plain-text"===a[i-1].type)&&(g=n(a[i-1])+g,a.splice(i-1,1),i--),a[i]=new t.Token("plain-text",g,null,g)}r.content&&"string"!=typeof r.content&&e(r.content)}};t.hooks.add("after-tokenize",(function(t){"jsx"!==t.language&&"tsx"!==t.language||a(t.tokens)}))}(t)}return s=1,a=t,t.displayName="jsx",t.aliases=[],a}n.d(e,{O:function(){return i}})},3210:function(t,e,n){n.r(e),n.d(e,{tsx:function(){return l}});var a,s,i=n(4769),r=n(7404),o=n(5969);function g(t,e){for(var n=function(){var n=e[a];if("string"!=typeof n&&!Array.isArray(n)){var s=function(e){if("default"!==e&&!(e in t)){var a=Object.getOwnPropertyDescriptor(n,e);a&&Object.defineProperty(t,e,a.get?a:{enumerable:!0,get:function(){return n[e]}})}};for(var i in n)s(i)}},a=0;a<e.length;a++)n();return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var c=function(){if(s)return a;s=1;var t=(0,r.O)(),e=(0,o.j)();function n(n){n.register(t),n.register(e);var a=n.util.clone(n.languages.typescript);n.languages.tsx=n.languages.extend("jsx",a)}return a=n,n.displayName="tsx",n.aliases=[],a}(),l=g({__proto__:null,default:(0,i.fm9)(c)},[c])},5969:function(t,e,n){var a,s;function i(){if(s)return a;function t(t){t.languages.typescript=t.languages.extend("javascript",{keyword:/\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/}),t.languages.ts=t.languages.typescript}return s=1,a=t,t.displayName="typescript",t.aliases=["ts"],a}n.d(e,{j:function(){return i}})}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_tsx.5850968b.chunk.js.map