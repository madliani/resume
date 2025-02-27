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
            <p>
                I am a front-end developer with commercial experience,
                specialising in React and TypeScript. I am passionate about
                creating beautiful and user friendly interfaces. My maths
                background gives me a strong analytical background, which oen
                comes in handy on projects.
            </p>
            <p>
                Technology Stack: React, Redux, Redux Thunk, Redux saga,
                TypeScript, JavaScript, SCSS, GNU/Linux, Git, Bash, Docker.
            </p>
            <p>Contacts for communication:</p>
            <ul>
                <li>Phone and WhatsApp: +995 555 75 29 59</li>
                <li>
                    Email:{" "}
                    <a href="mailto:madliani@hotmail.com">
                        madliani@hotmail.com
                    </a>
                </li>
            </ul>
        </CardBody>
    </Card>
);
