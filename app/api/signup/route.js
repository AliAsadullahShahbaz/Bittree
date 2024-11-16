import clientPromise from "@/lib/mongodb"
export async function POST(request) {
    const body = await request.json()
    const client = await clientPromise
    const db = client.db('bittree')
    const collection = db.collection('signupuser')
    const result = await collection.insertOne(body)
   
    return Response.json({
        success: true,
        error: false,
        message: `Signup successfully! `
     }, { status: 200 });
    if(!result){
        return Response.json({
            success: false,
            error: true,
            message: "Something is missing in null."
        }, { status: 500 });

    }
  }

export async function GET() {
    return Response.json({ message: 'Hello World' })
  }