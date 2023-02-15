import { AiFillEdit,AiFillDelete } from "react-icons/ai";

const List=({id,title,removeItem,editItem})=>{
    return(
        <div className="list-item">
            <p>{title}</p>
            <div className="button-container">
                <AiFillEdit onClick={()=>editItem(id)} className="btn"/>
                <AiFillDelete onClick={()=>removeItem(id)} className="btn"/>
            </div>
        </div>
    )
}
export default List