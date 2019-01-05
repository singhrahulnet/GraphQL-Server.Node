 
![GitHub release](https://img.shields.io/github/release/singhrahulnet/GraphQL-Server.Node.svg?style=for-the-badge) ![Maintenance](https://img.shields.io/maintenance/yes/2019.svg?style=for-the-badge)

![GitHub Release Date](https://img.shields.io/github/release-date/singhrahulnet/GraphQL-Server.Node.svg?style=plastic)  ![GitHub language count](https://img.shields.io/github/languages/count/singhrahulnet/GraphQL-Server.Node.svg?style=plastic) ![GitHub top language](https://img.shields.io/github/languages/top/singhrahulnet/GraphQL-Server.Node.svg) 


## GraphQL Server
Node.js code to create GraphQL server on top of public REST API - https://jsonplaceholder.typicode.com. It uses 2 endpoints of the REST API (posts and users) and provides GraphQL resolvers over it. 

### Setup detail

##### Environment Setup

>   Download and install Node.Js and Visual Studio Code

>   Clone /download the repository.

>   Open graphql-server folder in Visual Studio Code

### Running the API

>   run following commands one after another


    - npm install
    - node index
    

> Open localhost:4000 in a browser to see the GraphQL-Playground.

> Refer to the following screenshots to fire your **custom** queries and get the results from the server

#### Check the schema by using 'Schema' tab on the right side of the screen. Notice the circular reference of 'Post' in 'User' type.

<img alt="Schema Information" src="https://github.com/singhrahulnet/GraphQL-Server.Node/blob/master/refImg/schema.PNG">


#### Query all the 'Posts' available. Note that you can choose your own fields in the desired order.

<img alt="All posts" src="https://github.com/singhrahulnet/GraphQL-Server.Node/blob/master/refImg/posts.PNG">

#### Query a 'Post' by Id. Note that you can choose your own fields in the desired order.

<img alt="Post by Id" src="https://github.com/singhrahulnet/GraphQL-Server.Node/blob/master/refImg/postById.PNG">

#### Query 'Post->User->Posts'.

<img alt="Post by Id" src="https://github.com/singhrahulnet/GraphQL-Server.Node/blob/master/refImg/circular.PNG">


## Support or Contact

Having any trouble? Please read out this [documentation](https://github.com/singhrahulnet/GraphQL-Server.Node/blob/master/README.md) or [contact](mailto:singh.rahul.net@gmail.com) to sort it out.

 [![HitCount](http://hits.dwyl.io/singhrahulnet/GraphQL-Server.Node/projects/1.svg)](http://hits.dwyl.io/singhrahulnet/GraphQL-Server.Node/projects/1) | ![GitHub contributors](https://img.shields.io/github/contributors/singhrahulnet/GraphQL-Server.Node.svg?style=plastic)|
 | --- | --- |
 
Keep Coding :-) 
