import { useSelector } from "react-redux";

const Header = ()=>{
    const count = useSelector((state)=>state.counter);

    return (
    <div>
        Header has count value too : {count}
    </div>)
}

export default Header;