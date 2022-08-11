In the attached archive, there is a sample dataset containing information about a selection of craft beers from all around the world.

Your task is to create a backend application through which the data is made available in the following manner:

1. Create a RESTful web service having 2 endpoints:

    1. An endpoint through which the dataset can be queried for information by issuing a GET request.
    
        The expected response should include a subset of the data returned in JSON format.
    
        The complexity of the query mechanism is up to you, but as a bare minimum, the user should be able to filter beers based on name, style and alcohol content.

        For example, the following request:

        `GET /beer?style=Radler&idOnly=true`

        could return the following JSON document in the response body:

        ```json
        [
            {"id": 1830},
            {"id": 2482},
            {"id": 1838}
        ]
        ```

        Your solution should properly handle faulty requests.

    2. An endpoint through which the underlying data model can safely be modified.

        It is up to you which modification you implement (e.g. deleting a record, updating a beer's alcohol content etc.), but we do ask you to respect RESTful design principles. Try to mitigate the exposure of your underlying architecture, and at the bare minimum, your system should be hardened against SQL and code injection attacks.

2. Optionally, in case you managed to solve the core assignment sooner than expected, you can choose and solve/answer any number of tasks/questions from the following list (this by no means is a requirement so feel free to omit this part of the assignment if your time does not allow it):

    1. (optional) Containerize your solution using Docker.
    2. (optional) Design your system in a way that makes it easily modifiable/extendable (i.e. with modularity in mind, Swagger and OpenAPI would be good starting points).
    3. (optional) Implement pagination (i.e. make it an option for the user to limit the amount of data returned)
    4. (optional) If the underlying dataset would be much (10-100 millions of records) larger, do you think your design was suitable to handle it? If so why; and if not, how would you modify your design to make it suitable for the task?

You should solve task #1 first, and tackle the optional ones only if you have the time. It is completely acceptable, and much better, to hand in a clean, working solution for task #1 than to hand in multiple incomplete or botched ones.
