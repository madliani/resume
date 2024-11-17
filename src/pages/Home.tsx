import { AboutCard } from "../components/AboutCard";
import { EduCard } from "../components/EduCard";
import { SEO } from "../components/SEO";
import { Layout } from "../layouts/Layout";
import { Main } from "../layouts/Main";

export const Home = () => {
    return (
        <Layout>
            <SEO title="Home" />
            <Main className="flex items-baseline justify-center">
                <AboutCard />
                <EduCard />
            </Main>
        </Layout>
    );
};
