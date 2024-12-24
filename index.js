import{A as m,S as c,i as p}from"./assets/vendor-Cf4gkpCI.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const u=document.querySelector(".menu"),s=document.querySelector(".menu-list");u.addEventListener("click",f);document.addEventListener("click",w);function f(e){e.preventDefault(),s.classList.toggle("show"),document.querySelectorAll(".menu-list a").forEach(n=>{n.addEventListener("click",d)})}function w(e){!u.contains(e.target)&&!s.contains(e.target)&&s.classList.remove("show")}function d(e){e.preventDefault();const o=e.target.getAttribute("href").substring(1),n=document.getElementById(o);n&&n.scrollIntoView({behavior:"smooth",block:"start"}),s.classList.remove("show")}const b=new m(".info-list");b.open(0);new c(".swiper",{direction:"horizontal",loop:!0,allowSlidePrev:!1,slidesPerView:2,breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}},navigation:{nextEl:".swiper-button-next"},keyboard:{enabled:!0},mousewheel:{enabled:!0}});new c(".swiper-container",{direction:"horizontal",slidesPerView:1,navigation:{nextEl:".button-next",prevEl:".button-prev",disabledClass:"swiper-button-disabled"},keyboard:{enabled:!0,onlyInViewport:!0},scrollbar:{el:".swiper-scrollbar"},mousewheel:!0});async function h(){try{const e=await fetch("https://portfolio-js.b.goit.study/api/reviews");if(!e.ok)throw p.error({title:"Error",message:"Not Found",position:"topRight"}),new Error("Not Found");const o=await e.json();Array.isArray(o)?v(o):console.error("Data format is incorrect")}catch(e){console.error("Error fetching data: ",e)}}function v(e){const o=document.getElementById("gallery-container");e.forEach(({avatar_url:n,author:i,review:t})=>{const r=document.createElement("li");r.classList.add("review-gallery-item","swiper-slide"),r.innerHTML=`
            <img src="${n}" alt="${i}'s avatar" class="avatar"/>
              <h3 class='review-author'>${i}</h3>
              <p class='review-text'>${t}</p>
        `,o.appendChild(r)}),initializeSwiper()}new c(".swiper-container",{slidesPerView:1,spaceBetween:16,navigation:{nextEl:".btn-next",prevEl:".btn-prev",disabledClass:"swiper-button-disabled"},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}},keyboard:{enabled:!0,onlyInViewport:!0},scrollbar:{el:".swiper-scrollbar"},mousewheel:!0});window.onload=h;const y=document.querySelector(".menu-button"),a=document.querySelector(".mobile-menu"),g=document.querySelector(".mobile-button"),E=document.querySelectorAll(".mob-menu-list a");y.addEventListener("click",L);g.addEventListener("click",k);E.forEach(e=>{e.addEventListener("click",o=>{d(o),a.classList.remove("show")})});function L(e){e.preventDefault(),a.classList.add("show")}function k(e){e.preventDefault(),a.classList.remove("show")}
//# sourceMappingURL=index.js.map
