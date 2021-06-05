import GlobalStyle from './globalStyles'
import { AppStyles, DisplayArea } from './App.styles.js'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Projects from './components/projects/Projects'
import About from './components/about/About'
import Connect from './components/connect/Connect'
import { useMediaQuery } from 'react-responsive'
import BottomNav from './components/bottom-na/BottomNav'
import { useEffect } from 'react'


function App() {
  const showBottomNavigation = useMediaQuery({
  query: '(max-width:650px)'
})
  // window.addEventListener('DOMContentLoaded', (event) => {
        
  // });
  useEffect(()=>{
        const sections = document.querySelectorAll(".section");
        const navLi = document.querySelectorAll(".links li");
          window.addEventListener("scroll", () => {
          let current = "";
          sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
              current = section.getAttribute("id");
            }
          });
          navLi.forEach((li) => {
            li.classList.remove("current");
            if (li.classList.contains(current)) {
              li.classList.add("current");
            }
          });
        });
  },[showBottomNavigation])

  return (
      <AppStyles>
        <GlobalStyle />
        <Header />
        <DisplayArea>
          <Hero />
          <Projects />
          <About />
          <Connect />
        </DisplayArea>
        {showBottomNavigation && <BottomNav />}
      </AppStyles>
  );
}

export default App;
