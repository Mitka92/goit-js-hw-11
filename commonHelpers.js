import{S as p,i as d}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function l(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=l(t);fetch(t.href,e)}})();const y=document.querySelector(".gallery");function c(r){const o=r.map(({largeImageURL:l,webformatURL:i,likes:t,comments:e,views:s,downloads:m,tags:h})=>`<li class="gallery-item">
            <a class="link-card" href="${l}">
                <img class="image-card" src="${i}" alt="${h}"/></a>
                <ul class="info-list">
                    <li class="info-item">
                        <h3 class="info-title">Likes</h3>
                        <p>${t}</p>
                    </li>
                    <li class="info-item">
                        <h3 class="info-title">Views</h3>
                        <p>${s}</p>
                    </li>
                    <li class="info-item">
                        <h3 class="info-title">Comments</h3>
                        <p>${e}</p>
                    </li>
                    <li class="info-item">
                        <h3 class="info-title">Downloads</h3>
                        <p>${m}</p>
                    </li>
                </ul>
        </li>`).join("");y.innerHTML=o}const g="/goit-js-hw-11/assets/octagon-7115e62e.svg",u=document.querySelector(".loader"),f=document.querySelector(".gallery-box"),b={message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:" #EF4040",maxWidth:"432px",messageColor:"#FAFAFB",messageSize:"16",messageLineHeight:"24",position:"topRight",iconUrl:g,progressBarColor:"#B51B1B"};function L(r){const o="https://pixabay.com/",l="api/",i=new URLSearchParams({key:"5078704-abab538ab7558d1cf73264192",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"}),t=`${o}${l}?${i}`;return f.style.display="none",u.style.display="block",fetch(t).then(e=>{if(u.style.display="none",f.style.display="block",!e.ok)throw new Error(e.status);return e.json()}).then(e=>{if(e.hits.length>0){const s=new p(".link-card",{captionsData:"alt",captionDelay:250});c(e.hits),s.refresh()}else d.show(b),c(e.hits)}).catch(e=>console.log("Error:",e))}const n=document.querySelector("form");let a="";n.addEventListener("submit",r=>{r.preventDefault(),a=n.elements.search.value,a!==""&&(L(a),n.reset())});
//# sourceMappingURL=commonHelpers.js.map
