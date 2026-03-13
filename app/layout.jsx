import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";

export const metadata = {
  title: "Blazor Docs",
  description: "Blazor tutorial dokumentacija",
};

const navbar = <Navbar logo={<b>Blazor Docs</b>} />;

const footer = <Footer>{new Date().getFullYear()} © Blazor Docs</Footer>;

export default async function RootLayout({ children }) {
  return (
    <html lang="hr" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/tvoj-user/blazor-docs"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
