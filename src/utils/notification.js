import { Notification } from "element-ui";

export const showNotification = (title, message, type) => {
  Notification({
    title: title,
    message: message,
    offset: 60,
    duration: 3000,
    type: type,
  });
};
