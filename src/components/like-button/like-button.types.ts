import { HTMLAttributes } from "react";

export interface LikeButtonProps extends HTMLAttributes<HTMLButtonElement> {
  rounded?: boolean,
  id: string
}