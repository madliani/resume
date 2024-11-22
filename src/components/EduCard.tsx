import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";

type Properties = {
    className?: React.CSSProperties;
};

export const EduCard = ({ className }: Properties) => (
    <Card className={className}>
        <CardHeader data-testid="edu-card__title">Education</CardHeader>
        <Divider />
        <CardBody class="flex items-baseline justify-center mt-8 mb-8">
            <Card>
                <CardHeader data-testid="edu-card__text">
                    Petrozavodsk State University
                </CardHeader>
                <Divider />
                <CardBody>
                    <p>M.S. in Mathematics</p>
                </CardBody>
                <Divider />
                <CardFooter>09/2018 &mdash; 06/2020</CardFooter>
            </Card>

            <Card className="ml-8">
                <CardHeader>Petrozavodsk State University</CardHeader>
                <Divider />
                <CardBody>
                    <p>B.Eng. in Electronics</p>
                </CardBody>
                <Divider />
                <CardFooter>09/2014 &mdash; 06/2018</CardFooter>
            </Card>
        </CardBody>
    </Card>
);
