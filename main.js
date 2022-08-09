//This class starts every custom component built
//Included in this class is the ConnectedCallback() for rendering in the browser the attached innerHTML values using the word "this"

class HelloWorld extends HTMLElement{
  connectedCallback(){
  
    var userName = this.attributes.username.value;
    var userEmail = this.attributes.email.value;
    var userTitle = this.attributes.quote.value;
    this.innerHTML = `My name is ${userName} <br> 
    Email: ${userEmail} <br> 
    Comment: ${userTitle}`  
  }
}

//To make element available for use in HTML it must be defined with a tag representing the class component.  "customElements" is a built in object for defining new custom compenents

customElements.define('helloworld212-element', HelloWorld)