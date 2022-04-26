import { useEffect, useState } from "react";

function EditWorkModal(props) {
  
    const [content, setContent] = useState('');

    useEffect(() => {
      setContent(props.infoEdit)
    },[props.infoEdit]);

    const onChangeContent = (e) => {
        setContent(e.target.value)
    }
    
    const listData = JSON.parse(localStorage.getItem("data"));
    const onSubmit = (e) => {
        e.preventDefault();
        listData[props.chooseDate][props.findIndex] = content;
        localStorage.setItem("data", JSON.stringify(listData));
        props.closeEdit();
    }
    console.log(props.infoEdit)
    return(
        <div className="content">
            <div id="myModal" className={`modal  ${props.isShowEdit ? 'active_modal'  : 'unactive_modal'}`}>
                <div className="modal-content1">
                    <form action="#">
                        <span className="close" onClick={props.closeEdit}>&times;</span>
                        <h2 className="text-center mb-3 h2" >Edit Work</h2>
                        <div className="fomrgroup  mb-2">
                            <b>Content:</b>&ensp;
                            <input type="text"  className="content_input" onChange={onChangeContent} value={content}/>
                        </div>
                        <div className="fomrgroup text-center">
                            <button className="btn btn-success add" onClick={onSubmit}>Edit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      
    )
}
export default EditWorkModal