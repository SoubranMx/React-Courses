import { CSSProperties, FC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

//Para que nunca se reprocese, en realidad no cambia esto en momento de renderizacion
const style:CSSProperties = {
  color: "#0070f3",
  textDecoration: "underline",
};

interface Props {
  text: string,
  href: string
}

const ActiveLink:FC<Props> = ({ text, href }) => {
  /**
   * useRouter tiene chingos de propiedades, entre ellas asPath que efectivamente trae / /about /contact /algo/otro/etc como strings
   * Hacer un activeLink manualmente es solo cuestion de comprobar asPath con href que fue mandado como props a este componente
   * y asignarle un estilo si cumple la condicion
   */
  const { asPath } = useRouter();

  return (
    <Link href={href}>
      <a style={asPath === href ? style : undefined}>{text}</a>
    </Link>
  );
};

export default ActiveLink;
