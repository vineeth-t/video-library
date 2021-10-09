const Users=[{
    emailId:'tanay',
    password:'god'
  },{
      emailId:'pvr',
      password:'student'
  }]
function findUserByName(userName){
    return Users.find((user)=>user.emailId===userName)
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
export function SignUpApi(fname, lname, emailId, password, confirmPassword){
    return new Promise((resolve,reject)=>{
        const user=findUserByName(emailId)
        if(user){
            Users.concat({fname, lname, emailId, password, confirmPassword})
            resolve({success:true,status:200})
            
        }else{
            reject({success:false,status:401})
        }
    })
}