import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/Material.css';


function errorsNotifications(title, text) {
  error({
    title: title,
    text: text,
  });
}

export default errorsNotifications;