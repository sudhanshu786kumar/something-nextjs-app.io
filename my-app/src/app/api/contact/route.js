import dbcon from "@/app/utils/dbcon";
import Contact from "@/app/models/contact";
import { NextResponse } from "next/server";

export async function POST(req,res){
    try {
        const body=await req.json();
        await dbcon();
        await Contact.create(body);
return NextResponse.json(
    {
msg:"success"
    },{
        status:200
    }

)
    } catch (error) {
        return NextResponse.json(
            {
        msg:"failed"
            },{
                status:500
            }
        
        )
    }
}
// export async function GET(req,res){
//     try {
//         const body=await res.json();
//         await dbcon();
      
// return NextResponse.json(
//     {
// msg:"success"
//     },{
//         status:200
//     }

// )
//     } catch (error) {
//         return NextResponse.json(
//             {
//         msg:"failed"
//             },{
//                 status:500
//             }
        
//         )
//     }
// }