import "./first_component.css";
export default function MyFirstComponent(){
    const elmStyle={
        backgroundColor:'red',
        fontSize:'20px',
    };

    const data={
        name : "adham",
        email : 'adhmalslahy@gmail.com'
    };
    return (
  
        <div>
            <h1 style={elmStyle
                
            } >Hello World</h1>
            <h1 className={ data.name=="adha" ? "active": "not"}>this is class style</h1>
            <button onClick={sayHello
               
            } >click me</button>
        </div>
        
    );
    function sayHello (){
   data.name="adham";
    }
  }
