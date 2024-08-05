import{i,S as d}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();const a=(e,t,o="beforeend")=>{e.insertAdjacentHTML(o,t)},l=e=>{e.innerHTML=""},m=e=>{a(e,`
    <form class="search-form" id="search-form">
      <input
        type="text"
        name="search"
        autocomplete="off"
        placeholder="Search images..."
      />
      <button type="submit">Search</button>
    </form>
  `)},u=e=>{a(e,'<div class="gallery" id="gallery"></div>')},f=(e,t)=>{const o=t.map(n=>`
    <div class="gallery-item">
      <a href="${n.largeImageURL}">
        <img src="${n.webformatURL}" alt="${n.tags}" loading="lazy" />
      </a>
      <div class="gallery-item-info">
        <div>
          <b>Likes</b>
          ${n.likes}
        </div>
        <div>
          <b>Views</b>
          ${n.views}
        </div>
        <div>
          <b>Comments</b>
          ${n.comments}
        </div>
        <div>
          <b>Downloads</b>
          ${n.downloads}
        </div>
      </div>
    </div>
  `).join("");a(e,o)},h=(e,t)=>{l(e),t&&t.length&&f(e,t)},y=e=>{l(e),a(e,`
    <div class="loading">Loading images, please wait...</div>
    <span class="loader"></span>
  `)},g="45273601-269fa7243c6da01438f09c62a",p=e=>{const t=`key=${g}&q=${e}&image_type=photo&orientation=horizontal`;return fetch(`https://pixabay.com/api?${t}`,{redirect:"follow"}).then(o=>{if(o.ok)return o.json();throw new Error(o.statusText)}).then(o=>o.hits).catch(()=>{i.error("Error while fetching images. Please try again!")})};i.settings({position:"topRight",timeout:3e3});const v=(e,t,o,n)=>{e.preventDefault();const r=t.elements.search.value;r.trim()!==""?(y(o),p(r).then(s=>{h(o,s),n.refresh(),s.length||i.error({icon:"",iconText:"",title:"❌ Error",message:"Sorry, there are no images matching your search query. Please try again!"})})):i.warning({icon:"",iconText:"",title:"⚠️ Warning",message:"Please enter a search query!"}),t.reset()};document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("root");m(e),u(e);const t=document.querySelector("#search-form"),o=document.querySelector("#gallery"),n=new d("#gallery a",{captionDelay:250,captionsData:"alt"});t.addEventListener("submit",r=>{v(r,t,o,n)})});
//# sourceMappingURL=commonHelpers.js.map
