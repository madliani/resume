import { Image } from "@nextui-org/image";
import SocialAvatar from "../assets/images/social_avatar.jpeg";

type Properties = {
    className?: React.CSSProperties;
};

export const Photo = ({ className }: Properties) => (
    <Image className={className} src={SocialAvatar} alt="Me" />
);
