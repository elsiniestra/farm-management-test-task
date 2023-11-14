PROJECT_NAME=test-project

# Docker (local)
LOCAL_COMPOSE=docker compose -p ${PROJECT_NAME} -f deployment/docker-compose.local.yml

.PHONY: compose-up-local
compose-up-local:
	${LOCAL_COMPOSE} up -d --build --remove-orphans

.PHONY: compose-down-local
compose-down-local:
	${LOCAL_COMPOSE} down

.PHONY: compose-restart-local
compose-restart-local:
	compose-down-local compose-up-local
