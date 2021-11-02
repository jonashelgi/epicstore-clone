import React from "react";
import { Link } from "react-router-dom";

import styles from "./IconLink.module.css";
import { Icon } from "../../components";
import { IconTypes, Size } from "../Icon/Icon";

interface IconLinkProps {
  /*
  Route or url to go to when clicked.
   */
  to: string;
  /*
  List of available icon types.
   */
  icon?: IconTypes;
  /*
  The text that will be displayed.
   */
  title?: string;
  /*
  Changes the color of the title
  Can have hex and default colors.
   */
  color?: string;
  /*
  Size of the icon.
   */
  size?: Size;
  /*
  Adds margin to the right.
   */
  marginRight?: number;
  /*
  Adds margin to the left.
   */
  marginLeft?: number;
  /*
  Adds padding to the bottom.
   */
  paddingBottom?: number;
}

const IconLink = ({
  to,
  icon,
  title,
  color,
  size = "md",
  marginRight = 0,
  marginLeft = 0,
  paddingBottom = 0,
}: IconLinkProps) => {
  return (
    <>
      {to.substring(0, 3) !== "htt" && (
        <Link to={to} className={styles.link}>
          <div
            className={styles.icon}
            style={{ paddingBottom: paddingBottom, fill: color, color: color }}
          >
            {icon && (
              <Icon
                type={icon}
                size={size}
                marginRight={marginRight}
                marginLeft={marginLeft}
              />
            )}
            {title && <div style={{ fontSize: "15px" }}>{title}</div>}
          </div>
        </Link>
      )}

      {to.substring(0, 3) === "htt" && (
        <a href={to} className={styles.link} target="_blank" rel="noreferrer">
          <div
            className={styles.icon}
            style={{ paddingBottom: paddingBottom, fill: color, color: color }}
          >
            {icon && (
              <Icon
                type={icon}
                size={size}
                marginRight={marginRight}
                marginLeft={marginLeft}
              />
            )}
            {title && <div style={{ fontSize: "15px" }}>{title}</div>}
          </div>
        </a>
      )}
    </>
  );
};

export default IconLink;
