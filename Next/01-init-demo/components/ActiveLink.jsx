import { useRouter } from "next/router";
import Link from "next/link";

//Para que nunca se reprocese, en realidad no cambia esto en momento de renderizacion
const style = {
  color: "#0070f3",
  textDecoration: "underline",
};

const ActiveLink = ({ text, href }) => {
  /**
   * useRouter tiene chingos de propiedades, entre ellas asPath que efectivamente trae / /about /contact /algo/otro/etc como strings
   * Hacer un activeLink manualmente es solo cuestion de comprobar asPath con href que fue mandado como props a este componente
   * y asignarle un estilo si cumple la condicion
   */
  const { asPath } = useRouter();

  return (
    <Link href={href}>
      <a style={asPath === href ? style : null}>{text}</a>
    </Link>
  );
};

export default ActiveLink;
