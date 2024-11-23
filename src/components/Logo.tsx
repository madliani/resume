import { Image } from "@nextui-org/image";
import LogoIcon from "../assets/icons/logo.png";

type Properties = {
    className?: React.CSSProperties;
};

export const Logo = ({ className }: Properties) => (
    <Image
        className={className}
        src={LogoIcon}
        alt="Logotype"
        data-testid="logo"
    />
);
