<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  
## Commands

```bash
# npm install @nestjs/graphql graphql-tools graphql apollo-server-express


npm i --save @nestjs/graphql @nestjs/apollo apollo-server-express graphql
```

```bash
npm install @nestjs/typeorm sqlite3
```


```bash
nest g modules modules-name
```

```bash
nest g service modules-name
```

```bash
nest g resolver modules-name
```

### app.module.ts

adicionar esse import no **app.module.ts**

```ts
  GraphQLModule.forRoot<ApolloDriverConfig>({
       driver: ApolloDriver,
       autoSchemaFile: join(process.cwd(), 'schema.gql',)
     }),
//  GraphQLModule.forRoot({
//       autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
//  })

```

```typescript
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetsModule } from './pets/pets.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'schema.gql',)
    }),
    PetsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }


// import { Module } from '@nestjs/common';
// import { GraphQLModule } from '@nestjs/graphql';
// import { join } from 'path';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { PetsModule } from './pets/pets.module';

// @Module({
//   imports: [
//     GraphQLModule.forRoot({
//       autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
//     }),
//     PetsModule],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}
```