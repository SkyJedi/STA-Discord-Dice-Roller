cd "`dirname "$0"`"
if [ -d node_modules ]
then node index.js;
else
npm install;
node index.js;
fi
