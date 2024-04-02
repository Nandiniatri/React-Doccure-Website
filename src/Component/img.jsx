export default function Image({src , className}){
    return (
        <div>
            <img className={className} src={src}/>
        </div>
    )
}