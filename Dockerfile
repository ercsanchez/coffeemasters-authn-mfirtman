# syntax=docker/dockerfile:1

FROM node:18.13-bullseye-slim
ENV NODE_ENV production
RUN apt-get update && apt-get install -y --no-install-recommends dumb-init
WORKDIR '/app/api'

# script is for initializing the empty postgres dev db, using prisma
COPY --link --chown=node:node ./scripts/init_postgres_dev.sh .
# make file executable
RUN chmod u+x ./init_postgres_dev.sh

COPY --link --chown=node:node . .
RUN rm -rf './client'
RUN npm ci --only=production
RUN chown -R node:node node_modules
USER node
EXPOSE 5000

# dumb-init will be set as process 0 as node doesn't behave well if it is process 0
CMD ["dumb-init", "node", "src/api.js"]