import "./_Login.scss";
import "./_Main.scss";

interface Props {
  children: any;
}

function GlobalStyle({ children }: Props) {
  return children;
}

export default GlobalStyle;
