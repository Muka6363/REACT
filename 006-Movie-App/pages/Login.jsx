import React from 'react'
import { useState } from 'react'
import { loginUser,loginWithGoogle,loginOut,loginControl } from './firebasae'

// extra olarak tüm kullanıcı işlemleri https://firebase.google.com/docs/auth/web/manage-users adresinden alınabilir
//türkçe olarak anlatılmış 
//1- gerekli tüm metodları biz fonksiyonlara atadık ve burada kullandık kullanırkende önce import ettik 
/// 2- register sayfasını ayrı yaptık işlemler hep aynı fonksiyon ismi değişiyor

const Login = () => {
//3- create, login işlemleri için bize email ve pass laım onları formdan onchange metoduyla bu 
// statelerin içinde depoluyoruz
    const [email, setEmail] = useState("")   
    const [password, setPassword] = useState("")

    // 4- handleSubmit  ile form submit yapıldığı anı yakalıyoruz ve hangi işlemi yaptıracaksak o fonksiyonu burada çağırıyoruz
    const handleSubmit = (e) => {
        e.preventDefault()
       loginUser(email,password)  // burada email ve pass ile giriş için   loginUser(email,password)  fonksiyonunu çağırmışız
    }

  return (
    <div className="login">
           <form onSubmit={(e)=> handleSubmit(e)} className="login-form">
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Email address
    </label>
    <input
      type="email"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      onChange={(e)=>setEmail(e.target.value)}
      autoFocus
      required
    />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">
      Password
    </label>
    <input
      type="password"
      className="form-control"
      id="exampleInputPassword1"
      onChange={(e)=>setPassword(e.target.value)}
    />
  </div>

  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>
<div className='w-100 d-flex justify-content-center gap-5'>

{/* 5- burada onclick olayına loginWithGoogle fonksiyonunu çağırdık bu fonksiyon popup sayfası açacak  google  hesabıyla direkt giriş yapacak  */}
<button className='btn btn-primary' onClick={()=> loginWithGoogle()}>google ile giriş yap</button> 

{/* 6- burada loginOut ile çıkış yaptırıyoruz  */}
<button className='btn btn-success' onClick={()=> loginOut()}>çıkış yap yap</button>

{/* 7- bu kısımda da loginControl ile aktif kullanıcı var mı onun bilgilerini alıyoruz */}
<button className='btn btn-info' onClick={()=> loginControl()}>oturum kontrol</button>
    </div>
</div>
  )
}

export default Login