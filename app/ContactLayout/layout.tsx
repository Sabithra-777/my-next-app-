function ContactLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (                                                                                                                                        
     <div>
            <main className="flex min-h-screen flex-col items-center justify-between p-24"> 
                {children}
            </main>
        </div>
    )
}
export default ContactLayout   