
class myData extends Creator{
    constructor(){
      super();

      
       // let variavel="Cotton";
       const post='';
       const mydata=[
        {name:'MAgali',type:'Persa' },
       {name:'Kali',type:'Exotico'},
       {name:'Koton',type:'himalaio'}
      ];
      this.render(`<div nd-for>
      <h3>{name}</h3>
      <h3>{type}</h3>
     <h3>{name}</h3>
     <h3>{type}</h3>
     <h3>{name}</h3>
     <h3>{type}</h3>
     </div>`);
      this.ndFor(mydata);

  //   this.ndFor(mydata);

        // console.log(data);
    }
  
      
  
  }
  customElements.define('my-data',myData);
  
  
      
  
  
  
  
  
  