# Next App

docker build -t next-app .
docker run -p 3000:3000 next-app
aws ecr create-repository --repository-name next-app --region us-east-1 --profile oyku
aws ecr get-login-password --region us-east-1 --profile oyku | docker login --username AWS --password-stdin 659873596317.dkr.ecr.us-east-1.amazonaws.com
docker push 659873596317.dkr.ecr.us-east-1.amazonaws.com/next-app
