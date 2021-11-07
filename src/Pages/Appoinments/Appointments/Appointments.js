import React from 'react'
import AvailableAppoinments from '../AvailableAppoinments/AvailableAppoinments'
import Banner from '../Banner/Banner';

const Appointments = () => {
    const [value, setValue] = React.useState(new Date());

    return (
        <>
            <Banner value={value} setValue={setValue}/>
            <AvailableAppoinments value={value} setValue={setValue} />
        </>
    )
}

export default Appointments
