export default function AHref({children , href}){
    return (
        <div>
            <a href={href}>{children}</a>
        </div>
    )
}