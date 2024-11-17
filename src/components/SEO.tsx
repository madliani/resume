import { Helmet } from "react-helmet-async";

type Meta = Readonly<{
    content: string;

    name: string;
}>;

type Properties = Readonly<{
    description?: string;
    lang?: string;
    meta?: Meta[];
    title: string;
}>;

export const SEO = ({
    description = "A personal website built with React and NextUI.",
    lang = "en",
    meta = [],
    title,
}: Properties) => {
    const titleTemplate = "Resume | %s";

    const htmlAttributes = {
        lang,
    };

    return (
        <Helmet
            htmlAttributes={htmlAttributes}
            meta={[
                {
                    content: description,
                    name: "description",
                },
                {
                    content: description,
                    property: "og:description",
                },
                {
                    content:
                        "https://raw.githubusercontent.com/madliani/resume/main/assets/images/resume-homepage.png",
                    name: "og:image",
                },
                {
                    content: "github.com/resume",
                    name: "og:site_name",
                },
                {
                    content: title,
                    property: "og:title",
                },
                ...meta,
            ]}
            title={title}
            titleTemplate={titleTemplate}
        />
    );
};
