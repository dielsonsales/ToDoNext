# Variables
PM := pnpm

.PHONY: dev build start lint format clean

# Development server
dev:
	$(PM) run dev

# Production build
build:
	$(PM) run build

# Run production server
start:
	$(PM) run start

# Run ESLint check
lint:
	$(PM) run lint

# Format code using Prettier
format:
	npx prettier --write .

# Clean build artifacts
clean:
	rm -rf .next
	rm -rf node_modules
