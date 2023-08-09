import { useState, FormEvent } from "react";
import Head from "next/head";
import { Header } from "../../components/Header";
import styles from "./styles.module.scss";
import { toast } from "react-toastify";
import { setupAPIClient } from "../../services/api";
import { canSSRAuth } from "../../utils/canSSRAuth";

export default function Category() {
  const [name, setName] = useState("");

  async function handleCategory(e: FormEvent) {
    e.preventDefault();

    if (name === "") {
      toast.warning("Preencha todos os campos");
      return;
    }

    const apiClient = setupAPIClient();
    await apiClient.post("category", {
      name,
    });

    toast.success("Categoria cadastrada com sucesso");

    setName("");
  }

  return (
    <>
      <Head>
        <title>Nova categoria - Sabor Pizzaria</title>
      </Head>
      <div>
        <Header />

        <main className={styles.container}>
          <h1>Cadastrar categorias</h1>

          <form className={styles.form} onSubmit={handleCategory}>
            <input
              type="text"
              placeholder="Digite o nome da categoria"
              className={styles.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button className={styles.buttonAdd} type="submit">
              Cadastrar
            </button>
          </form>
        </main>
      </div>
    </>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
