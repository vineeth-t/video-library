const Users=[{
    name:'tanay',
    password:'god'
  },{
      name:'pvr',
      password:'student'
  }]
function findUserByName(userName){
    return Users.find((user)=>user.name===userName)
}
export function AuthApi(userName,password){
    return new Promise((resolve,reject)=>{
        const user=findUserByName(userName)
        if(user?.password===password){
            resolve({success:true,status:200})
        }else{
            reject({success:false,status:401})
        }
    })
}