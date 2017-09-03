install:
	npm install

start:
	npm run babel-node -- ./src/bin/brain-prime.js

startall:
		npm run babel-node -- ./src/bin/brain-gcd.js
		npm run babel-node -- ./src/bin/brain-even.js
		npm run babel-node -- ./src/bin/brain-calc.js

publish:
	npm publish --unsafe-perm

lint:
	npm run eslint ./src/**
