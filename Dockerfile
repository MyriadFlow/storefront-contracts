FROM golang:bookworm AS goBuilder
WORKDIR /app
COPY go.mod .
COPY go.sum .
RUN go mod download
COPY main.go .
RUN go build -o smartcontracts .


FROM node:lts-bookworm
WORKDIR /usr/src/app
COPY --from=goBuilder /app/smartcontracts .
COPY package.json yarn.lock ./
COPY . ./
RUN yarn install
RUN yarn compile
EXPOSE 8080
CMD [ "./smartcontracts" ]
