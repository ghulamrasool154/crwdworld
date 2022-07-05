import React from "react";
import blockchainimg from "../../assests/images/blockchain ecosystem.png";
import amazon from "../../assests/images/amazon.png";
import google from "../../assests/images/google.png";
import apple from "../../assests/images/apple.png";
import meta from "../../assests/images/meta.png";
import netflix from "../../assests/images/netflix.png";
import airbnb from "../../assests/images/aribnb.png";
import "./Ecosystem.css";

const Ecosystem = () => {
  return (
    <section id="ecosystem">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 eco-left">
            <div className="leftside">
              <h2>In our Blockchain Ecosystem, everyone extracts value</h2>
              <p>
                <strong>BUSINESS ECOSYSTEM:</strong> The fusion of FinTech and
                emerging Blockchain technologies changing the world.  So much
                so, that traditional banks like JP Morgan Chase are beginning to
                think like the big tech companies, such as Amazon, Google, and
                others. Unfortunately, they are tied to a Business Ecosystem
                model that exploits the same “winner takes all” principles that
                helped them dominate in their fields.
                <br /> <br />
                <strong>BLOCKCHAIN ECOSYSTEM :</strong> At CrowdPoint, we are a
                digital platform provider.  Our digital platform is
                decentralized cloud technology powered by Vogon Blockchain. This
                platform enabled us to build a Blockchain Ecosystem, which we
                call{" "}
                <span className="cw">
                  {" "}
                  crwd <span className="cwb"> world</span>
                </span>
                .  Unlike a Business Ecosystem where the owners extract the most
                value, in crwdworld, the value is shared with its participants.
                <br />
                <br />
                Our FinTech ecosystem is powered by a Decentralized Cloud that
                leverages its own layer 1 Blockchain protocol.
                <br />
                <br />
                This enables crwdworld to create a circular business model that
                manages large networks of consumers and merchants, investors and
                corporations, and savers and fund managers.
                <br />
                <br />
                <span className="cw">
                  crwd<span className="cwb">world</span>
                </span>{" "}
                wins new customers by allowing them to claim their data, engage
                in decentralized advertising and serve them across
                multiple businesses by delivering real-time rebates. This
                decentralized commerce promotes cross-selling new products or
                investments in companies using digital assets on digital
                steroids.  
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 eco-right">
            <div className="rightside">
              <div className="BusinessEcosystem">
                <h2>Business Ecosystem</h2>
                <b>
                  The owners of a business ecosystem extract the most value for
                  themselves
                </b>
               
               <div className="companylogo">
                  <div className="imgbox">
                    <img src={amazon} alt="amzon" />
                  </div>
                  <div className="imgbox">
                    <img src={google} alt="google" />
                  </div>
                  <div className="imgbox">
                    <img src={apple} alt="apple" />
                  </div>
                  <div className="imgbox">
                    <img src={meta} alt="meta" />
                  </div>
                  <div className="imgbox">
                    <img src={netflix} alt="netflix" />
                  </div>
                  <div className="imgbox">
                    <img src={airbnb} alt="airbnb" />
                  </div>
                </div> 
              </div>
              <div className="BlockchainEcosystem">
                <h2>Blockchain Ecosystem</h2>
                <b>
                  In our{" "}
                  <span className="cw">
                    {" "}
                    crwd<span className="cwb">world </span>
                  </span>
                  Blockchain Ecosystem, everyone extracts value
                  <br />
                </b>
                <div className="blockchain">
                  <img
                    src={blockchainimg}
                    alt="blockchainimg"
                    className="img-fluid"
                  />
                </div>
                <ol>
                  <li>
                    <span className="ml">
                      Claim & update your identity on
                      <span className="cw">
                        {" "}
                        crwd <span className="cwb">did</span>
                      </span>
                    </span>
                  </li>
                  <li>
                    <span className="ml">
                      Purchase Products
                      <span className="cw">
                        {" "}
                        crwd <span className="cwb">market</span>
                      </span>{" "}
                    </span>
                  </li>
                  <li>
                    <span className="ml">
                      Get rebates for your data as digital assets and tokens in
                      <span className="cw">
                        {" "}
                        crwd <span className="cwb">capital</span>{" "}
                      </span>
                    </span>
                  </li>
                  <li>
                    <span className="ml">
                      Purchase new products or invest in companies using digital
                      assets on
                      <span className="cw">
                        {" "}
                        crwd <span className="cwb">finance</span>
                      </span>
                    </span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
