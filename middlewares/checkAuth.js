export const checkAuth = (request, response, next)=>{
    const isAuth = true;
    if (isAuth) {
        console.log("Xin chao admin");
        next();
    }else {
        console.log("Ban khong duoc quen truy cap");
    }
}