import { useState } from "react";

function AddWorkModal(props) {
    const [content, setContent] = useState('');
    const onChangeContent = (e) => {
        setContent(e.target.value)
    }
    let listData = '';
    const onSubmit = (e) => {
        e.preventDefault();
        listData = JSON.parse(localStorage.getItem("data"))? JSON.parse(localStorage.getItem("data")): {};
        if (!listData[props.chooseDate]) listData[props.chooseDate] = [];
        listData[props.chooseDate].push(content);
        listData = { ...listData, [props.chooseDate]: listData[props.chooseDate] };
        localStorage.setItem("data", JSON.stringify(listData));
        props.closeModal();
        setContent('');
    }

    return(
        <div className="content">
            <div id="myModal" className={`modal  ${props.isShowAdd ? 'active_modal'  : 'unactive_modal'}`}>
                <div className="modal-content1">
                    <form action="#">
                        <span className="close" onClick={props.closeModal}>&times;</span>
                        <h2 className="text-center mb-3 h2" >Add Work</h2>
                        <div className="fomrgroup  mb-2">
                            <b>Content:</b>&ensp;
                            <input type="text" placeholder="add..." className="content_input" onChange={onChangeContent} value={content}/>
                        </div>
                        <div className="fomrgroup text-center">
                            <button className="btn btn-success add" onClick={onSubmit}>Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      
    )
}
export default AddWorkModal