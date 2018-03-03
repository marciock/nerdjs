class Apps extends Creator{
    constructor(){
      super();
       // let variavel="Cotton";
       const endereco=[{
         url:'/',
         component:'teste'
       },
       {
        url:'#about',
        component:'about'
      },
      ]

     

      this.render(`
        
         <div>
            <nd-link url="about" component="<meu-div />">Meu Div</nd-link>
            <nd-link url="contact" component="<my-data />">My data</nd-link>
           <nd-view></nd-view>
         </div>
   
      `);
        
    }
    
      
  
  }
  customElements.define('nd-app',Apps);
  
  
      
  
  
  
  
  
  