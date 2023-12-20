const getWeekDay = () =>{
    return new Intl.DateTimeFormat('pt-BR', {weekday: 'long'}).format(new Date());
}

export const Person = () => {
    const data = {
        name: 'Elon Musk',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8oc4v5ZVUrnzyc94DOr-V4YvzEHHYLayoYgDPaDCOhPycTWxOi8xHbNobNpWNW-2VHAM',
        roles: ['CEO da Tesla', 'CEO da SpaceX']
    }




    return(
        <>
            <h1 
            style={{
                color: 'red', 
                fontSize: '30px'
            }}>
                {data.name} - {getWeekDay()}
            </h1>
            <img 
            src={data.avatar} 
            alt={data.name}
            className = "w-40"

            />
            <ul>
                <li>{data.roles[0]}</li>
                <li>{data.roles[1]}</li>
            </ul>
        </>
    );
}