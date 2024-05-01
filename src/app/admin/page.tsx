import { auth } from "@/lib/auth"

export default async function Page() {

    const session = await auth()

    if (!session) {
        return <div>UnAuthorized</div>
    }

    if (session.user?.email !== 'fajardwiutomo01@gmail.com') {
        return <div>Kamu bukan admin, kamu ga boleh masuk</div>
    }

    return (
        <div> Ini adalah Halaman Admin </div>
    )
}
