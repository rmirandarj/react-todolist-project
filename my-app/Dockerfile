FROM node:8.11.2

RUN useradd --user-group --create-home --shell /bin/false app &&\
    npm install --global npm@5.6.0

ENV HOME=/home/app

COPY package.json npm-shrinkwrap.json $HOME/react-project/my-app/

RUN chown -R app:app $HOME/*

USER app

WORKDIR $HOME/react-project/my-app

RUN npm cache verify --force && npm install --silent --progress=false

USER root

COPY . $HOME/react-project/my-app

RUN chown -R app:app $HOME/*

USER app


CMD ["npm", "start"]