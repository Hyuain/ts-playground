const a = { name: "harvey", age: 20 }

for (const [key, value] of Object.entries(a)) {
  console.log(key, value)
}
