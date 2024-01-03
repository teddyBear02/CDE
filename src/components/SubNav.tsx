import Button from "./Button";

interface Props {
  titleNav: string;
  disabel?: boolean;
  titleBtn?: string;
  event?: any;
}

let SubNav = ({ titleNav, titleBtn, event, disabel }: Props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" id="subNav">
        <div className="container-fluid ">
          <span className="navbar-brand">{titleNav}</span>
          <span className={`navbar-text ${disabel ? "disable" : ""}`}>
            <Button title={titleBtn} myEvent={event} />
          </span>
        </div>
      </nav>
    </>
  );
};

export default SubNav;
