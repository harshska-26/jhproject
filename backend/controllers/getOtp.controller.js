const getOtp = (req, res) => {
    try{
        const Otp = Math.ceil(Math.random() * (10000 - 1000 + 1)) + 1000;
        req.session.currentOtp = Otp;
        res.status(200).json({Otp : Otp}) 
    }catch(e){
        res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports={getOtp}