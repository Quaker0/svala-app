.PHONY: dev
dev:
	npm install
	npm run dev

.PHONY: build
build:
	npm install
	npm run build

.PHONE: serve
serve: build
	npx serve@latest out

.PHONY: deploy
deploy:
	@test -d out || (echo "Error: out/ folder not found. Make sure build succeeded and next.config.ts has output: 'export'." && exit 1)
	aws s3 sync out "s3://svala-app" --delete
