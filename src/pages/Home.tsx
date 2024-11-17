import { AboutCard } from "../components/AboutCard";
import { SEO } from "../components/SEO";
import { Layout } from "../layouts/Layout";
import { Main } from "../layouts/Main";

export const Home = () => {
    return (
        <Layout>
            <SEO title="Home" />
            <Main className="flex justify-center">
                <AboutCard />
            </Main>
        </Layout>
    );
};
