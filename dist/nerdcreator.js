
class Creator extends HTMLElement{
    
    constructor(){
     super();
     
     this.interpolationMatches=['{','}'];
   //  this.attr_for=this.getAttribute('nd-for');
     const div=document.createElement('div');
     this.appendChild(div);

     // return myElement;
      
    
  }
  render(value){
    this.innerHTML=value;
  }
  hasBindind(element){
       return element.textContent.indexOf(this.interpolationMatches[0])> -1 && element.textContent.indexOf(this.interpolationMatches[1])> -1;
        //console.log(element.textContent.indexOf(this.interpolationMatches[0])> -1 && element.textContent.indexOf(this.interpolationMatches[1])> -1;);
    }
  interpolate(properties){
    const bindings=Array.from(document.querySelector('[nd-bind]').children);
        

    bindings.forEach((binding)=>{
        
        if(this.hasBindind(binding)===true){
            const value=binding.textContent.slice(1,binding.textContent.lastIndexOf(this.interpolationMatches[1]));
            //console.log(properties.hasOwnProperty(value))
         
        if(properties.hasOwnProperty(value) && value != null){
            binding.textContent=properties[value];
            console.log(binding);


        }
    }
    })
  }
    ndFor(mydata){
        const dady=document.querySelector('[nd-for]');
        const sons=dady.children;
        
            const attr=dady.getAttribute('nd-for');
            const dataGrid=mydata;
            let records=Object.keys(dataGrid);
            const bindings=Array.from(dady.children);
            let objects=bindings.length;

            

           
           

           for(let post in dataGrid){
                for(let obj=0;obj<objects;obj++){
                    const field=bindings[obj].textContent.slice(1,bindings[obj].textContent.lastIndexOf(this.interpolationMatches[1]));
                   
                   

                    console.log(dataGrid.hasOwnProperty(field));

                /*    
                    if(dataGrid[obj][field]===field && field !=null){
                         

                         console.log(bindings[obj].textContent=dataGrid[post][field])
                    }*/
                }
            
            }
           /*     bindings.forEach((binding)=>{
                    if(this.hasBindind(binding)===true){
                       const value=binding.textContent.slice(1,binding.textContent.lastIndexOf(this.interpolationMatches[1]));
                        

                        if(dataGrid.hasOwnProperty(num) && value != null){
                            binding.textContent=dataGrid[num][value];
                            console.log(this.hasBindind(binding))
                            num++;
                        }
                    }
                })*/

                
       

        
    
    
    }
}   
