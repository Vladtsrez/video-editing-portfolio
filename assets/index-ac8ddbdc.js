(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();const c=document.querySelectorAll('a[href^="#"]');for(let s of c)s.addEventListener("click",e=>{e.preventDefault();const t=s.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth",block:"start"})});new Swiper(".mySwiper",{effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",coverflowEffect:{rotate:50,stretch:0,depth:200,modifier:1,slideShadows:!0},autoplay:{delay:4e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});const d=document.getElementById("open-btn"),u=document.getElementById("close-btn");d.addEventListener("click",function(){document.getElementById("mobile-overlay").classList.add("is-open")});u.addEventListener("click",function(){document.getElementById("mobile-overlay").classList.remove("is-open")});class i extends HTMLElement{connectedCallback(){this.videoId=this.getAttribute("videoid");let e=this.querySelector(".lty-playbtn");if(this.playLabel=e&&e.textContent.trim()||this.getAttribute("playlabel")||"Play",this.style.backgroundImage||(this.style.backgroundImage=`url("https://i.ytimg.com/vi/${this.videoId}/maxresdefault.jpg")`),e||(e=document.createElement("button"),e.type="button",e.classList.add("lty-playbtn"),this.append(e)),!e.textContent){const t=document.createElement("span");t.className="lyt-visually-hidden",t.textContent=this.playLabel,e.append(t)}e.removeAttribute("href"),this.addEventListener("pointerover",i.warmConnections,{once:!0}),this.addEventListener("click",this.addIframe),this.needsYTApiForAutoplay=navigator.vendor.includes("Apple")||navigator.userAgent.includes("Mobi")}static addPrefetch(e,t,n){const o=document.createElement("link");o.rel=e,o.href=t,n&&(o.as=n),document.head.append(o)}static warmConnections(){i.preconnected||(i.addPrefetch("preconnect","https://www.youtube-nocookie.com"),i.addPrefetch("preconnect","https://www.google.com"),i.addPrefetch("preconnect","https://googleads.g.doubleclick.net"),i.addPrefetch("preconnect","https://static.doubleclick.net"),i.preconnected=!0)}fetchYTPlayerApi(){window.YT||window.YT&&window.YT.Player||(this.ytApiPromise=new Promise((e,t)=>{var n=document.createElement("script");n.src="https://www.youtube.com/iframe_api",n.async=!0,n.onload=o=>{YT.ready(e)},n.onerror=t,this.append(n)}))}async addYTPlayerIframe(e){this.fetchYTPlayerApi(),await this.ytApiPromise;const t=document.createElement("div");this.append(t);const n=Object.fromEntries(e.entries());new YT.Player(t,{width:"100%",videoId:this.videoId,playerVars:n,events:{onReady:o=>{o.target.playVideo()}}})}async addIframe(){if(this.classList.contains("lyt-activated"))return;this.classList.add("lyt-activated");const e=new URLSearchParams(this.getAttribute("params")||[]);if(e.append("autoplay","1"),e.append("playsinline","1"),this.needsYTApiForAutoplay)return this.addYTPlayerIframe(e);const t=document.createElement("iframe");t.width=560,t.height=315,t.title=this.playLabel,t.allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",t.allowFullscreen=!0,t.src=`https://www.youtube-nocookie.com/embed/${encodeURIComponent(this.videoId)}?${e.toString()}`,this.append(t),t.focus()}}customElements.define("lite-youtube",i);const a=document.querySelector(".scroll-top");window.addEventListener("scroll",function(){a.classList.toggle("active",this.window.scrollY>500)});a.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});