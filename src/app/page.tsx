import teams from './teams.json'
import students from './students.json'



export default function Home() {
    return (
        <main className="flex flex-col w-full items-center justify-center gap-8 row-start-2 sm:items-start">

            <div className="flex flex-col w-full h-screen justify-between py-12">

                <section className="flex flex-col w-full items-center">
                    <div className="flex justify-between w-full px-44">
                        <div className="flex items-center">
                            <img src='/bsu.png' className="h-28" />
                        </div>
                        <div className="flex items-center">
                            <img src='/sabah.svg' className="h-28" />
                        </div>
                    </div>
                </section>

                <section className="flex flex-col items-center w-full">
                    <div className="flex flex-col w-fit text-center">
                        <h2 className="text-xl font-bold tracking-widest" style={{ color: "#3c3c4399" }}>BAKI DÖVLƏT UNİVERSİTETİ</h2>
                        <h2 className="text-6xl font-semibold mt-2 mb-5" style={{ backgroundImage: "linear-gradient(45deg, #0083bf 0%, #009b4d 100%)", color: "transparent", backgroundClip: "text" }}>SABAH Qrupları</h2>
                        <h2 className="font-medium" style={{ fontSize: 40, color: "#3c3c4399" }}>Kompüter Elmləri</h2>
                    </div>
                </section>

                <section className="flex flex-col w-full text-center gap-2.5">
                    <img src="/timeline.svg" />
                </section>

            </div>


            <section className="flex flex-col w-full items-center">
                <div className="flex gap-5">
                    <div className="flex flex-col gap-5">
                        <div className="flex items-center justify-center rounded-xl w-32 h-32 bg-green-400 text-center">
                            <h3 className="text-xl font-semibold">1 DAAD Təqaüdü Qalibi</h3>
                        </div>
                        <div className="flex items-center justify-center rounded-xl w-32 h-32 bg-green-400 text-center">
                            <h3 className="text-xl font-semibold">1 Əlaçı Təqaüdü Qalibi</h3>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-5">
                        <div className="flex items-center justify-center rounded-xl w-48 h-24 bg-green-400">
                            <h3 className="text-2xl font-semibold">384 Tələbə</h3>
                        </div>
                        <div className="flex items-center justify-center rounded-xl w-32 h-16 bg-blue-300">
                            <h3 className="text-xl font-semibold">SABAH</h3>
                        </div>
                        <div className="flex items-center justify-center rounded-xl w-48 h-24 bg-green-400">
                            <h3 className="text-2xl font-semibold">211 Məzun</h3>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="flex items-center justify-center rounded-xl w-32 h-32 bg-green-400 text-center">
                            <h3 className="text-xl font-semibold">47 Fərqlənmə ilə bitirən məzun</h3>
                        </div>
                        <div className="flex items-center justify-center rounded-xl w-32 h-32 bg-green-400 text-center">
                            <h3 className="text-xl font-semibold">648 bal ən yüksək qəbul balı</h3>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col w-full items-center">
                <div className="mt-20 p-5 gap-5" style={{ display: "grid", width: 1000, gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
                    {students.map((s, index) => {
                        return (
                            <div className="flex flex-col w-72 h-256 rounded-xl bg-gray-100 overflow-hidden" key={index}>
                                <div className="">
                                    <img src={`/students/${s.id}.jpg`} alt="" />
                                </div>
                                <div className="flex flex-col p-5">
                                    <h2 className="text-lg">{s.name}</h2>
                                    <h4>{s.title}</h4>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>

            <section className="flex flex-col w-full items-center">
                <div className="mt-20 p-5 gap-5" style={{ display: "grid", width: 1000, gridTemplateColumns: "repeat(auto-fit, minmax(900px, 1fr))" }}>
                    {teams.map((team, index) => {
                        return (
                            <div className="flex w-216 h-256 gap-10 p-5 rounded-xl bg-gray-100 overflow-hidden" key={index}>
                                <div className="flex flex-col">
                                    <h4 className="text-xl">{team.title}</h4>
                                    <h6 className="mt-5">{team.details}</h6>
                                </div>
                                <div className="flex flex-col gap-5">
                                    {team.images.map((img, index) => <img src={`/teams/${img}`} alt="" key={index} />)}
                                </div>
                            </div>
                        )
                    })}

                </div>
            </section>

        </main>
    )
}