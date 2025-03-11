import{A as v,S as m,a as w,i as y}from"./assets/vendor-w3IWx05B.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector(".accordion-container");o&&new v(o,{showMultiple:!0}).open(0);const e=document.querySelector(".about-me-swiper");e&&new m(e,{loop:!0,slidesPerView:2,grabCursor:!0,simulateTouch:!0,touchRatio:1,keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:!0,speed:500,navigation:{nextEl:".about-me-swiper__next"},breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}}})});document.addEventListener("DOMContentLoaded",function(){new m(".swiper-container",{loop:!1,navigation:{nextEl:".swiper-navigation .swiper-button-next",prevEl:".swiper-navigation .swiper-button-prev"}})});const b={showMultiple:!0};new v(".accordion-wrapper",b);window.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector("#covers");if(!o)return;new IntersectionObserver(n=>{n.forEach(s=>{s.target.classList.toggle("animation",s.intersectionRatio>=.5)})},{threshold:.5}).observe(o)});const d={list:document.querySelector("#reviews-list"),nav:document.querySelector(".reviews-swiper-nav"),errLabel:document.querySelector(".reviews-err"),errBtn:document.querySelector(".reviews-err-btn")};async function g(){var o,e,n,s;try{const r=await w.get("https://portfolio-js.b.goit.study/api/reviews");if(!r.data.length)throw{message:"There is no data to display."};if(!d.list)throw{message:"Unable to access list element."};d.list.innerHTML=L(r.data);const i={navigation:{nextEl:".reviews-next-card",prevEl:".reviews-previous-card"},slidesPerView:1,spaceBetween:16,grabCursor:!0,keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}}},p=new m(".reviews-swiper",i)}catch(t){(o=d.nav)==null||o.classList.add("js-hidden"),(e=d.errLabel)==null||e.classList.remove("js-hidden"),(n=d.errBtn)==null||n.classList.remove("js-hidden"),(s=d.errBtn)==null||s.addEventListener("click",()=>{y.error({message:`${t.message}`,position:"bottomRight"})})}}function h({author:o,avatar_url:e,review:n}){return`<li class="swiper-slide">
            <img src="${e}" alt="${o}'s photo" />
            <h3>${o}</h3>
            <p>${n}</p>
          </li>`}function L(o){return o.map(h).join("")}g();document.addEventListener("DOMContentLoaded",function(){const o=document.querySelector(".work-together-form"),e=document.getElementById("user-email"),n=document.getElementById("user-comment"),s=document.querySelector(".backdrop"),t=document.querySelector(".close-btn");document.querySelector(".send-button");const r=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;function i(a,l,f){let c=a.nextElementSibling;(!c||!c.classList.contains("validation-message"))&&(c=document.createElement("p"),c.classList.add("validation-message"),a.parentNode.appendChild(c)),c.textContent=l,c.style.color=f?"#3cbc81":"#e74a3b",c.style.display="block",a.style.borderBottom=f?"2px solid #3cbc81":"2px solid #e74a3b"}e.addEventListener("input",function(){r.test(e.value)?i(e,"Success!",!0):i(e,"Invalid email, try again",!1)}),o.addEventListener("submit",function(a){if(a.preventDefault(),!r.test(e.value)){i(e,"Invalid email, try again",!1);return}fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",body:JSON.stringify({email:e.value,comment:n.value}),headers:{"Content-Type":"application/json"}}).then(l=>{if(!l.ok)throw new Error("Server error: "+l.statusText);return l.json()}).then(()=>{o.reset(),document.querySelectorAll(".validation-message").forEach(l=>l.remove()),e.style.borderBottom="",n.style.borderBottom="",p()}).catch(()=>{alert("Submission failed. Please check your input and try again.")})});function p(){s.classList.add("is-open"),document.body.style.overflow="hidden"}function u(){s.classList.remove("is-open"),document.body.style.overflow="",document.activeElement.blur()}t.addEventListener("click",u),s.addEventListener("click",function(a){a.target.classList.contains("backdrop")&&u()}),document.addEventListener("keydown",function(a){a.key==="Escape"&&u()})});
//# sourceMappingURL=index.js.map
