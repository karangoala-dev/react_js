const List = ({list}) => {
    return(
        <div className='container'>
            {list.map((node)=>{
                return(
                <div key={node.id}>
                    <span>{node.name}</span>
                    {/* recursive step */}
                    {node && node.children.length != 0 && <List list={node.children}/>}
                </div>
                )
            })}
        </div>
    );
}

export default List;