import React from "react";
import crwdpointimg from "../../assests/images/crwdpoints-img.png";
import "./Introductionrwdpoints.css";
import Heading from "../Childrencomponent/Heading/Heading";
const Introductionrwdpoints = () => {
  return (
    <section id="Introductionrwdpoints">
      <div className="top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-12 col-sm-12  " >
              <div className="crwdpoints-left " >
                <div className="responsive-img-crdwpoins">
                <img src={crwdpointimg} alt="crwdpointimg" className="img-fluid" />
                </div>
                <div className="content">
                  <p>
                    CrowdPoint Bank engages Brokerages to sell Ag instruments
                    that provide capital in exchange for a set amount of future
                    Ag mine production.
                  </p>
                </div>
                <div className="content">
                  <p>
                    Web traffic and outbound calling drive accredited and retail
                    to raise $$
                  </p>
                </div>
                <div className="content">
                  <p>
                    Investors are guaranteed a defined “floor” on their
                    investment depending on what round they participate in
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4  col-md-12 col-sm-12  ">
              <div className="crwdpoints-center">
                <img src={crwdpointimg} alt="crwdpointimg" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-4  col-md-12 col-sm-12  ">
              <div className="crwdpoints-right">
                <div className="content">
                  <p>A common bond instrument and a common product offering.</p>
                </div>
                <div className="content">
                  <p>
                    Acts as a deflationary asset and a hedge against public
                    markets and deposit accounts.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="Introductiontocrwdpoint"> Introduction  <br /> to <span className="cw">crwd <span className="cwb"> points</span></span></h2>
             
              <p>
                Today's use of coupons is flawed. They cost businesses money and
                may lead to lower profits for that sale. Another drawback is
                when existing customers wait for coupons; it cannibalizes
                existing revenue before the coupon program. <br />
                <br />
                Then there is fraud is is difficult to determine if a customer
                got a discount due to a non-qualifying reason or if consumers
                use a duplicate copy of a coupon to obtain discounts multiple
                times than they are entitled to under the current terms. These
                challenges and discrepancies and loopholes lead to huge losses.
                In fact, the coupon marketplace bleeds US$ 500,000,000 to fraud
                every year.
                <br />
                <br />
                Our Vogon Blockchain and distributed cloud technology offer
                decentralized, shared ledgers that are secured cryptographically
                and help to enhance the security and integrity of all
                transactions as well as the privacy of both customers and
                businesses. Our Tokens enable customers to purchase excess
                capacity from vendors at times the vendors need it most and
                reduce cost and the need for intermediaries. Smart Contracts
                produce unique usage coupon tokens that are both non-repudiable
                and non-falsifiable, providing a a perfect use case for the
                revolutionary shifts that smart contracts can deliver.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introductionrwdpoints;
