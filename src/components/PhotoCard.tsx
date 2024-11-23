import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Photo } from "./Photo";

type Properties = {
    className?: React.CSSProperties;
};

export const PhotoCard = ({ className }: Properties) => (
    <Card className={className}>
        <CardHeader>
            <Photo className="w-[192px] h-[256px] tablet:w-[360px] tablet:h-[480px]" />
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
