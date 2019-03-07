define(["./my-app.js"],function(_myApp){"use strict";class MapBoxView extends(0,_myApp.connect)(_myApp.store)(_myApp.PageViewElement){static get styles(){return[_myApp.SharedStyles]}render(){return _myApp.html`
      <section>
        <h2>Map Box: Easy Map API</h2>
        <p>
        <a href="https://www.mapbox.com/">Map Box</a> is a service which allows you to easily integrate maps into
        your web page.
        </p>
       
      </section>
    `}}window.customElements.define("map-box-view",MapBoxView)});