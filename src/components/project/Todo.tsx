import ListItem from "../ListItem";
import SubNav from "../SubNav";

let Todo = () => {
  return (
    <>
      <div className="container showFolder">
        <SubNav titleNav="Việc cần làm" titleBtn="New" />
        <div className="toolbar-section">
          <div className="filtersWrapper">
            <div className="filtersContianer">
              <div className="filter">
                <span>Owner</span> <i className="bi bi-caret-down-fill"></i>
              </div>
              <div className="filter">
                <span>Users</span> <i className="bi bi-caret-down-fill"></i>
              </div>
              <div className="filter">
                <span>Groups</span> <i className="bi bi-caret-down-fill"></i>
              </div>
              <div className="filter">
                <span>Status</span> <i className="bi bi-caret-down-fill"></i>
              </div>
              <div className="filter">
                <span>Priority</span> <i className="bi bi-caret-down-fill"></i>
              </div>
              <div className="filter">
                <span>Date modified</span>
                <i className="bi bi-caret-down-fill"></i>
              </div>
            </div>
          </div>
        </div>

        <ListItem projects={[]} tag={"Status"} />
      </div>
    </>
  );
};

export default Todo;
