# Experiments with Promise and RequireJS callback

**Problem**
For multiple Language Websites sometimes there is one JS file and could be special external files which are added per need.
Therefore sometimes there is no way to know path for those files in advance.

After [download](https://github.com/Shwartz/promise/archive/master.zip), CD to the same DIR where is Gruntfile.js
Do 
```
npm install
```
After install is completed, you will have to environments, DEV and DIST.

To build a DEV environment 
```
grunt dev --target=dev
```
This command will listen to `src/` directory for changes and build/update DEV folder.
After it will use **watcher** and automatically re-build necessary files to DEV folder

To build a DIST environment 
```
grunt dist --target=dist
```

This command will listen to `src/` directory for changes and re-build DIST folder.
Grunt RequireJS will build minified version of JavaScript

After you build DEV or DIST, point browser to those directories and see result 