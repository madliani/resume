import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";

export const EduCard = () => (
    <Card className="w-1/3 h-96 mt-8 ml-8">
        <CardHeader data-testid="edu-card__title">Education</CardHeader>
        <Divider />
        <CardBody class="flex items-baseline justify-around">
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

            <Card className="mt-4">
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
