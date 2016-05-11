# Experiments with Promise and RequireJS callback

**Problem**
For multiple Language Websites sometimes there is one JS file and could be special external files which are added per need.
Therefore sometimes there is no way to know path for those files in advance.

After [download](https://github.com/Shwartz/promise/archive/master.zip), CD to the same DIR where is Gruntfile.js
Do ```npm install```

Once npm install all necessary modules use following grunt commands


To build a DEV environment 
`grunt dev --target=dev`
this will listen to `src/` directory for changes and build/update DEV folder.
After it will use watcher and automatically re-build necessary files to DEV folder

To build a DIST environment 
`grunt dist --target=dist`
this will listen to `src/` directory for changes and build/update DIST folder.
Grunt RequireJS will build minified version of JavaScript

This will build dev/ directory. 
Open browser `dev/index.html`
