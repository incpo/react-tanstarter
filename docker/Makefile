# Docker Services Management Makefile

.PHONY: help
help: ## Show this help message
	@echo "Docker Services Management"
	@echo ""
	@echo "Usage: make [service]-[command]"
	@echo ""
	@echo "Services:"
	@echo "  tanstack    - TanStack application"
	@echo "  postgres    - PostgreSQL database"
	@echo "  traefik     - Traefik reverse proxy"
	@echo "  opentelemetry - OpenTelemetry collector"
	@echo ""
	@echo "Commands:"
	@echo "  build  - Build the service image"
	@echo "  up     - Start the service"
	@echo "  down   - Stop the service"
	@echo "  logs   - Show service logs"
	@echo "  ps     - Show service status"
	@echo "  restart - Restart the service"
	@echo ""
	@echo "Global commands:"
	@echo "  all-up     - Start all services"
	@echo "  all-down   - Stop all services"
	@echo "  all-build  - Build all services"
	@echo "  all-ps     - Show all services status"
	@echo ""
	@echo "Examples:"
	@echo "  make tanstack-build"
	@echo "  make postgres-up"
	@echo "  make traefik-logs"
	@echo "  make all-up"

# Network management
.PHONY: network-create
network-create: ## Create the external network
	@docker network create overgpt-network 2>/dev/null || echo "Network overgpt-network already exists"

# TanStack commands
.PHONY: tanstack-build
tanstack-build: ## Build TanStack image
	@echo "Building TanStack..."
	@cd tanstack && git pull && docker compose build

.PHONY: tanstack-up
tanstack-up: network-create ## Start TanStack service
	@echo "Starting TanStack..."
	@cd tanstack && docker compose up -d

.PHONY: tanstack-down
tanstack-down: ## Stop TanStack service
	@echo "Stopping TanStack..."
	@cd tanstack && docker compose down

.PHONY: tanstack-logs
tanstack-logs: ## Show TanStack logs
	@cd tanstack && docker compose logs -f

.PHONY: tanstack-ps
tanstack-ps: ## Show TanStack status
	@cd tanstack && docker compose ps

.PHONY: tanstack-restart
tanstack-restart: tanstack-down tanstack-up ## Restart TanStack service

# PostgreSQL commands
.PHONY: postgres-build
postgres-build: ## Build PostgreSQL image
	@echo "Building PostgreSQL..."
	@cd postgres && docker compose build

.PHONY: postgres-up
postgres-up: network-create ## Start PostgreSQL service
	@echo "Starting PostgreSQL..."
	@cd postgres && docker compose up -d

.PHONY: postgres-down
postgres-down: ## Stop PostgreSQL service
	@echo "Stopping PostgreSQL..."
	@cd postgres && docker compose down

.PHONY: postgres-logs
postgres-logs: ## Show PostgreSQL logs
	@cd postgres && docker compose logs -f

.PHONY: postgres-ps
postgres-ps: ## Show PostgreSQL status
	@cd postgres && docker compose ps

.PHONY: postgres-restart
postgres-restart: postgres-down postgres-up ## Restart PostgreSQL service

# Traefik commands
.PHONY: traefik-build
traefik-build: ## Build Traefik image
	@echo "Building Traefik..."
	@cd traefik && docker compose build

.PHONY: traefik-up
traefik-up: network-create ## Start Traefik service
	@echo "Starting Traefik..."
	@cd traefik && docker compose up -d

.PHONY: traefik-down
traefik-down: ## Stop Traefik service
	@echo "Stopping Traefik..."
	@cd traefik && docker compose down

.PHONY: traefik-logs
traefik-logs: ## Show Traefik logs
	@cd traefik && docker compose logs -f

.PHONY: traefik-ps
traefik-ps: ## Show Traefik status
	@cd traefik && docker compose ps

.PHONY: traefik-restart
traefik-restart: traefik-down traefik-up ## Restart Traefik service

# OpenTelemetry commands
.PHONY: opentelemetry-build
opentelemetry-build: ## Build OpenTelemetry image
	@echo "Building OpenTelemetry..."
	@cd opentelemetry-collector && docker compose build

.PHONY: opentelemetry-up
opentelemetry-up: network-create ## Start OpenTelemetry service
	@echo "Starting OpenTelemetry..."
	@cd opentelemetry-collector && docker compose up -d

.PHONY: opentelemetry-down
opentelemetry-down: ## Stop OpenTelemetry service
	@echo "Stopping OpenTelemetry..."
	@cd opentelemetry-collector && docker compose down

.PHONY: opentelemetry-logs
opentelemetry-logs: ## Show OpenTelemetry logs
	@cd opentelemetry-collector && docker compose logs -f

.PHONY: opentelemetry-ps
opentelemetry-ps: ## Show OpenTelemetry status
	@cd opentelemetry-collector && docker compose ps

.PHONY: opentelemetry-restart
opentelemetry-restart: opentelemetry-down opentelemetry-up ## Restart OpenTelemetry service

# All services commands
.PHONY: all-build
all-build: tanstack-build postgres-build traefik-build opentelemetry-build ## Build all services
	@echo "All services built successfully"

.PHONY: all-up
all-up: network-create ## Start all services
	@echo "Starting all services..."
	@cd postgres && docker compose up -d
	@cd traefik && docker compose up -d
	@cd opentelemetry-collector && docker compose up -d
	@cd tanstack && docker compose up -d
	@echo "All services started"

.PHONY: all-down
all-down: ## Stop all services
	@echo "Stopping all services..."
	@cd tanstack && docker compose down
	@cd opentelemetry-collector && docker compose down
	@cd traefik && docker compose down
	@cd postgres && docker compose down
	@echo "All services stopped"

.PHONY: all-ps
all-ps: ## Show all services status
	@echo "=== TanStack ==="
	@cd tanstack && docker compose ps
	@echo ""
	@echo "=== PostgreSQL ==="
	@cd postgres && docker compose ps
	@echo ""
	@echo "=== Traefik ==="
	@cd traefik && docker compose ps
	@echo ""
	@echo "=== OpenTelemetry ==="
	@cd opentelemetry-collector && docker compose ps

.PHONY: all-logs
all-logs: ## Show logs for all services
	@echo "Showing logs for all services (use Ctrl+C to exit)..."
	@docker compose -f tanstack/docker-compose.yml -f postgres/docker-compose.yml -f traefik/docker-compose.yml -f opentelemetry-collector/docker-compose.yml logs -f

# Cleanup commands
.PHONY: clean
clean: all-down ## Stop all services and remove volumes
	@echo "Cleaning up Docker resources..."
	@cd tanstack && docker compose down -v
	@cd postgres && docker compose down -v
	@cd traefik && docker compose down -v
	@cd opentelemetry-collector && docker compose down -v
	@echo "Cleanup complete"

.PHONY: prune
prune: clean ## Clean and remove all unused Docker resources
	@echo "Pruning Docker system..."
	@docker system prune -af --volumes
	@echo "Docker system pruned"