import Layout from "../components/Layout";

import styles from "../styles/home-page/home-page.module.scss";

const Home = () => {
  return (
    <Layout title="Home">
      <div className={styles.homePageContainer}>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatibus necessitatibus dolor accusamus excepturi quas
        </h1>
      </div>
    </Layout>
  )
}

export default Home;