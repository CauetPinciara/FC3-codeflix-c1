FROM node:20-bookworm-slim

USER node

WORKDIR /home/node/app

CMD ["tail", "-f", "/dev/null"]