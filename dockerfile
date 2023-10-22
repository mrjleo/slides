FROM node:lts-bookworm
WORKDIR /slides
RUN apt update && apt install -y texlive-full pdf2svg fonts-inconsolata
CMD npm install && npm run start
