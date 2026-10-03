import { useEffect } from 'react'

function ScrollNav() {
  const scrollToId = (e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    history.replaceState(null, '', `#${id}`)
  }

  return (
    <div className="privacy-screen__nav">
      <a href="#privacy-policy" onClick={(e) => scrollToId(e, 'privacy-policy')}>
        Privacy Policy
      </a>
      <a href="#eula" onClick={(e) => scrollToId(e, 'eula')}>
        EULA
      </a>
      <a href="#contact" onClick={(e) => scrollToId(e, 'contact')}>
        Contact Us
      </a>
    </div>
  )
}

export default function PuppySortPrivacyPage() {
  useEffect(() => {
    document.title = 'Puppy Sort — Privacy Policy & EULA'

    // If we landed on a direct #eula / #privacy-policy / #contact link,
    // jump straight to that section once mounted.
    const hash = window.location.hash.replace('#', '')
    if (hash) {
      requestAnimationFrame(() => {
        const el = document.getElementById(hash)
        if (el) el.scrollIntoView({ block: 'start' })
      })
    }
  }, [])

  return (
    <div className="privacy-page">
      <div className="privacy-screen__panel">
        <a className="privacy-screen__back" href={import.meta.env.BASE_URL}>
          &larr; App Ventures
        </a>

        <div className="privacy-screen__header">
          <h1>Puppy Sort</h1>
          <p>Privacy Policy &amp; End User License Agreement (EULA)</p>
          <p className="privacy-screen__updated">Last updated: October 3, 2026</p>
        </div>

        <ScrollNav />

        <div className="privacy-screen__content">
          <div className="ps-intro-box">
            <p><strong>Important:</strong> This page contains the Privacy Policy and End User License Agreement (EULA) for Puppy Sort. By downloading, installing, or using the App, you agree to both documents.</p>
          </div>

          {/* PRIVACY POLICY SECTION */}
          <h2 id="privacy-policy">Privacy Policy</h2>

          <h3>Scope</h3>
          <p>Welcome to Puppy Sort&rsquo;s Privacy Policy. Your privacy is important to us. This Privacy Policy explains how Puppy Sort (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), developed by App Ventures, collects, uses, protects, and shares information when you use our puzzle game and related services (the &ldquo;App&rdquo; or &ldquo;Services&rdquo;) available on Google Play and other app stores where we may publish it.</p>
          <p>If you do not agree with this Privacy Policy, please do not use our Services.</p>

          <h3>Overview</h3>
          <p>Puppy Sort is a casual sorting puzzle game in which you sort puppies into matching boxes, earn coins and stars, unlock new breeds, decorate your puppy park, and collect daily rewards.</p>
          <ul>
            <li>Puppy Sort does not have accounts. You never register, sign in, or provide a name, email address, password, or phone number to play.</li>
            <li>Your game progress — levels, stars, coins, boosters, unlocked breeds, park items, daily rewards, and settings — is stored only on your device. We do not operate a server that receives or stores your game data.</li>
            <li>Puppy Sort is free to play and supported by advertising. Our advertising partners may collect device and advertising data as described in Sections 2.2 and 4.1. We never sell your personal information.</li>
          </ul>

          <h3>1. No Accounts or Registration</h3>
          <p>Puppy Sort does not require — or offer — registration, sign-in, or a user profile. There are no usernames, friends lists, chat, or other social features, and the App has no feature that lets you communicate with or share content with other players. Because no account exists, we cannot identify you from your gameplay, and we cannot recover your progress if it is lost from your device.</p>

          <h3>2. Information We Collect</h3>

          <h4>2.1 Game Data Stored on Your Device</h4>
          <ul>
            <li>Game progress — completed levels, star ratings, current level, coins, booster inventory, unlocked puppy breeds, park decorations, daily-reward streak, and rewarded-ad counters (for example, how many coin rewards you have claimed today)</li>
            <li>App preferences, such as music, sound effects, and vibration (haptics) settings, and whether you have seen the How to Play guide</li>
            <li>A short, on-device log of recent gameplay events (such as level start, win, or fail, and boosters used) kept in memory to help diagnose bugs. This log is not transmitted to us or anyone else and is cleared when the App closes.</li>
          </ul>
          <p>All of the above stays on your device. We do not collect it, and we cannot see it.</p>

          <h4>2.2 Device &amp; Advertising Data (Collected by Our Ad Partners)</h4>
          <ul>
            <li>Device information, such as device model, manufacturer, operating system and version, screen size, language, network type, and app version, collected by our advertising partners for ad delivery, measurement, and fraud prevention</li>
            <li>Advertising identifier — the Google Advertising ID (GAID) on Android, or the IDFA on iOS (only if you allow tracking via Apple&rsquo;s App Tracking Transparency prompt) — used by our ad partners to serve and measure ads</li>
            <li>Approximate location inferred from your IP address by our advertising partners, for ad targeting and measurement. Puppy Sort does not request or collect GPS or precise location data and has no location permission.</li>
            <li>Ad interaction data, such as which ads were shown, clicked, or completed (for example, whether you finished watching a rewarded ad)</li>
          </ul>

          <h4>2.3 Support Communications</h4>
          <p>If you email us, we receive your email address and whatever information you choose to include in your message. We use it only to respond to you.</p>

          <h4>2.4 Information We Do Not Collect</h4>
          <p>Puppy Sort does not collect your name, email (unless you contact us), phone number, contacts, photos, files, camera, microphone audio, precise location, or health data. The App does not use cloud save, social login, or third-party analytics services.</p>

          <h3>3. How We Use Your Information</h3>
          <p>We use the information described above to:</p>
          <ul>
            <li>Provide the game&rsquo;s core functionality — loading levels, saving your progress, and applying your settings on your device</li>
            <li>Grant in-game rewards (coins, boosters, or the starter pack) when you choose to watch a rewarded ad</li>
            <li>Serve advertisements that keep the App free (see Section 8)</li>
            <li>Respond to support requests</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h3>4. How We Share Your Information</h3>

          <h4>4.1 Advertising &amp; Mediation Partners</h4>
          <p>Puppy Sort shows ads through TopOn (Anythink), an ad mediation platform that routes ad requests to its own ad exchange and to connected ad networks, currently including Yandex Ads. TopOn also uses an ad-quality and anti-fraud component as part of its SDK. These partners may independently collect the device identifiers, advertising IDs, approximate IP-based location, and ad interaction data described in Section 2.2, under their own privacy policies:</p>
          <ul>
            <li>TopOn: <a href="https://www.toponad.com/en/privacy-policy" target="_blank" rel="noopener noreferrer">https://www.toponad.com/en/privacy-policy</a></li>
            <li>Yandex Ads: <a href="https://yandex.com/legal/confidential/" target="_blank" rel="noopener noreferrer">https://yandex.com/legal/confidential/</a></li>
          </ul>
          <p>The networks connected through TopOn may change over time as we adjust our ad setup.</p>

          <h4>4.2 Legal Requirements</h4>
          <p>We may disclose information if required by law, regulation, legal process, or governmental request, or when we believe disclosure is necessary to protect the rights, property, or safety of Puppy Sort, App Ventures, our users, or others.</p>

          <h4>4.3 Business Transfers</h4>
          <p>If App Ventures is involved in a merger, acquisition, reorganization, or sale of assets, information may be transferred as part of that transaction. We will notify you of any material change in ownership or use of your personal information.</p>

          <h4>4.4 Non-Personal Data</h4>
          <p>We may share aggregated or anonymized data that cannot reasonably be used to identify you — such as ad performance reports provided to us by our ad partners — for analytics, research, and business purposes.</p>

          <p><strong>We do not sell your personal information.</strong></p>

          <h3>5. Permissions</h3>
          <p>Puppy Sort uses the following device capabilities:</p>
          <ul>
            <li><strong>Internet &amp; network state:</strong> To load and display ads. The game itself can be played offline.</li>
            <li><strong>Vibration:</strong> For optional haptic feedback during gameplay. You can turn this off in Settings.</li>
            <li><strong>Advertising ID (Android):</strong> To allow our ad partners to serve and measure ads. You can reset or delete it in your device settings (see Section 8).</li>
            <li><strong>Tracking (App Tracking Transparency, iOS only):</strong> To enable personalized advertising. You may decline this prompt and continue using every feature of the App.</li>
          </ul>
          <p>Some permissions may be listed in the App&rsquo;s package because they are declared by the audio and app frameworks we build on (for example, audio playback services). Puppy Sort never asks you to grant microphone access, and never records, stores, or transmits audio. The App does not request location, contacts, camera, or photo-library access, and does not send push notifications.</p>

          <h3>6. Data Security</h3>
          <p>Your game progress and settings (Section 2.1) are stored locally on your device, so their security largely depends on your device&rsquo;s own protections, such as a screen lock. Where our advertising partners process data such as advertising identifiers, they rely on industry-standard security practices. No system is completely secure, and we cannot guarantee absolute security of information transmitted or stored through the Services.</p>

          <h3>7. Cookies &amp; Tracking Technologies</h3>
          <p>Puppy Sort is a mobile app, not a website, and does not itself use browser cookies. Our advertising and mediation partners (Section 4.1) may use device identifiers and SDK-based tracking technologies within the App to serve and measure ads, governed by their own privacy policies.</p>

          <h3>8. Advertising</h3>
          <p>Puppy Sort displays advertisements — including banner, interstitial, app-open, and rewarded ad formats — through the TopOn mediation platform and its connected ad networks. These ads may be personalized based on your device information and advertising identifier.</p>
          <p>Rewarded ads are always optional. You can choose to watch one to earn coins, boosters, or the starter pack; declining or skipping a rewarded ad never affects your existing progress.</p>
          <p>You can control ad personalization through your device settings:</p>
          <ul>
            <li><strong>Android:</strong> Settings &gt; Google &gt; Ads (or Settings &gt; Privacy &gt; Ads), where you can reset or delete your advertising ID or opt out of ads personalization</li>
            <li><strong>iOS:</strong> Settings &gt; Privacy &amp; Security &gt; Tracking, or respond &ldquo;Ask App Not to Track&rdquo; when prompted</li>
          </ul>

          <h3>9. In-Game Currency &amp; Purchases</h3>
          <p>Puppy Sort contains virtual coins and boosters that you earn through gameplay, daily rewards, and optional rewarded ads. Virtual items have no real-world monetary value, cannot be exchanged for money, and are stored only on your device.</p>
          <div className="ps-note-box">
            <p><strong>Note on purchases:</strong> The Android version of Puppy Sort does not offer real-money in-app purchases. If we introduce optional in-app purchases (for example, on iOS or in a future update), payment will be processed entirely by the relevant app store (Apple App Store or Google Play), possibly with entitlement management by a purchase-management partner. We will not collect or store your full payment card details, and we will update this policy before such purchases become available.</p>
          </div>

          <h3>10. Third-Party Services</h3>
          <p>Puppy Sort integrates with the following categories of third-party services:</p>
          <ul>
            <li>Ad mediation and networks (TopOn / Anythink, and its connected networks, including Yandex Ads)</li>
            <li>App distribution and platform services operated by Google (Google Play) and Apple (App Store)</li>
          </ul>
          <p>These services operate under their own privacy policies. We recommend reviewing the privacy policies of our partners where relevant to you.</p>

          <h3>11. Your Rights</h3>

          <h4>11.1 Local Data Control</h4>
          <p>Your game progress and settings live only on your device. You can delete all of it at any time by clearing the App&rsquo;s storage in your device settings or by uninstalling Puppy Sort. Because we do not store your game data on any server, deleting it from your device deletes it completely, and it cannot be restored.</p>

          <h4>11.2 Advertising Choices</h4>
          <p>You can opt out of personalized advertising at any time using the device settings listed in Section 8. You will still see ads, but they will be less relevant to you.</p>

          <h4>11.3 Data Held By Us Directly</h4>
          <p>The only personal information we hold directly is the content of emails you send us. You may request access to or deletion of that correspondence by contacting us at <strong>appventures2026@gmail.com</strong>. For data collected by our advertising partners, you may also contact them directly using the links in Section 4.1.</p>

          <h4>11.4 For EU/EEA &amp; UK Residents (GDPR)</h4>
          <p>If you are located in the European Union, European Economic Area, or United Kingdom, you have rights under the General Data Protection Regulation (GDPR) and UK GDPR, including the right to access, rectify, erase, restrict processing, data portability, to object to certain processing, and to withdraw consent at any time. You also have the right to lodge a complaint with a supervisory authority.</p>

          <h4>11.5 For California Residents (CCPA/CPRA)</h4>
          <p>If you are a California resident, you have rights under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA), including the right to know what personal information is collected, the right to request deletion, and the right to opt out of the sale or sharing of personal information. <strong>We do not sell personal information.</strong> To limit the sharing of advertising identifiers for cross-context behavioral advertising, use the device settings in Section 8.</p>

          <p>To exercise your privacy rights, contact us at <strong>appventures2026@gmail.com</strong>. We aim to respond within 30 days.</p>

          <h3>12. Data Retention</h3>
          <p>Game data stored on your device (progress, coins, settings) persists until you clear the App&rsquo;s data or uninstall Puppy Sort. Support emails are kept only as long as needed to resolve your request and for reasonable record-keeping. Data processed by our advertising partners is retained according to their own retention policies.</p>

          <h3>13. Children&rsquo;s Privacy</h3>
          <p>Puppy Sort is not directed at children under 13 years of age (or the applicable age of consent in your jurisdiction), and is intended for a general audience aged 13 and over. We do not knowingly collect personal information from children. If we discover that a child has provided us with personal information without appropriate consent, we will take steps to delete it promptly.</p>
          <p>If you are a parent or guardian and believe your child has provided us with personal information, please contact us at <strong>appventures2026@gmail.com</strong>.</p>

          <h3>14. International Transfers</h3>
          <p>Data processed by our advertising and platform partners may be transferred to and processed in countries other than your own, including countries with different data protection laws. Where required, these partners implement appropriate safeguards such as standard contractual clauses or equivalent mechanisms.</p>

          <h3>15. Legal Basis for Processing</h3>
          <p>Where applicable law requires a legal basis for processing personal data, we and our partners rely on one or more of the following:</p>
          <ul>
            <li><strong>Consent:</strong> For personalized advertising and tracking, where required by law (such as the App Tracking Transparency prompt on iOS, or consent prompts in the EU/EEA and UK).</li>
            <li><strong>Contractual necessity:</strong> To provide the Services you request, including gameplay and the rewards you earn from rewarded ads.</li>
            <li><strong>Legal obligations:</strong> To comply with applicable laws and regulations.</li>
            <li><strong>Legitimate interests:</strong> To show non-personalized ads, prevent ad fraud, and maintain and improve the App, balanced against your rights and interests.</li>
          </ul>

          <h3>16. Changes to This Policy</h3>
          <p>We may update this Privacy Policy from time to time. Changes take effect upon posting, and we will update the &ldquo;Last updated&rdquo; date at the top of this page. For material changes that significantly affect your rights, we will provide notice through the App or other appropriate means.</p>
          <p>We encourage you to review this policy periodically.</p>

          <h3 id="contact">17. Contact Us</h3>
          <p>If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:</p>
          <ul>
            <li><strong>Email:</strong> appventures2026@gmail.com</li>
            <li><strong>Developer:</strong> App Ventures</li>
          </ul>

          <hr className="ps-divider" />

          {/* EULA SECTION */}
          <h2 id="eula">End User License Agreement (EULA)</h2>
          <p>This End User License Agreement (&ldquo;Agreement&rdquo;) is a legal agreement between you (&ldquo;User&rdquo; or &ldquo;you&rdquo;) and App Ventures (&ldquo;Licensor&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) for the Puppy Sort mobile application (the &ldquo;App&rdquo;). By downloading, installing, or using the App, you agree to be bound by this Agreement. If you do not agree, do not download, install, or use the App.</p>

          <h3>1. License Grant</h3>
          <p>Subject to your compliance with this Agreement, we grant you a limited, non-exclusive, non-transferable, revocable license to install and use the App on devices you own or control, solely for personal, non-commercial entertainment purposes, in accordance with this Agreement and applicable app store terms.</p>

          <h3>2. Restrictions</h3>
          <p>You agree not to:</p>
          <ul>
            <li>Copy, modify, adapt, or create derivative works of the App</li>
            <li>Reverse engineer, decompile, disassemble, or attempt to derive the source code of the App, except where expressly permitted by law</li>
            <li>Rent, lease, lend, sell, sublicense, or distribute the App or any part of it</li>
            <li>Remove, alter, or obscure any proprietary notices or labels on the App</li>
            <li>Use the App for any unlawful purpose or in violation of any applicable laws or regulations</li>
            <li>Use cheats, bots, exploits, modified versions of the App, or tools that tamper with the App&rsquo;s data to obtain coins, boosters, or other rewards</li>
            <li>Use automated systems or other means to generate fraudulent ad views or clicks, or otherwise interfere with the App&rsquo;s advertising</li>
            <li>Interfere with or disrupt the App or any connected advertising or platform services</li>
          </ul>

          <h3>3. Intellectual Property</h3>
          <p>The App, including its design, puppy characters and artwork, levels, music, sound effects, trademarks, software, and content, is owned by App Ventures or its licensors and is protected by copyright, trademark, and other intellectual property laws. This Agreement does not transfer any ownership rights to you.</p>

          <h3>4. Virtual Items</h3>
          <p>The App includes virtual coins, boosters, puppy breeds, park decorations, and other virtual items (&ldquo;Virtual Items&rdquo;). Virtual Items are licensed to you, not sold, as part of your limited license to use the App. They have no real-world monetary value, cannot be redeemed for money or anything of value, and cannot be transferred between users or devices.</p>
          <p>Because Virtual Items and game progress are stored only on your device, they will be lost if you uninstall the App, clear its data, reset or replace your device, or if your device is lost or damaged. We are unable to restore lost progress or Virtual Items. We may modify, rebalance, or remove Virtual Items, levels, or rewards as part of updates to the App.</p>

          <h3>5. Device Security</h3>
          <p>Puppy Sort does not use accounts or passwords. You are responsible for the physical and digital security of the device on which you install the App, including any screen lock or other protection safeguarding access to the App and its locally stored data.</p>

          <h3>6. Permissions &amp; Device Access</h3>
          <p>The App may use internet access, vibration, and your device&rsquo;s advertising identifier to support the features described in our Privacy Policy. You may disable haptics in the App&rsquo;s settings and limit ad personalization in your device settings.</p>

          <h3>7. Advertising &amp; Third-Party Services</h3>
          <p>The App is supported by advertising and integrates third-party services for ad mediation and delivery, as described in our Privacy Policy. Ads are provided by third parties, and we are not responsible for the content of third-party ads, the products or services they promote, or the websites or apps they link to. These services are governed by their own terms and privacy policies. Rewards for watching rewarded ads depend on the ad being available and fully completed, and are not guaranteed.</p>

          <h3>8. Purchases &amp; In-App Purchases</h3>
          <p>The Android version of the App does not currently offer real-money in-app purchases. If in-app purchases are offered in the future or on other platforms, payment and billing will be processed by the Apple App Store, Google Play, or other authorized payment providers, and refunds and billing disputes will be handled according to the applicable store&rsquo;s policies. We do not store your full payment card details.</p>

          <h3>9. Disclaimer of Warranties</h3>
          <div className="ps-uppercase-section">
            <p>THE APP IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE, THAT ADS OR REWARDED ADS WILL ALWAYS BE AVAILABLE, OR THAT YOUR GAME PROGRESS OR VIRTUAL ITEMS WILL BE PRESERVED UNDER ALL CONDITIONS.</p>
          </div>

          <h3>10. Limitation of Liability</h3>
          <div className="ps-uppercase-section">
            <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, APP VENTURES AND ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE APP, INCLUDING LOST GAME PROGRESS OR VIRTUAL ITEMS.</p>
            <p>OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATING TO THIS AGREEMENT OR THE APP SHALL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID US FOR THE APP IN THE TWELVE (12) MONTHS BEFORE THE CLAIM, OR (B) FIFTY U.S. DOLLARS (USD $50), WHERE PERMITTED BY LAW.</p>
          </div>

          <h3>11. Indemnification</h3>
          <p>You agree to indemnify and hold harmless App Ventures from any claims, damages, losses, liabilities, and expenses (including reasonable legal fees) arising from your use of the App or your violation of this Agreement or applicable law.</p>

          <h3>12. Termination</h3>
          <p>This license is effective until terminated. We may suspend or terminate your access to the App at any time if you breach this Agreement. Upon termination, you must cease all use of the App and delete all copies from your devices. Sections that by their nature should survive termination will survive.</p>

          <h3>13. Changes to This Agreement</h3>
          <p>We may update this EULA from time to time. Continued use of the App after changes become effective constitutes acceptance of the revised Agreement. The &ldquo;Last updated&rdquo; date at the top of this page will reflect material revisions.</p>

          <h3>14. Governing Law &amp; Disputes</h3>
          <p>This Agreement is governed by the laws of the jurisdiction in which App Ventures operates, without regard to conflict-of-law principles, except where mandatory consumer protection laws in your country provide otherwise. Any dispute shall be resolved in the courts of that jurisdiction, unless applicable law requires a different forum.</p>

          <h3>15. Children</h3>
          <p>The App is not directed at children under 13 years of age (or the applicable age of consent in your jurisdiction). We do not knowingly collect personal information from children as described in our Privacy Policy.</p>

          <h3>16. Google Play (Android)</h3>
          <p>If you obtained the App through Google Play, you agree that Google LLC is not a party to this Agreement and has no responsibility or liability with respect to the App. Your use of Google Play is subject to Google Play&rsquo;s terms of service.</p>

          <h3>17. Apple App Store (iOS)</h3>
          <p>If you obtained the App through the Apple App Store, you also agree that:</p>
          <ul>
            <li>This Agreement is between you and App Ventures only, not Apple Inc. (&ldquo;Apple&rdquo;).</li>
            <li>Apple is not responsible for the App or its content, maintenance, support, or warranty obligations.</li>
            <li>Apple has no obligation to furnish maintenance or support services for the App.</li>
            <li>In the event of any failure of the App to conform to any applicable warranty, you may notify Apple for a refund of the purchase price (if any); to the maximum extent permitted by law, Apple has no other warranty obligation.</li>
            <li>Apple is not responsible for addressing any claims relating to the App, including product liability, legal compliance, consumer protection, privacy, or intellectual property infringement.</li>
            <li>Apple and its subsidiaries are third-party beneficiaries of this Agreement and may enforce it against you as a third-party beneficiary.</li>
            <li>You represent that you are not located in a country subject to a U.S. Government embargo or designated as a &ldquo;terrorist supporting&rdquo; country, and that you are not listed on any U.S. Government prohibited or restricted party list.</li>
            <li>You must comply with applicable third-party terms when using the App (e.g., wireless data service agreements).</li>
          </ul>

          <h3>18. Severability &amp; Entire Agreement</h3>
          <p>If any provision of this Agreement is held invalid or unenforceable, the remaining provisions remain in full force. This Agreement, together with our Privacy Policy, constitutes the entire agreement between you and App Ventures regarding the App and supersedes prior understandings on the same subject.</p>

          <h3>19. Contact</h3>
          <p>For questions about this EULA, contact App Ventures at <strong>appventures2026@gmail.com</strong>.</p>
        </div>

        <div className="privacy-screen__footer">
          <p>&copy; 2026 App Ventures — All Rights Reserved</p>
          <p>
            <a href="mailto:appventures2026@gmail.com">appventures2026@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  )
}
