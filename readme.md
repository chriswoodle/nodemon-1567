See https://github.com/remy/nodemon/issues/1720

# Setup
Run from windows `cmd` or `git bash`


```
npm install
npm start
```
Now edit and save index.js.

![windows](https://github.com/chriswoodle/nodemon-1567/raw/master/windows.png)

> Notice that the close callback for `express` in not called.

Running the same commands from WSL, Linux or Mac behave as expected.

![wsl](https://github.com/chriswoodle/nodemon-1567/raw/master/wsl.png)

> App also shutdown correctly with `CTRL + C`.

Tested on:

```
     Edition: Windows 10 Pro 
     Version: 1909
Installed on: 5/22/2019
    OS Build: 18363.836 
```