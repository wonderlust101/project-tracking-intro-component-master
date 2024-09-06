import React from "react";
import heroImage from '/src/assets/images/illustration-devices.svg'
import Button from "../Button.tsx";

export default function Hero(): React.JSX.Element {

    return (
        <section className="hero">
            <img className="hero__image" src={heroImage} alt="" aria-hidden="true"/>

            <div className="hero__content">
                <div className="hero__text">
                    <div className="hero__subheader">
                        <p className="hero__new">New</p>
                        <h2 className="hero__subheader-text">Monograph Dashboard</h2>
                    </div>

                    <h1>Powerful Insights Into Your Team</h1>

                    <p>Project planning and time tracking for agile teams</p>
                </div>

                <div className="hero__cta">
                    <Button className="button--orange" href="/">Schedule a Demo</Button>
                    <h2 className="hero__cta-text">To See a Preview</h2>
                </div>
            </div>
        </section>
    )
}