FROM node:lts-bookworm
COPY . /slides
WORKDIR /slides
RUN apt update && apt install -y texlive-full pdf2svg fonts-inconsolata
RUN npm install && npm run compile_latex
CMD ["npm", "run", "start"]
