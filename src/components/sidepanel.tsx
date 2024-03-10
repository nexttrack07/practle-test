import { ChevronRight, MessageSquare } from "lucide-react";

export function Sidepanel() {
  return (
    <div className="w-[350px] h-full bg-white space-y-8 px-12 py-16">
      <div className="">
        <p className="uppercase text-xs text-gray-500 tracking-tight">All in one for education</p>
        <h2 className="text-4xl font-bold text-secondary">My Courses</h2>
      </div>

      <div className="space-y-2 h-[300px]">
        <button className="flex items-center text-sm bg-tertiary px-6 py-4 gap-4 rounded">
          <MessageSquare size={15} />
          <span className="">French Language</span>
          <ChevronRight size={15} />
        </button>
        <button className="flex items-center text-sm bg-tertiary px-6 py-4 gap-4 rounded">
          <MessageSquare size={15} />
          <span className="">French Language</span>
          <ChevronRight size={15} />
        </button>
      </div>

      <div className="rounded-lg border p-4 w-full">
        <p className="font-semibold text-sm">Add an Additional Code</p>
        <p className="text-sm">to get access to more modules</p>

        <button className="bg-primary text-gray-50 w-full px-6 py-3 rounded mt-4">Enter Code</button>
      </div>
    </div>
  )
}