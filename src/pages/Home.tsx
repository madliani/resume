import { AboutCard } from "../components/AboutCard";
import { EduCard } from "../components/EduCard";
import { ExpCard } from "../components/ExpCard";
import { Photo } from "../components/Photo";
import { SEO } from "../components/SEO";
import { Layout } from "../layouts/Layout";
import { Main } from "../layouts/Main";

export const Home = () => {
    return (
        <Layout>
            <SEO title="Home" />
            <Main className="flex flex-wrap">
                <section className="mt-8 w-full flex flex-wrap items-center justify-center">
                    <Photo className="w-[360px] h-[480px] mobile:w-[192px] mobile:h-[256px]" />
                    <AboutCard className="w-11/12 ml-8 mobile:ml-0 mobile:mt-8" />
                </section>
                <section className="mt-8 w-full flex flex-col flex-wrap items-center justify-center">
                    <EduCard className="w-11/12" />
                    <ExpCard className="w-11/12 mt-8 mb-8" />
                </section>
            </Main>
        </Layout>
    );
};
