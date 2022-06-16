import Head from "next/head";
import styles from "../styles/Home.module.css";
import algoliasearch from "algoliasearch/lite";
import { connectHits, InstantSearch, SearchBox } from "react-instantsearch-dom";
import Card from "components/card";

const searchClient = algoliasearch(
  "latency",
  "6be0576ff61c053d5f9a3225e2a90f76"
);

const CustomHits = connectHits(({ hits }) => (
  <div className="row">
    {hits.map((hit) => (
      <div
        className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3"
        key={hit.objectID}
      >
        <Card hit={hit} />
      </div>
    ))}
  </div>
));

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Algolia InstantSearch</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.main}>
        <div className="container">
          <InstantSearch indexName="bestbuy" searchClient={searchClient}>
            <div className="my-2 text-center">
              <SearchBox />
            </div>
            <CustomHits />
          </InstantSearch>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
