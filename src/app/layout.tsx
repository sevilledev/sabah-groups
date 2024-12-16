import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'


const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
})

export const metadata: Metadata = {
    title: "SABAH Groups",
    description: "Computer Science Students",
}


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={inter.className} style={{
                backgroundColor: "hsla(180,1%,97%,1)",
                backgroundImage: `radial-gradient(at 81% 65%, hsla(218,98%,94%,1) 0px, transparent 50%),
                    radialGradient(at 95% 99%, hsla(39,95%,94%,1) 0px, transparent 50%),
                    radialGradient(at 48% 26%, hsla(271,77%,94%,1) 0px, transparent 50%),
                    radialGradient(at 75% 26%, hsla(197,87%,94%,1) 0px, transparent 50%)`,
                backgroundSize: "500% 500%",
                animation: "gradient 9s ease infinite"
            }}>
                {children}
            </body>
        </html>
    )
}
