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

export default function RepChallengePrivacyPage() {
  useEffect(() => {
    document.title = 'Rep Challenge — Privacy Policy & EULA'

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
          <h1>Rep Challenge</h1>
          <p>Privacy Policy &amp; End User License Agreement (EULA)</p>
          <p className="privacy-screen__updated">Last updated: September 5, 2026</p>
        </div>

        <ScrollNav />

        <div className="privacy-screen__content">
          <div className="ps-intro-box">
            <p>
              <strong>Important:</strong> This page contains the Privacy Policy and End User
              License Agreement (EULA) for Rep Challenge: Push-Up &amp; Squat Counter. By
              downloading, installing, or using the App, you agree to both documents.
            </p>
          </div>

          {/* PRIVACY POLICY */}
          <h2 id="privacy-policy">Privacy Policy</h2>

          <h3>Scope</h3>
          <p>
            Welcome to Rep Challenge&rsquo;s Privacy Policy. Your privacy is important to us. This
            Privacy Policy explains how Rep Challenge (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or
            &ldquo;us&rdquo;), developed by App Ventures, collects, uses, protects, and shares
            information when you use our rep-counting mobile application and related services (the
            &ldquo;App&rdquo; or &ldquo;Services&rdquo;) available on the Apple App Store.
          </p>
          <p>If you do not agree with this Privacy Policy, please do not use our Services.</p>

          <h3>Overview</h3>
          <p>
            Rep Challenge counts your push-up and squat reps in real time using your phone&rsquo;s
            camera or its proximity sensor, scores your form, and tracks your workout history and
            progress over time. Rep Challenge also offers optional Friends, Challenges, and
            Leaderboard features that let you compete with people you choose to connect with.
          </p>
          <ul>
            <li>
              Rep Challenge does not require you to register with an email address or password.
              The App&rsquo;s core rep-counting, history, and stats features work without you ever
              setting up a username.
            </li>
            <li>
              Your workout sessions, rep-by-rep detail, and app settings are stored locally on
              your device. Separately, if you set up a username to use Friends, Challenges, or the
              Leaderboard, that username and the data needed to run those features (described in
              Sections 2 and 4) are stored on our servers.
            </li>
            <li>
              Rep Challenge&rsquo;s Friends and Challenges features are social by design: your
              username, display name, and workout progress become visible to the friends and
              challenge participants you choose to connect with, and &mdash; only if you turn on a
              setting &mdash; to a global leaderboard. This data is never made public to people you
              have not connected with (or, for the global leaderboard, unless you opt in), and is
              never sold.
            </li>
          </ul>

          <h3>1. Accounts &amp; Usernames</h3>
          <p>
            Rep Challenge does not require you to register, sign in, or provide an email address
            or password to use the App&rsquo;s core rep-counting, history, and stats features.
            However, the first time you engage with the Friends feature &mdash; during
            onboarding&rsquo;s optional &ldquo;Compete with friends?&rdquo; step, or later from the
            Friends tab &mdash; Rep Challenge automatically creates an anonymous account for your
            device using our backend provider, Supabase, so that any data you choose to share with
            friends can be reliably linked back to you. This anonymous account has no email,
            password, or phone number attached to it.
          </p>
          <p>
            At that point &mdash; or later from Settings &mdash; you may claim a unique username
            (and an optional display name and avatar color) so that other Rep Challenge users can
            find and add you as a friend. This username is not merely a local greeting name: it is
            stored on our servers and is searchable by other users of the App. You can skip this
            step and use Rep Challenge&rsquo;s core rep-counting features without ever claiming a
            username.
          </p>

          <h3>2. Information We Collect</h3>

          <h4>2.1 Information You Provide</h4>
          <ul>
            <li>
              Workout session and rep-level detail &mdash; exercise (push-up or squat), counting
              mode, strictness setting, goal, valid and partial rep counts, session duration,
              average depth and body-line quality scores, calibration angles, and per-rep timing
              and quality data (stored locally on your device)
            </li>
            <li>
              App preferences, such as default strictness, voice-counting, haptics, sound, camera
              position, and orientation override (stored locally on your device)
            </li>
            <li>
              Your name and self-reported fitness baseline entered during onboarding &mdash; max
              push-ups/squats, fitness level, goal (stored locally on your device)
            </li>
            <li>Support communications you send to us directly, such as emails</li>
          </ul>

          <h4>2.2 Friends, Challenges &amp; Leaderboard Data (Server-Stored)</h4>
          <p>
            If you claim a username to use the Friends, Challenges, or Leaderboard features, the
            following is stored on our servers (hosted by Supabase) rather than only on your
            device, because it needs to be shared with other users you connect with or ranked
            against:
          </p>
          <ul>
            <li>
              Your username, optional display name, and avatar color/initials, which are
              searchable by other Rep Challenge users
            </li>
            <li>
              Friend requests and friendships &mdash; who you&rsquo;ve sent a request to, received
              a request from, or are connected with
            </li>
            <li>
              Challenges you create or are invited to &mdash; exercise, period
              (daily/weekly/monthly/custom), target reps, start/end dates, and the list of
              participants and their status
            </li>
            <li>
              Your logged reps for each challenge you&rsquo;ve joined, visible to that
              challenge&rsquo;s other accepted participants
            </li>
            <li>
              Aggregate session stats reported after a completed workout &mdash; exercise type,
              rep count, and the time you finished &mdash; used to update your challenge totals and
              leaderboard standing. This does not include the rep-by-rep detail, quality scores, or
              camera data in Section 2.4, none of which ever leaves your device.
            </li>
            <li>
              Whether you&rsquo;ve turned on &ldquo;Show on global leaderboard&rdquo; in Settings
              (off by default)
            </li>
          </ul>
          <p>
            This data is visible only to the specific friends or challenge participants you
            connect with, and &mdash; only if you opt in &mdash; the global leaderboard. It is
            never made public beyond that, and Rep Challenge does not currently offer a
            general-purpose cloud backup or restore of your personal (non-shared) workout history.
          </p>

          <h4>2.3 Device &amp; Advertising Data</h4>
          <ul>
            <li>
              Device type, operating system, and app version, collected by our advertising
              partners for ad delivery and measurement
            </li>
            <li>
              Advertising identifier &mdash; the IDFA on iOS, used by our ad-serving partners, only
              after you consent via Apple&rsquo;s App Tracking Transparency prompt
            </li>
            <li>
              Approximate location inferred from your IP address by our advertising partners, for
              ad targeting purposes only. Rep Challenge does not itself request or collect GPS or
              precise location data, and has no location permission.
            </li>
          </ul>

          <h4>2.4 Camera &amp; Motion Data (Rep Counting)</h4>
          <ul>
            <li>
              <strong>Camera:</strong> when you count reps in Camera mode, Rep Challenge uses your
              phone&rsquo;s camera to track body joint positions on-device in real time, using
              Apple&rsquo;s on-device Vision framework, in order to detect and count reps and score
              form quality. This data is processed entirely on your device and is never recorded,
              saved, or transmitted anywhere.
            </li>
            <li>
              <strong>Proximity sensor:</strong> when you count reps in Proximity mode (phone flat
              on the floor, screen off), Rep Challenge reads your phone&rsquo;s built-in proximity
              sensor on-device to detect each rep. This data is processed entirely on your device
              and is never recorded or transmitted.
            </li>
            <li>
              <strong>Microphone:</strong> iOS requires this permission to be declared alongside
              the camera-capture APIs Rep Challenge uses for Camera mode. Rep Challenge does not
              record, transmit, or otherwise use audio at any time.
            </li>
          </ul>

          <h4>2.5 Billing Information (Ad-Free Unlock)</h4>
          <p>
            If you purchase the Rep Challenge ad-free unlock, payment is processed entirely by the
            Apple App Store. Your entitlement may be validated and managed through RevenueCat, our
            purchase-management partner. We do not directly collect or store your full payment
            card details &mdash; we (or RevenueCat on our behalf) only receive purchase status and
            metadata needed to unlock the ad-free experience.
          </p>

          <h3>3. How We Use Your Information</h3>
          <p>We use the information described above to:</p>
          <ul>
            <li>
              Provide the App&rsquo;s core functionality &mdash; counting reps, scoring form, and
              tracking your workout history and stats
            </li>
            <li>
              Operate the optional Friends, Challenges, and Leaderboard features, including
              letting other users find you by username, managing friend requests, and tracking
              challenge and leaderboard standings
            </li>
            <li>Unlock and manage the ad-free purchase for those who buy it</li>
            <li>Serve advertisements to users who haven&rsquo;t purchased the ad-free unlock (see Section 8)</li>
            <li>Diagnose and improve the App&rsquo;s reliability and performance</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h3>4. How We Share Your Information</h3>

          <h4>4.1 With Other Users (Friends, Challenges &amp; Leaderboard)</h4>
          <p>
            If you claim a username, it &mdash; along with your optional display name and avatar
            &mdash; becomes searchable by other Rep Challenge users so they can send you a friend
            request. Once you accept a friend request or join a challenge, the following becomes
            visible to that specific friend or challenge&rsquo;s other participants: your
            username, display name, avatar, the challenge&rsquo;s details (exercise, period,
            target), and your logged reps for that challenge. If you turn on &ldquo;Show on global
            leaderboard,&rdquo; your username, display name, avatar, and reps for the relevant
            exercise and period also become visible to any Rep Challenge user viewing that
            leaderboard. This is the only way your personal information is shared with other
            individual users of the App, and outside of the global leaderboard it only happens
            with people you have chosen to connect with &mdash; never publicly.
          </p>

          <h4>4.2 Advertising &amp; Mediation Partners</h4>
          <p>
            Rep Challenge shows ads to users who haven&rsquo;t purchased the ad-free unlock
            through TopOn, an ad mediation platform that currently routes ad requests to Unity Ads
            and Yandex Ads. These networks may independently collect device identifiers,
            advertising IDs, and approximate IP-based location for ad targeting and measurement,
            under their own privacy policies.
          </p>

          <h4>4.3 Purchase Management</h4>
          <p>
            If you buy the ad-free unlock, your purchase and entitlement status is shared with
            RevenueCat to validate and manage it, including across multiple devices signed into
            the same Apple ID.
          </p>

          <h4>4.4 Backend Infrastructure</h4>
          <p>
            Data described in Section 2.2 (usernames, friend connections, challenges, and
            leaderboard standings) is hosted on our behalf by Supabase, our backend database and
            authentication provider. Supabase processes this data only to provide the App&rsquo;s
            Friends, Challenges, and Leaderboard functionality and does not use it for its own
            purposes.
          </p>

          <h4>4.5 Legal Requirements</h4>
          <p>
            We may disclose information if required by law, regulation, legal process, or
            governmental request, or when we believe disclosure is necessary to protect the
            rights, property, or safety of Rep Challenge, App Ventures, our users, or others.
          </p>

          <h4>4.6 Business Transfers</h4>
          <p>
            If App Ventures is involved in a merger, acquisition, reorganization, or sale of
            assets, data may be transferred as part of that transaction. We will notify you of any
            material change in ownership or use of your personal information.
          </p>

          <h4>4.7 Non-Personal Data</h4>
          <p>
            We may share aggregated or anonymized data that cannot reasonably be used to identify
            you for analytics, research, and business purposes.
          </p>

          <p>
            <strong>We do not sell your personal information.</strong>
          </p>

          <h3>5. Permissions</h3>
          <p>Rep Challenge may request the following device permissions:</p>
          <ul>
            <li>
              <strong>Camera:</strong> To count reps and score form in Camera mode. You may deny
              this permission and use Proximity mode instead.
            </li>
            <li>
              <strong>Microphone (iOS):</strong> Declared only because it is bundled with camera
              access on iOS; Rep Challenge never records or processes audio.
            </li>
            <li>
              <strong>Tracking (App Tracking Transparency, iOS only):</strong> To enable
              personalized advertising. You may decline this prompt and continue using every
              feature of the App.
            </li>
          </ul>
          <p>
            Proximity mode uses your phone&rsquo;s built-in proximity sensor to detect reps. iOS
            does not show a permission prompt for this &mdash; access is automatic, and this data
            is processed entirely on your device and never recorded or transmitted (see Section
            2.4). Rep Challenge does not request location, contacts, or photo-library access, and
            has no push- or local-notification feature.
          </p>

          <h3>6. Data Security</h3>
          <p>
            Your personal workout, settings, and profile data (Section 2.1) is stored locally on
            your device, so its security largely depends on your device&rsquo;s own protections
            (such as a passcode or biometric lock). Data associated with Friends, Challenges, and
            the Leaderboard (Section 2.2) is stored on our servers and protected by database access
            rules that restrict visibility of your username, challenge details, and reps to the
            specific friends and challenge participants you connect with &mdash; or, for the
            leaderboard, to whatever you&rsquo;ve made visible by opting in. Where we or our
            partners process other data &mdash; such as advertising identifiers or purchase status
            &mdash; we rely on industry-standard security practices. No system is completely
            secure, and we cannot guarantee absolute security of information transmitted or stored
            through the Services.
          </p>

          <h3>7. Cookies &amp; Tracking Technologies</h3>
          <p>
            Rep Challenge is a mobile app, not a website, and does not itself use browser cookies.
            Our advertising and mediation partners (Section 4.2) may use device identifiers and
            SDK-based tracking technologies within the App to serve and measure ads, governed by
            their own privacy policies.
          </p>

          <h3>8. Advertising</h3>
          <p>
            Rep Challenge displays advertisements &mdash; including banner, interstitial, native,
            app-open, and rewarded ad formats &mdash; to users who haven&rsquo;t purchased the
            ad-free unlock, through the TopOn mediation platform and its connected ad networks.
            These ads may be personalized based on your device information and advertising
            identifier. Users who purchase the ad-free unlock do not see advertisements.
          </p>
          <p>
            Adding a friend or creating a challenge is gated behind a short rewarded-ad view for
            free-tier users (you can watch the ad or purchase the ad-free unlock to skip it going
            forward); this only controls access to that action and does not affect your existing
            friends, challenges, or data.
          </p>
          <p>You can control ad personalization through your device settings:</p>
          <ul>
            <li>
              <strong>iOS:</strong> Settings &gt; Privacy &amp; Security &gt; Tracking, or respond
              &ldquo;Ask App Not to Track&rdquo; when prompted
            </li>
          </ul>

          <h3>9. Purchases (Ad-Free Unlock)</h3>
          <p>
            Rep Challenge offers an optional, one-time &ldquo;ad-free unlock&rdquo; purchase that
            removes all advertising from the App. When you purchase it:
          </p>
          <ul>
            <li>
              Payment is processed by the Apple App Store, typically via RevenueCat. We do not
              directly collect or store your full payment card details.
            </li>
            <li>We receive purchase status and related metadata to unlock the ad-free experience and provide support.</li>
            <li>Refunds and billing disputes are handled according to Apple&rsquo;s App Store policies.</li>
            <li>If you restore purchases (e.g. on a new device), RevenueCat re-verifies your entitlement against your Apple ID.</li>
          </ul>
          <div className="ps-note-box">
            <p>
              <strong>Note on Friends, Challenges &amp; Leaderboard:</strong> The Friends,
              Challenges, and Leaderboard features described in Section 2.2 are free and available
              to all users &mdash; they are not part of the ad-free unlock. Using them stores your
              username, challenge details, and reported session stats on our servers so they can
              be shared with the friends and challenge participants you connect with, and
              optionally the global leaderboard, as described in Section 4.1. Free-tier users may
              need to watch a rewarded ad to add a friend or create a challenge (see Section 8)
              &mdash; purchasing the ad-free unlock removes this step.
            </p>
          </div>

          <h3>10. Third-Party Services</h3>
          <p>Rep Challenge integrates with the following categories of third-party services:</p>
          <ul>
            <li>Ad mediation and networks (TopOn, Unity Ads, Yandex Ads)</li>
            <li>Purchase management (RevenueCat)</li>
            <li>
              Backend database, authentication, and realtime infrastructure for Friends,
              Challenges &amp; Leaderboard (Supabase)
            </li>
            <li>Payment processing operated by Apple</li>
          </ul>
          <p>
            These services operate under their own privacy policies. We recommend reviewing the
            privacy policies of our partners where relevant to you.
          </p>

          <h3>11. Your Rights</h3>

          <h4>11.1 Local Data Control</h4>
          <p>
            Your workout sessions, rep history, and app settings live on your device, and you can
            view or delete them at any time directly within the App. Uninstalling Rep Challenge
            removes all locally stored app data from your device. Uninstalling does{' '}
            <strong>not</strong> delete your username, friend connections, challenges, or
            leaderboard standing stored on our servers &mdash; see Section 11.3 to request deletion
            of that data.
          </p>

          <h4>11.2 Advertising &amp; Leaderboard Choices</h4>
          <p>
            You can opt out of personalized advertising at any time using the device settings
            listed in Section 8. You can also turn &ldquo;Show on global leaderboard&rdquo; on or
            off at any time from Settings within the App &mdash; this only affects visibility on
            the global leaderboard, not your friends or active challenges, which remain visible to
            the people you&rsquo;re already connected with.
          </p>

          <h4>11.3 Data Held By Us Directly</h4>
          <p>
            If you have claimed a username to use Friends, Challenges, or the Leaderboard,
            purchased the ad-free unlock, or contacted us directly, we (or our partners, on our
            behalf) hold a limited set of records about you on our servers, as described in
            Sections 2.2 and 2.5. You may request access to or deletion of these records &mdash;
            including removing your profile, friend connections, and challenge history &mdash; by
            contacting us at <strong>appventures2026@gmail.com</strong>.
          </p>

          <h4>11.4 For EU/EEA Residents (GDPR)</h4>
          <p>
            If you are located in the European Union or European Economic Area, you have rights
            under the General Data Protection Regulation (GDPR), including the right to access,
            rectify, erase, restrict processing, data portability, and to object to certain
            processing. You also have the right to lodge a complaint with a supervisory authority.
          </p>

          <h4>11.5 For California Residents (CCPA/CPRA)</h4>
          <p>
            If you are a California resident, you have rights under the California Consumer
            Privacy Act (CCPA) and California Privacy Rights Act (CPRA), including the right to
            know what personal information is collected, the right to request deletion, and the
            right to opt out of the sale or sharing of personal information.{' '}
            <strong>We do not sell personal information.</strong>
          </p>

          <p>
            To exercise your privacy rights, contact us at{' '}
            <strong>appventures2026@gmail.com</strong>. We aim to respond within 30 days.
          </p>

          <h3>12. Data Retention</h3>
          <p>
            Data stored locally on your device (workout sessions, rep history, settings) persists
            until you delete it within the App or uninstall Rep Challenge. Data stored on our
            servers for Friends, Challenges, and the Leaderboard (Section 2.2) &mdash; your
            username, friend connections, challenges, and reported session stats &mdash; persists
            until you delete it within the App (e.g. removing a friend or leaving a challenge) or
            request deletion as described in Section 11.3; it is not automatically deleted when you
            uninstall the App. Data processed by our advertising and purchase-management partners
            is retained according to their own retention policies.
          </p>

          <h3>13. Children&rsquo;s Privacy</h3>
          <p>
            Rep Challenge is not intended for users under 13 years of age (or the applicable age
            of consent in your jurisdiction). We do not knowingly collect personal information
            from children. If we discover that a child has provided us with personal information
            without appropriate consent, we will take steps to delete it promptly.
          </p>
          <p>
            If you are a parent or guardian and believe your child has provided us with personal
            information, please contact us at <strong>appventures2026@gmail.com</strong>.
          </p>

          <h3>14. International Transfers</h3>
          <p>
            Data processed by our advertising, purchase-management, and platform partners may be
            transferred to and processed in countries other than your own, including countries
            with different data protection laws. Where required, these partners implement
            appropriate safeguards such as standard contractual clauses or equivalent mechanisms.
          </p>

          <h3>15. Legal Basis for Processing</h3>
          <p>
            Where applicable law requires a legal basis for processing personal data, we and our
            partners rely on one or more of the following:
          </p>
          <ul>
            <li>
              <strong>Consent:</strong> For personalized advertising and tracking, such as the App
              Tracking Transparency prompt on iOS.
            </li>
            <li>
              <strong>Contractual necessity:</strong> To provide the Services you request,
              including rep counting, Friends/Challenges/Leaderboard, and the ad-free purchase.
            </li>
            <li>
              <strong>Legal obligations:</strong> To comply with applicable laws and regulations.
            </li>
            <li>
              <strong>Legitimate interests:</strong> To maintain and improve the App and support
              our business operations, balanced against your rights and interests.
            </li>
          </ul>

          <h3>16. Changes to This Policy</h3>
          <p>
            We may update this Privacy Policy from time to time. Changes take effect upon posting,
            and we will update the &ldquo;Last updated&rdquo; date at the top of this page. For
            material changes that significantly affect your rights, we will provide notice through
            the App or other appropriate means.
          </p>
          <p>We encourage you to review this policy periodically.</p>

          <h3 id="contact">17. Contact Us</h3>
          <p>
            If you have questions, concerns, or requests regarding this Privacy Policy or our data
            practices, please contact us at:
          </p>
          <ul>
            <li>
              <strong>Email:</strong> appventures2026@gmail.com
            </li>
            <li>
              <strong>Developer:</strong> App Ventures
            </li>
          </ul>

          <hr className="ps-divider" />

          {/* EULA */}
          <h2 id="eula">End User License Agreement (EULA)</h2>
          <p>
            This End User License Agreement (&ldquo;Agreement&rdquo;) is a legal agreement between
            you (&ldquo;User&rdquo; or &ldquo;you&rdquo;) and App Ventures (&ldquo;Licensor&rdquo;,
            &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) for the Rep Challenge mobile
            application (the &ldquo;App&rdquo;). By downloading, installing, or using the App, you
            agree to be bound by this Agreement. If you do not agree, do not download, install, or
            use the App.
          </p>

          <h3>1. License Grant</h3>
          <p>
            Subject to your compliance with this Agreement, we grant you a limited, non-exclusive,
            non-transferable, revocable license to install and use the App on devices you own or
            control, solely for personal, non-commercial purposes, in accordance with this
            Agreement and applicable app store terms.
          </p>

          <h3>2. Restrictions</h3>
          <p>You agree not to:</p>
          <ul>
            <li>Copy, modify, adapt, or create derivative works of the App</li>
            <li>
              Reverse engineer, decompile, disassemble, or attempt to derive the source code of the
              App, except where expressly permitted by law
            </li>
            <li>Rent, lease, lend, sell, sublicense, or distribute the App or any part of it</li>
            <li>Remove, alter, or obscure any proprietary notices or labels on the App</li>
            <li>Use the App for any unlawful purpose or in violation of any applicable laws or regulations</li>
            <li>
              Use automated systems, bots, exploits, or manipulated camera/sensor input to falsify
              rep counts, form scores, or challenge results
            </li>
            <li>
              Impersonate another person, harass or abuse other users, or misuse the Friends or
              Challenges features to contact people without their consent
            </li>
            <li>
              Interfere with or disrupt the App or any connected advertising, purchase, backend, or
              platform services
            </li>
          </ul>

          <h3>3. Intellectual Property</h3>
          <p>
            The App, including its design, trademarks, software, and content (excluding your
            data), is owned by App Ventures or its licensors and is protected by copyright,
            trademark, and other intellectual property laws. This Agreement does not transfer any
            ownership rights to you. You retain ownership of your name, username, and any other
            content you enter into the App.
          </p>

          <h3>4. User Content</h3>
          <p>
            You may enter a name, username, display name, and other preferences (&ldquo;User
            Content&rdquo;). You retain ownership of your User Content.
          </p>
          <p>
            If you use the Friends, Challenges, or Leaderboard features, your username, display
            name, avatar, challenge details, and logged reps are visible to the friends and
            challenge participants you connect with &mdash; and, if you opt in, the global
            leaderboard &mdash; as described in our Privacy Policy. You are solely responsible for
            the content of any username or display name you choose, and must not use them to
            impersonate another person, or to harass, abuse, or misrepresent yourself to other
            users.
          </p>
          <p>
            Rep Challenge is a fitness tracking and form-feedback tool. It does not provide
            medical, safety, or professional fitness advice, is not a substitute for guidance from
            a qualified trainer or physician, and should not be relied upon as the sole judge of
            your exercise form or fitness level (see Section 9, Disclaimer of Warranties).
          </p>

          <h3>5. Device Security</h3>
          <p>
            Rep Challenge does not require you to set a password, and any account created on your
            behalf (Section 1 of our Privacy Policy) is tied to your device rather than to
            credentials you manage. You are responsible for the physical and digital security of
            the device on which you install the App, including any passcode, biometric lock, or
            other protection safeguarding access to the App, its locally stored data, and any
            Friends or Challenges connections made from that device. Notify us promptly at{' '}
            <strong>appventures2026@gmail.com</strong> if you become aware of unauthorized access
            to your ad-free purchase or your account.
          </p>

          <h3>6. Permissions &amp; Device Access</h3>
          <p>
            The App may request access to your camera, microphone (iOS only, unused), and
            motion/proximity sensors to support the features described in our Privacy Policy. You
            may deny certain permissions, but related features &mdash; such as Camera mode rep
            counting &mdash; may not function correctly.
          </p>

          <h3>7. Third-Party Services</h3>
          <p>
            The App integrates third-party services for advertising, ad mediation, and purchase
            management, as described in our Privacy Policy. These services are governed by their
            own terms and privacy policies. We are not responsible for third-party services,
            content, or practices.
          </p>

          <h3>8. Purchases &amp; In-App Purchases</h3>
          <p>
            Rep Challenge may offer an ad-free unlock or other in-app purchases. Payment and
            billing are processed by the Apple App Store, or other authorized payment providers
            (potentially via RevenueCat). Refunds and billing disputes are handled according to the
            applicable store&rsquo;s policies. We do not store your full payment card details.
          </p>

          <h3>9. Disclaimer of Warranties</h3>
          <div className="ps-uppercase-section">
            <p>
              THE APP IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT
              WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING IMPLIED
              WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND
              NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE,
              OR SECURE, OR THAT REPS, FORM SCORES, OR CALIBRATION WILL BE COUNTED OR MEASURED WITH
              PERFECT ACCURACY UNDER ALL CONDITIONS, INCLUDING VARYING LIGHTING, CAMERA ANGLES,
              CLOTHING, FLOOR SURFACES, OR DEVICE PLACEMENT. THE APP IS NOT A MEDICAL DEVICE AND
              DOES NOT PROVIDE MEDICAL OR PROFESSIONAL FITNESS ADVICE. YOU ASSUME ALL RISK OF
              INJURY ASSOCIATED WITH PHYSICAL EXERCISE, AND SHOULD CONSULT A PHYSICIAN BEFORE
              BEGINNING ANY EXERCISE PROGRAM.
            </p>
          </div>

          <h3>10. Limitation of Liability</h3>
          <div className="ps-uppercase-section">
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, APP VENTURES AND ITS AFFILIATES,
              OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT,
              INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS,
              DATA, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE
              APP, INCLUDING A MISCOUNTED REP, LOST WORKOUT HISTORY, OR ANY INJURY SUSTAINED WHILE
              EXERCISING.
            </p>
            <p>
              OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATING TO THIS AGREEMENT OR THE
              APP SHALL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID US FOR THE APP IN THE
              TWELVE (12) MONTHS BEFORE THE CLAIM, OR (B) FIFTY U.S. DOLLARS (USD $50), WHERE
              PERMITTED BY LAW.
            </p>
          </div>

          <h3>11. Indemnification</h3>
          <p>
            You agree to indemnify and hold harmless App Ventures from any claims, damages,
            losses, liabilities, and expenses (including reasonable legal fees) arising from your
            use of the App, your User Content, or your violation of this Agreement or applicable
            law.
          </p>

          <h3>12. Termination</h3>
          <p>
            This license is effective until terminated. We may suspend or terminate your access to
            the App at any time if you breach this Agreement. Upon termination, you must cease all
            use of the App and delete all copies from your devices. Sections that by their nature
            should survive termination will survive.
          </p>

          <h3>13. Changes to This Agreement</h3>
          <p>
            We may update this EULA from time to time. Continued use of the App after changes
            become effective constitutes acceptance of the revised Agreement. The &ldquo;Last
            updated&rdquo; date at the top of this page will reflect material revisions.
          </p>

          <h3>14. Governing Law &amp; Disputes</h3>
          <p>
            This Agreement is governed by the laws of the jurisdiction in which App Ventures
            operates, without regard to conflict-of-law principles, except where mandatory
            consumer protection laws in your country provide otherwise. Any dispute shall be
            resolved in the courts of that jurisdiction, unless applicable law requires a different
            forum.
          </p>

          <h3>15. Children</h3>
          <p>
            The App is not intended for children under 13 years of age (or the applicable age of
            consent in your jurisdiction). We do not knowingly collect personal information from
            children as described in our Privacy Policy.
          </p>

          <h3>16. Apple App Store (iOS)</h3>
          <p>If you obtained the App through the Apple App Store, you also agree that:</p>
          <ul>
            <li>This Agreement is between you and App Ventures only, not Apple Inc. (&ldquo;Apple&rdquo;).</li>
            <li>Apple is not responsible for the App or its content, maintenance, support, or warranty obligations.</li>
            <li>Apple has no obligation to furnish maintenance or support services for the App.</li>
            <li>
              In the event of any failure of the App to conform to any applicable warranty, you may
              notify Apple for a refund of the purchase price (if any); to the maximum extent
              permitted by law, Apple has no other warranty obligation.
            </li>
            <li>
              Apple is not responsible for addressing any claims relating to the App, including
              product liability, legal compliance, consumer protection, privacy, or intellectual
              property infringement.
            </li>
            <li>
              Apple and its subsidiaries are third-party beneficiaries of this Agreement and may
              enforce it against you as a third-party beneficiary.
            </li>
            <li>
              You represent that you are not located in a country subject to a U.S. Government
              embargo or designated as a &ldquo;terrorist supporting&rdquo; country, and that you
              are not listed on any U.S. Government prohibited or restricted party list.
            </li>
            <li>You must comply with applicable third-party terms when using the App (e.g., wireless data service agreements).</li>
          </ul>

          <h3>17. Google Play (Android)</h3>
          <p>
            If you obtained the App through Google Play, you agree that Google LLC is not a party
            to this Agreement and has no responsibility or liability with respect to the App. Your
            use of Google Play is subject to Google Play&rsquo;s terms of service.
          </p>

          <h3>18. Severability &amp; Entire Agreement</h3>
          <p>
            If any provision of this Agreement is held invalid or unenforceable, the remaining
            provisions remain in full force. This Agreement, together with our Privacy Policy,
            constitutes the entire agreement between you and App Ventures regarding the App and
            supersedes prior understandings on the same subject.
          </p>

          <h3>19. Contact</h3>
          <p>
            For questions about this EULA, contact App Ventures at{' '}
            <strong>appventures2026@gmail.com</strong>.
          </p>
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
