interface BevezetoProps {
    title: string
    children: React.ReactNode;
}

function BevezetoResz(props: BevezetoProps) {
    return (<>
        <div className="card">
            <div className="card-header">
                {props.title}
            </div>

            <div className="card-body">{props.children} </div>
        </div >
    </>)
}

export default BevezetoResz;