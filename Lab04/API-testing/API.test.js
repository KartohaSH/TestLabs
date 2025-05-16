import axios from "axios";

/*describe('GET booking', () => {
    test('should return status 200', () => {
        axios.get("https://restful-booker.herokuapp.com/booking")
        .then(function(response){
            expect(response.status).toBe(200)
        })
    })
})*/


/*describe('GET cat fact', () => {
    test('should return status 200', () => {
        return axios.get("https://meowfacts.herokuapp.com/?lang=ukr")
        .then(function(response){
            console.log(response.data);
            expect(response.status).toBe(200)
        })
    })
})*/

/*describe('POST product', () => {
    test('should return 200', async () => {
        const response = await axios.post(
            "https://dummyjson.com/products/add",
            {
                title: "Test-product",
                price: 10,
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                proxy: false
            }
        );

        console.log(response.data);
        expect(response.status).toBe(201);
    })
})*/

/*describe('PUT product', () => {
    test('should update product and return 200', async () => {
        const response = await axios.put(
            'https://dummyjson.com/products/1',
            {
                title: "Updated Product Title"
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                proxy: false
            }
        );

        console.log(response.data);
        expect(response.status).toBe(200);
    });
});*/

describe('DELETE post', () => {
    test('should delete post and return 200', async () => {
        const response = await axios.delete(
            'https://jsonplaceholder.typicode.com/posts/1',
            {
                proxy: false
            }
        );

        console.log(response.data);
        expect(response.status).toBe(200);
    });
});