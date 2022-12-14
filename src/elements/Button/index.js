import React from "react";
import { Link } from "react-router-dom";
import propsTypes from "prop-types";

export default function Button(props) {
  const className = [props.className];
  if (props.isPrimary) className.push("btn-primary");
  if (props.isLarge) className.push("btn-lg");
  if (props.isSmall) className.push("btn-sm");
  if (props.isBlock) className.push("btn-block");
  if (props.hasShadow) className.push("btn-shadow");

  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  if (props.isDisabled || props.isLoading) {
    if (props.isDisabled) className.push("disabled");
    return (
      <span className={className.join(" ")} style={props.style}>
        {props.isLoading ? (
          <>
            <span className="spinner-border spinner-border-sm mx-5"></span>
            <span className="sr-only">Loading...</span>
          </>
        ) : (
          props.children
        )}
      </span>
    );
  }

  if (props.type === "link") {
    if (props.isExternal) {
      return (
        <a href={props.href} className={className.join(" ")} style={props.style} target={props.target === "_blank" ? "_blank" : undefined} rel={props.target === "_blank" ? "noreferrer" : undefined}>
          {props.children}
        </a>
      );
    } else {
      return (
        <Link to={props.href} className={className.join(" ")} style={props.style} onClick={onClick}>
          {props.children}
        </Link>
      );
    }
  }
  return (
    <Button className={className.join(" ")} style={props.style} onClick={onClick}>
      {props.children}
    </Button>
  );
}

Button.propTypes = {
  type: propsTypes.oneOf(["button", "link"]),
  onClick: propsTypes.func,
  href: propsTypes.string,
  target: propsTypes.string,
  className: propsTypes.string,
  isDisabled: propsTypes.bool,
  isExternal: propsTypes.bool,
  isLoading: propsTypes.bool,
  isSmall: propsTypes.bool,
  isLarge: propsTypes.bool,
  isBlock: propsTypes.bool,
  hasShadow: propsTypes.bool,
};
