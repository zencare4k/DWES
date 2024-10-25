let {name, email, ...rest} = {
    name: "John",
    email: "John@example.com",
    city: "Phoenix",
    state: "AZ",
    country: "USA"
}
console.log(email);
console.log(name);
console.log(rest);
