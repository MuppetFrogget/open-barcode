# FROM node:lts-alpine

# ENV NODE_ENV=production

# WORKDIR /usr/src/app

# COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
# RUN npm install --production --silent && mv node_modules ../

# COPY ./ ./

# EXPOSE 5173

# RUN chown -R node /usr/src/app
# USER node

# CMD ["npm", "start"]


FROM node:lts-alpine

WORKDIR /app

COPY ["package*", "./"]

RUN npm ci

COPY ./ ./

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

EXPOSE 5173