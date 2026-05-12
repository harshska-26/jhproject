const jwt = require("jsonwebtoken");

const verifyOtpCtrl = (req, res) => {
    try {
        const { inputOtp, receivedOtp } = req.body;
        const actualOtp = req.session.currentOtp;

        // 1. Validate the OTP
        if (!inputOtp || inputOtp != actualOtp) {
            return res.status(400).json({ message: "Invalid or expired security code" });
        }

        // 2. Promotion: Generate a 'full' access JWT
        // In a real app, you'd pull the username from req.user (the previous JWT)
        const fullToken = jwt.sign(
            { username: req.user?.username, auth_level: "full" },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "1h" }
        );

        // 3. Set the final cookie
        res.cookie("token", fullToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict"
        });

        res.status(200).json({ success: true, message: "MFA Verified" });
    } catch (e) {
        console.error("MFA Error:", e.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = {verifyOtpCtrl}