import '../styles/styles.css';
 function MyHeader(){
    return (
      <h1 className={'header'} >Tarmeez Academy</h1>  
    );
}

export default function NewChallange(){
    return (
        <div  >
           <div> <MyHeader/></div>

            <div className='body' >

           <div>
           <div  className={'post'}>

         <Post/>

        </div>
            <div  
            className={'post'}>

            <Post/>

            </div>

           </div>
<Buttons/>
            </div>

        </div>
    );
}

function Post (){
    return (
        <div>
            <h3>this is the post title </h3>
            <hr></hr>
            <h5>thi si sthe post body</h5>
        </div>
    );
}

function Buttons (){
    return (
        <div className={'buttons'}>
       <div>
       <button className='button' >click me</button>
       <button className='button' >click me</button>
       <button className='button' >click me</button>
       <button className='button' >click me</button>
       <button className='button' >click me</button>
       <button className='button' >click me</button>
       <button className='button' >click me</button>
       <button className='button' >click me</button>
       <button className='button' >click me</button>
       <button className='button' >click me</button>
       <button className={"button last_button"}>click me</button>
       </div>
        </div>
    );
}