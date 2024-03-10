import { ChevronDown, User } from "lucide-react";

export function Header() {
  return (
    <nav className="border-b border-gray-300 p-4">
      <div className="flex container mx-auto items-center justify-between">
        <div className="">
          <h2 className="font-bold text-2xl">Practle</h2>
          <span className="capitalize tracking-tight text-xs">Your learning journey</span>
        </div>

        <div className="flex items-center gap-6">
          <button>My Learning Journey</button>
          <button className="bg-primary rounded px-4 py-2 text-gray-50 flex gap-3 items-center">
            <User size={20} />
            <span>My Profile</span>
            <ChevronDown size={20} />
          </button>
        </div>
      </div>
    </nav>
  )
}