interface Props {
  projects: [];
  showRightBar?: any;
  tag?: any;
}

let ListItem = ({ projects, showRightBar, tag }: Props) => {
  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">Size</th>
            <th scope="col">Last visited</th>
            <th scope="col">Modifile on</th>
            <th scope="col">{tag}</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {projects.map((project: any, index: any) => (
            <tr className="hoverList" key={index} onClick={showRightBar}>
              <th scope="row">{project.id}</th>
              <td>{project.name}</td>
              <td>0 Kb</td>
              <td>mm/dd/yyyy</td>
              <td>mm/dd/yyyy</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListItem;
