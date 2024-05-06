import Test from "@/components/Test";

async function fetchData(){
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  return response.json()
}

// https://www.youtube.com/watch?v=4MTY884xR0I&t=937s

export default async function Home() {

  const users = await fetchData()


  return (
    <main className="">
      <h1>Hola <b>{users[0].name}</b></h1>
      <Test />
    </main>
  );
}
