// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

let data =0
let emailbase=[]
let passwordbase = []
let namebase = []

export default function handler(req, res) {
  const {email, password,type} = req.body;
  data++
  if(type === 'login'){
    if(!email && !password) {
      res.status(200).json({
        status: 'error',
        title: "Something Went Wrong",
        message: 'Please provide email and password!',
        tried: data
      });
      return;
    }else if(!email) {
      res.status(200).json({
        status: 'error',
        title: "Something Went Wrong",
        message: 'Please provide email!',
        tried: data
      });
      return;
    }else if(!password) {
      res.status(200).json({
        status: 'error',
        title: "Something Went Wrong",
        message: 'Please provide password!',
        tried: data
      });
      return;
    }
    if(emailbase.includes(email) && passwordbase.includes(password)){
      res.status(200).json({
        status: 'success',
        title: "Hooray!!!",
        message: 'Login successful',
        tried: data
      })
      return;
    }
    return res.status(200).json({
      status: 'error',
      title: "Not Registed Yet",
      message: 'No Data!',
      tried: data
    })

  }
  if(type === 'register'){
    const {name} = req.body;
    namebase.push(name);
    emailbase.push(email);
    passwordbase.push(password);
    return res.status(200).json({

    });
  }
}
