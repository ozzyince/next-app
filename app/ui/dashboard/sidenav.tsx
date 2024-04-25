import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <div className="flex flex-row md:flex-col">
      <NavLinks />
      <form>
        <button type="button">
          <PowerIcon />
          <div className="hidden md:block">Sign Out</div>
        </button>
      </form>
    </div>
  );
}
