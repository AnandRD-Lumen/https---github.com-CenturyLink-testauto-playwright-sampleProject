import { test, expect} from '@playwright/test';
 
var userid;
    
test("GET Request", async ({request}) => {
    const response = await request.get("https://reqres.in/api/users?page=2")
    console.log(await response.json())
    //expect(response.status(200)).toBe(200)
    expect(response.status()).toBe(200)
})

test("POST Request", async ({request}) => {
    const response = await request.post("https://reqres.in/api/users",
    {
        data:{"name":"Automation Ninja", "job":"Training"},
        headers:{"Accept":"application/json"}

    })
    console.log(await response.json())
    //expect(response.status(201)).toBe(201)
    expect(response.status()).toBe(201)
    var res = await response.json()
    var userid = res.id
    console.log("UserId:",userid)
})

test("PUT Request", async ({request}) => {
    const response = await request.put("https://reqres.in/api/users/"+userid,
    {
        data:{"name":"Automation Ninja", "job":"Innovation"},
        headers:{"Accept":"application/json"}

    })
    console.log(await response.json())
    expect(response.status()).toBe(200)
    var res = await response.json()
})

test("Delete Request", async ({request}) => {
    const response = await request.delete("https://reqres.in/api/users/"+userid)
    //expect(response.status()).toBe(200)
    console.log(await response.status())
    expect(response.status()).toBe(1000)
}) 