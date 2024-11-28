import { connectDb } from "../../../lib/dbConnect";
import { UserModal } from "../../../lib/modals/UserModal";

export async function POST(request) {
  await connectDb();
//   console.log(">>>>> request : ", request);

  const obj = await request.json();
  console.log("obj >>>>", obj);

  const user = await UserModal.findOne({email : obj.email});
  
    if(user) {
        return Response.status(400).json("user already exists");
      }
    console.log('user ', user);

  return Response.json("user post request");
}
export async function GET() {
  return Response.json("user get request");
}
