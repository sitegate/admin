FROM node:0.10-onbuild

MAINTAINER Zoltan Kochan, zoltan.kochan@gmail.com

WORKDIR /src

# Install Prerequisites
RUN npm install -g bower
RUN npm install -g gulp

# Install packages
ADD package.json /src/package.json
RUN npm install

# Manually trigger bower. Why doesnt this work via npm install?
ADD .bowerrc /src/.bowerrc
ADD bower.json /src/bower.json
RUN bower install --config.interactive=false --allow-root

# Make everything available for start
ADD . /src

# Port 3040 for server
# Port 35730 for livereload
EXPOSE 3040 35730
CMD ["gulp"]
