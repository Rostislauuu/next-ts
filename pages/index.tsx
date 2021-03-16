import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import Layout from "../components/Layout";

import styles from "../styles/home-page/home-page.module.scss";

const Home = () => {
  const { t } = useTranslation("common");

  return (
    <Layout title="Home">
      <div className={styles.homePageContainer}>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatibus necessitatibus dolor accusamus excepturi quas
          <span> {t("home")}</span>
        </h1>
      </div>
    </Layout>
  )
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})

export default Home;