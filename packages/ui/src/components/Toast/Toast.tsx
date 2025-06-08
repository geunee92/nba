import React from "react";
import { ToastData } from "./Toast.types";
import { ToastItem } from "./Toast.styles";

export function Toast({ message, type = "info" }: ToastData) {
  return <ToastItem type={type}>{message}</ToastItem>;
}
