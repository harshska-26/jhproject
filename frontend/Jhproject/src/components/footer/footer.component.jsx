import { CiPhone } from "react-icons/ci"
import "./footer.component.css"

export const Footer = () => {
    return (
        <>
            <div className="footer-first-line">
                <button id="contact-button"><CiPhone />Contact Us</button>
                <div className="footer-first-line-rightside">
                    <button>Legal</button>
                    <button>Privacy and Security</button>
                    <button>Accessibility</button>
                    <button>Account Security</button>
                    <button>Corporate Website</button>
                </div>
            </div>
            <div className="footer-second-line">

                <div className="footer-second-line-leftside">
                    <img src="/src/assets/footer logo.png" alt="footlogo" />
                </div>

                <div className="footer-second-line-rightside">
                    <p>John Hancock and the plan are not affiliated and neither is responsible for the liabilities of the other.<br /></p>
                    <p>The content of this website is for general information only and is believed to be accurate and reliable as of posting date but may be subject to change. John Hancock does not provide investment, tax, or legal advice. Please consult your own independent advisor as to any investment, tax, or legal statements made herein.<br /></p>
                    <p>All plan information is confidential and you agree to safeguard and protect such information in accordance with the standards required by law and use such information only for authorized plan administration purposes.<br /></p>
                    <p>John Hancock Retirement Plan Services LLC provides administrative and/or recordkeeping services to sponsors or administrators of retirement plans through an open-architecture platform. John Hancock Trust Company LLC, a New Hampshire non-depository trust company, provides trust and custodial services to such plans, offers an Individual Retirement Accounts product, and maintains specific Collective Investment Trusts. Group annuity contracts and recordkeeping agreements are issued by John Hancock Life Insurance Company (U.S.A.), Boston, MA (not licensed in NY), and John Hancock Life Insurance Company of New York, Valhalla, NY. Product features and availability may differ by state. All entities do business under certain instances using the John Hancock brand name. Each entity makes available a platform of investment alternatives to sponsors or administrators of retirement plans without regard to the individualized needs of any plan. Unless otherwise specifically stated in writing, each entity does not, and is not undertaking to, provide impartial investment advice or give advice in a fiduciary capacity. Securities are offered through John Hancock Distributors LLC, member FINRA, SIPC.<br /></p>
                    <p>NOT FDIC INSURED. MAY LOSE VALUE. NOT BANK GUARANTEED<br /></p>
                    <p>© 2026 All rights reserved.<br /></p>
                    <p>MGTS-P40162-GE<br /></p>
                </div>
            </div>
        </>
    )
}