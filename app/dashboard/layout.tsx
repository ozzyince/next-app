import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row">
      <div>
        <SideNav />
      </div>
      <div className="flex-grow overflow-auto">{children}</div>
    </div>
  );
}
