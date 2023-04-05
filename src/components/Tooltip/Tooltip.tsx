import {ReactNode, useState} from "react";
import "./style.scss";

// @link https://paladini.dev/posts/how-to-make-an-extremely-reusable-tooltip-component-with-react--and-nothing-else/
const Tooltip = (props: {
    direction?: "top" | "bottom" | "left" | "right",
    delay?: number,
    children: ReactNode,
    content?: string|ReactNode

}) => {
    let timeout;

    const [active, setActive] = useState(false);

    const showTip = () => {
        timeout = setTimeout(() => {
            setActive(true);
        }, props.delay || 400);
    };

    const hideTip = () => {
        clearInterval(timeout);
        setActive(false);
    };

    return (
        <div
            className="Tooltip-Wrapper"
            // When to show the tooltip
            onMouseEnter={showTip}
            onMouseLeave={hideTip}
        >
            {/* Wrapping */}
            {props.children}
            {active && props.content ? (
                <div className={`Tooltip-Tip ${props.direction || "top"}`}>
                    {/* Content */}
                    {props.content}
                </div>
            ) : null}
        </div>
    );
};

export default Tooltip;
