import Button from "@/components/Button";
import styles from "./Login.module.scss";
import arrow from "../../../public/arrow-left.svg";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.titlebar}>
        <Link href={"/"}>
          <Image src={arrow} alt="go back" />
        </Link>
        <p>Login</p>
      </div>
      <div className={styles.form}>
        <input placeholder="Email"></input>
        <input placeholder="Senha"></input>
      </div>
      <div className={styles.actions}>
        <Button type="primary" msg="Login" height={56} width={333} />
        <h2>Esqueceu sua senha?</h2>
        <p>
          Não possui uma conta?&nbsp;
          <Link href={"signup"}>
            <span>Registre-se agora!</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
