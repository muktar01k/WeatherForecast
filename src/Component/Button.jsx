

const Button=({text,className,...props})=>{
    return(
       <button
        {...props}
        className={`w-[8rem] h-[3.4rem] md:w-[10rem] md:h-[3.4rem] bg-blue-400 rounded-xl shadow-xl ${className}`}
       >
      {text}
       </button>
    )
}

export default Button