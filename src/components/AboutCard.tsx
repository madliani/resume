import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";

type Properties = {
    className?: React.CSSProperties;
};

export const AboutCard = ({ className }: Properties) => (
    <Card className={className}>
        <CardHeader data-testid="about-card__title">About me</CardHeader>
        <Divider />
        <CardBody>
            <p data-testid="about-card__text">
                I'm an experienced frontend developer with over two years of
                experience, specializing in React and TypeScript. I am
                passionate about creating efficient and user-friendly
                interfaces. My background in mathematics gives me a strong
                analytical foundation, which comes in handy on frontend
                projects.
            </p>

            <p>
                I thrive in fast-paced environments where I can use my
                creativity and technical skills to achieve impactful results.
                I'm constantly learning and keeping up with the latest trends in
                front-end technologies. This allows me to quickly adapt to new
                frameworks and create innovative solutions that drive business
                growth.
            </p>

            <p>
                Outside of work, I enjoy exploring new programming approaches
                through personal projects and contributing to open source
                communities.
            </p>

            <p>
                Currently, I'm looking for an opportunity to contribute my
                front-end development skills to an innovative company that
                values cutting-edge digital solutions.
            </p>
        </CardBody>
    </Card>
);
