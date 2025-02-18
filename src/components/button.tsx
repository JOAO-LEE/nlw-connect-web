import { ReactNode } from "react"

export default function Button({ children }: { children: ReactNode }) {
  return (
    <button 
    className="px-5 flex justify-between items-center h-12 bg-gray-500 text-blue font-semibold rounded-xl w-full cursor-pointer hover:bg-blue hover:text-gray-900 transition-colors duration-300">
    {children}
    </button>
  )
}
