function Profile({img, name}){
    return( 
        <>
            <img src={img} alt="" />
            <h1 className="profile-name">{name}</h1>
        </>
)
}


export default Profile