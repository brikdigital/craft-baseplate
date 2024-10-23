# The basic set of absolutely unopiniated "correct" settings
SHELL := bash
.ONESHELL:
.SHELLFLAGS := -euc -o pipefail
MAKEFLAGS += --warn-undefined-variables
MAKEFLAGS += --no-builtin-rules

.PHONY: build dev composer craft pull up install storybook

test: dev storybook

build: up
	ddev exec pnpm build
clean:
	rm -f composer.lock
	rm -rf vendor/
	rm -f package-lock.json
	rm -rf node_modules/
dev: build
	ddev launch
	ddev exec pnpm serve
storybook:
	ddev exec pnpm storybook dev --disable-telemetry -p 3001
composer: up
	ddev composer \
		$(filter-out $@,$(MAKECMDGOALS))
craft: up
	ddev exec php craft \
		$(filter-out $@,$(MAKECMDGOALS))
pull: up
	ddev exec bash scripts/pull_assets.sh
	ddev exec bash scripts/pull_db.sh
install: up build
	ddev exec php craft setup/app-id \
		$(filter-out $@,$(MAKECMDGOALS))
	ddev exec php craft setup/security-key \
		$(filter-out $@,$(MAKECMDGOALS))
	ddev import-db --src=db-seed/seed_db.sql.gz \
    $(filter-out $@,$(MAKECMDGOALS))
up:
	if [ ! "$$(ddev describe | grep OK)" ]; then \
        ddev auth ssh; \
        ddev start; \
        ddev composer install; \
        ddev exec pnpm install; \
    fi
%:
	@:
