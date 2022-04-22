const getLocalStorageData = () => {
  let getLocalStorage = localStorage.getItem("New Task");
  let taskList = {};

  if (getLocalStorage === null) {
    taskList = {};
  } else {
    taskList = JSON.parse(getLocalStorage);
  }

  return taskList;
};

export default getLocalStorageData;
