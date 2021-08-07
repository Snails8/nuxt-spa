FROM node:15.14

RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y git curl && \
    apt-get clean && \
    curl -o- -L https://yarnpkg.com/install.sh | sh

ENV TZ Asia/Tokyo
ENV PATH $HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH

WORKDIR /app

CMD ["/bin/bash"]