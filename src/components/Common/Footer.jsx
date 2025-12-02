import {
  appDownloads,
  disclaimers,
  footerLinks,
  socialLinks,
} from "@/data/footerLinks";

export default function Footer() {
  return (
    <footer className="bg-white text-[#2a394e] text-sm">
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="flex flex-wrap gap-7.5 pt-10">
          {footerLinks.map((section, idx) => (
            <div
              key={idx}
              className="w-[45%] md:w-0 md:min-w-[180px] font-medium"
            >
              <p className="font-semibold mb-4">{section.title}</p>
              <ul className="space-y-2 text-[#747e8b]">
                {section.links.map((link, liIdx) => (
                  <li key={liIdx}>
                    <a
                      href={link.href}
                      target={link.target || "_self"}
                      rel={link.target ? "noopener" : undefined}
                      className="hover:text-[#436af5] flex items-center gap-1  mb-3 self-center"
                    >
                      {link.label}
                      {link.icon && (
                        <img
                          src={link.icon}
                          alt={`${link.label}-image`}
                          className="inline-block max-h-4"
                        />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="md:flex justify-between pt-[4.125rem] py-8 border-b border-gray-200">
          <div>
            <div className="w-full md:w-3/3">
              <p className="font-semibold mb-5.5">Download Our App</p>
              {appDownloads.map((app, i) =>
                app.href ? (
                  <a href={app.href} key={i}>
                    <img src={app.src} alt={app.alt} className="mb-2.5" />
                  </a>
                ) : (
                  <p key={i}>
                    <img src={app.src} alt={app.alt} className="mb-2.5" />
                  </p>
                )
              )}
              <div className="flex gap-2 mt-9.5 mb-12">
                {socialLinks.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener"
                    className="pr-1"
                  >
                    <img src={s.icon} alt={s.alt} />
                  </a>
                ))}
              </div>
            </div>
            <div className="w-full">
              <div>
                <img src="https://assets.fyers.in/images/logo.svg" alt="Fyers" className="w-50 h-auto" />
              </div>
              <div className="mt-4.5 text-[#6a7582]">
                <p className="">
                  FYERS Securities Private Limited
                  <br />
                  901 and 902, 9th Floor,
                  <br />
                  A Wing, Brigade Magnum,
                  <br />
                  Amruthahalli, Kodigehalli Gate,
                  <br />
                  Hebbal, Bangalore - 560092
                </p>
                <p className="mt-8">
                  SEBI Registration No: INZ000008524
                  <br />
                  DP Registration No : IN-DP-432-2019
                  <br />
                  NSE Member Code: 90061
                  <br />
                  MCX Member Code: 56100
                  <br />
                  BSE Member Code: 6697
                  <br />
                  CDSL Member Code: 12089400 <br />
                  NSDL Member Code: IN304502
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4 text-[#6a7582] w-full md:w-2/3">
            <p>
              Investment in securities markets are subject to market risks, read
              all the related documents carefully before investing as prescribed
              by SEBI. Issued in the interest of the investors.
            </p>
            <p>
              The clients can write to
              <a href="mailto:sales-complaints@fyers.in">
                sales-complaints@fyers.in
              </a>
              for any account opening related queries. Also you can send IT /
              Tech related feedback to
              <a href="mailto:tech-feedback@fyers.in">tech-feedback@fyers.in</a>
            </p>

            <p>
              For any complaints / Investor grievances email to
              <a href="mailto:grievance@fyers.in">grievance@fyers.in</a>
              Also refer our investor grievance matrix from our contact us page.
              A client can also opt to write to
              <a
                href="https://www.nseindia.com/"
                rel="noopener"
                target="_blank"
              >
                NSE
              </a>
              or
              <a
                href="https://www.mcxindia.com/"
                rel="noopener"
                target="_blank"
              >
                MCX
              </a>
              or
              <a
                href="https://www.bseindia.com/"
                rel="noopener"
                target="_blank"
              >
                BSE
              </a>
              or
              <a
                href="https://www.cdslindia.com/"
                rel="noopener"
                target="_blank"
              >
                CDSL
              </a>
              to resolve in form of grievance.
            </p>

            <p>
              For revocation of E-DIS mandate and related queries, kindly reach
              out to us at
              <a href="mailto:revoke@fyers.in">revoke@fyers.in</a>.
            </p>

            <p>
              Disclaimer: Ensure that no unauthorized transactions occur in your
              account. Kindly update your mobile number /email IDs with your
              stock brokers to receive information of your transactions directly
              from Exchange on your mobile/email at the end of the day.
            </p>

            <p>
              Stock Brokers can accept securities as margin from clients only by
              way of pledge in the depository system w.e.f. September 1, 2020.
            </p>

            <p>
              Update your email id and mobile number with your stock broker /
              depository participant and receive OTP directly from depository on
              your email id and/or mobile number to create pledge.
            </p>

            <p>
              Check your securities / MF / bonds in the consolidated account
              statement issued by NSDL/CDSL every month.
            </p>

            <p>
              Procedure to file a complaint on SEBI SCORES: Register on
              <a
                href="https://scores.sebi.gov.in/"
                rel="noopener"
                target="_blank"
              >
                SCORES
              </a>
              portal. Mandatory details for filing complaints on SCORES: Name,
              PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
              Communication, Speedy redressal of the grievances
            </p>

            <p>
              KYC is one time exercise while dealing in securities markets -
              once KYC is done through a SEBI registered intermediary (broker,
              DP, Mutual Fund etc.), you need not undergo the same process again
              when you approach another intermediary. Dear Investor, if you are
              subscribing to an IPO, there is no need to issue a cheque. Please
              write the Bank account number and sign the IPO application form to
              authorize your bank to make payment in case of allotment. In case
              of non allotment the funds will remain in your bank account. As a
              business we don't give stock tips, and have not authorized anyone
              to trade on behalf of others.*Investments in the securities market
              are subject to market risks; read all the related documents
              carefully before investing.
            </p>
          </div>
        </div>

        <p className="text-sm py-6 text-gray-500">
          © FYERS Securities Pvt. Ltd. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
