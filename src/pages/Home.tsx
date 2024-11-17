import { AboutCard } from "../components/AboutCard";
import { EduCard } from "../components/EduCard";
import { ExpCard } from "../components/ExpCard";
import { SEO } from "../components/SEO";
import { Layout } from "../layouts/Layout";
import { Main } from "../layouts/Main";

export const Home = () => {
    return (
        <Layout>
            <SEO title="Home" />
            <Main className="flex flex-wrap items-center justify-center">
                <AboutCard />
                <EduCard />
                <ExpCard />
            </Main>
        </Layout>
    );
};
