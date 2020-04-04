# coindex-cli

> a cli tool for getting bitcoin info

## Modules that are being used  

- Commander.js 
- Inquirer.js (prompt the user for API)
- configstore (get the values)

## How things work 

- In order to create a cli we need an executable file. 
- Here the file will be placed under **bin**. 
- *read the doc*.
- To run this or add this to the npm repo 
- We need to create a **Symlink**. 
- Installed the dependencies. 
- It's simple the modules that we are using they are doing all the things. 
- We created a folder called commands and all the key commands are in there. 
- On **Key** we are using *inquirer* to get the api key, which uses promise but we are not gonna use it. Instead we are using **async await**. 
- **Show** on key we have a function show() on it we declared **KeyManager** object and we called the **getKey** with key from the **KeyManager**, then returned it. 

## ConfigStore

- Easily load and persist config without having to think about where and how. 
- Basically we use it for having the **config** ability on our application. 
- We have separate file and folder for this ability. 
- Configuration are in the lib folder. 
- *Read Doc for usage*.


