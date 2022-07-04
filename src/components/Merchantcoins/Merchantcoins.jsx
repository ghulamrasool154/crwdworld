import React from "react";
import Heading from "../Childrencomponent/Heading/Heading";
import "./Merchantcoins.css";
import jobsarts from '../../assests/images/job-art.png'
import merchantcoins  from '../../assests/images/merchant-coins.png'
import equtytoken from '../../assests/images/equty-token.png'

const Merchantcoins = () => {
  return (
    <section id="Merchantcoins">
      <div className="top">
        <div className="container">
          <div className="row">
            <div className="col">
              <Heading title="Introduction " subtitle="to Merchant Coins" />
              <p>
                Our strategy is a financial component of our Blockchain
                Ecosystem designed to give investors access to a diversified
                basket of new kinds of digital asset classes <br />
                <br />
                We felt that because a proper crypto index fund currently does
                not yet exist in the United States, we believed we should create
                one. Our next generation of cryptographic currency, described as
                digital assets, comprises registered and legal merchant coins.
                <br />
                <br />
                In 2022, our team is s pioneering the first merchant coin backed
                by Silver as an S&P index that operates within an Industry
                Sector, Exchanged Trading Fund (ETF), at the Industry Group
                level, essentially becoming an autonomous 'merchant
                coin-as-an-index. <br /> <br />
                A merchant coin is a more cost-effective way of buying and
                selling security tokens offered by Companies that participate in
                a Direct Public Offering.
                <br />
                <br />
                It allows you to view the Sub Industry within each of the 11
                Industry Sectors without having to open a position on each
                security token. Trading on a merchant coin index can also help
                spread some risks, as you aren't exposed to a single company's
                security tokens. <br />
                <br />
                We buy the underlying silver-backed assets to establish the
                merchant coin. There are no broker fees, no exit fees, no
                minimum investment, and complete control over your assets. Full
                blockchain transparency. <br />
                <br />
                By moving between merchant coins with the best value ratio,
                participants will maximize the relationship between a "value
                floor" determined by the Silver combined with speculative value
                and assets under management.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="merchantcoins-content">
                <div className="mec-img">
                    <img src={jobsarts} alt="JOBS Act" className="img-fluid" />
                </div>
                <div className="mec-disc">
                  <h2>JOBS Act</h2>
                  <p>
                    CrowdPoint aids companies in utilizing Regulation A+
                    offerings to realize their capitalization goals, as well as
                    to create "Merchant Coins," which are registered
                    securities/warrants (more detail below)
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="merchantcoins-content">
                <div className="mec-img">
                    <img src={merchantcoins} alt=">Merchant Coins" className="img-fluid" />
                </div>
                <div className="mec-disc">
                  <h2>Merchant Coins</h2>
                  <p>
                    These are digital securities associated with a special class
                    of shares for the issuing entity. These securities behave as
                    transaction processors exclusive to the issuing entity
                    (i.e., the merchant coins are a proprietary payment rail for
                    a company). Merchant coins are essentially "stablecoins"
                    that are pegged to vogonAg
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="merchantcoins-content">
                <div className="mec-img">
                    <img src={equtytoken} alt="Equity Tokens" className="img-fluid" />
                </div>
                <div className="mec-disc">
                  <h2>Equity Tokens </h2>
                  <p>
                    Each equity token relates to the issuing entity's shares,
                    bonds, or other equity or debt instruments.
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

export default Merchantcoins;
