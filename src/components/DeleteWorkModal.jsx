

function DeleteWorkModal(props) {

    const listData = JSON.parse(localStorage.getItem("data"));
    const onSubmit = (e) => {
        e.preventDefault();
        listData[props.chooseDate].splice(props.findIndex, 1);
        localStorage.setItem("data", JSON.stringify(listData));
        props.closeDelete();
    }

    return(
        <div className="content">
            <div id="myModal" className={`modal  ${props.isShowDelete ? 'active_modal'  : 'unactive_modal'}`}>
                <div className="modal-content1">
                    <form action="#">
                        <span className="close" onClick={props.closeDelete}>&times;</span>
                        <h2 className="text-center mb-3 h2" >Delete Work</h2>
                        <div className="fomrgroup  mb-2">
                            <b>Do you really want to delete it?</b>
                        </div>
                        <div className="fomrgroup text-center">
                            <button className="btn btn-success add" onClick={onSubmit}>OK</button> &emsp;
                            <button className="btn btn-danger add" onClick={props.closeDelete}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      
    )
}
export default DeleteWorkModal