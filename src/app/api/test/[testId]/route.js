import { NextResponse } from "next/server"

export async function GET(req, context){

    console.log(context)
    return NextResponse.json(context)
}