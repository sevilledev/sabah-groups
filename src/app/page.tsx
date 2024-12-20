import teams from './teams.json'
import students from './students.json'



export default function Home() {
    return (
        <main className="flex flex-col w-full items-center justify-center pb-40 gap-8 row-start-2 sm:items-start">

            <div className="flex flex-col w-full h-screen justify-between pt-5 pb-20 lg:py-12">

                <section className="flex flex-col w-full items-center">
                    <div className="flex justify-between w-full px-5 lg:px-44">
                        <div className="flex items-center">
                            <img src='/bsu.png' className="h-20 lg:h-28" />
                        </div>
                        <div className="flex items-center">
                            <img src='/sabah.svg' className="h-20 lg:h-28" />
                        </div>
                    </div>
                </section>

                <section className="flex flex-col items-center w-full">
                    <div className="flex flex-col w-fit text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold tracking-widest" style={{ color: "#3c3c4399" }}>BAKI DÖVLƏT UNİVERSİTETİ</h2>
                        <h2 className="text-4xl lg:text-6xl font-semibold mt-2 mb-5" style={{ backgroundImage: "var(--gradient)", color: "transparent", backgroundClip: "text" }}>SABAH Qrupları</h2>
                        <h2 className="text-3xl lg:text-[40px] font-medium" style={{ color: "#3c3c4399" }}>Kompüter Elmləri</h2>
                    </div>
                </section>

                <section className="flex flex-col w-full text-center gap-2.5">
                    <img src="/timeline.svg" />
                </section>

            </div>


            <section className="flex flex-col items-center w-full mt-32">
                <div className="flex flex-col lg:flex-row w-full lg:w-2/3 lg:h-[30vw] gap-5 p-5">
                    <div className="flex flex-col w-full h-full gap-5">
                        <div className="flex flex-col  py-16 lg:py-5 py-16 lg:py-5 rounded-xl text-center" style={{ backgroundColor: "var(--bg-3)" }}>
                            <h1 className='font-semibold text-7xl' style={{ backgroundImage: "var(--gradient)", color: "transparent", backgroundClip: "text" }}>1</h1>
                            <h3 className="text-xl leading-tight font-semibold">DAAD Təqaüdü Qalibi</h3>
                        </div>
                        <div className="flex flex-col items-center justify-center w-full h-full p-5 py-16 lg:py-5 rounded-xl text-center" style={{ backgroundColor: "var(--bg-3)" }}>
                            <h1 className='font-semibold text-7xl' style={{ backgroundImage: "var(--gradient)", color: "transparent", backgroundClip: "text" }}>1</h1>
                            <h3 className="text-xl leading-tight font-semibold">Əlaçı Təqaüdü Qalibi</h3>
                        </div>
                    </div>
                    <div className="flex flex-col w-full h-full items-center gap-5">
                        <div className="flex flex-col items-center justify-center w-full h-full p-5 py-16 lg:py-5 rounded-xl" style={{ backgroundColor: "var(--bg-3)" }}>
                            <h1 className='font-semibold text-7xl' style={{ backgroundImage: "var(--gradient)", color: "transparent", backgroundClip: "text" }}>487</h1>
                            <h3 className="text-2xl leading-tight font-semibold">Tələbə</h3>
                        </div>
                        <div className="flex flex-col relative items-center justify-center w-full h-full p-5 py-16 lg:py-5 rounded-xl overflow-hidden" style={{ backgroundColor: "var(--bg-3)" }}>
                            <div className='flex absolute opacity-40'>
                                <img src="/sabah.svg" className="h-44" alt="" />
                            </div>
                            <h1 className='font-semibold text-7xl z-10' style={{ backgroundImage: "var(--gradient)", color: "transparent", backgroundClip: "text" }}>SABAH</h1>
                        </div>
                        <div className="flex flex-col items-center justify-center w-full h-full p-5 py-16 lg:py-5 rounded-xl" style={{ backgroundColor: "var(--bg-3)" }}>
                            <h1 className='font-semibold text-7xl' style={{ backgroundImage: "var(--gradient)", color: "transparent", backgroundClip: "text" }}>239</h1>
                            <h3 className="text-2xl leading-tight font-semibold">Məzun</h3>
                        </div>
                    </div>
                    <div className="flex flex-col w-full h-full gap-5">
                        <div className="flex flex-col items-center justify-center w-full h-full p-5 py-16 lg:py-5 rounded-xl text-center" style={{ backgroundColor: "var(--bg-3)" }}>
                            <h1 className='font-semibold text-7xl' style={{ backgroundImage: "var(--gradient)", color: "transparent", backgroundClip: "text" }}>47</h1>
                            <h3 className="text-xl leading-tight font-semibold">Fərqlənmə ilə bitirən məzun</h3>
                        </div>
                        <div className="flex flex-col items-center justify-center w-full h-full p-5 py-16 lg:py-5 rounded-xl text-center" style={{ backgroundColor: "var(--bg-3)" }}>
                            <h1 className='font-semibold text-7xl' style={{ backgroundImage: "var(--gradient)", color: "transparent", backgroundClip: "text" }}>648</h1>
                            <h3 className="text-xl leading-tight font-semibold">Ən yüksək qəbul balı</h3>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col w-full items-center mt-32">
                <div className="w-full lg:w-[1040px] mt-20 gap-10 p-5" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
                    {students.map((s, index) => {
                        return (
                            <div className="group flex flex-col relative h-256 rounded-xl overflow-hidden transition-all cursor-pointer" style={{ backgroundColor: "var(--bg-3)" }} key={index}>
                                <div className="">
                                    <img src={`/students/${s.id}.jpg`} className="aspect-square object-cover" alt="" />
                                </div>
                                <div className="flex flex-col p-5">
                                    <h2 className="text-lg font-semibold">{s.name}</h2>
                                    <h4 className="leading-snug mt-1" style={{ color: "var(--text-2)" }} >{s.title}</h4>
                                </div>
                                <div className='opacity-0 group-hover:opacity-100 flex absolute w-full h-full p-5 transition-all' style={{ backgroundColor: "var(--mt-3)", backdropFilter: "saturate(180%) blur(20px)" }}>
                                    <p className='text-xs whitespace-pre-wrap'>{s.details}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>

            <section className="flex flex-col w-full items-center mt-48">
                <div className="flex flex-col w-full lg:w-[1000px] gap-14 p-5">
                    {teams.map((team, index) => {
                        return (
                            <div className="flex flex-col lg:flex-row lg:h-1/4 gap-10 p-5 rounded-xl" style={{ backgroundColor: "var(--bg-3)" }} key={index}>
                                <div className="flex flex-col lg:w-2/3">
                                    <h4 className="text-2xl font-semibold">{team.title}</h4>
                                    <h6 className="text-sm font-normal mt-4 whitespace-pre-wrap">{team.details}</h6>
                                </div>
                                <div className="flex flex-col lg:w-1/3 gap-5 lg:h-96 overflow-y-scroll">
                                    {team.images.map((img, index) => <img src={`/teams/${img}`} className="w-full rounded-md" alt="" key={index} />)}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>

        </main>
    )
}