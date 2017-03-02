FROM microsoft/dotnet:1.1.0-sdk-msbuild

RUN apt-get update
RUN wget -qO- https://deb.nodesource.com/setup_6.x | bash -
RUN apt-get install -y build-essential nodejs

COPY . /app

WORKDIR /app

RUN ["dotnet", "restore"]
RUN ["dotnet", "build"]

EXPOSE 5000/tcp

CMD ["dotnet", "run", "--server.urls", "http://*:5000"]
