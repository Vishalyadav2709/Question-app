
const question = (props) =>{
    const style ={
        border:'4px solid white',
        textAlign:'center',
        margin: '50px',
       cursor:'pointer',
      
      
    };
    return(
        <div onClick={props.click} style={style}>
            <p>{props.question}</p>
        </div>
    )
};

export default question;