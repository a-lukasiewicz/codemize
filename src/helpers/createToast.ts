import { createToast, ToastType } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css';

export const createToastFunction = (
  title: string,
  type: ToastType,
  description?: string
) => {
  createToast(
    {
      title: title,
      description: description,
    },
    {
      hideProgressBar: true,
      transition: 'bounce',
      type: type,
      position: 'bottom-center',
      showCloseButton: false,
      showIcon: true,
    }
  );
};
