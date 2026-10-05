(function(){
var d=document,rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
d.documentElement.classList.add('js');
var bar=d.querySelector('.bar');
function sc(){var h=d.documentElement;bar.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+'%'}
addEventListener('scroll',sc,{passive:true});sc();
var links={};
d.querySelectorAll('nav li a').forEach(function(a){links[a.hash.slice(1)]=a});
var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){
Object.keys(links).forEach(function(k){links[k].classList.remove('act')});
if(links[e.target.id])links[e.target.id].classList.add('act')}})},{rootMargin:'-45% 0px -50% 0px'});
d.querySelectorAll('header[id],section[id]').forEach(function(x){so.observe(x)});
if(rm)return;
var ro=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){
var el=e.target;el.classList.add('in');ro.unobserve(el);
setTimeout(function(){el.classList.remove('rv','in');el.style.transitionDelay=''},1300)}})},{threshold:.12});
d.querySelectorAll('section h2,.subt,.subt2,.about p,.stat,.ecard,.pcard,.card,.chip,.sub,.cc,.pill2,.social').forEach(function(el){
var i=[].indexOf.call(el.parentElement.children,el);
el.style.transitionDelay=Math.min(i,6)*70+'ms';
el.classList.add('rv');ro.observe(el)});
var co=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){
co.unobserve(e.target);var b=e.target,t=b.textContent,n=parseInt(t),suf=t.replace(n,''),st=null;
(function f(ts){st=st||ts;var p=Math.min((ts-st)/1400,1);
b.textContent=Math.round(n*(1-Math.pow(1-p,3)))+suf;if(p<1)requestAnimationFrame(f)})(performance.now())}})},{threshold:.6});
d.querySelectorAll('.stat b').forEach(function(b){co.observe(b)});
})();
