# Youtube Microservices Platform

## How to run MongoDB

- `mongod --dbpath ~/data/db-youtube-platform` (installed via Homebrew)

## RabbitMQ

- Run using: `rabbitmq-server` (installed via Homebrew)
- Access the Management UI at: ``
- Use default credentials: username and password are `guest`

## RabbitMQ

### When using @MessagePattern

Messages need to be sent using the following schema:

```
{"pattern":"","data":"cenas","id":"41da72e8-09d0-4720-9404-bd0977b034a0"}
```

## Resources

- React with Rollup: https://blog.bitsrc.io/trying-rollup-for-react-applications-d3c2304d16bf
