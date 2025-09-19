# syntax=docker/dockerfile:1.7-labs
ARG BUN_VERSION=1.2.19
FROM oven/bun:${BUN_VERSION}-slim as base

LABEL fly_launch_runtime="Bun"

WORKDIR /usr/src/app

FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lock /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile

RUN mkdir -p /temp/prod
COPY package.json bun.lock /temp/prod/
RUN cd /temp/prod && bun install --frozen-lockfile --production

FROM base as build
COPY . .
COPY --from=install /temp/dev/node_modules node_modules

# Copy .env file for build-time environment variables
COPY .env .env

ENV NODE_ENV=production

RUN bun run build

FROM base as release
COPY --from=install /temp/prod/node_modules node_modules
COPY --from=build /usr/src/app/.output .output
COPY --from=build /usr/src/app/package.json .

# Copy drizzle config
COPY drizzle.config.ts drizzle.config.ts

# Copy schema files needed by drizzle config
COPY src/lib/db/schema src/lib/db/schema

# Install drizzle-kit for running migrations in production
RUN bun add -D drizzle-kit

USER bun
EXPOSE 3000/tcp
ENTRYPOINT [ "bun", "run", "start" ]