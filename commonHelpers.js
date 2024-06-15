import{S as h,i as d}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();function p(s){const o="https://pixabay.com/",l="api/",i=new URLSearchParams({key:"5078704-abab538ab7558d1cf73264192",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=`${o}${l}?${i}`;return fetch(e).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).catch(t=>console.log("Error:",t))}function c(s,o){const l=s.map(({largeImageURL:i,webformatURL:e,likes:t,comments:a,views:f,downloads:u,tags:m})=>`<li class="gallery-item">
            <a class="link-card" href="${i}">
                <img class="image-card" src="${e}" alt="${m}"/></a>
                <ul class="info-list">
                    <li class="info-item">
                        <h3 class="info-title">Likes</h3>
                        <p>${t}</p>
                    </li>
                    <li class="info-item">
                        <h3 class="info-title">Views</h3>
                        <p>${f}</p>
                    </li>
                    <li class="info-item">
                        <h3 class="info-title">Comments</h3>
                        <p>${a}</p>
                    </li>
                    <li class="info-item">
                        <h3 class="info-title">Downloads</h3>
                        <p>${u}</p>
                    </li>
                </ul>
        </li>`).join("");o.innerHTML=l}const y="/goit-js-hw-11/assets/octagon-7115e62e.svg",r={loader:document.querySelector(".loader"),galleryBox:document.querySelector(".gallery-box"),gallery:document.querySelector(".gallery"),form:document.querySelector("form")},g=new h(".link-card",{captionsData:"alt",captionDelay:250}),b={message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:" #EF4040",maxWidth:"432px",messageColor:"#FAFAFB",messageSize:"16",messageLineHeight:"24",position:"topRight",iconUrl:y,progressBarColor:"#B51B1B"};let n="";r.form.addEventListener("submit",s=>{s.preventDefault(),n=r.form.elements.search.value.trim(),n!==""&&(r.galleryBox.style.display="none",r.loader.style.display="block",p(n).then(o=>{r.loader.style.display="none",r.galleryBox.style.display="block",o.hits.length>0?(c(o.hits,r.gallery),g.refresh()):(d.show(b),c(o.hits,r.gallery))}).catch(o=>console.log("Error:",o)),r.form.reset())});
//# sourceMappingURL=commonHelpers.js.map
