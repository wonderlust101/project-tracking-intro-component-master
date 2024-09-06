import React from "react";

type ButtonProps = {
    children?: React.ReactNode;
    className?: string;
    href?: string;
}

export default function Button({children, className, href}: ButtonProps): React.JSX.Element {
    const Component = href ? 'a' : 'button';

    return (
        <Component href={href} className={'button ' + className}>
            {children}
        </Component>
    );
}
