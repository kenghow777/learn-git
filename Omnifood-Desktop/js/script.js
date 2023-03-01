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
console.log(allLinks)