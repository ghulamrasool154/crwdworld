import React from "react";
import "./Securitization.css";
import Numeringsection from "../Childrencomponent/Numeringsection/Numeringsection";
const Securitization = () => {
  return (
    <section id="Securitization">
      <div className="securitization-top">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="numbering-wapper">
                <div className="numering-box">
                  <Numeringsection
                    number="01"
                    title="vogonAg"
                    disc="Streamer Agreements with Silver Mines are expressed as bonds and then fractionalized into a 1-gram Token of Silver.."
                    boxBG="#6816cd"
                    tBG="#002060"
                  />
                </div>
                <div className="numering-box">
                  <Numeringsection
                    number="02"
                    title="crwdpoints"
                    disc="Merchants and Companies are able to sell excess capacity using a more efficient coupon model "
                    boxBG="#ff209a"
                    tBG="#c11976"
                  />
                </div>
                <div className="numering-box">
                  <Numeringsection
                    number="03"
                    title="Merchant Coin"
                    disc="Streamer Agreements with Silver Mines are expressed as bonds and then fractionalized into a 1-gram Token of Silver.."
                    boxBG="#c200db"
                    tBG="#9703ad"
                  />
                </div>
                <div className="numering-box">
                  <Numeringsection
                    number="04"
                    title="Index Token"
                    disc="Streamer Agreements with Silver Mines are expressed as bonds and then fractionalized into a 1-gram Token of Silver.."
                    boxBG="#00b0f0"
                    tBG="#0678a6"
                  />
                </div>
                <div className="numering-box">
                  <Numeringsection
                    number="05"
                    title="Security Token"
                    disc="Streamer Agreements with Silver Mines are expressed as bonds and then fractionalized into a 1-gram Token of Silver.."
                    boxBG="#1d1856"
                    tBG="#14113e"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="securitization-bottom">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2>Diversification & Securitization:</h2>
              <p>
                The strategy introduced in the document helps consumers,
                investors, and members of companies benefit from how we reduce
                the impact of market volatility. Additionally, given the
                potential size of our markets, it also helps participants reduce
                the time spent monitoring a portfolio. Our strategy further
                helps members of crwdworld seek a unique advantage of how our
                different investment instruments work for them. We believe our
                solution will all participants define their long-term investment
                plans and enjoy the benefits of safe capital with the ability to
                seamlessly shuffle amongst investments and gain peace of mind
                <br />
                <br />
                One of the significant advantages presented by the use of
                merchant coins at the sub-industry level is the ability to
                maximize flexibility to create a type of asset-backed security
                that is secured by a collection of sub-industries within an
                industry, industry group, or industry sector.
                <br />
                <br />
                This is uniquely feasible in the CrowdPoint model because all
                transactions of goods and services record the primary secondary
                sub-industries involved in the purchase of products and services
                in our crwdmarket.
                <br />
                <br />
                This parametric and interconnect model promotes innovative ways
                of securitizing the market like collateralized non-related
                assets. Our GICS implementation with the fidelity of tracking
                provides investors with the maximum flexibility to invest in
                asset classes that demonstrate little or no correlation to one
                another.
                <br />
                <br />
                This use of a collection of non-correlative asset classes into a
                new kind of merchant coin that may act as an index of the top 10
                performing subindustries will help the investor to enhance
                diversification and reduce portfolio volatility. Creating a
                merchant coin that consists of sub-industry asset classes that
                are not correlated and generally do not move in tandem with each
                other will mitigate risk in the portfolio. In cases when the
                market moves down, these additional merchant coin asset classes
                may not fall as much as the market in general, which could
                mitigate risk in an investor's portfolio.
                <br />
                <br />
                This diversification and mixture of non-correlated asset classes
                will reduce overall portfolio volatility and generate more
                consistent returns over the long term.
                <br />
                <br />
                This table illustrates how various asset classes historically
                correlate to one another. A correlation of 1.00 indicates
                perfect correlation, while lower numbers indicate that the asset
                classes are not correlated and generally do not move in tandem
                with each other—or, when the market moves down, these asset
                classes may not fall as much as the market in general, which
                could mitigate risk in your portfolio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Securitization;
