import { Header } from "@/components/header";
import { Sidepanel } from "@/components/sidepanel";
import { Lightbulb } from "lucide-react";

export default function TestPage() {
  return (
    <main className="h-screen">
      <Header />
      <section className="flex bg-gradient-to-br from-white to-gray-200 h-full">
        <Sidepanel />

        <div className="flex-1 px-12 py-16">
          <h1 className="text-3xl text-primary font-bold">Test</h1>
          <p className="text-gray-500 text-xs mt-1">
            Conjugaison . Indicatif Present
          </p>

          <div className="bg-white rounded-lg shadow-lg text-lg p-10 my-10">
            <div className="bg-primary text-white rounded-lg p-10">
              <div className="flex items-center justify-between">
                <span>Question 1</span>
                <span>A2.1</span> 
              </div>
              <div className="mt-4">
                Conjuguez le verbe entre parenthèses au présent de l&apos;indicatif.
              </div>
              <div className="mt-4">
                Je <span className="bg-black/10 rounded -my-2 mx-2 w-32 h-8 inline-block"></span> (dire) la vérité.
              </div>
            </div>

            <div className="flex gap-4 justify-between mt-10">
              <button className="bg-primary text-white flex items-center px-6 py-3 rounded-lg">
                <Lightbulb size={20} className="mr-2" />
                Hint
              </button>
              <button className="bg-tertiary text-primary px-6 py-3 rounded-lg">Theory</button>
              <div className="flex-1" />
              <button className="bg-secondary text-white px-6 py-3 rounded-lg">Submit</button>
            </div>

            <div className="w-full border-t border-gray-300 my-4" />

            <div className="flex gap-8 items-center text-gray-500">
              <button className="border border-gray-400 rounded-lg px-6 py-2">Temps simple</button>
              <button className="border border-gray-400 rounded-lg px-6 py-2">Indicatif present</button>
              <button className="border border-gray-400 rounded-lg px-6 py-2">Dire (indicatif present)</button>
            </div>
          </div>
        </div>

      </section>
    </main>
  )
}