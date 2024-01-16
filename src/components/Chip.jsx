const Chip = ({name,email,profile_photo}) => {
  return (
    <>
    <div className="chip flex  place-content-center bg-slate-300 rounded-full py-1 min-w-max max-w-min items-center m-[3.5px]">

    <img className="mx-1 w-4 h-4 rounded-full" src={profile_photo} alt={name}/>
    <p className="mx-1 text-xs">{name}</p>
    <a className="mx-1 mr-1.5 text-xs" href="#!"><img className="w-[10px] pt-[0.20rem]" src="./src/assets/cross.png" alt="cross icon" /></a>
    
    </div>
    
    </>
  )
}
export default Chip