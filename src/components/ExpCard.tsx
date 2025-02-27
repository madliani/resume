import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";

type Properties = {
    className?: React.CSSProperties;
};

export const ExpCard = ({ className }: Properties) => (
    <Card className={className}>
        <CardHeader data-testid="exp-card__title">Experience</CardHeader>
        <Divider />
        <CardBody class="flex flex-col flex-wrap items-center justify-center mt-8 mb-8">
            <Card className="w-11/12">
                <CardHeader>axmit</CardHeader>
                <Divider />
                <CardBody>
                    <p>
                        While working as a front-end developer, I implemented
                        many improvements for several websites that positively
                        impacted the user experience.
                    </p>
                    <p>Improvements implemented:</p>
                    <ul>
                        <li>
                            Integrated and configured Google Analytics to track
                            user interaction with the interface and optimize
                            application performance.
                        </li>
                        <li>
                            Integrated Google Maps API to select relevant
                            content based on user location.
                        </li>
                        <li>
                            Added OpenGraph meta tags to increase social media
                            conversions and improve SEO metrics.
                        </li>
                    </ul>
                    <p>
                        Stack used: React, Redux, Redux-Saga, JavaScript,
                        TypeScript, SCSS.
                    </p>
                </CardBody>
                <Divider />
                <CardFooter>06/2019 &mdash; 10/2020</CardFooter>
            </Card>
        </CardBody>
    </Card>
);
