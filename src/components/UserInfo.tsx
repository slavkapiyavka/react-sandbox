import React from "react"

type UserInfoProps = {
    name: string,
    age: number
}

const UserInfo = React.memo(({ name, age }: UserInfoProps) => {
    console.log('0_ UserInfo render');
    return (
        <div className="user-info">
            <p className="card__text">name: {name}</p>
            <p className="card__text">age: {age}</p>
        </div>
    )
})

export default UserInfo