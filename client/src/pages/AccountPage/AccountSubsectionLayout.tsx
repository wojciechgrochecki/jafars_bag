import TopMobileNav from "@/components/TopMobileNav";

type LayoutProps = React.ComponentPropsWithoutRef<typeof TopMobileNav> & {
  children: React.ReactNode;
};

const AccountSubsectionLayout = ({ header, children }: LayoutProps) => {
  return (
    <div className="w-full pt-16">
      <TopMobileNav header={header} />
      <main className="h-fit w-full p-4">{children}</main>
    </div>
  );
};

export default AccountSubsectionLayout;
