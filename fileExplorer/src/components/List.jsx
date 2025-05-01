const List = ({list}) => {
    return (
    <div className="container">
        {/* render the list name here */}
        {list && list.map((item) => 
        <>
        <span className="node">
            {item.name}
        </span>
        {item.children && <List list={item.children}/>}
        </>
    )}
    </div>)
}

export default List;