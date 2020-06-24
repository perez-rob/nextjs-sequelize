import Link from "next/link";

/* components */
import Layout from "../components/layout/Layout";
import UserNav from "../components/navigation/User";

export default function Home(props) {
  const { user } = props;
  return (
    <Layout title="Next.js with Sequelize | Home Page">
      <div className="container">
        <main>
          <h1 className="title">
            Sequelize &amp; <a href="https://nextjs.org">Next.js!</a>
          </h1>
          <p className="description">
            <img
              src="/sequelize.svg"
              alt="Sequelize"
              height="120"
              style={{ marginRight: "1rem" }}
            />
            <img src="/nextjs.svg" alt="Next.js" width="160" />
          </p>
          <UserNav props={{ user: user }} />
          <div className="grid">
            <Link href="/user">
              <a className="card">
                <h3>Users &rarr;</h3>
                <p>Listed users of this web application.</p>
              </a>
            </Link>

            <Link href="/post">
              <a className="card">
                <h3>Posts &rarr;</h3>
                <p>Post collection from users of this web application.</p>
              </a>
            </Link>

            <Link href="/job">
              <a className="card">
                <h3>Jobs &rarr;</h3>
                <p>Job Post collection from users of this web application.</p>
              </a>
            </Link>
          </div>
        </main>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const host = process.env.NODE_ENV === "production" ? "https://" : "http://";
  const { query, req, res } = context;
  // console.log(context);

  // const { nextPage } = query;
  // const { token } = getAppCookies(req);

  // const nextPageUrl = !isNaN(nextPage) ? `?nextPage=${nextPage}` : "";
  // const baseApiUrl = `${host}${req.headers.host}/api`;

  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const jobsApi = await fetch(`${baseApiUrl}/job${nextPageUrl}`, {
  //   headers: {
  //     authorization: token || "",
  //   },
  // });
  // const jobs = await jobsApi.json();

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      // jobs,
    },
  };
}
