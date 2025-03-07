import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
} from "@nextui-org/navbar";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export const Header = () => (
    <Navbar>
        <Link to="/">
            <NavbarBrand>
                <Logo className="w-[64px] h-[64px]" />
                <span className="font-bold" data-testid="header__title">
                    madliani
                </span>
            </NavbarBrand>
        </Link>
        <NavbarContent justify="center">
            <NavbarItem>
                <a
                    href="https://github.com/madliani"
                    aria-label="Visit GitHub profile"
                    data-testid="header__github-icon">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </NavbarItem>
            <NavbarItem>
                <a
                    href="mailto:madliani@hotmail.com"
                    aria-label="Send an email to madliani@hotmail.com"
                    data-testid="header__email-icon">
                    <FontAwesomeIcon icon={faAt} />
                </a>
            </NavbarItem>
        </NavbarContent>
    </Navbar>
);
