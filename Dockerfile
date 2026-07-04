# ---- Build stage ----
FROM node:22-alpine AS builder
WORKDIR /app

# Install all deps (including devDeps needed for the build)
COPY package.json ./
RUN npm install

# Copy source and build
COPY . .
RUN npm run build

# ---- Runtime stage ----
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Only install production dependencies
COPY package.json ./
RUN npm install --omit=dev

# Copy the built app from the builder stage
COPY --from=builder /app/dist ./dist

EXPOSE 3000
CMD ["node", "dist/server.cjs"]
