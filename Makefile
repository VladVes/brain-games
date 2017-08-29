install:
	npm install

start:
	npm run babel-node -- ./src/bin/brain-games.js

publish:
	npm publish --unsafe-perm

lint:
	npm run eslint
