export type ToastType = "success" | "error" | "info";

export interface ToastData {
  id: string;
  message: string;
  type?: ToastType;
}

export interface ToastContextType {
  toasts: ToastData[];
  addToast: (message: string, type?: ToastType) => void;
  removeToast: (id: string) => void;
}
