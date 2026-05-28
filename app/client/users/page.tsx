'use client'
// adding this line will treat it as a
// client component
import Link from 'next/link';

import {useState, useEffect} from 'react';

type User = {
    id: number,
    firstName: string,
    lastName: string,
}

function UsersPage(){
    const [users, setUsers] = useState<User[]>([]);
    useEffect(() => {
        fetch("https://dummyjson.com/users")
            .then((res) => res.json())
            .then((data) => setUsers(data.users));
    }, []);
    return (
        <>
        <h1>Users: </h1>
        {
            users.map((user) => (
                <div key={user.id}>
                    {/* <h2>{user.firstName}</h2> */}
                    <Link href={`/client/users/${user.id}`}>
                    {user.firstName}
                    </Link>
                </div>
            ))
        }
        </>
    )
}

export default UsersPage;