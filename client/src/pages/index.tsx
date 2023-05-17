import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import Image from "next/image";
import money from "../../public/LaunchScreen/Illustration.svg";
import Button from "@/components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Assinaturas.</title>
        <meta name="description" content="Subscriptions tracker" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.container}>
        <div className={styles.moneyLogo}>
          <Image src={money} alt="money" />
        </div>
        <div className={styles.appName}>
          <h1>Assinaturas.</h1>
        </div>
        <div className={styles.buttons}>
          <Link href={"/login"}>
            <Button type="secondary" msg="Entrar" height={56} width={343} />
          </Link>
          <Link href={"/signup"}>
            <Button
              type="primary"
              msg="Registrar conta"
              height={56}
              width={343}
            />
          </Link>
        </div>
      </div>
    </main>
  );
}
