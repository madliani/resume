import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import classNames from "classnames";
import SocialAvatar from "../assets/images/social_avatar.jpeg";

type Properties = {
    className?: React.CSSProperties;
};

export const PhotoCard = ({ className }: Properties) => (
    <Card className={className}>
        <CardHeader>
            <Image
                className={classNames(
                    className,
                    "w-[192px] h-[256px] tablet:w-[360px] tablet:h-[480px]",
                )}
                src={SocialAvatar}
                alt="Me"
                data-testid="photo-card__photo"
            />
        </CardHeader>
        <CardBody>
            <Button color="primary">
                <a
                    href="https://raw.githubusercontent.com/madliani/resume/refs/heads/main/assets/documents/CV.pdf"
                    data-testid="photo-card__button">
                    Download CV
                </a>
            </Button>
        </CardBody>
    </Card>
);
