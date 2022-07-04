import React from "react";
import "./Vogon.css";
import token1 from "../../assests/images/utility-icon-1.png";
import token2 from "../../assests/images/utility-icon-2.png";
import token3 from "../../assests/images/utility-icon-3.png";
import Heading from "../../components/Childrencomponent/Heading/Heading";
import Numeringsection from "../Childrencomponent/Numeringsection/Numeringsection";
const Vogon = () => {
  return (
    <section id="vogon">
      <div className="vogon-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-5  col-sm-12">
              <Numeringsection
                boxBG="#6816cd"
                tBG="#002060"
                number="01"
                title="vogon"
                disc=" Streamer Agreements with Silver Mines are expressed as bonds and then  fractionalized into a 1-gram Token of Silver.."
              />
            </div>
            <div className="col-lg-8  col-md-7 col-sm-12">
              <div className="v-right">
                <div className="r-disc">
                  <p>
                    Our approach to driving accretive value is deploying a
                    methodology that combines precision Tokenomics with
                    stochastic representations and AI to remove uncertainty.
                    <br /> <br />
                    We have employed a dynamical systems theory approach for
                    non-linear time series forecasting and investment strategy
                    development. Our use of secondary markets is a proprietary
                    mix of identity, market, wallet, and finance system
                    structures. We engage only in asset-backed commerce,
                    arbitrage, smart contracts, anonymity, and the combination
                    of precision Tokenomics and stochastic coin value.
                    <br /> <br />
                    We use tokenized commodities, governance, utilities,
                    merchant coins, and AI to create a systems approach.
                    Together, this system will deliver an unbiased estimate of
                    the log ratio of the value of our Merchant Coin beyond the
                    initial Bullion price of the silver-backed tokens that
                    support it.
                    <br /> <br />
                    In 1889, Friedrich von Wieser asserted in his book "The
                    Elementary Theory of Value" that the highest principle of
                    all economies is utility. The utility is imperfectly
                    contained in value. The amount of utility contained is
                    intimately associated with the idea of goods. Where value
                    and utility come into conflict, utility must conquer;
                    nothing in the nature of value could give it the ascendency.
                    <br /> <br />
                    Our approach to accretive value starts with an absolute
                    price in silver-backed utility tokens.  
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="vogon-bottom">
        <div className="container">
          <div className="row">
            <div className="">
              <Heading title="Background" subtitle="on Utility Tokens" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="token">
                <div className="t-img">
                  <img src={token1} alt="img" />
                </div>
                <div className="t-disc">
                  <p>
                    A utility token is a digital asset cryptographically
                    generated token that serves some use case within a specific
                    ecosystem. These tokens allow users to perform some action
                    on a particular network. Utility tokens are not mineable
                    cryptocurrencies. They are usually pre-mined, being created
                    all at once and distributed in a manner chosen by the team
                    behind the project. 
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="token">
                <div className="t-img">
                  <img src={token2} alt="img" />
                </div>
                <div className="t-disc">
                  <p>
                    Utility tokens do not represent any ownership stake in the
                    project being invested in. Instead, allow the holder to buy
                    or sell the underlying tokens preferentially. The value of
                    utility tokens usually fluctuates depending on the demand
                    for the project. It may generate profits for the token
                    acquirer if the project reaches its intended purpose with
                    reasonable success. 
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="token">
                <div className="t-img">
                  <img src={token3} alt="img" />
                </div>
                <div className="t-disc">
                  <p>
                    It is helpful to think of utility tokens as coupons or
                    vouchers. The asset a utility token represents is a certain
                    level of access to a product or service which the holder can
                    gain by redeeming it. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vogon;
