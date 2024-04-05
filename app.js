if ('Notification' in window) {
  Notification.requestPermission().then(function (permission) {
      if (permission === 'granted') {
          console.log('Notification permission granted.');
      } else {
          console.warn('Notification permission denied.');
      }
  });
}
