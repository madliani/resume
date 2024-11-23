import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import SocialAvatar from "../assets/images/social_avatar.jpeg";

type Properties = {
    className?: React.CSSProperties;
};

export const PhotoCard = ({ className }: Properties) => (
    <Card className={className}>
        <CardHeader>
            <Image className={className} src={SocialAvatar} alt="Me" />
        </CardHeader>
        <CardBody>
            <Button color="primary">
                <a href="https://raw.githubusercontent.com/madliani/resume/refs/heads/main/assets/documents/CV.pdf">
                    Download CV
                </a>
            </Button>
        </CardBody>
    </Card>
);
