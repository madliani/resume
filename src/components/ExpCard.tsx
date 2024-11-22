import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";

type Properties = {
    className?: React.CSSProperties;
};

export const ExpCard = ({ className }: Properties) => (
    <Card className={className}>
        <CardHeader data-testid="exp-card__title">Experience</CardHeader>
        <Divider />
        <CardBody class="flex flex-col items-center justify-around">
            <Card className="w-2/3 mt-4">
                <CardHeader data-testid="exp-card__text">
                    Middle Front-end Developer at inter://so
                </CardHeader>
                <Divider />
                <CardBody>
                    <p>
                        At inter://so, I led the front-end development efforts
                        for a client-facing application. I used Figma designs
                        and integrated Google Maps and REST APIs to bring the
                        project to life. I was responsible for designing the
                        project's architecture, prioritizing scalable solutions
                        that improved performance and user experience.
                        Throughout the development process, I worked closely
                        with designers and backend developers to ensure smooth
                        integration and functionality, resulting in the
                        successful delivery of a robust and responsive
                        application.
                    </p>
                </CardBody>
                <Divider />
                <CardFooter>02/2022 &mdash; 09/2022</CardFooter>
            </Card>

            <Card className="w-2/3 mt-4 mb-4">
                <CardHeader>Junior Front-end Developer at axmit</CardHeader>
                <Divider />
                <CardBody>
                    <p>
                        At axmit, my role as a React developer spanned several
                        outsourcing projects where I effectively applied my
                        expertise. I focused on integrating and configuring
                        Google Analytics to monitor user interactions and
                        optimize website performance. Working closely with
                        design teams, I used Figma to ensure project alignment
                        with client goals and expectations. I also enhanced
                        location-based functionality by integrating the Google
                        Maps API and improved data retrieval efficiency by
                        integrating the REST API for dynamic content.
                        Implementation of OpenGraph meta tags further increased
                        social media sharing and SEO visibility. Throughout
                        these initiatives, I maintained proactive collaboration
                        with QA teams to address issues, resolve bugs, and
                        introduce new features in a timely manner. This approach
                        ensured the delivery of quality solutions and high
                        customer satisfaction.
                    </p>
                </CardBody>
                <Divider />
                <CardFooter>06/2019 &mdash; 10/2020</CardFooter>
            </Card>
        </CardBody>
    </Card>
);
