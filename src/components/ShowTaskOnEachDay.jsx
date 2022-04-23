import getLocalStorageData from "../services/getLocalStorage";

const ShowTaskOnEachDay = ({ date }) => {
  const taskList = getLocalStorageData();

  const convertDate = (newDate) => {
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    // convert id -> yyyymmdd
    const idDay = year + "" + month + "" + day;

    return idDay;
  };

  // convert string 'Fri Apr 22 2022' to date
  let newDate = date;
  // convert date to string yyyymmdd
  let id = convertDate(newDate);

  let idArr = Object.keys(taskList);

  return (
    <>
      {idArr.map((idDay) => {
        if (id === idDay) {
          return (
            <>
              {taskList[id].map((data) => {
                return (
                  <>
                    <p
                      className="fs--2 overflow-hidden task-name each-task"
                      id="taskName"
                      key={id}
                    >
                      {data}
                    </p>
                  </>
                );
              })}
            </>
          );
        }
      })}
    </>
  );
};

export default ShowTaskOnEachDay;
