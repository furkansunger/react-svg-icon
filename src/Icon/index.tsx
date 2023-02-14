import { css } from "glamor";
import React from "react";
import { ReactSVG } from "react-svg";
import { Props } from "./Icon";

const Icon = ({
  src,
  width,
  height,
  strokeWidth,
  color,
  fill,
  className,
}: Props) => {
  const styles = css({
    " svg": {
      fill,
      width,
      height,
      strokeWidth,
      color,
    },
  });

  return <ReactSVG {...styles} src={src} className={className} />;
};

export default Icon;
