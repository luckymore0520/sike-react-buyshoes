.PHONY: css
css:
	mkdir -p bundle
	postcss --watch --use autoprefixer --use postcss-import css/app.css --output bundle/app.css

.PHONY: server
server:
	browser-sync start --server --files='index.html,bundle/app.css,js/app.js'

.PHONY: js
js:
	webpack --watch --progress -d js/app.jsx build/app.js --module-bind "js=babel" --module-bind "jsx=babel"

.PHONY: clean
clean:
	rm -r bundle

.PHONY: minjs
minjs:
	webpack --watch --progress -p js/app.jsx bundle/app.js --module-bind "js=babel" --module-bind "jsx=babel"


.PHONY: all
all:
	(make css & make js & make server & wait)
