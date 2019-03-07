define(["./my-app.js"],function(_myApp){"use strict";class AboutMeView extends _myApp.PageViewElement{static get styles(){return[_myApp.SharedStyles]}render(){return _myApp.html`
      <section>
        <h2>Welcome to Haegele's Development Show Cases</h2>
        <p>My name is Christian Hägele, I'm a professional web developer.</p>
        <p>On this page I collect interesting uses cases for web technologies.</p>
        
      </section>
      <section>
        <h2>About Myself</h2>
        <p>I am a T-Shaped Java Developer with strong technical background, experience in agile development methodology and, requirements engineering, supplemented by industry knowledge in banks and insurance. Since 2009 I am in the field of IT Consultant Financial Services and a wide variety of project experience. Core Bank Migration with Offshore Development, Software renewal of insurance software, software extensions of Standard software as well as individual development.</p>
      </section>
      <section>
      <h2>Contact</h2>
      <p>For recruitment requests or questions regarding the show cases, please feel free to <a href="mailto:christian@haegele.dev">contact me</a> at any time.</p>
              <p><img src="/images/manifest/title.jpg"/></p>

</section>
     
    `}}window.customElements.define("about-me-view",AboutMeView)});