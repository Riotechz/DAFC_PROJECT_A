const HomePage = () => {
    return (
        <header
            className="relative flex items-center justify-center h-screen mb-12 overflow-hidden"
        >
            <div
                className="relative z-30 p-5 text-2xl text-white bg-gold-200 bg-opacity-50 rounded-xl"
            ><text className="">
                    <span>We are DAFC</span><hr />
                    <span>We are family</span>
                </text>
            </div>
            <video
                autoPlay
                loop
                muted
                className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
            >
                <source
                    src="https://dafc-cms.styleoutlet.vn/videos/video.mp4"
                    type="video/mp4"
                />
            </video>
        </header>
    )
}

export default HomePage