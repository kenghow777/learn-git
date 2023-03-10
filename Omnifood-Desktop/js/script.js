////////////////////////////////
//? Make mobile navigation work
////////////////////////////////

const btnNavEl = document.querySelector('.btn-mobile-nav')
const headerEl = document.querySelector('.header')

btnNavEl.addEventListener('click',()=>{
  headerEl.classList.toggle('nav-open')
})

////////////////////////////////
//? Smooth scroll animation
////////////////////////////////

const allLinks = document.querySelectorAll('a:link')
allLinks.forEach((link)=>{
  link.addEventListener('click',(e)=>{
    e.preventDefault()
    const href = link.getAttribute('href')

    // Scroll back to top
    if(href === "#") window.scrollTo({
      top:20,
      behavior: 'smooth',
    })

    // Scroll to other
    if(href !== "#" && href.startsWith('#')){
      const sectionEl = document.querySelector(href)
      sectionEl.scrollIntoView({ behavior: "smooth" })
    }
    
    // Close mobile navigation
    if(link.classList.contains('main-nav-link'))headerEl.classList.toggle('nav-open')

  })
})

////////////////////////////////
//? Sticky Navigation
////////////////////////////////

const sectionHeroEl = document.querySelector('.section-hero')

const obs = new IntersectionObserver((entreis)=>{
  const ent = entreis[0]
  console.log(ent) 
  
  if(ent.isIntersecting === false){
    document.body.classList.add('sticky')
  }
  
  if(ent.isIntersecting === true){
    document.body.classList.remove('sticky')
  }

},
{
  // In the viewport
  root: null,
  threshold: 0,
  rootMargin: '-80px',
})
obs.observe(sectionHeroEl)





///////////////////////////////////////////////////////////
//? Fixing flexbox gap property missing in some Safari versions
///////////////////////////////////////////////////////////

function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
