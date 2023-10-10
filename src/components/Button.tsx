interface Props {
  tiltle: string;
  myEvent?: any;
}

let Button = ({ tiltle, myEvent }: Props) => {
  return (
    <button type="button" className="btn btn-primary" onClick={myEvent}>
      {tiltle}
    </button>
  );
};

export default Button;
