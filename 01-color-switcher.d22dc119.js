const t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),bodyRef:document.body};let e=!1,o=null;t.startBtn.addEventListener("click",(()=>{e||(e=!0,t.startBtn.setAttribute("disabled",!0),o=setInterval((()=>{const e=`#${Math.floor(16777215*Math.random()).toString(16)}`;console.log(e),t.bodyRef.style.backgroundColor=`${e}`}),500))})),t.stopBtn.addEventListener("click",(()=>{clearInterval(o),t.startBtn.removeAttribute("disabled",!0),e=!1}));
//# sourceMappingURL=01-color-switcher.d22dc119.js.map