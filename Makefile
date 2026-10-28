install:
	npm ci

setup: install build

start:
	npx vite

build:
	npx vite build

serve:
	npx vite preview

.PHONY: install setup start build serve
