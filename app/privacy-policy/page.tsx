import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main className="pt-20 min-h-screen items-center px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold text-center">Privacy Policy</h1>
      <p className="text-left">
        Privacy Policy for Openweight Tracking App <br />
        Effective Date: June 10th 2023. <br />
        Thank you for choosing our Bodyweight Tracking App (referred to as
        &quot;the App,&quot; &quot;we,&quot; &quot;us,&quot; or
        &quot;our&quot;). We are committed to protecting your privacy and
        ensuring the security of your personal information. This Privacy Policy
        outlines the types of information we collect, how we use it, and the
        choices you have regarding your information. By using our App, you
        consent to the practices described in this policy.
        <br />
        Information We Collect 1.1 <br />
        Personal Information: We do not collect or store any personally
        identifiable information (PII) such as your name, address, email, or
        contact information. <br />
        1.2 Bodyweight Data: The App collects and stores bodyweight data that
        you input manually or automatically sync from compatible devices. This
        information is stored locally on your device and is not transmitted or
        accessible to us. <br />
        1.3 Usage Information: We may collect certain non-personal information
        about how you interact with the App, such as your device type, operating
        system, and app usage patterns. This information is collected to improve
        the performance, functionality, and user experience of the App and is
        collected anonymously. <br />
        Use of Information
        <br />
        2.1 Bodyweight Data: The bodyweight data you input into the App is
        solely used to provide you with the functionality of tracking and
        analyzing your progress over time. This information is stored locally on
        your device and is not shared with us or any third parties. <br />
        2.2 Usage Information: We may use non-personal usage information to
        analyze trends, monitor and improve the App&apos;s performance, and
        enhance user experience. This information is collected in an aggregated
        and anonymous form, and it cannot be used to personally identify you.{" "}
        <br />
        Data Security <br />
        We take reasonable measures to protect your personal information and
        ensure its security. However, please note that no method of transmission
        or storage is 100% secure, and we cannot guarantee the absolute security
        of your data. <br />
        Third-Party Services <br />
        The App may integrate with third-party services such as Apple HealthKit.
        If you choose to enable these integrations, please be aware that the
        privacy practices of these third-party services are outside our control.
        We encourage you to review the privacy policies of such services before
        enabling any integrations. <br />
        Children&apos;s Privacy <br />
        The App is not intended for use by individuals under the age of 13. We
        do not knowingly collect personal information from children. If we
        become aware that we have inadvertently collected personal information
        from a child under 13, we will promptly delete such information from our
        records. <br />
        Changes to the Privacy Policy <br />
        We reserve the right to update or modify this Privacy Policy at any
        time. Any changes to this policy will be posted within the App, and the
        revised policy will indicate the &quot;Effective Date&quot; at the top.
        We encourage you to review this Privacy Policy periodically for any
        updates. <br />
        Contact Us <br />
        If you have any questions, concerns, or feedback regarding this Privacy
        Policy or our privacy practices, please contact us at{" "}
        <Link href="mailto:lewiscasewell@hotmail.co.uk">
          lewiscasewell@hotmail.co.uk
        </Link>
        . By using our App, you acknowledge that you have read and understood
        this Privacy Policy and agree to the collection, use, and disclosure of
        your information as described herein.
      </p>
    </main>
  );
}
