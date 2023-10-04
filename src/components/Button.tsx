interface Props {
  tiltle: string;
}

let Button = ({ tiltle }: Props) => {
  return (
    <button type="button" className="btn btn-primary">
      {tiltle}
    </button>
  );
};

export default Button;
