import Test from "@/components/Test";

async function fetchData(){
  // const response = await fetch('https://jsonplaceholder.typicode.com/users')
  
  // midu: https://www.youtube.com/watch?v=tA-_vAz9y78&t=4139s
  // const response = await fetch('https://next-test-gules-chi.vercel.app/api/test', { cache: 'no-store' }) // Ahora se genera cuando se llama a la web
  const response = await fetch('https://next-test-gules-chi.vercel.app/api/test', { 
    next: {
      revalidate: 60
    }
   }) // Ahora se genera cuando se llama a la web
  return response.json()
}

// https://www.youtube.com/watch?v=4MTY884xR0I&t=937s

export default async function Home() {

  const users = await fetchData()


  return (
    <main className="">
      <h1>Hola <b>{users[1].name}</b></h1>
      <Test />
    </main>
  );
}
