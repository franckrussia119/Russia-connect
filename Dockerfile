# ---- Build stage ----
FROM node:22-alpine AS builder
WORKDIR /app

# Install exact locked dependencies (deterministic)
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

# Copy source and build the client + server bundle
COPY . .
RUN npm run build

# ---- Runtime stage ----
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Only production dependencies for a small runtime image
COPY package.json package-lock.json ./
RUN npm ci --omit=dev --no-audit --no-fund

# Copy the built assets from the builder
COPY --from=builder /app/dist ./dist

EXPOSE 3000
CMD ["node", "dist/server.cjs"]
