.PHONY: lint
lint:
	black src --diff
	isort src --check-only --diff
	flake8 src

.PHONY: format
format:
	black src
	isort src
