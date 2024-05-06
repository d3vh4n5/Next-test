import { NextResponse } from "next/server"

export async function GET(){

    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json()

    return NextResponse.json(data)
}

export async function POST(req){
    const data = await req.json()
    return NextResponse.json(data)
}