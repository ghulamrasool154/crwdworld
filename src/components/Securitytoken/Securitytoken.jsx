import React from "react";
import "./Securitytoken.css";
import Numeringsection from "../Childrencomponent/Numeringsection/Numeringsection";
const Securitytoken = () => {
  return (
    <section id="Securitytoken">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-5  col-sm-12">
            <Numeringsection
              number="05"
              title="Security Token"
              disc="An Equity Token is issued by a company conducting a DPO.  These are digital assets that act like a special class of stock that acts like a negotiable bond. They are tradeable on secondary markets"
              boxBG="#1d1856"
              tBG="#14113e"
            />
          </div>
          <div className="col-lg-8  col-md-7 col-sm-12">
            <div className="Securitytoken-right">
              <div className="r-disc">
                <div className="securitybox">
                  <p>The corporation does not give up ownership of the firm.</p>
                </div>
                <div className="securitybox">
                  <p>It increases its flexibility.</p>
                </div>
                <div className="securitybox">
                  <p>It attracts more investors.</p>
                </div>
                <div className="securitybox">
                  <p>
                    It can deduct the interest payments from corporate taxes.
                  </p>
                </div>
                <p>
                  As an investment asset, an equity token is a digital asset
                  that represents certain rights and transfers value from an
                  asset or bundle of assets to a token. In plain language,
                  security tokens are the digital form of traditional
                  investments like stocks, bonds, or other securitized assets. 
                  <br />
                  <br />
                  For investors, security tokens provide a predictable income
                  stream. These security tokens not only pay interest. When held
                  to maturity, investors get back the entire principal, so
                  security tokens are a way to preserve capital while investing.
                  Investors must purchase security tokens with Silver
                  utility-backed merchant coins to buy them..
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col security">
            <p>
              Equity Tokens operate like bonds that are issued by private
              corporations during the direct public offering which are payable
              to order or bearer. Equity Tokens are payable to order or bearer,
              whether the interest coupons are attached or detached.
              <br />
              <br />
              Investors prefer equity tokens as given that they behave like
              bonds they provide a predictable income stream. Typically, equity
              tokens pay interest twice a year. If the equity tokens are held to
              maturity, holders get back the entire principal, so bonds are a
              way to preserve capital while investing.
              <br />
              <br />
              Equity tokens behave like a bond, debt security, or in other words
              fixed-income security issued by the company. The equity token is
              owned by the holder or bearer. Holders of the equity token
              receives a fixed interest payment that is paid to the holders.
              <br />
              <br />
              The coupon for interest payment is physically attached to the
              equity token filing, which the bearer will have to present
              digitally to the exchange for payment purposes. Also, the bearer
              will have to present the digital certificate as well to recover
              the maturity value at the time of maturity date.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Securitytoken;
