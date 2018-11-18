# demo-server

## Setting up a node server on lightsail

First, go to your lightsail instance. Navigate to the **Networking** tab. You need to add a rule to the **Firewall** section. Click **Add another** and add a rule with the following:
>
    Application     Protocol    Port range
    Custom          TCP         <SERVER_PORT>

Note that the <SERVER_PORT> should match the port your server uses to run

Next, SSH into your instance (**Connect>Connect using SSH**)

>
    If you have errors throughout this process, you may need to disable bitnami. To do this, simply run "sudo service bitnami stop"

Next you will need to clone your git repository and make sure the server runs as expected.

```bash
git clone <REPO_URL>

cd <REPO_NAME>

npm install

npm start
```

If you've configured your server correctly, you should be able to hit any route at `<INSTANCE_IP>:<SERVER_PORT>/<ROUTE_EXTENSION>`, for instance your url might look like this: **24.144.223.743:3000/ping**

Now we will ensure your app stays running. **pm2** is a service manager which will manage multiple running servers on a single instance.

```bash

sudo npm install pm2@latest -g

pm2 start server.js

```

Now you should be able to hit `<INSTANCE_IP>:<SERVER_PORT>/<ROUTE_EXTENSION>`, even with your SSH instance closed.

You can check running processes via

```bash
pm2 status
```

And can stop your server via

```bash
pm2 stop server.js
```