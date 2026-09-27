
const loading = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center">
            <span className="loading loading-spinner loading-xl scale-200 text-[#C2F800]"></span>

            <p className="mt-5 text-sm text-gray-400">
                My Plan Loading...
            </p>
        </div>
    )
}

export default loading