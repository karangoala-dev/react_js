import { useState } from "react";

const List = ({list}) => {
    const[expanded, setExpanded] = useState({});
    return(
        <div className='container'>
            {list.map((node)=>{
                return(
                <div key={node.id}>
                    <span>{node.children.length != 0 && <span onClick={() => setExpanded((prev)=>({...prev, [node.name]: !prev[node.name]}))}>{expanded[node.name] ? '- ' : '+ '}</span>}{node.name}</span>
                    {/* recursive step */}
                    {expanded[node.name] && node && node.children.length != 0 && <List list={node.children}/>}
                </div>
                )
            })}
        </div>
    );
}

export default List;