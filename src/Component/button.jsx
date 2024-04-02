export default function Button({children , className ,handleClick}){
    return (
        <div>
            <button onClick={handleClick} className={className}>{children}</button>
        </div>
    )
}