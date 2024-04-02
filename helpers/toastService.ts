import { toast, Flip, ToastPosition, ToastOptions } from "react-toastify";

const defaultOptions: ToastOptions = {
  position: "top-right" as ToastPosition, // Corrige el tipo aquí
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark", // Asegúrate de que los valores aquí también coincidan con los tipos esperados
  transition: Flip,
};

export const showToast = (message: string, type = "default") => {
  const options = { ...defaultOptions };

  switch (type) {
    case "success":
      toast.success(message, options);
      break;
    case "error":
      toast.error(message, options);
      break;
    case "info":
      toast.info(message, options);
      break;
    case "warning":
      toast.warn(message, options);
      break;
    default:
      toast(message, options);
  }
};
