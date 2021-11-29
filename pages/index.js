import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, my name is Felix Yunianto Gunawan</p>
        <p>
          A Developer who is interested in Javascript programming language. Have
          a experience creating website with Laravel, creating mini projects in
          Javascript language. On other hand, I can learn a new technoloy
          quickly, get used to team or individual work, and can adapt quickly to
          new environments
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
