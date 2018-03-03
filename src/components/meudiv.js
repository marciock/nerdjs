 class myClasse extends Creator{
  constructor(){
    super();
     // let variavel="Cotton";
     
    this.render(`
    <div nd-bind>
    <h3 >{name}</h3>
    <h3 >{type}</h3>
    </div>`);
      this.interpolate({
        name:'Cotton',
        type:'Persa'
       },
       {
        name:'Kali',
        type:'Exotica'
       }
      );
  }

    

}
customElements.define('meu-div',myClasse);


    





