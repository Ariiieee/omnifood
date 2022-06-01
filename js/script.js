///////////////////////////////////////////////////////////
/* nb- update the year of the website in the footer to always be current year*/
/* nb-- always add "El" to selected html when targeting them in js */
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
/////////////////////////////////////////////////////////
//setting mobile nav
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
  //nb-- when using classlist the '.' is omitted */
});

/////////////////////////////////////////////////////////
// smooth scrolling Animation
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    //link the attribute
    const href = link.getAttribute("href");
    console.log(href);
    //scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    // scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    //close mobile navigation when mobile nav link is clicked
    if (link.classList.contains("main-nav_link"))
      headerEl.classList.toggle("nav-open");
  });
});

////////////////////////////////////////////////////////
//sticky Navigation
// the sticky navigation should be sticky when the section hero moves out of the viewport
const sectionHeroEl = document.querySelector(".section-hero");
//the intersectionObserver has two parameters i.e -- the function and an options (object)
const observer = new IntersectionObserver(
  function (entries) {
    //nb-- we get access to array of entries, and there is one entry for each threshold value
    //nb-- the entries array is a collection of multiple elements but in this case we have one which is the threshold
    const ent = entries[0]; //the element number one(i.e threshold) is 0 in js in relation to the first and only element here in entries
    console.log(ent);
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
  },
  {
    //in the viewport
    root: null, //the root is where the element should be appearing or not //null --means we will observe the element as it move through the viewport
    threshold: 0, //this means we will have an event as soon as 0% of the hero section is inside the viewport
  }
);
observer.observe(sectionHeroEl); //we want to observe the element that moves out of the viewport, then comes the sticky navigation -- which is the hero section

/////////////////////////////////////////////////////////

// Fixing flexbox gap property missing in some Safari versions

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

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
