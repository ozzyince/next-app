import NavLinks from '@/app/ui/dashboard/nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <div className="flex flex-row md:flex-col">
      <NavLinks />
      <form>
        <button
          type="button"
          className="flex justify-center md:justify-start md:px-3 h-[48px] w-full grow items-center gap-2 rounded-md bg-gray-50 text-sm font-medium hover:bg-sky-100 hover:text-blue-600"
        >
          <PowerIcon className="w-6" />
          <p className="hidden md:block">Sign Out</p>
        </button>
      </form>
    </div>
  );
}
