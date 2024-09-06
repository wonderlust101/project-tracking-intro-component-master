import React, {useState} from "react";
import Logo from '/src/assets/images/logo.svg';
import HamburgerIcon from "/src/assets/images/icon-hamburger.svg"
import CloseIcon from "/src/assets/images/icon-close.svg"

const navLinks = [
    {title: 'Product', href: '/'},
    {title: 'Features', href: '/'},
    {title: 'Pricing', href: '/'},
]

type NavigationLinkProps = {
    text: string;
    href: string;
    style?: React.CSSProperties;
}

type HamburgerMenuIconProps = {
    onToggleMenu: () => void;
    icon: string;
}

export default function Header(): React.JSX.Element {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function onToggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header className="header">
            <img src={Logo} alt="Project Tracker Logo"/>

            <nav className={`header__navigation header__navigation--${isMenuOpen ? 'is-open' : 'is-closed'}`}>
                <ul className="header__navigation-flex">

                    {navLinks.map((link) => (
                        <NavigationLink
                            key={link.title}
                            href={link.href}
                            text={link.title}/>
                    ))}

                    <div className="header__divider"></div>

                    <NavigationLink
                        href="/"
                        text="Login"
                        style={{opacity: 0.5}}/>
                </ul>
            </nav>

            <MenuToggleIcon icon={isMenuOpen ? CloseIcon : HamburgerIcon} onToggleMenu={onToggleMenu}/>
        </header>
    )
}

function MenuToggleIcon({onToggleMenu, icon}: HamburgerMenuIconProps): React.JSX.Element {
    return (
        <button className="header__hamburger" onClick={() => onToggleMenu()}>
            <img src={icon} alt=""
                 aria-hidden="true"></img>
        </button>
    )
}

function NavigationLink({text, href, style}: NavigationLinkProps): React.JSX.Element {

    return (
        <li>
            <a className="header__navigation-link" style={style} href={href}
               aria-label={`Go to ${text} Page`}>{text}</a>
        </li>
    )
}