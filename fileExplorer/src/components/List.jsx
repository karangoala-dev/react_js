import { useState } from "react";

const List = ({ list, addFolder, deleteFolder }) => {
    const[expandedObj, setExpandedObj] = useState({});
    return (
        <div className="container">
            {list && list.map((item) =>
                <div key={item.id}>
                    <div className="node">
                        {/* render the list name and +/- icon here if isFolder */}
                        {item.isFolder && <span onClick={() => setExpandedObj((prev) => ({...prev, [item.name] : !prev[item.name]}))}>{expandedObj[item.name] ? '- ' : '+ '}</span>}
                        <span className="node">
                            {item.name}
                        </span>
                        {/* render add/remove folder buttons here, add button only if it is a folder*/}
                        {item.isFolder && <img className="icon" src="https://pic.onlinewebfonts.com/svg/img_523710.svg" onClick={()=>addFolder(item.id)}/>}
                        <img className="icon" src="https://cdn-icons-png.flaticon.com/512/58/58360.png" onClick={()=>deleteFolder(item.id)}/>
                    </div>
                    {/* recursively render children items here */}
                    {expandedObj[item.name] && item.children && <List list={item.children} addFolder={addFolder} deleteFolder={deleteFolder}/>}
                </div>
            )}
        </div>)
}

export default List;