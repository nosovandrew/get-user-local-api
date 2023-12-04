### Модули

- pkg — компилятор для приложений на базе Node.js;
- express, cors, body-parser — обеспечивают работу api;
- dotenv — поддержка файлов среды;
- nodemon — запуск проекта в режиме разработки;
- node-windows — функционал сервисов ОС Windows.

### Running the App as a Background Service on Windows

To run a Node.js app as a background service on Windows, we can use the node-windows package. Follow these steps:

Open a command prompt and navigate to your Node.js app’s directory.

Install the node-windows package by running the following command:

```npm install node-windows```

Create a new JavaScript file, such as windows-service.js, and open it in a text editor.

In the windows-service.js file, add the following code:

```
const Service = require('node-windows').Service;
const svc = new Service({
    name: 'My Node.js App',
    description: 'My Node.js app as a Windows service.',
    script: 'C:\\path\\to\\your\\app\\index.js'
});
svc.on('install', () => {
    svc.start();
});
svc.install();
```

Make sure to replace C:\\path\\to\\your\\app with the actual path to your Node.js app’s directory.

Save the file and exit the text editor.

Open a command prompt with administrator privileges.

Run the following command to install and start the service:

```node windows-service.js install```

Your Node.js app should now be running as a background service on Windows. You can check its status using the following command:

```node windows-service.js status```