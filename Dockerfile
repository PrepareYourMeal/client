FROM node:10 AS builder
WORKDIR /usr/src/app
COPY . .
RUN cp .env.example .env
RUN sed -i 's/react_app_google_client_id_value/'"$REACT_APP_GOOGLE_CLIENT_ID"'/g' .env
RUN sed -i 's/react_app_google_client_secret_value/'"$REACT_APP_GOOGLE_CLIENT_SECRET"'/g' .env
RUN sed -i 's/react_app_api_base_url_value/'"$REACT_APP_API_BASE_URL"'/g' .env
RUN cp .env .env.production
RUN cat .env
RUN echo $REACT_APP_API_BASE_URL
RUN npm install
RUN npm run build

FROM nginx:1.17
COPY --from=builder /usr/src/app/Dockerfile-default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/build/ /usr/share/nginx/html
