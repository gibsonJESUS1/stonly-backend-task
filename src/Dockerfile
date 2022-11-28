FROM node:16
WORKDIR /
COPY package*.json ./
COPY . .
ENV PORT=8080
EXPOSE 8080
CMD ["npm", "start"]