"use client";
export default function DesignEditor({ color, setColor }: { color: "teal" | "red" | "slate" | "gray" | "zinc" | "neutral" | "stone" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose", setColor: (color: "teal" | "red" | "slate" | "gray" | "zinc" | "neutral" | "stone" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose") => void }) {

    function handleToggleDarkMode() {
        document.body.classList.toggle('dark')
    }

    const colorsNames = [
        "red",
        "orange",
        "yellow",
        "lime",
        "green",
        "emerald",
        "teal",
        "cyan",
        "blue",
        "indigo",
        "violet",
        "purple",
        "fuchsia",
        "pink",
        "rose"
    ]

    const buttonStyle = " w-8 h-8 bg-gradient-to-tr rounded-full"

    return (
        <div className="fixed bottom-8 right-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg p-4 z-50">
            <div className="grid grid-cols-3 gap-4 pb-4">
                <button onClick={() => setColor("red")} className={` from-red-600 to-red-800 `+buttonStyle} />
                <button onClick={() => setColor("orange")} className={` from-orange-600 to-orange-800 `+buttonStyle} />
                <button onClick={() => setColor("yellow")} className={` from-yellow-600 to-yellow-800 `+buttonStyle} />
                <button onClick={() => setColor("lime")} className={` from-lime-600 to-lime-800 `+buttonStyle} />
                <button onClick={() => setColor("green")} className={` from-green-600 to-green-800 `+buttonStyle} />
                <button onClick={() => setColor("emerald")} className={` from-emerald-600 to-emerald-800 `+buttonStyle} />
                <button onClick={() => setColor("teal")} className={` from-teal-600 to-teal-800 `+buttonStyle} />
                <button onClick={() => setColor("cyan")} className={` from-cyan-600 to-cyan-800 `+buttonStyle} />
                <button onClick={() => setColor("blue")} className={` from-blue-600 to-blue-800 `+buttonStyle} />
                <button onClick={() => setColor("indigo")} className={` from-indigo-600 to-indigo-800 `+buttonStyle} />
                <button onClick={() => setColor("violet")} className={` from-violet-600 to-violet-800 `+buttonStyle} />
                <button onClick={() => setColor("purple")} className={` from-purple-600 to-purple-800 `+buttonStyle} />
                <button onClick={() => setColor("fuchsia")} className={` from-fuchsia-600 to-fuchsia-800 `+buttonStyle} />
                <button onClick={() => setColor("pink")} className={` from-pink-600 to-pink-800 `+buttonStyle} />
                <button onClick={() => setColor("rose")} className={` from-rose-600 to-rose-800 `+buttonStyle} />
            </div>
            <button 
                onClick={() => handleToggleDarkMode()}
                className="bg-gray-100 dark:bg-gray-800 rounded-full p-2"
            >
                Toggle Dark Mode
            </button>
        </div>
    )
}