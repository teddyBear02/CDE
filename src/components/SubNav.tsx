import Button from "./Button";

interface Props {
  titleNav: string;
  titleBtn: string;
  event?: any;
}

let SubNav = ({ titleNav, titleBtn, event }: Props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" id="subNav">
        <div className="container-fluid ">
          <span className="navbar-brand">{titleNav}</span>
          <span className="navbar-text">
            <Button title={titleBtn} myEvent={event} />
          </span>
        </div>
      </nav>
    </>
  );
};

export default SubNav;
